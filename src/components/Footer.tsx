'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const FooterIdentity: React.FC = () => (
    <div>
        <div className="flex items-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="font-heading font-bold text-primary">ST</span>
            </div>
            <span className="font-heading text-2xl font-bold tracking-wider uppercase">SPORTS <span className="text-secondary">TEXOMA</span></span>
        </div>
        <p className="font-body opacity-60 leading-relaxed mb-8">
            Youth cricket tournaments hosted at Sports Texoma. Dedicated to developing young cricketers through quality coaching and competitive play.
        </p>
        <div className="flex space-x-4">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                    <Icon size={20} />
                </a>
            ))}
        </div>
    </div>
);

const FooterLinkColumn: React.FC<{ title: string; links: { name: string; href: string }[] }> = ({ title, links }) => (
    <div>
        <h4 className="font-heading text-xl text-secondary mb-8">{title}</h4>
        <ul className="space-y-4 font-subheading tracking-widest text-sm opacity-60">
            {links.map((link, i) => (
                <li key={i}>
                    <Link
                        href={link.href}
                        className="hover:text-secondary hover:opacity-100 transition-all text-left"
                    >
                        {link.name.toUpperCase()}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const FooterNewsletter: React.FC = () => (
    <div>
        <h4 className="font-heading text-xl text-secondary mb-8">Clubhouse</h4>
        <p className="font-body opacity-60 mb-6">Join the newsletter for draft news and fixture announcements.</p>
        <form className="relative">
            <input type="email" placeholder="Your Official Email" className="w-full bg-white/10 border-b border-white/20 p-4 focus:border-secondary outline-none font-body transition-colors" />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-secondary font-bold font-subheading px-4">JOIN</button>
        </form>
    </div>
);

const Footer: React.FC = () => {
    const leagueLinks = [
        { name: 'Home', href: '/' },
        { name: 'Tournaments', href: '/tournaments' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const facilityLinks = [
        { name: 'Contact Support', href: '/contact' },
        { name: 'League Info', href: '/about' },
    ];

    return (
        <footer className="bg-primary text-white pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 border-t-8 border-secondary">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
                    <FooterIdentity />
                    <FooterLinkColumn title="Navigation" links={leagueLinks} />
                    <FooterLinkColumn title="Facilities" links={facilityLinks} />
                    <FooterNewsletter />
                </div>

                <div className="border-t border-white/10 pt-8 sm:pt-12 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 opacity-40 text-xs sm:text-sm font-subheading tracking-widest text-center md:text-left">
                    <p>© {new Date().getFullYear()} SPORTS TEXOMA. ALL RIGHTS RESERVED.</p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                        <Link href="#" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
                        <Link href="#" className="hover:text-white transition-colors">CONSTITUTION</Link>
                        <Link href="#" className="hover:text-white transition-colors">SAFETY</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
