'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';

const HeroContent = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 px-4 sm:px-0"
    >
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-6 sm:w-10 h-px bg-secondary/60" />
            <span className="font-subheading tracking-[0.2em] sm:tracking-[0.3em] text-secondary text-[10px] sm:text-[11px] font-semibold uppercase">Big Dreams! Young Bats</span>
            <div className="w-6 sm:w-10 h-px bg-secondary/60" />
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-[0.9] text-white uppercase tracking-tight">
            Texoma <br /> <span className="text-secondary font-medium">Cricket League</span>
        </h1>

        <p className="font-body text-base sm:text-lg md:text-xl text-text-light/85 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed px-2 sm:px-0">
            A premier national youth cricket tournament platform built on global standards, delivering a world-class youth cricket experience in the United States.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }} className="w-full sm:w-auto">
                <Link
                    href="/register"
                    className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-secondary text-text-dark font-subheading font-semibold text-xs sm:text-sm tracking-wide rounded-lg flex items-center justify-center gap-2 sm:gap-3 uppercase shadow-lg hover:shadow-xl transition-all"
                >
                    Register Now
                    <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }} className="w-full sm:w-auto">
                <Link
                    href="/tournaments"
                    className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-white/15 backdrop-blur-sm border border-white/25 text-white font-subheading font-semibold text-xs sm:text-sm tracking-wide rounded-lg flex items-center justify-center gap-2 sm:gap-3 uppercase hover:bg-white hover:text-primary transition-all"
                >
                    View Tournaments
                    <Trophy size={14} className="text-secondary sm:w-4 sm:h-4" />
                </Link>
            </motion.div>
        </div>
    </motion.div>
);

const HeroIndicators = () => (
    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <div className="w-12 h-1 bg-secondary rounded-full shadow-lg" />
        <div className="w-4 h-1 bg-white/20 rounded-full" />
        <div className="w-4 h-1 bg-white/20 rounded-full" />
    </div>
);

const Hero: React.FC = () => {
    return (
        <section className="relative h-[90svh] w-full flex items-center justify-center overflow-hidden bg-accent">
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=95&w=2600"
                    alt="Sports Texoma Arena"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <HeroContent />
                </div>
            </div>
            <HeroIndicators />

            {/* Decorative SVG Pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-bg-cream" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 50% 100%, 0 0)' }} />
        </section>
    );
};

export default Hero;
