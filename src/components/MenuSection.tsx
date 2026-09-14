import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type MenuCategory = 'all' | 'coffee' | 'signature' | 'matcha' | 'pastry';

interface MenuItem {
  name: string;
  desc?: string;
  price: string;
  category: 'coffee' | 'signature' | 'matcha' | 'pastry';
}

const menuItems: MenuItem[] = [
  // COFFEE
  { name: 'Espresso', desc: 'Rotating seasonal single origin', price: '4.5', category: 'coffee' },
  { name: 'Long Black', desc: 'Washed Ethiopia or natural Colombia', price: '5.0', category: 'coffee' },
  { name: 'Flat White', desc: 'Jersey milk or Minor Figures oat', price: '5.5', category: 'coffee' },
  { name: 'Caffè Latte', desc: 'Velvety microfoam, double ristretto', price: '5.5', category: 'coffee' },
  { name: 'Batch Brew Filter', desc: 'Light roast single origin daily rotation', price: '6.0', category: 'coffee' },
  { name: 'Cold Brew', desc: 'Slow steeped 16 hours, smooth clarity', price: '6.5', category: 'coffee' },

  // SIGNATURE
  { name: 'Peanut Cream Latte', desc: 'Double ristretto, house roasted peanut cold cream', price: '8.5', category: 'signature' },
  { name: 'Classic Einspänner', desc: 'Vienna ristretto, chilled vanilla cream, cacao', price: '8.0', category: 'signature' },
  { name: 'Matcha Cream Einspänner', desc: 'Kyoto Uji matcha, dense cold sweet cream', price: '9.0', category: 'signature' },
  { name: 'Coconut Americano', desc: 'Chilled young coconut water, double shot', price: '7.5', category: 'signature' },

  // MATCHA
  { name: 'Ceremonial Uji Matcha Latte', desc: 'Single-estate Kyoto matcha whisked to order', price: '7.5', category: 'matcha' },
  { name: 'Hojicha Roasted Green Tea', desc: 'Nutty, low tannin, caramel warmth', price: '7.5', category: 'matcha' },
  { name: 'Iced Yuzu Matcha', desc: 'Cold whisked matcha, sparkling yuzu infusion', price: '8.0', category: 'matcha' },
  { name: 'First Flush Sencha', desc: 'Loose leaf green tea, gentle vegetal sweetness', price: '6.0', category: 'matcha' },

  // PASTRY
  { name: 'Twice-Baked Almond Croissant', desc: 'Classic frangipane, toasted flaked almonds', price: '7.5', category: 'pastry' },
  { name: 'Traditional Canelé', desc: 'Caramelized beeswax crust, soft custard crumb', price: '5.5', category: 'pastry' },
  { name: 'Matcha Brown Butter Financier', desc: 'French almond cake infused with Uji matcha', price: '6.0', category: 'pastry' },
  { name: 'Sea Salt Dark Chocolate Biscuit', desc: '70% Valrhona cacao, Maldon sea salt', price: '5.0', category: 'pastry' },
];

const categoryLabels: { key: MenuCategory; label: string }[] = [
  { key: 'all', label: 'All Offerings' },
  { key: 'coffee', label: 'Coffee' },
  { key: 'signature', label: 'Signature' },
  { key: 'matcha', label: 'Matcha & Tea' },
  { key: 'pastry', label: 'Daily Pastry' },
];

const easeCurve = [0.22, 1, 0.36, 1];

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 pt-20 sm:pt-28 lg:pt-36 pb-20 sm:pb-28 lg:pb-36"
    >
      {/* Menu Intro */}
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
              02 / Menu
            </span>
          </div>
          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] text-[#1A1918] tracking-[-0.015em] leading-[1.1]">
              Coffee, matcha &amp; more.
            </h2>
            <p className="mt-4 text-[14px] sm:text-[15px] font-sans text-[#1A1918]/70 font-light leading-relaxed max-w-xl">
              Clean espresso extractions, signature cream drinks and a small daily bake selection. Everything prepared fresh at the counter.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Category Navigation */}
      <div className="flex items-center gap-6 sm:gap-10 border-b border-[#1A1918]/12 pb-4 mb-12 overflow-x-auto no-scrollbar scroll-smooth">
        {categoryLabels.map(({ key, label }) => {
          const isActive = activeCategory === key;
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`text-[12px] sm:text-[13px] tracking-[0.16em] uppercase font-sans font-medium transition-colors py-2 whitespace-nowrap cursor-pointer relative focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1918] ${
                isActive
                  ? 'text-[#1A1918]'
                  : 'text-[#1A1918]/45 hover:text-[#1A1918]/80'
              }`}
            >
              {label}
              {isActive && (
                <motion.div
                  layoutId="menuActiveTab"
                  className="absolute bottom-[-17px] left-0 right-0 h-[1.5px] bg-[#1A1918]"
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Menu Grid Content + Atmospheric Still-Life Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Menu Items List */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: easeCurve }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
            >
              {filteredItems.map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  className="border-b border-[#1A1918]/10 pb-4 flex flex-col justify-between"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-[19px] sm:text-[21px] text-[#1A1918] tracking-[-0.01em]">
                      {item.name}
                    </h3>
                    <span className="font-sans text-[13px] sm:text-[14px] font-medium text-[#1A1918]/85 tabular-nums shrink-0">
                      {item.price}
                    </span>
                  </div>
                  {item.desc && (
                    <p className="mt-1 text-[13px] font-sans font-light text-[#1A1918]/65 leading-normal">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 pt-6 border-t border-[#1A1918]/10 flex flex-col sm:flex-row sm:items-center justify-between text-[12px] font-sans text-[#1A1918]/60 gap-2">
            <span>Dairy alternatives (Oat, Soy, Almond) +0.5</span>
            <span>All items prepared to dine in or takeaway</span>
          </div>
        </div>

        {/* Still-Life Counter Image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: easeCurve }}
          className="lg:col-span-4 flex flex-col space-y-4"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-[#EAE6DE]">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=88"
              alt="Artisan coffee extraction and pour-over preparation at Overlay Coffee counter"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover select-none transition-transform duration-700 ease-out hover:scale-[1.018]"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white/90">
              <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-medium block">
                Counter Service
              </span>
              <span className="font-serif text-sm tracking-tight text-white block">
                Little Lonsdale Morning Pour
              </span>
            </div>
          </div>
          <p className="text-[12px] font-sans text-[#1A1918]/55 leading-relaxed">
            Beans roasted locally in Melbourne. Daily single origin filter rotates every Wednesday.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

