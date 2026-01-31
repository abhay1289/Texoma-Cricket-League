'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Trophy, Users, Shield, Heart, Target, Star,
    Linkedin, Twitter, MapPin, Globe
} from 'lucide-react';
import PageHero from '@/components/PageHero';

const SectionHeader: React.FC<{ label: string; title: string; alignment?: 'center' | 'left' }> = ({ label, title, alignment = 'center' }) => (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
        <span className="font-heading text-secondary font-semibold uppercase tracking-[0.2em] text-[11px] block mb-3">{label}</span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary font-bold leading-tight">{title}</h2>
    </div>
);

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
    <motion.div
        whileHover={{ y: -8 }}
        className="bg-white p-8 rounded-2xl border border-gray-100 transition-all flex flex-col items-center text-center group shadow-sm hover:shadow-lg"
    >
        <div className="mb-6 p-4 rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
            {icon}
        </div>
        <h4 className="font-heading text-lg text-primary font-bold mb-3">{title}</h4>
        <p className="font-body text-sm text-primary/60 leading-relaxed">{desc}</p>
    </motion.div>
);

const TimelineItem: React.FC<{ year: string; title: string; desc: string }> = ({ year, title, desc }) => (
    <div className="relative group pl-12">
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary to-transparent" />
        <div className="absolute -left-[5px] top-2 w-[12px] h-[12px] rounded-full bg-secondary border-4 border-bg-light group-hover:scale-150 transition-transform" />
        <div className="space-y-1">
            <span className="font-heading text-secondary font-bold tracking-widest">{year}</span>
            <h4 className="font-body text-lg font-bold text-primary">{title}</h4>
            <p className="font-body text-sm text-primary/60">{desc}</p>
        </div>
    </div>
);

interface LeadershipMember {
    name: string;
    role: string;
    bio: string;
    photo: string;
}

const MemberCard: React.FC<{ member: LeadershipMember }> = ({ member }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
    >
        <div className="h-[280px] bg-gray-100 relative overflow-hidden">
            <img src={member.photo} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={member.name} />
        </div>
        <div className="p-8 space-y-4">
            <div>
                <h3 className="font-heading text-xl text-primary font-bold mb-1">{member.name}</h3>
                <span className="font-heading text-[10px] tracking-widest text-secondary uppercase font-bold">{member.role}</span>
            </div>
            <p className="font-body text-sm text-primary/60 leading-relaxed italic line-clamp-3">{member.bio}</p>
            <div className="flex gap-4 pt-4 border-t border-gray-50">
                <Linkedin size={18} className="text-primary/40 hover:text-primary transition-colors cursor-pointer" />
                <Twitter size={18} className="text-primary/40 hover:text-secondary transition-colors cursor-pointer" />
            </div>
        </div>
    </motion.div>
);

