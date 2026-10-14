"use client";

import React, { useState, useRef, useCallback } from "react";
import type { ContinuityPair } from "@/data/continuities";

export function ComparisonSlider({ pair }: { pair: ContinuityPair }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="space-y-4">
      {/* Discipline Tag & Lineage Header */}
      <div className="flex items-center justify-between font-mono text-xs text-archival-400">
        <span className="uppercase tracking-widest px-2.5 py-0.5 bg-archival-800 border border-white/10 rounded-xs text-terracotta">
          {pair.disciplineLabel}
        </span>
        <span className="text-[11px] text-archival-500">Drag divider to compare eras</span>
      </div>

      {/* Interactive Split Frame */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[400px] md:h-[480px] rounded-sm overflow-hidden border border-white/15 select-none cursor-ew-resize bg-archival-950"
      >
        {/* Right / Contemporary Background Layer */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pair.contemporaryImage}
          alt={pair.contemporaryTitle}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 z-10 bg-black/75 backdrop-blur-sm px-3 py-1.5 rounded-xs border border-white/20 text-right">
          <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 block font-bold">
            Contemporary Living Practice
          </span>
          <span className="font-display text-sm font-bold text-white block">
            {pair.contemporaryCreator}
          </span>
          <span className="font-mono text-[10px] text-archival-300 block">
            {pair.contemporaryYear}
          </span>
        </div>

        {/* Left / Historic Foreground Layer with Clip-path */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pair.historicImage}
            alt={pair.historicTitle}
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
          />
          <div className="absolute top-4 left-4 z-10 bg-black/75 backdrop-blur-sm px-3 py-1.5 rounded-xs border border-white/20 text-left">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta block font-bold">
              Archival Precursor
            </span>
            <span className="font-display text-sm font-bold text-white block">
              {pair.historicCreator}
            </span>
            <span className="font-mono text-[10px] text-archival-300 block">
              {pair.historicYear}
            </span>
          </div>
        </div>

        {/* Vertical Divider Line with Grab Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white z-20 shadow-[0_0_12px_rgba(0,0,0,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-archival-900 shadow-xl flex items-center justify-center font-mono text-[10px] font-bold border border-archival-900/20">
            ⇄
          </div>
        </div>
      </div>

      {/* Accessible Slider Input for Keyboard & Screen Reader Users */}
      <div className="flex items-center gap-3">
        <label htmlFor={`slider-${pair.id}`} className="sr-only">
          Compare {pair.historicCreator} and {pair.contemporaryCreator}
        </label>
        <input
          id={`slider-${pair.id}`}
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="w-full h-1.5 bg-archival-700 rounded-lg appearance-none cursor-pointer accent-terracotta"
        />
      </div>

      {/* Curatorial Lineage Synthesis */}
      <div className="p-4 bg-archival-850 rounded-sm border border-white/10 space-y-2">
        <div className="flex items-baseline justify-between">
          <h4 className="font-display text-sm font-bold text-white">
            Lineage Continuity Analysis
          </h4>
          <span className="font-mono text-[10px] text-archival-500 uppercase">
            Curatorial Dossier
          </span>
        </div>
        <p className="font-serif text-sm leading-relaxed text-archival-300">
          {pair.lineageAnalysis}
        </p>
      </div>
    </div>
  );
}
