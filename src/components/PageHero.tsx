'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
        <section className="relative min-h-[50vh] sm:min-h-[55vh] md:h-[60vh] flex items-center justify-center overflow-hidden py-20 md:py-0">
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
            </div>

            <div className={`container mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 ${align === 'center' ? 'text-center lg:text-center justify-center' : 'text-center lg:text-left'}`}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
                >
                    <div className={`flex items-center gap-2 mb-4 md:mb-6 text-text-light font-subheading text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase ${align === 'center' ? 'justify-center' : 'justify-center lg:justify-start'}`}>
                        {breadcrumbs.map((item, index) => (
                            <React.Fragment key={index}>
                                {index > 0 && <ChevronRight size={10} className="opacity-40 sm:w-3 sm:h-3" />}
                                {item.href ? (
                                    <Link href={item.href} className="hover:text-secondary cursor-pointer">
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className={item.active ? 'text-secondary' : ''}>{item.label}</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-black uppercase mb-4 md:mb-6 leading-[0.9]">
                        {title}
                    </h1>

                    {description && (
                        <p className={`font-body text-base sm:text-lg md:text-xl text-text-light/80 max-w-lg mb-6 md:mb-8 leading-relaxed italic mx-auto ${align === 'center' ? '' : 'lg:mx-0'}`}>
                            {description}
                        </p>
                    )}

                    {badges && (
                        <div className={`flex flex-wrap gap-2 sm:gap-4 ${align === 'center' ? 'justify-center' : 'justify-center lg:justify-start'}`}>
                            {badges}
                        </div>
                    )}
                </motion.div>

                {rightElement && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full lg:w-auto hidden md:block"
                    >
                        {rightElement}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
