'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Trophy, Map, BarChart3, Users, Award
} from 'lucide-react';

const whatWeDoItems = [
    {
        icon: <Trophy size={24} />,
        title: 'Organize National Youth Tournaments',
        description: 'We design and host professionally run youth cricket tournaments that bring teams together from across the country, offering competitive formats, consistent standards, and a true championship experience.'
    },
    {
        icon: <Map size={24} />,
        title: 'Create a Clear National Pathway',
        description: 'Our tournament structure connects regional events and qualifiers to national-level championships, giving players and teams clear goals and progression beyond local leagues.'
    },
    {
        icon: <BarChart3 size={24} />,
        title: 'Elevate Competition Standards',
        description: 'We set consistent expectations for match formats, officiating, scheduling, and conduct—raising the overall quality and credibility of youth cricket competition nationwide.'
    },
    {
        icon: <Award size={24} />,
        title: 'Showcase Players & Teams',
        description: 'Through live scoring, results, rankings, and media coverage, we help young cricketers gain visibility and recognition on a national stage.'
    },
    {
        icon: <Users size={24} />,
        title: 'Support Players, Families & Academies',
        description: 'We work closely with academies, coaches, and families to deliver well-organized, player-first events that are safe, welcoming, and worth traveling for.'
    },
];

const WhatWeDoCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}> = ({ icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="group relative p-8 bg-white rounded-2xl border border-primary/5 shadow-sm hover:shadow-lg transition-all duration-300"
    >
        <div className="absolute top-0 left-0 w-1 h-0 bg-secondary rounded-l-2xl group-hover:h-full transition-all duration-500" />
        <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <h3 className="font-heading text-primary text-xl font-bold mb-3">{title}</h3>
        <p className="font-body text-text-dark/60 leading-relaxed">{description}</p>
    </motion.div>
);

const WhatWeDo: React.FC = () => {
    return (
        <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-bg-light">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="font-heading text-secondary font-semibold uppercase tracking-[0.2em] text-[11px] block mb-3">What We Do</span>
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary leading-tight mb-4">
                        Growing Youth Cricket <span className="text-secondary italic font-light">Nationwide</span>
                    </h2>
                    <p className="font-body text-text-dark/60 text-lg max-w-3xl mx-auto">
                        Texoma Cricket League (TCL) offers a national competition platform designed to grow youth cricket in the United States—by giving teams meaningful tournaments, clear pathways, and a stage that feels professional and aspirational.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {whatWeDoItems.map((item, index) => (
                        <WhatWeDoCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
