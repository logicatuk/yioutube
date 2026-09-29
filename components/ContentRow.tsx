'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ContentRowProps {
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  children: React.ReactNode;
}

export default function ContentRow({ title, subtitle, viewAllLink, children }: ContentRowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Nav Controls */}
        <div className="flex items-end justify-between mb-4 sm:mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#E50914] rounded-full inline-block" />
              {title}
            </h2>
            {subtitle && <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">{subtitle}</p>}
          </div>

          <div className="flex items-center gap-2">
            {viewAllLink && (
              <Link
                href={viewAllLink}
                className="text-xs sm:text-sm font-semibold text-[#E50914] hover:text-[#F40D17] transition-colors mr-2 hover:underline"
              >
                View All &rarr;
              </Link>
            )}

            {/* Desktop Left/Right Buttons */}
            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors border border-white/5"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors border border-white/5"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-3 snap-x snap-mandatory"
        >
          {children}
        </div>
      </div>
    </section>
  );
}
