import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Clock, ArrowUpRight, Compass } from 'lucide-react';

interface VisitDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitDialog: React.FC<VisitDialogProps> = ({ isOpen, onClose }) => {
  // Lock body scroll and handle escape
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/45 backdrop-blur-[2px]"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#F8F6F2] text-[#1A1918] p-8 sm:p-10 rounded-[3px] shadow-2xl border border-[#1A1918]/10 z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#1A1918]/60 hover:text-[#1A1918] transition-colors rounded-full hover:bg-black/5 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1A1918]"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase font-sans font-medium text-[#1A1918]/60">
                  Melbourne CBD
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1918] mt-1">
                  Visit Overlay
                </h3>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#1A1918]/10 text-sm font-sans">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#1A1918]/70 shrink-0" />
                  <div>
                    <p className="font-medium text-[#1A1918]">320 Little Lonsdale Street</p>
                    <p className="text-[#1A1918]/70">Melbourne, VIC 3000</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 mt-0.5 text-[#1A1918]/70 shrink-0" />
                  <div>
                    <p className="font-medium text-[#1A1918]">Opening Hours</p>
                    <p className="text-[#1A1918]/70">Monday – Friday: 7:30 AM – 4:00 PM</p>
                    <p className="text-[#1A1918]/70">Saturday – Sunday: 8:00 AM – 4:00 PM</p>
                  </div>
                </div>

                {/* Note */}
                <div className="flex items-start gap-3.5">
                  <Compass className="w-4 h-4 mt-0.5 text-[#1A1918]/70 shrink-0" />
                  <div>
                    <p className="font-medium text-[#1A1918]">Service</p>
                    <p className="text-[#1A1918]/70">
                      Walk-ins welcomed. Counter service, espresso bar &amp; quiet bench seating.
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=320+Little+Lonsdale+St+Melbourne+VIC+3000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[2px] bg-[#1A1918] text-[#F8F6F2] text-xs font-medium tracking-[0.16em] uppercase hover:bg-[#33312E] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1918]"
                >
                  <span>Open in Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-[2px] border border-[#1A1918]/20 text-[#1A1918] text-xs font-medium tracking-[0.16em] uppercase hover:bg-black/5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1918]"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

