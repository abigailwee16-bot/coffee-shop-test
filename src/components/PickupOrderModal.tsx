import React, { useState } from 'react';
import { OUTLETS, PICKUP_BEVERAGES } from '../data/mockData';
import { Outlet, PickupBeverage } from '../types';

interface PickupOrderModalProps {
  isOpen: boolean;
  initialOutlet?: Outlet | null;
  onClose: () => void;
  onAddCustomizedBeverageToCart: (
    beverage: PickupBeverage,
    customization: {
      milk: string;
      temperature: 'Hot' | 'Iced';
      shot: string;
      sweetness: string;
      pickupOutlet: string;
      pickupTime: string;
    }
  ) => void;
  onShowToast: (msg: string) => void;
}

export const PickupOrderModal: React.FC<PickupOrderModalProps> = ({
  isOpen,
  initialOutlet,
  onClose,
  onAddCustomizedBeverageToCart,
  onShowToast,
}) => {
  const [selectedOutlet, setSelectedOutlet] = useState<Outlet>(initialOutlet || OUTLETS[0]);
  const [selectedBeverage, setSelectedBeverage] = useState<PickupBeverage>(PICKUP_BEVERAGES[0]);

  // Customization options
  const [temperature, setTemperature] = useState<'Hot' | 'Iced'>('Iced');
  const [milk, setMilk] = useState('Fresh Whole Milk');
  const [shot, setShot] = useState('Standard Double Shot');
  const [sweetness, setSweetness] = useState('100% Regular');
  const [pickupTime, setPickupTime] = useState('ASAP (10-15 mins)');

  if (!isOpen) return null;

  const extraCost =
    (milk.includes('Oat') || milk.includes('Soy') ? 1.0 : 0) +
    (shot.includes('Triple') ? 1.5 : 0);

  const totalPrice = selectedBeverage.price + extraCost;

  const handleAddToCart = () => {
    onAddCustomizedBeverageToCart(selectedBeverage, {
      milk,
      temperature,
      shot,
      sweetness,
      pickupOutlet: selectedOutlet.name,
      pickupTime,
    });
    onClose();
    onShowToast(`Added ${selectedBeverage.name} for Pickup at ${selectedOutlet.name}!`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in font-sans">
      <div className="bg-white w-full max-w-2xl rounded-xs shadow-2xl overflow-hidden border border-[#E2E8F0] relative my-8">
        {/* Header */}
        <div className="p-5 bg-[#0F172A] border-b border-[#334155] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#3B82F6] text-2xl">takeout_dining</span>
            <div>
              <h2 className="font-mono text-sm uppercase tracking-wider font-bold text-white">ORDER AHEAD FOR OUTLET PICKUP</h2>
              <p className="text-xs text-[#94A3B8]">
                Freshly extracted espresso beverages calibrated upon arrival
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1 text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[80vh] space-y-6">
          {/* Outlet Selection */}
          <div>
            <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#3B82F6] mb-2">
              1. SELECT PICKUP LOCATION:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono">
              {OUTLETS.map((o) => (
                <button
                  key={o.id}
                  onClick={() => setSelectedOutlet(o)}
                  className={`p-2.5 rounded-xs border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    selectedOutlet.id === o.id
                      ? 'border-[#3B82F6] bg-[#EFF6FF] text-[#3B82F6] font-bold'
                      : 'border-[#CBD5E1] bg-[#F8FAFC] text-[#64748B] hover:border-[#3B82F6]'
                  }`}
                >
                  <span className="text-xs font-bold line-clamp-1">{o.name}</span>
                  <span className="text-[10px] text-[#22C55E] mt-1 uppercase">{o.status}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Beverage Selection */}
          <div>
            <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#3B82F6] mb-2">
              2. SELECT BEVERAGE:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
              {PICKUP_BEVERAGES.map((b) => (
                <div
                  key={b.id}
                  onClick={() => setSelectedBeverage(b)}
                  className={`p-3 rounded-xs border flex gap-3 items-center cursor-pointer transition-all ${
                    selectedBeverage.id === b.id
                      ? 'border-[#3B82F6] bg-[#EFF6FF] text-[#3B82F6]'
                      : 'border-[#E2E8F0] bg-white hover:border-[#3B82F6]'
                  }`}
                >
                  <img alt={b.name} src={b.image} className="w-14 h-14 object-cover rounded-xs bg-[#0F172A] shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[#1E293B]">{b.name}</h4>
                    <p className="text-[11px] text-[#64748B] line-clamp-1">{b.description}</p>
                    <span className="font-mono text-xs font-bold text-[#3B82F6]">${b.price.toFixed(2)} SGD</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Beverage Customization */}
          {selectedBeverage.customizable && (
            <div className="bg-[#F8FAFC] p-4 rounded-xs border border-[#E2E8F0] space-y-4 font-mono">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6]">
                3. CUSTOMIZE RECIPE &amp; TEMPERATURE
              </span>

              {/* Temp */}
              <div>
                <label className="block text-[11px] font-bold text-[#1E293B] mb-1 uppercase">Temperature:</label>
                <div className="flex gap-2 text-xs">
                  {(['Iced', 'Hot'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTemperature(t)}
                      className={`flex-1 py-1.5 rounded-xs font-bold border transition-colors cursor-pointer ${
                        temperature === t
                          ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                          : 'bg-white text-[#64748B] border-[#CBD5E1]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Milk */}
              <div>
                <label className="block text-[11px] font-bold text-[#1E293B] mb-1 uppercase">Milk Choice:</label>
                <div className="grid grid-cols-3 gap-2 text-[11px]">
                  {['Fresh Whole Milk', 'Oat Milk (+ $1.00)', 'Soy Milk (+ $1.00)'].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMilk(m)}
                      className={`py-1.5 px-2 rounded-xs font-bold border text-center transition-colors cursor-pointer ${
                        milk === m
                          ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                          : 'bg-white text-[#64748B] border-[#CBD5E1]'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Shot */}
              <div>
                <label className="block text-[11px] font-bold text-[#1E293B] mb-1 uppercase">Espresso Strength:</label>
                <div className="flex gap-2 text-[11px]">
                  {['Standard Double Shot', 'Triple Shot (+ $1.50)'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setShot(s)}
                      className={`flex-1 py-1.5 rounded-xs font-bold border transition-colors cursor-pointer ${
                        shot === s
                          ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                          : 'bg-white text-[#64748B] border-[#CBD5E1]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sweetness */}
              <div>
                <label className="block text-[11px] font-bold text-[#1E293B] mb-1 uppercase">Sweetness Level:</label>
                <div className="flex gap-2 text-[11px]">
                  {['100% Regular', '50% Less Sweet', '0% No Sugar'].map((sw) => (
                    <button
                      key={sw}
                      onClick={() => setSweetness(sw)}
                      className={`flex-1 py-1.5 rounded-xs font-bold border transition-colors cursor-pointer ${
                        sweetness === sw
                          ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                          : 'bg-white text-[#64748B] border-[#CBD5E1]'
                      }`}
                    >
                      {sw}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Pickup Time Slot */}
          <div className="font-mono">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#3B82F6] mb-1">
              4. PICKUP TIMETABLE SLOT:
            </label>
            <select
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-xs p-2 text-xs font-bold text-[#1E293B]"
            >
              <option value="ASAP (10-15 mins)">ASAP (Ready in 10-15 mins)</option>
              <option value="12:00 PM">12:00 PM Pickup</option>
              <option value="12:30 PM">12:30 PM Pickup</option>
              <option value="1:00 PM">1:00 PM Pickup</option>
              <option value="2:30 PM">2:30 PM Pickup</option>
              <option value="4:00 PM">4:00 PM Pickup</option>
            </select>
          </div>

          {/* Summary & Add Button */}
          <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-3 font-mono">
            <div className="flex justify-between items-center text-xs font-bold text-[#1E293B]">
              <span>PICKUP @ {selectedOutlet.name}</span>
              <span className="text-[#3B82F6] font-extrabold text-base">
                ${totalPrice.toFixed(2)} SGD
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-mono text-xs uppercase tracking-widest font-bold py-3.5 rounded-xs transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
              <span>Add Drink to Pickup Order • ${totalPrice.toFixed(2)} SGD</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
