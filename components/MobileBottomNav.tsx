'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Tv, Film, PlaySquare, DollarSign } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const items = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Live TV', href: '/live-tv', icon: Tv },
    { label: 'Movies', href: '/movies', icon: Film },
    { label: 'Series', href: '/series', icon: PlaySquare },
    { label: 'Pricing', href: '/pricing', icon: DollarSign },
  ];

  return (
    <nav
      aria-label="Mobile Navigation Bar"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#070B12]/95 backdrop-blur-xl border-t border-white/10 px-2 py-1.5 shadow-[0_-8px_25px_rgba(0,0,0,0.7)]"
    >
      <div className="grid grid-cols-5 items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
                isActive ? 'text-[#E50914]' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <div
                className={`p-1 rounded-lg transition-transform ${
                  isActive ? 'scale-110 bg-[#E50914]/15' : ''
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span
                className={`text-[10px] mt-0.5 font-medium transition-colors ${
                  isActive ? 'text-[#E50914] font-bold' : 'text-[#94A3B8]'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
