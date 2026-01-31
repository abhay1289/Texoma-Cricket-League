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
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
        <span className="font-heading text-secondary font-semibold uppercase tracking-[0.2em] text-[11px] block mb-3">{label}</span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary font-bold leading-tight">{title}</h2>
        {description && <p className="font-body text-primary/60 text-lg mt-4 max-w-3xl mx-auto">{description}</p>}
    </div>
);

const CheckIcon: React.FC<{ status: boolean | 'limited' }> = ({ status }) => {
    if (status === true) return <Check className="text-green-500" size={18} />;
    if (status === 'limited') return <span className="text-yellow-600 text-sm font-medium">Limited</span>;
    return <X className="text-red-400" size={18} />;
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
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="font-heading text-secondary font-semibold uppercase tracking-[0.2em] text-[11px] block mb-4">TCL Academy Partner Program</span>
                            <h2 className="font-heading text-3xl sm:text-4xl text-primary font-bold mb-6">Partner with Youth Cricket Academies Nationwide</h2>
                            <div className="space-y-4 font-body text-primary/70 text-lg leading-relaxed">
                                <p>Texoma Cricket League (TCL) partners with youth cricket academies that are committed to raising standards, developing players, and competing beyond local leagues on a national stage.</p>
                                <p>Our Academy Partner program connects academies across the United States to a nationally respected competition platform—designed to help youth cricket grow into a mainstream sport in America.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 bg-bg-cream rounded-2xl border border-primary/10"
                        >
                            <h3 className="font-heading text-primary text-xl font-bold mb-6">Who This Program Is For</h3>
                            <p className="font-body text-primary/70 mb-4">This program is ideal for academies that:</p>
                            <ul className="space-y-3">
                                {idealFor.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 font-body text-primary/80">
                                        <Check className="text-secondary mt-1 flex-shrink-0" size={18} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="font-body text-primary/60 text-sm mt-6 italic">TCL Academy Partners are not just participants—they are collaborators in shaping the future of youth cricket in the U.S.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What it Means to Be a Partner */}
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-primary text-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-12">
                        <span className="font-heading text-secondary font-semibold uppercase tracking-[0.2em] text-[11px] block mb-3">Partnerships</span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold">What It Means to Be a TCL Academy Partner</h2>
                        <p className="font-body text-white/70 text-lg mt-4 max-w-3xl mx-auto">
                            As a TCL Academy Partner, your academy becomes part of a national ecosystem built around competition, credibility, and progression.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {gainAccessTo.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-white/10 rounded-xl backdrop-blur-sm"
                            >
                                <Check className="text-secondary mb-4" size={24} />
                                <p className="font-body text-white/90 text-sm">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners vs Non-Partners Comparison */}
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <SectionHeader
                        label="Comparison"
                        title="TCL Academy Partners vs. Non-Partner Academies"
                        description="See the difference between being a partner and participating on an event-by-event basis"
                    />
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
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
                    </div>
                </div>
            </section>

            {/* How Partnership Works */}
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-bg-cream">
                <div className="container mx-auto px-6 max-w-6xl">
                    <SectionHeader label="Process" title="How the Partnership Works" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {howItWorksSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow h-full">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">
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
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeader
                        label="Pricing"
                        title="Academy Partner Membership Tiers"
                        description="Choose the tier that best fits your academy's stage and goals"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {membershipTiers.map((tier, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative p-8 rounded-2xl border-2 transition-all hover:shadow-xl ${tier.badge === 'Most Popular'
                                    ? 'border-secondary bg-secondary/5 scale-105'
                                    : 'border-primary/10 bg-white hover:border-secondary/50'
                                    }`}
                            >
                                {tier.badge && (
                                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wide ${tier.badge === 'Most Popular' ? 'bg-secondary text-white' : 'bg-primary/10 text-primary'
                                        }`}>
                                        {tier.badge}
                                    </div>
                                )}
                                <h3 className="font-heading text-primary text-lg font-bold mt-2 mb-2">{tier.name}</h3>
                                <div className="mb-4">
                                    <span className="font-heading text-4xl text-primary font-bold">{tier.price}</span>
                                    <span className="font-body text-primary/60 text-sm">{tier.period}</span>
                                </div>
                                <p className="font-body text-primary/60 text-sm mb-6 min-h-[60px]">{tier.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature, fi) => (
                                        <li key={fi} className="flex items-start gap-2 font-body text-primary/70 text-sm">
                                            {feature !== '—' ? (
                                                <>
                                                    <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                                                    {feature}
                                                </>
                                            ) : (
                                                <>
                                                    <X className="text-primary/20 mt-0.5 flex-shrink-0" size={16} />
                                                    <span className="text-primary/30">Not included</span>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-lg font-heading font-semibold text-sm uppercase tracking-wide transition-all ${tier.badge === 'Most Popular'
                                    ? 'bg-secondary text-white hover:bg-secondary/90'
                                    : 'bg-primary/5 text-primary hover:bg-primary hover:text-white'
                                    }`}>
                                    Select Tier
                                </button>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-center font-body text-primary/50 text-sm mt-8 italic">
                        Tournament entry fees are charged separately per event.
                    </p>
                </div>
            </section>

            {/* What Fees Pay For */}
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-bg-light">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="p-10 bg-white rounded-2xl shadow-sm">
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
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <SectionHeader label="Expectations" title="What We Expect from Academy Partners" alignment="left" />
                            <p className="font-body text-primary/70 text-lg leading-relaxed">
                                Academy Partners should conduct themselves in a manner that reflects positively on youth cricket and supports the broader goal of growing the sport responsibly in the United States.
                            </p>
                        </div>
                        <div className="p-8 bg-bg-cream rounded-2xl">
                            <h3 className="font-heading text-primary text-xl font-bold mb-6">Why Academies Choose TCL</h3>
                            <ul className="space-y-4">
                                {whyChooseTCL.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 font-body text-primary/80">
                                        <Check className="text-secondary mt-1 flex-shrink-0" size={18} />
                                        <span><strong className="text-primary">{item.bold}</strong>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-secondary">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary font-bold mb-6">
                        Apply to Become a TCL Academy Partner
                    </h2>
                    <p className="font-body text-primary/80 text-lg mb-10 max-w-2xl mx-auto">
                        If your academy is ready to compete on a national stage and be part of a movement that is changing the game for youth cricket, we invite you to apply.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-primary text-white font-heading font-bold text-sm uppercase tracking-wide rounded-lg shadow-xl hover:bg-accent transition-all flex items-center justify-center gap-2"
                        >
                            Apply Now
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="/tournaments"
                            className="px-10 py-4 bg-white text-primary font-heading font-bold text-sm uppercase tracking-wide rounded-lg hover:bg-primary hover:text-white transition-all"
                        >
                            View Tournaments
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
