'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { TOURNAMENTS } from '@/lib/constants';
import { Calendar, Users, Trophy, ArrowUpRight } from 'lucide-react';
import { Tournament } from '@/lib/types';

const TournamentCard: React.FC<{ t: Tournament }> = ({ t }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group flex flex-col h-full bg-white rounded-xl sm:rounded-super overflow-hidden border border-gray-100 hover:border-secondary/30 shadow-elevated hover:shadow-super transition-all duration-500"
    >
        <div className="h-40 sm:h-56 relative overflow-hidden">
            <Image
                src={t.image || '/tournament-placeholder.png'}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                alt={t.title}
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />

            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex flex-col gap-1.5 sm:gap-2">
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-secondary text-text-dark font-subheading font-bold text-[8px] sm:text-[9px] uppercase rounded shadow-md">
                    {t.sport}
                </span>
            </div>

            <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                <span className={`px-3 sm:px-4 py-1 sm:py-1.5 text-[9px] sm:text-[10px] font-bold rounded-full uppercase tracking-widest backdrop-blur-md border border-white/20 shadow-md ${t.status === 'open' ? 'bg-green-600 text-white' :
                    t.status === 'closing_soon' ? 'bg-amber-500 text-white animate-pulse' :
                        'bg-red-600 text-white'
                    }`}>
                    {t.status.replace('_', ' ')}
                </span>
            </div>
        </div>
        <div className="p-5 sm:p-8 flex flex-col flex-grow">
            <h3 className="font-heading text-lg sm:text-2xl text-primary mb-4 sm:mb-6 group-hover:text-secondary transition-colors line-clamp-2 uppercase tracking-tight">
                {t.title}
            </h3>
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-primary/60 font-body text-xs sm:text-sm">
                <div className="flex items-center gap-2 sm:gap-3"><Calendar size={14} className="sm:w-4 sm:h-4 text-secondary" /> {t.date}</div>
                <div className="flex items-center gap-2 sm:gap-3"><Users size={14} className="sm:w-4 sm:h-4 text-secondary" /> {t.ageGroup}</div>
            </div>
            <button className={`mt-auto flex items-center justify-center gap-2 sm:gap-3 w-full py-3 sm:py-4 font-heading font-bold text-[9px] sm:text-[10px] tracking-widest rounded-full transition-all duration-500 shadow-md uppercase active:scale-[0.98] ${t.status === 'completed' ? 'bg-gray-100 text-gray-400 cursor-not-allowed' :
                'bg-primary text-white hover:bg-accent'
                }`}>
                {t.status === 'completed' ? 'CLOSED' : 'SECURE YOUR SPOT'}
                {t.status !== 'completed' && <ArrowUpRight size={12} className="sm:w-[14px] sm:h-[14px]" />}
            </button>
        </div>
    </motion.div>
);

const Tournaments: React.FC = () => {
    return (
        <section id="tournaments" className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                    <AnimatePresence mode="popLayout">
                        {TOURNAMENTS.map(t => <TournamentCard key={t.id} t={t} />)}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Tournaments;
