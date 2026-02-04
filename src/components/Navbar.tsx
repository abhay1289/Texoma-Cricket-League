"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu on escape key
    const handleEscape = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
            setIsOpen(false);
        }
    }, [isOpen]);

    // Add escape listener and prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, handleEscape]);

    // Top links
    const topLinks = [
        { name: "REGISTER", href: "/register" },
    ];

    // Actual Menu Items
    const mainLinks = [
        { name: "HOME", href: "/" },
        { name: "ABOUT US", href: "/about" },
        { name: "TOURNAMENTS", href: "/tournaments" },
        { name: "CONTACT", href: "/contact" },
        { name: "REGISTER", href: "/register" },
    ];

    return (
        <header className="relative w-full z-50 bg-white font-heading">

            {/* Container to limit width and maximize responsiveness */}
            <div className="max-w-[1920px] mx-auto relative px-4 sm:px-6 lg:px-8">

                {/* LOGO - Responsive sizing: 80px mobile, 100px tablet, 160px desktop */}
                <div className="absolute top-0 left-4 sm:left-6 lg:left-0 h-[80px] sm:h-[100px] md:h-[130px] lg:h-[160px] flex items-center justify-center w-[80px] sm:w-[100px] md:w-[140px] lg:w-[180px] z-20 bg-white">
                    <Link href="/" className="block relative w-full h-full">
                        <div className="relative w-full h-full transition-transform hover:scale-105">
                            <Image
                                src="/logo.png"
                                alt="Texoma Cricket League"
                                fill
                                className="object-contain object-center"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                {/* Header Row - Balanced height across breakpoints */}
                <div className="flex justify-end items-center h-[80px] sm:h-[100px] md:h-20 lg:h-24 text-sm font-bold text-primary relative pr-0 sm:pr-0">

                    {/* Mobile Menu Toggle (Right on Mobile) */}
                    <div className="flex lg:hidden items-center">
                        <button
                            className="p-3 text-primary min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>

                    {/* Desktop Top Links & Search (Right Side) */}
                    <div className="hidden lg:flex space-x-6 items-center self-center pr-0 h-full">
                        <Link href="/privacy" className="text-primary hover:text-secondary transition-colors uppercase">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-primary hover:text-secondary transition-colors uppercase">
                            Terms of Service
                        </Link>
                        <Link href="/register" className="text-primary hover:text-secondary transition-colors uppercase">
                            Register
                        </Link>

                        {/* Call Us Button */}
                        <div className="relative ml-6 group">
                            <a
                                href="tel:+14695551234"
                                className="relative z-10 bg-secondary text-primary px-8 py-2 transform -skew-x-12 font-bold text-lg flex items-center hover:bg-amber-400 transition-colors shadow-md"
                            >
                                <span className="transform skew-x-12 flex items-center">
                                    📞 CALL US
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Navigation Row - Desktop only */}
                <div className="hidden lg:flex items-stretch relative h-16">

                    {/* Spacer for logo alignment */}
                    <div className="hidden lg:block w-48 flex-shrink-0"></div>

                    {/* Desktop Nav - Navy Bar */}
                    <div className="hidden lg:block flex-grow relative">
                        {/* The Navy Background Shape - Skewed with CUT */}
                        <div className="absolute inset-0 bg-primary transform -skew-x-12 origin-top-left translate-x-12 w-full h-full z-0 rounded-l-md shadow-2xl border-t-4 border-secondary"></div>

                        {/* Content Container */}
                        <div className="relative z-10 flex items-center justify-between h-full pl-12 pr-8 w-full">

                            {/* Navigation Links - Left Side */}
                            <nav className="flex items-center h-full space-x-6 xl:space-x-10" aria-label="Main navigation">
                                {mainLinks.map((link, index) => (
                                    <div key={link.name} className="flex items-center h-full relative group">
                                        <Link
                                            href={link.href}
                                            className="px-2 xl:px-4 text-white font-bold text-sm xl:text-lg tracking-wider hover:text-secondary transition-colors h-full flex items-center uppercase whitespace-nowrap"
                                        >
                                            {link.name}
                                        </Link>

                                        {/* Divider */}
                                        {index < mainLinks.length - 1 && (
                                            <div className="absolute -right-3 xl:-right-5 top-1/2 -translate-y-1/2 h-6 xl:h-8 w-[2px] bg-white/10 transform -skew-x-12"></div>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* Right Side - CTA Button */}
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/register"
                                    className="bg-secondary text-primary px-4 xl:px-6 py-2 transform -skew-x-12 font-bold text-sm xl:text-base flex items-center hover:bg-amber-400 transition-colors shadow-md whitespace-nowrap"
                                >
                                    <span className="transform skew-x-12">JOIN NOW</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Backdrop */}
                {isOpen && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black/50 z-40 top-[80px] sm:top-[100px] md:top-[130px]"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />
                )}

                {/* Mobile Menu Dropdown */}
                <nav
                    id="mobile-menu"
                    className={`lg:hidden fixed top-[80px] sm:top-[100px] md:top-[130px] left-0 w-full bg-white shadow-xl z-50 transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible pointer-events-none'
                        }`}
                    aria-label="Mobile navigation"
                    aria-hidden={!isOpen}
                >
                    <div className="p-4 flex flex-col space-y-1 max-h-[calc(100vh-100px)] overflow-y-auto">
                        {mainLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-primary font-bold text-lg hover:text-secondary hover:bg-primary/5 py-4 px-4 rounded-lg transition-colors min-h-[48px] flex items-center"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="border-t pt-4 mt-2 space-y-1">
                            <Link
                                href="/privacy"
                                className="block text-sm text-gray-600 py-3 px-4 hover:bg-gray-50 rounded-lg min-h-[48px] flex items-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="block text-sm text-gray-600 py-3 px-4 hover:bg-gray-50 rounded-lg min-h-[48px] flex items-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Terms of Service
                            </Link>
                        </div>
                        {/* Mobile CTA Button */}
                        <div className="pt-4">
                            <Link
                                href="/register"
                                className="block w-full bg-secondary text-primary text-center py-4 font-bold rounded-lg hover:bg-amber-400 transition-colors min-h-[48px]"
                                onClick={() => setIsOpen(false)}
                            >
                                JOIN NOW
                            </Link>
                        </div>
                    </div>
                </nav>

            </div>
        </header>
    );
}

