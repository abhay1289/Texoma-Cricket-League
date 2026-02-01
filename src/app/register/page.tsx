'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Check, X, Users, Trophy, Target, Shield, Star, Award,
    FileText, Search, Layers, Rocket, Building2, ArrowRight,
    MapPin, Zap, Medal, Clock, ChevronDown, Sparkles, Crown, TrendingUp
} from 'lucide-react';
import PageHero from '@/components/PageHero';

// Partner vs Non-Partner Comparison Data
const partnerComparison: Array<{
    feature: string;
    partner: string;
    nonPartner: string;
    partnerCheck: boolean;
    nonPartnerCheck: boolean | 'limited';
}> = [
        { feature: 'Access to TCL tournaments', partner: 'Priority access', nonPartner: 'Limited / event-by-event', partnerCheck: true, nonPartnerCheck: 'limited' },
        { feature: 'Eligibility for regional qualifiers', partner: 'Included', nonPartner: 'Not eligible', partnerCheck: true, nonPartnerCheck: false },
        { feature: 'Eligibility for national championships', partner: 'Included (via pathway)', nonPartner: 'Not eligible', partnerCheck: true, nonPartnerCheck: false },
        { feature: 'Registration window', partner: 'Early / priority', nonPartner: 'Standard (if space allows)', partnerCheck: true, nonPartnerCheck: 'limited' },
        { feature: 'Participation in TCL pathway', partner: 'Full access', nonPartner: 'Not included', partnerCheck: true, nonPartnerCheck: false },
        { feature: 'Academy recognition on TCL platforms', partner: 'Listed / Featured', nonPartner: '—', partnerCheck: true, nonPartnerCheck: false },
        { feature: 'Use of TCL Academy Partner badge', partner: 'Yes', nonPartner: '—', partnerCheck: true, nonPartnerCheck: false },
        { feature: 'Access to standardized rules & formats', partner: 'Full access', nonPartner: 'Limited', partnerCheck: true, nonPartnerCheck: 'limited' },
        { feature: 'Preferred access to Sports Texoma facilities', partner: 'Yes (availability-based)', nonPartner: '—', partnerCheck: true, nonPartnerCheck: false },
        { feature: 'Eligibility for high-performance camps & combines', partner: 'Priority consideration', nonPartner: '—', partnerCheck: true, nonPartnerCheck: false },
        { feature: 'Elite training experiences with visiting coaches', partner: 'Eligible (as announced)', nonPartner: '—', partnerCheck: true, nonPartnerCheck: false },
        { feature: 'National rankings & recognition', partner: 'Included', nonPartner: '—', partnerCheck: true, nonPartnerCheck: false },
        { feature: 'Direct communication with TCL leadership', partner: 'Yes', nonPartner: '—', partnerCheck: true, nonPartnerCheck: false },
        { feature: 'Long-term participation & upgrade pathway', partner: 'Yes', nonPartner: '—', partnerCheck: true, nonPartnerCheck: false },
    ];

// Partner Tier Overview - detailed benefits by tier
const partnerTierOverview = [
    { benefit: 'Priority tournament registration', founding: 'Highest priority', national: 'Priority', regional: 'Standard priority', development: '—' },
    { benefit: 'Eligibility for Regional Qualifiers', founding: true, national: true, regional: true, development: false },
    { benefit: 'Eligibility for National Championships', founding: true, national: true, regional: 'Qualify', development: false },
    { benefit: 'TCL Academy Partner recognition', founding: 'Featured', national: 'Listed', regional: 'Listed', development: 'Listed' },
    { benefit: 'Match Recordings / Analytics', founding: true, national: true, regional: 'Add-On', development: 'Add-On' },
    { benefit: 'Advisory input on formats & calendar', founding: true, national: false, regional: false, development: false },
    { benefit: 'National rankings & recognition', founding: true, national: true, regional: 'Limited', development: false },
    { benefit: 'Annual Gala Event', founding: true, national: true, regional: 'Limited', development: false },
    { benefit: 'Special Group accommodation rates', founding: true, national: true, regional: 'Limited', development: false },
];

