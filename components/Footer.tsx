import React from 'react';
import Link from 'next/link';
import { PlaySquare, ShieldCheck, Zap, Headphones, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-[#05080E] border-t border-white/10 text-[#94A3B8] pt-16 pb-28 md:pb-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-white/10">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#E50914] flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Fast Automated Setup</p>
              <p className="text-xs text-[#94A3B8]">Credentials delivered in 5-15 mins</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FFB800] flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Multi-Device Support</p>
              <p className="text-xs text-[#94A3B8]">Firestick, Smart TV, Android & iOS</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Anti-Freeze Infrastructure</p>
              <p className="text-xs text-[#94A3B8]">High-bandwidth edge streaming</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-sky-400 flex-shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">24/7 Real Support</p>
              <p className="text-xs text-[#94A3B8]">Dedicated technical guidance</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12">
          {/* Brand Info Column */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E50914] to-[#B20710] flex items-center justify-center shadow-lg shadow-[#E50914]/25">
                <PlaySquare className="w-4 h-4 text-white fill-white/30" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight flex items-center">
                TV<span className="text-[#E50914]">YouTube</span><span className="text-[10px] font-black text-[#FFB800] bg-amber-500/10 px-1.5 py-0.5 rounded ml-1 border border-amber-500/20">.PRO</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              Discover a simple IPTV streaming experience with live TV, movies, series, flexible subscription plans, and easy device setup.
            </p>
            <div className="pt-2 text-xs text-[#94A3B8]">
              <span className="text-white font-semibold">Support Desk:</span> {SITE_CONFIG.contactEmail}
              <br />
              <span className="text-white font-semibold">Provisioning SLA:</span> {SITE_CONFIG.averageActivationTime}
            </div>
          </div>

          {/* Product Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Product</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/live-tv" className="hover:text-white transition-colors">
                  Live TV Channels
                </Link>
              </li>
              <li>
                <Link href="/movies" className="hover:text-white transition-colors">
                  Movies Catalog
                </Link>
              </li>
              <li>
                <Link href="/series" className="hover:text-white transition-colors">
                  TV Series
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Subscription Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Support</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/installation-guides" className="hover:text-white transition-colors">
                  Installation Guides
                </Link>
              </li>
              <li>
                <Link href="/installation-guides/ibo-player" className="hover:text-white transition-colors">
                  IBO Player Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Help Desk
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-troubleshoot-iptv-buffering" className="hover:text-white transition-colors">
                  Troubleshooting Buffering
                </Link>
              </li>
            </ul>
          </div>

          {/* Business & Legal Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Business</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/resellers" className="hover:text-white transition-colors">
                  Reseller Program
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About TVYouTube.pro
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Streaming Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Disclaimer & Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* TMDB Attribution & Legal Disclaimer */}
        <div className="pt-8 border-t border-white/10 text-xs text-[#94A3B8]/80 space-y-3">
          <p className="leading-relaxed">
            {SITE_CONFIG.tmdbAttribution}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 text-xs text-[#94A3B8]">
            <p>© {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/refund-policy" className="hover:text-white transition-colors">
                Refunds
              </Link>
              <span>•</span>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">
                Cookies
              </Link>
              <span>•</span>
              <Link href="/disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
