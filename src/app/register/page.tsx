'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Check, X, Users, Trophy, Target, Shield, Star, Award,
    FileText, Search, Layers, Rocket, Building2, ArrowRight,
    MapPin, Zap, Medal, Clock, ChevronDown
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
        name: 'Founding Academy Partner',
        price: '$2,500',
        period: '/ year',
        description: 'Established academies committing early to TCL\'s national vision and long-term participation',
        badge: 'Most Popular',
        color: 'secondary',
        features: ['Highest priority registration', 'Featured recognition', 'Match recordings included', 'Advisory input on formats', 'Annual Gala Event access', 'Special group accommodation'],
    },
    {
        name: 'National Academy Partner',
        price: '$1,800',
        period: '/ year',
        description: 'Academies competing consistently at a national level and seeking priority access',
        badge: null,
        color: 'primary',
        features: ['Priority registration', 'Listed recognition', 'Match recordings included', 'National rankings', 'Gala Event (limited)', 'Group accommodation (limited)'],
    },
    {
        name: 'Regional Academy Partner',
        price: '$1,200',
        period: '/ year',
        description: 'Strong regional academies building toward national qualification',
        badge: null,
        color: 'primary',
        features: ['Standard priority registration', 'Listed recognition', 'Match recordings (add-on)', 'Qualify for nationals', 'Limited gala access', 'Limited accommodation rates'],
    },
    {
        name: 'Development Academy Partner',
        price: '$600',
        period: '/ year',
        description: 'Emerging academies focused on U11–U13 development and structured growth',
        badge: 'Entry Level',
        color: 'accent',
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
    'Priority entry into TCL regional tournaments and qualifiers',
    'Eligibility pathways to TCL National Championships',
    'Consistent competition standards and officiating',
    'National visibility through results, rankings, and recognition',
    'Direct communication with TCL tournament leadership',
];

