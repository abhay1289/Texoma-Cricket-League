'use client';

import React from 'react';
import Image from 'next/image';

const PartnerBrand: React.FC<{ name: string; logo: string }> = ({ name, logo }) => (
    <div className="flex flex-col items-center group cursor-pointer">
        <div className="relative w-14 h-14 sm:w-20 sm:h-20">
            <Image
                src={logo}
                alt={name}
                fill
                className="grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 opacity-60 group-hover:opacity-100 object-contain"
            />
        </div>
        <span className="mt-3 sm:mt-4 font-subheading text-[10px] sm:text-xs tracking-widest text-gray-400 group-hover:text-primary transition-colors text-center">
            {name.toUpperCase()}
        </span>
    </div>
);

const Partners: React.FC = () => {
    const partners = [
        { name: 'Sports Texoma', logo: 'https://cdn-icons-png.flaticon.com/512/8750/8750696.png' },
        { name: 'Texoma Cricket League', logo: 'https://cdn-icons-png.flaticon.com/512/3306/3306613.png' },
        { name: 'Local Bank', logo: 'https://cdn-icons-png.flaticon.com/512/2830/2830284.png' },
        { name: 'Health Texoma', logo: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png' },
        { name: 'Sports Gear Co', logo: 'https://cdn-icons-png.flaticon.com/512/1041/1041846.png' },
    ];

    return (
        <section className="py-[var(--section-py)] bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-12">
                    <span className="font-heading tracking-[0.3em] text-secondary text-[10px] sm:text-[11px] font-semibold uppercase mb-3 sm:mb-4 block">Trusted By</span>
                    <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-primary tracking-tight">Our Partners</h3>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-24">
                    {partners.map((partner, i) => (
                        <PartnerBrand key={i} name={partner.name} logo={partner.logo} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
