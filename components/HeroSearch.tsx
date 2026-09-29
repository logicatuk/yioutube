'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Film, PlaySquare, Tv, Star, ChevronRight, X } from 'lucide-react';
import { searchLocalContent } from '@/lib/tmdb';
import { SearchResultItem } from '@/lib/types';

export default function HeroSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim().length >= 2) {
      const hits = searchLocalContent(val);
      setResults(hits);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto z-30">
      <div className="relative flex items-center shadow-2xl shadow-black/80 rounded-2xl bg-[#0D131D]/90 backdrop-blur-xl border border-white/15 focus-within:border-[#E50914] focus-within:ring-2 focus-within:ring-[#E50914]/20 transition-all p-1.5 sm:p-2">
        <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#94A3B8] ml-3 flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.trim().length >= 2 && setIsOpen(true)}
          placeholder="Search movies, series and TV channels..."
          className="w-full bg-transparent px-3 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-[#94A3B8] focus:outline-none"
        />

        {query && (
          <button
            onClick={handleClear}
            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white mr-1"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={() => {
            if (query.trim().length >= 2) {
              setResults(searchLocalContent(query));
              setIsOpen(true);
            }
          }}
          className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5 flex-shrink-0 shadow-lg shadow-[#E50914]/30"
        >
          <span>Search</span>
        </button>
      </div>

      {/* Autocomplete Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#0D131D]/98 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/90 overflow-hidden divide-y divide-white/5 animate-in fade-in slide-in-from-top-2 duration-150 max-h-96 overflow-y-auto">
          {results.length === 0 ? (
            <div className="p-6 text-center text-[#94A3B8]">
              <p className="text-sm font-medium text-white">No titles matched &quot;{query}&quot;</p>
              <p className="text-xs mt-1">Try keywords like Inception, Breaking Bad, or Sports.</p>
            </div>
          ) : (
            <div className="p-2 space-y-1">
              <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#94A3B8] flex items-center justify-between">
                <span>Matching Titles ({results.length})</span>
                <span className="text-[#FFB800]">Instant Stream Ready</span>
              </div>

              {results.map((item) => (
                <Link
                  key={`${item.type}-${item.id}`}
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-14 bg-[#111925] rounded-md overflow-hidden relative flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-white/10 text-[#FFB800]">
                        {item.type}
                      </span>
                      {item.rating && (
                        <span className="text-xs text-white/90 flex items-center gap-0.5">
                          <Star className="w-3 h-3 fill-[#FFB800] text-[#FFB800]" />
                          {item.rating}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold text-white group-hover:text-[#E50914] transition-colors truncate mt-0.5">
                      {item.title}
                    </p>
                    <p className="text-xs text-[#94A3B8]">{item.year || item.category}</p>
                  </div>

                  <ChevronRight className="w-4 h-4 text-[#94A3B8] group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
