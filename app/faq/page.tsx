'use client';

import React, { useState, useMemo } from 'react';
import { Search, HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FAQ_ITEMS } from '@/lib/faq';
import { getFaqSchema } from '@/lib/schema';

const CATEGORIES = [
  'All',
  'General',
  'Subscriptions',
  'Devices',
  'Installation',
  'Payments',
  'Troubleshooting',
  'Resellers',
] as const;

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState('');

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchCat = activeCategory === 'All' || item.category === activeCategory;
      const matchSearch =
        item.question.toLowerCase().includes(search.toLowerCase()) ||
        item.answer.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const faqSchema = getFaqSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen py-6 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'FAQ & Help' }]} />

        {/* Headline */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/15 text-[#E50914] text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Help Center & Answers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            Find answers to common questions about subscriptions, device compatibility, playlist activation, and streaming troubleshooting.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-[#94A3B8] absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Search questions (e.g., activation, multiple devices, IBO Player, buffering)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0D131D] border border-white/10 text-white placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#E50914] transition-colors"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#E50914] text-white shadow-md shadow-[#E50914]/25'
                  : 'bg-white/5 text-[#94A3B8] hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordions List */}
        <div className="space-y-3 pt-2">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-[#0D131D] rounded-2xl border border-white/5 space-y-2">
              <p className="text-sm font-bold text-white">No questions matched &quot;{search}&quot;</p>
              <p className="text-xs text-[#94A3B8]">
                Can&apos;t find what you are looking for? Reach out to our 24/7 technical desk.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq) => (
              <details
                key={faq.id}
                className="group p-5 rounded-2xl bg-[#0D131D] border border-white/10 hover:border-white/20 transition-all text-sm"
              >
                <summary className="font-bold text-white cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className="w-4 h-4 text-[#94A3B8] group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="mt-3.5 pt-3 border-t border-white/5 text-[#94A3B8] leading-relaxed text-xs sm:text-sm pl-3.5">
                  {faq.answer}
                </div>
              </details>
            ))
          )}
        </div>

        {/* Contact Desk Box */}
        <div className="p-8 rounded-2xl bg-[#111925] border border-white/5 text-center space-y-3">
          <h3 className="text-lg font-bold text-white">Still have questions?</h3>
          <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto">
            Our support engineers are online 24/7 to help you with activation, playlist setup, or device inquiries.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-2.5 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#E50914]/25 transition-transform hover:scale-105"
          >
            Contact Customer Support
          </a>
        </div>
      </div>
    </div>
  );
}
