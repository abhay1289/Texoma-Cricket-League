'use client';

import React, { useState } from 'react';
import {
    Mail, Phone, Send, MapPin,
    CheckCircle2
} from 'lucide-react';
import PageHero from '@/components/PageHero';

const ContactForm = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => setStatus('success'), 1500);
    };

    if (status === 'success') {
        return (
            <div className="bg-white p-12 rounded-super shadow-super border border-primary/5 text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} />
                </div>
                <h3 className="font-heading text-3xl text-primary uppercase font-bold mb-4">Message Sent</h3>
                <p className="font-body text-text-dark/60 mb-8">We'll respond within 24 hours.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-secondary font-bold font-subheading tracking-widest uppercase text-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                >
                    Send Another
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white p-10 md:p-14 rounded-super shadow-elevated border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
            <h3 className="font-heading text-3xl text-primary font-black uppercase mb-10">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label htmlFor="contact-first-name" className="text-xs uppercase font-bold tracking-widest text-primary/40">First Name</label>
                        <input id="contact-first-name" name="firstName" required type="text" className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors" placeholder="John" autoComplete="given-name" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="contact-last-name" className="text-xs uppercase font-bold tracking-widest text-primary/40">Last Name</label>
                        <input id="contact-last-name" name="lastName" required type="text" className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors" placeholder="Doe" autoComplete="family-name" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs uppercase font-bold tracking-widest text-primary/40">Email Address</label>
                    <input id="contact-email" name="email" required type="email" className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors" placeholder="john@example.com" autoComplete="email" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs uppercase font-bold tracking-widest text-primary/40">Message</label>
                    <textarea id="contact-message" name="message" required rows={4} className="w-full bg-bg-light border-b-2 border-primary/10 p-4 font-body focus:border-secondary outline-none transition-colors resize-none" placeholder="How can we help?" />
                </div>

                <button
                    disabled={status === 'loading'}
                    className="w-full py-5 bg-primary text-white font-subheading font-bold tracking-[0.2em] uppercase rounded-lg hover:bg-accent transition-all shadow-lg flex items-center justify-center gap-3 cursor-pointer focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'loading' ? 'Sending...' : <>Send Message <Send size={16} /></>}
                </button>
            </form>
        </div>
    );
};

const ContactInfo = () => (
    <div className="space-y-8">
        {[
            {
                icon: <Mail size={24} />,
                title: "Email Us",
                content: "Coming Soon",
                sub: "Response within 2 hrs",
                bg: "bg-blue-50 text-blue-600"
            },
            {
                icon: <Phone size={24} />,
                title: "Call Us",
                content: "Coming Soon",
                sub: "Mon-Sat, 9am-6pm",
                bg: "bg-green-50 text-green-600"
            },
            {
                icon: <MapPin size={24} />,
                title: "Visit HQ",
                content: "Coming Soon",
                sub: "Pottsboro, TX 75076",
                bg: "bg-orange-50 text-orange-600"
            }
        ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-elevated border border-gray-100 flex items-start gap-6 hover:translate-y-[-4px] transition-transform duration-300">
                <div className={`p-4 rounded-xl ${item.bg}`}>
                    {item.icon}
                </div>
                <div>
                    <h4 className="font-heading text-lg text-primary font-bold uppercase mb-1">{item.title}</h4>
                    <p className="font-heading text-xl text-text-dark font-medium mb-1">{item.content}</p>
                    <p className="font-body text-sm text-text-dark/40 italic">{item.sub}</p>
                </div>
            </div>
        ))}
    </div>
);

const MapSection = () => (
    <div className="w-full h-[400px] md:h-[500px] rounded-super overflow-hidden shadow-elevated border border-gray-100 relative grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
        <iframe
            title="Texoma Cricket League headquarters location - Pottsboro, TX 75076"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106684.97632646274!2d-96.78066695666072!3d33.786523999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8635532d80d2858b%3A0xe24754388856637e!2sPottsboro%2C%20TX%2075076!5e0!3m2!1sen!2sus!4v1705537552943!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm border border-gray-200">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Headquarters</span>
        </div>
    </div>
);

export default function ContactPage() {
    return (
        <div className="bg-bg-cream min-h-screen">
            <PageHero
                title="Connect With Us"
                description="Have questions about the league, registration, or partnership opportunities? We're here to help you succeed."
                image="/contact-hero.png"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Contact', active: true }
                ]}
                align="center"
            />

            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto mb-24 items-center">
                    <div className="lg:w-3/5">
                        <ContactForm />
                    </div>
                    <div className="lg:w-2/5">
                        <ContactInfo />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto">
                    <h3 className="font-heading text-2xl text-primary font-bold uppercase mb-8 text-center">Visit Our Facilities</h3>
                    <MapSection />
                </div>
            </section>
        </div>
    );
}
