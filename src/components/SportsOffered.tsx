'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { DIVISIONS } from '@/lib/constants';
import { Sport } from '@/lib/types';

const SportCard: React.FC<{ sport: Sport; index: number }> = ({ sport, index }) => (
    <div className="group relative flex flex-col">
        <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-lg shadow-lg bg-primary transition-all duration-500 group-hover:shadow-xl">
            <Image
                src={sport.image}
                alt={sport.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute inset-0 p-3 sm:p-6 md:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <span className="font-heading text-[8px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] text-secondary/80 uppercase font-semibold mb-0.5 sm:mb-1">Category</span>
                        <span className="font-heading text-xs sm:text-sm text-white/70 uppercase tracking-widest">0{index + 1}</span>
                    </div>
                    <span className="text-lg sm:text-2xl text-secondary/50 group-hover:text-secondary transition-colors duration-500">{sport.icon}</span>
                </div>
                <div className="transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-heading text-base sm:text-xl md:text-2xl lg:text-3xl text-white mb-2 sm:mb-4 tracking-tight leading-tight">{sport.name}</h3>
                    <p className="font-body text-white/60 text-[10px] sm:text-xs md:text-sm leading-relaxed mb-3 sm:mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3 sm:line-clamp-none">
                        {sport.description}
                    </p>
                    <button className="flex items-center gap-2 sm:gap-3 group/btn">
                        <span className="font-heading text-[8px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.15em] text-secondary font-semibold uppercase">Learn More</span>
                        <div className="w-4 sm:w-6 h-[1px] bg-secondary/50 group-hover/btn:w-8 sm:group-hover/btn:w-12 transition-all duration-300" />
                    </button>
                </div>
            </div>
        </div>
    </motion.div>
);

const SportsOffered: React.FC = () => {
    return (
        <section id="sports" className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-bg-light relative overflow-hidden">
            {/* Subtle Background Accent */}
            <div className="absolute top-0 left-0 w-1/4 h-full bg-white/50 -z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-10 sm:mb-12 gap-6 pb-8 border-b border-primary/10">
                    <div className="max-w-xl">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-1 bg-secondary" />
                            <span className="font-heading tracking-[0.2em] text-secondary text-xs font-bold uppercase">Our Programs</span>
                        </motion.div>
                        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary leading-tight tracking-tight">
                            Cricket <span className="text-secondary">Excellence</span>
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="font-body text-text-dark/70 text-sm sm:text-base leading-relaxed">
                            From junior academies to premier leagues, we offer programs for every level of cricketer in the Texoma region.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
                    {DIVISIONS.map((sport, index) => (
                        <SportCard key={sport.id} sport={sport} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SportsOffered;
