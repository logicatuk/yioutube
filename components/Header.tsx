'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Search,
  Menu,
  X,
  Tv,
  Film,
  PlaySquare,
  Users,
  BookOpen,
  DollarSign,
  HelpCircle,
  Mail,
  ChevronRight,
  Sparkles,
  Heart,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';
import { searchLocalContent } from '@/lib/tmdb';
import { SearchResultItem } from '@/lib/types';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setSearchModalOpen(false);
  }

  const openSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSearchModalOpen(true);
  };

  const closeSearch = () => {
    setSearchModalOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  // Handle scroll detection for glassmorphism header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut Cmd+K or Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Autofocus search input when modal opens
  useEffect(() => {
    if (searchModalOpen) {
      const timer = setTimeout(() => searchInputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [searchModalOpen]);

  // Handle live search typing
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim().length >= 2) {
      const hits = searchLocalContent(val);
      setSearchResults(hits);
    } else {
      setSearchResults([]);
    }
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Live TV', href: '/live-tv' },
    { label: 'Movies', href: '/movies' },
    { label: 'Series', href: '/series' },
    { label: 'Resellers', href: '/resellers' },
    { label: 'Installation Guides', href: '/installation-guides' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070B12]/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/60 py-3'
            : 'bg-gradient-to-b from-[#070B12]/95 via-[#070B12]/70 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#E50914] rounded-lg">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E50914] to-[#B20710] flex items-center justify-center shadow-lg shadow-[#E50914]/25 group-hover:scale-105 transition-transform">
              <PlaySquare className="w-5 h-5 text-white fill-white/30" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center">
                TV<span className="text-[#E50914]">YouTube</span><span className="text-[10px] font-black text-[#FFB800] bg-amber-500/10 px-1.5 py-0.5 rounded ml-1 border border-amber-500/20">.PRO</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#94A3B8] font-medium hidden sm:inline">
                Premium IPTV & Streaming
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'text-white bg-white/10'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={openSearch}
              aria-label="Search movies, series and channels"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white transition-all text-xs sm:text-sm border border-white/5 hover:border-white/20"
            >
              <Search className="w-4 h-4 text-[#94A3B8]" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden md:inline-block text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-[#94A3B8]">
                ⌘K
              </kbd>
            </button>

            {/* Pricing Button */}
            <Link
              href="/pricing"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-white/90 hover:text-white hover:bg-white/5 transition-colors"
            >
              <DollarSign className="w-4 h-4 text-[#FFB800]" />
              Pricing
            </Link>

            {/* Get Started Button */}
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#E50914] hover:bg-[#F40D17] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-[#E50914]/30 hover:shadow-[#E50914]/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-white/90" />
              <span>Get Started</span>
            </Link>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-50 lg:hidden bg-[#070B12]/98 backdrop-blur-xl border-t border-white/10 overflow-y-auto pb-24 animate-in fade-in duration-200">
          <div className="px-5 py-6 space-y-4">
            {/* Mobile Search input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies, series and channels..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#111925] border border-white/10 text-white placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#E50914]"
              />
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-3.5" />
            </div>

            {/* Mobile Search results if typing */}
            {searchResults.length > 0 && (
              <div className="bg-[#111925] rounded-xl border border-white/10 overflow-hidden divide-y divide-white/5">
                {searchResults.map((item) => (
                  <Link
                    key={`${item.type}-${item.id}`}
                    href={item.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 hover:bg-white/5 transition-colors"
                  >
                    <div className="w-10 h-14 bg-black/40 rounded overflow-hidden flex-shrink-0 relative">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{item.title}</p>
                      <p className="text-xs text-[#94A3B8]">
                        {item.type.toUpperCase()} • {item.year || item.category}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
                  </Link>
                ))}
              </div>
            )}

            {/* Navigation Links */}
            <div className="space-y-1 pt-2">
              <Link
                href="/"
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                  pathname === '/' ? 'bg-[#E50914]/15 text-[#E50914]' : 'text-white hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-3">
                  <PlaySquare className="w-5 h-5" /> Home
                </span>
                <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
              </Link>

              <Link
                href="/live-tv"
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                  pathname.startsWith('/live-tv') ? 'bg-[#E50914]/15 text-[#E50914]' : 'text-white hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-3">
                  <Tv className="w-5 h-5" /> Live TV
                </span>
                <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
              </Link>

              <Link
                href="/movies"
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                  pathname.startsWith('/movies') ? 'bg-[#E50914]/15 text-[#E50914]' : 'text-white hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-3">
                  <Film className="w-5 h-5" /> Movies
                </span>
                <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
              </Link>

              <Link
                href="/series"
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                  pathname.startsWith('/series') ? 'bg-[#E50914]/15 text-[#E50914]' : 'text-white hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-3">
                  <PlaySquare className="w-5 h-5" /> TV Series
                </span>
                <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
              </Link>

              <Link
                href="/pricing"
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                  pathname === '/pricing' ? 'bg-[#E50914]/15 text-[#E50914]' : 'text-white hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5" /> Pricing Plans
                </span>
                <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
              </Link>

              <Link
                href="/installation-guides"
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                  pathname.startsWith('/installation-guides') ? 'bg-[#E50914]/15 text-[#E50914]' : 'text-white hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5" /> Installation Guides
                </span>
                <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
              </Link>

              <Link
                href="/resellers"
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                  pathname === '/resellers' ? 'bg-[#E50914]/15 text-[#E50914]' : 'text-white hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-3">
                  <Users className="w-5 h-5" /> Reseller Program
                </span>
                <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
              </Link>

              <Link
                href="/faq"
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-white hover:bg-white/5"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5" /> FAQ & Help
                </span>
                <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
              </Link>

              <Link
                href="/contact"
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-white hover:bg-white/5"
              >
                <span className="flex items-center gap-3">
                  <Mail className="w-5 h-5" /> Contact Support
                </span>
                <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
              </Link>
            </div>

            {/* Mobile Bottom CTA */}
            <div className="pt-4">
              <Link
                href="/pricing"
                className="w-full py-3.5 px-4 rounded-xl bg-[#E50914] text-white font-semibold text-center block shadow-lg shadow-[#E50914]/30"
              >
                Subscribe Now — from $14.99/mo
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Global Search Modal (Desktop / Mobile popup) */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-2xl bg-[#0D131D] rounded-2xl border border-white/10 shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[80vh]">
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#111925]">
              <Search className="w-5 h-5 text-[#E50914]" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search movies, series, live TV channels..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="flex-1 bg-transparent text-white placeholder-[#94A3B8] text-base focus:outline-none"
              />
              <button
                onClick={closeSearch}
                className="p-1 rounded-md text-[#94A3B8] hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results Area */}
            <div className="overflow-y-auto p-4 space-y-2">
              {searchQuery.trim().length < 2 ? (
                <div className="py-8 text-center text-[#94A3B8]">
                  <p className="text-sm font-medium">Type at least 2 characters to search catalog</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {['Inception', 'Breaking Bad', 'Interstellar', 'Dune', 'Sports', 'BBC News'].map(
                      (tag) => (
                        <button
                          key={tag}
                          onClick={() => {
                            setSearchQuery(tag);
                            setSearchResults(searchLocalContent(tag));
                          }}
                          className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs text-white/80 transition-colors"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="py-12 text-center text-[#94A3B8]">
                  <p className="text-sm font-semibold text-white">No results found for &quot;{searchQuery}&quot;</p>
                  <p className="text-xs mt-1">Try searching for popular titles like Inception, Breaking Bad, or Sky Sports.</p>
                </div>
              ) : (
                searchResults.map((item) => (
                  <Link
                    key={`${item.type}-${item.id}`}
                    href={item.url}
                    onClick={closeSearch}
                    className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors group"
                  >
                    <div className="w-12 h-16 bg-[#111925] rounded-lg overflow-hidden flex-shrink-0 relative">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-[#FFB800] uppercase font-bold tracking-wider">
                          {item.type}
                        </span>
                        {item.rating && (
                          <span className="text-xs text-white font-medium flex items-center gap-0.5">
                            ★ {item.rating}
                          </span>
                        )}
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-[#E50914] transition-colors truncate mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#94A3B8]">{item.year || item.category}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#94A3B8] group-hover:text-white transition-colors" />
                  </Link>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 bg-[#070B12] border-t border-white/5 flex items-center justify-between text-[11px] text-[#94A3B8]">
              <span>Press ESC to close</span>
              <span>All titles ready to stream with active plan</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
