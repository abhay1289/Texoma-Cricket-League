'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail } from 'lucide-react';

const HeroContent = () => (
    <div className="relative z-10 px-4 sm:px-0">
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="w-8 sm:w-16 h-px bg-secondary/80" />
            <span className="font-subheading tracking-[0.2em] text-secondary text-xs sm:text-sm font-bold uppercase">Big Dreams • Young Bats</span>
            <div className="w-8 sm:w-16 h-px bg-secondary/80" />
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-10 leading-[0.9] text-white uppercase tracking-tighter italic drop-shadow-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Texoma <br /> <span className="text-secondary inline-block transform -skew-x-6 relative">
                Cricket League
            </span>
        </h1>

        <p className="font-body text-base sm:text-lg md:text-xl text-white/90 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0 font-medium opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            The premier youth cricket platform in the US. <br className="hidden sm:block" />
            <span className="text-secondary font-bold">Global standards.</span> Professional pathways. World-class experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="w-full sm:w-auto">
                <Link
                    href="/register"
                    className="w-full sm:w-auto px-10 py-5 bg-secondary hover:bg-white hover:text-primary text-primary font-heading font-black text-sm sm:text-base tracking-widest rounded-none -skew-x-12 flex items-center justify-center gap-3 uppercase shadow-[0_0_30px_rgba(201,151,63,0.3)] transition-all duration-300 border-2 border-transparent hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                    <span className="skew-x-12 flex items-center gap-2">
                        Register Now <ArrowRight size={18} strokeWidth={3} />
                    </span>
                </Link>
            </div>

            <div className="w-full sm:w-auto">
                <Link
                    href="/contact"
                    className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-primary font-heading font-black text-sm sm:text-base tracking-widest rounded-none -skew-x-12 flex items-center justify-center gap-3 uppercase shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary backdrop-blur-sm"
                >
                    <span className="skew-x-12 flex items-center gap-2">
                        Contact Us <Mail size={18} strokeWidth={3} />
                    </span>
                </Link>
            </div>
        </div>
    </div>
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
        <section className="relative h-[90svh] w-full flex items-center justify-center overflow-hidden bg-primary">
            {/* Background Image with Enterprise Grade Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=95&w=2600"
                    alt="Sports Texoma Arena"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Simple Dark Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-primary/50" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="max-w-5xl mx-auto text-center perspective-1000">
                    <HeroContent />
                </div>
            </div>
            <HeroIndicators />

            {/* Refined Bottom Divider - Smoother transition */}
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-bg-cream transform -skew-y-2 origin-bottom-right translate-y-12 z-20 border-t border-secondary/20"></div>
        </section>
    );
};

export default Hero;
