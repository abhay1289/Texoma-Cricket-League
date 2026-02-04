'use client';

import React from 'react';
import { Calendar, Trophy, Users, Shield, Clock, Star, CheckCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';

// --- Premium Section Header ---
const SectionHeader: React.FC<{ label: string; title: string; description?: string; light?: boolean }> = ({ label, title, description, light }) => (
    <div className="mb-16 text-center">
        <span className={`inline-flex items-center gap-2 font-heading font-semibold uppercase tracking-[0.25em] text-xs mb-5 px-5 py-2 rounded-full border ${light ? 'text-secondary bg-white/10 border-white/10' : 'text-secondary bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 border-secondary/10'}`}>{label}</span>
        <h2 className={`font-heading text-4xl sm:text-5xl font-bold leading-[1.05] tracking-[-0.02em] ${light ? 'text-white' : 'text-primary'}`}>{title}</h2>
        {description && <p className={`font-body text-lg lg:text-xl mt-6 max-w-3xl mx-auto leading-relaxed ${light ? 'text-white/60' : 'text-primary/50'}`}>{description}</p>}
    </div>
);

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
        <div className="bg-bg-light min-h-screen">
            <PageHero
                title="Tournament Calendar"
                description="Your comprehensive guide to TCL's annual competitive season and championship events"
                image="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=95&w=2600"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Tournaments', active: true }
                ]}
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

                    {/* Main Content - Table View */}
                    <div className="space-y-12 mb-20">

                        {/* Legend */}
                        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                            <h3 className="font-heading text-lg font-bold text-primary mb-2">Academy Partner Access Included</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                                <span className="font-heading font-bold text-sm uppercase tracking-wider text-primary">Tier Legend</span>
                                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                                    {tiers.map((t, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            {t.star ? (
                                                <span className="text-secondary text-lg">★</span>
                                            ) : (
                                                <span className={`w-4 h-4 rounded-full ${t.color} shadow-sm border border-black/5`} />
                                            )}
                                            <span className="font-body text-sm text-primary/80">{t.label}</span>
                                            {i < tiers.length - 1 && (
                                                <span className="hidden sm:inline-block text-gray-300 ml-4">|</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Calendar Table */}
                        <div className="space-y-6">
                            <h2 className="font-heading text-2xl sm:text-3xl text-primary font-bold uppercase tracking-tight">
                                TCL One-Page Calendar <span className="text-primary/60 font-normal">(Table View)</span>
                            </h2>

                            {/* Mobile Cards - Hidden on lg and up */}
                            <div className="lg:hidden space-y-4">
                                {seasons.map((s, i) => (
                                    <div
                                        key={i}
                                        className={`bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden ${s.featured ? 'ring-2 ring-secondary' : ''}`}
                                    >
                                        {/* Card Header */}
                                        <div className={`px-5 py-4 ${s.featured ? 'bg-secondary/10' : 'bg-gray-50'} border-b border-gray-200`}>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-secondary">{s.icon}</span>
                                                    <span className="font-heading font-bold text-primary text-lg">{s.season}</span>
                                                </div>
                                                <span className="font-body text-primary/70 text-sm bg-white px-3 py-1 rounded-full border border-gray-200">{s.timeframe}</span>
                                            </div>
                                        </div>

                                        {/* Card Body */}
                                        <div className="p-5 space-y-4">
                                            {/* Events */}
                                            <div>
                                                <span className="text-xs font-heading font-bold uppercase tracking-wider text-primary/50 block mb-2">Key Events</span>
                                                <ul className="space-y-1.5">
                                                    {s.events.map((e, idx) => (
                                                        <li key={idx} className={`text-sm leading-snug ${s.featured && idx === 0 ? 'font-bold text-primary' : 'text-primary/80'} ${e.includes('*') ? 'italic' : ''}`}>
                                                            • {e}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Details Row */}
                                            <div className="flex flex-wrap gap-4 pt-2">
                                                <div>
                                                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-primary/50 block mb-1">Age Groups</span>
                                                    <span className="font-body text-primary text-sm">{s.ageGroups}</span>
                                                </div>
                                                <div className="flex-1 min-w-[150px]">
                                                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-primary/50 block mb-1">Purpose</span>
                                                    <span className="font-body text-primary/70 text-sm">{s.purpose}</span>
                                                </div>
                                            </div>

                                            {/* Tier Access */}
                                            <div className="pt-3 border-t border-gray-100">
                                                <span className="text-xs font-heading font-bold uppercase tracking-wider text-primary/50 block mb-2">Partner Tier Access</span>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    {[...s.tiers].map((tierKey, idx) => {
                                                        const tierConfig = tiers.find(t => t.key === tierKey);
                                                        if (!tierConfig) return null;
                                                        return (
                                                            <div key={idx} className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-full">
                                                                {tierConfig.star ? (
                                                                    <span className="text-secondary text-sm">★</span>
                                                                ) : (
                                                                    <span className={`w-3 h-3 rounded-full ${tierConfig.color} shadow-sm`} />
                                                                )}
                                                                <span className="text-xs text-primary/70">{tierConfig.label.split(' ')[0]}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop Table - Hidden on mobile */}
                            <div className="hidden lg:block overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                                <table className="w-full text-left min-w-[1000px]">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-200">
                                            <th className="py-5 px-6 font-heading font-bold text-sm uppercase tracking-wider text-primary w-[120px]">Season</th>
                                            <th className="py-5 px-6 font-heading font-bold text-sm uppercase tracking-wider text-primary w-[140px]">Timeframe</th>
                                            <th className="py-5 px-6 font-heading font-bold text-sm uppercase tracking-wider text-primary w-[300px]">Key Events</th>
                                            <th className="py-5 px-6 font-heading font-bold text-sm uppercase tracking-wider text-primary w-[120px]">Age Groups</th>
                                            <th className="py-5 px-6 font-heading font-bold text-sm uppercase tracking-wider text-primary">Primary Purpose</th>
                                            <th className="py-5 px-6 font-heading font-bold text-sm uppercase tracking-wider text-primary w-[180px]">Partner Tier Access</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {seasons.map((s, i) => (
                                            <tr
                                                key={i}
                                                className="hover:bg-gray-50/50 transition-colors"
                                            >
                                                <td className="py-6 px-6 align-top">
                                                    <span className="font-heading font-bold text-primary text-base">{s.season}</span>
                                                </td>
                                                <td className="py-6 px-6 align-top">
                                                    <span className="font-body text-primary/70 text-sm whitespace-nowrap">{s.timeframe}</span>
                                                </td>
                                                <td className="py-6 px-6 align-top">
                                                    <ul className="space-y-1.5">
                                                        {s.events.map((e, idx) => (
                                                            <li key={idx} className={`text-sm leading-snug ${s.featured && idx === 0 ? 'font-bold text-primary' : 'text-primary/80'} ${e.includes('*') ? 'italic' : ''}`}>
                                                                {e}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </td>
                                                <td className="py-6 px-6 align-top">
                                                    <span className="font-body text-primary/70 text-sm">{s.ageGroups}</span>
                                                </td>
                                                <td className="py-6 px-6 align-top">
                                                    <span className="font-body text-primary/70 text-sm leading-relaxed block max-w-[280px]">{s.purpose}</span>
                                                </td>
                                                <td className="py-6 px-6 align-top">
                                                    <div className="flex items-center gap-1.5">
                                                        {[...s.tiers].map((tierKey, idx) => {
                                                            const tierConfig = tiers.find(t => t.key === tierKey);
                                                            if (!tierConfig) return null;
                                                            return (
                                                                <div key={idx} title={tierConfig.label}>
                                                                    {tierConfig.star ? (
                                                                        <span className="text-secondary text-lg">★</span>
                                                                    ) : (
                                                                        <span className={`w-5 h-5 rounded-full ${tierConfig.color} shadow-sm border border-black/5 block`} />
                                                                    )}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                    {/* Planning Notes */}
                    <div className="p-8 lg:p-10 bg-[#FAFAF8] rounded-3xl border border-primary/[0.06]">
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
                                    <span className="font-body text-primary/70 text-sm leading-relaxed">
                                        {n.prefix}{n.prefix ? ' ' : ''}
                                        <strong className="font-semibold text-primary">{n.bold}</strong>
                                        {n.suffix}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>


        </div>
    );
}
