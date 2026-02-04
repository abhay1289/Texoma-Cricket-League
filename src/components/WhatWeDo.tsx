'use client';

import React from 'react';
import { Trophy, Map, BarChart3, Users, Award } from 'lucide-react';

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
}> = ({ icon, title, description }) => (
    <div className="group relative p-6 bg-white rounded-lg border border-primary/5 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <h3 className="font-heading text-primary text-lg font-bold mb-2">{title}</h3>
        <p className="font-body text-text-dark/60 text-sm leading-relaxed">{description}</p>
    </div>
);

const WhatWeDo: React.FC = () => {
    return (
        <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-bg-light relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-10 h-1 bg-secondary" />
                        <span className="font-heading text-secondary font-bold uppercase tracking-[0.2em] text-xs">What We Do</span>
                        <div className="w-10 h-1 bg-secondary" />
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary leading-tight mb-4">
                        Growing Youth Cricket <span className="text-secondary">Nationwide</span>
                    </h2>
                    <p className="font-body text-text-dark/60 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        TCL offers a national competition platform designed to grow youth cricket—giving teams meaningful tournaments, clear pathways, and a professional stage.
                    </p>
                </div>

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
