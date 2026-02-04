'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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

// Subtle background shapes (no animation)
const FloatingShapes = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary/[0.02] rounded-full blur-[100px]" />
        <div className="absolute top-[60%] right-[10%] w-96 h-96 bg-primary/[0.02] rounded-full blur-[120px]" />
    </div>
);

// Premium pattern background
const PremiumPattern = () => (
    <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A3350' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }} />
);

// Simple card wrapper (no glow)
const GlowBorder = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`relative ${className}`}>
        {children}
    </div>
);

const CheckIcon: React.FC<{ status: boolean | 'limited' }> = ({ status }) => {
    if (status === true) return (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <Check className="text-emerald-500" size={16} />
        </span>
    );
    if (status === 'limited') return (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20">
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
    const [activeTab, setActiveTab] = useState(0);

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
                        <div className="lg:col-span-7">
                            {/* Premium badge */}
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-10 rounded-full bg-secondary/10 border border-secondary/20">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20">
                                    <Sparkles className="w-3.5 h-3.5 text-secondary" />
                                </span>
                                <span className="font-heading text-secondary font-bold uppercase tracking-[0.25em] text-xs">TCL Academy Partner Program</span>
                            </div>

                            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primary font-bold leading-[0.95] tracking-[-0.03em] mb-6 sm:mb-8">
                                Partner with Youth Cricket Academies{' '}
                                <span className="relative inline-block">
                                    <span className="text-secondary">Nationwide</span>
                                    <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                                        <path d="M2 6C50 2 150 2 198 6" stroke="rgb(201,151,63)" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </h2>

                            <div className="space-y-4 sm:space-y-5 font-body text-primary/60 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
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
                                    <div key={i} className="text-center">
                                        <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">{stat.value}</div>
                                        <div className="font-body text-primary/40 text-sm mt-1 uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <GlowBorder>
                                <div className="relative p-10 lg:p-12 bg-white rounded-[2rem] border border-primary/[0.08] shadow-lg">
                                    {/* Card header decoration */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-md rotate-3">
                                        <Users className="text-white w-8 h-8" />
                                    </div>

                                    <h3 className="font-heading text-primary text-2xl font-bold mt-6 mb-3 text-center">Who This Program Is For</h3>
                                    <p className="font-body text-primary/50 mb-8 text-center text-sm">This program is ideal for academies that:</p>

                                    <ul className="space-y-5">
                                        {idealFor.map((item, i) => (
                                            <li key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-primary/[0.03] to-transparent hover:from-secondary/[0.08] transition-all duration-300 group">
                                                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                                    <Check className="text-secondary" size={18} />
                                                </span>
                                                <span className="font-body text-primary/75 text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </GlowBorder>
                        </div>
                    </div>
                </div>
            </section>

            {/* What It Means to Be a Partner - Balanced Layout */}
            <section className="py-24 lg:py-32 bg-[#0B1221] text-white">
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl">

                    {/* Centered Header */}
                    <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
                        <div className="w-16 h-2 bg-secondary mb-8 rounded-full" />
                        <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
                            What It Means to Be a <span className="text-secondary">TCL Partner</span>
                        </h2>
                        <p className="font-body text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                            As a TCL Academy Partner, your academy becomes part of a national ecosystem built around competition, credibility, and progression.
                        </p>
                    </div>

                    {/* Centered Benefits Grid */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {gainAccessTo.map((item, i) => (
                            <div
                                key={i}
                                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-[#131b2e] border border-white/5 p-8 rounded-xl hover:border-secondary/50 transition-colors duration-300 flex flex-col items-start"
                            >
                                <div className="w-12 h-12 bg-[#0B1221] rounded-lg flex items-center justify-center mb-6 text-secondary border border-white/5 shrink-0">
                                    {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                                </div>
                                <h3 className="font-heading text-lg font-bold text-white mb-3">{item.title}</h3>
                                <p className="font-body text-sm text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Centered CTA */}
                    <div className="mt-16 text-center">
                        <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-secondary text-white font-heading font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-secondary/90 transition-colors">
                            Become a Partner
                        </Link>
                    </div>

                </div>
            </section>

            {/* Detailed Benefits Analysis - Interactive Tabbed Matrix */}
            <section className="py-32 lg:py-40 bg-[#FAFAF8] relative overflow-hidden texture-noise">
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2.5 font-heading text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-6 px-6 py-2.5 bg-white border border-primary/5 shadow-sm rounded-full">
                            Comparison
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary font-bold leading-[0.9] tracking-[-0.03em]">
                            Full Comparison Matrix
                        </h2>
                    </div>

                    {/* Tabs Component - Physical Design */}
                    <div className="rounded-[2.5rem] bg-white border border-primary/5 shadow-2xl overflow-hidden backdrop-blur-sm relative min-h-[600px]">
                        {/* Tab Headers */}
                        <div className="flex border-b border-primary/5 bg-primary/[0.02] overflow-x-auto scrollbar-hide">
                            {['Overview', 'Facilities & Training', 'Partner vs Non-Partner'].map((tab, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(i)}
                                    className={`px-8 py-6 font-heading font-bold text-sm uppercase tracking-widest whitespace-nowrap transition-all relative
                                        ${activeTab === i ? 'text-primary' : 'text-primary/40 hover:text-primary/70'}
                                    `}
                                >
                                    {tab}
                                    {activeTab === i && (
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary shadow-[0_-2px_10px_rgba(201,151,63,0.5)]" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="p-0">
                            {activeTab === 0 && (
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[800px]">
                                        <thead>
                                            <tr className="bg-primary/[0.01]">
                                                <th className="text-left py-6 px-8 font-heading text-primary/40 font-bold text-xs uppercase tracking-widest border-b border-primary/5 w-1/3">Benefit Feature</th>
                                                <th className="text-center py-6 px-4 font-heading text-secondary font-bold text-xs uppercase tracking-widest border-b border-primary/5 w-1/6">Founding</th>
                                                <th className="text-center py-6 px-4 font-heading text-primary/80 font-bold text-xs uppercase tracking-widest border-b border-primary/5 w-1/6">National</th>
                                                <th className="text-center py-6 px-4 font-heading text-primary/60 font-bold text-xs uppercase tracking-widest border-b border-primary/5 w-1/6">Regional</th>
                                                <th className="text-center py-6 px-4 font-heading text-primary/40 font-bold text-xs uppercase tracking-widest border-b border-primary/5 w-1/6">Dev</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {partnerTierOverview.map((row, i) => (
                                                <tr key={i} className="group hover:bg-primary/[0.02] transition-colors">
                                                    <td className="py-5 px-8 font-heading text-primary font-bold text-sm border-b border-primary/5 leading-snug group-hover:text-secondary transition-colors">
                                                        {row.benefit}
                                                    </td>
                                                    <td className="text-center py-5 px-4 bg-secondary/[0.03] border-b border-primary/5 border-l border-r border-dashed border-secondary/20">
                                                        {typeof row.founding === 'boolean' ? (
                                                            <div className="flex justify-center"><CheckIcon status={row.founding} /></div>
                                                        ) : (
                                                            <span className="font-heading text-secondary text-xs font-bold uppercase tracking-wide">{row.founding}</span>
                                                        )}
                                                    </td>
                                                    <td className="text-center py-5 px-4 border-b border-primary/5">
                                                        {typeof row.national === 'boolean' ? (
                                                            <div className="flex justify-center"><CheckIcon status={row.national} /></div>
                                                        ) : (
                                                            <span className="font-body text-primary/70 text-xs font-medium">{row.national}</span>
                                                        )}
                                                    </td>
                                                    <td className="text-center py-5 px-4 border-b border-primary/5 bg-primary/[0.01]">
                                                        {typeof row.regional === 'boolean' ? (
                                                            <div className="flex justify-center"><CheckIcon status={row.regional} /></div>
                                                        ) : (
                                                            <span className="font-body text-primary/50 text-xs">{row.regional}</span>
                                                        )}
                                                    </td>
                                                    <td className="text-center py-5 px-4 border-b border-primary/5">
                                                        {typeof row.development === 'boolean' ? (
                                                            <div className="flex justify-center"><CheckIcon status={row.development} /></div>
                                                        ) : (
                                                            <span className="font-body text-primary/30 text-xs">{row.development}</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {activeTab === 1 && (
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[800px]">
                                        <thead>
                                            <tr className="bg-primary/[0.01]">
                                                <th className="text-left py-6 px-8 font-heading text-primary/40 font-bold text-xs uppercase tracking-widest border-b border-primary/5 w-1/3">Access Type</th>
                                                <th className="text-center py-6 px-4 font-heading text-secondary font-bold text-xs uppercase tracking-widest border-b border-primary/5 w-1/6">Founding</th>
                                                <th className="text-center py-6 px-4 font-heading text-primary/80 font-bold text-xs uppercase tracking-widest border-b border-primary/5 w-1/6">National</th>
                                                <th className="text-center py-6 px-4 font-heading text-primary/60 font-bold text-xs uppercase tracking-widest border-b border-primary/5 w-1/6">Regional</th>
                                                <th className="text-center py-6 px-4 font-heading text-primary/40 font-bold text-xs uppercase tracking-widest border-b border-primary/5 w-1/6">Dev</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {facilitiesAccess.map((row, i) => (
                                                <tr key={`fac-${i}`} className="group hover:bg-primary/[0.02] transition-colors">
                                                    <td className="py-5 px-8 font-heading text-primary font-bold text-sm border-b border-primary/5 leading-snug group-hover:text-secondary transition-colors">
                                                        {row.benefit}
                                                    </td>
                                                    <td className="text-center py-5 px-4 bg-secondary/[0.03] border-b border-primary/5 border-l border-r border-dashed border-secondary/20">
                                                        <span className="font-body text-secondary text-xs font-bold">{typeof row.founding === 'string' ? row.founding : (row.founding ? 'Included' : '—')}</span>
                                                    </td>
                                                    <td className="text-center py-5 px-4 border-b border-primary/5">
                                                        <span className="font-body text-primary/70 text-xs">{typeof row.national === 'string' ? row.national : (row.national ? 'Included' : '—')}</span>
                                                    </td>
                                                    <td className="text-center py-5 px-4 border-b border-primary/5 bg-primary/[0.01]">
                                                        <span className="font-body text-primary/50 text-xs">{typeof row.regional === 'string' ? row.regional : (row.regional ? 'Included' : '—')}</span>
                                                    </td>
                                                    <td className="text-center py-5 px-4 border-b border-primary/5">
                                                        <span className="font-body text-primary/30 text-xs">{typeof row.development === 'string' ? row.development : (row.development ? 'Included' : '—')}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {activeTab === 2 && (
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[600px]">
                                        <thead>
                                            <tr className="bg-primary/[0.01]">
                                                <th className="text-left py-6 px-8 font-heading text-primary/40 font-bold text-xs uppercase tracking-widest border-b border-primary/5 w-1/3">Feature / Access</th>
                                                <th className="text-center py-6 px-4 font-heading text-secondary font-bold text-xs uppercase tracking-widest border-b border-primary/5 w-1/3">TCL Partner</th>
                                                <th className="text-center py-6 px-4 font-heading text-primary/40 font-bold text-xs uppercase tracking-widest border-b border-primary/5 w-1/3">Non-Partner</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {partnerComparison.map((row, i) => (
                                                <tr key={i} className="group hover:bg-primary/[0.02] transition-colors">
                                                    <td className="py-5 px-8 font-heading text-primary font-bold text-sm border-b border-primary/5 leading-snug group-hover:text-secondary transition-colors">
                                                        {row.feature}
                                                    </td>
                                                    <td className="text-center py-5 px-8 bg-secondary/[0.03] border-b border-primary/5 border-l border-r border-dashed border-secondary/20">
                                                        <div className="flex items-center justify-center gap-3">
                                                            <CheckIcon status={row.partnerCheck} />
                                                            <span className="font-body text-primary/80 text-sm font-medium">{row.partner}</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-center py-5 px-8 border-b border-primary/5 bg-primary/[0.01] opacity-50 grayscale">
                                                        <div className="flex items-center justify-center gap-3">
                                                            <CheckIcon status={row.nonPartnerCheck} />
                                                            {row.nonPartnerCheck !== 'limited' && <span className="font-body text-primary/60 text-sm">{row.nonPartner}</span>}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Need Help CTA - Elegant Inline */}
            <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative -mt-10 mb-32 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white border border-primary/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                            <Users className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                            <h4 className="font-heading text-primary font-bold text-lg">Need help choosing a tier?</h4>
                            <p className="font-body text-primary/50 text-sm">Our partnership team can guide you to the right fit.</p>
                        </div>
                    </div>
                    <Link href="/contact" className="px-6 py-3 bg-white border border-primary/10 rounded-xl font-heading text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary/5 transition-colors whitespace-nowrap">
                        Contact Us
                    </Link>
                </div>
            </div>

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
                    <div className="text-center mb-20">
                        <span className="inline-flex items-center gap-3 font-heading text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-8 px-6 py-3 bg-white/[0.06] backdrop-blur-sm rounded-full border border-white/[0.1]">
                            <Rocket className="w-4 h-4" />
                            Process
                        </span>
                        <h2 className="font-heading text-5xl sm:text-6xl text-white font-bold leading-[0.95] tracking-[-0.03em]">How the Partnership Works</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {howItWorksSteps.map((step, i) => (
                            <div key={i} className="relative group">
                                {/* Connector line */}
                                {i < howItWorksSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-secondary/50 to-secondary/10" />
                                )}

                                <div className="relative p-8 bg-white rounded-[2rem] shadow-lg hover:-translate-y-2 transition-all duration-300">
                                    {/* Step number */}
                                    <div className="absolute -top-5 -left-3 w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center font-heading font-bold text-white text-lg shadow-md rotate-3">
                                        {step.step}
                                    </div>

                                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary mt-4">
                                        {step.icon}
                                    </div>
                                    <h3 className="font-heading text-primary text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="font-body text-primary/55 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Membership Tiers - Premium Physical Cards */}
            <section className="py-32 lg:py-40 bg-white relative overflow-hidden texture-noise">
                {/* Background subtleties */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <div className="text-center mb-24">
                        <span className="inline-flex items-center gap-2.5 font-heading text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-6 px-6 py-2.5 bg-white border border-primary/10 shadow-sm rounded-full">
                            Membership
                        </span>
                        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary font-bold leading-[0.9] tracking-[-0.03em] mb-6">
                            Choose Your <span className="text-secondary">Legacy</span>
                        </h2>
                        <p className="font-body text-primary/60 text-lg max-w-2xl mx-auto leading-relaxed">
                            Select the partnership tier that aligns with your academy's ambition.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {membershipTiers.map((tier, i) => (
                            <div key={i}>
                                {/* The Physical Card */}
                                <div className={`relative h-full rounded-[1.5rem] transition-all duration-500 transform-gpu hover:-translate-y-3 hover:rotate-x-2 
                                    ${tier.name.includes('Founding')
                                        ? 'bg-[#1a1a1a] text-white shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] border-t border-white/10' // Black Card
                                        : tier.name.includes('National')
                                            ? 'bg-[#E5E4E2] text-primary shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] border-t border-white/50' // Platinum
                                            : tier.name.includes('Regional')
                                                ? 'bg-[#F5F5F7] text-primary shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border-t border-white' // Steel
                                                : 'bg-white text-primary shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] border border-primary/5' // White
                                    }
                                    ${tier.badge === 'Most Popular' ? 'ring-1 ring-secondary/50' : ''}
                                `}>

                                    {/* Texture Overlay */}
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-[1.5rem] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />

                                    {/* Card Content Top */}
                                    <div className="p-8 lg:p-10 relative">
                                        {/* Chip/Logo Area */}
                                        <div className="flex justify-between items-start mb-12">
                                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center border border-white/10 backdrop-blur-md ${tier.name.includes('Founding') ? 'text-secondary' : 'text-current opacity-70'}`}>
                                                {tier.icon}
                                            </div>
                                            {tier.badge && (
                                                <span className={`px-3 py-1 rounded text-xs font-heading font-bold uppercase tracking-widest border
                                                    ${tier.badge === 'Most Popular'
                                                        ? 'bg-secondary text-white border-secondary'
                                                        : 'bg-primary/5 text-primary/50 border-primary/10'}
                                                `}>
                                                    {tier.badge}
                                                </span>
                                            )}
                                        </div>

                                        {/* Tier Name */}
                                        <h3 className={`font-heading text-lg font-bold tracking-widest uppercase mb-2 opacity-90`}>
                                            {tier.name}
                                        </h3>

                                        {/* Price */}
                                        <div className="mb-8">
                                            <span className="font-heading text-4xl font-bold tracking-tighter">{tier.price}</span>
                                            <span className="font-body text-xs opacity-60 ml-1">{tier.period}</span>
                                        </div>

                                        {/* Divider */}
                                        <div className={`h-px w-full mb-8 ${tier.name.includes('Founding') ? 'bg-white/10' : 'bg-primary/10'}`} />

                                        {/* Features */}
                                        <ul className="space-y-4 mb-2 min-h-[180px]">
                                            {tier.features.slice(0, 5).map((feature, fi) => (
                                                <li key={fi} className="flex items-start gap-3 text-sm group/item">
                                                    {feature !== '—' ? (
                                                        <>
                                                            <Check size={14} className={`mt-1 flex-shrink-0 ${tier.name.includes('Founding') ? 'text-secondary' : 'text-green-600'}`} />
                                                            <span className="font-body opacity-80 leading-snug">{feature}</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <X size={14} className="mt-1 flex-shrink-0 opacity-20" />
                                                            <span className="font-body opacity-30 leading-snug">Not included</span>
                                                        </>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Card Footer Button */}
                                    <div className="p-8 lg:p-10 pt-0">
                                        <button className={`w-full py-4 rounded-xl font-heading font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300
                                            ${tier.name.includes('Founding')
                                                ? 'bg-gradient-to-r from-secondary to-[#bf9530] text-white hover:shadow-[0_0_20px_rgba(201,151,63,0.4)]'
                                                : 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg'
                                            }
                                        `}>
                                            Select Tier
                                        </button>
                                        <p className="text-center text-xs mt-4 opacity-40 font-body">
                                            Includes {tier.name} benefits
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* What We Expect from Academy Partners */}
            <section className="py-24 lg:py-32 bg-[#FAFAF8] relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2.5 font-heading text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-6 px-6 py-2.5 bg-white border border-primary/5 shadow-sm rounded-full">
                            Expectations
                        </span>
                        <h2 className="font-heading text-4xl sm:text-5xl text-primary font-bold leading-[0.95] tracking-[-0.03em] mb-8">
                            What We Expect from Academy Partners
                        </h2>
                        <div className="max-w-3xl mx-auto p-10 lg:p-12 bg-white rounded-[2rem] border border-primary/[0.06] shadow-lg">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
                                    <Shield className="text-secondary w-7 h-7" />
                                </div>
                                <p className="font-body text-primary/75 text-lg leading-relaxed text-left">
                                    Academy Partners should conduct themselves in a manner that reflects positively on youth cricket and supports the broader goal of growing the sport responsibly in the United States.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Academies Choose TCL */}
            <section className="py-32 lg:py-40 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2.5 font-heading text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-6 px-6 py-2.5 bg-gradient-to-r from-secondary/15 via-secondary/8 to-secondary/15 rounded-full border border-secondary/15">Why TCL</span>
                            <h2 className="font-heading text-4xl sm:text-5xl text-primary font-bold leading-[1.02] tracking-[-0.03em] mb-8">Why Academies Choose TCL</h2>

                            <ul className="space-y-6">
                                {whyChooseTCL.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center mt-1">
                                            <Check className="text-secondary" size={16} />
                                        </span>
                                        <span className="font-body text-primary/70 text-lg leading-relaxed">
                                            <strong className="text-primary font-semibold">{item.bold}</strong>{item.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl opacity-50" />
                            <div className="relative p-10 lg:p-12 bg-white rounded-[2rem] border border-primary/[0.06] shadow-lg">
                                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-8 shadow-md">
                                    <Zap className="text-white w-8 h-8" />
                                </div>
                                <h3 className="font-heading text-primary text-2xl font-bold mb-4">What Your Fees Pay For</h3>
                                <p className="font-body text-primary/50 mb-8 text-sm">Annual membership, not individual event fees</p>
                                <ul className="space-y-4">
                                    {feesBenefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-4 font-body text-primary/65 text-sm">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center mt-0.5">
                                                <Check className="text-emerald-500" size={14} />
                                            </span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 lg:py-40 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/[0.12] via-transparent to-transparent" />
                <PremiumPattern />

                <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative text-center">
                    <div>
                        <span className="inline-flex items-center gap-3 font-heading text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-8 px-6 py-3 bg-white/[0.06] backdrop-blur-sm rounded-full border border-white/[0.1]">
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
                            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-white font-heading font-bold text-sm uppercase tracking-[0.15em] rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                Apply Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/tournaments" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-heading font-bold text-sm uppercase tracking-[0.15em] rounded-2xl border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                                View Tournaments
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}
