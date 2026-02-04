'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileCheck, UserCheck, AlertTriangle, Mail, ScrollText } from 'lucide-react';
import PageHero from '@/components/PageHero';

const sections = [
    {
        icon: <FileCheck className="w-5 h-5" />,
        title: '1. Agreement to Terms',
        content: 'These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Texoma Cricket League ("we," "us," or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").',
    },
    {
        icon: <Scale className="w-5 h-5" />,
        title: '2. Intellectual Property Rights',
        content: 'Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.',
    },
    {
        icon: <UserCheck className="w-5 h-5" />,
        title: '3. User Representations',
        content: 'By using the Site, you represent and warrant that:',
        list: [
            'All registration information you submit will be true, accurate, current, and complete.',
            'You will maintain the accuracy of such information and promptly update such registration information as necessary.',
            'You have the legal capacity and you agree to comply with these Terms of Service.',
            'You are not a minor in the jurisdiction in which you reside.',
        ],
    },
    {
        icon: <AlertTriangle className="w-5 h-5" />,
        title: '4. Prohibited Activities',
        content: 'You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.',
    },
    {
        icon: <Mail className="w-5 h-5" />,
        title: '5. Contact Us',
        content: 'In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at support@texomacricket.com.',
    },
];

export default function TermsPage() {
    return (
        <div className="bg-bg-light min-h-screen">
            <PageHero
                title="Terms of Service"
                description="Please read these terms carefully before using our services."
                image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=95&w=2000"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Terms of Service', active: true }
                ]}
                align="center"
            />

            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
                    {/* Last Updated Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-3 mb-12"
                    >
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                            <ScrollText className="w-5 h-5 text-secondary" />
                        </div>
                        <p className="font-body text-primary/60 text-sm">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </motion.div>

                    {/* Terms Sections */}
                    <div className="space-y-8">
                        {sections.map((section, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-8 lg:p-10 border border-primary/[0.06] shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0">
                                        <span className="text-primary">{section.icon}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="font-heading text-xl lg:text-2xl font-bold text-primary mb-4">
                                            {section.title}
                                        </h2>
                                        <p className="font-body text-primary/70 leading-relaxed mb-4">
                                            {section.content}
                                        </p>
                                        {section.list && (
                                            <ul className="space-y-3 mt-4">
                                                {section.list.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                                        <span className="font-body text-primary/65 text-sm leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 p-8 bg-primary rounded-2xl text-center"
                    >
                        <h3 className="font-heading text-xl text-white font-bold mb-3">Need Clarification?</h3>
                        <p className="font-body text-white/70 mb-6">Our team is available to answer any questions about our terms.</p>
                        <a
                            href="mailto:support@texomacricket.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-primary font-heading font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-secondary/90 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            Contact Us
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
