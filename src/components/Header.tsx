import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Clock, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenVisit: () => void;
  onScrollToMenu: () => void;
  onScrollToAtmosphere: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenVisit, onScrollToMenu, onScrollToAtmosphere }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-[#F8F6F2] text-[#1A1918] transition-all duration-300 ${
        isScrolled ? 'border-b border-[#1A1918]/12 shadow-[0_2px_12px_rgba(0,0,0,0.02)]' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Desktop Header */}
        <div
          className={`hidden md:grid grid-cols-3 items-center transition-all duration-300 ${
            isScrolled ? 'py-4 sm:py-4.5' : 'py-6 sm:py-7'
          } ${!isScrolled ? 'border-b border-[#1A1918]/10' : ''}`}
        >
          {/* Left Navigation */}
          <nav className="flex items-center gap-8 text-[13px] tracking-[0.14em] uppercase font-sans font-medium text-[#1A1918]/80">
            <button
              onClick={onScrollToMenu}
              className="hover:text-[#1A1918] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1918] py-2 relative group"
            >
              <span>Menu</span>
              <span className="absolute bottom-1 left-0 w-0 h-[1.5px] bg-[#1A1918] transition-all duration-200 group-hover:w-full" />
            </button>
            <button
              onClick={onScrollToAtmosphere}
              className="hover:text-[#1A1918] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1918] py-2 relative group"
            >
              <span>About</span>
              <span className="absolute bottom-1 left-0 w-0 h-[1.5px] bg-[#1A1918] transition-all duration-200 group-hover:w-full" />
            </button>
          </nav>

          {/* Center Brand Identity */}
          <div className="text-center">
            <a
              href="/"
              className="inline-block group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1918]"
              aria-label="Overlay Coffee Melbourne"
            >
              <span
                className={`font-serif tracking-[-0.02em] text-[#1A1918] leading-none block transition-all duration-300 ${
                  isScrolled ? 'text-2xl sm:text-[28px]' : 'text-3xl lg:text-[34px]'
                } group-hover:opacity-85`}
              >
                Overlay.
              </span>
            </a>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center justify-end gap-8 text-[13px] tracking-[0.14em] uppercase font-sans font-medium text-[#1A1918]/80">
            <button
              onClick={onOpenVisit}
              className="hover:text-[#1A1918] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1918] py-2 relative group"
            >
              <span>Visit</span>
              <span className="absolute bottom-1 left-0 w-0 h-[1.5px] bg-[#1A1918] transition-all duration-200 group-hover:w-full" />
            </button>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#1A1918] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1918] py-2 group"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Mobile Header */}
        <div
          className={`flex md:hidden items-center justify-between transition-all duration-300 ${
            isScrolled ? 'py-3.5' : 'py-4.5'
          } ${!isScrolled ? 'border-b border-[#1A1918]/10' : ''}`}
        >
          <a
            href="/"
            className="font-serif text-2xl tracking-[-0.02em] text-[#1A1918] leading-none py-2"
            aria-label="Overlay Coffee"
          >
            Overlay.
          </a>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenVisit}
              className="min-h-[44px] px-2 flex items-center text-[12px] tracking-[0.14em] uppercase font-sans font-medium text-[#1A1918]/80 hover:text-[#1A1918]"
            >
              Visit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[56px] text-[12px] tracking-[0.14em] uppercase font-sans font-medium px-3 py-2 rounded-[2px] border border-[#1A1918]/20 text-[#1A1918] hover:bg-[#1A1918]/5 transition-colors flex items-center justify-center cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-b border-[#1A1918]/12 bg-[#F5F2EC]"
          >
            <div className="px-6 py-8 space-y-6">
<nav className="flex flex-col space-y-2 text-sm uppercase tracking-[0.18em] font-medium text-[#1A1918]/90">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onScrollToMenu();
                  }}
                  className="min-h-[44px] flex items-center text-left hover:text-[#1A1918] py-1 border-b border-[#1A1918]/8"
                >
                  Coffee & Signature Drinks
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onScrollToAtmosphere();
                  }}
                  className="min-h-[44px] flex items-center text-left hover:text-[#1A1918] py-1 border-b border-[#1A1918]/8"
                >
                  About the Space
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenVisit();
                  }}
                  className="min-h-[44px] flex items-center text-left hover:text-[#1A1918] py-1 border-b border-[#1A1918]/8"
                >
                  Hours &amp; Location
                </button>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-1.5 text-left hover:text-[#1A1918] py-1"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </nav>

              <div className="pt-4 border-t border-[#1A1918]/10 text-xs text-[#1A1918]/70 space-y-2.5 font-sans">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#1A1918]/50 shrink-0" />
                  <span>320 Little Lonsdale St, Melbourne VIC 3000</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#1A1918]/50 shrink-0" />
                  <span>Mon–Fri 7:30–16:00 · Sat–Sun 8:00–16:00</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

