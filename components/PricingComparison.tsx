'use client';

import React from 'react';
import { Check, Minus } from 'lucide-react';
import { COMPARISON_FEATURES } from '@/lib/config';

export default function PricingComparison() {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-white/10 bg-[#0D131D] shadow-xl">
      <table className="w-full text-left border-collapse text-xs sm:text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-[#111925]/70">
            <th className="p-4 sm:p-5 font-bold text-white uppercase tracking-wider text-[11px] sm:text-xs">
              Plan Features & Specs
            </th>
            <th className="p-4 sm:p-5 font-bold text-center text-white">1 Month</th>
            <th className="p-4 sm:p-5 font-bold text-center text-white">3 Months</th>
            <th className="p-4 sm:p-5 font-bold text-center text-white">6 Months</th>
            <th className="p-4 sm:p-5 font-bold text-center text-[#FFB800] bg-[#E50914]/10">
              12 Months (VIP)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {COMPARISON_FEATURES.map((item, idx) => (
            <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
              <td className="p-4 sm:p-5 text-white/90 font-medium">
                {item.feature}
              </td>
              <td className="p-4 sm:p-5 text-center text-[#94A3B8]">
                {item.m1 === 'Included' ? (
                  <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                ) : item.m1 === '—' ? (
                  <Minus className="w-4 h-4 text-[#94A3B8]/40 mx-auto" />
                ) : (
                  <span>{item.m1}</span>
                )}
              </td>
              <td className="p-4 sm:p-5 text-center text-[#94A3B8]">
                {item.m3 === 'Included' ? (
                  <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                ) : item.m3 === '—' ? (
                  <Minus className="w-4 h-4 text-[#94A3B8]/40 mx-auto" />
                ) : (
                  <span>{item.m3}</span>
                )}
              </td>
              <td className="p-4 sm:p-5 text-center text-[#94A3B8]">
                {item.m6 === 'Included' ? (
                  <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                ) : item.m6 === '—' ? (
                  <Minus className="w-4 h-4 text-[#94A3B8]/40 mx-auto" />
                ) : (
                  <span>{item.m6}</span>
                )}
              </td>
              <td className="p-4 sm:p-5 text-center font-semibold text-white bg-[#E50914]/5">
                {item.m12 === 'Included' ? (
                  <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                ) : item.m12 === '—' ? (
                  <Minus className="w-4 h-4 text-[#94A3B8]/40 mx-auto" />
                ) : (
                  <span className="text-[#FFB800]">{item.m12}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