export default function AboutPage() {
    const leadership: LeadershipMember[] = [
        { name: "Rajesh Sharma", role: "Founder & President", bio: "Former state level cricketer and passionate coach. Rajesh founded TCL in late 2024 to give children in the Texoma region a place to play and learn cricket.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=400&h=400&q=80" },
        { name: "Sarah Mitchell", role: "Director of Operations", bio: "With a background in sports management, Sarah ensures every tournament runs smoothly and every family feels welcome.", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=400&h=400&q=80" },
        { name: "Michael Thompson", role: "Head of Coaching", bio: "Michael leads our coaching staff with a player-first philosophy, helping hundreds of beginners fall in love with cricket.", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=400&h=400&q=80" }
    ];

    const values = [
        { icon: <Target size={28} />, title: "Raising the Standard", desc: "We deliver consistent, high-quality youth competition that challenges players to perform at their best nationwide." },
        { icon: <Trophy size={28} />, title: "A National Stage", desc: "We bring together youth teams from across the United States, creating meaningful national exposure and competition." },
        { icon: <Users size={28} />, title: "Purposeful Pathways", desc: "Our tournaments follow clear progression—from regional competition to national championships." },
        { icon: <Star size={28} />, title: "Player-First Development", desc: "We prioritize skill growth, sportsmanship, and long-term development alongside competitive success." },
        { icon: <Shield size={28} />, title: "Professional & Trusted", desc: "We operate with professionalism, integrity, and transparency—earning the trust of players and families." }
    ];

    const sportsTexomaExists = [
        'Create inclusive, competitive sporting opportunities',
        'Support local teams and leagues',
        'Amplify underrepresented sports',
        'Build regional pride through athletics'
    ];

    return (
        <div className="w-full bg-bg-light">
            {/* Hero Header */}
            <PageHero
                title="About Us"
                description="Big Dreams! Young Bats"
                image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=95&w=2000"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About', active: true }
                ]}
                align="center"
            />

            {/* Vision & Mission */}
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-primary rounded-2xl text-white"
                        >
                            <span className="font-heading text-secondary font-semibold uppercase tracking-[0.2em] text-[11px] block mb-4">Vision</span>
                            <p className="font-body text-lg leading-relaxed text-white/90">
                                To build a unified national pathway that connects grassroots participation to elite youth competition—bringing clarity, consistency, and aspiration to the youth cricket ecosystem and supporting the sport's growth into the American mainstream.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-10 bg-bg-cream rounded-2xl border border-primary/10"
                        >
                            <span className="font-heading text-secondary font-semibold uppercase tracking-[0.2em] text-[11px] block mb-4">Mission</span>
                            <p className="font-body text-lg leading-relaxed text-primary/80">
                                To unite youth cricket teams from across the United States through a nationally respected tournament platform that delivers meaningful competition, clear development pathways, and consistently high standards—creating positive, accessible, and inspiring experiences for players, families, and the broader cricket community.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About TCL Story */}
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-bg-light">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-8">
                            <SectionHeader label="About Texoma Cricket League" title="Premier National Youth Cricket Platform" alignment="left" />
                            <div className="space-y-6 font-body text-primary/70 text-lg leading-relaxed">
                                <p>Texoma Cricket League (TCL) is a premier national youth cricket tournament platform built on global standards, delivering a world-class youth cricket experience in the United States.</p>
                                <p>Built around the belief that young cricketers deserve professional competition and clear pathways, TCL brings together teams from across the country to compete in well-organized, high-quality tournaments that reward preparation, skill, and sportsmanship.</p>
                                <p>TCL operates on a <strong className="text-primary">national tournament pathway model</strong>, with regional events and qualifiers leading to flagship championships at Sports Texoma. This structure gives academies and teams a clear objective, meaningful competition, and a reason to return year after year.</p>
                            </div>
                            <div className="space-y-8 mt-8">
                                <TimelineItem year="2024" title="TCL Launched" desc="First community matches organized" />
                                <TimelineItem year="2024" title="Growing Community" desc="New teams joining each month" />
                                <TimelineItem year="2025" title="National Stage" desc="Regional qualifiers leading to championships" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Our Story" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeader label="Our Values" title="What Drives Texoma Cricket" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((v, i) => (
                            <ValueCard key={i} icon={v.icon} title={v.title} desc={v.desc} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Sports Texoma Section */}
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-primary text-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="font-heading text-secondary font-semibold uppercase tracking-[0.2em] text-[11px] block mb-4">Our Home</span>
                            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">Sports Texoma</h2>
                            <p className="font-body text-lg text-white/80 mb-8 leading-relaxed">
                                Sports Texoma is a regional sports complex platform rooted in the <strong className="text-secondary">Texoma Region</strong>, spanning communities across <strong className="text-secondary">Texas and Oklahoma</strong>. At the heart of TCL is Sports Texoma, our home venue where we anchor our national championships at a centralized, purpose-built facility.
                            </p>
                            <div className="space-y-4">
                                <h3 className="font-heading text-white font-semibold">We exist to:</h3>
                                <ul className="space-y-3">
                                    {sportsTexomaExists.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 font-body text-white/80">
                                            <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-1 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                                <MapPin className="text-secondary mb-4" size={28} />
                                <h4 className="font-heading text-white font-semibold mb-2">Location</h4>
                                <p className="font-body text-white/70 text-sm">Pottsboro, TX 75076<br />Texoma Region</p>
                            </div>
                            <div className="flex-1 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                                <Globe className="text-secondary mb-4" size={28} />
                                <h4 className="font-heading text-white font-semibold mb-2">Region</h4>
                                <p className="font-body text-white/70 text-sm">Texas & Oklahoma<br />Cross-state community</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-bg-light">
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeader label="Leadership" title="Meet the Team" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {leadership.map((member, i) => (
                            <MemberCard key={i} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-secondary text-primary text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Join the TCL Family?</h2>
                    <p className="font-body text-lg opacity-80 mb-10">Whether you&apos;re a player, parent, coach, or academy—there&apos;s a place for you here.</p>
                    <Link href="/register" className="inline-block px-12 py-5 bg-primary text-white font-heading font-bold text-xs tracking-widest uppercase rounded-lg shadow-xl hover:bg-accent transition-all">
                        REGISTER NOW
                    </Link>
                </div>
            </section>
        </div>
    );
}

