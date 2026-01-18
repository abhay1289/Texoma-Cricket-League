'use client';

import React, { useState, useEffect } from 'react';
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

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const pathname = usePathname();

    // Close menu on route change
    useEffect(() => {
        onClose();
    }, [pathname, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 z-[199] lg:hidden"
                        onClick={onClose}
                    />
                    {/* Menu Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-y-0 right-0 w-full max-w-sm bg-bg-cream z-[200] flex flex-col p-8 lg:hidden shadow-2xl"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <span className="font-heading font-black text-primary uppercase text-xl">TEXOMA CRICKET</span>
                            <button
                                onClick={onClose}
                                className="p-2 -mr-2 text-primary hover:bg-primary/5 rounded-full transition-colors"
                                aria-label="Close menu"
                            >
                                <X size={28} />
                            </button>
                        </div>
                        <nav className="flex flex-col space-y-6 flex-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={onClose}
                                    className="font-heading text-3xl text-text-dark font-black hover:text-primary active:text-primary transition-all uppercase text-left border-b border-primary/5 pb-4"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <Link
                            href="/contact"
                            onClick={onClose}
                            className="bg-primary text-white py-5 rounded-xl font-subheading text-lg font-bold tracking-[0.2em] uppercase shadow-xl text-center mt-auto"
                        >
                            Book Your Court
                        </Link>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <nav className="sticky top-0 z-[100] pt-2 sm:pt-4 pb-2 flex justify-center w-full pointer-events-none">
                <div className="pointer-events-auto flex items-center justify-between w-full max-w-7xl px-4 sm:px-8 md:px-12 py-2.5 sm:py-3 rounded-full transition-all duration-500 glass-nav shadow-super mx-2 sm:mx-4">
                    <Logo />
                    <NavLinks className="hidden lg:flex items-center space-x-4" />
                    <SocialLinks />
                    <button
                        className="lg:hidden p-2.5 text-primary active:bg-primary/10 rounded-full transition-colors touch-manipulation"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                        aria-expanded={isOpen}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>
            <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default Navbar;

