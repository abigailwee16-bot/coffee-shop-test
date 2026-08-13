import React, { useState } from 'react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onShowToast }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onShowToast(`Subscribed! Welcome to Tiong Hoe Specialty Coffee.`);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#0F172A] border-t border-[#334155] pt-16 pb-8 text-white">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Col 1 */}
        <div className="space-y-4 font-sans">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#3B82F6] flex items-center justify-center font-mono font-bold text-xs">
              TH
            </div>
            <span className="font-extrabold text-base tracking-tight text-white">
              TIONG HOE COFFEE
            </span>
          </div>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Pioneering artisanal specialty coffee roasting in Singapore since 1960. Artisanal micro-lots, Nespresso capsules, and wholesale programs.
          </p>
          <div className="font-mono text-[11px] text-[#22C55E]">
            SYSTEM STATUS: OPERATIONAL
          </div>
        </div>

        {/* Col 2 */}
        <div className="font-sans">
          <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-4">
            CATEGORIES
          </h4>
          <ul className="space-y-2 text-xs text-[#94A3B8]">
            <li
              onClick={() => {
                setActiveTab('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white hover:underline cursor-pointer transition-colors"
            >
              Specialty Coffee Beans
            </li>
            <li
              onClick={() => {
                setActiveTab('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white hover:underline cursor-pointer transition-colors"
            >
              Nespresso Capsules
            </li>
            <li
              onClick={() => {
                setActiveTab('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white hover:underline cursor-pointer transition-colors"
            >
              Drip Bag Filters
            </li>
            <li
              onClick={() => {
                setActiveTab('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white hover:underline cursor-pointer transition-colors"
            >
              Espresso Gear &amp; Grinders
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="font-sans">
          <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-4">
            NAVIGATION &amp; HELP
          </h4>
          <ul className="space-y-2 text-xs text-[#94A3B8]">
            <li
              onClick={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white hover:underline cursor-pointer transition-colors"
            >
              About Our Heritage (1960s)
            </li>
            <li
              onClick={() => {
                setActiveTab('coffee-cart');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white hover:underline cursor-pointer transition-colors"
            >
              Live Mobile Coffee Cart
            </li>
            <li
              onClick={() => {
                setActiveTab('wholesale');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white hover:underline cursor-pointer transition-colors"
            >
              Cafe Wholesale Inquiry
            </li>
            <li
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white hover:underline cursor-pointer transition-colors"
            >
              Contact Roastery Team
            </li>
          </ul>
        </div>

        {/* Col 4 */}
        <div className="font-sans">
          <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-4">
            ROASTERY DISPATCH NEWSLETTER
          </h4>
          <p className="text-xs text-[#94A3B8] mb-3">
            Subscribe for fresh roast drop notifications and barista guides.
          </p>
          <form onSubmit={handleSubscribe} className="flex border border-[#334155] bg-[#1E293B] p-1 rounded-xs">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="barista@example.com"
              className="bg-transparent w-full outline-none font-mono text-xs text-white placeholder:text-[#64748B] px-2"
              required
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-3 py-1.5 font-mono text-xs font-bold uppercase cursor-pointer"
            >
              JOIN
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 pt-6 border-t border-[#334155] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#64748B]">
        <p>© 2026 TIONG HOE SPECIALTY COFFEE. GEOMETRIC BALANCE THEME.</p>
        <div className="flex gap-6">
          <span
            onClick={() => onShowToast('Tiong Hoe Privacy Policy: Your data is protected.')}
            className="hover:text-white cursor-pointer"
          >
            Privacy Policy
          </span>
          <span
            onClick={() => onShowToast('Terms of Service: Freshness guaranteed.')}
            className="hover:text-white cursor-pointer"
          >
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};
