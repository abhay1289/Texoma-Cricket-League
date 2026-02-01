'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Clock, Send, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactInfoItem = ({ icon, title, detail, sub }: { icon: React.ReactNode; title: string; detail: string; sub: string }) => (
    <div className="flex items-start gap-6">
        <div className="w-12 h-12 bg-bg-light rounded-lg flex items-center justify-center text-secondary border border-primary/5 flex-shrink-0">
            {icon}
        </div>
        <div>
            <h4 className="font-heading text-lg text-primary mb-1 tracking-tight">{title}</h4>
            <p className="font-body text-text-dark/80 text-base leading-tight mb-1">{detail}</p>
            <p className="font-body text-text-dark/40 text-xs">{sub}</p>
        </div>
    </div>
);

const ContactDetails = () => (
    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-[1px] bg-secondary" />
            <span className="font-heading tracking-[0.2em] sm:tracking-[0.3em] text-secondary text-[10px] sm:text-[11px] font-semibold uppercase">Contact</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-8 sm:mb-10 leading-tight tracking-tight">Get In <span className="text-secondary font-medium">Touch</span></h2>
        <div className="space-y-6 sm:space-y-8">
            <ContactInfoItem icon={<Globe size={16} className="sm:w-[18px] sm:h-[18px]" />} title="Location" detail="Coming Soon" sub="Lake Texoma Region" />
            <ContactInfoItem icon={<Clock size={16} className="sm:w-[18px] sm:h-[18px]" />} title="Hours" detail="Coming Soon" sub="Open 7 Days a Week" />
            <ContactInfoItem icon={<Phone size={16} className="sm:w-[18px] sm:h-[18px]" />} title="Phone" detail="Coming Soon" sub="Call or Text" />
        </div>
        <div className="mt-8 sm:mt-12 h-40 sm:h-48 w-full relative group overflow-hidden opacity-60 hover:opacity-100 transition-all duration-500 shadow-card rounded-xl">
            <Image src="/about-facility.png" fill className="object-cover transition-transform duration-700 group-hover:scale-105" alt="Texoma Cricket Facility" />
        </div>
    </motion.div>
);

const FormInput = ({ label, type }: { label: string; type: string }) => (
    <div className="relative group">
        <input type={type} className="w-full bg-transparent border-b border-primary/20 py-4 outline-none focus:border-secondary transition-colors font-body text-base peer text-primary" placeholder=" " />
        <label className="absolute left-0 top-4 text-text-dark/50 font-heading text-[10px] tracking-widest uppercase font-semibold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-secondary peer-[:not(:placeholder-shown)]:-top-5">
            {label}
        </label>
    </div>
);

const ContactForm = () => (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }} viewport={{ once: true }} className="bg-bg-light p-6 sm:p-10 md:p-14 shadow-elevated relative border border-primary/5 rounded-xl sm:rounded-2xl h-full flex flex-col justify-center">
        <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-primary mb-8 sm:mb-10 tracking-tight">Send a Message</h3>
        <form className="space-y-6 sm:space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <FormInput label="Full Name" type="text" />
                <FormInput label="Email" type="email" />
            </div>
            <div className="relative group">
                <select className="w-full bg-transparent border-b border-primary/10 py-3 sm:py-4 outline-none focus:border-secondary transition-colors font-body text-sm sm:text-base appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Corporate Partnership</option>
                    <option>Media</option>
                </select>
                <label className="absolute left-0 -top-5 text-text-dark/40 font-heading text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold">Subject</label>
            </div>
            <div className="relative group">
                <textarea rows={3} className="w-full bg-transparent border-b border-primary/10 py-3 sm:py-4 outline-none focus:border-secondary transition-colors font-body text-sm sm:text-base resize-none" placeholder=" "></textarea>
                <label className="absolute left-0 top-3 sm:top-4 text-text-dark/40 font-heading text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-secondary">Message</label>
            </div>
            <button className="flex items-center justify-center gap-3 sm:gap-4 w-full py-3.5 sm:py-4 bg-primary text-white font-heading font-semibold text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase rounded-lg shadow-card hover:bg-secondary transition-all group duration-300 active:scale-[0.98]">
                <span>Send Message</span>
                <Send size={13} className="sm:w-[14px] sm:h-[14px] group-hover:translate-x-1 transition-transform duration-300" />
            </button>
        </form>
    </motion.div>
);

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-20">
                    <div className="lg:w-1/2"><ContactDetails /></div>
                    <div className="lg:w-1/2"><ContactForm /></div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

