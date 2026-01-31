'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import PageHero from '@/components/PageHero';

// --- Partner Tier Indicator ---
const TierDot: React.FC<{ tier: 'development' | 'regional' | 'national' | 'founding' }> = ({ tier }) => {
    const colors = {
        development: 'bg-[#2E7D32]',
        regional: 'bg-[#1565C0]',
        national: 'bg-[#7B1FA2]',
        founding: 'bg-[#C9973F]',
    };

    if (tier === 'founding') {
        return (
            <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] text-[#C9973F]">
                ☆
            </span>
        );
    }

    return <span className={`inline-block w-3.5 h-3.5 rounded-full ${colors[tier]}`} />;
};

// --- Main Page ---
export default function TournamentsPage() {
    const tiers = [
        { key: 'development' as const, label: 'Development Partner', color: 'bg-[#2E7D32]' },
        { key: 'regional' as const, label: 'Regional Partner', color: 'bg-[#1565C0]' },
        { key: 'national' as const, label: 'National Partner', color: 'bg-[#7B1FA2]' },
        { key: 'founding' as const, label: 'Founding Partner', star: true },
    ];

    const seasons = [
        {
            season: 'Spring',
            timeframe: 'Feb – Apr',
            events: ['Spring Youth Open', 'Regional Spring Qualifiers', 'U11 Development Festival'],
            ageGroups: 'U11–U17',
            purpose: 'Season kickoff, evaluation, early qualification',
            tiers: ['development', 'regional', 'national', 'founding'] as const,
        },
        {
            season: 'Summer',
            timeframe: 'May – Jul',
            events: ['Summer Prep Series', 'TCL Regional Championships', 'High-Performance Youth Camp*'],
            ageGroups: 'U13–U19',
            purpose: 'High-level competition, national preparation',
            tiers: ['regional', 'national', 'founding'] as const,
        },
        {
            season: 'Nationals',
            timeframe: 'Jul – Aug',
            events: ['TCL National Youth Championships', 'Elite Showcase Matches', 'Girls Youth Invitational*'],
            ageGroups: 'U11–U19',
            purpose: 'Flagship national competition & recognition',
            tiers: ['national', 'founding'] as const,
            featured: true,
        },
        {
            season: 'Fall',
            timeframe: 'Sep – Oct',
            events: ['Fall Youth Open', 'Regional Fall Qualifiers', 'Academy Showcase Weekend'],
            ageGroups: 'U11–U19',
            purpose: 'Continued development, exposure, progression',
            tiers: ['regional', 'national', 'founding'] as const,
        },
        {
            season: 'Winter',
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
            className="bg-[#FAFAFA] min-h-screen"
        >
            <PageHero
                title="Tournaments"
                description="Academy Partner Access Included – Your comprehensive guide to TCL's annual tournament calendar."
                image="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=95&w=2600"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Tournaments', active: true }
                ]}
                badges={
                    <div className="px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center gap-2.5">
                        <Calendar className="text-secondary" size={16} />
                        <span className="text-white text-xs font-medium tracking-wide">2025 Season</span>
                    </div>
                }
            />

            {/* Calendar Section */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 md:px-8 max-w-6xl">

                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <h1 className="text-[#1A3350] text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight leading-tight mb-3">
                            Texoma Cricket League – Annual Tournament Calendar
                        </h1>
                        <p className="text-[#1A3350]/60 text-base md:text-lg font-normal">
                            Academy Partner Access Included
                        </p>
                    </motion.header>

                    {/* Tier Legend */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mb-14"
                    >
                        <h2 className="text-[#1A3350] text-sm font-semibold mb-5">Tier Legend</h2>
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                            {tiers.map((t, i) => (
                                <div key={i} className="flex items-center gap-2.5">
                                    {t.star ? (
                                        <span className="text-[#C9973F] text-base">☆</span>
                                    ) : (
                                        <span className={`w-3.5 h-3.5 rounded-full ${t.color}`} />
                                    )}
                                    <span className="text-[#1A3350]/80 text-sm">{t.label}</span>
                                    {i < tiers.length - 1 && (
                                        <span className="text-[#1A3350]/20 ml-4 hidden md:inline">|</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Table Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-[#1A3350] text-xl md:text-2xl font-semibold mb-8 uppercase tracking-wide"
                    >
                        TCL One-Page Calendar <span className="font-normal text-[#1A3350]/50">(Table View)</span>
                    </motion.h2>

                    {/* Desktop Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="hidden lg:block mb-16"
                    >
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-[#1A3350]/10">
                                    <th className="py-4 pr-6 text-[#1A3350] text-xs font-semibold uppercase tracking-wider">Season</th>
                                    <th className="py-4 pr-6 text-[#1A3350] text-xs font-semibold uppercase tracking-wider">Timeframe</th>
                                    <th className="py-4 pr-6 text-[#1A3350] text-xs font-semibold uppercase tracking-wider">Key Events</th>
                                    <th className="py-4 pr-6 text-[#1A3350] text-xs font-semibold uppercase tracking-wider">Age Groups</th>
                                    <th className="py-4 pr-6 text-[#1A3350] text-xs font-semibold uppercase tracking-wider">Primary Purpose</th>
                                    <th className="py-4 text-[#1A3350] text-xs font-semibold uppercase tracking-wider">Partner Tier Access</th>
                                </tr>
                            </thead>
                            <tbody>
                                {seasons.map((s, i) => (
                                    <tr key={i} className="border-b border-[#1A3350]/5 hover:bg-white/60 transition-colors">
                                        <td className="py-5 pr-6">
                                            <span className={`text-[15px] font-semibold ${s.featured ? 'text-[#1A3350]' : 'text-[#1A3350]'}`}>
                                                {s.season}
                                            </span>
                                        </td>
                                        <td className="py-5 pr-6">
                                            <span className="text-[#1A3350]/70 text-sm">{s.timeframe}</span>
                                        </td>
                                        <td className="py-5 pr-6">
                                            <div className="space-y-0.5">
                                                {s.events.map((e, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`text-sm leading-relaxed ${s.featured && idx === 0
                                                            ? 'font-semibold text-[#1A3350]'
                                                            : 'text-[#1A3350]/75'
                                                            } ${e.includes('*') ? 'italic' : ''}`}
                                                    >
                                                        {e}
                                                    </div>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="py-5 pr-6">
                                            <span className="text-[#1A3350]/70 text-sm">{s.ageGroups}</span>
                                        </td>
                                        <td className="py-5 pr-6">
                                            <span className="text-[#1A3350]/60 text-sm italic">{s.purpose}</span>
                                        </td>
                                        <td className="py-5">
                                            <div className="flex items-center gap-2">
                                                {s.tiers.map((tier, idx) => (
                                                    <TierDot key={idx} tier={tier} />
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>

                    {/* Mobile View */}
                    <div className="lg:hidden space-y-6 mb-14">
                        {seasons.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white rounded-xl p-5 border border-[#1A3350]/5"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-[#1A3350] font-semibold text-lg">{s.season}</h3>
                                        <span className="text-[#1A3350]/50 text-sm">{s.timeframe}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        {s.tiers.map((tier, idx) => (
                                            <TierDot key={idx} tier={tier} />
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <p className="text-[#1A3350]/40 text-[10px] uppercase tracking-widest font-medium mb-2">Key Events</p>
                                    {s.events.map((e, idx) => (
                                        <p key={idx} className={`text-sm ${s.featured && idx === 0 ? 'font-semibold text-[#1A3350]' : 'text-[#1A3350]/70'} ${e.includes('*') ? 'italic' : ''}`}>
                                            • {e}
                                        </p>
                                    ))}
                                </div>

                                <div className="flex gap-8 pt-4 border-t border-[#1A3350]/5">
                                    <div>
                                        <p className="text-[#1A3350]/40 text-[10px] uppercase tracking-widest font-medium mb-1">Age Groups</p>
                                        <p className="text-[#1A3350]/80 text-sm">{s.ageGroups}</p>
                                    </div>
                                    <div>
                                        <p className="text-[#1A3350]/40 text-[10px] uppercase tracking-widest font-medium mb-1">Purpose</p>
                                        <p className="text-[#1A3350]/60 text-sm italic">{s.purpose}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Planning Notes */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                    >
                        <h2 className="text-[#1A3350] text-xl md:text-2xl font-semibold mb-6">
                            Planning Notes for Partners
                        </h2>
                        <ul className="space-y-3">
                            {notes.map((n, i) => (
                                <li key={i} className="flex items-start gap-3 text-[#1A3350]/80 text-[15px] leading-relaxed">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1A3350]/30 flex-shrink-0" />
                                    <span>
                                        {n.prefix}{n.prefix ? ' ' : ''}
                                        <strong className="font-semibold text-[#1A3350]">{n.bold}</strong>
                                        {n.suffix}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Tournament Rules & Eligibility */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-16 bg-white rounded-2xl p-8 md:p-10 border border-[#1A3350]/10"
                    >
                        <h2 className="text-[#1A3350] text-xl md:text-2xl font-semibold mb-6">
                            Tournament Rules & Eligibility
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-[#1A3350] font-semibold mb-3">General Rules</h3>
                                <ul className="space-y-2 text-[#1A3350]/70 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9973F] mt-2 flex-shrink-0" />
                                        All matches follow ICC Youth Cricket regulations
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9973F] mt-2 flex-shrink-0" />
                                        Teams must have minimum 8, maximum 15 registered players
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9973F] mt-2 flex-shrink-0" />
                                        All equipment must meet safety standards
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9973F] mt-2 flex-shrink-0" />
                                        Players must wear appropriate cricket attire
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[#1A3350] font-semibold mb-3">Eligibility Requirements</h3>
                                <ul className="space-y-2 text-[#1A3350]/70 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9973F] mt-2 flex-shrink-0" />
                                        Players must fall within designated age group as of January 1st
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9973F] mt-2 flex-shrink-0" />
                                        Valid ID/birth certificate required for verification
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9973F] mt-2 flex-shrink-0" />
                                        Signed parental consent form for all minors
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9973F] mt-2 flex-shrink-0" />
                                        Registration must be completed 7 days before tournament
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Venue Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35 }}
                        className="mt-10 bg-gradient-to-br from-[#1A3350] to-[#0f1f30] rounded-2xl p-8 md:p-10 text-white"
                    >
                        <h2 className="text-xl md:text-2xl font-semibold mb-6">
                            Venue: Sports Texoma
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-[#C9973F] font-semibold mb-2 text-sm uppercase tracking-wider">Location</h3>
                                <p className="text-white/80">1234 Heritage Way</p>
                                <p className="text-white/80">Pottsboro, TX 75076</p>
                            </div>
                            <div>
                                <h3 className="text-[#C9973F] font-semibold mb-2 text-sm uppercase tracking-wider">Facilities</h3>
                                <ul className="text-white/80 space-y-1 text-sm">
                                    <li>• 4 Professional Cricket Pitches</li>
                                    <li>• Indoor Practice Nets</li>
                                    <li>• Spectator Seating</li>
                                    <li>• Modern Clubhouse</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[#C9973F] font-semibold mb-2 text-sm uppercase tracking-wider">Amenities</h3>
                                <ul className="text-white/80 space-y-1 text-sm">
                                    <li>• Free Parking</li>
                                    <li>• Concession Stand</li>
                                    <li>• Restrooms</li>
                                    <li>• First Aid Station</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Past Tournament Results */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-10 bg-[#FAFAFA] rounded-2xl p-8 md:p-10 border border-[#1A3350]/5"
                    >
                        <h2 className="text-[#1A3350] text-xl md:text-2xl font-semibold mb-6">
                            Past Tournament Results
                        </h2>
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-[#1A3350]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Calendar className="text-[#1A3350]/40" size={28} />
                            </div>
                            <p className="text-[#1A3350]/60 text-lg font-medium mb-2">Coming Soon</p>
                            <p className="text-[#1A3350]/40 text-sm max-w-md mx-auto">
                                Results and photos from our tournaments will be posted here after each event.
                                Stay tuned for highlights from our upcoming 2025 season!
                            </p>
                        </div>
                    </motion.div>

                </div>
            </section>
        </motion.div>
    );
}
