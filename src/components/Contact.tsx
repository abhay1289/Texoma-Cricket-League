'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Clock, Send, Globe } from 'lucide-react';

const ContactInfoItem = ({ icon, title, detail, sub }: { icon: React.ReactNode; title: string; detail: string; sub: string }) => (
    <div className="flex items-start gap-4 group">
        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <div>
            <h4 className="font-heading text-base text-primary mb-1 font-bold">{title}</h4>
            <p className="font-body text-text-dark/80 text-sm leading-tight mb-0.5">{detail}</p>
            <p className="font-body text-text-dark/40 text-xs">{sub}</p>
        </div>
    </div>
);

const ContactDetails = () => (
    <div>
        <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-secondary" />
            <span className="font-heading tracking-[0.2em] text-secondary text-xs font-bold uppercase">Contact</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary mb-6 leading-tight tracking-tight">
            Get In <span className="text-secondary">Touch</span>
        </h2>
        <div className="space-y-5">
            <ContactInfoItem icon={<Globe size={20} />} title="Location" detail="Coming Soon" sub="Lake Texoma Region" />
            <ContactInfoItem icon={<Clock size={20} />} title="Hours" detail="Coming Soon" sub="Open 7 Days a Week" />
            <ContactInfoItem icon={<Phone size={20} />} title="Phone" detail="Coming Soon" sub="Call or Text" />
        </div>
        <div className="mt-8 h-40 w-full relative group overflow-hidden rounded-lg shadow-lg">
            <Image src="/about-facility.png" fill className="object-cover transition-transform duration-700 group-hover:scale-105" alt="Texoma Cricket Facility" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
        </div>
    </div>
);

const FormInput = ({ label, type }: { label: string; type: string }) => (
    <div className="relative group">
        <input type={type} className="w-full bg-transparent border-b border-primary/20 py-4 outline-none focus:border-secondary transition-colors font-body text-base peer text-primary" placeholder=" " />
        <label className="absolute left-0 top-4 text-text-dark/50 font-heading text-xs tracking-widest uppercase font-semibold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-secondary peer-[:not(:placeholder-shown)]:-top-5">
            {label}
        </label>
    </div>
);

const ContactForm = () => (
    <div className="bg-bg-light p-6 sm:p-8 md:p-10 shadow-lg rounded-lg h-full flex flex-col justify-center">
        <h3 className="font-heading text-xl sm:text-2xl text-primary mb-6 tracking-tight font-bold">Send a Message</h3>
        <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormInput label="Full Name" type="text" />
                <FormInput label="Email" type="email" />
            </div>
            <div className="relative group">
                <select className="w-full bg-transparent border-b border-primary/20 py-3 outline-none focus:border-secondary transition-colors font-body text-sm appearance-none cursor-pointer text-primary">
                    <option>General Inquiry</option>
                    <option>Corporate Partnership</option>
                    <option>Media</option>
                </select>
                <label className="absolute left-0 -top-5 text-secondary font-heading text-xs tracking-widest uppercase font-bold">Subject</label>
            </div>
            <div className="relative group">
                <textarea rows={3} className="w-full bg-transparent border-b border-primary/20 py-3 outline-none focus:border-secondary transition-colors font-body text-sm resize-none" placeholder=" "></textarea>
                <label className="absolute left-0 top-3 text-text-dark/40 font-heading text-xs tracking-widest uppercase font-bold transition-all">Message</label>
            </div>
            <button className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-white font-heading font-bold text-sm tracking-wider rounded-lg shadow-md hover:bg-secondary hover:text-primary transition-all group duration-300">
                Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
        </form>
    </div>
);

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-bg-cream/30 -z-0"></div>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                    <div className="lg:w-1/2"><ContactDetails /></div>
                    <div className="lg:w-1/2"><ContactForm /></div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