// Facilities & High-Performance Camps Access
const facilitiesAccess = [
    { benefit: 'Preferred access to All Turf grounds & facilities (TCL events, training blocks, championships)', founding: 'Priority access', national: 'Subject to availability', regional: 'Limited', development: false },
    { benefit: 'Priority consideration for high-performance camps, combines & showcases', founding: 'First priority', national: 'Priority', regional: 'Limited', development: false },
    { benefit: 'Elite training experiences with visiting coaches & staff', founding: true, national: true, regional: 'By invitation', development: false },
    { benefit: 'Access to centralized, All Turf-quality playing surfaces', founding: true, national: true, regional: '(event-based)', development: 'Limited' },
];

// Membership Tiers
const membershipTiers = [
    {
        name: 'Founding Partner',
        price: '$2,500',
        period: '/ year',
        description: 'Established academies committing early to TCL\'s national vision',
        badge: 'Most Popular',
        icon: <Crown className="w-6 h-6" />,
        features: ['Highest priority registration', 'Featured recognition', 'Match recordings included', 'Advisory input on formats', 'Annual Gala Event access', 'Special group accommodation'],
    },
    {
        name: 'National Partner',
        price: '$1,800',
        period: '/ year',
        description: 'Academies competing consistently at a national level',
        badge: null,
        icon: <Trophy className="w-6 h-6" />,
        features: ['Priority registration', 'Listed recognition', 'Match recordings included', 'National rankings', 'Gala Event (limited)', 'Group accommodation (limited)'],
    },
    {
        name: 'Regional Partner',
        price: '$1,200',
        period: '/ year',
        description: 'Strong regional academies building toward national qualification',
        badge: null,
        icon: <Target className="w-6 h-6" />,
        features: ['Standard priority registration', 'Listed recognition', 'Match recordings (add-on)', 'Qualify for nationals', 'Limited gala access', 'Limited accommodation rates'],
    },
    {
        name: 'Development Partner',
        price: '$600',
        period: '/ year',
        description: 'Emerging academies focused on U11–U13 development',
        badge: 'Entry Level',
        icon: <TrendingUp className="w-6 h-6" />,
        features: ['Tournament access', 'Listed recognition', 'Match recordings (add-on)', 'Development pathway', '—', '—'],
    },
];

// How it works steps
const howItWorksSteps = [
    {
        step: 1,
        title: 'Apply',
        description: 'Submit an application with details about your academy, age groups, and competitive goals.',
        icon: <FileText size={24} />,
    },
    {
        step: 2,
        title: 'Review',
        description: 'TCL reviews applications based on player development focus, coaching structure, age-group depth, and alignment with TCL values.',
        icon: <Search size={24} />,
    },
    {
        step: 3,
        title: 'Placement',
        description: 'Accepted academies are placed into the appropriate partner tier: Founding, National, Regional, or Development.',
        icon: <Layers size={24} />,
    },
    {
        step: 4,
        title: 'Compete & Grow',
        description: 'Partner academies participate in TCL events, progress through pathways, and build long-term presence within the national TCL ecosystem.',
        icon: <Rocket size={24} />,
    },
];

// Why Academies Choose TCL
const whyChooseTCL = [
    { bold: 'A clear national competition pathway', text: 'connecting regional play to national championships' },
    { bold: 'Well-organized, professional tournaments', text: 'with consistent standards and execution' },
    { bold: 'Meaningful competition beyond local leagues', text: ', bringing teams together from across the country' },
    { bold: 'A platform built for long-term growth', text: ', not one-off events or isolated tournaments' },
    { bold: 'Alignment with a mission to make youth cricket a mainstream sport in America', text: '' },
];

// What fees pay for
const feesBenefits = [
    'Membership benefits as mentioned in the subscription',
    'Recognition as a TCL Academy Partner',
    'Consistent rules, officiating standards, and competition pathways',
    'Preferred access to Sports Texoma facilities and development opportunities',
    'Priority consideration for high-performance camps and showcases',
];

// Who the program is for
const idealFor = [
    'Field organized youth teams (U11–U19)',
    'Value structured, competitive development',
    'Seek national-level competition and exposure',
    'Believe in fair play, professionalism, and long-term growth',
    'Want clear pathways beyond local tournaments',
];

// You Gain Access To
const gainAccessTo = [
    { title: 'Priority Tournament Entry', desc: 'First access to all TCL regional tournaments and qualifiers', icon: <Trophy className="w-5 h-5" /> },
    { title: 'National Championships', desc: 'Clear eligibility pathways to TCL championship events', icon: <Medal className="w-5 h-5" /> },
    { title: 'Competition Standards', desc: 'Consistent rules, formats, and professional officiating', icon: <Shield className="w-5 h-5" /> },
    { title: 'National Visibility', desc: 'Results, rankings, and recognition across platforms', icon: <Star className="w-5 h-5" /> },
    { title: 'Direct Communication', desc: 'Access to TCL tournament leadership and support', icon: <Users className="w-5 h-5" /> },
];

