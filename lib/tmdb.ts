import { CURATED_MOVIES, CURATED_SERIES } from './catalog-data';
import { Movie, Series, CastMember, SearchResultItem } from './types';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// In-memory cache for fast SSR response and minimizing redundant rate-limited requests
const cache = new Map<string, { timestamp: number; data: unknown }>();
const CACHE_TTL_MS = 1000 * 60 * 30; // 30 minutes

async function fetchFromTMDB<T>(endpoint: string, params: Record<string, string> = {}): Promise<T | null> {
  if (!TMDB_API_KEY) {
    return null;
  }

  const queryParams = new URLSearchParams({
    api_key: TMDB_API_KEY,
    language: 'en-US',
    ...params,
  });

  const url = `${TMDB_BASE_URL}${endpoint}?${queryParams.toString()}`;

  const cached = cache.get(url);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return cached.data as T;
  }

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    cache.set(url, { timestamp: Date.now(), data });
    return data as T;
  } catch (error) {
    console.warn(`TMDB fetch failed for ${endpoint}:`, error);
    return null;
  }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export async function getTrendingMovies(): Promise<Movie[]> {
  const data = await fetchFromTMDB<{ results: Array<Record<string, unknown>> }>('/trending/movie/week');
  if (data && data.results && data.results.length > 0) {
    return data.results.map((item) => ({
      id: item.id as number,
      title: (item.title as string) || (item.original_title as string),
      slug: slugify((item.title as string) || (item.original_title as string)),
      overview: (item.overview as string) || '',
      posterPath: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '',
      backdropPath: item.backdrop_path ? `https://image.tmdb.org/t/p/w1280${item.backdrop_path}` : '',
      releaseDate: (item.release_date as string) || '',
      year: item.release_date ? new Date(item.release_date as string).getFullYear() : 2024,
      rating: Math.round(((item.vote_average as number) || 0) * 10) / 10,
      voteCount: (item.vote_count as number) || 0,
      genres: ['Popular', 'Trending'],
      runtime: 120,
      certification: 'PG-13',
      cast: [],
    }));
  }
  return CURATED_MOVIES;
}

export async function getPopularMovies(): Promise<Movie[]> {
  const data = await fetchFromTMDB<{ results: Array<Record<string, unknown>> }>('/movie/popular');
  if (data && data.results && data.results.length > 0) {
    return data.results.slice(0, 10).map((item) => ({
      id: item.id as number,
      title: (item.title as string) || (item.original_title as string),
      slug: slugify((item.title as string) || (item.original_title as string)),
      overview: (item.overview as string) || '',
      posterPath: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '',
      backdropPath: item.backdrop_path ? `https://image.tmdb.org/t/p/w1280${item.backdrop_path}` : '',
      releaseDate: (item.release_date as string) || '',
      year: item.release_date ? new Date(item.release_date as string).getFullYear() : 2024,
      rating: Math.round(((item.vote_average as number) || 0) * 10) / 10,
      voteCount: (item.vote_count as number) || 0,
      genres: ['Action', 'Thriller'],
      runtime: 125,
      certification: 'PG-13',
      cast: [],
    }));
  }
  return CURATED_MOVIES;
}

export async function getTopRatedMovies(): Promise<Movie[]> {
  const data = await fetchFromTMDB<{ results: Array<Record<string, unknown>> }>('/movie/top_rated');
  if (data && data.results && data.results.length > 0) {
    return data.results.slice(0, 10).map((item) => ({
      id: item.id as number,
      title: (item.title as string) || (item.original_title as string),
      slug: slugify((item.title as string) || (item.original_title as string)),
      overview: (item.overview as string) || '',
      posterPath: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '',
      backdropPath: item.backdrop_path ? `https://image.tmdb.org/t/p/w1280${item.backdrop_path}` : '',
      releaseDate: (item.release_date as string) || '',
      year: item.release_date ? new Date(item.release_date as string).getFullYear() : 2024,
      rating: Math.round(((item.vote_average as number) || 0) * 10) / 10,
      voteCount: (item.vote_count as number) || 0,
      genres: ['Top Rated', 'Cinema'],
      runtime: 140,
      certification: 'PG-13',
      cast: [],
    }));
  }
  return [...CURATED_MOVIES].sort((a, b) => b.rating - a.rating);
}

