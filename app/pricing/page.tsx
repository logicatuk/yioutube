'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  Zap,
  HelpCircle,
  CheckCircle2,
  Lock,
  CreditCard,
  Tv,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import PricingCard from '@/components/PricingCard';
import PricingComparison from '@/components/PricingComparison';
import CheckoutModal from '@/components/CheckoutModal';
import { PRICING_PLANS, SITE_CONFIG } from '@/lib/config';
import { FAQ_ITEMS } from '@/lib/faq';
import { PricingPlan } from '@/lib/types';

export default function PricingPage() {
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Pricing' }]} />

        {/* Page Headline */}
        <div className="text-center max-w-3xl mx-auto mt-6 mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E50914]/15 border border-[#E50914]/25 text-xs text-[#E50914] font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing • No Hidden Setup Fees</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Choose Your Streaming Plan
          </h1>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            All subscriptions include uncompressed 4K & FHD live TV channels, full video-on-demand library, 7-day catch-up, and anti-freeze server infrastructure.
          </p>

          {/* Currency Toggle */}
          <div className="pt-2 inline-flex items-center p-1 rounded-xl bg-[#111925] border border-white/10 text-xs">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3.5 py-1.5 rounded-lg font-bold transition-all ${
                currency === 'USD' ? 'bg-[#E50914] text-white shadow' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-3.5 py-1.5 rounded-lg font-bold transition-all ${
                currency === 'EUR' ? 'bg-[#E50914] text-white shadow' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              EUR (€)
            </button>
            <button
              onClick={() => setCurrency('GBP')}
              className={`px-3.5 py-1.5 rounded-lg font-bold transition-all ${
                currency === 'GBP' ? 'bg-[#E50914] text-white shadow' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              GBP (£)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              currency={currency}
              onSelectPlan={(p) => setSelectedPlan(p)}
            />
          ))}
        </div>

        {/* Trust & Guarantee Banner */}
        <div className="bg-[#0D131D] rounded-2xl border border-white/10 p-6 sm:p-8 mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Automated Rapid Provisioning</h4>
              <p className="text-xs text-[#94A3B8] mt-1">
                Your unique M3U playlist & Xtream credentials are generated and emailed in 5–15 minutes.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#E50914]/15 text-[#E50914] flex items-center justify-center flex-shrink-0">
              <Tv className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Full Multi-Device Freedom</h4>
              <p className="text-xs text-[#94A3B8] mt-1">
                Switch seamlessly between your living room Firestick, bedroom Smart TV, and phone.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FFB800]/15 text-[#FFB800] flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Encrypted 256-Bit Checkout</h4>
              <p className="text-xs text-[#94A3B8] mt-1">
                Zero stored card data. We support Visa, Mastercard, American Express, and Apple Pay.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Comparison Section */}
        <section className="mb-16 sm:mb-20 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Compare Plan Specifications
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1.5">
              Side-by-side feature breakdown to help you choose the best subscription duration.
            </p>
          </div>

          <PricingComparison />
        </section>

        {/* How It Works (3 Steps) */}
        <section className="mb-16 sm:mb-20 p-8 sm:p-10 rounded-2xl bg-[#0D131D] border border-white/10 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Simple 3-Step Setup Process
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
              Works with supported compatible devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-5 rounded-xl bg-[#111925] border border-white/5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#E50914] text-white font-bold inline-flex items-center justify-center text-sm">
                1
              </span>
              <h4 className="text-sm font-bold text-white">Choose your plan</h4>
              <p className="text-xs text-[#94A3B8]">
                Pick 1, 3, 6, or 12 months based on your desired device count and savings.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#111925] border border-white/5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#FFB800] text-black font-bold inline-flex items-center justify-center text-sm">
                2
              </span>
              <h4 className="text-sm font-bold text-white">Complete checkout</h4>
              <p className="text-xs text-[#94A3B8]">
                Submit your order with email and select your preferred device (Firestick, Smart TV, etc.).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#111925] border border-white/5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold inline-flex items-center justify-center text-sm">
                3
              </span>
              <h4 className="text-sm font-bold text-white">Receive activation instructions</h4>
              <p className="text-xs text-[#94A3B8]">
                Receive your M3U link and Xtream credentials within 5–15 minutes and follow our 1-click guide.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing FAQs */}
        <section className="max-w-4xl mx-auto space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Pricing & Subscription FAQs
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.filter((f) => f.category === 'Subscriptions' || f.category === 'Payments').map((faq) => (
              <details
                key={faq.id}
                className="group p-4 sm:p-5 rounded-xl bg-[#0D131D] border border-white/10 text-xs sm:text-sm"
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
        </section>
      </div>

      {/* Checkout Modal */}
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
