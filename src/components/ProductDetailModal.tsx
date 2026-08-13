import React, { useState } from 'react';
import { Product, GrindOption } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, grind?: GrindOption) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedGrind, setSelectedGrind] = useState<GrindOption>('whole_bean');

  if (!product) return null;

  const grindOptions: { id: GrindOption; label: string; desc: string }[] = [
    { id: 'whole_bean', label: 'Whole Bean', desc: 'Grind fresh at home' },
    { id: 'espresso', label: 'Espresso', desc: 'Fine grind for portafilters' },
    { id: 'filter', label: 'V60 / Filter', desc: 'Medium-fine pour-over grind' },
    { id: 'aeropress', label: 'Aeropress', desc: 'Medium grind' },
    { id: 'french_press', label: 'French Press', desc: 'Coarse steep grind' },
  ];

  const handleAdd = () => {
    onAddToCart(product, quantity, product.category === 'beans' ? selectedGrind : undefined);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in font-sans">
      <div className="bg-white w-full max-w-3xl rounded-xs shadow-2xl overflow-hidden border border-[#E2E8F0] relative my-8">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-[#0F172A] border border-[#334155] text-white hover:bg-[#3B82F6] transition-colors flex items-center justify-center cursor-pointer rounded-xs"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative bg-[#0F172A] h-72 md:h-full min-h-[300px]">
            <img alt={product.name} src={product.image} className="w-full h-full object-cover" />
            {product.badge && (
              <span className="absolute top-4 left-4 font-mono bg-[#3B82F6] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-xs">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            <div className="space-y-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#3B82F6]">
                  {product.category}
                </span>
                <h2 className="text-2xl font-black text-[#1E293B] mt-1">
                  {product.name}
                </h2>
                <div className="flex items-center gap-3 mt-2 font-mono">
                  <span className="text-xl font-bold text-[#3B82F6]">
                    ${product.price.toFixed(2)} {product.currency}
                  </span>
                  {product.rating && (
                    <div className="flex items-center text-xs font-bold text-[#1E293B] gap-1 bg-[#F1F5F9] border border-[#CBD5E1] px-2 py-0.5 rounded-xs">
                      <span className="material-symbols-outlined text-[14px] text-[#EAB308]">star</span>
                      <span>{product.rating}</span>
                      <span className="text-[#64748B]">({product.reviewsCount})</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-xs text-[#64748B] leading-relaxed">
                {product.description}
              </p>

              {/* Specialty Origin Tag Grid */}
              {(product.origin || product.tastingNotes) && (
                <div className="p-4 bg-[#F8FAFC] rounded-xs border border-[#E2E8F0] space-y-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#3B82F6]">
                    SPECIALTY SPECIFICATION
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {product.origin && (
                      <div>
                        <span className="text-[#64748B] block text-[10px] uppercase">Origin</span>
                        <strong className="text-[#1E293B]">{product.origin}</strong>
                      </div>
                    )}
                    {product.altitude && (
                      <div>
                        <span className="text-[#64748B] block text-[10px] uppercase">Elevation</span>
                        <strong className="text-[#1E293B]">{product.altitude}</strong>
                      </div>
                    )}
                    {product.process && (
                      <div>
                        <span className="text-[#64748B] block text-[10px] uppercase">Process</span>
                        <strong className="text-[#1E293B]">{product.process}</strong>
                      </div>
                    )}
                    {product.roastLevel && (
                      <div>
                        <span className="text-[#64748B] block text-[10px] uppercase">Roast Profile</span>
                        <strong className="text-[#3B82F6]">{product.roastLevel}</strong>
                      </div>
                    )}
                  </div>

                  {product.tastingNotes && (
                    <div className="pt-2 border-t border-[#E2E8F0] flex flex-wrap gap-1.5 font-mono">
                      {product.tastingNotes.map((note) => (
                        <span
                          key={note}
                          className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#3B82F6] text-[10px] font-bold px-2 py-0.5 rounded-xs uppercase"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Grind Selector for Beans */}
              {product.category === 'beans' && (
                <div className="space-y-2 font-mono">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E293B]">
                    SELECT GRIND PROFILE:
                  </label>
                  <div className="grid grid-cols-1 gap-1.5">
                    {grindOptions.map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setSelectedGrind(g.id)}
                        className={`p-2.5 rounded-xs border text-left flex justify-between items-center transition-all cursor-pointer ${
                          selectedGrind === g.id
                            ? 'border-[#3B82F6] bg-[#EFF6FF] font-bold text-[#3B82F6]'
                            : 'border-[#CBD5E1] bg-white text-[#64748B] hover:border-[#3B82F6]'
                        }`}
                      >
                        <span className="text-xs font-bold">{g.label}</span>
                        <span className="text-[10px] text-[#94A3B8]">{g.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="flex items-center gap-4 font-mono">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E293B]">
                  QUANTITY:
                </span>
                <div className="flex items-center border border-[#CBD5E1] rounded-xs bg-[#F8FAFC]">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1 text-sm font-bold text-[#64748B] hover:bg-white"
                  >
                    -
                  </button>
                  <span className="px-4 font-bold text-sm text-[#1E293B]">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1 text-sm font-bold text-[#64748B] hover:bg-white"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-5 border-t border-[#E2E8F0] mt-6">
              <button
                onClick={handleAdd}
                className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-mono text-xs uppercase tracking-widest font-bold py-3.5 rounded-xs transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                <span>Add to Cart • ${(product.price * quantity).toFixed(2)} SGD</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
