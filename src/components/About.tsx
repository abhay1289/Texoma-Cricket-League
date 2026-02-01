'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Users, Trophy, Star, Shield } from 'lucide-react';

const commitments = [
    'High standards of competition and officiating',
    'Player development alongside competitive excellence',
    'Fair play, integrity, and respect on and off the field',
    'A player-first, family-friendly tournament environment',
];

const AboutHeader: React.FC = () => (
    <div className="mb-6 sm:mb-8">
        <span className="font-heading text-secondary font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px] block mb-3 sm:mb-4">About Texoma Cricket League</span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-6 sm:mb-8 leading-tight tracking-tight">
            Premier National Youth <br className="hidden sm:block" />
            <span className="text-secondary italic font-light">Cricket Platform</span>
        </h2>
        <div className="space-y-4 font-body text-text-dark/70 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
                Texoma Cricket League (TCL) is a premier national youth cricket tournament platform built on global standards, delivering a world-class youth cricket experience in the United States.
            </p>
            <p>
                Built around the belief that young cricketers deserve professional competition and clear pathways, TCL brings together teams from across the country to compete in well-organized, high-quality tournaments that reward preparation, skill, and sportsmanship.
            </p>
            <p>
                At the heart of TCL is <strong className="text-primary">Sports Texoma</strong>, the home venue in Texoma. By anchoring the national championships at a centralized, purpose-built facility, we ensure consistency in playing conditions, operations, and overall tournament quality.
            </p>
        </div>
    </div>
);

const CommitmentsList: React.FC = () => (
    <div className="mt-8">
        <h3 className="font-heading text-primary font-semibold text-lg mb-4">We are committed to:</h3>
        <ul className="space-y-3">
            {commitments.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-text-dark/80 text-sm sm:text-base">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
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

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 bg-white rounded-xl border border-primary/5 shadow-sm hover:shadow-md transition-shadow"
    >
        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 text-secondary">
            {icon}
        </div>
        <h4 className="font-heading text-primary text-lg font-bold mb-2">{title}</h4>
        <p className="font-body text-text-dark/60 text-sm leading-relaxed">{desc}</p>
    </motion.div>
);

const values = [
    { icon: <Target size={22} />, title: 'Raising the Standard', desc: 'We deliver consistent, high-quality youth competition that challenges players and teams to perform at their best nationwide.' },
    { icon: <Trophy size={22} />, title: 'A National Stage', desc: 'We bring together youth teams from across the United States, creating meaningful national exposure and competition beyond local leagues.' },
    { icon: <Users size={22} />, title: 'Purposeful Pathways', desc: 'Our tournaments follow clear progression—from regional competition to national championships—giving players and teams goals that matter.' },
    { icon: <Star size={22} />, title: 'Player-First Development', desc: 'We prioritize skill growth, sportsmanship, and long-term development alongside competitive success.' },
    { icon: <Shield size={22} />, title: 'Professional & Trusted', desc: 'We operate with professionalism, integrity, and transparency—earning the trust of players, families, academies, and partners.' },
];

const About: React.FC = () => {
    return (
        <>
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
                            <CommitmentsList />
                        </motion.div>

                        <div className="lg:w-1/2 w-full">
                            <AboutMedia />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-bg-cream">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="text-center mb-12">
                        <span className="font-heading text-secondary font-semibold uppercase tracking-[0.2em] text-[11px] block mb-3">Our Values</span>
                        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary leading-tight">
                            What Drives <span className="text-secondary italic font-light">Texoma Cricket</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((v, i) => (
                            <ValueCard key={i} icon={v.icon} title={v.title} desc={v.desc} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
