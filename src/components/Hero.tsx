'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const HeroContent = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 px-4 sm:px-0"
    >
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-6 sm:w-10 h-px bg-secondary/60" />
            <span className="font-subheading tracking-widest text-secondary text-xs sm:text-sm font-semibold uppercase">Big Dreams! Young Bats</span>
            <div className="w-6 sm:w-10 h-px bg-secondary/60" />
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-[0.9] text-white uppercase tracking-tighter italic">
            Texoma <br /> <span className="text-secondary inline-block transform -skew-x-6">Cricket League</span>
        </h1>

        <p className="font-body text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed px-2 sm:px-0 font-medium">
            Premier youth cricket tournament platform. <span className="text-secondary font-bold">Global standards.</span> World-class experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                    href="/register"
                    className="w-full sm:w-auto px-10 py-4 bg-secondary hover:bg-amber-400 text-primary font-heading font-black text-sm sm:text-base tracking-widest rounded-none -skew-x-12 flex items-center justify-center gap-2 uppercase shadow-[0_0_20px_rgba(245,166,35,0.4)] transition-all border-2 border-transparent"
                >
                    <span className="skew-x-12 flex items-center gap-2">
                        Register Now <ArrowRight size={18} strokeWidth={3} />
                    </span>
                </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                    href="/contact"
                    className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-heading font-black text-sm sm:text-base tracking-widest rounded-none -skew-x-12 flex items-center justify-center gap-2 uppercase shadow-lg transition-all"
                >
                    <span className="skew-x-12 flex items-center gap-2">
                        Contact Us <Mail size={18} strokeWidth={3} />
                    </span>
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
        <section className="relative h-[85svh] w-full flex items-center justify-center overflow-hidden bg-primary">
            {/* Background Image with Sporty Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=95&w=2600"
                    alt="Sports Texoma Arena"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Dynamic Sporty Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply" />

                {/* Diagonal Slashes */}
                <div className="absolute top-0 right-0 h-full w-1/3 bg-secondary/10 transform skew-x-12 translate-x-20 mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 h-2/3 w-1/4 bg-accent/10 transform -skew-x-12 -translate-x-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <HeroContent />
                </div>
            </div>
            <HeroIndicators />

            {/* Sporty Bottom Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-bg-cream transform -skew-y-2 origin-bottom-right translate-y-8 z-20 border-t-4 border-secondary"></div>
        </section>
    );
};

export default Hero;