// Premium floating shapes component
const FloatingShapes = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-secondary/[0.08] rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[60%] right-[10%] w-96 h-96 bg-primary/[0.05] rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[20%] left-[15%] w-64 h-64 bg-secondary/[0.06] rounded-full blur-[60px] animate-pulse" style={{ animationDuration: '5s' }} />
    </div>
);

// Premium pattern background
const PremiumPattern = () => (
    <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A3350' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }} />
);

// Animated gradient border
const GlowBorder = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`relative group ${className}`}>
        <div className="absolute -inset-[1px] bg-gradient-to-r from-secondary/50 via-secondary/20 to-secondary/50 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700" />
        <div className="absolute -inset-[1px] bg-gradient-to-r from-secondary/30 via-transparent to-secondary/30 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500" />
        {children}
    </div>
);

const CheckIcon: React.FC<{ status: boolean | 'limited' }> = ({ status }) => {
    if (status === true) return (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 shadow-[0_4px_12px_rgb(16,185,129,0.2)] border border-emerald-500/20">
            <Check className="text-emerald-500" size={16} />
        </span>
    );
    if (status === 'limited') return (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 shadow-[0_4px_12px_rgb(245,158,11,0.2)] border border-amber-500/20">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
        </span>
    );
    return (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-primary/[0.03] border border-primary/[0.06]">
            <X className="text-primary/20" size={16} />
        </span>
    );
};