export async function getTrendingSeries(): Promise<Series[]> {
  const data = await fetchFromTMDB<{ results: Array<Record<string, unknown>> }>('/trending/tv/week');
  if (data && data.results && data.results.length > 0) {
    return data.results.map((item) => ({
      id: item.id as number,
      title: (item.name as string) || (item.original_name as string),
      slug: slugify((item.name as string) || (item.original_name as string)),
      overview: (item.overview as string) || '',
      posterPath: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '',
      backdropPath: item.backdrop_path ? `https://image.tmdb.org/t/p/w1280${item.backdrop_path}` : '',
      firstAirDate: (item.first_air_date as string) || '',
      year: item.first_air_date ? new Date(item.first_air_date as string).getFullYear() : 2024,
      rating: Math.round(((item.vote_average as number) || 0) * 10) / 10,
      seasonsCount: 1,
      episodesCount: 10,
      genres: ['Drama', 'Trending'],
      certification: 'TV-MA',
      cast: [],
    }));
  }
  return CURATED_SERIES;
}

export async function getPopularSeries(): Promise<Series[]> {
  const data = await fetchFromTMDB<{ results: Array<Record<string, unknown>> }>('/tv/popular');
  if (data && data.results && data.results.length > 0) {
    return data.results.slice(0, 10).map((item) => ({
      id: item.id as number,
      title: (item.name as string) || (item.original_name as string),
      slug: slugify((item.name as string) || (item.original_name as string)),
      overview: (item.overview as string) || '',
      posterPath: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '',
      backdropPath: item.backdrop_path ? `https://image.tmdb.org/t/p/w1280${item.backdrop_path}` : '',
      firstAirDate: (item.first_air_date as string) || '',
      year: item.first_air_date ? new Date(item.first_air_date as string).getFullYear() : 2024,
      rating: Math.round(((item.vote_average as number) || 0) * 10) / 10,
      seasonsCount: 2,
      episodesCount: 20,
      genres: ['Popular', 'Series'],
      certification: 'TV-MA',
      cast: [],
    }));
  }
  return CURATED_SERIES;
}

export async function getMovieDetails(slugOrId: string | number): Promise<Movie | null> {
  // First check curated movies
  const normalizedSlug = String(slugOrId).toLowerCase();
  const matched = CURATED_MOVIES.find(
    (m) => m.slug === normalizedSlug || String(m.id) === String(slugOrId)
  );

  if (matched) {
    return matched;
  }

  // If numeric ID or TMDB query enabled
  if (TMDB_API_KEY && !isNaN(Number(slugOrId))) {
    const tmdbData = await fetchFromTMDB<Record<string, unknown>>(`/movie/${slugOrId}`, {
      append_to_response: 'credits,videos,similar',
    });

    if (tmdbData) {
      const credits = (tmdbData.credits as Record<string, unknown>) || {};
      const castArray = Array.isArray(credits.cast) ? credits.cast : [];
      const crewArray = Array.isArray(credits.crew) ? credits.crew : [];
      const videos = (tmdbData.videos as Record<string, unknown>) || {};
      const videoResults = Array.isArray(videos.results) ? videos.results : [];

      const director = crewArray.find((c: { job: string; name: string }) => c.job === 'Director')?.name;
      const trailer = videoResults.find(
        (v: { site: string; type: string; key: string }) =>
          v.site === 'YouTube' && (v.type === 'Trailer' || v.type === 'Teaser')
      )?.key;

      const cast: CastMember[] = castArray.slice(0, 10).map((c: { id: number; name: string; character: string; profile_path: string }) => ({
        id: c.id,
        name: c.name,
        character: c.character || 'Supporting Role',
        profilePath: c.profile_path ? `https://image.tmdb.org/t/p/w185${c.profile_path}` : 'https://picsum.photos/seed/actor/185/278',
      }));

      const genres = Array.isArray(tmdbData.genres)
        ? tmdbData.genres.map((g: { name: string }) => g.name)
        : ['Feature'];

      return {
        id: tmdbData.id as number,
        title: (tmdbData.title as string) || '',
        slug: slugify(tmdbData.title as string),
        overview: (tmdbData.overview as string) || '',
        posterPath: tmdbData.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : '',
        backdropPath: tmdbData.backdrop_path ? `https://image.tmdb.org/t/p/w1280${tmdbData.backdrop_path}` : '',
        releaseDate: (tmdbData.release_date as string) || '',
        year: tmdbData.release_date ? new Date(tmdbData.release_date as string).getFullYear() : 2024,
        rating: Math.round(((tmdbData.vote_average as number) || 0) * 10) / 10,
        voteCount: (tmdbData.vote_count as number) || 0,
        genres,
        runtime: (tmdbData.runtime as number) || 120,
        certification: 'PG-13',
        director,
        cast,
        trailerYoutubeKey: trailer,
        tagLine: (tmdbData.tagline as string) || '',
        language: (tmdbData.original_language as string) || 'en',
      };
    }
  }

  // Fallback: search curated by loose title match
  const loose = CURATED_MOVIES.find((m) =>
    m.title.toLowerCase().includes(normalizedSlug.replace(/-/g, ' '))
  );
  return loose || null;
}

