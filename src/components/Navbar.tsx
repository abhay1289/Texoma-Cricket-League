'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo: React.FC = () => (
    <Link href="/" className="flex items-center space-x-3 group">
        <div className="w-12 h-12 bg-primary border-2 border-secondary rounded-full flex items-center justify-center overflow-hidden shadow-lg transform transition-transform group-hover:rotate-12">
            <div className="text-secondary font-heading font-black text-center leading-none">
                <span className="block text-[7px] uppercase tracking-tighter text-white">Sports</span>
                <span className="block text-xs uppercase">Texoma</span>
            </div>
        </div>
    </Link>
);

interface NavLink {
    name: string;
    href: string;
}

const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'Tournaments', href: '/tournaments' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

const NavLinks: React.FC<{ className?: string }> = ({ className = "" }) => {
    const pathname = usePathname();

    return (
        <div className={className}>
            {navLinks.map((link) => {
                const isActive = pathname === link.href ||
                    (link.href !== '/' && pathname.startsWith(link.href.split('#')[0]));

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`font-subheading text-[12px] font-bold tracking-widest transition-all uppercase px-4 py-2 rounded-full ${isActive
                            ? 'text-primary bg-secondary/10'
                            : 'text-text-dark/70 hover:text-primary hover:bg-secondary/5'
                            }`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </div>
    );
};

const SocialLinks: React.FC = () => (
    <div className="hidden lg:flex items-center space-x-4 border-l pl-6 border-primary/10">
        <Facebook size={16} className="text-primary hover:text-secondary cursor-pointer transition-colors" />
        <Instagram size={16} className="text-primary hover:text-secondary cursor-pointer transition-colors" />
        <Twitter size={16} className="text-primary hover:text-secondary cursor-pointer transition-colors" />
        <div className="w-px h-6 bg-primary/10 ml-2 mr-2" />
        <Link
            href="/contact"
            className="bg-primary text-white px-6 py-2.5 rounded-full font-subheading text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-accent transition-all shadow-md"
        >
            Book Now
        </Link>
    </div>
);

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                className="fixed inset-0 bg-bg-cream z-[200] flex flex-col p-12 lg:hidden"
            >
                <div className="flex justify-between items-center mb-12">
                    <span className="font-heading font-black text-primary uppercase text-xl">SPORTS TEXOMA</span>
                    <X size={32} className="text-primary cursor-pointer" onClick={onClose} />
                </div>
                <div className="flex flex-col space-y-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={onClose}
                            className="font-heading text-4xl text-text-dark font-black hover:text-primary transition-all uppercase text-left border-b border-primary/5 pb-4"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={onClose}
                        className="bg-primary text-white py-6 rounded-xl font-subheading text-lg font-bold tracking-[0.2em] uppercase shadow-xl mt-8 text-center"
                    >
                        Book Your Court
                    </Link>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-[100] pt-2 sm:pt-4 pb-2 flex justify-center w-full pointer-events-none">
            <div className="pointer-events-auto flex items-center justify-between w-full max-w-7xl px-4 sm:px-8 md:px-12 py-2.5 sm:py-3 rounded-full transition-all duration-500 glass-nav shadow-super mx-2 sm:mx-4">
                <Logo />
                <NavLinks className="hidden lg:flex items-center space-x-4" />
                <SocialLinks />
                <button className="lg:hidden p-2.5 text-primary active:bg-primary/5 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>
            <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </nav>
    );
};

export default Navbar;
