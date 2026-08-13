import React from 'react';

interface HeroSectionProps {
  onShopNow: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopNow }) => {
  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[640px] pt-24 pb-12 bg-[#0F172A] flex items-center border-b border-[#334155] overflow-hidden">
      {/* Background Image with Geometric Grid Mask */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida/AP1WRLu6L160SLdhH2EoKPIDjN12dCvJzEy4Zd5OrDqSsrMc89Uq75O6my3_WMcOxG06BpAaxS35176LQC191LofGKsT2T4xvymaa-7FUbLLghvPV0zcrbs5NuP2MZiHYb800QT2f9-EVeiNk2bZUmbP9abebjC3jK2oDYBhSan6sQkKt4Pk-ymKGIjbZhO8luETg8V6S8_OYXmeBY_1_J3grXh0RDAjsn5rhFfElUmgy4F7Nwt-G87lsnz0tg')`,
        }}
      ></div>

      {/* Geometric Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415515_1px,transparent_1px),linear-gradient(to_bottom,#33415515_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Hero Copy */}
        <div className="lg:col-span-8 flex flex-col items-start gap-5">
          <div className="inline-flex items-center gap-2 bg-[#1E293B] border border-[#334155] px-3 py-1 rounded-xs font-mono text-xs text-[#3B82F6]">
            <span className="w-1.5 h-1.5 bg-[#3B82F6]"></span>
            <span>SINGAPORE SPECIALTY ROASTERY EST. 1960</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl text-white font-black tracking-tight leading-[1.1]">
            GEOMETRIC BALANCE <br />
            <span className="text-[#3B82F6]">IN EVERY ROAST.</span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            We deliver specialty coffee that's as personal as your taste. Precision profiled micro-lots, Nespresso-compatible capsules, and freshly batch-brewed coffees.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onShopNow}
              className="bg-[#3B82F6] hover:bg-[#2563EB] transition-all text-white font-mono text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-xs flex items-center gap-2 shadow-sm cursor-pointer active:scale-98"
            >
              <span>Explore Beans &amp; Gear</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>

            <a
              href="#pickup-section"
              className="bg-[#1E293B] hover:bg-[#334155] text-white border border-[#334155] transition-all font-mono text-xs uppercase tracking-widest font-bold px-6 py-4 rounded-xs flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px] text-[#3B82F6]">storefront</span>
              <span>Order Pickup</span>
            </a>
          </div>
        </div>

        {/* Right Column: Geometric Metrics Card */}
        <div className="lg:col-span-4 bg-[#1E293B]/90 backdrop-blur-md border border-[#334155] p-6 rounded-xs space-y-4 font-mono">
          <div className="flex items-center justify-between border-b border-[#334155] pb-3 text-xs text-[#94A3B8]">
            <span className="uppercase tracking-widest">BATCH SPECIFICATIONS</span>
            <span className="text-[#3B82F6]">SYS #2026</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-white">
            <div className="bg-[#0F172A] p-3 border border-[#334155]">
              <span className="text-[10px] text-[#64748B] block uppercase">Roast Level</span>
              <span className="text-sm font-bold text-[#22C55E]">Light to Medium</span>
            </div>
            <div className="bg-[#0F172A] p-3 border border-[#334155]">
              <span className="text-[10px] text-[#64748B] block uppercase">Score Grade</span>
              <span className="text-sm font-bold text-[#3B82F6]">86.5 Q-Grade</span>
            </div>
          </div>

          <div className="bg-[#0F172A] p-3 border border-[#334155]">
            <span className="text-[10px] text-[#64748B] block uppercase">Origin Sourcing</span>
            <span className="text-xs text-[#E2E8F0]">Colombia Huila, Ethiopia Yirgacheffe, Guatemala Huehuetenango</span>
          </div>
        </div>
      </div>
    </section>
  );
};
