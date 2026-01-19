'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, Users, Trophy, Search, Grid, List, MapPin,
    Clock, ArrowRight, ChevronRight, Zap, Flame,
    AlertCircle, Download, CheckCircle2
} from 'lucide-react';
import { TOURNAMENTS } from '@/lib/constants';
import { Tournament, TournamentStatus } from '@/lib/types';
import PageHero from '@/components/PageHero';

// --- Filter Bar ---
const FilterBar: React.FC<{
    filter: string;
    setFilter: (f: string) => void;
    view: 'grid' | 'list';
    setView: (v: 'grid' | 'list') => void;
    search: string;
    setSearch: (s: string) => void;
}> = ({ filter, setFilter, view, setView, search, setSearch }) => {
    const statuses = [
        { id: 'all', label: 'All' },
        { id: 'open', label: 'Open' },
        { id: 'live', label: 'Live' },
        { id: 'coming_soon', label: 'Coming' },
        { id: 'completed', label: 'Done' },
    ];

    return (
        <div className="sticky top-20 sm:top-24 z-50 py-3 sm:py-4 bg-bg-light/80 backdrop-blur-md border-y border-primary/5 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-center gap-1.5 sm:gap-3 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
                    {statuses.map(s => (
                        <button
                            key={s.id}
                            onClick={() => setFilter(s.id)}
                            className={`px-3 sm:px-6 py-1.5 sm:py-2 rounded-full font-subheading text-[9px] sm:text-[10px] font-bold tracking-wider sm:tracking-widest uppercase transition-all whitespace-nowrap ${filter === s.id ? 'bg-primary text-white shadow-lg' : 'bg-white text-text-dark/60 hover:text-primary'
                                }`}
                        >
                            {s.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3 sm:gap-6 w-full lg:w-auto">
                    <div className="relative flex-grow lg:w-64">
                        <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-primary/30 w-4 h-4 sm:w-5 sm:h-5" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-9 sm:pl-12 pr-4 sm:pr-6 py-2.5 sm:py-3 bg-white border border-primary/10 rounded-full outline-none focus:border-secondary transition-colors font-body text-xs sm:text-sm"
                        />
                    </div>

                    <div className="flex items-center bg-white border border-primary/10 rounded-full p-0.5 sm:p-1 flex-shrink-0">
                        <button
                            onClick={() => setView('grid')}
                            className={`p-1.5 sm:p-2 rounded-full transition-all ${view === 'grid' ? 'bg-primary text-white shadow-sm' : 'text-primary/40 hover:text-primary'}`}
                        >
                            <Grid size={14} className="sm:w-[18px] sm:h-[18px]" />
                        </button>
                        <button
                            onClick={() => setView('list')}
                            className={`p-1.5 sm:p-2 rounded-full transition-all ${view === 'list' ? 'bg-primary text-white shadow-sm' : 'text-primary/40 hover:text-primary'}`}
                        >
                            <List size={14} className="sm:w-[18px] sm:h-[18px]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Featured Tournament ---
const FeaturedTournament: React.FC = () => (
    <section className="py-12 sm:py-16 md:py-24 geometric-pattern">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative min-h-[500px] sm:min-h-[560px] md:min-h-[600px] rounded-xl sm:rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border-2 sm:border-4 border-secondary/20 group"
            >
                <img
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=95&w=2600"
                    alt="Featured Tournament"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent sm:from-black/80 sm:via-black/50" />

                <div className="absolute inset-0 px-6 py-10 sm:px-12 sm:py-16 md:px-20 md:py-20 flex flex-col justify-center max-w-2xl">
                    <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
                        <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-secondary text-text-dark font-subheading text-[9px] sm:text-[10px] font-bold tracking-widest uppercase rounded-md shadow-sm">
                            🔥 Featured
                        </span>
                        <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-green-500 text-white font-subheading text-[9px] sm:text-[10px] font-bold tracking-widest uppercase rounded-md shadow-sm">
                            Open
                        </span>
                    </div>

                    <h2 className="text-white font-heading text-2xl sm:text-4xl md:text-6xl uppercase font-black mb-2 sm:mb-4 leading-tight">
                        TCL Spring <br className="hidden sm:block" />Championship 2025
                    </h2>
                    <p className="text-text-light/70 font-body text-sm sm:text-lg italic mb-4 sm:mb-8">Our flagship youth cricket tournament where young athletes showcase their skills and compete at the highest level.</p>

                    <div className="grid grid-cols-2 gap-y-3 sm:gap-y-6 gap-x-6 sm:gap-x-12 mb-6 sm:mb-10">
                        <div className="flex items-center gap-2 sm:gap-3 text-white">
                            <Calendar className="text-secondary w-4 h-4 sm:w-5 sm:h-5" />
                            <div className="flex flex-col">
                                <span className="text-[9px] sm:text-[10px] uppercase font-subheading opacity-50 tracking-widest">Dates</span>
                                <span className="text-xs sm:text-sm font-bold">Mar 15-22, 2025</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 text-white">
                            <Trophy className="text-secondary w-4 h-4 sm:w-5 sm:h-5" />
                            <div className="flex flex-col">
                                <span className="text-[9px] sm:text-[10px] uppercase font-subheading opacity-50 tracking-widest">Prize</span>
                                <span className="text-xs sm:text-sm font-bold">$5,000+</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                        <button className="px-6 sm:px-10 py-3 sm:py-5 bg-secondary text-text-dark font-subheading font-bold tracking-[0.15em] sm:tracking-[0.2em] rounded-lg sm:rounded-xl hover:bg-white transition-all shadow-xl uppercase text-[10px] sm:text-xs">
                            Register | $175
                        </button>
                        <button className="px-6 sm:px-10 py-3 sm:py-5 border-2 border-white/30 text-white font-subheading font-bold tracking-[0.15em] sm:tracking-[0.2em] rounded-lg sm:rounded-xl hover:bg-white/10 transition-all uppercase text-[10px] sm:text-xs">
                            View Details
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-6 sm:bottom-12 right-6 sm:right-12 hidden md:flex flex-col items-center bg-black/30 backdrop-blur-md p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-white/10">
                    <span className="text-text-light/60 font-subheading text-[9px] sm:text-[10px] tracking-widest uppercase mb-2 sm:mb-4">Starts In</span>
                    <div className="flex gap-4 sm:gap-6">
                        {[{ v: '14', l: 'Days' }, { v: '08', l: 'Hrs' }, { v: '42', l: 'Mins' }].map((t, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <span className="text-secondary font-mono text-2xl sm:text-4xl font-black">{t.v}</span>
                                <span className="text-text-light/40 text-[8px] sm:text-[9px] uppercase tracking-widest mt-1">{t.l}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

// --- Tournament Card ---
const TournamentCard: React.FC<{ t: Tournament }> = ({ t }) => {
    const getStatusStyle = (status: TournamentStatus) => {
        switch (status) {
            case 'open': return 'bg-green-600 text-white';
            case 'closing_soon': return 'bg-amber-500 text-white animate-pulse';
            case 'live': return 'bg-red-600 text-white animate-pulse';
            case 'completed': return 'bg-gray-600 text-white';
            case 'sold_out': return 'bg-red-800 text-white';
            default: return 'bg-accent text-white';
        }
    };

    const getStatusLabel = (status: TournamentStatus) => {
        switch (status) {
            case 'open': return 'Registration Open';
            case 'closing_soon': return 'Closing Soon';
            case 'live': return '🔴 Live Now';
            case 'completed': return 'Completed';
            case 'sold_out': return 'Sold Out';
            default: return status.replace('_', ' ');
        }
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-super overflow-hidden shadow-elevated border border-gray-100 hover:border-secondary/30 transition-all duration-500 group"
        >
            <div className="h-56 relative overflow-hidden">
                <img src={t.image} alt={t.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />

                <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="px-3 py-1 bg-secondary text-text-dark font-subheading font-bold text-[9px] uppercase rounded shadow-md">
                        {t.ageGroup.split(',')[0]}
                    </span>
                    <span className="px-3 py-1 bg-white/90 text-text-dark font-subheading font-bold text-[9px] uppercase rounded shadow-md">
                        {t.format}
                    </span>
                </div>

                <div className="absolute top-6 right-6">
                    <span className={`px-4 py-1.5 rounded-full font-subheading font-bold text-[10px] uppercase shadow-md ${getStatusStyle(t.status)}`}>
                        {getStatusLabel(t.status)}
                    </span>
                </div>
            </div>

            <div className="p-8">
                <h3 className="font-heading text-2xl text-primary mb-4 h-16 line-clamp-2 uppercase tracking-tight">
                    {t.title}
                </h3>

                <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-text-dark/60 text-sm">
                        <Calendar size={16} className="text-secondary" />
                        <span>{t.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-text-dark/60 text-sm">
                        <MapPin size={16} className="text-secondary" />
                        <span>{t.venue}</span>
                    </div>
                    <div className="flex items-center gap-3 text-text-dark/60 text-sm">
                        <Users size={16} className="text-secondary" />
                        <span>{t.ageGroup}</span>
                    </div>
                </div>

                {t.status === 'open' && t.teamsRegistered !== undefined && (
                    <div className="mb-8">
                        <div className="flex justify-between text-[10px] uppercase font-subheading font-bold mb-2 opacity-50">
                            <span>Teams Registered</span>
                            <span>{t.teamsRegistered}/{t.teamsTotal}</span>
                        </div>
                        <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary transition-all duration-1000"
                                style={{ width: `${(t.teamsRegistered / (t.teamsTotal || 1)) * 100}%` }}
                            />
                        </div>
                    </div>
                )}

                <div className="flex items-center justify-between pt-6 border-t border-primary/5">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-subheading opacity-40">Entry Fee</span>
                        <span className="text-xl font-subheading font-bold text-primary">${t.fee}</span>
                    </div>
                    <button className={`px-6 py-3 font-subheading font-bold tracking-widest uppercase rounded-xl transition-all text-[10px] shadow-md ${t.status === 'sold_out' ? 'bg-gray-100 text-gray-400 cursor-not-allowed' :
                        t.status === 'live' ? 'bg-red-500 text-white hover:bg-red-600' :
                            t.status === 'completed' ? 'bg-accent text-white hover:bg-primary' :
                                'bg-primary text-white hover:bg-accent'
                        }`}>
                        {t.status === 'completed' ? 'View Results' : t.status === 'live' ? 'Watch Live' : 'Register Now'}
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

// --- Formats Section ---
const FormatsSection: React.FC = () => {
    const formats = [
        { icon: <Zap />, name: 'T20', full: 'Twenty20', desc: 'A fast-paced format with 20 overs per side. Games finish in 2-3 hours, making it easy to watch and play.', for: 'All ages, most popular' },
        { icon: <Clock />, name: 'ODI', full: 'One Day International', desc: 'The classic 50-over format that tests both patience and skill. Players learn to build an innings over time.', for: 'U-14+, advanced players' },
        { icon: <Users />, name: 'Pairs', full: 'Pairs Cricket', desc: 'A beginner-friendly format where players bat and bowl in pairs. Perfect for learning the basics of the game.', for: 'U-6, U-8 beginners' },
        { icon: <Flame />, name: 'Sixes', full: 'Six-a-Side', desc: 'Teams of six players compete in quick, action-packed matches. Great for tournaments and team bonding.', for: 'All ages, quick play' },
    ];

    return (
        <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="text-center mb-10 sm:mb-16 md:mb-20">
                    <span className="font-subheading text-secondary font-bold text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] uppercase mb-3 sm:mb-4 block">Our Standards</span>
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary uppercase font-black">Championship Formats</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {formats.map((f, i) => (
                        <div key={i} className="p-6 sm:p-8 md:p-10 bg-bg-cream rounded-xl sm:rounded-super border border-primary/5 hover:border-secondary transition-all group">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary text-secondary rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 md:mb-8 transform group-hover:-rotate-12 transition-transform shadow-lg [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                                {f.icon}
                            </div>
                            <h4 className="font-heading text-xl sm:text-2xl text-primary mb-2 uppercase">{f.name}</h4>
                            <p className="text-text-dark/40 text-[9px] sm:text-[10px] font-subheading tracking-widest uppercase mb-3 sm:mb-4">{f.full}</p>
                            <p className="font-body text-xs sm:text-sm text-text-dark/70 mb-6 sm:mb-8 leading-relaxed italic">&quot;{f.desc}&quot;</p>
                            <div className="flex flex-col gap-1 border-t border-primary/5 pt-4 sm:pt-6">
                                <span className="text-[9px] sm:text-[10px] uppercase font-subheading opacity-40">Recommended for</span>
                                <span className="text-[10px] sm:text-xs font-bold text-accent">{f.for}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Age Divisions ---
const AgeDivisions: React.FC = () => {
    const divisions = [
        { age: 'U-6', name: 'Mini Cricket', born: '2019+', focus: 'Fun & Basic Skills', color: '#4CAF50' },
        { age: 'U-8', name: 'Starter Cubs', born: '2017-18', focus: 'Building Fundamentals', color: '#2196F3' },
        { age: 'U-10', name: 'Junior League', born: '2015-16', focus: 'Introduction to Competition', color: '#9C27B0' },
        { age: 'U-12', name: 'Development', born: '2013-14', focus: 'Learning Full Rules', color: '#FF9800' },
        { age: 'U-14', name: 'Academy Elite', born: '2011-12', focus: 'Advanced Training', color: '#F44336' },
        { age: 'U-16+', name: 'Elite Premier', born: '2007-10', focus: 'Championship Level', color: '#D4A84B' },
    ];

    return (
        <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-bg-cream">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="text-center mb-10 sm:mb-16 md:mb-20">
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary uppercase font-black">Age Divisions</h2>
                    <p className="text-text-dark/60 font-body italic mt-3 sm:mt-4 text-sm sm:text-base">Find the right competition level for your player.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
                    {divisions.map((d, i) => (
                        <div key={i} className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-t-4 shadow-sm text-center" style={{ borderTopColor: d.color }}>
                            <span className="text-2xl sm:text-3xl font-heading font-black text-primary mb-1 sm:mb-2 block">{d.age}</span>
                            <h5 className="font-subheading font-bold text-[9px] sm:text-xs tracking-wider sm:tracking-widest uppercase mb-3 sm:mb-4">{d.name}</h5>
                            <div className="space-y-1 sm:space-y-2 pt-3 sm:pt-4 border-t border-primary/5">
                                <span className="block text-[9px] sm:text-[10px] font-subheading opacity-50 uppercase">Born</span>
                                <span className="block text-xs sm:text-sm font-bold">{d.born}</span>
                            </div>
                            <div className="mt-3 sm:mt-4 text-[9px] sm:text-[10px] italic font-body text-text-dark/60">
                                Focus: {d.focus}
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-center mt-8 sm:mt-12 text-text-dark/40 text-[9px] sm:text-[10px] uppercase tracking-widest">
                    * Age is determined as of January 1st of the tournament year.
                </p>
            </div>
        </section>
    );
};

// --- FAQ Section ---
const FAQSection: React.FC = () => {
    const [active, setActive] = useState<number | null>(0);
    const faqs = [
        { q: "How do I register my team?", a: "Go to our registration page, choose your age group, and enter your team information. Once you pay the entry fee, your spot is confirmed." },
        { q: "What happens if it rains on game day?", a: "We keep a close eye on the weather. Light rain won't stop the game, but if it rains heavily, we'll reschedule or use the DLS method to decide the result." },
        { q: "Can I sign up as an individual player?", a: "Absolutely. You can join our Free Agent pool, and we'll place you on a team that needs players." },
        { q: "Do I need to bring my own gear?", a: "Helmets are required for all batters. We recommend bringing your own equipment, but we can provide basic gear for players who are just starting out." }
    ];

    return (
        <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-white">
            <div className="container mx-auto px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-5xl text-primary uppercase font-black">Tournament FAQ</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="border border-primary/10 rounded-2xl overflow-hidden">
                            <button
                                onClick={() => setActive(active === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-bg-cream transition-colors"
                            >
                                <span className="font-heading text-lg text-primary">{f.q}</span>
                                <ChevronRight className={`transition-transform duration-500 ${active === i ? 'rotate-90' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {active === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 font-body text-text-dark/70 leading-relaxed italic">
                                            {f.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Main Page Component ---
export default function TournamentsPage() {
    const [filter, setFilter] = useState('all');
    const [view, setView] = useState<'grid' | 'list'>('grid');
    const [search, setSearch] = useState('');

    const filteredTournaments = useMemo(() => {
        return TOURNAMENTS.filter(t => {
            const matchFilter = filter === 'all' || t.status === filter;
            const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) ||
                t.sport.toLowerCase().includes(search.toLowerCase());
            return matchFilter && matchSearch;
        });
    }, [filter, search]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-bg-cream min-h-screen"
        >
            <PageHero
                title="Tournaments"
                description="Join our professionally organized cricket tournaments. We offer competitive events for all skill levels, from beginners to advanced players."
                image="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=95&w=2600"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Tournaments', active: true }
                ]}
                badges={
                    <>
                        <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center gap-3">
                            <Calendar className="text-secondary" size={18} />
                            <span className="text-white text-sm font-subheading uppercase tracking-widest">12 Upcoming</span>
                        </div>
                        <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center gap-3">
                            <Users className="text-secondary" size={18} />
                            <span className="text-white text-sm font-subheading uppercase tracking-widest">48+ Teams</span>
                        </div>
                    </>
                }
                rightElement={
                    <div className="bg-primary/20 backdrop-blur-xl border border-red-500/30 p-8 rounded-super max-w-sm w-full animate-pulse-red">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-red-500 font-subheading font-bold text-xs tracking-widest uppercase">Live Now</span>
                        </div>
                        <h3 className="text-white font-heading text-2xl mb-2">U-14 Spring Championship</h3>
                        <p className="text-text-light/70 text-sm mb-6 font-body">TCL Tigers vs Texoma Warriors</p>
                        <button className="w-full py-4 bg-red-500 text-white font-subheading font-bold tracking-[0.2em] rounded-xl hover:bg-red-600 transition-all flex items-center justify-center gap-3 uppercase text-[10px]">
                            Watch Scores <ArrowRight size={14} />
                        </button>
                    </div>
                }
            />

            <FilterBar
                filter={filter} setFilter={setFilter}
                view={view} setView={setView}
                search={search} setSearch={setSearch}
            />

            <FeaturedTournament />

            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] container mx-auto px-8">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 border-b border-primary/5 pb-12">
                    <div>
                        <span className="font-subheading text-secondary font-bold text-[10px] tracking-[0.5em] uppercase mb-4 block">Schedule</span>
                        <h2 className="font-heading text-6xl text-primary font-black uppercase">All Events</h2>
                    </div>
                    <p className="font-subheading font-bold text-xs opacity-40 uppercase tracking-widest">
                        Showing {filteredTournaments.length} Tournaments
                    </p>
                </div>

                {filteredTournaments.length > 0 ? (
                    <div className={`grid gap-8 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                        <AnimatePresence mode="popLayout">
                            {filteredTournaments.map(t => (
                                <TournamentCard key={t.id} t={t} />
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="py-40 text-center bg-white rounded-super border border-dashed border-primary/20">
                        <Search className="mx-auto text-primary/10 mb-8" size={64} />
                        <h3 className="font-heading text-3xl text-primary mb-4">No Tournaments Found</h3>
                        <p className="font-body text-text-dark/50 italic mb-8">Try adjusting your filters or search terms.</p>
                        <button
                            onClick={() => { setFilter('all'); setSearch(''); }}
                            className="px-8 py-4 bg-primary text-white font-subheading font-bold tracking-widest uppercase rounded-xl"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}
            </section>

            <FormatsSection />
            <AgeDivisions />

            {/* Rules Section */}
            <section className="py-32 bg-accent text-white overflow-hidden relative">
                <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center gap-24 relative z-10">
                    <div className="lg:w-1/2">
                        <span className="font-subheading text-secondary font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">Regulations</span>
                        <h2 className="font-heading text-5xl md:text-7xl uppercase font-black mb-12 leading-tight">Spirit of the <br />Game</h2>
                        <div className="space-y-8 font-body text-lg italic opacity-80 mb-12 border-l-2 border-secondary pl-12">
                            <p>&quot;Cricket is more than just following the rules. It's about playing with respect, honesty, and good sportsmanship. That's what makes our game special.&quot;</p>
                        </div>
                        <button className="flex items-center gap-6 px-10 py-5 bg-white text-accent font-subheading font-bold tracking-[0.2em] rounded-xl hover:bg-secondary transition-all uppercase text-xs group">
                            Download Rulebook <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                        </button>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="aspect-square bg-white/5 rounded-full absolute -top-1/2 -right-1/2 w-[150%] animate-pulse" />
                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            {[
                                { t: 'Fair Play', d: 'We expect all players to treat each other with respect. No trash-talking or unsportsmanlike behavior allowed.' },
                                { t: 'Proper Equipment', d: 'All players must wear helmets and safety gear during matches to stay protected.' },
                                { t: 'Safety First', d: 'Trained staff and first aid are always available at every game and practice.' },
                                { t: 'Professional Standards', d: 'Certified umpires and digital scorekeeping ensure fair and accurate results.' }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                                    <CheckCircle2 className="text-secondary mb-4" size={24} />
                                    <h4 className="font-heading text-xl mb-2">{item.t}</h4>
                                    <p className="text-xs opacity-60 font-body italic leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection />

            {/* CTA Final */}
            <section className="py-32 bg-bg-cream">
                <div className="container mx-auto px-8 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-3 p-3 px-6 bg-secondary/20 rounded-full border border-secondary/30 mb-12">
                        <AlertCircle className="text-secondary" size={18} />
                        <span className="font-subheading font-bold text-[10px] tracking-widest text-primary uppercase">Spring Championship: 12 Spots Left</span>
                    </div>
                    <h2 className="font-heading text-6xl md:text-8xl text-primary font-black uppercase mb-8 leading-tight">Ready to <br />Compete?</h2>
                    <p className="font-body text-xl text-text-dark/60 mb-16 max-w-2xl mx-auto italic leading-relaxed">
                        Sign up your team today and join our growing cricket community. Spots fill up quickly, so don't wait to secure your place in the 2025 season.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="px-12 py-6 bg-primary text-white font-subheading font-bold tracking-[0.3em] rounded-xl hover:bg-accent transition-all shadow-2xl uppercase text-xs">
                            Register Your Team
                        </button>
                        <Link href="/contact" className="px-12 py-6 border-2 border-primary/20 text-primary font-subheading font-bold tracking-[0.3em] rounded-xl hover:bg-secondary/10 transition-all uppercase text-xs">
                            Contact Concierge
                        </Link>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
