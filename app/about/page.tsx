import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Server, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'About TVYouTube.pro | Premium IPTV & Digital Media Services',
  description:
    'Learn about TVYouTube.pro: our mission, high-bandwidth content distribution infrastructure, content licensing commitment, and customer-first support philosophy.',
  canonical: '/about',
});

export default function AboutPage() {
  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs text-white/90">
            <Globe2 className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>Digital Media Services Since 2021</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About {SITE_CONFIG.name}
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            We deliver reliable, user-friendly live television and streaming entertainment to homes across the globe. Our focus is straightforward: exceptional picture quality, stable connections, and transparent subscriptions.
          </p>
        </div>

        {/* Mission & Values */}
        <section className="p-8 rounded-2xl bg-[#0D131D] border border-white/10 space-y-4">
          <h2 className="text-2xl font-bold text-white">Who We Are</h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            {SITE_CONFIG.legalName} is an independent digital media distribution provider founded to solve the fragmentation and inflated costs of traditional cable and satellite television packages.
          </p>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Instead of locking customers into multi-year contracts with proprietary equipment rental fees, we deliver open, standard-compliant M3U and Xtream Codes streaming streams directly to the Smart TVs, streaming sticks, and mobile platforms users already own.
          </p>
        </section>

        {/* Infrastructure & Anti-Freeze Commitment */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black text-white tracking-tight">
            Our Infrastructure & Technology
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#111925] border border-white/5 space-y-2.5">
              <Server className="w-8 h-8 text-[#E50914]" />
              <h3 className="text-lg font-bold text-white">Dedicated 10Gbps Edge Nodes</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                We distribute traffic across geo-distributed server locations in North America and Western Europe, guaranteeing low-latency zapping and redundant failover during peak global sporting events.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111925] border border-white/5 space-y-2.5">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Hardware Acceleration Ready</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Streams are encoded using adaptive H.264 and modern HEVC formats, allowing client players like IBO Player and TiviMate to leverage TV GPU decoders for stutter-free 60fps playback.
              </p>
            </div>
          </div>
        </section>

        {/* Content Licensing & Responsibility */}
        <section className="p-8 rounded-2xl bg-[#0D131D] border border-white/10 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#FFB800]" />
            <span>Content Licensing & Responsible Distribution</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            TVYouTube.pro is committed to operating transparently and responsibly. We only deliver content feeds and digital media streams for which appropriate distribution agreements or broadcast retransmission rights exist within respective operational zones.
          </p>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            We actively coordinate with copyright holders and content licensing administrators. Any rights inquiries or notice requests can be submitted directly to our compliance desk at{' '}
            <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-white hover:underline">
              {SITE_CONFIG.contactEmail}
            </a>
            .
          </p>
        </section>

        {/* TMDB Notice */}
        <section className="p-6 rounded-2xl bg-[#111925] border border-white/5 space-y-2 text-xs text-[#94A3B8]">
          <h4 className="font-bold text-white">The Movie Database (TMDB) Attribution</h4>
          <p className="leading-relaxed">
            {SITE_CONFIG.tmdbAttribution}
          </p>
        </section>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white text-sm font-bold shadow-xl shadow-[#E50914]/30 transition-transform hover:scale-105"
          >
            <span>Explore Subscription Plans</span>
            <Sparkles className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
