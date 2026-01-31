'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Users, Shield, Clock, Star, ChevronRight, CheckCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';

// --- Premium Section Header ---
const SectionHeader: React.FC<{ label: string; title: string; description?: string; light?: boolean }> = ({ label, title, description, light }) => (
    <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <span className={`inline-flex items-center gap-2 font-heading font-semibold uppercase tracking-[0.25em] text-[10px] mb-5 px-5 py-2 rounded-full border ${light ? 'text-secondary bg-white/10 border-white/10' : 'text-secondary bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 border-secondary/10'}`}>{label}</span>
        <h2 className={`font-heading text-4xl sm:text-5xl font-bold leading-[1.05] tracking-[-0.02em] ${light ? 'text-white' : 'text-primary'}`}>{title}</h2>
        {description && <p className={`font-body text-lg lg:text-xl mt-6 max-w-3xl mx-auto leading-relaxed ${light ? 'text-white/60' : 'text-primary/50'}`}>{description}</p>}
    </motion.div>
);

// --- Partner Tier Indicator ---
const TierDot: React.FC<{ tier: 'development' | 'regional' | 'national' | 'founding' }> = ({ tier }) => {
    const colors = {
        development: 'bg-emerald-500',
        regional: 'bg-blue-500',
        national: 'bg-purple-500',
        founding: 'bg-secondary',
    };

    if (tier === 'founding') {
        return (
            <span className="inline-flex items-center justify-center w-5 h-5 text-[12px] text-secondary">
                ★
            </span>
        );
    }

    return <span className={`inline-block w-3 h-3 rounded-full ${colors[tier]} ring-2 ring-white shadow-sm`} />;
};

