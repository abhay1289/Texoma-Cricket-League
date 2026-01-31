'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Check, X, Users, Trophy, Target, Shield, Star, Award,
    FileText, Search, Layers, Rocket, ArrowRight,
    MapPin, Zap, Crown, Sparkles
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

// Membership Tiers
const membershipTiers = [
    {
        name: 'Development',
        price: '$600',
        period: '/year',
        description: 'Emerging academies focused on U11–U13 development and structured growth',
        badge: 'Entry Level',
        featured: false,
        icon: <Sparkles className="w-6 h-6" />,
        features: ['Tournament access', 'Listed recognition', 'Match recordings (add-on)', 'Development pathway'],
    },
    {
        name: 'Regional',
        price: '$1,200',
        period: '/year',
        description: 'Strong regional academies building toward national qualification',
        badge: null,
        featured: false,
        icon: <Target className="w-6 h-6" />,
        features: ['Standard priority registration', 'Listed recognition', 'Match recordings (add-on)', 'Qualify for nationals', 'Limited gala access'],
    },
    {
        name: 'National',
        price: '$1,800',
        period: '/year',
        description: 'Academies competing consistently at a national level and seeking priority access',
        badge: null,
        featured: false,
        icon: <Trophy className="w-6 h-6" />,
        features: ['Priority registration', 'Listed recognition', 'Match recordings included', 'National rankings', 'Gala Event (limited)', 'Group accommodation (limited)'],
    },
    {
        name: 'Founding',
        price: '$2,500',
        period: '/year',
        description: 'Established academies committing early to TCL\'s national vision and long-term participation',
        badge: 'Recommended',
        featured: true,
        icon: <Crown className="w-6 h-6" />,
        features: ['Highest priority registration', 'Featured recognition', 'Match recordings included', 'Advisory input on formats', 'Annual Gala Event access', 'Special group accommodation'],
    },
];

// How it works steps
const howItWorksSteps = [
    { step: 1, title: 'Apply', description: 'Submit an application with details about your academy, age groups, and competitive goals.', icon: <FileText className="w-7 h-7" /> },
    { step: 2, title: 'Review', description: 'TCL reviews applications based on player development focus, coaching structure, age-group depth, and alignment with TCL values.', icon: <Search className="w-7 h-7" /> },
    { step: 3, title: 'Placement', description: 'Accepted academies are placed into the appropriate partner tier: Founding, National, Regional, or Development.', icon: <Layers className="w-7 h-7" /> },
    { step: 4, title: 'Compete & Grow', description: 'Partner academies participate in TCL events, progress through pathways, and build long-term presence within the national TCL ecosystem.', icon: <Rocket className="w-7 h-7" /> },
];

// Why Academies Choose TCL
const whyChooseTCL = [
    { icon: <Target className="w-5 h-5" />, bold: 'A clear national competition pathway', text: ' connecting regional play to national championships' },
    { icon: <Trophy className="w-5 h-5" />, bold: 'Well-organized, professional tournaments', text: ' with consistent standards and execution' },
    { icon: <Users className="w-5 h-5" />, bold: 'Meaningful competition beyond local leagues', text: ', bringing teams together from across the country' },
    { icon: <Zap className="w-5 h-5" />, bold: 'A platform built for long-term growth', text: ', not one-off events or isolated tournaments' },
    { icon: <Star className="w-5 h-5" />, bold: 'Alignment with a mission', text: ' to make youth cricket a mainstream sport in America' },
];

// What fees pay for
const feesBenefits = [
    { icon: <Award className="w-5 h-5" />, text: 'Membership benefits as mentioned in the subscription' },
    { icon: <Shield className="w-5 h-5" />, text: 'Recognition as a TCL Academy Partner' },
    { icon: <Target className="w-5 h-5" />, text: 'Consistent rules, officiating standards, and competition pathways' },
    { icon: <MapPin className="w-5 h-5" />, text: 'Preferred access to Sports Texoma facilities and development opportunities' },
    { icon: <Zap className="w-5 h-5" />, text: 'Priority consideration for high-performance camps and showcases' },
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
    { icon: <Trophy className="w-6 h-6" />, title: 'Priority Entry', desc: 'Into TCL regional tournaments and qualifiers' },
    { icon: <Target className="w-6 h-6" />, title: 'Championship Pathways', desc: 'Eligibility to TCL National Championships' },
    { icon: <Shield className="w-6 h-6" />, title: 'Consistent Standards', desc: 'Competition standards and officiating' },
    { icon: <Star className="w-6 h-6" />, title: 'National Visibility', desc: 'Through results, rankings, and recognition' },
    { icon: <Users className="w-6 h-6" />, title: 'Direct Communication', desc: 'With TCL tournament leadership' },
];

