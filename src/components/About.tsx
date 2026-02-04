'use client';

import React from 'react';
import Image from 'next/image';
import { Target, Users, Trophy, Star, Shield } from 'lucide-react';

const commitments = [
    'High standards of competition and officiating',
    'Player development alongside competitive excellence',
    'Fair play, integrity, and respect on and off the field',
    'A player-first, family-friendly tournament environment',
];

const AboutHeader: React.FC = () => (
    <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-secondary"></div>
            <span className="font-heading text-secondary font-bold uppercase tracking-[0.2em] text-xs">About TCL</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary mb-6 leading-tight tracking-tight">
            Premier National Youth <br className="hidden sm:block" />
            <span className="text-secondary">Cricket Platform</span>
        </h2>
        <div className="space-y-4 font-body text-text-dark/70 text-sm sm:text-base leading-relaxed">
            <p>
                Texoma Cricket League (TCL) is a premier national youth cricket tournament platform built on global standards, delivering a world-class youth cricket experience in the United States.
            </p>
            <p>
                Built around the belief that young cricketers deserve professional competition and clear pathways, TCL brings together teams from across the country to compete in well-organized, high-quality tournaments.
            </p>
        </div>
    </div>
);

const CommitmentsList: React.FC = () => (
    <div className="mt-6 pt-6 border-t border-primary/10">
        <h3 className="font-heading text-primary font-bold text-sm uppercase tracking-wider mb-4">Our Commitments</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {commitments.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-bg-light rounded-lg">
                    <div className="w-6 h-6 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-secondary text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="font-body text-text-dark/80 text-sm leading-snug">{item}</span>
                </div>
            ))}
        </div>
    </div>
);

const AboutMedia: React.FC = () => (
    <div className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] group">
        <div className="relative h-full w-full overflow-hidden rounded-lg shadow-2xl">
            <Image
                src="/about-facility.png"
                alt="Texoma Cricket Facility"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary"></div>
        </div>
    </div>
);

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
    <div className="p-6 bg-white rounded-xl border border-primary/5 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 text-secondary">
            {icon}
        </div>
        <h4 className="font-heading text-primary text-lg font-bold mb-2">{title}</h4>
        <p className="font-body text-text-dark/60 text-sm leading-relaxed">{desc}</p>
    </div>
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
            <section id="about" className="relative py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-white overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-bg-cream/50 -z-0"></div>
                <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center">
                        <div className="lg:w-1/2">
                            <AboutHeader />
                            <CommitmentsList />
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <AboutMedia />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-bg-cream">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="text-center mb-12">
                        <span className="font-heading text-secondary font-semibold uppercase tracking-[0.2em] text-xs block mb-3">Our Values</span>
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