const SectionHeader: React.FC<{ label: string; title: string; description?: string; alignment?: 'center' | 'left' }> = ({ label, title, description, alignment = 'center' }) => (
    <motion.div
        className={`mb-20 ${alignment === 'center' ? 'text-center' : 'text-left'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <span className="inline-flex items-center gap-2.5 font-heading text-secondary font-bold uppercase tracking-[0.3em] text-[9px] mb-6 px-6 py-2.5 bg-gradient-to-r from-secondary/15 via-secondary/8 to-secondary/15 rounded-full border border-secondary/15 shadow-[0_4px_20px_rgb(201,151,63,0.1)]">{label}</span>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.75rem] text-primary font-bold leading-[1.02] tracking-[-0.03em]">{title}</h2>
        {description && <p className="font-body text-primary/45 text-lg lg:text-xl mt-7 max-w-3xl mx-auto leading-relaxed">{description}</p>}
    </motion.div>
);

const CheckIcon: React.FC<{ status: boolean | 'limited' }> = ({ status }) => {
    if (status === true) return <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-green-500/15 to-green-500/5 shadow-[0_2px_8px_rgb(34,197,94,0.15)]"><Check className="text-green-600" size={15} /></span>;
    if (status === 'limited') return <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-amber-500/15 to-amber-500/5 shadow-[0_2px_8px_rgb(245,158,11,0.15)]"><span className="w-2 h-2 rounded-full bg-amber-500" /></span>;
    return <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-500/5"><X className="text-red-300" size={15} /></span>;
};

export default function RegisterPage() {
    const [selectedTier, setSelectedTier] = useState<string | null>(null);

    return (
        <div className="w-full bg-bg-light">
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

            {/* Intro Section */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
                {/* Premium dot pattern */}
                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                {/* Decorative gradient orbs */}
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-secondary/[0.03] rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[80px]" />
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="lg:pr-8"
                        >
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-full mb-8 border border-secondary/10">
                                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                <span className="font-heading text-secondary font-semibold uppercase tracking-[0.2em] text-[10px]">TCL Academy Partner Program</span>
                            </div>
                            <h2 className="font-heading text-4xl lg:text-[3.25rem] xl:text-[3.5rem] text-primary font-bold leading-[1.08] tracking-[-0.02em] mb-8">
                                Partner with Youth Cricket Academies <span className="text-secondary">Nationwide</span>
                            </h2>
                            <div className="space-y-4 font-body text-primary/70 text-lg leading-relaxed">
                                <p>Texoma Cricket League (TCL) partners with youth cricket academies that are committed to raising standards, developing players, and competing beyond local leagues on a national stage.</p>
                                <p>Our Academy Partner program connects academies across the United States to a nationally respected competition platform—designed to help youth cricket grow into a mainstream sport in America.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="relative"
                        >
                            {/* Premium card glow */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-secondary/20 via-secondary/5 to-transparent rounded-[1.75rem] blur-xl opacity-50" />
                            <div className="relative p-8 lg:p-10 bg-white rounded-3xl border border-primary/[0.06] shadow-[0_20px_50px_rgb(0,0,0,0.06)]">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-gradient-to-br from-secondary/15 to-secondary/5 rounded-xl flex items-center justify-center">
                                        <Users className="text-secondary w-6 h-6" />
                                    </div>
                                    <h3 className="font-heading text-primary text-xl font-bold">Who This Program Is For</h3>
                                </div>
                                <p className="font-body text-primary/60 mb-6 text-[15px]">This program is ideal for academies that:</p>
                                <ul className="space-y-4">
                                    {idealFor.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.08 }}
                                            className="flex items-start gap-3.5 font-body text-primary/75 text-[15px]"
                                        >
                                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mt-0.5">
                                                <Check className="text-secondary w-3 h-3" />
                                            </span>
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                                <div className="mt-8 pt-6 border-t border-primary/[0.05]">
                                    <p className="font-body text-primary/50 text-sm leading-relaxed">TCL Academy Partners are not just participants—they are collaborators in shaping the future of youth cricket in the U.S.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What it Means to Be a Partner */}
            <section className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
                {/* Premium texture */}
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
                {/* Decorative orbs */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-secondary/[0.08] rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[100px]" />
                <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 font-heading text-secondary font-semibold uppercase tracking-[0.25em] text-[10px] mb-6 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                            <Trophy className="w-3.5 h-3.5" />
                            Partnerships
                        </span>
                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.05]">What It Means to Be a <span className="text-secondary">TCL Partner</span></h2>
                        <p className="font-body text-white/60 text-lg lg:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
                            As a TCL Academy Partner, your academy becomes part of a national ecosystem built around competition, credibility, and progression.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {gainAccessTo.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="group p-6 lg:p-7 bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-2xl transition-all duration-300 hover:bg-white/[0.1] hover:border-white/[0.15]"
                            >
                                <div className="w-12 h-12 bg-secondary/15 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                                    <Check className="text-secondary" size={22} />
                                </div>
                                <p className="font-body text-white/80 text-sm leading-relaxed">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners vs Non-Partners Comparison */}
            <section className="py-24 lg:py-32 bg-[#FAFAF8] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[120px]" />
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <SectionHeader
                        label="Comparison"
                        title="TCL Academy Partners vs. Non-Partner Academies"
                        description="See the difference between being a partner and participating on an event-by-event basis"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overflow-x-auto bg-white rounded-3xl border border-primary/[0.05] shadow-[0_25px_80px_rgb(0,0,0,0.06)]">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-primary/10">
                                    <th className="text-left py-4 px-4 font-heading text-primary font-bold text-sm">Feature / Access</th>
                                    <th className="text-center py-4 px-4 font-heading text-secondary font-bold text-sm bg-secondary/5">TCL Academy Partners</th>
                                    <th className="text-center py-4 px-4 font-heading text-primary/60 font-bold text-sm">Non-Partner Academies</th>
                                </tr>
                            </thead>
                            <tbody>
                                {partnerComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-primary/5 hover:bg-bg-cream/50 transition-colors">
                                        <td className="py-4 px-4 font-body text-primary/80 text-sm">{row.feature}</td>
                                        <td className="text-center py-4 px-4 bg-secondary/5">
                                            <div className="flex items-center justify-center gap-2">
                                                <Check className="text-green-500" size={16} />
                                                <span className="font-body text-primary/70 text-sm">{row.partner}</span>
                                            </div>
                                        </td>
                                        <td className="text-center py-4 px-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <CheckIcon status={row.nonPartnerCheck} />
                                                {row.nonPartnerCheck !== 'limited' && <span className="font-body text-primary/50 text-sm">{row.nonPartner}</span>}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            {/* How Partnership Works */}
            <section className="py-24 lg:py-32 relative overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=2000)' }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-primary/90" />
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 font-heading text-secondary font-semibold uppercase tracking-[0.25em] text-[10px] mb-6 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">Process</span>
                        <h2 className="font-heading text-4xl sm:text-5xl text-white font-bold leading-[1.05] tracking-[-0.02em]">How the Partnership Works</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                        {howItWorksSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <div className="p-8 bg-[#FAFAF8] rounded-2xl border border-primary/[0.06] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-primary/[0.12] transition-all duration-300 h-full">
                                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 text-secondary shadow-sm border border-primary/[0.04]">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-secondary text-white rounded-lg flex items-center justify-center font-heading font-bold text-sm shadow-lg shadow-secondary/25">
                                        {step.step}
                                    </div>
                                    <h3 className="font-heading text-primary text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="font-body text-primary/60 text-sm leading-relaxed">{step.description}</p>
                                </div>
                                {i < howItWorksSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ArrowRight className="text-secondary/30" size={24} />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Membership Tiers */}
            <section className="py-24 lg:py-32 bg-[#FAFAF8] relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-secondary/[0.04] to-transparent rounded-full blur-[80px]" />
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <SectionHeader
                        label="Pricing"
                        title="Academy Partner Membership Tiers"
                        description="Choose the tier that best fits your academy's stage and goals"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {membershipTiers.map((tier, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.12 }}
                                className="relative group"
                            >
                                {/* Premium glow for featured tier */}
                                {tier.badge === 'Most Popular' && (
                                    <div className="absolute -inset-[3px] bg-gradient-to-br from-secondary via-secondary/60 to-primary rounded-[2rem] opacity-95 blur-[1px]" />
                                )}
                                <div className={`relative h-full p-9 lg:p-10 rounded-[1.75rem] transition-all duration-500 ${tier.badge === 'Most Popular'
                                    ? 'bg-primary text-white lg:scale-[1.04]'
                                    : 'bg-white border border-primary/[0.05] hover:border-primary/[0.1] hover:shadow-[0_30px_80px_rgb(0,0,0,0.1)] hover:-translate-y-1'
                                    }`}
                                >
                                    {tier.badge && (
                                        <div className={`absolute -top-4 left-9 px-5 py-2 rounded-full text-[8px] font-heading font-bold uppercase tracking-[0.2em] ${tier.badge === 'Most Popular' ? 'bg-secondary text-white shadow-xl shadow-secondary/50' : 'bg-gradient-to-r from-primary/10 to-primary/5 text-primary/55 border border-primary/[0.08]'}`}>
                                            {tier.badge}
                                        </div>
                                    )}
                                    <h3 className={`font-heading text-[1.35rem] font-bold mt-4 mb-4 ${tier.badge === 'Most Popular' ? 'text-white' : 'text-primary'}`}>{tier.name}</h3>
                                    <div className="mb-6">
                                        <span className={`font-heading text-[3rem] font-bold tracking-[-0.03em] ${tier.badge === 'Most Popular' ? 'text-secondary' : 'text-primary'}`}>{tier.price}</span>
                                        <span className={`font-body text-sm ml-1.5 ${tier.badge === 'Most Popular' ? 'text-white/35' : 'text-primary/30'}`}>{tier.period}</span>
                                    </div>
                                    <p className={`font-body text-[15px] mb-9 leading-relaxed ${tier.badge === 'Most Popular' ? 'text-white/55' : 'text-primary/50'}`}>{tier.description}</p>
                                    <ul className="space-y-4 mb-10 flex-grow">
                                        {tier.features.map((feature, fi) => (
                                            <li key={fi} className={`flex items-start gap-3.5 text-[15px] ${tier.badge === 'Most Popular' ? 'text-white/80' : 'text-primary/65'}`}>
                                                {feature !== '—' ? (
                                                    <>
                                                        <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${tier.badge === 'Most Popular' ? 'bg-secondary/20' : 'bg-green-500/10'}`}>
                                                            <Check className={`${tier.badge === 'Most Popular' ? 'text-secondary' : 'text-green-500'}`} size={12} />
                                                        </span>
                                                        <span className="font-body">{feature}</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${tier.badge === 'Most Popular' ? 'bg-white/10' : 'bg-primary/[0.04]'}`}>
                                                            <X className={`${tier.badge === 'Most Popular' ? 'text-white/20' : 'text-primary/20'}`} size={12} />
                                                        </span>
                                                        <span className={tier.badge === 'Most Popular' ? 'text-white/25' : 'text-primary/25'}>Not included</span>
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`w-full py-4.5 rounded-2xl font-heading font-bold text-[13px] uppercase tracking-[0.15em] transition-all duration-400 ${tier.badge === 'Most Popular'
                                        ? 'bg-secondary text-white hover:bg-secondary/90 shadow-xl shadow-secondary/30 hover:shadow-secondary/40'
                                        : 'bg-gradient-to-r from-primary/[0.06] to-primary/[0.03] text-primary border border-primary/[0.08] hover:bg-primary hover:text-white hover:border-primary'
                                        }`}>
                                        Select Tier
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-center font-body text-primary/40 text-sm mt-12 italic">
                        Tournament entry fees are charged separately per event.
                    </p>
                </div>
            </section>

            {/* Partner Tier Overview */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                    <SectionHeader
                        label="Tier Benefits"
                        title="Partner Tier Overview"
                        description="Compare benefits across all partner tiers"
                    />
                    <div className="overflow-x-auto bg-[#FAFAF8] rounded-2xl border border-primary/[0.06] shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-primary/10">
                                    <th className="text-left py-4 px-4 font-heading text-primary font-bold text-sm">Benefit / Access</th>
                                    <th className="text-center py-4 px-4 font-heading text-secondary font-bold text-sm bg-secondary/5">Founding Partner</th>
                                    <th className="text-center py-4 px-4 font-heading text-primary font-bold text-sm">National Partner</th>
                                    <th className="text-center py-4 px-4 font-heading text-primary font-bold text-sm">Regional Partner</th>
                                    <th className="text-center py-4 px-4 font-heading text-primary/60 font-bold text-sm">Development Partner</th>
                                </tr>
                            </thead>
                            <tbody>
                                {partnerTierOverview.map((row, i) => (
                                    <tr key={i} className="border-b border-primary/5 hover:bg-white/50 transition-colors">
                                        <td className="py-4 px-4 font-body text-primary/80 text-sm">{row.benefit}</td>
                                        <td className="text-center py-4 px-4 bg-secondary/5">
                                            {typeof row.founding === 'boolean' ? (
                                                row.founding ? <Check className="text-green-500 mx-auto" size={16} /> : <X className="text-red-300 mx-auto" size={16} />
                                            ) : (
                                                <span className="font-body text-primary/70 text-sm">{row.founding}</span>
                                            )}
                                        </td>
                                        <td className="text-center py-4 px-4">
                                            {typeof row.national === 'boolean' ? (
                                                row.national ? <Check className="text-green-500 mx-auto" size={16} /> : <X className="text-red-300 mx-auto" size={16} />
                                            ) : (
                                                <span className="font-body text-primary/70 text-sm">{row.national}</span>
                                            )}
                                        </td>
                                        <td className="text-center py-4 px-4">
                                            {typeof row.regional === 'boolean' ? (
                                                row.regional ? <Check className="text-green-500 mx-auto" size={16} /> : <X className="text-red-300 mx-auto" size={16} />
                                            ) : (
                                                <span className="font-body text-primary/70 text-sm">{row.regional}</span>
                                            )}
                                        </td>
                                        <td className="text-center py-4 px-4">
                                            {typeof row.development === 'boolean' ? (
                                                row.development ? <Check className="text-green-500 mx-auto" size={16} /> : <X className="text-red-300 mx-auto" size={16} />
                                            ) : (
                                                <span className="font-body text-primary/50 text-sm">{row.development}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Facilities & High-Performance Camps Access */}
            <section className="py-20 lg:py-28 bg-[#FAFAF8]">
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                    <SectionHeader
                        label="Facilities"
                        title="Facilities & High-Performance Camps Access"
                        description="Access to training facilities, camps, combines, and showcases"
                    />
                    <div className="overflow-x-auto bg-white rounded-2xl border border-primary/[0.06] shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-primary/10">
                                    <th className="text-left py-4 px-4 font-heading text-primary font-bold text-sm">Benefit / Access</th>
                                    <th className="text-center py-4 px-4 font-heading text-secondary font-bold text-sm bg-secondary/5">Founding Partner</th>
                                    <th className="text-center py-4 px-4 font-heading text-primary font-bold text-sm">National Partner</th>
                                    <th className="text-center py-4 px-4 font-heading text-primary font-bold text-sm">Regional Partner</th>
                                    <th className="text-center py-4 px-4 font-heading text-primary/60 font-bold text-sm">Development Partner</th>
                                </tr>
                            </thead>
                            <tbody>
                                {facilitiesAccess.map((row, i) => (
                                    <tr key={i} className="border-b border-primary/5 hover:bg-bg-cream/50 transition-colors">
                                        <td className="py-4 px-4 font-body text-primary/80 text-sm">{row.benefit}</td>
                                        <td className="text-center py-4 px-4 bg-secondary/5">
                                            {typeof row.founding === 'boolean' ? (
                                                row.founding ? <Check className="text-green-500 mx-auto" size={16} /> : <X className="text-red-300 mx-auto" size={16} />
                                            ) : (
                                                <span className="font-body text-primary/70 text-sm">{row.founding}</span>
                                            )}
                                        </td>
                                        <td className="text-center py-4 px-4">
                                            {typeof row.national === 'boolean' ? (
                                                row.national ? <Check className="text-green-500 mx-auto" size={16} /> : <X className="text-red-300 mx-auto" size={16} />
                                            ) : (
                                                <span className="font-body text-primary/70 text-sm">{row.national}</span>
                                            )}
                                        </td>
                                        <td className="text-center py-4 px-4">
                                            {typeof row.regional === 'boolean' ? (
                                                row.regional ? <Check className="text-green-500 mx-auto" size={16} /> : <X className="text-red-300 mx-auto" size={16} />
                                            ) : (
                                                <span className="font-body text-primary/70 text-sm">{row.regional}</span>
                                            )}
                                        </td>
                                        <td className="text-center py-4 px-4">
                                            {typeof row.development === 'boolean' ? (
                                                row.development ? <Check className="text-green-500 mx-auto" size={16} /> : <X className="text-red-300 mx-auto" size={16} />
                                            ) : (
                                                <span className="font-body text-primary/50 text-sm">{row.development}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* What Fees Pay For */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
                    <div className="p-10 lg:p-12 bg-[#FAFAF8] rounded-2xl border border-primary/[0.06]">
                        <SectionHeader label="Value" title="What These Fees Pay For" alignment="left" />
                        <p className="font-body text-primary/70 text-lg mb-6">The Academy Partner fee supports:</p>
                        <ul className="space-y-4">
                            {feesBenefits.map((item, i) => (
                                <li key={i} className="flex items-start gap-4 font-body text-primary/80">
                                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Check className="text-secondary" size={18} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* What We Expect */}
            <section className="py-20 lg:py-28 bg-[#FAFAF8]">
                <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <SectionHeader label="Expectations" title="What We Expect from Academy Partners" alignment="left" />
                            <p className="font-body text-primary/70 text-lg leading-relaxed">
                                Academy Partners should conduct themselves in a manner that reflects positively on youth cricket and supports the broader goal of growing the sport responsibly in the United States.
                            </p>
                        </div>
                        <div className="p-8 lg:p-10 bg-primary rounded-2xl">
                            <h3 className="font-heading text-white text-xl font-bold mb-6">Why Academies Choose TCL</h3>
                            <ul className="space-y-4">
                                {whyChooseTCL.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 font-body text-white/70">
                                        <Check className="text-secondary mt-1 flex-shrink-0" size={18} />
                                        <span><strong className="text-white font-medium">{item.bold}</strong>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center relative">
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary font-bold mb-6">
                        Apply to Become a TCL Academy Partner
                    </h2>
                    <p className="font-body text-primary/80 text-lg mb-10 max-w-2xl mx-auto">
                        If your academy is ready to compete on a national stage and be part of a movement that is changing the game for youth cricket, we invite you to apply.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-heading font-bold text-sm uppercase tracking-wider rounded-xl shadow-2xl shadow-primary/30 transition-all duration-300 hover:bg-accent"
                        >
                            Apply Now
                            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/tournaments"
                            className="inline-flex items-center justify-center px-10 py-5 bg-white/15 backdrop-blur-sm text-primary font-heading font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-white"
                        >
                            View Tournaments
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
