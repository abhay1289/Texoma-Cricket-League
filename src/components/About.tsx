'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutHeader: React.FC = () => (
    <div className="mb-6 sm:mb-8">
        <span className="font-heading text-secondary font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px] block mb-3 sm:mb-4">About Us</span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-6 sm:mb-8 leading-tight tracking-tight">
            Developing the Future of <br className="hidden sm:block" />
            <span className="text-secondary italic font-light">Texoma Cricket</span>
        </h2>
        <div className="space-y-3 sm:space-y-4 font-body text-text-dark/70 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
                Texoma Cricket League (TCL) is a league operator that runs youth cricket tournaments hosted at Sports Texoma. Our mission is to develop young cricketers through quality coaching, competitive tournaments, and a supportive community.
            </p>
            <p>
                From youth development programs to exciting tournament formats, we focus on building skills, sportsmanship, and a love for the game in every young player.
            </p>
        </div>
    </div>
);

const AboutStatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="p-4 sm:p-6 bg-bg-light rounded-lg sm:rounded-xl border border-primary/5">
        <span className="block font-heading text-2xl sm:text-3xl md:text-4xl text-primary font-bold mb-1 sm:mb-2">{value}</span>
        <span className="block font-heading text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-semibold text-text-dark/50">{label}</span>
    </div>
);

const AboutMedia: React.FC = () => (
    <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-elevated h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px]"
    >
        <Image
            src="/about-facility.png"
            alt="Texoma Cricket Facility"
            fill
            className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/10" />
    </motion.div>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <AboutHeader />
                        <div className="grid grid-cols-2 gap-3 sm:gap-6 mt-8 sm:mt-10">
                            <AboutStatItem value="4" label="Cricket Pitches" />
                            <AboutStatItem value="Growing" label="Community" />
                        </div>
                    </motion.div>

                    <div className="lg:w-1/2 w-full">
                        <AboutMedia />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

