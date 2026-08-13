import React, { useState } from 'react';
import { OUTLETS } from '../data/mockData';

interface ContactViewProps {
  onShowToast: (msg: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    outlet: OUTLETS[0].name,
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      onShowToast(`Thank you ${formData.name}! Your message has been sent to our roastery team.`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        outlet: OUTLETS[0].name,
        message: '',
      });
    }
  };

  return (
    <div className="w-full bg-[#F0F2F5] min-h-screen py-12 font-sans">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="bg-white border border-[#E2E8F0] p-8 lg:p-10 rounded-xs shadow-xs space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-[#3B82F6]">
            <span className="w-2 h-2 bg-[#3B82F6]"></span>
            <span className="uppercase tracking-widest font-bold">CONTACT &amp; OUTLET DIRECTORY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1E293B] tracking-tight">
            Get in Touch with Tiong Hoe Roastery
          </h1>
          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl leading-relaxed">
            Have questions about our current micro-lot roasts, Nespresso capsule compatibility, coffee cart bookings, or store operating hours? Send us a message or visit an outlet.
          </p>
        </div>

        {/* Contact Form & Outlet Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#E2E8F0] p-6 lg:p-8 rounded-xs shadow-xs space-y-6">
            <div className="border-b border-[#E2E8F0] pb-4">
              <h2 className="text-xl font-extrabold text-[#1E293B]">Send Us a Direct Message</h2>
              <p className="text-xs text-[#64748B] mt-1">Our support team responds within 24 operational hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-mono text-xs font-bold uppercase text-[#1E293B]">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Tan"
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-3 text-xs text-[#1E293B] rounded-xs focus:border-[#3B82F6] outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-xs font-bold uppercase text-[#1E293B]">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-3 text-xs text-[#1E293B] rounded-xs focus:border-[#3B82F6] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-mono text-xs font-bold uppercase text-[#1E293B]">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+65 9123 4567"
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-3 text-xs text-[#1E293B] rounded-xs focus:border-[#3B82F6] outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-xs font-bold uppercase text-[#1E293B]">Inquiry Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-3 text-xs text-[#1E293B] rounded-xs focus:border-[#3B82F6] outline-none"
                  >
                    <option>General Inquiry</option>
                    <option>Online Order Status</option>
                    <option>Coffee Cart Event Booking</option>
                    <option>Wholesale Partnership</option>
                    <option>Barista Workshops</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-mono text-xs font-bold uppercase text-[#1E293B]">Preferred Outlet</label>
                <select
                  value={formData.outlet}
                  onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-3 text-xs text-[#1E293B] rounded-xs focus:border-[#3B82F6] outline-none"
                >
                  {OUTLETS.map((o) => (
                    <option key={o.id} value={o.name}>{o.name} ({o.shortAddress})</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-mono text-xs font-bold uppercase text-[#1E293B]">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we assist you with specialty coffee?"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] p-3 text-xs text-[#1E293B] rounded-xs focus:border-[#3B82F6] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-mono text-xs uppercase tracking-widest font-bold py-3.5 px-6 rounded-xs transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
              >
                <span>Submit Message</span>
                <span className="material-symbols-outlined text-[16px]">send</span>
              </button>
            </form>
          </div>

          {/* Quick Contact Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0F172A] text-white p-6 border border-[#334155] rounded-xs space-y-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#3B82F6] font-bold border-b border-[#334155] pb-3">
                <span className="material-symbols-outlined text-[20px]">headset_mic</span>
                <span>ROASTERY HEADQUARTERS</span>
              </div>
              <div className="space-y-2 text-[#94A3B8]">
                <p><strong className="text-white">Main Roastery:</strong> 170 Stirling Rd, #01-1136, Singapore 140170</p>
                <p><strong className="text-white">Customer Hotline:</strong> +65 6474 5442</p>
                <p><strong className="text-white">Email:</strong> support@tionghoe.com</p>
                <p><strong className="text-white">Operational Hours:</strong> Mon-Fri 10:00 - 17:00 SGT</p>
              </div>
            </div>

            <div className="bg-white border border-[#E2E8F0] p-6 rounded-xs space-y-4">
              <h3 className="font-mono text-xs font-bold text-[#1E293B] uppercase tracking-wider border-b border-[#E2E8F0] pb-2">
                4 Singapore Locations
              </h3>
              <div className="space-y-3 font-sans text-xs">
                {OUTLETS.map((o) => (
                  <div key={o.id} className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xs space-y-1">
                    <div className="flex justify-between items-center font-bold text-[#1E293B]">
                      <span>{o.name}</span>
                      <span className="font-mono text-[10px] text-[#22C55E] bg-[#DCFCE7] px-1.5 py-0.5">{o.status}</span>
                    </div>
                    <p className="text-[#64748B]">{o.address}</p>
                    <p className="font-mono text-[10px] text-[#3B82F6]">MRT: {o.mrtAccess}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
