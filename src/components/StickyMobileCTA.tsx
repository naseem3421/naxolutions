'use client';

import React from 'react';
import { ArrowRight, ShieldAlert } from 'lucide-react';

interface StickyMobileCTAProps {
  onOpenDiagnostic: () => void;
}

export default function StickyMobileCTA({ onOpenDiagnostic }: StickyMobileCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0F1012]/95 backdrop-blur-md border-t border-[#FAF8F5]/10 px-4 py-3 shadow-2xl">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full bg-[#C84B27] animate-pulse flex-shrink-0" />
          <div className="text-[11px] font-mono text-[#FAF8F5]/90 truncate">
            <span className="font-semibold text-white">Find Revenue Leaks</span>
            <span className="text-[#FAF8F5]/50 ml-1.5 hidden xs:inline">• Zero cost</span>
          </div>
        </div>

        <button
          onClick={onOpenDiagnostic}
          className="bg-[#C84B27] hover:bg-[#b03f1f] text-white text-xs font-semibold px-4 py-2.5 rounded-md flex items-center gap-1.5 shadow-md flex-shrink-0 active:scale-95 transition-all"
        >
          <span>Audit System</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
