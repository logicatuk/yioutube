'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  Play,
  CheckCircle2,
  Tv,
  Film,
  PlaySquare,
  ShieldCheck,
  Zap,
  ArrowRight,
  Headphones,
  Smartphone,
  Laptop,
  MonitorPlay,
  HardDrive,
  Apple,
  HelpCircle,
  Star,
  ChevronRight,
  Flame,
} from 'lucide-react';
import HeroSearch from '@/components/HeroSearch';
import MovieCard from '@/components/MovieCard';
import SeriesCard from '@/components/SeriesCard';
import ChannelCard from '@/components/ChannelCard';
import ContentRow from '@/components/ContentRow';
import PricingCard from '@/components/PricingCard';
import CheckoutModal from '@/components/CheckoutModal';
import { SITE_CONFIG, PRICING_PLANS, TESTIMONIALS } from '@/lib/config';
import { CURATED_MOVIES, CURATED_SERIES } from '@/lib/catalog-data';
import { LIVE_CHANNELS } from '@/lib/channels';
import { FAQ_ITEMS } from '@/lib/faq';
import { INSTALLATION_GUIDES } from '@/lib/guides';
import { PricingPlan } from '@/lib/types';

export default function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [activeChannelCategory, setActiveChannelCategory] = useState<string>('Sports');

  const filteredChannels = LIVE_CHANNELS.filter(
    (ch) => ch.category.toLowerCase() === activeChannelCategory.toLowerCase()
  );

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION & HERO SEARCH */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center pt-8 sm:pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Cinematic Backdrop Image with Dark Gradients */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://image.tmdb.org/t/p/w1280/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg"
            alt="Cinematic Streaming Showcase"
            fill
            priority
            className="object-cover object-center opacity-25 filter blur-[1px]"
            referrerPolicy="no-referrer"
          />
          {/* Radial & linear overlays for seamless dark blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-[#070B12]/80 to-[#070B12]/40" />
          <div className="absolute inset-0 radial-glow" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Live Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs text-white/90">
            <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
            <span className="font-semibold">Next-Gen Streaming</span>
            <span className="text-[#94A3B8]">•</span>
            <span className="text-[#FFB800] font-medium">True 4K UHD & Anti-Freeze</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Premium Live TV & Streaming, <span className="text-[#E50914]">Made Simple</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Enjoy live TV, movies and series on your compatible devices with flexible subscription plans and easy setup.
          </p>

          {/* Hero Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white font-bold text-base transition-all shadow-xl shadow-[#E50914]/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-white/90" />
              <span>View Pricing</span>
            </Link>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base transition-all border border-white/15 hover:border-white/30 flex items-center justify-center gap-2"
            >
              <span>How It Works</span>
              <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
            </a>
          </div>

          {/* Trust Checklist below CTA */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 text-xs sm:text-sm text-white/90 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Easy setup
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Multi-device support
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Fast activation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 24/7 customer support
            </span>
          </div>

          {/* Hero Prominent Search Component */}
          <div className="pt-4 sm:pt-6 w-full">
            <HeroSearch />
          </div>
        </div>
      </section>

      {/* 2. TRUST / FEATURES SECTION (WHY CUSTOMERS CHOOSE US) */}
      <section className="py-12 bg-[#0D131D]/60 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONFIG.guarantees.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#111925]/80 border border-white/5 hover:border-white/15 transition-all space-y-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E50914]/10 text-[#E50914] flex items-center justify-center">
                  {idx === 0 && <Zap className="w-5 h-5" />}
                  {idx === 1 && <Smartphone className="w-5 h-5" />}
                  {idx === 2 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 3 && <Headphones className="w-5 h-5" />}
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LIVE TV PREVIEW SECTION */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E50914] mb-1">
                <Flame className="w-4 h-4" /> Live Broadcasting
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Live TV Channels with Real-Time EPG
              </h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 max-w-xl">
                Stream international sports, breaking news, movie channels, and documentaries in 4K UHD and 1080p FHD with zero stuttering.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Category tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 overflow-x-auto no-scrollbar">
                {['Sports', 'News', 'Movies', 'Documentary'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveChannelCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      activeChannelCategory === cat
                        ? 'bg-[#E50914] text-white shadow'
                        : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <Link
                href="/live-tv"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-white/90 hover:text-white px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span>Full Guide</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Grid of channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredChannels.slice(0, 4).map((channel) => (
              <ChannelCard key={channel.id} channel={channel} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/live-tv"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E50914]"
            >
              <span>Explore all channels in Live TV guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. TRENDING MOVIES SECTION */}
      <ContentRow
        title="Trending Movies"
        subtitle="Blockbuster releases, award-winning dramas, and 4K HDR cinema ready to stream"
        viewAllLink="/movies"
      >
        {CURATED_MOVIES.map((movie) => (
          <div key={movie.id} className="w-[160px] sm:w-[200px] md:w-[220px] flex-shrink-0 snap-start">
            <MovieCard movie={movie} />
          </div>
        ))}
      </ContentRow>

      {/* 5. POPULAR SERIES SECTION */}
      <ContentRow
        title="Popular TV Series"
        subtitle="Binge full seasons with complete episode guides and Dolby audio"
        viewAllLink="/series"
      >
        {CURATED_SERIES.map((series) => (
          <div key={series.id} className="w-[160px] sm:w-[200px] md:w-[220px] flex-shrink-0 snap-start">
            <SeriesCard series={series} />
          </div>
        ))}
      </ContentRow>

      {/* 6. HOW IT WORKS (3 SIMPLE STEPS) */}
      <section id="how-it-works" className="py-16 sm:py-20 bg-[#0D131D]/80 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFB800]">
              Fast Activation
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-1">
              How It Works
            </h2>
            <p className="text-sm text-[#94A3B8] mt-2">
              From plan selection to watching your favorite channel in 3 simple steps. Works with supported compatible devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#111925] border border-white/10 hover:border-[#E50914]/40 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E50914] text-white flex items-center justify-center font-black text-lg shadow-lg shadow-[#E50914]/30">
                1
              </div>
              <h3 className="text-lg font-bold text-white">Choose Your Plan</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Select a flexible subscription (1, 3, 6, or 12 months) that matches your household devices and streaming needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#111925] border border-white/10 hover:border-[#E50914]/40 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFB800] text-black flex items-center justify-center font-black text-lg shadow-lg shadow-[#FFB800]/30">
                2
              </div>
              <h3 className="text-lg font-bold text-white">Complete Checkout</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Provide your email address and preferred device type for encrypted, secure automated processing.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#111925] border border-white/10 hover:border-[#E50914]/40 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-emerald-500/30">
                3
              </div>
              <h3 className="text-lg font-bold text-white">Receive Activation Details</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Receive your Xtream Codes credentials and M3U link in your inbox within 5–15 minutes, with our 1-click player setup guide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SUPPORTED DEVICES SHOWCASE */}
      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Stream on Any Device You Own
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1.5">
              Zero proprietary hardware needed. Download supported apps directly from official app stores.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {SITE_CONFIG.supportedDevices.map((dev, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#111925] border border-white/5 hover:border-white/20 text-center flex flex-col items-center justify-center space-y-2 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#FFB800]">
                  {idx === 0 && <Tv className="w-6 h-6" />}
                  {idx === 1 && <Smartphone className="w-6 h-6" />}
                  {idx === 2 && <Apple className="w-6 h-6" />}
                  {idx === 3 && <MonitorPlay className="w-6 h-6" />}
                  {idx === 4 && <Laptop className="w-6 h-6" />}
                  {idx === 5 && <HardDrive className="w-6 h-6" />}
                </div>
                <h4 className="text-xs font-bold text-white">{dev.name}</h4>
                <span className="text-[10px] text-[#94A3B8]">{dev.popularity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PRICING PREVIEW */}
      <section id="pricing" className="py-16 sm:py-20 bg-[#070B12] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E50914]">
              Clear & Transparent
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-1">
              Choose Your Streaming Plan
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-2">
              All plans include full Live TV channels, 4K movies & series library, anti-freeze technology, and fast setup instructions.
            </p>

            {/* Currency Selector */}
            <div className="mt-6 inline-flex items-center p-1 rounded-xl bg-[#111925] border border-white/10 text-xs">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  currency === 'USD' ? 'bg-[#E50914] text-white shadow' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency('EUR')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  currency === 'EUR' ? 'bg-[#E50914] text-white shadow' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                EUR (€)
              </button>
              <button
                onClick={() => setCurrency('GBP')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  currency === 'GBP' ? 'bg-[#E50914] text-white shadow' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                GBP (£)
              </button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_PLANS.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                currency={currency}
                onSelectPlan={(p) => setSelectedPlan(p)}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/pricing"
              className="text-xs sm:text-sm font-semibold text-[#FFB800] hover:underline"
            >
              Compare full plan features in detail &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 9. INSTALLATION GUIDES PREVIEW */}
      <section className="py-14 sm:py-18 bg-[#0D131D]/60 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFB800]">
                Easy Tutorials
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
                Official Installation Guides
              </h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                Follow our step-by-step walkthroughs to configure your favorite IPTV player in under 10 minutes.
              </p>
            </div>
            <Link
              href="/installation-guides"
              className="text-xs sm:text-sm font-semibold text-[#E50914] hover:underline flex items-center gap-1"
            >
              <span>All Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTALLATION_GUIDES.slice(0, 3).map((guide) => (
              <Link
                key={guide.slug}
                href={`/installation-guides/${guide.slug}`}
                className="group p-6 rounded-2xl bg-[#111925] border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 space-y-3"
              >
                <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                  <span className="px-2 py-0.5 rounded bg-white/5 text-white font-medium">
                    {guide.category}
                  </span>
                  <span>{guide.durationMinutes} min read</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#E50914] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-xs text-[#94A3B8] line-clamp-2 leading-relaxed">
                  {guide.description}
                </p>
                <div className="pt-2 text-xs font-semibold text-[#FFB800] flex items-center gap-1">
                  <span>Read Tutorial</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. REAL CUSTOMER TESTIMONIALS */}
      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Trusted by Sports & Entertainment Enthusiasts
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1.5">
              Verified feedback from subscribers streaming globally across Smart TVs and Fire TV sticks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#111925] border border-white/5 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#FFB800]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFB800]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed italic">
                    &quot;{t.comment}&quot;
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#94A3B8]">
                  <span className="font-bold text-white">{t.name}</span>
                  <span>{t.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ QUICK PREVIEW */}
      <section className="py-14 sm:py-18 bg-[#0D131D]/80 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
              Have questions before signing up? Check out our quick answers below.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.slice(0, 5).map((faq) => (
              <details
                key={faq.id}
                className="group p-4 sm:p-5 rounded-xl bg-[#111925] border border-white/5 hover:border-white/15 transition-all text-xs sm:text-sm"
              >
                <summary className="font-bold text-white cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-[#94A3B8] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-[#94A3B8] mt-3 leading-relaxed pt-2 border-t border-white/5">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/faq" className="text-xs font-semibold text-[#E50914] hover:underline">
              View all frequently asked questions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 12. FINAL HIGH-CONVERTING CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0D131D] to-[#070B12] text-center px-4 relative overflow-hidden border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-[#E50914]/20 text-[#E50914] flex items-center justify-center mx-auto shadow-lg shadow-[#E50914]/30">
            <Sparkles className="w-7 h-7" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Ready to Upgrade Your Streaming?
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            Choose your plan, get instant credentials delivered in minutes, and start streaming live sports and cinema in 4K UHD.
          </p>
          <div className="pt-2">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white font-bold text-base transition-all shadow-xl shadow-[#E50914]/40 hover:scale-[1.02]"
            >
              <span>Explore Subscription Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Checkout Modal */}
      {selectedPlan && (
        <CheckoutModal
          plan={selectedPlan}
          currency={currency}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </div>
  );
}
