'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
    { linkText: 'Послуги', href: '#services' },
    { linkText: 'Переваги', href: '#advantages' },
    { linkText: 'Ціни', href: '#pricing' },
    { linkText: 'Контакти', href: '#contact' },
];

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <Link href="/" className="flex items-center gap-2 no-underline">
                        <span className="text-2xl">🏗️</span>
                        <span className="text-lg sm:text-xl font-bold text-secondary">
                            КривоРівноБуд
                        </span>
                    </Link>

                    <ul className="hidden md:flex items-center gap-6">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="text-neutral-700 font-medium no-underline hover:text-primary transition-colors"
                                >
                                    {item.linkText}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="tel:+380XXXXXXXXX" className="btn btn-primary no-underline text-sm">
                                Зателефонувати
                            </Link>
                        </li>
                    </ul>

                    <button
                        className="md:hidden p-2 text-neutral-700"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Меню"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden pb-4 border-t border-neutral-100">
                        <ul className="flex flex-col gap-2 pt-4">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="block px-3 py-2 text-neutral-700 font-medium no-underline hover:text-primary"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.linkText}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-2">
                                <Link href="tel:+380XXXXXXXXX" className="btn btn-primary no-underline w-full text-sm">
                                    Зателефонувати
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
