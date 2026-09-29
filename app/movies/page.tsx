import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import MovieCard from '@/components/MovieCard';
import ContentRow from '@/components/ContentRow';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CURATED_MOVIES } from '@/lib/catalog-data';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Movies Catalog — Watch Latest Blockbusters & 4K Cinema',
  description:
    'Explore an extensive movie catalog featuring 4K UHD streaming, official trailers, full cast credits, and top-rated cinema across all genres.',
  canonical: '/movies',
});

export default function MoviesPage() {
  const trending = CURATED_MOVIES;
  const actionMovies = CURATED_MOVIES.filter((m) => m.genres.includes('Action'));
  const sciFiMovies = CURATED_MOVIES.filter((m) => m.genres.includes('Sci-Fi'));
  const dramaMovies = CURATED_MOVIES.filter((m) => m.genres.includes('Drama'));
  const animationMovies = CURATED_MOVIES.filter((m) => m.genres.includes('Animation'));

  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Movies' }]} />

        {/* Page Headline */}
        <div className="mt-4 mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/15 text-[#E50914] text-xs font-bold">
            <span>Over 60,000+ Movies in 4K HDR & Surround Audio</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Movies Catalog
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl leading-relaxed">
            Discover trending Hollywood releases, classic masterpieces, independent cinema, and international award-winners. Ready to stream instantly on your connected devices.
          </p>
        </div>

        {/* Featured Movie Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-12 border border-white/10 aspect-[21/9] min-h-[260px] sm:min-h-[320px] bg-[#0D131D] flex items-end p-6 sm:p-10 shadow-2xl">
          <Image
            src="https://image.tmdb.org/t/p/w1280/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg"
            alt="Inception Banner"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-40 filter contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-[#070B12]/60 to-transparent" />
          <div className="relative z-10 max-w-xl space-y-2.5">
            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E50914] text-white uppercase tracking-wider">
              Featured 4K Cinema
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Inception (2010)
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] line-clamp-2">
              Christopher Nolan&apos;s mind-bending masterpiece featuring Leonardo DiCaprio. Stream in uncompressed 4K with multi-language subtitle tracks.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <Link
                href="/movies/inception"
                className="px-5 py-2.5 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#E50914]/40 transition-all hover:scale-105"
              >
                View Movie Details
              </Link>
              <Link
                href="/pricing"
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                Get Subscription
              </Link>
            </div>
          </div>
        </div>

        {/* Catalog Rows */}
        <ContentRow title="Trending Movies" subtitle="Most watched films by subscribers this week">
          {trending.map((movie) => (
            <div key={movie.id} className="w-[160px] sm:w-[200px] md:w-[220px] flex-shrink-0 snap-start">
              <MovieCard movie={movie} />
            </div>
          ))}
        </ContentRow>

        <ContentRow title="Sci-Fi & Action Thrillers" subtitle="High-octane blockbusters & interstellar epics">
          {[...sciFiMovies, ...actionMovies].slice(0, 6).map((movie) => (
            <div key={movie.id} className="w-[160px] sm:w-[200px] md:w-[220px] flex-shrink-0 snap-start">
              <MovieCard movie={movie} />
            </div>
          ))}
        </ContentRow>

        <ContentRow title="Top-Rated Cinema & Dramas" subtitle="Critically acclaimed masterworks">
          {dramaMovies.map((movie) => (
            <div key={movie.id} className="w-[160px] sm:w-[200px] md:w-[220px] flex-shrink-0 snap-start">
              <MovieCard movie={movie} />
            </div>
          ))}
        </ContentRow>

        {animationMovies.length > 0 && (
          <ContentRow title="Animation & Family" subtitle="Treasured animated classics for all ages">
            {animationMovies.map((movie) => (
              <div key={movie.id} className="w-[160px] sm:w-[200px] md:w-[220px] flex-shrink-0 snap-start">
                <MovieCard movie={movie} />
              </div>
            ))}
          </ContentRow>
        )}
      </div>
    </div>
  );
}
