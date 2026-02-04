'use client';

import React from 'react';
import { Shield, Lock, Eye, Database, Mail, FileText } from 'lucide-react';
import PageHero from '@/components/PageHero';

const sections = [
    {
        icon: <FileText className="w-5 h-5" />,
        title: '1. Introduction',
        content: 'Welcome to the Texoma Cricket League ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.',
    },
    {
        icon: <Database className="w-5 h-5" />,
        title: '2. Information We Collect',
        content: 'We collect personal information that you voluntarily provide to us when registering at the Website, expressing an interest in obtaining information about us or our products and services, when participating in activities on the Website or otherwise contacting us.',
        list: [
            'Name and Contact Data (email address, phone number, etc.)',
            'Credentials (passwords, etc.)',
            'Payment Data (processed securely by our payment processors)',
        ],
    },
    {
        icon: <Eye className="w-5 h-5" />,
        title: '3. How We Use Your Information',
        content: 'We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.',
        list: [
            'To facilitate account creation and logon process.',
            'To send administrative information to you.',
            'To fulfill and manage your orders.',
            'To post testimonials.',
            'To request feedback.',
        ],
    },
    {
        icon: <Lock className="w-5 h-5" />,
        title: '4. Sharing Your Information',
        content: 'We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.',
    },
    {
        icon: <Mail className="w-5 h-5" />,
        title: '5. Contact Us',
        content: 'If you have questions or comments about this policy, you may email us at support@texomacricket.com.',
    },
];

export default function PrivacyPage() {
    return (
        <div className="bg-bg-light min-h-screen">
            <PageHero
                title="Privacy Policy"
                description="Your privacy matters to us. Learn how we protect your data."
                image="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=95&w=2000"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Privacy Policy', active: true }
                ]}
                align="center"
            />

            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
                    {/* Last Updated Notice */}
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-secondary" />
                        </div>
                        <p className="font-body text-primary/60 text-sm">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-8">
                        {sections.map((section, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-8 lg:p-10 border border-primary/[0.06] shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/15 to-secondary/5 flex items-center justify-center flex-shrink-0">
                                        <span className="text-secondary">{section.icon}</span>
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
                            </div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-12 p-8 bg-primary rounded-2xl text-center">
                        <h3 className="font-heading text-xl text-white font-bold mb-3">Have Questions?</h3>
                        <p className="font-body text-white/70 mb-6">We're here to help with any privacy concerns.</p>
                        <a
                            href="mailto:support@texomacricket.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-primary font-heading font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-secondary/90 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
