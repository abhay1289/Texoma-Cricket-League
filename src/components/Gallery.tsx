'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '@/lib/constants';

const GalleryItem: React.FC<{ src: string; className: string; delay: number; title: string }> = ({ src, className, delay, title }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className={`relative group overflow-hidden rounded-xl sm:rounded-super shadow-elevated cursor-none ${className}`}
    >
        <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-6 sm:p-10">
            <span className="font-subheading text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] text-secondary uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Season Highlights</span>
            <h4 className="font-heading text-lg sm:text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{title}</h4>
        </div>
    </motion.div>
);

const Gallery: React.FC = () => {
    return (
        <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
                    <div className="max-w-2xl">
                        <span className="font-heading tracking-[0.3em] text-secondary text-[10px] sm:text-[11px] font-semibold uppercase mb-3 sm:mb-4 block">Gallery</span>
                        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-tight tracking-tight">Moments of <span className="text-secondary font-medium">Greatness</span></h2>
                    </div>
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <span className="font-heading text-[10px] sm:text-xs tracking-widest text-text-dark/50 group-hover:text-primary transition-colors uppercase">View Archive</span>
                        <div className="w-6 sm:w-8 h-px bg-primary/20 group-hover:w-12 sm:group-hover:w-14 group-hover:bg-secondary transition-all" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[280px]">
                    <GalleryItem src={GALLERY_IMAGES[0]} className="md:col-span-8 md:row-span-2" delay={0.1} title="The Opening Ceremony" />
                    <GalleryItem src={GALLERY_IMAGES[2]} className="md:col-span-4 md:row-span-1" delay={0.2} title="Victory Moment" />
                    <GalleryItem src={GALLERY_IMAGES[1]} className="md:col-span-4 md:row-span-1" delay={0.3} title="Pitch Precision" />
                    <GalleryItem src={GALLERY_IMAGES[3]} className="md:col-span-6 md:row-span-1" delay={0.4} title="Academy Drills" />
                    <GalleryItem src={GALLERY_IMAGES[4]} className="md:col-span-6 md:row-span-1" delay={0.5} title="The Founder's Circle" />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
