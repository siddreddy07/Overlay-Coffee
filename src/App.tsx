import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SignatureSection } from './components/SignatureSection';
import { MenuSection } from './components/MenuSection';
import { StorySection } from './components/StorySection';
import { GallerySection } from './components/GallerySection';
import { VisitSection } from './components/VisitSection';
import { Footer } from './components/Footer';
import { VisitDialog } from './components/VisitDialog';
import { MenuDialog } from './components/MenuDialog';

export default function App() {
  const [isVisitOpen, setIsVisitOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSignature = () => {
    const el = document.getElementById('signature-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#1A1918] flex flex-col selection:bg-[#1A1918] selection:text-[#F8F6F2]">
      {/* Hospitality Header */}
      <Header
        onOpenVisit={() => setIsVisitOpen(true)}
        onOpenMenuPreview={handleScrollToMenu}
      />

      {/* Main Experience */}
      <main className="flex-1 flex flex-col justify-start">
        <Hero
          onOpenVisit={() => setIsVisitOpen(true)}
          onScrollToNext={handleScrollToSignature}
        />

        {/* 1. Signature Drinks Section */}
        <SignatureSection />

        {/* 2. Typographic Menu Section */}
        <MenuSection />

        {/* 3. Story / Brand Atmosphere Section */}
        <StorySection />

        {/* 4. Editorial Gallery / Atmosphere Section */}
        <GallerySection />

        {/* 5. Visit / Location Section */}
        <VisitSection />
      </main>

      {/* 6. Hospitality Footer */}
      <Footer />

      {/* Understated Hospitality Dialogs */}
      <VisitDialog
        isOpen={isVisitOpen}
        onClose={() => setIsVisitOpen(false)}
      />
      <MenuDialog
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </div>
  );
}


