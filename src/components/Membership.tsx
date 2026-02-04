'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_TIERS } from '@/lib/constants';
import { Check, ShieldCheck } from 'lucide-react';
import { PricingTier } from '@/lib/types';

const PricingCard: React.FC<{ tier: PricingTier; index: number }> = ({ tier, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true }}
        className={`relative bg-white rounded-xl sm:rounded-2xl p-8 flex flex-col transition-all duration-500 hover:shadow-super group overflow-hidden ${tier.isPremium
            ? 'md:-translate-y-4 shadow-elevated ring-1 ring-secondary/20'
            : 'border border-primary/5 hover:border-primary/10 shadow-card'
            }`}
    >
        {tier.isPremium && (
            <div className="absolute top-0 right-0 p-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center border border-secondary/20 shadow-inner">
                    <ShieldCheck className="text-secondary w-4 h-4" strokeWidth={2} />
                </div>
            </div>
        )}
        <div className="mb-6 sm:mb-8">
            <span className="font-heading text-xs sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-secondary font-semibold uppercase mb-2 sm:mb-3 block">Level {tier.id}</span>
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-primary mb-3 sm:mb-4 tracking-tight">{tier.name}</h3>
            <div className="flex items-baseline gap-1.5 sm:gap-2">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-primary">{tier.price}</span>
                <span className="text-text-dark/50 font-heading text-xs sm:text-xs tracking-widest uppercase">{tier.period}</span>
            </div>
        </div>
        <div className="h-px w-full bg-primary/5 mb-6 sm:mb-8" />
        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
            {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start text-text-dark/70 font-body text-xs sm:text-sm leading-relaxed">
                    <Check size={12} className="sm:w-[14px] sm:h-[14px] text-secondary mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <button className={`w-full py-3 sm:py-4 font-heading font-semibold text-xs tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 uppercase rounded-lg active:scale-[0.98] ${tier.isPremium ? 'bg-primary text-white hover:bg-secondary' : 'bg-bg-light text-primary border border-primary/10 hover:bg-primary hover:text-white'
            }`}>
            {tier.isPremium ? 'Get Started' : 'Choose Plan'}
        </button>
    </motion.div>
);

const Membership: React.FC = () => {
    return (
        <section id="membership" className="py-[var(--section-py)] md:py-[var(--section-py-lg)] bg-bg-light relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/5 bg-white/60">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-secondary" />
                        <span className="font-heading tracking-[0.2em] sm:tracking-[0.3em] text-primary text-xs sm:text-xs font-semibold uppercase">Membership</span>
                    </motion.div>
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-4 sm:mb-6 leading-tight tracking-tight">Registration <span className="text-secondary font-medium">Options</span></h2>
                    <p className="text-text-dark/70 text-sm sm:text-lg max-w-xl mx-auto">Choose your registration type and join our youth cricket tournaments today.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
                    {PRICING_TIERS.map((tier, index) => (
                        <PricingCard key={tier.id} tier={tier} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Membership;

