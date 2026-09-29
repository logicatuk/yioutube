import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-[#94A3B8] py-3 overflow-x-auto no-scrollbar">
      <Link href="/" className="hover:text-white transition-colors flex items-center gap-1 flex-shrink-0">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3 h-3 text-[#94A3B8]/60 flex-shrink-0" />
          {item.href ? (
            <Link href={item.href} className="hover:text-white transition-colors truncate max-w-[150px] sm:max-w-none">
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-medium truncate max-w-[180px] sm:max-w-none">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
