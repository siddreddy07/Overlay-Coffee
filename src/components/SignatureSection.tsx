import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface SignatureDrink {
  number: string;
  name: string;
  subname: string;
  tagline: string;
  notes: string[];
  description: string;
  image: string;
  alt: string;
}

const signatureDrinks: SignatureDrink[] = [
  {
    number: '01',
    name: 'Peanut Cream Latte',
    subname: 'The Original Layer',
    tagline: 'Espresso · house roasted peanut cold cream',
    notes: ['Single origin espresso', 'House-roasted peanut cream', 'Cold / smooth / balanced'],
    description:
      'Double ristretto over cold milk, crowned with dense, slowly whipped roasted peanut cream. Lightly salted with a velvety, lingering finish.',
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1800&q=88',
    alt: 'Overlay Coffee Peanut Cream Latte with dense sweet cream layered over chilled espresso',
  },
  {
    number: '02',
    name: 'Matcha Cream Einspänner',
    subname: 'Ceremonial Grade Uji',
    tagline: 'Stone-ground Kyoto Uji · velvety sweet cream',
    notes: ['Stone-ground Uji matcha', 'Velvety cold sweet cream', 'Filtered oat milk'],
    description:
      'First-harvest Kyoto matcha whisked to order, layered beneath dense sweet cream. Vibrant green with deep umami sweetness.',
    image:
      'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=1400&q=88',
    alt: 'Ceremonial grade Matcha Einspänner at Overlay Coffee Melbourne',
  },
  {
    number: '03',
    name: 'Classic Einspänner',
    subname: 'Vienna Tradition · Seoul Craft',
    tagline: 'Double ristretto · chilled vanilla cream · cacao',
    notes: ['Double ristretto', 'Chilled vanilla cream', 'Micro-grated dark cacao'],
    description:
      'An intense double ristretto base sipped through a thick layer of cold, lightly sweetened whipped cream.',
    image:
      'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1200&q=88',
    alt: 'Classic Einspänner coffee with whipped cream and cocoa dusting',
  },
  {
    number: '04',
    name: 'Coconut Americano',
    subname: 'Laneway Special',
    tagline: 'Chilled young coconut water · double espresso shot',
    notes: ['Rotating seasonal origin', 'Pure coconut water', 'Crisp / clean / sweet'],
    description:
      'A double shot of seasonal single origin poured over chilled young coconut water. Clean sweetness and refreshing hydration.',
    image:
      'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=1200&q=88',
    alt: 'Coconut Americano at Overlay Coffee Melbourne',
  },
];

const easeCurve = [0.22, 1, 0.36, 1];

