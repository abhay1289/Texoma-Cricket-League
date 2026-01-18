'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { DIVISIONS } from '@/lib/constants';
import { Sport } from '@/lib/types';

const SportCard: React.FC<{ sport: Sport; index: number }> = ({ sport, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true }}
        className="group relative flex flex-col"
    >
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-card bg-primary transition-all duration-500 group-hover:shadow-elevated">
            <Image
                src={sport.image}
                alt={sport.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <span className="font-heading text-[10px] tracking-[0.2em] text-secondary/80 uppercase font-semibold mb-1">Category</span>
                        <span className="font-heading text-sm text-white/70 uppercase tracking-widest">0{index + 1}</span>
                    </div>
                    <span className="text-2xl text-secondary/50 group-hover:text-secondary transition-colors duration-500">{sport.icon}</span>
                </div>
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-heading text-2xl md:text-3xl text-white mb-4 tracking-tight">{sport.name}</h3>
                    <p className="font-body text-white/60 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {sport.description}
                    </p>
                    <button className="flex items-center gap-3 group/btn">
                        <span className="font-heading text-[10px] tracking-[0.15em] text-secondary font-semibold uppercase">Learn More</span>
                        <div className="w-6 h-[1px] bg-secondary/50 group-hover/btn:w-12 transition-all duration-300" />
                    </button>
                </div>
            </div>
        </div>
    </motion.div>
);

const SportsOffered: React.FC = () => {
    return (
        <section id="sports" className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-bg-light relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-baseline justify-between mb-10 sm:mb-16 gap-6 sm:gap-8 border-b border-primary/5 pb-8 sm:pb-12">
                    <div className="max-w-2xl">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-6 sm:w-8 h-[1px] bg-secondary" />
                            <span className="font-heading tracking-[0.2em] sm:tracking-[0.3em] text-secondary text-[10px] sm:text-[11px] font-semibold uppercase">Our Programs</span>
                        </motion.div>
                        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-[0.95] tracking-tight">
                            Cricket <span className="text-secondary font-medium">Excellence</span>
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="font-body text-text-dark/70 text-base sm:text-lg leading-relaxed">
                            From junior academies to premier leagues, we offer programs for every level of cricketer in the Texoma region.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {DIVISIONS.map((sport, index) => (
                        <SportCard key={sport.id} sport={sport} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SportsOffered;
