import React, { useState } from 'react';

interface CoffeeCartViewProps {
  onShowToast: (msg: string) => void;
}

export const CoffeeCartView: React.FC<CoffeeCartViewProps> = ({ onShowToast }) => {
  const [guestCount, setGuestCount] = useState('100');
  const [duration, setDuration] = useState('2');
  const [eventType, setEventType] = useState('Corporate Event');
  const [date, setDate] = useState('2026-09-15');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const baseRate = 450;
  const estimatedCost = baseRate + parseInt(guestCount || '0') * 3.5 + (parseInt(duration || '0') - 2) * 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onShowToast(`Coffee Cart quote request sent! We'll reply to ${email} within 24 hours.`);
    setName('');
    setEmail('');
  };

  return (
    <div className="w-full bg-[#F0F2F5] min-h-screen py-12 font-sans">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 space-y-10">
        {/* Hero */}
        <div className="bg-[#0F172A] border border-[#334155] rounded-xs overflow-hidden p-8 lg:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-xs">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 font-mono text-xs text-[#3B82F6]">
              <span className="w-2 h-2 bg-[#3B82F6]"></span>
              <span className="uppercase tracking-widest font-bold">MOBILE ESPRESSO CATERING</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Tiong Hoe Live Coffee Cart
            </h1>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Deploy commercial La Marzocco espresso bars and certified specialty baristas to your corporate events, weddings, and private pop-ups across Singapore.
            </p>
          </div>

          <div className="shrink-0 bg-[#1E293B] border border-[#334155] p-6 rounded-xs space-y-2 text-center font-mono">
            <span className="text-[10px] text-[#94A3B8] uppercase block">Starting Base Rate</span>
            <span className="text-3xl font-black text-[#3B82F6]">$450 SGD</span>
            <span className="text-[10px] text-[#22C55E] block">INCLUDES 2 HRS + BARISTA</span>
          </div>
        </div>

        {/* Included Services + Interactive Quote Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services Checklist */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white border border-[#E2E8F0] p-6 rounded-xs space-y-4">
              <h2 className="font-mono text-xs font-bold text-[#1E293B] uppercase tracking-wider border-b border-[#E2E8F0] pb-3">
                Included in Every Mobile Setup
              </h2>

              <div className="space-y-3 font-sans text-xs">
                <div className="flex gap-3 items-start p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xs">
                  <span className="material-symbols-outlined text-[#3B82F6] text-[20px]">local_cafe</span>
                  <div>
                    <strong className="text-[#1E293B] block font-bold">Full Specialty Espresso Menu</strong>
                    <p className="text-[#64748B] mt-0.5">Espresso, Long Black, Latte, Flat White, Cappuccino &amp; Mocha brewed with freshly roasted heritage beans.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xs">
                  <span className="material-symbols-outlined text-[#3B82F6] text-[20px]">precision_manufacturing</span>
                  <div>
                    <strong className="text-[#1E293B] block font-bold">Commercial Espresso Equipment</strong>
                    <p className="text-[#64748B] mt-0.5">La Marzocco Linea Mini / GS3 machine, Mahlkönig grinder, and biodegradable cups.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xs">
                  <span className="material-symbols-outlined text-[#3B82F6] text-[20px]">badge</span>
                  <div>
                    <strong className="text-[#1E293B] block font-bold">SCA Certified Barista Team</strong>
                    <p className="text-[#64748B] mt-0.5">Warm, professional service with custom latte art poured live for your guests.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instant Calculator */}
          <div className="lg:col-span-6 bg-white p-6 rounded-xs border border-[#E2E8F0] shadow-xs space-y-4 font-sans">
            <h3 className="font-mono text-xs font-bold text-[#1E293B] uppercase tracking-wider border-b border-[#E2E8F0] pb-3">
              Instant Event Estimator
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#1E293B] uppercase mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Abigail Wee"
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2.5 outline-none rounded-xs focus:border-[#3B82F6]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#1E293B] uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="abigail@example.com"
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2.5 outline-none rounded-xs focus:border-[#3B82F6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#1E293B] uppercase mb-1">Guest Capacity</label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2.5 outline-none rounded-xs font-bold"
                  >
                    <option value="50">50 Guests</option>
                    <option value="100">100 Guests</option>
                    <option value="200">200 Guests</option>
                    <option value="300">300+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-[#1E293B] uppercase mb-1">Service Hours</label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2.5 outline-none rounded-xs font-bold"
                  >
                    <option value="2">2 Hours Service</option>
                    <option value="3">3 Hours Service</option>
                    <option value="4">4 Hours Service</option>
                    <option value="6">Full Day (6 Hours)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#1E293B] uppercase mb-1">Event Category</label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2.5 outline-none rounded-xs font-bold"
                  >
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Private Party">Private Party</option>
                    <option value="Exhibition / Pop-up">Exhibition / Pop-up</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-[#1E293B] uppercase mb-1">Target Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-2.5 outline-none rounded-xs font-bold"
                  />
                </div>
              </div>

              {/* Estimate Calculation */}
              <div className="p-4 bg-[#EFF6FF] border border-[#BFDBFE] rounded-xs flex justify-between items-center text-xs font-bold text-[#1E293B]">
                <span>CALCULATED ESTIMATE:</span>
                <span className="text-[#3B82F6] font-mono text-lg">
                  ~${estimatedCost.toFixed(2)} SGD
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-mono text-xs uppercase tracking-widest font-bold py-3.5 rounded-xs transition-colors cursor-pointer shadow-xs"
              >
                Submit Booking Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
