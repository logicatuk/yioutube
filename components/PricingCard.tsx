'use client';

import React from 'react';
import { Check, Sparkles, Tv, ShieldCheck } from 'lucide-react';
import { PricingPlan } from '@/lib/types';

interface PricingCardProps {
  plan: PricingPlan;
  currency: 'USD' | 'EUR' | 'GBP';
  onSelectPlan: (plan: PricingPlan) => void;
}

export default function PricingCard({ plan, currency, onSelectPlan }: PricingCardProps) {
  const getFormattedPrice = () => {
    switch (currency) {
      case 'EUR':
        return { symbol: '€', amount: plan.priceEur.toFixed(2) };
      case 'GBP':
        return { symbol: '£', amount: plan.priceGbp.toFixed(2) };
      case 'USD':
      default:
        return { symbol: '$', amount: plan.priceUsd.toFixed(2) };
    }
  };

  const price = getFormattedPrice();

  return (
    <div
      className={`relative flex flex-col rounded-2xl bg-[#0D131D] transition-all duration-300 ${
        plan.isPopular
          ? 'border-2 border-[#E50914] shadow-2xl shadow-[#E50914]/20 lg:-translate-y-2'
          : 'border border-white/10 hover:border-white/20'
      } p-6 sm:p-7`}
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E50914] text-white text-[11px] font-black uppercase tracking-wider py-1 px-4 rounded-full shadow-lg shadow-[#E50914]/50 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Most Popular</span>
        </div>
      )}

      {/* Plan Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-[#FFB800]">
            {plan.badge}
          </span>
        </div>
        <p className="text-xs text-[#94A3B8]">
          Supports {plan.devicesCount} simultaneous {plan.devicesCount === 1 ? 'connection' : 'connections'}
        </p>
      </div>

      {/* Price Block */}
      <div className="mb-6 pb-6 border-b border-white/10">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-[#FFB800]">{price.symbol}</span>
          <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">{price.amount}</span>
        </div>
        <p className="text-xs text-[#94A3B8] mt-1">{plan.billingPeriodLabel}</p>
      </div>

      {/* Features Checklist */}
      <ul className="space-y-3 mb-8 flex-1 text-xs sm:text-sm">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-white/90">
            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <button
        onClick={() => onSelectPlan(plan)}
        className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg ${
          plan.isPopular
            ? 'bg-[#E50914] hover:bg-[#F40D17] text-white shadow-[#E50914]/40 hover:scale-[1.02]'
            : 'bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/30'
        }`}
      >
        <span>{plan.ctaLabel}</span>
      </button>

      <div className="flex items-center justify-center gap-1 text-[11px] text-[#94A3B8] mt-3">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span>Instant line provisioning</span>
      </div>
    </div>
  );
}
