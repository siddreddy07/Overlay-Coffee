import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F8F6F2] text-[#1A1918] pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 border-t border-[#1A1918]/15 overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-baseline pb-16 sm:pb-24 border-b border-[#1A1918]/10 text-[12px] sm:text-[13px] tracking-[0.16em] uppercase font-sans font-medium text-[#1A1918]/70">
          <div>
            <p className="text-[#1A1918]">320 Little Lonsdale St</p>
            <p className="mt-0.5 text-[#1A1918]/55">Melbourne VIC 3000</p>
          </div>

          <div className="md:text-center text-[#1A1918]/50">
            <span>See you tomorrow.</span>
          </div>

          <div className="flex md:justify-end items-center gap-6 text-[#1A1918]">
            <a
              href="https://maps.google.com/?q=320+Little+Lonsdale+St+Melbourne+VIC+3000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#1A1918]/60 transition-colors py-1 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1918]"
            >
              <span>Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#1A1918]/60 transition-colors py-1 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1918]"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Large Poster-Scale Wordmark Sign-Off */}
        <div className="py-12 sm:py-16 lg:py-24 text-center overflow-hidden">
          <h2
            className="font-serif text-[clamp(3.8rem,18vw,16.5rem)] leading-[0.85] tracking-[-0.03em] text-[#1A1918] select-none pointer-events-none"
            aria-label="Overlay."
          >
            Overlay.
          </h2>
        </div>

        {/* Bottom Legal, Disclaimer & Origin Row */}
        <div className="pt-6 border-t border-[#1A1918]/10 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-sans text-[#1A1918]/50 gap-4">
          <div className="flex items-center gap-2">
            <span>Melbourne</span>
            <span className="text-[#1A1918]/25">/</span>
            <span>3000</span>
          </div>

          <div className="text-center text-[10px] sm:text-[11px] tracking-[0.14em] text-[#735545]/80 font-normal lowercase sm:normal-case">
            Independent concept — not the official Overlay Coffee website
          </div>

          <div className="text-center sm:text-right">
            <span>Template Demo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

