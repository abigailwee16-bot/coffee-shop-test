import React, { useState } from 'react';
import { CartItem, GrindOption } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onShowToast: (msg: string) => void;
}

const GRIND_LABELS: Record<GrindOption, string> = {
  whole_bean: 'Whole Bean',
  espresso: 'Espresso',
  filter: 'V60 / Filter',
  aeropress: 'Aeropress',
  french_press: 'French Press',
};

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onShowToast,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isCheckoutSubmitted, setIsCheckoutSubmitted] = useState(false);
  const [fulfillmentMethod, setFulfillmentMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [pickupLocation, setPickupLocation] = useState('Novena Square 2');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 60;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingFee = subtotal > 0 && !isFreeShipping && fulfillmentMethod === 'delivery' ? 5.00 : 0;
  const total = Math.max(0, subtotal - discount + shippingFee);

  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'HERITAGE10') {
      const disc = subtotal * 0.1;
      setDiscount(disc);
      onShowToast('Promo code HERITAGE10 applied! 10% discount applied.');
    } else {
      onShowToast('Invalid promo code. Try "HERITAGE10" for 10% off.');
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsCheckoutSubmitted(true);
  };

  const handleCompleteOrder = () => {
    setIsCheckoutSubmitted(false);
    onClearCart();
    onClose();
    onShowToast('Order placed successfully! Confirmation email & SMS sent.');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
      ></div>

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#E2E8F0]">
          {/* Header */}
          <div className="p-5 bg-[#0F172A] border-b border-[#334155] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#3B82F6] text-[20px]">shopping_bag</span>
              <h2 className="font-mono text-sm font-bold uppercase tracking-wider text-white">SHOPPING CART</h2>
              <span className="font-mono text-xs bg-[#3B82F6] text-white px-2 py-0.5 rounded-xs font-bold">
                {cart.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {!isCheckoutSubmitted ? (
            <>
              {/* Free Shipping Progress */}
              {subtotal > 0 && (
                <div className="px-5 py-3 bg-[#EFF6FF] border-b border-[#BFDBFE]">
                  <div className="flex justify-between items-center text-xs font-mono mb-1.5 text-[#1E293B]">
                    {isFreeShipping ? (
                      <span className="font-bold text-[#22C55E] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        FREE SG SHIPPING UNLOCKED
                      </span>
                    ) : (
                      <span>
                        ADD <strong className="font-bold text-[#3B82F6]">${remainingForFreeShipping.toFixed(2)} SGD</strong> MORE FOR FREE SHIPPING
                      </span>
                    )}
                  </div>
                  <div className="w-full bg-[#DBEAFE] h-1.5 rounded-xs overflow-hidden">
                    <div
                      className="bg-[#3B82F6] h-full transition-all duration-300"
                      style={{ width: `${freeShippingProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#F8FAFC]">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 gap-4">
                    <div className="w-14 h-14 bg-white border border-[#E2E8F0] flex items-center justify-center text-[#94A3B8]">
                      <span className="material-symbols-outlined text-3xl">local_cafe</span>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-[#1E293B]">Your cart is currently empty</h3>
                      <p className="text-xs text-[#64748B] mt-1">
                        Explore our specialty coffee beans, Nespresso capsules, and brewing gear.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="mt-2 bg-[#3B82F6] text-white font-mono text-xs uppercase tracking-widest font-bold py-2.5 px-5 rounded-xs cursor-pointer hover:bg-[#2563EB]"
                    >
                      Explore Catalog
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 p-3 bg-white border border-[#E2E8F0] rounded-xs shadow-xs relative"
                    >
                      <img
                        alt={item.product.name}
                        className="w-16 h-16 object-cover bg-[#0F172A] border border-[#CBD5E1] shrink-0 rounded-xs"
                        src={item.product.image}
                      />
                      <div className="flex-1 flex flex-col justify-between pr-4">
                        <div>
                          <h4 className="font-bold text-sm text-[#1E293B] line-clamp-1">
                            {item.product.name}
                          </h4>
                          {item.selectedGrind && (
                            <span className="inline-block text-[10px] font-mono bg-[#EFF6FF] text-[#3B82F6] px-1.5 py-0.5 rounded-xs font-bold uppercase tracking-wider mt-1 border border-[#BFDBFE]">
                              GRIND: {GRIND_LABELS[item.selectedGrind]}
                            </span>
                          )}
                          {item.customization?.pickupOutlet && (
                            <p className="text-[10px] font-mono text-[#22C55E] font-bold mt-1">
                              PICKUP: {item.customization.pickupOutlet}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-[#CBD5E1] rounded-xs bg-white font-mono text-xs">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="px-2 py-0.5 text-[#64748B] hover:bg-[#F1F5F9]"
                            >
                              -
                            </button>
                            <span className="px-2.5 font-bold text-[#1E293B]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="px-2 py-0.5 text-[#64748B] hover:bg-[#F1F5F9]"
                            >
                              +
                            </button>
                          </div>

                          <span className="font-mono font-bold text-xs text-[#3B82F6]">
                            ${(item.product.price * item.quantity).toFixed(2)} SGD
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="absolute top-2 right-2 text-[#94A3B8] hover:text-[#EF4444] p-1"
                        title="Remove"
                      >
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Promo Code & Footer Totals */}
              {cart.length > 0 && (
                <div className="p-5 bg-white border-t border-[#E2E8F0] space-y-4">
                  {/* Fulfillment Toggle */}
                  <div className="flex bg-[#F1F5F9] p-1 rounded-xs border border-[#CBD5E1] text-xs font-mono font-bold uppercase">
                    <button
                      onClick={() => setFulfillmentMethod('delivery')}
                      className={`flex-1 py-1.5 rounded-xs text-center transition-all cursor-pointer ${
                        fulfillmentMethod === 'delivery'
                          ? 'bg-[#0F172A] text-white shadow-xs'
                          : 'text-[#64748B] hover:text-[#1E293B]'
                      }`}
                    >
                      Door Delivery
                    </button>
                    <button
                      onClick={() => setFulfillmentMethod('pickup')}
                      className={`flex-1 py-1.5 rounded-xs text-center transition-all cursor-pointer ${
                        fulfillmentMethod === 'pickup'
                          ? 'bg-[#0F172A] text-white shadow-xs'
                          : 'text-[#64748B] hover:text-[#1E293B]'
                      }`}
                    >
                      Store Pickup
                    </button>
                  </div>

                  {fulfillmentMethod === 'pickup' && (
                    <div className="text-xs font-mono">
                      <label className="block font-bold text-[#1E293B] mb-1 uppercase">
                        Select Pickup Outlet:
                      </label>
                      <select
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-xs p-2 text-xs font-bold text-[#1E293B]"
                      >
                        <option value="Novena Square 2">Novena Square 2 (#B1-113)</option>
                        <option value="One Raffles Place">One Raffles Place (#01-11)</option>
                        <option value="SBF Center">SBF Center (#01-02)</option>
                        <option value="one-north Galaxis">one-north Galaxis (#01-28)</option>
                      </select>
                    </div>
                  )}

                  <form onSubmit={handleApplyPromo} className="flex gap-2 font-mono">
                    <input
                      type="text"
                      placeholder="PROMO CODE (HERITAGE10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xs px-3 py-1.5 text-xs outline-none focus:border-[#3B82F6]"
                    />
                    <button
                      type="submit"
                      className="bg-[#1E293B] text-white text-xs uppercase font-bold px-3 py-1.5 rounded-xs hover:bg-[#0F172A] cursor-pointer"
                    >
                      APPLY
                    </button>
                  </form>

                  <div className="space-y-1.5 font-mono text-xs text-[#64748B] pt-2 border-t border-[#E2E8F0]">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-bold text-[#1E293B]">${subtotal.toFixed(2)} SGD</span>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-[#22C55E] font-bold">
                        <span>Discount (HERITAGE10)</span>
                        <span>-${discount.toFixed(2)} SGD</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span>Fulfillment</span>
                      <span>
                        {fulfillmentMethod === 'pickup' || isFreeShipping ? (
                          <strong className="text-[#22C55E]">FREE</strong>
                        ) : (
                          `$${shippingFee.toFixed(2)} SGD`
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm font-bold text-[#1E293B] pt-2 border-t border-[#E2E8F0]">
                      <span>TOTAL DUE</span>
                      <span className="text-[#3B82F6] font-extrabold">${total.toFixed(2)} SGD</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-mono text-xs uppercase tracking-widest font-bold py-3.5 rounded-xs transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Checkout</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Order Receipt View */
            <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-between font-sans">
              <div className="space-y-6">
                <div className="text-center p-6 bg-[#EFF6FF] rounded-xs border border-[#BFDBFE]">
                  <span className="material-symbols-outlined text-4xl text-[#3B82F6]">check_circle</span>
                  <h3 className="font-extrabold text-xl text-[#1E293B] mt-2">
                    Order Confirmed!
                  </h3>
                  <p className="font-mono text-xs text-[#64748B] mt-1">
                    Receipt Ref: #TH-2026-8942
                  </p>
                </div>

                <div className="bg-[#F8FAFC] p-4 rounded-xs border border-[#E2E8F0] space-y-3 font-mono text-xs">
                  <div className="font-bold text-xs uppercase text-[#1E293B] border-b border-[#E2E8F0] pb-2">
                    Fulfillment Summary
                  </div>
                  <div>
                    <span className="text-[#64748B]">Method: </span>
                    <strong className="uppercase text-[#1E293B]">{fulfillmentMethod}</strong>
                  </div>
                  {fulfillmentMethod === 'pickup' && (
                    <div>
                      <span className="text-[#64748B]">Outlet: </span>
                      <strong className="text-[#1E293B]">{pickupLocation}</strong>
                    </div>
                  )}
                  <div>
                    <span className="text-[#64748B]">Roast Batch: </span>
                    <span className="text-[#22C55E]">Freshly Roasted &amp; Dispatched</span>
                  </div>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="font-bold text-xs uppercase text-[#1E293B]">
                    Items Purchased ({cart.length})
                  </div>
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between py-1 border-b border-[#E2E8F0]">
                      <span className="text-[#1E293B]">{item.quantity}x {item.product.name}</span>
                      <span className="font-bold text-[#3B82F6]">${(item.product.price * item.quantity).toFixed(2)} SGD</span>
                    </div>
                  ))}
                  <div className="flex justify-between font-bold text-sm pt-2 text-[#1E293B]">
                    <span>TOTAL PAID</span>
                    <span className="text-[#3B82F6]">${total.toFixed(2)} SGD</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCompleteOrder}
                className="w-full bg-[#1E293B] text-white font-mono text-xs uppercase tracking-widest font-bold py-3.5 rounded-xs hover:bg-[#0F172A] transition-colors mt-6 cursor-pointer"
              >
                Complete &amp; Return to Catalog
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
