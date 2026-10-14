"use client";

import React, { useState, useEffect } from "react";
import { AudioController } from "@/components/ui/AudioController";
import { Menu, X, Landmark, Search } from "lucide-react";

interface NavbarProps {
  onOpenSubmission: () => void;
  onFocusSearch: () => void;
}

export function Navbar({ onOpenSubmission, onFocusSearch }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Manifesto", href: "#manifesto", index: "02" },
    { label: "Disciplines", href: "#disciplines", index: "03" },
    { label: "Featured Story", href: "#featured-story", index: "04" },
    { label: "Timeline", href: "#timeline", index: "05" },
    { label: "Collection", href: "#collection", index: "06" },
    { label: "Lineage", href: "#continuity", index: "07" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-archival-950/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-transparent py-5 border-b border-white/5"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Mark & Institutional Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="ARCHIVE Nigeria Home"
        >
          <div className="w-8 h-8 rounded-xs bg-terracotta flex items-center justify-center text-white font-mono font-bold text-sm shadow-md group-hover:bg-terracotta-light transition-colors">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base tracking-wider text-white leading-none">
              ARCHIVE
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-archival-400 leading-tight">
              Nigeria • Est. 1960
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-baseline gap-1.5 py-1 text-xs font-mono uppercase tracking-widest text-archival-300 hover:text-white transition-colors"
            >
              <span className="text-[10px] text-terracotta/80 font-bold group-hover:text-terracotta">
                {link.index}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Action Rail: Audio, Quick Search & Contribution */}
        <div className="flex items-center gap-3">
          {/* Quick Search Shortcut */}
          <button
            onClick={onFocusSearch}
            type="button"
            aria-label="Jump to collection search"
            className="flex items-center gap-2 h-9 px-3 rounded-full border border-white/15 bg-white/5 text-archival-300 hover:text-white hover:border-white/30 transition-all text-xs font-mono"
            title="Search the 510+ item collection"
          >
            <Search className="w-3.5 h-3.5 text-terracotta" />
            <span className="hidden sm:inline text-[11px] uppercase tracking-wider">Search Vault</span>
          </button>

          {/* Web Audio API Synthesized Soundscape Controller */}
          <AudioController />

          {/* Archival Submission CTA */}
          <button
            onClick={onOpenSubmission}
            type="button"
            className="hidden sm:flex items-center gap-1.5 h-9 px-4 bg-terracotta hover:bg-terracotta-light text-white font-mono text-[11px] font-semibold uppercase tracking-wider rounded-full transition-colors shadow-sm"
          >
            <Landmark className="w-3.5 h-3.5" />
            <span>Contribute</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 rounded-full border border-white/15 bg-white/5 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-archival-950/98 backdrop-blur-xl z-30 p-6 flex flex-col justify-between border-t border-white/10 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-4 pt-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 border-b border-white/10 text-archival-100 hover:text-terracotta font-display text-xl font-bold tracking-wide"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-terracotta">{link.index}</span>
              </a>
            ))}
          </nav>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubmission();
              }}
              type="button"
              className="w-full py-3 bg-terracotta text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2"
            >
              <Landmark className="w-4 h-4" />
              <span>Submit Archival Artifact</span>
            </button>
            <p className="font-mono text-[10px] text-center text-archival-500 uppercase tracking-widest">
              Lagos Time: WAT (UTC+1) • 510+ Verified Items
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
