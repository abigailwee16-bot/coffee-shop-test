import React, { useState } from 'react';

interface WholesaleViewProps {
  onShowToast: (msg: string) => void;
}

export const WholesaleView: React.FC<WholesaleViewProps> = ({ onShowToast }) => {
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [estimatedKg, setEstimatedKg] = useState('20-50 kg/month');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onShowToast(`Wholesale inquiry submitted! A coffee consultant will contact ${businessName} within 1 business day.`);
    setBusinessName('');
    setContactName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="w-full bg-[#F0F2F5] min-h-screen py-12 font-sans">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 space-y-10">
        {/* Header */}
        <div className="bg-[#0F172A] border border-[#334155] text-white p-8 lg:p-10 rounded-xs shadow-xs space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-[#3B82F6]">
            <span className="w-2 h-2 bg-[#3B82F6]"></span>
            <span className="uppercase tracking-widest font-bold">B2B SPECIALTY COFFEE PARTNERSHIP</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Wholesale Coffee Beans &amp; Equipment Supply
          </h1>
          <p className="text-sm text-[#94A3B8] max-w-2xl leading-relaxed">
            Empowering cafes, hotels, corporate offices, and restaurants across Singapore with freshly roasted specialty coffee beans, commercial machinery, and barista calibration training.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xs border border-[#E2E8F0] shadow-xs space-y-3">
            <div className="w-10 h-10 bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#3B82F6]">
              <span className="material-symbols-outlined text-[24px]">local_shipping</span>
            </div>
            <h3 className="font-extrabold text-[#1E293B] text-base">Bespoke House Blends</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Custom roast profiling formulated to match your venue's target espresso profile, milk solubility, and menu pricing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xs border border-[#E2E8F0] shadow-xs space-y-3">
            <div className="w-10 h-10 bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#3B82F6]">
              <span className="material-symbols-outlined text-[24px]">precision_manufacturing</span>
            </div>
            <h3 className="font-extrabold text-[#1E293B] text-base">Machinery &amp; Tech Support</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Authorized distributor for La Marzocco, Mahlkönig, Mazzer, and Puqpress with emergency technician support.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xs border border-[#E2E8F0] shadow-xs space-y-3">
            <div className="w-10 h-10 bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#3B82F6]">
              <span className="material-symbols-outlined text-[24px]">school</span>
            </div>
            <h3 className="font-extrabold text-[#1E293B] text-base">Barista Calibration</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Hands-on espresso extraction, milk texturing, and recipe dial-in training sessions for your staff at our roastery.
            </p>
          </div>
        </div>

        {/* Wholesale Inquiry Form */}
        <div className="bg-white p-8 rounded-xs border border-[#E2E8F0] shadow-xs max-w-2xl mx-auto space-y-6">
          <div className="border-b border-[#E2E8F0] pb-3 text-center">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B82F6]">
              B2B SAMPLING PROGRAM
            </h2>
            <h3 className="text-2xl font-black text-[#1E293B] mt-1">Request Wholesale Sample Kit</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#1E293B] uppercase mb-1">Company / Cafe Name</label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="The Heritage Cafe"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-3 outline-none rounded-xs focus:border-[#3B82F6]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1E293B] uppercase mb-1">Contact Person</label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Manager Name"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-3 outline-none rounded-xs focus:border-[#3B82F6]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#1E293B] uppercase mb-1">Business Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="wholesale@cafe.com"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-3 outline-none rounded-xs focus:border-[#3B82F6]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1E293B] uppercase mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+65 9123 4567"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-3 outline-none rounded-xs focus:border-[#3B82F6]"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-[#1E293B] uppercase mb-1">Estimated Monthly Bean Volume</label>
              <select
                value={estimatedKg}
                onChange={(e) => setEstimatedKg(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-3 outline-none rounded-xs font-bold text-[#1E293B]"
              >
                <option value="10-20 kg/month">10 - 20 kg / month (Boutique Cafe / Office)</option>
                <option value="20-50 kg/month">20 - 50 kg / month (Mid-sized Venue)</option>
                <option value="50-100 kg/month">50 - 100 kg / month (High Volume Outlet)</option>
                <option value="100+ kg/month">100+ kg / month (Multi-outlet Group)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-mono text-xs uppercase tracking-widest font-bold py-3.5 rounded-xs transition-colors cursor-pointer shadow-xs"
            >
              Request Free Sample Kit &amp; Rate Sheet
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
