"use client";

import React from "react";
import { ArrowDownRight, Compass, ShieldCheck, Sparkles } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Top Status & Institutional Metric Rail */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-white font-semibold uppercase tracking-widest text-[11px]">
            Permanent Digital Exhibition
          </span>
          <span className="hidden sm:inline text-archival-500">•</span>
          <span className="hidden sm:inline text-archival-400">
            510+ Verified Historical References
          </span>
        </div>

        <div className="flex items-center gap-3 text-archival-400 text-[11px] tracking-wider uppercase">
          <span>Lagos / Ibadan / Zaria / Diaspora</span>
          <span className="text-terracotta">•</span>
          <span className="text-white">Est. 1960 — Reclaimed 2026</span>
        </div>
      </div>

      {/* Center Monumental Headline & Core Proposition */}
      <div className="my-auto py-12 md:py-16 space-y-8">
        <div className="space-y-2">
          <span className="inline-block font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-terracotta font-bold">
            01 / Opening Statement
          </span>
          <h1
            id="hero-heading"
            className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-monumental leading-[0.88] uppercase select-none"
          >
            THE PAST <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-archival-100 via-archival-200 to-archival-400">
              IS NOT PAST.
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 items-end">
          <p className="md:col-span-7 font-editorial text-xl sm:text-2xl md:text-3xl text-archival-200 leading-snug">
            An evolving digital museum of Nigerian <span className="text-white font-medium italic underline decoration-terracotta underline-offset-4">photography</span>, <span className="text-white font-medium italic underline decoration-ochre underline-offset-4">music</span>, <span className="text-white font-medium italic underline decoration-blue-400 underline-offset-4">fashion</span>, and <span className="text-white font-medium italic underline decoration-emerald-400 underline-offset-4">design</span>. The stories that shaped us. The creativity that still moves us.
          </p>

          <div className="md:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 justify-end">
            <button
              onClick={() => scrollTo("disciplines")}
              type="button"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-terracotta hover:bg-terracotta-light text-white font-mono text-xs uppercase tracking-widest font-bold rounded-xs shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>ENTER THE ARCHIVE</span>
              <ArrowDownRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo("collection")}
              type="button"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 text-archival-100 border border-white/20 hover:border-white/40 font-mono text-xs uppercase tracking-widest font-bold rounded-xs transition-colors"
            >
              <Compass className="w-4 h-4 text-terracotta" />
              <span>EXPLORE COLLECTION</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Curatorial Sub-ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-6 font-mono text-xs text-archival-400">
        <div>
          <span className="block text-[10px] uppercase text-archival-500">Curatorial Core</span>
          <span className="text-white font-medium">The Living Archive</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase text-archival-500">Verified Artifacts</span>
          <span className="text-white font-medium">510+ In Database</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase text-archival-500">Acoustic Engine</span>
          <span className="text-white font-medium">Analog Web Audio</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase text-archival-500">Accessibility</span>
          <span className="text-emerald-400 font-medium flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> WCAG 2.1 AA
          </span>
        </div>
      </div>
    </section>
  );
}
