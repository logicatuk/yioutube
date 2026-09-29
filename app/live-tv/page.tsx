'use client';

import React, { useState, useMemo } from 'react';
import { Search, Tv, Filter, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import ChannelCard from '@/components/ChannelCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { LIVE_CHANNELS } from '@/lib/channels';
import { LiveChannel } from '@/lib/types';

const CATEGORIES = [
  'All',
  'News',
  'Sports',
  'Entertainment',
  'Kids',
  'Movies',
  'Documentary',
  'Music',
  'International',
];

export default function LiveTVPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedQuality, setSelectedQuality] = useState('All');

  // Derive unique countries
  const countries = useMemo(() => {
    const list = Array.from(new Set(LIVE_CHANNELS.map((ch) => ch.country)));
    return ['All', ...list];
  }, []);

  // Filter channels
  const filteredChannels = useMemo(() => {
    return LIVE_CHANNELS.filter((ch) => {
      const matchSearch =
        ch.name.toLowerCase().includes(search.toLowerCase()) ||
        ch.epgNow.title.toLowerCase().includes(search.toLowerCase()) ||
        ch.number.toString().includes(search);

      const matchCategory =
        selectedCategory === 'All' || ch.category === selectedCategory;

      const matchCountry =
        selectedCountry === 'All' || ch.country === selectedCountry;

      const matchQuality =
        selectedQuality === 'All' || ch.quality === selectedQuality;

      return matchSearch && matchCategory && matchCountry && matchQuality;
    });
  }, [search, selectedCategory, selectedCountry, selectedQuality]);

  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Live TV' }]} />

        {/* Header Hero */}
        <div className="mt-4 mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/15 border border-[#E50914]/20 text-xs text-[#E50914] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#E50914] animate-ping" />
            <span>Over 15,000+ Licensed Live Feeds & EPG</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Live TV Streaming Guide
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl leading-relaxed">
            Search live channels, browse current and upcoming schedules with real-time EPG data, and filter by country, genre, or 4K UHD broadcast quality.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-[#0D131D] rounded-2xl border border-white/10 p-4 sm:p-6 mb-8 space-y-5 shadow-xl">
          {/* Top Search Field */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#94A3B8] absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search channel name, number or current program (e.g. ESPN, Premier League, BBC)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#111925] border border-white/10 text-white placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#E50914] transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2.5">
              Category
            </span>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#E50914] text-white shadow-md shadow-[#E50914]/30'
                      : 'bg-white/5 text-[#94A3B8] hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Dropdown Filters: Country & Quality */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/5">
            <div>
              <label className="block text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-1.5">
                Country / Region
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#111925] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E50914]"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-1.5">
                Stream Quality
              </label>
              <select
                value={selectedQuality}
                onChange={(e) => setSelectedQuality(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#111925] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E50914]"
              >
                <option value="All">All Qualities (4K, FHD, HD)</option>
                <option value="4K">True 4K UHD Only</option>
                <option value="FHD">1080p FHD Only</option>
                <option value="HD">720p HD Only</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#94A3B8]">
          <span>
            Showing <strong className="text-white">{filteredChannels.length}</strong> matching channels
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Real-time EPG active</span>
          </span>
        </div>

        {/* Channels Grid */}
        {filteredChannels.length === 0 ? (
          <div className="py-20 text-center rounded-2xl bg-[#0D131D] border border-white/5">
            <Tv className="w-12 h-12 text-[#94A3B8] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No channels found</h3>
            <p className="text-xs text-[#94A3B8] mt-1 max-w-sm mx-auto">
              We couldn&apos;t find any channels matching your current search or filter combination.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setSelectedCategory('All');
                setSelectedCountry('All');
                setSelectedQuality('All');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#E50914] text-white text-xs font-semibold hover:bg-[#F40D17] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredChannels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
