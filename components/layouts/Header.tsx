'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'דף הבית' },
    { href: '/recipes', label: 'מתכונים' },
    { href: '/videos', label: 'סרטונים' },
    { href: '/tutorials', label: 'מדריכים' },
    { href: '/about', label: 'אודות' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b-2 border-slate-800 shadow-xl">
      <nav className="w-full max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Right side group (Website Name + Desktop Nav) */}
          <div className="flex items-center gap-12">
            {/* Logo/Brand - Rightmost element in RTL */}
            <Link
              href="/"
              className="flex items-center gap-3 text-4xl font-bold text-white tracking-tight hover:opacity-90 transition-opacity"
            >
              <span className="hidden sm:inline">מתכונים מדגי הים</span>
              <span className="sm:hidden">מתכונים</span>
            </Link>
            
            {/* Desktop Navigation - Next to the Logo */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-xl font-medium transition-all tracking-wide hover:-translate-y-0.5',
                    isActive(link.href)
                      ? 'text-white font-bold'
                      : 'text-slate-300 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Left side (Mobile Menu Button) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
            aria-label="תפריט"
          >
            {mobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 bg-slate-900">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-4 py-4 rounded-lg text-2xl font-medium transition-colors',
                    isActive(link.href)
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
