import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface MenuDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuDialog: React.FC<MenuDialogProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/45 backdrop-blur-[2px]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#F8F6F2] text-[#1A1918] p-8 sm:p-10 rounded-[3px] shadow-2xl border border-[#1A1918]/10 z-10 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#1A1918]/60 hover:text-[#1A1918] transition-colors rounded-full hover:bg-black/5 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1A1918]"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase font-sans font-medium text-[#1A1918]/60">
                Counter Offerings
              </p>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1918] mt-1">
                Menu
              </h3>
            </div>

            <div className="mt-8 space-y-8 font-sans">
              {/* Signature */}
              <div>
                <h4 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1A1918]/50 mb-3 border-b border-[#1A1918]/10 pb-1">
                  Signature Cream Drinks
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <p className="font-medium text-[#1A1918]">Peanut Cream Latte</p>
                      <p className="text-xs text-[#1A1918]/60">House roast, roasted peanut sweet cold cream</p>
                    </div>
                    <span className="text-sm font-medium tabular-nums">8.5</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <p className="font-medium text-[#1A1918]">Classic Einspänner</p>
                      <p className="text-xs text-[#1A1918]/60">Double ristretto, velvety whipped cream, cocoa dust</p>
                    </div>
                    <span className="text-sm font-medium tabular-nums">8.0</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <p className="font-medium text-[#1A1918]">Matcha Cream Einspänner</p>
                      <p className="text-xs text-[#1A1918]/60">Ceremonial Uji matcha, sweet cream, oat milk</p>
                    </div>
                    <span className="text-sm font-medium tabular-nums">9.0</span>
                  </div>
                </div>
              </div>

              {/* Espresso & Filter */}
              <div>
                <h4 className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#1A1918]/50 mb-3 border-b border-[#1A1918]/10 pb-1">
                  Espresso &amp; Filter
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <p className="font-medium text-[#1A1918]">Black</p>
                      <p className="text-xs text-[#1A1918]/60">Espresso / Long Black (Rotating Single Origin)</p>
                    </div>
                    <span className="text-sm font-medium tabular-nums">5.0</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <p className="font-medium text-[#1A1918]">White</p>
                      <p className="text-xs text-[#1A1918]/60">Flat White / Latte / Piccolo (Jersey or Oat)</p>
                    </div>
                    <span className="text-sm font-medium tabular-nums">5.5</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <p className="font-medium text-[#1A1918]">Batch Brew Filter</p>
                      <p className="text-xs text-[#1A1918]/60">Light roast washed Ethiopia or natural Colombia</p>
                    </div>
                    <span className="text-sm font-medium tabular-nums">6.0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1A1918]/10 flex justify-between items-center text-xs text-[#1A1918]/60">
              <span>All milk alternatives available (+0.5)</span>
              <span>Available daily till 4pm</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

