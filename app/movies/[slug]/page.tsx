import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  Clock,
  Calendar,
  Play,
  Bookmark,
  Share2,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Film,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import MovieCard from '@/components/MovieCard';
import ContentRow from '@/components/ContentRow';
import { getMovieDetails, slugify } from '@/lib/tmdb';
import { CURATED_MOVIES } from '@/lib/catalog-data';
import { constructMetadata } from '@/lib/seo';
import { getMovieSchema, getBreadcrumbSchema } from '@/lib/schema';

interface MoviePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: MoviePageProps): Promise<Metadata> {
  const { slug } = await params;
  const movie = await getMovieDetails(slug);

  if (!movie) {
    return constructMetadata({
      title: 'Movie Not Found',
      description: 'The requested movie could not be located in our catalog.',
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${movie.title} (${movie.year}) — Cast, Trailer, Details & Stream`,
    description: movie.overview.slice(0, 155),
    canonical: `/movies/${movie.slug}`,
    ogImage: movie.backdropPath || movie.posterPath,
  });
}

export default async function MovieDetailPage({ params }: MoviePageProps) {
  const { slug } = await params;
  const movie = await getMovieDetails(slug);

  if (!movie) {
    notFound();
  }

  const movieSchema = getMovieSchema(movie);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Movies', url: '/movies' },
    { name: movie.genres[0] || 'Catalog', url: '/movies' },
    { name: movie.title, url: `/movies/${movie.slug}` },
  ]);

  // Find similar movies
  const similarMovies = CURATED_MOVIES.filter((m) => m.slug !== movie.slug).slice(0, 4);

  return (
    <article className="min-h-screen">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Cinematic Hero Backdrop */}
      <div className="relative w-full min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] flex items-end">
        {/* Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={movie.backdropPath || movie.posterPath || 'https://picsum.photos/seed/movie/1280/720'}
            alt={`${movie.title} Backdrop`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-35 filter brightness-90"
            referrerPolicy="no-referrer"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-[#070B12]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B12] via-[#070B12]/60 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-28 w-full">
          <Breadcrumbs
            items={[
              { label: 'Movies', href: '/movies' },
              { label: movie.genres[0] || 'Cinema', href: '/movies' },
              { label: movie.title },
            ]}
          />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-6 items-start">
            {/* Left: Poster */}
            <div className="w-48 sm:w-64 lg:w-72 flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/90 border border-white/10 relative aspect-[2/3] bg-[#0D131D] mx-auto lg:mx-0">
              <Image
                src={movie.posterPath || 'https://picsum.photos/seed/movie/500/750'}
                alt={`Official Poster for ${movie.title}`}
                fill
                priority
                sizes="(max-width: 768px) 192px, 288px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#E50914] text-white text-[11px] font-black uppercase px-2 py-0.5 rounded shadow">
                4K UHD
              </div>
            </div>

            {/* Right: Metadata & Details */}
            <div className="flex-1 space-y-5 text-center lg:text-left">
              {/* Badges: Quality, Rating, Year, Runtime, Certification */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-bold">
                  {movie.year}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-semibold">
                  {movie.certification || 'PG-13'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#94A3B8]" />
                  {movie.runtime} min
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFB800]/20 text-[#FFB800] font-bold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#FFB800]" />
                  {movie.rating} / 10
                </span>
              </div>

              {/* H1 Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                {movie.title}
              </h1>

              {/* Genres */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white/90"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              {/* Tagline */}
              {movie.tagLine && (
                <p className="text-sm sm:text-base italic text-[#FFB800] font-medium">
                  &ldquo;{movie.tagLine}&rdquo;
                </p>
              )}

              {/* Overview */}
              <div className="space-y-1.5 max-w-3xl">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                  Synopsis
                </h2>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {movie.overview}
                </p>
              </div>

              {/* Director & Details */}
              {movie.director && (
                <div className="text-xs text-[#94A3B8] pt-1">
                  <span className="text-white font-bold">Director:</span> {movie.director}
                </div>
              )}

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
                <Link
                  href="/pricing"
                  className="px-6 py-3.5 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white font-bold text-sm transition-all shadow-xl shadow-[#E50914]/40 hover:scale-105 flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Watch Now in 4K UHD</span>
                </Link>

                <Link
                  href="/pricing"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all border border-white/15 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#FFB800]" />
                  <span>Get Subscription Plans</span>
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-[#94A3B8] pt-2">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" /> Ready on Firestick & Smart TV
                </span>
                <span>•</span>
                <span>Instant Activation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        {/* Official Trailer Section */}
        {movie.trailerYoutubeKey && (
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Film className="w-5 h-5 text-[#E50914]" />
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Official Trailer
              </h2>
            </div>

            <div className="relative aspect-video max-w-4xl rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${movie.trailerYoutubeKey}?rel=0&modestbranding=1`}
                title={`Official Trailer for ${movie.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </section>
        )}

        {/* Cast Section */}
        {movie.cast && movie.cast.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Top Cast & Characters
            </h2>

            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-3">
              {movie.cast.map((actor) => (
                <div
                  key={actor.id}
                  className="w-28 sm:w-36 flex-shrink-0 rounded-xl bg-[#111925] border border-white/5 p-2.5 text-center space-y-2 group"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto bg-[#0D131D] relative border border-white/10">
                    <img
                      src={actor.profilePath}
                      alt={actor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white truncate">{actor.name}</h4>
                    <p className="text-[11px] text-[#94A3B8] truncate">{actor.character}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Subscription Conversion Banner */}
        <section className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#111925] via-[#0D131D] to-[#111925] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFB800]">
              Unlock Complete Catalog
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Watch {movie.title} & 60,000+ Movies Today
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-lg">
              Stream on Smart TVs, Amazon Firestick, Apple TV, and Android with fast 15-minute activation and 24/7 technical desk support.
            </p>
          </div>
          <Link
            href="/pricing"
            className="px-8 py-3.5 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white font-bold text-sm shadow-xl shadow-[#E50914]/40 flex-shrink-0 transition-transform hover:scale-105"
          >
            Explore Subscription Plans
          </Link>
        </section>

        {/* Similar Titles Carousel */}
        <ContentRow title="Similar Movies You Might Enjoy">
          {similarMovies.map((similar) => (
            <div key={similar.id} className="w-[160px] sm:w-[200px] flex-shrink-0 snap-start">
              <MovieCard movie={similar} />
            </div>
          ))}
        </ContentRow>
      </div>
    </article>
  );
}
