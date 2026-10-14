"use client";

import React, { useState, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { DisciplinesSection } from "@/components/sections/DisciplinesSection";
import { FeaturedStorySection } from "@/components/sections/FeaturedStorySection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { CollectionSection } from "@/components/sections/CollectionSection";
import { ContinuitySection } from "@/components/sections/ContinuitySection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { ArtifactModal } from "@/components/ui/ArtifactModal";
import { SubmissionModal } from "@/components/ui/SubmissionModal";
import type { Artifact } from "@/data/artifacts";

export default function HomePage() {
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [isArtifactModalOpen, setIsArtifactModalOpen] = useState(false);
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);

  // Shared Filter States for Collection Section
  const [activeDisciplineFilter, setActiveDisciplineFilter] = useState("all");
  const [activeEraFilter, setActiveEraFilter] = useState("all");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSelectArtifact = (artifact: Artifact) => {
    setSelectedArtifact(artifact);
    setIsArtifactModalOpen(true);
  };

  const handleFocusSearch = () => {
    const el = document.getElementById("collection");
    el?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 450);
  };

  const handleSelectDisciplineFilter = (disciplineSlug: string) => {
    setActiveDisciplineFilter(disciplineSlug);
  };

  const handleSelectEraFilter = (eraSlug: string) => {
    setActiveEraFilter(eraSlug);
  };

  return (
    <div className="relative min-h-screen bg-archival-900 text-archival-100 flex flex-col selection:bg-terracotta selection:text-white">
      {/* Background Archival Paper Grain */}
      <div className="fixed inset-0 archival-grain pointer-events-none opacity-30 z-0" aria-hidden="true" />

      {/* Persistent Global Header & Controls */}
      <Navbar
        onOpenSubmission={() => setIsSubmissionModalOpen(true)}
        onFocusSearch={handleFocusSearch}
      />

      {/* Main Exhibition Narrative Flow */}
      <main id="main-content" className="relative z-10 flex-grow" role="main">
        {/* Section 01: Monumental Opening Statement */}
        <HeroSection />

        {/* Section 02: Editorial Manifesto */}
        <ManifestoSection />

        {/* Section 03: Four Disciplines Interactive Matrix */}
        <DisciplinesSection
          onSelectDisciplineFilter={handleSelectDisciplineFilter}
        />

        {/* Section 04: Featured Deep Cultural Story (J.D. Ojeikere) */}
        <FeaturedStorySection />

        {/* Section 05: Through the Years (Chronological Timeline) */}
        <TimelineSection
          onSelectEraFilter={handleSelectEraFilter}
        />

        {/* Section 06: The Living Collection (Faceted Archival Grid) */}
        <CollectionSection
          onSelectArtifact={handleSelectArtifact}
          activeDisciplineFilter={activeDisciplineFilter}
          setActiveDisciplineFilter={setActiveDisciplineFilter}
          activeEraFilter={activeEraFilter}
          setActiveEraFilter={setActiveEraFilter}
          searchInputRef={searchInputRef}
        />

        {/* Section 07: The Continuing Story (Heritage to Modernity) */}
        <ContinuitySection />

        {/* Section 08: Closing Invitation & Archival Submissions */}
        <ClosingSection
          onOpenSubmission={() => setIsSubmissionModalOpen(true)}
        />
      </main>

      {/* Section 09: Institutional Footer & Governance */}
      <Footer />

      {/* Global Lightbox / Curatorial Inspection Drawer */}
      <ArtifactModal
        artifact={selectedArtifact}
        isOpen={isArtifactModalOpen}
        onClose={() => setIsArtifactModalOpen(false)}
      />

      {/* Community Archival Submission Modal Dialog */}
      <SubmissionModal
        isOpen={isSubmissionModalOpen}
        onClose={() => setIsSubmissionModalOpen(false)}
      />
    </div>
  );
}
