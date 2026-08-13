import React, { useState } from 'react';
import { CoffeeGuide } from '../types';

interface CoffeeGuideModalProps {
  guide: CoffeeGuide | null;
  onClose: () => void;
  onNavigateToShop: () => void;
}

export const CoffeeGuideModal: React.FC<CoffeeGuideModalProps> = ({
  guide,
  onClose,
  onNavigateToShop,
}) => {
  const [activeTab, setActiveTab] = useState<'roast' | 'process' | 'grind'>('roast');

  if (!guide) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in font-sans">
      <div className="bg-white w-full max-w-3xl rounded-xs shadow-2xl overflow-hidden border border-[#E2E8F0] relative my-8">
        {/* Header Image */}
        <div className="relative h-60 sm:h-72 bg-[#0F172A]">
          <img alt={guide.title} src={guide.image} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent"></div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 z-10 w-8 h-8 bg-[#0F172A] border border-[#334155] text-white hover:bg-[#3B82F6] transition-colors flex items-center justify-center cursor-pointer rounded-xs"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 font-mono">
            <span className="bg-[#3B82F6] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-xs">
              {guide.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-sans">{guide.title}</h2>
            <span className="text-xs text-[#94A3B8] block">{guide.readTime}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <p className="text-sm text-[#1E293B] leading-relaxed italic border-l-4 border-[#3B82F6] pl-4">
            "{guide.content.intro}"
          </p>

          {/* Interactive Decoder Tabs */}
          <div className="border-b border-[#E2E8F0] flex gap-4 text-xs font-mono font-bold uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('roast')}
              className={`pb-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'roast'
                  ? 'border-[#3B82F6] text-[#3B82F6]'
                  : 'border-transparent text-[#64748B] hover:text-[#1E293B]'
              }`}
            >
              1. Roast Profile
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`pb-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'process'
                  ? 'border-[#3B82F6] text-[#3B82F6]'
                  : 'border-transparent text-[#64748B] hover:text-[#1E293B]'
              }`}
            >
              2. Processing
            </button>
            <button
              onClick={() => setActiveTab('grind')}
              className={`pb-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'grind'
                  ? 'border-[#3B82F6] text-[#3B82F6]'
                  : 'border-transparent text-[#64748B] hover:text-[#1E293B]'
              }`}
            >
              3. Grind Matching
            </button>
          </div>

          {/* Tab 1: Roast */}
          {activeTab === 'roast' && (
            <div className="space-y-3 animate-fade-in text-xs font-mono">
              <div className="p-3 bg-[#F8FAFC] rounded-xs border border-[#E2E8F0]">
                <strong className="text-xs text-[#3B82F6] block mb-1">Light Roast (Floral &amp; Bright)</strong>
                <p className="text-[#64748B] font-sans">
                  Preserves delicate origin flavor characteristics, jasmine aromatics, and tea-like elegance. Perfect for Filter Pour-over.
                </p>
              </div>
              <div className="p-3 bg-[#F8FAFC] rounded-xs border border-[#E2E8F0]">
                <strong className="text-xs text-[#3B82F6] block mb-1">Medium Roast (Balanced &amp; Sweet)</strong>
                <p className="text-[#64748B] font-sans">
                  Juicy fruit sweetness, caramel undertones, and smooth body. Versatile across both espresso and pour-over methods.
                </p>
              </div>
              <div className="p-3 bg-[#F8FAFC] rounded-xs border border-[#E2E8F0]">
                <strong className="text-xs text-[#3B82F6] block mb-1">Medium-Dark Roast (Rich Cocoa &amp; Bold)</strong>
                <p className="text-[#64748B] font-sans">
                  Deep dark chocolate, roasted hazelnut, and low acidity. Cuts through fresh milk for decadent lattes &amp; flat whites.
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Process */}
          {activeTab === 'process' && (
            <div className="space-y-3 animate-fade-in text-xs font-mono">
              <div className="p-3 bg-[#F8FAFC] rounded-xs border border-[#E2E8F0]">
                <strong className="text-xs text-[#3B82F6] block mb-1">Washed Process</strong>
                <p className="text-[#64748B] font-sans">
                  Coffee cherries are depulped and washed with water. Produces a sparkling, clean cup with distinct citrus acidity.
                </p>
              </div>
              <div className="p-3 bg-[#F8FAFC] rounded-xs border border-[#E2E8F0]">
                <strong className="text-xs text-[#3B82F6] block mb-1">Natural Process</strong>
                <p className="text-[#64748B] font-sans">
                  Cherries dry whole under sun beds. Infuses intense berry sweetness, heavy body, and winey aromatics.
                </p>
              </div>
              <div className="p-3 bg-[#F8FAFC] rounded-xs border border-[#E2E8F0]">
                <strong className="text-xs text-[#3B82F6] block mb-1">Anaerobic Fermentation</strong>
                <p className="text-[#64748B] font-sans">
                  Sealed oxygen-free tank fermentation. Unlocks wild tropical flavors like lychee, passionfruit, and cinnamon.
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Grind */}
          {activeTab === 'grind' && (
            <div className="space-y-3 animate-fade-in text-xs font-mono">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-[#F8FAFC] rounded-xs border border-[#E2E8F0]">
                  <span className="font-bold text-[#1E293B] block">Whole Bean</span>
                  <p className="text-[#64748B] mt-0.5 font-sans">Best shelf life. Grind right before brewing.</p>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xs border border-[#E2E8F0]">
                  <span className="font-bold text-[#1E293B] block">Espresso</span>
                  <p className="text-[#64748B] mt-0.5 font-sans">Fine, table-salt consistency for 9-bar extraction.</p>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xs border border-[#E2E8F0]">
                  <span className="font-bold text-[#1E293B] block">V60 / Filter</span>
                  <p className="text-[#64748B] mt-0.5 font-sans">Medium-fine, sea-salt consistency for pour-over.</p>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xs border border-[#E2E8F0]">
                  <span className="font-bold text-[#1E293B] block">French Press</span>
                  <p className="text-[#64748B] mt-0.5 font-sans">Coarse breadcrumb grind for immersion brewing.</p>
                </div>
              </div>
            </div>
          )}

          <div className="p-4 bg-[#EFF6FF] text-[#3B82F6] border border-[#BFDBFE] rounded-xs text-xs font-mono font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">lightbulb</span>
            <span>{guide.content.tip}</span>
          </div>

          <div className="pt-4 border-t border-[#E2E8F0] flex justify-end gap-3 font-mono">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xs border border-[#CBD5E1] text-xs uppercase font-bold text-[#64748B] hover:bg-[#F8FAFC] cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigateToShop();
              }}
              className="px-5 py-2.5 rounded-xs bg-[#3B82F6] text-white text-xs uppercase font-bold hover:bg-[#2563EB] cursor-pointer shadow-xs"
            >
              Shop Curated Beans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
