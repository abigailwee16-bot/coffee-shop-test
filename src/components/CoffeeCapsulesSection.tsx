import React from 'react';
import { Product } from '../types';

interface CoffeeCapsulesSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onViewAllCapsules: () => void;
}

export const CoffeeCapsulesSection: React.FC<CoffeeCapsulesSectionProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onViewAllCapsules,
}) => {
  // Filter capsule products
  const capsuleProducts = products.filter((p) => p.category === 'capsules');

  return (
    <section className="w-full bg-[#F0F2F5] py-16 border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Geometric Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 pb-6 border-b border-[#E2E8F0] gap-4">
          <div className="flex flex-col gap-1 max-w-2xl font-sans">
            <div className="flex items-center gap-2 font-mono text-xs text-[#3B82F6]">
              <span className="w-2 h-2 bg-[#3B82F6]"></span>
              <span className="uppercase tracking-widest font-bold">NESPRESSO COMPATIBLE LINE</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#1E293B] tracking-tight">
              Coffee Capsules Collection
            </h2>
            <p className="text-sm text-[#64748B] mt-1 leading-relaxed">
              Precision roasted specialty grade coffee in convenient aluminum capsules. Perfect extraction at the push of a button.
            </p>
          </div>

          <button
            onClick={onViewAllCapsules}
            className="flex items-center gap-2 bg-white border border-[#E2E8F0] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1E293B] hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6] transition-all cursor-pointer shadow-xs shrink-0"
          >
            <span>View All Capsules</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        {/* Geometric Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capsuleProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white border border-[#E2E8F0] hover:border-[#3B82F6] transition-all duration-200 rounded-xs overflow-hidden shadow-xs group"
            >
              <div
                onClick={() => onSelectProduct(product)}
                className="relative w-full aspect-square overflow-hidden bg-[#0F172A] cursor-pointer"
              >
                <img
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  src={product.image}
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#3B82F6] text-white font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs border border-white/20">
                    {product.badge}
                  </span>
                )}
                {product.tastingNotes && (
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
                    {product.tastingNotes.map((note) => (
                      <span
                        key={note}
                        className="bg-[#1E293B]/90 text-white font-mono text-[10px] px-2 py-0.5 border border-[#334155]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col justify-between flex-1 gap-4 font-sans">
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="text-base font-bold text-[#1E293B] hover:text-[#3B82F6] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <span className="font-mono text-sm text-[#3B82F6] font-bold shrink-0">
                      ${product.price.toFixed(2)} SGD
                    </span>
                  </div>

                  {product.shortDescription && (
                    <p className="font-mono text-xs text-[#64748B] mt-1 uppercase tracking-wider">
                      {product.shortDescription}
                    </p>
                  )}
                </div>

                <div className="flex gap-2 pt-3 border-t border-[#E2E8F0] font-mono">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="flex-1 bg-[#1E293B] hover:bg-[#3B82F6] text-white text-xs uppercase tracking-wider font-bold py-2.5 px-3 rounded-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                    <span>Add to Cart</span>
                  </button>
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="bg-[#F8FAFC] hover:bg-[#E2E8F0] text-[#1E293B] border border-[#E2E8F0] text-xs font-bold p-2.5 rounded-xs transition-colors cursor-pointer"
                    title="Quick Details"
                  >
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
