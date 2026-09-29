'use client';

import React from 'react';
import { X, Film } from 'lucide-react';

interface TrailerModalProps {
  youtubeKey: string | null;
  title: string;
  onClose: () => void;
}

export default function TrailerModal({ youtubeKey, title, onClose }: TrailerModalProps) {
  if (!youtubeKey) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl bg-[#0D131D] border border-white/15 rounded-2xl shadow-2xl shadow-black overflow-hidden flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#111925] border-b border-white/10">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-[#E50914]" />
            <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-md">
              Official Trailer — {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Trailer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 16:9 Responsive Video Embed */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeKey}?autoplay=1&rel=0&modestbranding=1`}
            title={`Official Trailer for ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Modal Footer Note */}
        <div className="px-5 py-2.5 bg-[#070B12] text-xs text-[#94A3B8] flex items-center justify-between border-t border-white/5">
          <span>Official licensed preview stream</span>
          <span className="text-white/60">Ready in 4K UHD with active plan</span>
        </div>
      </div>
    </div>
  );
}