export async function getSeriesDetails(slugOrId: string | number): Promise<Series | null> {
  const normalizedSlug = String(slugOrId).toLowerCase();
  const matched = CURATED_SERIES.find(
    (s) => s.slug === normalizedSlug || String(s.id) === String(slugOrId)
  );

  if (matched) {
    return matched;
  }

  if (TMDB_API_KEY && !isNaN(Number(slugOrId))) {
    const tmdbData = await fetchFromTMDB<Record<string, unknown>>(`/tv/${slugOrId}`, {
      append_to_response: 'credits,videos,similar',
    });

    if (tmdbData) {
      const credits = (tmdbData.credits as Record<string, unknown>) || {};
      const castArray = Array.isArray(credits.cast) ? credits.cast : [];
      const videos = (tmdbData.videos as Record<string, unknown>) || {};
      const videoResults = Array.isArray(videos.results) ? videos.results : [];

      const trailer = videoResults.find(
        (v: { site: string; type: string; key: string }) =>
          v.site === 'YouTube' && (v.type === 'Trailer' || v.type === 'Teaser')
      )?.key;

      const cast: CastMember[] = castArray.slice(0, 10).map((c: { id: number; name: string; character: string; profile_path: string }) => ({
        id: c.id,
        name: c.name,
        character: c.character || 'Series Lead',
        profilePath: c.profile_path ? `https://image.tmdb.org/t/p/w185${c.profile_path}` : 'https://picsum.photos/seed/actor/185/278',
      }));

      const genres = Array.isArray(tmdbData.genres)
        ? tmdbData.genres.map((g: { name: string }) => g.name)
        : ['Drama'];

      return {
        id: tmdbData.id as number,
        title: (tmdbData.name as string) || '',
        slug: slugify(tmdbData.name as string),
        overview: (tmdbData.overview as string) || '',
        posterPath: tmdbData.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : '',
        backdropPath: tmdbData.backdrop_path ? `https://image.tmdb.org/t/p/w1280${tmdbData.backdrop_path}` : '',
        firstAirDate: (tmdbData.first_air_date as string) || '',
        year: tmdbData.first_air_date ? new Date(tmdbData.first_air_date as string).getFullYear() : 2024,
        rating: Math.round(((tmdbData.vote_average as number) || 0) * 10) / 10,
        seasonsCount: (tmdbData.number_of_seasons as number) || 1,
        episodesCount: (tmdbData.number_of_episodes as number) || 10,
        genres,
        certification: 'TV-MA',
        creator: 'Showrunner',
        cast,
        trailerYoutubeKey: trailer,
        status: (tmdbData.status as string) || 'Ongoing',
      };
    }
  }

  const loose = CURATED_SERIES.find((s) =>
    s.title.toLowerCase().includes(normalizedSlug.replace(/-/g, ' '))
  );
  return loose || null;
}

export function searchLocalContent(query: string): SearchResultItem[] {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();

  const results: SearchResultItem[] = [];

  // Movies
  for (const m of CURATED_MOVIES) {
    if (m.title.toLowerCase().includes(q) || m.genres.some((g) => g.toLowerCase().includes(q))) {
      results.push({
        id: m.id,
        title: m.title,
        slug: m.slug,
        type: 'movie',
        year: m.year,
        category: m.genres.slice(0, 2).join(', '),
        rating: m.rating,
        image: m.posterPath,
        url: `/movies/${m.slug}`,
      });
    }
  }

  // Series
  for (const s of CURATED_SERIES) {
    if (s.title.toLowerCase().includes(q) || s.genres.some((g) => g.toLowerCase().includes(q))) {
      results.push({
        id: s.id,
        title: s.title,
        slug: s.slug,
        type: 'series',
        year: s.year,
        category: s.genres.slice(0, 2).join(', '),
        rating: s.rating,
        image: s.posterPath,
        url: `/series/${s.slug}`,
      });
    }
  }

  return results.slice(0, 8);
}
