'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '@/lib/types';

const CarouselControls = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => (
    <div className="flex gap-3 sm:gap-4">
        <button onClick={onPrev} className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all active:scale-95">
            <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
        </button>
        <button onClick={onNext} className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all active:scale-95">
            <ChevronRight size={18} className="sm:w-5 sm:h-5" />
        </button>
    </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white rounded-xl sm:rounded-super p-8 sm:p-12 md:p-20 shadow-elevated relative border border-gray-100 w-full"
    >
        <Quote size={40} className="sm:w-[60px] sm:h-[60px] text-secondary opacity-20 absolute top-6 sm:top-10 right-6 sm:right-10" />
        <p className="font-heading text-lg sm:text-xl md:text-3xl text-primary leading-relaxed mb-8 sm:mb-12 italic font-light pr-8 sm:pr-0">
            &quot;{testimonial.text}&quot;
        </p>
        <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 sm:border-4 border-bg-light shadow-lg overflow-hidden flex-shrink-0">
                <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
            </div>
            <div>
                <h4 className="font-heading text-lg sm:text-2xl text-primary">{testimonial.name}</h4>
                <p className="font-heading text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-secondary font-bold">{testimonial.role}</p>
            </div>
        </div>
    </motion.div>
);

const Testimonials: React.FC = () => {
    const [index, setIndex] = useState(0);
    const next = () => setIndex((index + 1) % TESTIMONIALS.length);
    const prev = () => setIndex((index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    return (
        <section className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-bg-light relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[15vw] sm:text-[12vw] text-primary/3 select-none pointer-events-none whitespace-nowrap leading-none hidden sm:block">
                TESTIMONIALS
            </div>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
                    <div className="lg:w-1/3 relative text-center lg:text-left w-full">
                        <span className="font-heading tracking-[0.3em] text-secondary text-[10px] sm:text-[11px] font-semibold uppercase mb-3 sm:mb-4 block">Testimonials</span>
                        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-4 sm:mb-6 tracking-tight">What Our <span className="text-secondary font-medium">Community</span> Says</h2>
                        <div className="flex justify-center lg:justify-start">
                            <CarouselControls onNext={next} onPrev={prev} />
                        </div>
                    </div>
                    <div className="lg:w-2/3 relative min-h-[280px] sm:min-h-[350px] lg:h-[420px] flex items-center w-full">
                        <AnimatePresence mode="wait">
                            <TestimonialCard key={index} testimonial={TESTIMONIALS[index]} />
                        </AnimatePresence>
                        <div className="absolute -bottom-2 sm:-bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                            {TESTIMONIALS.map((_, i) => (
                                <div key={i} className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-6 sm:w-8 bg-secondary' : 'w-2 sm:w-3 bg-primary/10'}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
