import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ServiceBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function ServiceBreadcrumbs({ items }: ServiceBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-2 text-xs font-mono text-[#737887]">
        <li>
          <Link
            href="/"
            className="hover:text-[#0F1012] transition-colors flex items-center gap-1"
          >
            <Home className="w-3.5 h-3.5 text-[#737887]" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-[#D4CDBC]" />
              {isLast ? (
                <span className="font-semibold text-[#0F1012]" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url} className="hover:text-[#0F1012] transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