// --- Main Page ---
export default function TournamentsPage() {
    const tiers = [
        { key: 'development' as const, label: 'Development Partner', color: 'bg-emerald-500', textColor: 'text-emerald-600' },
        { key: 'regional' as const, label: 'Regional Partner', color: 'bg-blue-500', textColor: 'text-blue-600' },
        { key: 'national' as const, label: 'National Partner', color: 'bg-purple-500', textColor: 'text-purple-600' },
        { key: 'founding' as const, label: 'Founding Partner', star: true, textColor: 'text-secondary' },
    ];

    const seasons = [
        {
            season: 'Spring',
            icon: <Star className="w-5 h-5" />,
            timeframe: 'Feb – Apr',
            events: ['Spring Youth Open', 'Regional Spring Qualifiers', 'U11 Development Festival'],
            ageGroups: 'U11–U17',
            purpose: 'Season kickoff, evaluation, early qualification',
            tiers: ['development', 'regional', 'national', 'founding'] as const,
        },
        {
            season: 'Summer',
            icon: <Trophy className="w-5 h-5" />,
            timeframe: 'May – Jul',
            events: ['Summer Prep Series', 'TCL Regional Championships', 'High-Performance Youth Camp*'],
            ageGroups: 'U13–U19',
            purpose: 'High-level competition, national preparation',
            tiers: ['regional', 'national', 'founding'] as const,
        },
        {
            season: 'Nationals',
            icon: <Trophy className="w-5 h-5" />,
            timeframe: 'Jul – Aug',
            events: ['TCL National Youth Championships', 'Elite Showcase Matches', 'Girls Youth Invitational*'],
            ageGroups: 'U11–U19',
            purpose: 'Flagship national competition & recognition',
            tiers: ['national', 'founding'] as const,
            featured: true,
        },
        {
            season: 'Fall',
            icon: <Users className="w-5 h-5" />,
            timeframe: 'Sep – Oct',
            events: ['Fall Youth Open', 'Regional Fall Qualifiers', 'Academy Showcase Weekend'],
            ageGroups: 'U11–U19',
            purpose: 'Continued development, exposure, progression',
            tiers: ['regional', 'national', 'founding'] as const,
        },
        {
            season: 'Winter',
            icon: <Shield className="w-5 h-5" />,
            timeframe: 'Nov – Jan',
            events: ['Winter Indoor Youth Cup', 'Year-End Development Camp', 'Coaches Workshop*'],
            ageGroups: 'U11–U17',
            purpose: 'Skill development, indoor play, planning',
            tiers: ['development', 'regional', 'national', 'founding'] as const,
        },
    ];

    const notes = [
        { prefix: 'The TCL tournament calendar is released', bold: 'annually', suffix: ' to support advance planning' },
        { prefix: 'Final tournament dates are confirmed and published', bold: '90–120 days in advance', suffix: '' },
        { prefix: 'Academies may participate in', bold: 'select events or across multiple seasons', suffix: ', based on interest and eligibility' },
        { prefix: '', bold: 'Tournament entry fees are charged per event', suffix: ', separate from Academy Partner membership' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-bg-light min-h-screen"
        >
            <PageHero
                title="Tournaments"
                description="Your comprehensive guide to TCL's annual tournament calendar"
                image="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=95&w=2600"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Tournaments', active: true }
                ]}
                badges={
                    <div className="flex items-center gap-3">
                        <div className="px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center gap-2.5">
                            <Calendar className="text-secondary" size={16} />
                            <span className="text-white text-xs font-semibold tracking-wide uppercase">2025 Season</span>
                        </div>
                        <div className="px-5 py-2.5 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30 flex items-center gap-2.5">
                            <Trophy className="text-secondary" size={16} />
                            <span className="text-secondary text-xs font-semibold tracking-wide uppercase">Partner Access</span>
                        </div>
                    </div>
                }
            />

            {/* Calendar Section */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
                {/* Premium dot pattern */}
                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                {/* Decorative gradient orbs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/[0.03] rounded-full blur-[100px]" />

                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <SectionHeader
                        label="Annual Calendar"
                        title="Texoma Cricket League Tournament Schedule"
                        description="Plan your season with our comprehensive tournament calendar"
                    />

                    {/* Tier Legend */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mb-12 p-6 bg-[#FAFAF8] rounded-2xl border border-primary/[0.06]"
                    >
                        <h3 className="text-primary text-xs font-heading font-bold uppercase tracking-[0.2em] mb-5">Partner Tier Access Legend</h3>
                        <div className="flex flex-wrap items-center gap-6 lg:gap-10">
                            {tiers.map((t, i) => (
                                <div key={i} className="flex items-center gap-3 group">
                                    {t.star ? (
                                        <span className="text-secondary text-lg">★</span>
                                    ) : (
                                        <span className={`w-4 h-4 rounded-full ${t.color} ring-2 ring-white shadow-md`} />
                                    )}
                                    <span className={`font-body text-sm font-medium ${t.textColor}`}>{t.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Season Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {seasons.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className={`group relative ${s.featured ? 'lg:col-span-1' : ''}`}
                            >
                                {/* Featured glow */}
                                {s.featured && (
                                    <div className="absolute -inset-[2px] bg-gradient-to-br from-secondary via-secondary/50 to-primary rounded-[1.75rem] opacity-80" />
                                )}
                                <div className={`relative h-full p-8 rounded-3xl transition-all duration-500 ${s.featured
                                    ? 'bg-primary text-white'
                                    : 'bg-white border border-primary/[0.06] hover:border-primary/[0.12] hover:shadow-[0_25px_60px_rgb(0,0,0,0.08)]'
                                    }`}>
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.featured ? 'bg-secondary/20 text-secondary' : 'bg-gradient-to-br from-secondary/15 to-secondary/5 text-secondary'}`}>
                                                {s.icon}
                                            </div>
                                            <h3 className={`font-heading text-2xl font-bold ${s.featured ? 'text-white' : 'text-primary'}`}>{s.season}</h3>
                                            <span className={`font-body text-sm ${s.featured ? 'text-white/50' : 'text-primary/40'}`}>{s.timeframe}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 flex-wrap justify-end">
                                            {s.tiers.map((tier, idx) => (
                                                <TierDot key={idx} tier={tier} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Events */}
                                    <div className="mb-6">
                                        <p className={`text-[10px] uppercase tracking-[0.2em] font-heading font-bold mb-3 ${s.featured ? 'text-white/40' : 'text-primary/30'}`}>Key Events</p>
                                        <ul className="space-y-2">
                                            {s.events.map((e, idx) => (
                                                <li key={idx} className={`flex items-start gap-2 text-sm ${s.featured ? 'text-white/80' : 'text-primary/70'} ${e.includes('*') ? 'italic' : ''}`}>
                                                    <ChevronRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${s.featured ? 'text-secondary' : 'text-secondary/60'}`} />
                                                    <span className={idx === 0 && s.featured ? 'font-semibold text-white' : ''}>{e}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Footer */}
                                    <div className={`pt-5 border-t ${s.featured ? 'border-white/10' : 'border-primary/[0.05]'}`}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className={`text-[9px] uppercase tracking-[0.15em] font-heading font-bold mb-1 ${s.featured ? 'text-white/30' : 'text-primary/25'}`}>Ages</p>
                                                <p className={`font-heading font-bold ${s.featured ? 'text-secondary' : 'text-primary'}`}>{s.ageGroups}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className={`text-[9px] uppercase tracking-[0.15em] font-heading font-bold mb-1 ${s.featured ? 'text-white/30' : 'text-primary/25'}`}>Purpose</p>
                                                <p className={`text-xs italic max-w-[140px] ${s.featured ? 'text-white/60' : 'text-primary/50'}`}>{s.purpose}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {s.featured && (
                                        <div className="absolute -top-3 left-8 px-4 py-1.5 bg-secondary text-white rounded-full text-[9px] font-heading font-bold uppercase tracking-[0.15em] shadow-lg shadow-secondary/40">
                                            Flagship Event
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Planning Notes */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 lg:p-10 bg-[#FAFAF8] rounded-3xl border border-primary/[0.06]"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-br from-secondary/15 to-secondary/5 rounded-xl flex items-center justify-center">
                                <Clock className="text-secondary w-6 h-6" />
                            </div>
                            <h2 className="font-heading text-2xl text-primary font-bold">Planning Notes for Partners</h2>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {notes.map((n, i) => (
                                <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-primary/[0.04]">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
                                        <CheckCircle className="text-secondary w-3.5 h-3.5" />
                                    </span>
                                    <span className="font-body text-primary/70 text-[15px] leading-relaxed">
                                        {n.prefix}{n.prefix ? ' ' : ''}
                                        <strong className="font-semibold text-primary">{n.bold}</strong>
                                        {n.suffix}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Tournament Rules & Eligibility */}
            <section className="py-24 lg:py-32 bg-[#FAFAF8] relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[80px]" />
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <SectionHeader
                        label="Rules"
                        title="Tournament Rules & Eligibility"
                        description="Everything you need to know to participate"
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 lg:p-10 bg-white rounded-3xl border border-primary/[0.06] shadow-[0_8px_30px_rgb(0,0,0,0.03)]"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center">
                                    <Shield className="text-primary w-6 h-6" />
                                </div>
                                <h3 className="font-heading text-xl text-primary font-bold">General Rules</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    'All matches follow ICC Youth Cricket regulations',
                                    'Teams must have minimum 8, maximum 15 registered players',
                                    'All equipment must meet safety standards',
                                    'Players must wear appropriate cricket attire'
                                ].map((rule, i) => (
                                    <li key={i} className="flex items-start gap-3 font-body text-primary/70 text-[15px]">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mt-0.5">
                                            <CheckCircle className="text-secondary w-3 h-3" />
                                        </span>
                                        {rule}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 lg:p-10 bg-white rounded-3xl border border-primary/[0.06] shadow-[0_8px_30px_rgb(0,0,0,0.03)]"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-gradient-to-br from-secondary/15 to-secondary/5 rounded-xl flex items-center justify-center">
                                    <Users className="text-secondary w-6 h-6" />
                                </div>
                                <h3 className="font-heading text-xl text-primary font-bold">Eligibility Requirements</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    'Players must fall within designated age group as of January 1st',
                                    'Valid ID/birth certificate required for verification',
                                    'Signed parental consent form for all minors',
                                    'Registration must be completed 7 days before tournament'
                                ].map((req, i) => (
                                    <li key={i} className="flex items-start gap-3 font-body text-primary/70 text-[15px]">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mt-0.5">
                                            <CheckCircle className="text-secondary w-3 h-3" />
                                        </span>
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Venue Section */}
            <section className="py-24 lg:py-32 relative overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000)' }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-primary/90" />
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <SectionHeader
                        label="Venue"
                        title="Sports Texoma"
                        description="Our world-class facility for all TCL tournaments"
                        light
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                icon: <MapPin className="w-6 h-6" />,
                                title: 'Location',
                                items: ['1234 Heritage Way', 'Pottsboro, TX 75076']
                            },
                            {
                                icon: <Trophy className="w-6 h-6" />,
                                title: 'Facilities',
                                items: ['4 Professional Cricket Pitches', 'Indoor Practice Nets', 'Spectator Seating', 'Modern Clubhouse']
                            },
                            {
                                icon: <Shield className="w-6 h-6" />,
                                title: 'Amenities',
                                items: ['Free Parking', 'Concession Stand', 'Restrooms', 'First Aid Station']
                            }
                        ].map((section, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-3xl hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-secondary/15 rounded-xl flex items-center justify-center mb-6 text-secondary">
                                    {section.icon}
                                </div>
                                <h3 className="font-heading text-secondary font-bold text-sm uppercase tracking-[0.15em] mb-4">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className="text-white/75 font-body text-[15px]">{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Tournament Results */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 lg:p-16 bg-[#FAFAF8] rounded-3xl border border-primary/[0.06] text-center"
                    >
                        <div className="w-20 h-20 bg-gradient-to-br from-secondary/15 to-secondary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Calendar className="text-secondary w-10 h-10" />
                        </div>
                        <h2 className="font-heading text-3xl text-primary font-bold mb-4">Past Tournament Results</h2>
                        <p className="font-body text-primary/50 text-lg mb-2">Coming Soon</p>
                        <p className="font-body text-primary/40 text-sm max-w-md mx-auto leading-relaxed">
                            Results and photos from our tournaments will be posted here after each event.
                            Stay tuned for highlights from our upcoming 2025 season!
                        </p>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}
