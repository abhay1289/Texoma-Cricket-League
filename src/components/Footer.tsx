'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    // Navigation Links (Combined)
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Tournaments', href: '/tournaments' },
        { name: 'Register', href: '/register' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
    ];

    // Support/Info Links
    const supportLinks = [
        { name: 'Contact Support', href: '/contact' },
        { name: 'League Info', href: '/about' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
    ];

    return (
        <footer className="bg-primary text-white pt-12 pb-8">
            <div className="container mx-auto px-6">

                {/* MAIN CONTENT: 4-column grid (Brand, Nav, Support, Newsletter) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Column 1: Branding + Bio + Socials */}
                    <div className="md:col-span-2 lg:col-span-1 flex flex-col">
                        {/* Logo + Name */}
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-16 h-16 relative bg-white rounded-full flex items-center justify-center border-2 border-secondary overflow-hidden flex-shrink-0">
                                <Image
                                    src="/logo.png"
                                    alt="Texoma Cricket League"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading text-xl font-bold tracking-wider leading-tight">TEXOMA</span>
                                <span className="font-heading text-xl font-bold tracking-wider leading-tight text-secondary">CRICKET LEAGUE</span>
                            </div>
                        </div>

                        {/* Bio */}
                        <p className="text-sm text-white/70 leading-relaxed mb-6">
                            Premier youth cricket tournaments hosted at Sports Texoma. Dedicated to developing young cricketers through quality coaching, competitive play, and community building across Texas and Oklahoma.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            {[
                                { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                                { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                                { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                                { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                            ].map(({ Icon, href, label }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="flex flex-col">
                        <h4 className="font-heading font-bold text-sm tracking-widest mb-4 pb-2 border-b-2 border-secondary/80 uppercase">
                            Navigation
                        </h4>
                        <ul className="flex flex-col space-y-3 text-sm text-white/80 font-body">
                            {navLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="hover:text-secondary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div className="flex flex-col">
                        <h4 className="font-heading font-bold text-sm tracking-widest mb-4 pb-2 border-b-2 border-secondary/80 uppercase">
                            Support
                        </h4>
                        <ul className="flex flex-col space-y-3 text-sm text-white/80 font-body">
                            {supportLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="hover:text-secondary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="flex flex-col">
                        <h4 className="font-heading font-bold text-sm tracking-widest mb-4 pb-2 border-b-2 border-secondary/80 uppercase">
                            Newsletter
                        </h4>
                        <p className="text-sm text-white/60 mb-4 leading-relaxed">
                            Sign up for the latest league updates and draft news.
                        </p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-white/10 border border-white/20 text-white text-sm p-3 rounded focus:outline-none focus:border-secondary transition-colors"
                            />
                            <button className="bg-secondary text-primary font-bold text-sm py-2 px-4 rounded hover:bg-white hover:text-primary transition-colors">
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>

                </div>

                {/* BOTTOM BAR: Copyright */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} Texoma Cricket League. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/terms" className="hover:text-secondary transition-colors">Terms</Link>
                        <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
