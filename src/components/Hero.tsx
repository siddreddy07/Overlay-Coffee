import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { BrandSeal } from './BrandSeal';

interface HeroProps {
  onOpenVisit: () => void;
  onScrollToNext: () => void;
}

const easeCurve = [0.22, 1, 0.36, 1];

export const Hero: React.FC<HeroProps> = ({ onOpenVisit, onScrollToNext }) => {
  return (
    <section
      id="hero-section"
      className="w-full pt-2 sm:pt-4 pb-4 sm:pb-6 px-3 sm:px-6 lg:px-8 max-w-[1720px] mx-auto"
    >
      {/* Immersive Framed Container */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: easeCurve }}
        className="relative w-full h-[66vh] sm:h-[74vh] lg:h-[82vh] max-h-[920px] min-h-[500px] rounded-[3px] overflow-hidden bg-[#E9E5DE] shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
      >
        {/* Dominant Atmospheric Photograph */}
        <motion.img
          initial={{ scale: 1.03 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.95, ease: easeCurve }}
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2600&q=88"
          alt="Overlay Coffee café interior with natural morning light and specialty espresso bar on Little Lonsdale St Melbourne"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          className="w-full h-full object-cover object-[center_42%] sm:object-[center_38%] select-none pointer-events-none"
        />

        {/* Scrim for legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Top-Right: Brand Mark */}
        <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20">
          <BrandSeal />
        </div>

        {/* Hero Content Layered Over Photography */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-14 z-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl text-white">
            {/* 1. Origin Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15, ease: easeCurve }}
              className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase font-sans font-medium text-white/80 mb-2 sm:mb-2.5"
            >
              Melbourne / Little Lonsdale
            </motion.p>

            {/* 2. Title */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: easeCurve }}
              className="font-serif text-[clamp(2.3rem,6vw,3.75rem)] tracking-[-0.015em] text-white font-normal leading-[1.06]"
            >
              Overlay Coffee
            </motion.h1>

            {/* 3. Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: easeCurve }}
              className="mt-2.5 sm:mt-3 text-[14px] sm:text-[16px] text-white/85 font-light tracking-wide leading-relaxed max-w-lg"
            >
              Specialty coffee, matcha &amp; signature cream drinks.
            </motion.p>
          </div>

          {/* 4. Direction & Action Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: easeCurve }}
            className="flex items-center gap-4 sm:gap-6"
          >
            <button
              id="directions-button"
              onClick={onOpenVisit}
              className="min-h-[44px] inline-flex items-center gap-2 text-[12px] sm:text-[13px] tracking-[0.16em] uppercase font-sans font-medium text-white/90 hover:text-white border-b border-white/40 hover:border-white pb-1 transition-all cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span>320 Little Lonsdale St</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

