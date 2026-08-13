import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/mockData';
import { Product, Category } from '../types';

interface ShopViewProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ShopView: React.FC<ShopViewProps> = ({ onSelectProduct, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [roastFilter, setRoastFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Products' },
    { id: 'capsules', label: 'Coffee Capsules' },
    { id: 'beans', label: 'Whole Beans' },
    { id: 'drip', label: 'Drip Bags' },
    { id: 'gear', label: 'Brewing Gear' },
    { id: 'bundles', label: 'Bundles & Gifts' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesRoast = roastFilter === 'all' || p.roastLevel === roastFilter;
      return matchesCategory && matchesRoast;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [selectedCategory, roastFilter, sortBy]);

  return (
    <div className="w-full bg-[#F0F2F5] min-h-screen py-12 font-sans">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 space-y-8">
        {/* Banner */}
        <div className="bg-[#0F172A] border border-[#334155] text-white p-8 lg:p-10 rounded-xs shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-xl space-y-2 font-sans">
            <div className="flex items-center gap-2 font-mono text-xs text-[#3B82F6]">
              <span className="w-2 h-2 bg-[#3B82F6]"></span>
              <span className="uppercase tracking-widest font-bold">ROASTERY DIRECT CATALOG</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Specialty Coffee Catalog
            </h1>
            <p className="text-sm text-[#94A3B8]">
              Small-batch drum roasted twice weekly in Singapore. Free local shipping above $60 SGD.
            </p>
          </div>
          <div className="flex gap-3 font-mono text-xs font-bold uppercase">
            <span className="bg-[#1E293B] text-[#22C55E] px-3.5 py-2 border border-[#334155]">
              STATUS: FRESH BATCH READY
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-[#E2E8F0] pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer rounded-xs border ${
                selectedCategory === cat.id
                  ? 'bg-[#3B82F6] text-white border-[#3B82F6] shadow-xs'
                  : 'bg-white text-[#1E293B] border-[#E2E8F0] hover:border-[#CBD5E1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filters & Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xs border border-[#E2E8F0] shadow-xs font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#1E293B] uppercase">Roast Profile:</span>
            <select
              value={roastFilter}
              onChange={(e) => setRoastFilter(e.target.value)}
              className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-xs px-3 py-1.5 text-xs text-[#1E293B] outline-none"
            >
              <option value="all">All Roast Profiles</option>
              <option value="Light">Light Roast</option>
              <option value="Medium">Medium Roast</option>
              <option value="Medium-Dark">Medium-Dark Roast</option>
            </select>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="font-bold text-[#1E293B] uppercase">Sort Order:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-xs px-3 py-1.5 text-xs text-[#1E293B] outline-none"
            >
              <option value="featured">Featured Roasts</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xs border border-[#E2E8F0] font-sans">
            <span className="material-symbols-outlined text-4xl text-[#94A3B8] mb-2">local_cafe</span>
            <h3 className="text-lg font-bold text-[#1E293B]">No products found matching query</h3>
            <p className="text-xs text-[#64748B] mt-1">Try clearing filters to explore all available roasts.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setRoastFilter('all');
              }}
              className="mt-4 bg-[#3B82F6] text-white font-mono text-xs font-bold uppercase tracking-wider py-2 px-5 rounded-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
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
                  {product.roastLevel && (
                    <span className="absolute top-3 right-3 bg-[#1E293B] border border-[#334155] text-white font-mono text-[10px] uppercase font-bold px-2 py-0.5">
                      {product.roastLevel}
                    </span>
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
        )}
      </div>
    </div>
  );
};
