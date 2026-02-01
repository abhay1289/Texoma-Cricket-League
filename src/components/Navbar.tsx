'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';

const Logo: React.FC = () => (
    <Link href="/" className="flex items-center group">
        <img
            src="/logo.png"
            alt="Texoma Cricket League"
            className="h-24 w-auto object-contain transform transition-transform group-hover:scale-105"
        />
    </Link>
);

interface NavLinkItem {
    name: string;
    href: string;
}

const navLinks: NavLinkItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Tournaments', href: '/tournaments' },
    { name: 'Register', href: '/register' },
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
                        className={`font-subheading text-[11px] font-bold tracking-[0.15em] transition-all uppercase px-5 py-2.5 rounded-full relative ${isActive
                            ? 'text-primary bg-white shadow-soft ring-1 ring-black/5'
                            : 'text-text-dark/60 hover:text-primary hover:bg-white/50 hover:shadow-sm'
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
            href="/register"
            className="bg-primary text-white px-6 py-2.5 rounded-full font-subheading text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-accent transition-all shadow-md"
        >
            Register Now
        </Link>
    </div>
);

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const openMenu = useCallback(() => {
        setIsMenuOpen(true);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    // Close menu on route change
    useEffect(() => {
        closeMenu();
    }, [pathname, closeMenu]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="sticky top-0 z-[100] pt-2 sm:pt-4 pb-2 flex justify-center w-full pointer-events-none">
                <div className="pointer-events-auto flex items-center justify-between w-full max-w-7xl px-4 sm:px-8 md:px-12 py-2.5 sm:py-3 rounded-full transition-all duration-500 glass-nav shadow-super mx-2 sm:mx-4">
                    <Logo />
                    <NavLinks className="hidden lg:flex items-center space-x-4" />
                    <SocialLinks />
                    <button
                        type="button"
                        className="lg:hidden p-3 text-primary hover:bg-primary/5 active:bg-primary/10 rounded-full transition-colors"
                        onClick={openMenu}
                        aria-label="Open menu"
                        aria-expanded={isMenuOpen}
                        style={{ touchAction: 'manipulation' }}
                    >
                        <Menu size={24} strokeWidth={2.5} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-[198] lg:hidden"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Menu Panel */}
            <div
                className={`fixed inset-y-0 right-0 w-full max-w-sm bg-bg-cream z-[199] flex flex-col p-8 lg:hidden shadow-2xl transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center mb-12">
                    <span className="font-heading font-black text-primary uppercase text-lg">TEXOMA CRICKET LEAGUE</span>
                    <button
                        type="button"
                        onClick={closeMenu}
                        className="p-2 -mr-2 text-primary hover:bg-primary/5 active:bg-primary/10 rounded-full transition-colors"
                        aria-label="Close menu"
                        style={{ touchAction: 'manipulation' }}
                    >
                        <X size={28} strokeWidth={2.5} />
                    </button>
                </div>
                <nav className="flex flex-col space-y-6 flex-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={closeMenu}
                            className="font-heading text-3xl text-text-dark font-black hover:text-primary active:text-primary transition-all uppercase text-left border-b border-primary/5 pb-4"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <Link
                    href="/register"
                    onClick={closeMenu}
                    className="bg-primary text-white py-5 rounded-xl font-subheading text-lg font-bold tracking-[0.2em] uppercase shadow-xl text-center mt-auto"
                >
                    Register Now
                </Link>
            </div>
        </>
    );
};

export default Navbar;
