'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Trophy, Users, Shield, Heart,
    ChevronDown, Linkedin, Twitter
} from 'lucide-react';
import PageHero from '@/components/PageHero';

const SectionHeader: React.FC<{ label: string; title: string; alignment?: 'center' | 'left' }> = ({ label, title, alignment = 'center' }) => (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
        <span className="font-heading text-[10px] tracking-[0.5em] text-primary uppercase font-black block mb-4">{label}</span>
        <h2 className="font-heading text-4xl md:text-6xl text-accent font-black uppercase tracking-tight-heading">{title}</h2>
    </div>
);

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; color: string }> = ({ icon, title, desc, color }) => (
    <motion.div
        whileHover={{ y: -8, borderColor: '#3B82F6' }}
        className="bg-white p-10 rounded-2xl border border-gray-100 transition-all flex flex-col items-center text-center group shadow-elevated hover:border-secondary"
    >
        <div className="mb-8 p-4 rounded-full transition-colors group-hover:bg-bg-light" style={{ color }}>
            {icon}
        </div>
        <h4 className="font-heading text-2xl text-accent font-bold uppercase mb-4 tracking-widest">{title}</h4>
        <p className="font-body text-sm text-primary/60 leading-relaxed">{desc}</p>
    </motion.div>
);

const TimelineItem: React.FC<{ year: string; title: string; desc: string }> = ({ year, title, desc }) => (
    <div className="relative group pl-12">
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-transparent" />
        <div className="absolute -left-[5px] top-2 w-[12px] h-[12px] rounded-full bg-primary border-4 border-bg-light group-hover:scale-150 transition-transform" />
        <div className="space-y-1">
            <span className="font-heading text-primary font-bold tracking-widest">{year}</span>
            <h4 className="font-body text-lg font-bold text-accent">{title}</h4>
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
        className="bg-white rounded-2xl overflow-hidden shadow-elevated transition-all border border-gray-100 group"
    >
        <div className="h-[280px] bg-gray-100 relative overflow-hidden">
            <img src={member.photo} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={member.name} />
        </div>
        <div className="p-8 space-y-4">
            <div>
                <h3 className="font-heading text-2xl text-accent font-black mb-1">{member.name}</h3>
                <span className="font-heading text-[10px] tracking-widest text-primary uppercase font-bold">{member.role}</span>
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
        { icon: <Trophy size={32} />, title: "Excellence", desc: "Highest standards in coaching and organization.", color: "#7A1B38" },
        { icon: <Users size={32} />, title: "Community", desc: "Building connections beyond the boundary rope.", color: "#C9973F" },
        { icon: <Shield size={32} />, title: "Integrity", desc: "Fair play and respect are non-negotiable.", color: "#1A3350" },
        { icon: <Heart size={32} />, title: "Passion", desc: "We love this game and inspire next generations.", color: "#7A1B38" }
    ];

    return (
        <div className="w-full bg-bg-light">
            {/* Hero Header */}
            <PageHero
                title="Our Story"
                description="More Than Cricket. A Growing Community."
                image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=95&w=2000"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About', active: true }
                ]}
                align="center"
            />

            {/* Story Section */}
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <div className="lg:w-1/2 space-y-12">
                            <SectionHeader label="Just Getting Started" title="A New Chapter Begins" alignment="left" />
                            <div className="space-y-6 font-body text-primary/60 text-lg leading-relaxed">
                                <p>Texoma Cricket League launched in late 2024 with a simple observation: thousands of cricket loving families in the region had no place for their children to play.</p>
                                <p>Now, TCL is growing every week as more families discover what we are building together. Our mission is clear: make cricket accessible, enjoyable, and developmental for every child.</p>
                            </div>
                            <div className="space-y-12 mt-12">
                                <TimelineItem year="2024" title="TCL Launched" desc="First community matches organized" />
                                <TimelineItem year="2024" title="Growing Community" desc="New teams joining each month" />
                                <TimelineItem year="2025" title="Building Together" desc="Registration now open for spring season" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="aspect-[4/5] bg-gray-100 rounded-super overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Our Story" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-bg-light">
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeader label="What we stand for" title="Our Core Values" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <ValueCard key={i} {...v} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeader label="Leadership" title="Meet the Team" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {leadership.map((member, i) => (
                            <MemberCard key={i} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-primary text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="font-heading text-4xl md:text-6xl font-black uppercase mb-8">Ready to Join the TCL Family?</h2>
                    <p className="font-body text-xl opacity-80 mb-12 italic">Whether you&apos;re a player, parent, or coach, there&apos;s a place for you here.</p>
                    <Link href="/contact" className="inline-block px-12 py-5 bg-white text-primary font-heading font-bold text-xs tracking-widest uppercase rounded-full shadow-xl hover:bg-secondary hover:text-white transition-all">
                        REGISTER NOW
                    </Link>
                </div>
            </section>
        </div>
    );
}
