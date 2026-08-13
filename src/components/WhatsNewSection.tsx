import React, { useState } from 'react';
import { OUTLETS } from '../data/mockData';
import { Outlet } from '../types';

interface WhatsNewSectionProps {
  onSelectOutlet: (outlet: Outlet) => void;
}

export const WhatsNewSection: React.FC<WhatsNewSectionProps> = ({ onSelectOutlet }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeOutlet = OUTLETS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % OUTLETS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + OUTLETS.length) % OUTLETS.length);
  };

  return (
    <section className="w-full bg-[#F0F2F5] py-16 border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="bg-white border border-[#E2E8F0] p-6 lg:p-10 rounded-xs shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Container with Geometric Badge */}
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-[#0F172A] border border-[#CBD5E1] overflow-hidden group">
              <img
                alt={activeOutlet.name}
                className="w-full h-full object-cover grayscale-[20%] contrast-105 group-hover:grayscale-0 transition-all duration-500"
                src={activeOutlet.image}
              />
              {activeOutlet.isNew && (
                <div className="absolute top-4 left-4 bg-[#3B82F6] text-white font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-xs border border-white/20">
                  FEATURED OUTLET
                </div>
              )}
              <div className="absolute bottom-4 right-4 bg-[#0F172A]/90 text-white font-mono text-[11px] px-3 py-1.5 border border-[#334155]">
                MRT: {activeOutlet.mrtAccess}
              </div>
            </div>

            {/* Details Column */}
            <div className="flex flex-col items-start gap-4 font-sans">
              <div className="flex items-center gap-2 font-mono text-xs text-[#3B82F6]">
                <span className="w-2 h-2 bg-[#3B82F6]"></span>
                <span className="uppercase tracking-widest font-bold">WHAT'S NEW IN SINGAPORE</span>
              </div>

              <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl text-[#1E293B] font-extrabold tracking-tight">
                New Outlet: {activeOutlet.name}
              </h2>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Whether you're in need of your daily espresso fuel, manual pour-over micro-lots, or order-ahead pickup drinks, visit our roastery cafe space.
              </p>

              <div className="w-full bg-[#F8FAFC] p-4 border border-[#E2E8F0] space-y-1 font-mono text-xs text-[#334155]">
                <div className="flex items-center gap-2 text-[#3B82F6] font-bold">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span>LOCATION DETAILS</span>
                </div>
                <p
                  onClick={() => onSelectOutlet(activeOutlet)}
                  className="text-[#1E293B] hover:text-[#3B82F6] transition-colors cursor-pointer underline decoration-[#CBD5E1]"
                >
                  {activeOutlet.address}
                </p>
                <div className="text-[11px] text-[#64748B] pt-1">
                  HOURS: {activeOutlet.operatingHours}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2 w-full">
                <button
                  onClick={() => onSelectOutlet(activeOutlet)}
                  className="bg-[#1E293B] hover:bg-[#0F172A] text-white font-mono text-xs uppercase tracking-widest font-bold px-6 py-3.5 rounded-xs transition-all cursor-pointer shadow-xs"
                >
                  View Outlet Details
                </button>
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center justify-between w-full pt-6 border-t border-[#E2E8F0] font-mono text-xs">
                <span className="text-[#64748B]">
                  OUTLET <strong className="text-[#1E293B]">0{currentIndex + 1}</strong> / 0{OUTLETS.length}
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Outlet"
                    className="w-9 h-9 border border-[#E2E8F0] bg-white flex items-center justify-center text-[#1E293B] hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6] transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Outlet"
                    className="w-9 h-9 border border-[#E2E8F0] bg-white flex items-center justify-center text-[#1E293B] hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6] transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
