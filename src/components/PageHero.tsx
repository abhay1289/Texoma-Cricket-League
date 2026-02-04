'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
    active?: boolean;
}

interface PageHeroProps {
    title: string;
    description?: string;
    image: string;
    breadcrumbs: BreadcrumbItem[];
    badges?: React.ReactNode;
    rightElement?: React.ReactNode;
    align?: 'center' | 'left';
}

export default function PageHero({
    title,
    description,
    image,
    breadcrumbs,
    badges,
    rightElement,
    align = 'left'
}: PageHeroProps) {
    return (
        <section className="relative min-h-[50vh] sm:min-h-[55vh] md:h-[60vh] flex items-center justify-center overflow-hidden py-20 md:py-0 bg-primary">
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt=""
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                />

                {/* Simple Dark Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-primary/50" />
            </div>

            <div className={`container mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:pt-20 ${align === 'center' ? 'text-center lg:text-center justify-center' : 'text-center lg:text-left'}`}>
                <div className={`max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
                    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 mb-6 md:mb-8 opacity-0 animate-fade-in-up ${align === 'center' ? 'justify-center' : 'justify-center lg:justify-start'}`} style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                        <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-text-light font-subheading text-[10px] sm:text-xs tracking-[0.2em] uppercase shadow-lg">
                            {breadcrumbs.map((item, index) => (
                                <React.Fragment key={index}>
                                    {index > 0 && <ChevronRight size={10} className="opacity-40 sm:w-3 sm:h-3 text-secondary" />}
                                    {item.href ? (
                                        <Link href={item.href} className="hover:text-secondary transition-colors duration-300">
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <span className={item.active ? 'text-secondary font-bold' : ''}>{item.label}</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </nav>

                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-black uppercase mb-6 md:mb-8 leading-[0.9] tracking-tight drop-shadow-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                        {title}
                    </h1>

                    {description && (
                        <p className={`font-body text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mb-8 md:mb-10 leading-relaxed font-light mx-auto opacity-0 animate-fade-in-up ${align === 'center' ? '' : 'lg:mx-0'}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                            {description}
                        </p>
                    )}

                    {badges && (
                        <div className={`flex flex-wrap gap-2 sm:gap-4 opacity-0 animate-fade-in-up ${align === 'center' ? 'justify-center' : 'justify-center lg:justify-start'}`} style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                            {badges}
                        </div>
                    )}
                </div>

                {rightElement && (
                    <div className="w-full lg:w-auto hidden md:block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                        {rightElement}
                    </div>
                )}
            </div>
        </section>
    );
}