// Status indicator component
const StatusIndicator: React.FC<{ status: boolean | 'limited' }> = ({ status }) => {
    if (status === true) {
        return (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10">
                <Check className="w-3.5 h-3.5 text-green-600" />
            </span>
        );
    }
    if (status === 'limited') {
        return (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/10">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            </span>
        );
    }
    return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/5">
            <X className="w-3.5 h-3.5 text-red-300" />
        </span>
    );
};

export default function RegisterPage() {
    return (
        <div className="w-full">
            {/* Hero */}
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
            <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                        {/* Left content */}
                        <motion.div
                            className="lg:col-span-7"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/10 rounded-full mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                                <span className="font-heading text-secondary font-semibold uppercase tracking-[0.15em] text-[10px]">Academy Partner Program</span>
                            </div>

                            <h2 className="font-heading text-[2.75rem] lg:text-[3.5rem] text-primary font-bold leading-[1.1] tracking-tight mb-8">
                                Partner with Youth Cricket Academies <span className="text-secondary">Nationwide</span>
                            </h2>

                            <div className="space-y-5 font-body text-primary/65 text-lg lg:text-xl leading-relaxed max-w-2xl">
                                <p>Texoma Cricket League (TCL) partners with youth cricket academies that are committed to raising standards, developing players, and competing beyond local leagues on a national stage.</p>
                                <p>Our Academy Partner program connects academies across the United States to a nationally respected competition platform—designed to help youth cricket grow into a <strong className="text-primary font-medium">mainstream sport in America</strong>.</p>
                            </div>
                        </motion.div>

                        {/* Right card */}
                        <motion.div
                            className="lg:col-span-5"
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="relative">
                                {/* Card glow effect */}
                                <div className="absolute -inset-px bg-gradient-to-b from-secondary/20 via-secondary/5 to-transparent rounded-3xl blur-xl opacity-60" />

                                <div className="relative bg-white border border-primary/[0.08] rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                                            <Users className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-heading text-primary text-xl font-bold">Who This Program Is For</h3>
                                    </div>

                                    <p className="font-body text-primary/60 text-sm mb-6">This program is ideal for academies that:</p>

                                    <ul className="space-y-4">
                                        {idealFor.map((item, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -8 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + i * 0.08 }}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
                                                    <Check className="w-3 h-3 text-secondary" />
                                                </span>
                                                <span className="font-body text-primary/75 text-[15px] leading-relaxed">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 pt-6 border-t border-primary/[0.06]">
                                        <p className="font-body text-primary/50 text-xs leading-relaxed">TCL Academy Partners are not just participants—they are collaborators in shaping the future of youth cricket in the U.S.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What it Means to Be a Partner */}
            <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
                {/* Premium texture overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                            <Crown className="w-3.5 h-3.5 text-secondary" />
                            <span className="font-heading text-secondary font-semibold uppercase tracking-[0.15em] text-[10px]">Partner Benefits</span>
                        </div>

                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                            What It Means to Be a <span className="text-secondary">TCL Partner</span>
                        </h2>

                        <p className="font-body text-white/60 text-lg max-w-2xl mx-auto">
                            Your academy becomes part of a national ecosystem built around competition, credibility, and progression.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
                        {gainAccessTo.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="group"
                            >
                                <div className="h-full p-6 lg:p-7 bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.12]">
                                    <div className="w-12 h-12 bg-secondary/15 rounded-xl flex items-center justify-center mb-5 text-secondary transition-transform duration-300 group-hover:scale-110">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-heading text-white text-base font-bold mb-2">{item.title}</h3>
                                    <p className="font-body text-white/50 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How Partnership Works */}
            <section className="relative py-24 lg:py-32 bg-[#FAFAF8] overflow-hidden">
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                    <motion.div
                        className="text-center mb-16 lg:mb-20"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/10 rounded-full mb-6">
                            <Zap className="w-3.5 h-3.5 text-secondary" />
                            <span className="font-heading text-secondary font-semibold uppercase tracking-[0.15em] text-[10px]">Simple Process</span>
                        </div>

                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary font-bold">
                            How the Partnership <span className="text-secondary">Works</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                        {howItWorksSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative group"
                            >
                                {/* Connector line */}
                                {i < howItWorksSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-16 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-gradient-to-r from-secondary/30 via-secondary/20 to-secondary/30" />
                                )}

                                <div className="relative h-full bg-white border border-primary/[0.06] rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-primary/[0.12]">
                                    {/* Step number */}
                                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-secondary text-white rounded-lg flex items-center justify-center font-heading font-bold text-sm shadow-lg shadow-secondary/25">
                                        {step.step}
                                    </div>

                                    <div className="w-14 h-14 bg-primary/[0.04] rounded-xl flex items-center justify-center mb-6 text-secondary transition-all duration-300 group-hover:bg-secondary/10">
                                        {step.icon}
                                    </div>

                                    <h3 className="font-heading text-primary text-lg font-bold mb-3">{step.title}</h3>
                                    <p className="font-body text-primary/55 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Membership Tiers */}
            <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
                    <motion.div
                        className="text-center mb-16 lg:mb-20"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/10 rounded-full mb-6">
                            <Award className="w-3.5 h-3.5 text-secondary" />
                            <span className="font-heading text-secondary font-semibold uppercase tracking-[0.15em] text-[10px]">Membership Tiers</span>
                        </div>

                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary font-bold mb-4">
                            Choose Your <span className="text-secondary">Partnership Level</span>
                        </h2>

                        <p className="font-body text-primary/55 text-lg max-w-2xl mx-auto">
                            Select the tier that best aligns with your academy's competitive stage and long-term objectives
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {membershipTiers.map((tier, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className={`relative ${tier.featured ? 'xl:-mt-4 xl:mb-4' : ''}`}
                            >
                                {tier.featured && (
                                    <div className="absolute -inset-[1px] bg-gradient-to-b from-secondary via-secondary/50 to-secondary/20 rounded-[1.25rem] opacity-100" />
                                )}

                                <div className={`relative h-full flex flex-col rounded-2xl transition-all duration-300 ${tier.featured
                                        ? 'bg-primary text-white p-8 lg:p-10'
                                        : 'bg-white border border-primary/[0.08] p-8 hover:border-primary/[0.16] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
                                    }`}>
                                    {tier.badge && (
                                        <div className={`absolute -top-3 left-8 px-3 py-1 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider ${tier.featured
                                                ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                                                : 'bg-primary/[0.06] text-primary/60'
                                            }`}>
                                            {tier.badge}
                                        </div>
                                    )}

                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${tier.featured ? 'bg-white/10 text-secondary' : 'bg-secondary/10 text-secondary'
                                        }`}>
                                        {tier.icon}
                                    </div>

                                    <h3 className={`font-heading text-xl font-bold mb-2 ${tier.featured ? 'text-white' : 'text-primary'}`}>
                                        {tier.name}
                                    </h3>

                                    <div className="mb-4">
                                        <span className={`font-heading text-4xl font-bold tracking-tight ${tier.featured ? 'text-secondary' : 'text-primary'}`}>
                                            {tier.price}
                                        </span>
                                        <span className={`font-body text-sm ${tier.featured ? 'text-white/50' : 'text-primary/40'}`}>
                                            {tier.period}
                                        </span>
                                    </div>

                                    <p className={`font-body text-sm leading-relaxed mb-8 ${tier.featured ? 'text-white/60' : 'text-primary/55'}`}>
                                        {tier.description}
                                    </p>

                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {tier.features.map((feature, fi) => (
                                            <li key={fi} className={`flex items-start gap-3 text-sm ${tier.featured ? 'text-white/75' : 'text-primary/65'}`}>
                                                <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.featured ? 'text-secondary' : 'text-green-500'}`} />
                                                <span className="font-body">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 rounded-xl font-heading font-bold text-sm uppercase tracking-wider transition-all duration-300 ${tier.featured
                                            ? 'bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/25'
                                            : 'bg-primary/[0.04] text-primary hover:bg-primary hover:text-white'
                                        }`}>
                                        Select {tier.name}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-center font-body text-primary/40 text-sm mt-12">
                        Tournament entry fees are charged separately per event.
                    </p>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="relative py-24 lg:py-32 bg-[#FAFAF8]">
                <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/10 rounded-full mb-6">
                            <Shield className="w-3.5 h-3.5 text-secondary" />
                            <span className="font-heading text-secondary font-semibold uppercase tracking-[0.15em] text-[10px]">Detailed Comparison</span>
                        </div>

                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary font-bold mb-4">
                            Partners vs. <span className="text-secondary">Non-Partners</span>
                        </h2>

                        <p className="font-body text-primary/55 text-lg max-w-2xl mx-auto">
                            See the comprehensive difference between being a partner and participating on an event-by-event basis
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl border border-primary/[0.06] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.03)]"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left py-5 px-6 font-heading text-primary font-bold text-sm bg-primary/[0.02] border-b border-primary/[0.06]">
                                            Feature / Access
                                        </th>
                                        <th className="text-center py-5 px-6 font-heading font-bold text-sm bg-secondary/5 border-b border-secondary/10">
                                            <span className="flex items-center justify-center gap-2 text-secondary">
                                                <Crown className="w-4 h-4" />
                                                TCL Academy Partners
                                            </span>
                                        </th>
                                        <th className="text-center py-5 px-6 font-heading text-primary/50 font-bold text-sm bg-primary/[0.02] border-b border-primary/[0.06]">
                                            Non-Partner Academies
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {partnerComparison.map((row, i) => (
                                        <tr key={i} className="group transition-colors hover:bg-primary/[0.01]">
                                            <td className="py-4 px-6 font-body text-primary/70 text-sm border-b border-primary/[0.04]">
                                                {row.feature}
                                            </td>
                                            <td className="text-center py-4 px-6 bg-secondary/[0.02] border-b border-secondary/[0.04]">
                                                <div className="flex items-center justify-center gap-2">
                                                    <StatusIndicator status={true} />
                                                    <span className="font-body text-primary/80 text-sm font-medium">{row.partner}</span>
                                                </div>
                                            </td>
                                            <td className="text-center py-4 px-6 border-b border-primary/[0.04]">
                                                <div className="flex items-center justify-center gap-2">
                                                    <StatusIndicator status={row.nonPartnerCheck} />
                                                    <span className="font-body text-primary/45 text-sm">{row.nonPartner}</span>
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

            {/* What Fees Pay For + Why Choose TCL */}
            <section className="relative py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* What Fees Pay For */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="h-full p-8 lg:p-10 bg-[#FAFAF8] border border-primary/[0.06] rounded-2xl">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-heading text-primary text-2xl font-bold">What These Fees Pay For</h3>
                                </div>

                                <p className="font-body text-primary/55 mb-8">The Academy Partner fee supports:</p>

                                <ul className="space-y-5">
                                    {feesBenefits.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 text-secondary shadow-sm border border-primary/[0.04]">
                                                {item.icon}
                                            </div>
                                            <span className="font-body text-primary/70 text-[15px] leading-relaxed pt-2">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Why Academies Choose TCL */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="h-full p-8 lg:p-10 bg-primary rounded-2xl">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary">
                                        <Star className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-heading text-white text-2xl font-bold">Why Academies Choose TCL</h3>
                                </div>

                                <ul className="space-y-5">
                                    {whyChooseTCL.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-white/[0.08] rounded-xl flex items-center justify-center flex-shrink-0 text-secondary">
                                                {item.icon}
                                            </div>
                                            <span className="font-body text-white/70 text-[15px] leading-relaxed pt-2">
                                                <strong className="text-white font-medium">{item.bold}</strong>{item.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 lg:py-32 bg-secondary overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full mb-8">
                            <Rocket className="w-3.5 h-3.5 text-white" />
                            <span className="font-heading text-white font-semibold uppercase tracking-[0.15em] text-[10px]">Get Started Today</span>
                        </div>

                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] text-primary font-bold leading-[1.1] mb-6">
                            Apply to Become a<br />TCL Academy Partner
                        </h2>

                        <p className="font-body text-primary/70 text-lg lg:text-xl mb-12 max-w-2xl mx-auto">
                            If your academy is ready to compete on a national stage and be part of a movement that is changing the game for youth cricket, we invite you to apply.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-heading font-bold text-sm uppercase tracking-wider rounded-xl shadow-2xl shadow-primary/30 transition-all duration-300 hover:bg-accent"
                            >
                                Apply Now
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="/tournaments"
                                className="inline-flex items-center justify-center px-10 py-5 bg-white/15 backdrop-blur-sm text-primary font-heading font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-white"
                            >
                                View Tournaments
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
