import React from 'react';
import { OUTLETS } from '../data/mockData';
import { Outlet } from '../types';

interface OrderPickupSectionProps {
  onSelectOutletForPickup: (outlet: Outlet) => void;
}

export const OrderPickupSection: React.FC<OrderPickupSectionProps> = ({
  onSelectOutletForPickup,
}) => {
  return (
    <section id="pickup-section" className="w-full bg-[#0F172A] text-white py-16 border-b border-[#334155]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col max-w-3xl mb-10 gap-2 font-sans">
          <div className="flex items-center gap-2 font-mono text-xs text-[#3B82F6]">
            <span className="w-2 h-2 bg-[#3B82F6]"></span>
            <span className="uppercase tracking-widest font-bold font-mono">ORDER AHEAD FOR PICKUP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Order Drinks Ahead
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mt-1">
            Skip the line. Select your preferred outlet, customize espresso ratio, milk options, and pickup time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OUTLETS.map((outlet) => (
            <div
              key={outlet.id}
              onClick={() => onSelectOutletForPickup(outlet)}
              className="relative group cursor-pointer overflow-hidden rounded-xs border border-[#334155] hover:border-[#3B82F6] bg-[#1E293B] aspect-square lg:aspect-[3/4] transition-all duration-300 shadow-xs"
            >
              <img
                alt={outlet.name}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 group-hover:scale-105"
                src={outlet.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent"></div>

              <div className="absolute top-3 right-3 bg-[#1E293B] border border-[#334155] text-[#22C55E] font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                {outlet.status}
              </div>

              <div className="absolute bottom-0 left-0 p-5 w-full flex flex-col gap-1 font-sans">
                <span className="text-[#3B82F6] font-mono text-[10px] uppercase tracking-widest font-bold">
                  PICKUP LOCATION
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {outlet.name}
                </h3>
                <p className="text-xs text-[#94A3B8] line-clamp-1">{outlet.address}</p>
                <div className="flex items-center gap-1 text-[#3B82F6] font-mono text-xs font-bold uppercase tracking-wider mt-2 group-hover:translate-x-1 transition-transform">
                  <span>Select Location</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
