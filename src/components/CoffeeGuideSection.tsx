import React from 'react';
import { COFFEE_GUIDES } from '../data/mockData';
import { CoffeeGuide } from '../types';

interface CoffeeGuideSectionProps {
  onOpenGuideModal: (guide: CoffeeGuide) => void;
}

export const CoffeeGuideSection: React.FC<CoffeeGuideSectionProps> = ({ onOpenGuideModal }) => {
  const guide = COFFEE_GUIDES[0];

  return (
    <section className="w-full bg-[#F0F2F5] py-16 border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-4 font-sans">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 font-mono text-xs text-[#3B82F6]">
              <span className="w-2 h-2 bg-[#3B82F6]"></span>
              <span className="uppercase tracking-widest font-bold font-mono">EDUCATIONAL GUIDE</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#1E293B] tracking-tight">
              Coffee Buying Guide
            </h2>
          </div>

          <button
            onClick={() => onOpenGuideModal(guide)}
            className="flex items-center gap-2 bg-white border border-[#E2E8F0] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1E293B] hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6] transition-all cursor-pointer shadow-xs shrink-0"
          >
            <span>Read Full Guide</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        <div
          onClick={() => onOpenGuideModal(guide)}
          className="grid grid-cols-1 lg:grid-cols-5 bg-white rounded-xs overflow-hidden shadow-xs hover:border-[#3B82F6] transition-all cursor-pointer border border-[#E2E8F0] group"
        >
          <div className="lg:col-span-3 relative h-64 sm:h-80 lg:h-auto overflow-hidden bg-[#0F172A]">
            <img
              alt={guide.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out grayscale-[20%]"
              src={guide.image}
            />
          </div>

          <div className="lg:col-span-2 p-6 lg:p-10 flex flex-col justify-center gap-4 font-sans">
            <div className="flex items-center justify-between font-mono text-xs text-[#3B82F6]">
              <span className="bg-[#EFF6FF] border border-[#BFDBFE] px-2.5 py-1 font-bold uppercase">
                {guide.category}
              </span>
              <span className="text-[#64748B]">{guide.readTime}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#1E293B] tracking-tight group-hover:text-[#3B82F6] transition-colors">
              {guide.title}
            </h3>

            <p className="text-sm text-[#64748B] leading-relaxed">
              {guide.summary}
            </p>

            <div className="flex items-center gap-2 text-[#3B82F6] font-mono text-xs font-bold uppercase tracking-wider pt-2">
              <span>Read Coffee Guide ({guide.readTime})</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
