import React from 'react';

export const ValuePropsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F0F2F5] py-16 border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Prop 1 */}
          <div className="bg-white border border-[#E2E8F0] p-6 rounded-xs shadow-xs space-y-3 font-sans">
            <div className="w-10 h-10 bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#3B82F6]">
              <span className="material-symbols-outlined text-[24px]">local_shipping</span>
            </div>
            <h4 className="text-base font-extrabold text-[#1E293B]">
              Free SG Delivery
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Complimentary local courier shipping on all orders above $60 SGD.
            </p>
          </div>

          {/* Prop 2 */}
          <div className="bg-white border border-[#E2E8F0] p-6 rounded-xs shadow-xs space-y-3 font-sans">
            <div className="w-10 h-10 bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#3B82F6]">
              <span className="material-symbols-outlined text-[24px]">coffee_maker</span>
            </div>
            <h4 className="text-base font-extrabold text-[#1E293B]">
              Bi-Weekly Batch Roasting
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed font-mono">
              ROAST: Wed 8PM &rarr; Thu Roast &rarr; Fri Ship<br />
              ROAST: Sun 8PM &rarr; Mon Roast &rarr; Tue Ship
            </p>
          </div>

          {/* Prop 3 */}
          <div className="bg-white border border-[#E2E8F0] p-6 rounded-xs shadow-xs space-y-3 font-sans">
            <div className="w-10 h-10 bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#3B82F6]">
              <span className="material-symbols-outlined text-[24px]">inventory_2</span>
            </div>
            <h4 className="text-base font-extrabold text-[#1E293B]">
              Peak Freshness Guarantee
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Courier pickups on Tuesdays &amp; Fridays ensure beans reach you within optimal degas windows.
            </p>
          </div>

          {/* Prop 4 */}
          <div className="bg-white border border-[#E2E8F0] p-6 rounded-xs shadow-xs space-y-3 font-sans">
            <div className="w-10 h-10 bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#3B82F6]">
              <span className="material-symbols-outlined text-[24px]">support_agent</span>
            </div>
            <h4 className="text-base font-extrabold text-[#1E293B]">
              Roastery Barista Support
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Mon-Fri 10AM-5PM SGT support for grind sizing, espresso calibration, and wholesale inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
