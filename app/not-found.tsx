import React from 'react';
import Link from 'next/link';
import { Film, Home, DollarSign, Search, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#E50914]/15 text-[#E50914] flex items-center justify-center mx-auto shadow-xl shadow-[#E50914]/20">
          <Film className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFB800]">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            The title, channel, or guide you are looking for may have moved or is temporarily unavailable in this region.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#E50914]/30 transition-transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Back Home</span>
          </Link>

          <Link
            href="/movies"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 border border-white/10"
          >
            <Film className="w-4 h-4 text-[#94A3B8]" />
            <span>Browse Movies</span>
          </Link>

          <Link
            href="/pricing"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 border border-white/10"
          >
            <DollarSign className="w-4 h-4 text-[#FFB800]" />
            <span>View Pricing</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
