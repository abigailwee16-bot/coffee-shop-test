import React from 'react';
import { OUTLETS } from '../data/mockData';

export const AboutView: React.FC = () => {
  return (
    <div className="w-full bg-[#F0F2F5] min-h-screen py-12 font-sans">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 space-y-12">
        {/* Story Section Header Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#E2E8F0] p-6 lg:p-10 rounded-xs shadow-xs">
          <div className="lg:col-span-5 relative rounded-xs overflow-hidden aspect-square border border-[#CBD5E1] bg-[#0F172A]">
            <img
              alt="Tiong Hoe Legacy Roasting"
              className="w-full h-full object-cover contrast-105 grayscale-[15%]"
              src="https://lh3.googleusercontent.com/aida/AP1WRLu6L160SLdhH2EoKPIDjN12dCvJzEy4Zd5OrDqSsrMc89Uq75O6my3_WMcOxG06BpAaxS35176LQC191LofGKsT2T4xvymaa-7FUbLLghvPV0zcrbs5NuP2MZiHYb800QT2f9-EVeiNk2bZUmbP9abebjC3jK2oDYBhSan6sQkKt4Pk-ymKGIjbZhO8luETg8V6S8_OYXmeBY_1_J3grXh0RDAjsn5rhFfElUmgy4F7Nwt-G87lsnz0tg"
            />
            <div className="absolute bottom-4 left-4 bg-[#0F172A]/90 text-white p-3.5 border border-[#334155] font-mono">
              <span className="text-xl font-extrabold text-[#3B82F6] block">1960s</span>
              <span className="text-[10px] uppercase tracking-widest text-[#94A3B8]">Pioneering Coffee Roasting</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 font-mono text-xs text-[#3B82F6]">
              <span className="w-2 h-2 bg-[#3B82F6]"></span>
              <span className="uppercase tracking-widest font-bold">HERITAGE &amp; ARTISANAL LEGACY</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight">
              6 Decades of Artisanal Coffee Mastery
            </h1>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Tiong Hoe Specialty Coffee traces its roots back to the 1960s, founded by Mr. Tan Tiong Hoe. Starting as a passion for selecting premium green coffee beans and traditional small-batch drum roasting, Tiong Hoe has evolved into one of Singapore's premier specialty coffee roasteries.
            </p>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Today, our roasters continue the legacy—meticulously profiling micro-lots from Colombia, Ethiopia, Guatemala, and Sumatra to achieve perfect extraction and geometric flavor balance in every roast.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E2E8F0] font-mono text-center">
              <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="text-2xl font-black text-[#3B82F6]">60+</span>
                <span className="text-[10px] uppercase tracking-wider text-[#64748B] block mt-1">Years Heritage</span>
              </div>
              <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="text-2xl font-black text-[#3B82F6]">4</span>
                <span className="text-[10px] uppercase tracking-wider text-[#64748B] block mt-1">Singapore Outlets</span>
              </div>
              <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="text-2xl font-black text-[#22C55E]">100%</span>
                <span className="text-[10px] uppercase tracking-wider text-[#64748B] block mt-1">Specialty Grade</span>
              </div>
            </div>
          </div>
        </div>

        {/* Outlet Gallery Grid */}
        <div className="space-y-6">
          <div className="border-b border-[#E2E8F0] pb-4 flex items-center justify-between">
            <div>
              <div className="font-mono text-xs text-[#3B82F6] font-bold uppercase tracking-wider">
                COMMUNITY SPACES
              </div>
              <h2 className="text-2xl font-extrabold text-[#1E293B]">Our 4 Singapore Cafes</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OUTLETS.map((o) => (
              <div key={o.id} className="bg-white border border-[#E2E8F0] rounded-xs overflow-hidden shadow-xs space-y-2">
                <img alt={o.name} src={o.image} className="w-full h-44 object-cover grayscale-[15%]" />
                <div className="p-4 space-y-1 font-sans">
                  <h4 className="font-bold text-sm text-[#1E293B]">{o.name}</h4>
                  <p className="text-xs text-[#64748B] line-clamp-2">{o.address}</p>
                  <span className="inline-block font-mono text-[10px] text-[#3B82F6] font-bold uppercase pt-2">
                    {o.operatingHours}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
