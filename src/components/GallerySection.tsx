import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'g-interior',
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=2200&q=88',
    alt: 'Sunlit interior of Overlay Coffee Melbourne with patrons seated along the timber bench',
    caption: 'Little Lonsdale Morning · 08:30',
  },
  {
    id: 'g-ceramic',
    src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=88',
    alt: 'Specialty coffee served in handcrafted ceramic cup at Overlay Coffee',
    caption: 'Single Origin Batch Brew',
  },
  {
    id: 'g-barista',
    src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1400&q=88',
    alt: 'Barista dosing espresso at the espresso bar',
    caption: 'Extraction & Weighing',
  },
  {
    id: 'g-space',
    src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1400&q=88',
    alt: 'Quiet afternoon light reflecting on timber dining ledge at Overlay',
    caption: 'Standing Ledge & Low Seating',
  },
  {
    id: 'g-matcha',
    src: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=88',
    alt: 'Whisking ceremonial Uji matcha in traditional bowl',
    caption: 'First Harvest Kyoto Whisk',
  },
];

const easeCurve = [0.22, 1, 0.36, 1] as const;

export const GallerySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstChild = container.firstElementChild as HTMLElement | null;
    if (!firstChild) return;
    const itemWidth = firstChild.offsetWidth + 18; // card width + gap
    const index = Math.round(container.scrollLeft / itemWidth);
    setActiveIndex(Math.min(Math.max(index, 0), galleryItems.length - 1));
  };

  return (
    <section
      id="atmosphere"
      className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: easeCurve }}
        className="border-t border-[#1A1918]/15 pt-4 sm:pt-6 mb-4 sm:mb-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-baseline">
          <div className="lg:col-span-3">
            <span className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase font-sans font-medium text-[#1A1918]/60">
              04 / Atmosphere
            </span>
          </div>
          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] text-[#1A1918] tracking-[-0.015em] leading-[1.1]">
              A day at Overlay.
            </h2>
            <p className="mt-2.5 sm:mt-4 text-[13px] sm:text-[15px] font-sans text-[#1A1918]/70 font-light leading-relaxed max-w-xl">
              From morning espresso to quiet mid-afternoon filter pours. A space designed to slow down.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Desktop Composition: Art-directed, intentional negative space & varied rhythm */}
      <div className="hidden md:block space-y-8 lg:space-y-12">
        {/* Row 1: Large dominant wide interior (65%) + Offset small portrait (35%) */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: easeCurve }}
            className="col-span-8"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE6DE]">
              <img
                src={galleryItems[0].src}
                alt={galleryItems[0].alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover select-none transition-transform duration-700 ease-out hover:scale-[1.015]"
              />
            </div>
            <div className="flex justify-between items-baseline mt-3 text-[11px] uppercase tracking-[0.18em] font-sans text-[#1A1918]/50">
              <span>{galleryItems[0].caption}</span>
              <span>01</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.15, ease: easeCurve }}
            className="col-span-4 pl-4 lg:pl-8 mb-6"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-[#EAE6DE] max-w-[340px] ml-auto">
              <img
                src={galleryItems[1].src}
                alt={galleryItems[1].alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover select-none transition-transform duration-700 ease-out hover:scale-[1.018]"
              />
            </div>
            <div className="flex justify-between items-baseline mt-3 text-[11px] uppercase tracking-[0.18em] font-sans text-[#1A1918]/50 max-w-[340px] ml-auto">
              <span>{galleryItems[1].caption}</span>
              <span>02</span>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Text annotation + Square crop + Tall architectural view */}
        <div className="grid grid-cols-12 gap-8 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: easeCurve }}
            className="col-span-3 pt-8"
          >
            <div className="border-l border-[#1A1918]/15 pl-5 space-y-2">
              <span className="text-[10px] tracking-[0.24em] uppercase font-sans font-medium text-[#1A1918]/45 block">
                Melbourne CBD
              </span>
              <p className="font-serif text-xl sm:text-2xl text-[#1A1918] leading-tight">
                Warm timber, brushed steel &amp; daylight.
              </p>
              <p className="text-[12px] font-sans text-[#1A1918]/60 font-light pt-1">
                Refined tactile materials complementing Melbourne’s laneway grid.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: easeCurve }}
            className="col-span-4"
          >
            <div className="relative aspect-square overflow-hidden bg-[#EAE6DE]">
              <img
                src={galleryItems[2].src}
                alt={galleryItems[2].alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover select-none transition-transform duration-700 ease-out hover:scale-[1.018]"
              />
            </div>
            <div className="flex justify-between items-baseline mt-3 text-[11px] uppercase tracking-[0.18em] font-sans text-[#1A1918]/50">
              <span>{galleryItems[2].caption}</span>
              <span>03</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.2, ease: easeCurve }}
            className="col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE6DE]">
              <img
                src={galleryItems[3].src}
                alt={galleryItems[3].alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover select-none transition-transform duration-700 ease-out hover:scale-[1.015]"
              />
            </div>
            <div className="flex justify-between items-baseline mt-3 text-[11px] uppercase tracking-[0.18em] font-sans text-[#1A1918]/50">
              <span>{galleryItems[3].caption}</span>
              <span>04</span>
            </div>
          </motion.div>
        </div>

        {/* Row 3: Single intimate detail centered with intentional generous breathing margins */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: easeCurve }}
          className="grid grid-cols-12 gap-8 items-center pt-4"
        >
          <div className="col-span-12 lg:col-span-7 lg:col-start-4">
            <div className="relative aspect-[16/9] overflow-hidden bg-[#EAE6DE]">
              <img
                src={galleryItems[4].src}
                alt={galleryItems[4].alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover select-none transition-transform duration-700 ease-out hover:scale-[1.015]"
              />
            </div>
            <div className="flex justify-between items-baseline mt-3 text-[11px] uppercase tracking-[0.18em] font-sans text-[#1A1918]/50">
              <span>{galleryItems[4].caption}</span>
              <span>05 / Detail</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Gallery: Horizontal Editorial Scroll Experience */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: easeCurve }}
        className="md:hidden"
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 sm:gap-5 -mx-6 px-6 sm:-mx-10 sm:px-10 scroll-pl-6 sm:scroll-pl-10 pb-2"
          style={{ WebkitOverflowScrolling: 'touch' }}
          aria-label="Atmosphere gallery"
        >
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              className="shrink-0 snap-start w-[84vw] max-w-[420px] flex flex-col"
            >
              <div className="relative aspect-[4/3] max-h-[55vh] overflow-hidden bg-[#EAE6DE] rounded-[1px]">
                <img
                  src={item.src}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover select-none"
                />
              </div>
              <div className="flex justify-between items-baseline mt-2.5 text-[10px] uppercase tracking-[0.2em] font-sans text-[#1A1918]/60">
                <span className="truncate pr-2">{item.caption}</span>
                <span className="tabular-nums shrink-0 text-[#1A1918]/45">0{idx + 1}</span>
              </div>
            </div>
          ))}
          {/* Spacer to allow full scroll padding on the last item */}
          <div className="shrink-0 w-2" aria-hidden="true" />
        </div>

        {/* Minimalist Editorial Counter */}
        <div className="flex items-center justify-between pt-3 text-[10px] uppercase tracking-[0.2em] font-sans text-[#1A1918]/45">
          <span className="flex items-center gap-1.5 font-light">
            <span>Swipe</span>
            <span aria-hidden="true">→</span>
          </span>
          <div className="flex items-center gap-1.5 tabular-nums text-[11px] font-medium text-[#1A1918]/70">
            <span>0{activeIndex + 1}</span>
            <span className="text-[#1A1918]/30 font-light">/</span>
            <span className="text-[#1A1918]/45">0{galleryItems.length}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

