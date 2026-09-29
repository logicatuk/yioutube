import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SeriesCard from '@/components/SeriesCard';
import ContentRow from '@/components/ContentRow';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CURATED_SERIES } from '@/lib/catalog-data';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'TV Series | Stream Trending Shows, Full Seasons & Drama',
  description:
    'Binge complete TV series from HBO, Netflix, AMC, FX and more. Enjoy uncompressed HD and 4K streams with real-time episode synchronization.',
  canonical: '/series',
});

export default function SeriesCatalogPage() {
  const trending = CURATED_SERIES;
  const dramas = CURATED_SERIES.filter((s) => s.genres.includes('Drama'));
  const sciFi = CURATED_SERIES.filter((s) => s.genres.includes('Sci-Fi'));

  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Series' }]} />

        {/* Headline */}
        <div className="mt-4 mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/15 text-[#FFB800] text-xs font-bold">
            <span>Complete Seasons • 15,000+ Series Available</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            TV Series Catalog
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl leading-relaxed">
            Follow the most compelling storylines on television. From Emmy-winning dramas to pulse-pounding thrillers, every episode is ready to stream.
          </p>
        </div>

        {/* Featured Series Hero Box */}
        <div className="relative rounded-2xl overflow-hidden mb-12 border border-white/10 aspect-[21/9] min-h-[260px] sm:min-h-[320px] bg-[#0D131D] flex items-end p-6 sm:p-10 shadow-2xl">
          <Image
            src="https://image.tmdb.org/t/p/w1280/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg"
            alt="Breaking Bad Banner"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-40 filter contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-[#070B12]/60 to-transparent" />
          <div className="relative z-10 max-w-xl space-y-2.5">
            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#FFB800] text-black uppercase tracking-wider">
              Critically Acclaimed Masterpiece
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Breaking Bad (5 Seasons)
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] line-clamp-2">
              Bryan Cranston stars as Walter White in one of the most celebrated television dramas in history. Full 62 episodes available on-demand.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <Link
                href="/series/breaking-bad"
                className="px-5 py-2.5 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#E50914]/40 transition-all hover:scale-105"
              >
                View Series Details
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

        {/* Rows */}
        <ContentRow title="Trending TV Series" subtitle="Most binge-watched shows this month">
          {trending.map((series) => (
            <div key={series.id} className="w-[160px] sm:w-[200px] md:w-[220px] flex-shrink-0 snap-start">
              <SeriesCard series={series} />
            </div>
          ))}
        </ContentRow>

        <ContentRow title="Award-Winning Drama Series" subtitle="Intense character journeys and gripping narratives">
          {dramas.map((series) => (
            <div key={series.id} className="w-[160px] sm:w-[200px] md:w-[220px] flex-shrink-0 snap-start">
              <SeriesCard series={series} />
            </div>
          ))}
        </ContentRow>

        {sciFi.length > 0 && (
          <ContentRow title="Sci-Fi & Supernatural" subtitle="Uncharted universes and otherworldly mysteries">
            {sciFi.map((series) => (
              <div key={series.id} className="w-[160px] sm:w-[200px] md:w-[220px] flex-shrink-0 snap-start">
                <SeriesCard series={series} />
              </div>
            ))}
          </ContentRow>
        )}
      </div>
    </div>
  );
}
