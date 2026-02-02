'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Facebook, Instagram, Twitter, Send } from 'lucide-react';

const Logo: React.FC = () => (
    <Link href="/" className="flex items-center group relative -my-8">
        <img
            src="/logo.png"
            alt="Texoma Cricket League"
            className="h-28 w-auto object-contain transform transition-transform group-hover:scale-105"
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
    { name: 'Partner', href: '/register' },
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
                        className={`font-subheading text-[12px] font-bold tracking-[0.15em] transition-all uppercase px-5 py-2.5 rounded-full relative ${isActive
                            ? 'text-primary bg-white shadow-soft ring-1 ring-black/5'
                            : 'text-text-dark/80 hover:text-primary hover:bg-white/50 hover:shadow-sm'
                            }`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </div>
    );
};

const SocialLinks: React.FC<{ onRegisterClick: () => void }> = ({ onRegisterClick }) => (
    <div className="hidden lg:flex items-center space-x-4 border-l pl-6 border-primary/10">
        <Facebook size={16} className="text-primary hover:text-secondary cursor-pointer transition-colors" />
        <Instagram size={16} className="text-primary hover:text-secondary cursor-pointer transition-colors" />
        <Twitter size={16} className="text-primary hover:text-secondary cursor-pointer transition-colors" />
        <div className="w-px h-6 bg-primary/10 ml-2 mr-2" />
        <button
            onClick={onRegisterClick}
            className="bg-primary text-white px-6 py-2.5 rounded-full font-subheading text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-accent transition-all shadow-md"
        >
            Register Now
        </button>
    </div>
);

const RegistrationModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'player'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', type: 'player' });
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]" onClick={onClose} />
            <div className="fixed inset-0 z-[201] flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <div className="bg-primary p-6 text-white">
                        <div className="flex justify-between items-center">
                            <h2 className="font-heading text-2xl font-bold">Register Now</h2>
                            <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                                <X size={24} />
                            </button>
                        </div>
                        <p className="text-white/80 mt-2 text-sm">Join the Texoma Cricket League community</p>
                    </div>

                    {isSubmitted ? (
                        <div className="p-8 text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Send className="text-green-600" size={32} />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-primary mb-2">Thank You!</h3>
                            <p className="text-primary/70">We&apos;ll be in touch soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-primary mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-primary mb-1">Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-primary mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-primary mb-1">I am a *</label>
                                <select
                                    required
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white"
                                >
                                    <option value="player">Player</option>
                                    <option value="parent">Parent/Guardian</option>
                                    <option value="coach">Coach</option>
                                    <option value="academy">Academy</option>
                                    <option value="umpire">Umpire/Official</option>
                                    <option value="sponsor">Sponsor/Partner</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-secondary text-primary py-4 rounded-lg font-heading font-bold text-sm uppercase tracking-wider hover:bg-secondary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Submit Registration
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const pathname = usePathname();

    const openMenu = useCallback(() => {
        setIsMenuOpen(true);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    const openRegisterModal = useCallback(() => {
        setIsRegisterModalOpen(true);
    }, []);

    const closeRegisterModal = useCallback(() => {
        setIsRegisterModalOpen(false);
    }, []);

    // Close menu on route change
    useEffect(() => {
        closeMenu();
    }, [pathname, closeMenu]);

    // Lock body scroll when menu or modal is open
    useEffect(() => {
        if (isMenuOpen || isRegisterModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen, isRegisterModalOpen]);

    return (
        <>
            <nav className="sticky top-0 z-[100] pt-2 sm:pt-4 pb-2 flex justify-center w-full pointer-events-none">
                <div className="pointer-events-auto flex items-center justify-between w-full max-w-7xl px-4 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full transition-all duration-500 glass-nav shadow-super mx-2 sm:mx-4">
                    <Logo />
                    <NavLinks className="hidden lg:flex items-center space-x-4" />
                    <SocialLinks onRegisterClick={openRegisterModal} />
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
                <button
                    onClick={() => {
                        closeMenu();
                        openRegisterModal();
                    }}
                    className="bg-primary text-white py-5 rounded-xl font-subheading text-lg font-bold tracking-[0.2em] uppercase shadow-xl text-center mt-auto"
                >
                    Register Now
                </button>
            </div>

            {/* Registration Modal */}
            <RegistrationModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
        </>
    );
};

export default Navbar;

