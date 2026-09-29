'use client';

import React, { useState } from 'react';
import { Heart, Tv, Radio, Play } from 'lucide-react';
import { LiveChannel } from '@/lib/types';

export default function ChannelCard({ channel }: { channel: LiveChannel }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group relative flex flex-col rounded-xl bg-[#111925] border border-white/5 hover:border-white/20 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 hover:-translate-y-0.5">
      {/* Top Bar: Category, Quality Badge & Favorite */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-[11px] font-medium text-[#94A3B8] px-2 py-0.5 rounded bg-white/5 border border-white/5">
          {channel.category}
        </span>

        <div className="flex items-center gap-1.5">
          <span
            className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
              channel.quality === '4K'
                ? 'bg-[#FFB800] text-black font-extrabold'
                : 'bg-white/10 text-white'
            }`}
          >
            {channel.quality}
          </span>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label={isFavorite ? 'Remove channel from favorites' : 'Favorite channel'}
            className="p-1 rounded-md text-[#94A3B8] hover:text-[#E50914] transition-colors"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isFavorite ? 'fill-[#E50914] text-[#E50914]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Center: Channel Logo & Channel Name */}
      <div className="flex items-center gap-3.5 mb-3.5">
        <div className="w-12 h-12 rounded-xl bg-[#0D131D] border border-white/10 flex items-center justify-center p-1.5 relative overflow-hidden flex-shrink-0 group-hover:border-[#E50914]/40 transition-colors">
          <img
            src={channel.logo}
            alt={channel.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-mono font-bold text-[#E50914]">CH {channel.number}</span>
            <span className="text-xs text-[#94A3B8]">({channel.countryCode})</span>
          </div>
          <h4 className="text-sm font-bold text-white group-hover:text-[#E50914] transition-colors truncate">
            {channel.name}
          </h4>
        </div>
      </div>

      {/* EPG Program Schedule */}
      <div className="mt-auto pt-3 border-t border-white/5 space-y-1.5">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-[#94A3B8] flex items-center gap-1">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span className="truncate max-w-[170px] text-white font-medium">{channel.epgNow.title}</span>
          </span>
          <span className="text-[#94A3B8] text-[10px]">{channel.epgNow.time}</span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#E50914] rounded-full"
            style={{ width: `${channel.epgNow.progress}%` }}
          />
        </div>

        <p className="text-[10px] text-[#94A3B8] truncate pt-0.5">
          <span className="text-white/60">Next:</span> {channel.epgNext.title} ({channel.epgNext.time})
        </p>
      </div>
    </div>
  );
}