export const SignatureSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstChild = container.firstElementChild as HTMLElement | null;
    if (!firstChild) return;
    const itemWidth = firstChild.offsetWidth + 16; // card width + gap
    const index = Math.round(container.scrollLeft / itemWidth);
    setActiveIndex(Math.min(Math.max(index, 0), signatureDrinks.length - 1));
  };

  return (
    <section
      id="signature-section"
      className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 pt-20 sm:pt-28 lg:pt-36 pb-20 sm:pb-28 lg:pb-36 bg-[#F7F6F2]"
    >
      {/* Section Intro */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: easeCurve }}
        className="border-t border-[#DDD9D2] pt-8 sm:pt-10 mb-8 sm:mb-10 lg:mb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-baseline">
          <div className="lg:col-span-3">
            <span className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase font-sans font-medium text-[#735545]">
              01 / Signature
            </span>
          </div>
          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] text-[#242320] tracking-[-0.015em] leading-[1.1]">
              Drinks people come back for.
            </h2>
            <p className="mt-3 sm:mt-4 text-[13px] sm:text-[15px] font-sans text-[#242320]/70 font-light leading-relaxed max-w-xl">
              <span className="lg:hidden">Cream pours, matcha and specialty coffee — made fresh on Little Lonsdale.</span>
              <span className="hidden lg:inline">Signature cream pours crafted fresh daily on Little Lonsdale. A considered balance of dense whipped cold cream, textured temperature contrast, and extracted specialty coffee.</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* MOBILE & TABLET: Horizontal Swipeable Editorial Drink Rail */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: easeCurve }}
        className="lg:hidden"
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 sm:gap-5 -mx-6 px-6 sm:-mx-10 sm:px-10 scroll-pl-6 sm:scroll-pl-10 pb-2"
          style={{ WebkitOverflowScrolling: 'touch' }}
          aria-label="Signature drinks rail"
        >
          {signatureDrinks.map((drink, idx) => (
            <div
              key={drink.number}
              className="shrink-0 snap-start w-[84vw] max-w-[360px] sm:w-[52vw] sm:max-w-[420px] flex flex-col"
            >
              <div className="relative aspect-[4/5] max-h-[480px] sm:max-h-[520px] overflow-hidden bg-[#DDD9D2]/30 rounded-[1px]">
                <img
                  src={drink.image}
                  alt={drink.alt}
                  referrerPolicy="no-referrer"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover select-none"
                />
              </div>

              {/* Editorial Item Details */}
              <div className="pt-4 flex flex-col">
                <span className="text-[10px] font-sans font-medium tracking-[0.22em] text-[#735545] uppercase">
                  {drink.number}
                </span>
                <h3 className="mt-1.5 font-serif text-[clamp(1.4rem,4.2vw,1.8rem)] text-[#242320] tracking-[-0.015em] leading-[1.15]">
                  {drink.name}
                </h3>
                <p className="mt-2 text-[13px] font-sans text-[#242320]/65 font-light leading-snug">
                  {drink.tagline}
                </p>
              </div>
            </div>
          ))}
          {/* Spacer to preserve right padding on final item scroll */}
          <div className="shrink-0 w-2" aria-hidden="true" />
        </div>

        {/* Subtle Progress / Peek Indicator */}
        <div className="flex items-center justify-between pt-4 text-[10px] uppercase tracking-[0.2em] font-sans text-[#735545]/70 border-t border-[#DDD9D2]/60 mt-3">
          <span className="flex items-center gap-1.5 font-light">
            <span>Swipe</span>
            <span aria-hidden="true">→</span>
          </span>
          <div className="flex items-center gap-1.5 tabular-nums text-[11px] font-medium text-[#242320]">
            <span>0{activeIndex + 1}</span>
            <span className="text-[#DDD9D2] font-light">/</span>
            <span className="text-[#735545]">0{signatureDrinks.length}</span>
          </div>
        </div>
      </motion.div>

      {/* DESKTOP (lg+): Art-Directed Editorial Spread */}
      <div className="hidden lg:block">
        {/* FEATURED DRINK 01: Peanut Cream Latte (Dominant Asymmetric Composition) */}
        <div className="mb-28 xl:mb-36">
          <div className="grid grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Dominant Image: 60% Width */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: easeCurve }}
              className="col-span-7"
            >
              <div className="relative aspect-[4/3] xl:aspect-[16/11] overflow-hidden bg-[#DDD9D2]/30">
                <img
                  src={signatureDrinks[0].image}
                  alt={signatureDrinks[0].alt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover select-none transition-transform duration-700 ease-out hover:scale-[1.018]"
                />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <span className="inline-block px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-[#242320] bg-[#E8DDC6]/90 backdrop-blur-[2px]">
                    Signature 01
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Editorial Details: 40% Width */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: easeCurve }}
              className="col-span-5 lg:pl-4 space-y-6"
            >
              <div>
                <span className="text-[11px] sm:text-[12px] tracking-[0.22em] uppercase font-sans font-medium text-[#735545] block mb-2">
                  01 — Signature Pour
                </span>
                <h3 className="font-serif text-[clamp(1.85rem,3.5vw,2.65rem)] text-[#242320] tracking-[-0.015em] leading-tight">
                  {signatureDrinks[0].name}
                </h3>
              </div>

              {/* Tasting Notes */}
              <div className="space-y-1.5 py-3 border-y border-[#DDD9D2] text-[13px] font-sans text-[#242320]/80">
                {signatureDrinks[0].notes.map((note, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#735545] shrink-0" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>

              <p className="text-[14px] sm:text-[15px] font-sans text-[#242320]/75 font-light leading-relaxed">
                {signatureDrinks[0].description}
              </p>

              <div className="pt-2 text-[11px] tracking-[0.2em] uppercase font-sans text-[#735545]/80">
                Served chilled · Counter pick-up
              </div>
            </motion.div>
          </div>
        </div>

        {/* FEATURED DRINK 02 & 03: Alternating Magazine-Style Composition */}
        <div className="grid grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* DRINK 02: Matcha */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: easeCurve }}
            className="col-span-7 flex flex-col space-y-6"
          >
            <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#DDD9D2]/30">
              <img
                src={signatureDrinks[1].image}
                alt={signatureDrinks[1].alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover select-none transition-transform duration-700 ease-out hover:scale-[1.018]"
              />
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <span className="inline-block px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-[#242320] bg-[#A7B78A]/90 backdrop-blur-[2px]">
                  Kyoto Uji
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-[11px] sm:text-[12px] tracking-[0.22em] uppercase font-sans font-medium text-[#735545] block">
                02 — Green Craft
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#242320] tracking-[-0.01em]">
                {signatureDrinks[1].name}
              </h3>
              <p className="text-[14px] font-sans text-[#242320]/75 font-light leading-relaxed max-w-lg">
                {signatureDrinks[1].description}
              </p>
            </div>
          </motion.div>

          {/* DRINK 03: Classic Einspänner */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.15, ease: easeCurve }}
            className="col-span-5 flex flex-col space-y-6 pt-16"
          >
            <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-[#DDD9D2]/30">
              <img
                src={signatureDrinks[2].image}
                alt={signatureDrinks[2].alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover select-none transition-transform duration-700 ease-out hover:scale-[1.018]"
              />
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <span className="inline-block px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-[#242320] bg-[#E8DDC6]/90 backdrop-blur-[2px]">
                  House Vienna
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-[11px] sm:text-[12px] tracking-[0.22em] uppercase font-sans font-medium text-[#735545] block">
                03 — Ristretto Cold Cream
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#242320] tracking-[-0.01em]">
                {signatureDrinks[2].name}
              </h3>
              <p className="text-[14px] font-sans text-[#242320]/75 font-light leading-relaxed">
                {signatureDrinks[2].description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

