import React from 'react';
import { motion } from 'motion/react';

const easeCurve = [0.22, 1, 0.36, 1];

export const StorySection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 pt-20 sm:pt-28 lg:pt-36 pb-20 sm:pb-28 lg:pb-36"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: easeCurve }}
        className="border-t border-[#1A1918]/15 pt-8 sm:pt-10 mb-12 sm:mb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
          <div className="lg:col-span-3">
            <span className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase font-sans font-medium text-[#1A1918]/60">
              03 / Little Lonsdale
            </span>
          </div>
          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] text-[#1A1918] tracking-[-0.015em] leading-[1.1]">
              A small place for good coffee.
            </h2>
          </div>
        </div>
      </motion.div>

      {/* Editorial Atmosphere Layout: 70% width image + offset text block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
        {/* Dominant Place Photograph */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: easeCurve }}
          className="lg:col-span-8"
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#EAE6DE]">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2200&q=88"
              alt="Overlay Coffee counter atmosphere and barista preparing coffee on Little Lonsdale St Melbourne"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover select-none transition-transform duration-700 ease-out hover:scale-[1.018]"
            />
          </div>
        </motion.div>

        {/* Text Block Aligned at Unexpected but Balanced Position */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: easeCurve }}
          className="lg:col-span-4 flex flex-col justify-between space-y-8"
        >
          <div className="space-y-4">
            <p className="text-[15px] sm:text-[16px] font-sans text-[#1A1918]/85 font-light leading-relaxed">
              Overlay Coffee sits on Little Lonsdale Street, serving coffee, matcha and signature cream drinks from morning through the afternoon.
            </p>
            <p className="text-[13px] font-sans text-[#1A1918]/60 font-light leading-relaxed">
              Designed around a single communal standing ledge and low timber seating, offering a quiet pause in Melbourne’s central city grid.
            </p>
          </div>

          {/* Restrained Brand Stamp Detail */}
          <div className="pt-6 border-t border-[#1A1918]/12">
            <div className="space-y-1">
              <span className="text-[10px] tracking-[0.24em] uppercase font-sans font-medium text-[#1A1918]/50 block">
                MELBOURNE / 3000
              </span>
              <p className="font-serif text-lg text-[#1A1918] tracking-tight">
                320 Little Lonsdale Street
              </p>
              <p className="text-[11px] tracking-[0.14em] font-sans text-[#1A1918]/60 uppercase">
                37°48&apos;43&quot;S · 144°57&apos;40&quot;E
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
