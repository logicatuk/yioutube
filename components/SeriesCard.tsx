'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Plus, Check } from 'lucide-react';
import { Series } from '@/lib/types';

export default function SeriesCard({ series }: { series: Series }) {
  const [isSaved, setIsSaved] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <div className="group relative flex flex-col rounded-xl overflow-hidden bg-[#111925] border border-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/70 hover:-translate-y-1">
      <Link href={`/series/${series.slug}`} className="block relative aspect-[2/3] w-full overflow-hidden bg-[#0D131D]">
        <Image
          src={series.posterPath || 'https://picsum.photos/seed/series/500/750'}
          alt={`Poster for ${series.title}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#FFB800] text-black tracking-wider shadow">
            {series.seasonsCount} {series.seasonsCount === 1 ? 'Season' : 'Seasons'}
          </span>
          <button
            onClick={toggleFavorite}
            aria-label={isSaved ? 'Remove from favorites' : 'Add to favorites'}
            className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#E50914] hover:text-white transition-colors"
          >
            {isSaved ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Plus className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Hover backdrop overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-[#070B12]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 z-10 hidden sm:flex">
          <p className="text-xs text-[#94A3B8] line-clamp-3 leading-relaxed mb-2">
            {series.overview}
          </p>
          <div className="flex items-center justify-between text-[11px] text-white/90 pt-1 border-t border-white/10">
            <span>{series.network || 'Premium'}</span>
            <span>{series.certification || 'TV-MA'}</span>
          </div>
        </div>
      </Link>

      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-white truncate group-hover:text-[#E50914] transition-colors">
            <Link href={`/series/${series.slug}`}>{series.title}</Link>
          </h3>
          <p className="text-xs text-[#94A3B8] mt-0.5 truncate">
            {series.genres.slice(0, 2).join(' • ')}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-xs text-[#94A3B8]">
          <span>{series.year}</span>
          <div className="flex items-center gap-1 text-[#FFB800] font-semibold">
            <Star className="w-3 h-3 fill-[#FFB800]" />
            <span>{series.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