export default function RegisterPage() {
    return (
        <div className="w-full bg-white">
            {/* Hero Header */}
            <PageHero
                title="Become a TCL Academy Partner"
                description="Join a national ecosystem built around competition, credibility, and progression"
                image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=95&w=2000"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Register', active: true }
                ]}
                align="center"
            />

            {/* Intro Section - Enterprise Grade */}
            <section className="py-32 lg:py-40 relative overflow-hidden">
                <FloatingShapes />
                <PremiumPattern />

                {/* Floating decorative elements */}
                <div className="absolute top-20 left-10 w-20 h-20 border border-secondary/10 rounded-2xl rotate-12 hidden lg:block" />
                <div className="absolute bottom-40 right-20 w-16 h-16 border border-primary/10 rounded-xl -rotate-12 hidden lg:block" />
                <div className="absolute top-1/2 left-[5%] w-2 h-20 bg-gradient-to-b from-secondary/20 to-transparent rounded-full hidden lg:block" />

                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-7"
                        >
                            {/* Premium badge */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-3 px-5 py-2.5 mb-10 rounded-full bg-gradient-to-r from-secondary/15 via-secondary/10 to-secondary/15 border border-secondary/20 shadow-[0_8px_32px_rgb(201,151,63,0.15)]"
                            >
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20">
                                    <Sparkles className="w-3.5 h-3.5 text-secondary" />
                                </span>
                                <span className="font-heading text-secondary font-bold uppercase tracking-[0.25em] text-[10px]">TCL Academy Partner Program</span>
                            </motion.div>

                            <h2 className="font-heading text-5xl lg:text-6xl xl:text-7xl text-primary font-bold leading-[0.95] tracking-[-0.03em] mb-8">
                                Partner with Youth Cricket Academies{' '}
                                <span className="relative inline-block">
                                    <span className="text-secondary">Nationwide</span>
                                    <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                                        <path d="M2 6C50 2 150 2 198 6" stroke="rgb(201,151,63)" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </h2>

                            <div className="space-y-5 font-body text-primary/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
                                <p>Texoma Cricket League (TCL) partners with youth cricket academies that are committed to raising standards, developing players, and competing beyond local leagues on a national stage.</p>
                                <p>Our Academy Partner program connects academies across the United States to a nationally respected competition platform—designed to help youth cricket grow into a mainstream sport in America.</p>
                            </div>

                            {/* Stats row */}
                            <div className="flex flex-wrap gap-8 mt-12">
                                {[
                                    { value: '50+', label: 'Partner Academies' },
                                    { value: '12', label: 'States Covered' },
                                    { value: '5K+', label: 'Youth Players' },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className="font-heading text-4xl lg:text-5xl font-bold text-primary tracking-tight">{stat.value}</div>
                                        <div className="font-body text-primary/40 text-sm mt-1 uppercase tracking-wider">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="lg:col-span-5"
                        >
                            <GlowBorder>
                                <div className="relative p-10 lg:p-12 bg-white rounded-[2rem] border border-primary/[0.08] shadow-[0_40px_100px_rgb(0,0,0,0.08)]">
                                    {/* Card header decoration */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center shadow-[0_12px_40px_rgb(201,151,63,0.4)] rotate-3">
                                        <Users className="text-white w-8 h-8" />
                                    </div>

                                    <h3 className="font-heading text-primary text-2xl font-bold mt-6 mb-3 text-center">Who This Program Is For</h3>
                                    <p className="font-body text-primary/50 mb-8 text-center text-sm">This program is ideal for academies that:</p>

                                    <ul className="space-y-5">
                                        {idealFor.map((item, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + i * 0.08 }}
                                                className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-primary/[0.03] to-transparent hover:from-secondary/[0.08] transition-all duration-300 group"
                                            >
                                                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center shadow-[0_4px_12px_rgb(201,151,63,0.15)] group-hover:scale-110 transition-transform duration-300">
                                                    <Check className="text-secondary" size={18} />
                                                </span>
                                                <span className="font-body text-primary/75 text-[15px]">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </GlowBorder>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What It Means to Be a Partner - Premium Dark Section */}
            <section className="py-32 lg:py-40 bg-primary text-white relative overflow-hidden">
                {/* Premium background effects */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/[0.08] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent" />
                <PremiumPattern />

                {/* Floating elements */}
                <div className="absolute top-20 right-[10%] w-40 h-40 border border-white/[0.05] rounded-full hidden lg:block" />
                <div className="absolute bottom-32 left-[15%] w-24 h-24 border border-secondary/20 rounded-2xl rotate-45 hidden lg:block" />

                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-3 font-heading text-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-8 px-6 py-3 bg-white/[0.06] backdrop-blur-sm rounded-full border border-white/[0.1] shadow-[0_8px_32px_rgb(0,0,0,0.2)]">
                            <Trophy className="w-4 h-4" />
                            Partnership Benefits
                        </span>
                        <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-[-0.03em]">
                            What It Means to Be a{' '}
                            <span className="text-secondary">TCL Partner</span>
                        </h2>
                        <p className="font-body text-white/50 text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
                            As a TCL Academy Partner, your academy becomes part of a national ecosystem built around competition, credibility, and progression.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {gainAccessTo.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-[1.75rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                                <div className="relative p-8 bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-[1.75rem] h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-white/[0.12] hover:-translate-y-2">
                                    <div className="w-14 h-14 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary shadow-[0_8px_24px_rgb(201,151,63,0.2)] group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-heading text-white text-lg font-bold mb-3">{item.title}</h3>
                                    <p className="font-body text-white/50 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners vs Non-Partners Comparison */}
            <section className="py-32 lg:py-40 bg-[#FAFAF8] relative overflow-hidden">
                <FloatingShapes />
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2.5 font-heading text-secondary font-bold uppercase tracking-[0.3em] text-[9px] mb-6 px-6 py-2.5 bg-gradient-to-r from-secondary/15 via-secondary/8 to-secondary/15 rounded-full border border-secondary/15 shadow-[0_4px_20px_rgb(201,151,63,0.1)]">Comparison</span>
                        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary font-bold leading-[1.02] tracking-[-0.03em]">TCL Academy Partners vs. Non-Partners</h2>
                        <p className="font-body text-primary/45 text-xl mt-7 max-w-3xl mx-auto leading-relaxed">See the difference between being a partner and participating on an event-by-event basis</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overflow-x-auto"
                    >
                        <div className="bg-white rounded-[2rem] border border-primary/[0.05] shadow-[0_40px_100px_rgb(0,0,0,0.08)] overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2 border-primary/10">
                                        <th className="text-left py-6 px-8 font-heading text-primary font-bold text-sm">Feature / Access</th>
                                        <th className="text-center py-6 px-8 font-heading text-white font-bold text-sm bg-gradient-to-r from-secondary to-secondary/90">
                                            <div className="flex items-center justify-center gap-2">
                                                <Crown className="w-4 h-4" />
                                                TCL Academy Partners
                                            </div>
                                        </th>
                                        <th className="text-center py-6 px-8 font-heading text-primary/50 font-bold text-sm bg-primary/[0.02]">Non-Partner Academies</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {partnerComparison.map((row, i) => (
                                        <tr key={i} className="border-b border-primary/[0.04] hover:bg-secondary/[0.02] transition-colors">
                                            <td className="py-5 px-8 font-body text-primary/75 text-[15px]">{row.feature}</td>
                                            <td className="text-center py-5 px-8 bg-secondary/[0.03]">
                                                <div className="flex items-center justify-center gap-3">
                                                    <CheckIcon status={row.partnerCheck} />
                                                    <span className="font-body text-primary/70 text-sm font-medium">{row.partner}</span>
                                                </div>
                                            </td>
                                            <td className="text-center py-5 px-8 bg-primary/[0.01]">
                                                <div className="flex items-center justify-center gap-3">
                                                    <CheckIcon status={row.nonPartnerCheck} />
                                                    {row.nonPartnerCheck !== 'limited' && <span className="font-body text-primary/40 text-sm">{row.nonPartner}</span>}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How Partnership Works */}
            <section className="py-32 lg:py-40 relative overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=2000)' }}
                />
                <div className="absolute inset-0 bg-primary/95" />
                <PremiumPattern />

                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-3 font-heading text-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-8 px-6 py-3 bg-white/[0.06] backdrop-blur-sm rounded-full border border-white/[0.1]">
                            <Rocket className="w-4 h-4" />
                            Process
                        </span>
                        <h2 className="font-heading text-5xl sm:text-6xl text-white font-bold leading-[0.95] tracking-[-0.03em]">How the Partnership Works</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {howItWorksSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="relative group"
                            >
                                {/* Connector line */}
                                {i < howItWorksSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-secondary/50 to-secondary/10" />
                                )}

                                <div className="relative p-8 bg-white rounded-[2rem] shadow-[0_20px_60px_rgb(0,0,0,0.15)] hover:-translate-y-3 transition-all duration-500">
                                    {/* Step number */}
                                    <div className="absolute -top-5 -left-3 w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center font-heading font-bold text-white text-lg shadow-[0_12px_30px_rgb(201,151,63,0.4)] rotate-3 group-hover:rotate-6 transition-transform duration-300">
                                        {step.step}
                                    </div>

                                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary mt-4">
                                        {step.icon}
                                    </div>
                                    <h3 className="font-heading text-primary text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="font-body text-primary/55 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Membership Tiers - Premium Cards */}
            <section className="py-32 lg:py-40 bg-white relative overflow-hidden">
                <FloatingShapes />
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2.5 font-heading text-secondary font-bold uppercase tracking-[0.3em] text-[9px] mb-6 px-6 py-2.5 bg-gradient-to-r from-secondary/15 via-secondary/8 to-secondary/15 rounded-full border border-secondary/15 shadow-[0_4px_20px_rgb(201,151,63,0.1)]">Pricing</span>
                        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary font-bold leading-[1.02] tracking-[-0.03em]">Academy Partner Membership Tiers</h2>
                        <p className="font-body text-primary/45 text-xl mt-7 max-w-3xl mx-auto leading-relaxed">Choose the tier that best fits your academy's stage and goals</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {membershipTiers.map((tier, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.12 }}
                                className={`relative group ${tier.badge === 'Most Popular' ? 'lg:-mt-6 lg:mb-6' : ''}`}
                            >
                                {/* Featured tier glow */}
                                {tier.badge === 'Most Popular' && (
                                    <>
                                        <div className="absolute -inset-4 bg-gradient-to-br from-secondary/40 via-secondary/20 to-primary/20 rounded-[2.5rem] blur-2xl opacity-60" />
                                        <div className="absolute -inset-[3px] bg-gradient-to-br from-secondary via-secondary/70 to-primary rounded-[2.25rem]" />
                                    </>
                                )}

                                <div className={`relative h-full rounded-[2rem] transition-all duration-500 ${tier.badge === 'Most Popular'
                                    ? 'bg-primary text-white p-10 lg:p-12'
                                    : 'bg-white border border-primary/[0.06] hover:border-primary/[0.12] hover:shadow-[0_40px_100px_rgb(0,0,0,0.1)] hover:-translate-y-2 p-9 lg:p-10'
                                    }`}>

                                    {/* Badge */}
                                    {tier.badge && (
                                        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-[9px] font-heading font-bold uppercase tracking-[0.2em] whitespace-nowrap ${tier.badge === 'Most Popular'
                                            ? 'bg-secondary text-white shadow-[0_12px_40px_rgb(201,151,63,0.5)]'
                                            : 'bg-gradient-to-r from-primary/10 to-primary/5 text-primary/50 border border-primary/[0.08]'
                                            }`}>
                                            {tier.badge}
                                        </div>
                                    )}

                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mt-2 ${tier.badge === 'Most Popular'
                                        ? 'bg-secondary/20 text-secondary'
                                        : 'bg-gradient-to-br from-primary/10 to-primary/5 text-primary'
                                        }`}>
                                        {tier.icon}
                                    </div>

                                    <h3 className={`font-heading text-xl font-bold mb-2 ${tier.badge === 'Most Popular' ? 'text-white' : 'text-primary'}`}>{tier.name}</h3>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <span className={`font-heading text-5xl font-bold tracking-[-0.03em] ${tier.badge === 'Most Popular' ? 'text-secondary' : 'text-primary'}`}>{tier.price}</span>
                                        <span className={`font-body text-sm ml-2 ${tier.badge === 'Most Popular' ? 'text-white/30' : 'text-primary/30'}`}>{tier.period}</span>
                                    </div>

                                    <p className={`font-body text-sm mb-8 leading-relaxed ${tier.badge === 'Most Popular' ? 'text-white/50' : 'text-primary/45'}`}>{tier.description}</p>

                                    {/* Features */}
                                    <ul className="space-y-4 mb-10">
                                        {tier.features.map((feature, fi) => (
                                            <li key={fi} className={`flex items-start gap-4 text-sm ${tier.badge === 'Most Popular' ? 'text-white/75' : 'text-primary/60'}`}>
                                                {feature !== '—' ? (
                                                    <>
                                                        <span className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center mt-0.5 ${tier.badge === 'Most Popular' ? 'bg-secondary/25' : 'bg-emerald-500/10'}`}>
                                                            <Check className={`${tier.badge === 'Most Popular' ? 'text-secondary' : 'text-emerald-500'}`} size={14} />
                                                        </span>
                                                        <span className="font-body">{feature}</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center mt-0.5 ${tier.badge === 'Most Popular' ? 'bg-white/10' : 'bg-primary/[0.04]'}`}>
                                                            <X className={`${tier.badge === 'Most Popular' ? 'text-white/20' : 'text-primary/20'}`} size={14} />
                                                        </span>
                                                        <span className={tier.badge === 'Most Popular' ? 'text-white/20' : 'text-primary/20'}>Not included</span>
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <button className={`w-full py-5 rounded-2xl font-heading font-bold text-[13px] uppercase tracking-[0.15em] transition-all duration-400 ${tier.badge === 'Most Popular'
                                        ? 'bg-secondary text-white hover:bg-secondary/90 shadow-[0_12px_40px_rgb(201,151,63,0.4)] hover:shadow-[0_16px_50px_rgb(201,151,63,0.5)]'
                                        : 'bg-primary text-white hover:bg-primary/90 shadow-[0_12px_40px_rgb(26,51,80,0.2)] hover:shadow-[0_16px_50px_rgb(26,51,80,0.3)]'
                                        }`}>
                                        Get Started
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-center font-body text-primary/35 text-sm mt-16 italic">
                        Tournament entry fees are charged separately per event.
                    </p>
                </div>
            </section>

            {/* Partner Tier Overview Table */}
            <section className="py-32 lg:py-40 bg-[#FAFAF8] relative overflow-hidden">
                <FloatingShapes />
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2.5 font-heading text-secondary font-bold uppercase tracking-[0.3em] text-[9px] mb-6 px-6 py-2.5 bg-gradient-to-r from-secondary/15 via-secondary/8 to-secondary/15 rounded-full border border-secondary/15 shadow-[0_4px_20px_rgb(201,151,63,0.1)]">Detailed Benefits</span>
                        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary font-bold leading-[1.02] tracking-[-0.03em]">Partner Tier Overview</h2>
                        <p className="font-body text-primary/45 text-xl mt-7 max-w-3xl mx-auto leading-relaxed">A comprehensive breakdown of benefits across all partner tiers</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overflow-x-auto"
                    >
                        <div className="bg-white rounded-[2rem] border border-primary/[0.05] shadow-[0_40px_100px_rgb(0,0,0,0.08)] overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2 border-primary/10">
                                        <th className="text-left py-6 px-6 font-heading text-primary font-bold text-sm min-w-[240px]">Benefit</th>
                                        <th className="text-center py-6 px-4 font-heading text-white font-bold text-sm bg-gradient-to-r from-secondary to-secondary/90 min-w-[140px]">
                                            <div className="flex flex-col items-center gap-1">
                                                <Crown className="w-4 h-4" />
                                                <span>Founding</span>
                                            </div>
                                        </th>
                                        <th className="text-center py-6 px-4 font-heading text-primary font-bold text-sm bg-primary/[0.04] min-w-[140px]">National</th>
                                        <th className="text-center py-6 px-4 font-heading text-primary font-bold text-sm bg-primary/[0.02] min-w-[140px]">Regional</th>
                                        <th className="text-center py-6 px-4 font-heading text-primary/60 font-bold text-sm min-w-[140px]">Development</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {partnerTierOverview.map((row, i) => (
                                        <tr key={i} className="border-b border-primary/[0.04] hover:bg-secondary/[0.02] transition-colors">
                                            <td className="py-5 px-6 font-body text-primary/75 text-[15px]">{row.benefit}</td>
                                            <td className="text-center py-5 px-4 bg-secondary/[0.03]">
                                                {typeof row.founding === 'boolean' ? (
                                                    <CheckIcon status={row.founding} />
                                                ) : (
                                                    <span className="font-body text-primary/70 text-sm font-medium">{row.founding}</span>
                                                )}
                                            </td>
                                            <td className="text-center py-5 px-4 bg-primary/[0.02]">
                                                {typeof row.national === 'boolean' ? (
                                                    <CheckIcon status={row.national} />
                                                ) : (
                                                    <span className="font-body text-primary/60 text-sm">{row.national}</span>
                                                )}
                                            </td>
                                            <td className="text-center py-5 px-4 bg-primary/[0.01]">
                                                {typeof row.regional === 'boolean' ? (
                                                    <CheckIcon status={row.regional} />
                                                ) : (
                                                    <span className="font-body text-primary/50 text-sm">{row.regional}</span>
                                                )}
                                            </td>
                                            <td className="text-center py-5 px-4">
                                                {typeof row.development === 'boolean' ? (
                                                    <CheckIcon status={row.development} />
                                                ) : (
                                                    <span className="font-body text-primary/40 text-sm">{row.development}</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Facilities & High-Performance Camps Access Table */}
            <section className="py-32 lg:py-40 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/[0.08] via-transparent to-transparent" />
                <PremiumPattern />

                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-3 font-heading text-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-8 px-6 py-3 bg-white/[0.06] backdrop-blur-sm rounded-full border border-white/[0.1]">
                            <Building2 className="w-4 h-4" />
                            Facilities Access
                        </span>
                        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-[1.02] tracking-[-0.03em]">Facilities & High-Performance Camps</h2>
                        <p className="font-body text-white/45 text-xl mt-7 max-w-3xl mx-auto leading-relaxed">Access to premium facilities and elite training opportunities</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overflow-x-auto"
                    >
                        <div className="bg-white/[0.03] backdrop-blur-sm rounded-[2rem] border border-white/[0.08] overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/[0.08]">
                                        <th className="text-left py-6 px-6 font-heading text-white font-bold text-sm min-w-[280px]">Access Type</th>
                                        <th className="text-center py-6 px-4 font-heading text-secondary font-bold text-sm bg-secondary/[0.1] min-w-[140px]">
                                            <div className="flex flex-col items-center gap-1">
                                                <Crown className="w-4 h-4" />
                                                <span>Founding</span>
                                            </div>
                                        </th>
                                        <th className="text-center py-6 px-4 font-heading text-white/80 font-bold text-sm min-w-[140px]">National</th>
                                        <th className="text-center py-6 px-4 font-heading text-white/60 font-bold text-sm min-w-[140px]">Regional</th>
                                        <th className="text-center py-6 px-4 font-heading text-white/40 font-bold text-sm min-w-[140px]">Development</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {facilitiesAccess.map((row, i) => (
                                        <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 px-6 font-body text-white/70 text-[15px]">{row.benefit}</td>
                                            <td className="text-center py-5 px-4 bg-secondary/[0.05]">
                                                {typeof row.founding === 'boolean' ? (
                                                    row.founding ? (
                                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-secondary/20 shadow-[0_4px_12px_rgb(201,151,63,0.2)]">
                                                            <Check className="text-secondary" size={16} />
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-white/5">
                                                            <X className="text-white/20" size={16} />
                                                        </span>
                                                    )
                                                ) : (
                                                    <span className="font-body text-secondary text-sm font-medium">{row.founding}</span>
                                                )}
                                            </td>
                                            <td className="text-center py-5 px-4">
                                                {typeof row.national === 'boolean' ? (
                                                    row.national ? (
                                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-500/20">
                                                            <Check className="text-emerald-400" size={16} />
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-white/5">
                                                            <X className="text-white/20" size={16} />
                                                        </span>
                                                    )
                                                ) : (
                                                    <span className="font-body text-white/60 text-sm">{row.national}</span>
                                                )}
                                            </td>
                                            <td className="text-center py-5 px-4">
                                                {typeof row.regional === 'boolean' ? (
                                                    row.regional ? (
                                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-500/20">
                                                            <Check className="text-emerald-400" size={16} />
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-white/5">
                                                            <X className="text-white/20" size={16} />
                                                        </span>
                                                    )
                                                ) : (
                                                    <span className="font-body text-white/50 text-sm">{row.regional}</span>
                                                )}
                                            </td>
                                            <td className="text-center py-5 px-4">
                                                {typeof row.development === 'boolean' ? (
                                                    row.development ? (
                                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-500/20">
                                                            <Check className="text-emerald-400" size={16} />
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-white/5">
                                                            <X className="text-white/20" size={16} />
                                                        </span>
                                                    )
                                                ) : (
                                                    <span className="font-body text-white/40 text-sm">{row.development}</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Academies Choose TCL */}
            <section className="py-32 lg:py-40 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-flex items-center gap-2.5 font-heading text-secondary font-bold uppercase tracking-[0.3em] text-[9px] mb-6 px-6 py-2.5 bg-gradient-to-r from-secondary/15 via-secondary/8 to-secondary/15 rounded-full border border-secondary/15">Why TCL</span>
                            <h2 className="font-heading text-4xl sm:text-5xl text-primary font-bold leading-[1.02] tracking-[-0.03em] mb-8">Why Academies Choose TCL</h2>

                            <ul className="space-y-6">
                                {whyChooseTCL.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mt-1 shadow-[0_4px_12px_rgb(201,151,63,0.15)]">
                                            <Check className="text-secondary" size={16} />
                                        </span>
                                        <span className="font-body text-primary/70 text-lg leading-relaxed">
                                            <strong className="text-primary font-semibold">{item.bold}</strong>{item.text}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-[2.5rem] blur-2xl opacity-50" />
                            <div className="relative p-10 lg:p-12 bg-white rounded-[2rem] border border-primary/[0.06] shadow-[0_40px_100px_rgb(0,0,0,0.08)]">
                                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mb-8 shadow-[0_12px_40px_rgb(201,151,63,0.3)]">
                                    <Zap className="text-white w-8 h-8" />
                                </div>
                                <h3 className="font-heading text-primary text-2xl font-bold mb-4">What Your Fees Pay For</h3>
                                <p className="font-body text-primary/50 mb-8 text-sm">Annual membership, not individual event fees</p>
                                <ul className="space-y-4">
                                    {feesBenefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-4 font-body text-primary/65 text-[15px]">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center mt-0.5">
                                                <Check className="text-emerald-500" size={14} />
                                            </span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 lg:py-40 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/[0.12] via-transparent to-transparent" />
                <PremiumPattern />

                <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-3 font-heading text-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-8 px-6 py-3 bg-white/[0.06] backdrop-blur-sm rounded-full border border-white/[0.1]">
                            <Sparkles className="w-4 h-4" />
                            Get Started
                        </span>
                        <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white font-bold leading-[0.95] tracking-[-0.03em] mb-8">
                            Ready to Join the TCL Family?
                        </h2>
                        <p className="font-body text-white/50 text-xl max-w-2xl mx-auto leading-relaxed mb-12">
                            Take the first step toward national-level competition and become part of America's premier youth cricket ecosystem.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-white font-heading font-bold text-sm uppercase tracking-[0.15em] rounded-2xl shadow-[0_16px_50px_rgb(201,151,63,0.4)] hover:shadow-[0_20px_60px_rgb(201,151,63,0.5)] hover:-translate-y-1 transition-all duration-300">
                                Apply Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/tournaments" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-heading font-bold text-sm uppercase tracking-[0.15em] rounded-2xl border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                                View Tournaments
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
