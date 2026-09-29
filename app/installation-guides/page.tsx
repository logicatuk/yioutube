import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Tv, Smartphone, Apple, MonitorPlay, ChevronRight, Clock, ShieldCheck } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { INSTALLATION_GUIDES } from '@/lib/guides';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'IPTV Installation Guides | Step-by-Step Setup Tutorials',
  description:
    'Learn how to set up your IPTV subscription on IBO Player, Amazon Firestick, Smart TVs (Samsung & LG), Android TV, and Apple TV with our simple, official guides.',
  canonical: '/installation-guides',
});

export default function InstallationGuidesIndexPage() {
  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Installation Guides' }]} />

        {/* Page Header */}
        <div className="mt-6 mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E50914]/15 border border-[#E50914]/25 text-xs text-[#E50914] font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Official Device Walkthroughs</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            IPTV Installation & Setup Guides
          </h1>

          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl leading-relaxed">
            Follow our verified, straightforward setup tutorials for your television, streaming dongle, or mobile device. Only legitimate application store methods are documented.
          </p>
        </div>

        {/* IBO Player Featured Guide Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#111925] via-[#0D131D] to-[#111925] border-2 border-[#E50914]/40 mb-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl space-y-3">
            <span className="px-2.5 py-1 rounded text-xs font-black uppercase bg-[#E50914] text-white">
              Recommended Player for Smart TVs
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              How to Install & Configure IBO Player
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Step-by-step walkthrough explaining how to find your unique Device MAC and Device Key, upload your playlist safely via the official web portal, and start streaming live sports and cinema.
            </p>
            <div className="pt-2">
              <Link
                href="/installation-guides/ibo-player"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#E50914]/30 transition-transform hover:scale-105"
              >
                <span>Read Full IBO Player Guide</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* All Device Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {INSTALLATION_GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/installation-guides/${guide.slug}`}
              className="group p-6 rounded-2xl bg-[#0D131D] border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 font-semibold text-white">
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {guide.durationMinutes} mins
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#E50914] transition-colors">
                  {guide.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#94A3B8] line-clamp-2 leading-relaxed">
                  {guide.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#FFB800]">
                <span>{guide.device}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Support Callout */}
        <div className="p-6 rounded-2xl bg-[#111925] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">Need 1-on-1 Assistance?</h4>
            <p className="text-xs text-[#94A3B8] mt-0.5">
              Our 24/7 technical desk is available to walk you through setup via email support.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors flex-shrink-0"
          >
            Contact Help Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
