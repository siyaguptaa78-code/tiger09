'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { WA_LINK } from './constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 shadow-lg shadow-red-500/10 backdrop-blur-md'
          : 'bg-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" id="nav-logo" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="text-2xl font-black tracking-tight">
                <span className="text-red-500 group-hover:text-red-400 transition-colors duration-300">Tiger</span>
                <span className="text-white"> 365 </span>
                <span className="text-red-500 group-hover:text-red-400 transition-colors duration-300">Id</span>
              </span>
              <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-red-500 transition-all duration-300"></div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              id="nav-home"
              className="text-gray-300 hover:text-red-500 font-medium transition-all duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-red-500 transition-all duration-300"></span>
            </Link>
            <Link
              href="/blog"
              id="nav-blog"
              className="text-gray-300 hover:text-red-500 font-medium transition-all duration-300 relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-red-500 transition-all duration-300"></span>
            </Link>
            <a
              href={WA_LINK}
              id="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red text-white font-bold px-6 py-2 rounded-full text-sm uppercase tracking-wider"
            >
              Get Tiger 365 ID
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            className="md:hidden text-gray-300 hover:text-red-500 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-64 pb-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-4 pt-4 border-t border-red-500/20">
            <Link href="/" id="mobile-nav-home" className="text-gray-300 hover:text-red-500 font-medium transition-colors" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/blog" id="mobile-nav-blog" className="text-gray-300 hover:text-red-500 font-medium transition-colors" onClick={() => setMobileOpen(false)}>Blog</Link>
            <a
              href={WA_LINK}
              id="mobile-nav-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red text-white font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wider text-center"
            >
              Get Tiger 365 ID
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
