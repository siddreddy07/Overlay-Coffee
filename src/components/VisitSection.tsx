import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const easeCurve = [0.22, 1, 0.36, 1] as const;

export const VisitSection: React.FC = () => {
  return (
    <section
      id="visit"
      className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: easeCurve }}
        className="border-t border-[#1A1918]/15 pt-4 sm:pt-6 mb-6 sm:mb-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
          <div className="lg:col-span-3">
            <span className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase font-sans font-medium text-[#1A1918]/60">
              05 / Visit
            </span>
          </div>
          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] text-[#1A1918] tracking-[-0.015em] leading-[1.1]">
              Come by.
            </h2>
          </div>
        </div>
      </motion.div>

      {/* Two-Part Editorial Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left: Storefront / Exterior Window Image (Col 1-7) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: easeCurve }}
          className="lg:col-span-7"
        >
          <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#EAE6DE]">
            <img
              src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=2200&q=88"
              alt="Overlay Coffee exterior and sunlit entrance on Little Lonsdale Street Melbourne"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover select-none transition-transform duration-700 ease-out hover:scale-[1.018]"
            />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
              <span className="inline-block px-3 py-1.5 text-[10px] tracking-[0.22em] uppercase font-sans font-medium text-white/90 bg-black/40 backdrop-blur-[2px]">
                Little Lonsdale Street Entrance
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right: Location, Hours, Editorial Actions (Col 8-12) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: easeCurve }}
          className="lg:col-span-5 flex flex-col justify-between space-y-10 lg:pl-2"
        >
          {/* Address Block */}
          <div className="space-y-3">
            <span className="text-[11px] tracking-[0.22em] uppercase font-sans font-medium text-[#1A1918]/50 block">
              Location
            </span>
            <p className="font-serif text-2xl sm:text-3xl text-[#1A1918] tracking-tight">
              320 Little Lonsdale Street
            </p>
            <p className="text-[14px] sm:text-[15px] font-sans text-[#1A1918]/70 font-light leading-relaxed">
              Melbourne, VIC 3000
            </p>
            <p className="text-[12px] font-sans text-[#1A1918]/50 pt-1">
              Between Elizabeth and Queen Streets, opposite the central precinct.
            </p>
          </div>

          {/* Opening Hours */}
          <div className="space-y-3 border-t border-[#1A1918]/12 pt-6">
            <span className="text-[11px] tracking-[0.22em] uppercase font-sans font-medium text-[#1A1918]/50 block">
              Opening Hours
            </span>
            <div className="space-y-2 text-[14px] sm:text-[15px] font-sans text-[#1A1918]/85">
              <div className="flex justify-between items-baseline max-w-xs">
                <span>Monday – Friday</span>
                <span className="font-medium tabular-nums">7:30 — 16:00</span>
              </div>
              <div className="flex justify-between items-baseline max-w-xs">
                <span>Saturday – Sunday</span>
                <span className="font-medium tabular-nums">8:00 — 16:00</span>
              </div>
            </div>
            <p className="text-[12px] font-sans text-[#1A1918]/50 pt-1">
              Kitchen and signature cream bar close at 15:45 daily.
            </p>
          </div>

          {/* Editorial CTAs */}
          <div className="border-t border-[#1A1918]/12 pt-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
              <a
                href="https://maps.google.com/?q=320+Little+Lonsdale+St+Melbourne+VIC+3000"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-1.5 text-[13px] tracking-[0.16em] uppercase font-sans font-medium text-[#1A1918] hover:text-[#1A1918]/70 border-b border-[#1A1918] hover:border-[#1A1918]/40 pb-1 transition-all group w-fit focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1918]"
              >
                <span>Get Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-1.5 text-[13px] tracking-[0.16em] uppercase font-sans font-medium text-[#1A1918] hover:text-[#1A1918]/70 border-b border-[#1A1918] hover:border-[#1A1918]/40 pb-1 transition-all group w-fit focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1918]"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="pt-4 text-[11px] tracking-[0.2em] uppercase font-sans text-[#1A1918]/40">
              Walk-ins only · Counter ordering
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

