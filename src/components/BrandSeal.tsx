import React from 'react';
import { motion } from 'motion/react';

interface BrandSealProps {
  className?: string;
}

export const BrandSeal: React.FC<BrandSealProps> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`relative select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/30 bg-black/15 backdrop-blur-[2px] flex items-center justify-center text-white/90 p-1 shadow-sm">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_24s_linear_infinite]">
          <path
            id="brandSealPath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text className="text-[9px] uppercase tracking-[0.24em] font-sans fill-white/85">
            <textPath href="#brandSealPath" startOffset="0%">
              OVERLAY COFFEE · MELBOURNE ·
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-[9px] tracking-[0.22em] font-sans font-medium text-white/80 uppercase">
            VIC
          </span>
          <span className="text-[11px] font-serif tracking-normal text-white leading-none">
            3000
          </span>
        </div>
      </div>
    </motion.div>
  );
};
