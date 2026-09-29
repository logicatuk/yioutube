'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Star, Plus, Check } from 'lucide-react';
import { Movie } from '@/lib/types';

export default function MovieCard({ movie }: { movie: Movie }) {
  const [isSaved, setIsSaved] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <div className="group relative flex flex-col rounded-xl overflow-hidden bg-[#111925] border border-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/70 hover:-translate-y-1">
      <Link href={`/movies/${movie.slug}`} className="block relative aspect-[2/3] w-full overflow-hidden bg-[#0D131D]">
        <Image
          src={movie.posterPath || 'https://picsum.photos/seed/movie/500/750'}
          alt={`Poster for ${movie.title}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#E50914] text-white tracking-wider shadow">
            4K HDR
          </span>
          <button
            onClick={toggleFavorite}
            aria-label={isSaved ? 'Remove from favorites' : 'Add to favorites'}
            className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#E50914] hover:text-white transition-colors"
          >
            {isSaved ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Plus className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Desktop Hover Overlay with Play Button */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-[#070B12]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 z-10 hidden sm:flex">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-8 rounded-full bg-[#E50914] text-white flex items-center justify-center shadow-lg shadow-[#E50914]/50 group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 fill-white ml-0.5" />
            </span>
            <span className="text-xs font-semibold text-white">Stream Info</span>
          </div>

          <p className="text-xs text-[#94A3B8] line-clamp-2 leading-relaxed mb-1">
            {movie.overview}
          </p>

          <div className="flex items-center justify-between text-[11px] text-white/90 pt-1 border-t border-white/10">
            <span>{movie.runtime}m</span>
            <span>{movie.certification || 'PG-13'}</span>
          </div>
        </div>
      </Link>

      {/* Card Info (Always visible on mobile & standard desktop flow) */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-white truncate group-hover:text-[#E50914] transition-colors">
            <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
          </h3>
          <p className="text-xs text-[#94A3B8] mt-0.5 truncate">
            {movie.genres.slice(0, 2).join(' • ')}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-xs text-[#94A3B8]">
          <span>{movie.year}</span>
          <div className="flex items-center gap-1 text-[#FFB800] font-semibold">
            <Star className="w-3 h-3 fill-[#FFB800]" />
            <span>{movie.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
