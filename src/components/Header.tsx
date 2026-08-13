import React, { useState } from 'react';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenPickupModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenPickupModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'shop', label: 'Shop' },
    { id: 'coffee-cart', label: 'Coffee Cart' },
    { id: 'wholesale', label: 'Wholesale' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs">
      {/* Geometric Operational Status Top Strip */}
      <div className="bg-[#1E293B] text-white text-[11px] py-1.5 px-4 font-mono border-b border-[#334155]">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
            <span className="tracking-widest uppercase font-medium">ROASTERY ONLINE // 4 SINGAPORE OUTLETS OPERATIONAL</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[#94A3B8] text-[10px]">
            <span>SPECIALTY BATCH #2026-08</span>
            <span>FREE SG SHIPPING &gt;$60</span>
          </div>
        </div>
      </div>

      <div className="h-16 max-w-[1280px] mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo & Brand Name */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 bg-[#3B82F6] flex items-center justify-center text-white font-mono font-bold text-sm tracking-tighter shadow-xs">
            TH
          </div>
          <div>
            <span className="font-sans text-lg text-[#1E293B] font-extrabold tracking-tight block leading-none">
              TIONG HOE
            </span>
            <span className="text-[10px] text-[#64748B] font-mono tracking-widest uppercase block mt-0.5">
              SPECIALTY COFFEE
            </span>
          </div>
        </button>

        {/* Desktop Navigation with Geometric Active Indicator */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all relative cursor-pointer ${
                  isActive
                    ? 'text-[#3B82F6] bg-[#EFF6FF] border-b-2 border-[#3B82F6]'
                    : 'text-[#64748B] hover:text-[#1E293B] hover:bg-[#F8FAFC]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions (Search, Order Pickup, Cart) */}
        <div className="flex items-center gap-3">
          {/* Order Ahead Pickup Quick Trigger */}
          <button
            onClick={onOpenPickupModal}
            className="hidden md:flex items-center gap-2 bg-[#1E293B] hover:bg-[#0F172A] text-white text-xs tracking-wide font-semibold px-3.5 py-2 rounded-xs border border-[#334155] transition-all cursor-pointer shadow-xs"
          >
            <span className="material-symbols-outlined text-[16px] text-[#3B82F6]">takeout_dining</span>
            <span>Order Pickup</span>
          </button>

          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="p-2 text-[#64748B] hover:text-[#1E293B] hover:bg-[#F1F5F9] rounded-xs transition-colors cursor-pointer border border-[#E2E8F0]"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>

          {/* Shopping Bag / Cart */}
          <button
            onClick={onOpenCart}
            aria-label="Shopping Cart"
            className="relative p-2 text-[#64748B] hover:text-[#1E293B] hover:bg-[#F1F5F9] rounded-xs transition-colors cursor-pointer border border-[#E2E8F0]"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#3B82F6] text-white text-[10px] font-mono font-bold w-5 h-5 rounded-xs flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 text-[#64748B] hover:text-[#1E293B] border border-[#E2E8F0]"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E8F0] px-4 py-4 shadow-md">
          <div className="flex flex-col gap-2 font-mono">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left uppercase tracking-wider text-xs font-bold py-2.5 px-3 border border-[#E2E8F0] transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                    : 'text-[#1E293B] hover:bg-[#F8FAFC]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPickupModal();
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-[#1E293B] text-white text-xs font-mono font-bold uppercase tracking-wider py-3 border border-[#334155]"
            >
              <span className="material-symbols-outlined text-[18px] text-[#3B82F6]">takeout_dining</span>
              <span>Order Drinks Ahead For Pickup</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
