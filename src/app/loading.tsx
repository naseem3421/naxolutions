import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Brand Emblem */}
        <div className="relative">
          <div className="w-12 h-12 rounded-lg bg-[#0F1012] text-white flex items-center justify-center font-bold text-lg shadow-md animate-pulse">
            N
          </div>
          <div className="absolute -inset-1 rounded-lg border border-[#C84B27]/40 animate-ping pointer-events-none" />
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#737887] uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C84B27] animate-bounce" />
          <span>Loading Conversion System</span>
        </div>
      </div>
    </div>
  );
}
