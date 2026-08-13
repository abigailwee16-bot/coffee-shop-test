import React, { useState, useMemo } from 'react';
import { PRODUCTS, OUTLETS, COFFEE_GUIDES } from '../data/mockData';
import { Product, Outlet, CoffeeGuide } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (p: Product) => void;
  onSelectOutlet: (o: Outlet) => void;
  onSelectGuide: (g: CoffeeGuide) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectOutlet,
  onSelectGuide,
}) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return { products: [], outlets: [], guides: [] };

    const matchingProducts = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tastingNotes?.some((n) => n.toLowerCase().includes(q))
    );

    const matchingOutlets = OUTLETS.filter(
      (o) =>
        o.name.toLowerCase().includes(q) ||
        o.address.toLowerCase().includes(q) ||
        o.mrtAccess.toLowerCase().includes(q)
    );

    const matchingGuides = COFFEE_GUIDES.filter(
      (g) =>
        g.title.toLowerCase().includes(q) ||
        g.summary.toLowerCase().includes(q)
    );

    return {
      products: matchingProducts,
      outlets: matchingOutlets,
      guides: matchingGuides,
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24 animate-fade-in font-sans">
      <div className="bg-white w-full max-w-2xl rounded-xs shadow-2xl overflow-hidden border border-[#E2E8F0] flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 bg-[#0F172A] border-b border-[#334155] flex items-center gap-3 text-white">
          <span className="material-symbols-outlined text-[#3B82F6] text-2xl">search</span>
          <input
            type="text"
            autoFocus
            placeholder="Search coffee beans, Nespresso capsules, outlets, tasting notes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent font-mono text-sm sm:text-base text-white outline-none placeholder:text-[#94A3B8]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="font-mono text-xs uppercase font-bold text-[#94A3B8] hover:text-white cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Quick Search Suggestions */}
        {!query && (
          <div className="p-6 space-y-3 font-sans">
            <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#3B82F6]">
              POPULAR DIRECTORY SEARCHES
            </span>
            <div className="flex flex-wrap gap-2">
              {['Capsules', 'Smoky Quartz', 'Novena Square 2', 'Yirgacheffe', 'Drip Bags', 'Coffee Buying Guide'].map(
                (term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#3B82F6] hover:bg-[#EFF6FF] transition-colors font-mono text-xs font-bold px-3 py-1.5 rounded-xs text-[#1E293B] cursor-pointer"
                  >
                    {term}
                  </button>
                )
              )}
            </div>
          </div>
        )}

        {/* Search Results Content */}
        {query && (
          <div className="p-6 overflow-y-auto space-y-6">
            {results.products.length === 0 &&
            results.outlets.length === 0 &&
            results.guides.length === 0 ? (
              <div className="text-center py-10 text-[#64748B]">
                <span className="material-symbols-outlined text-4xl mb-2 text-[#CBD5E1]">search_off</span>
                <p className="font-sans text-base font-bold text-[#1E293B]">No results found for "{query}"</p>
                <p className="font-mono text-xs mt-1">Try searching for "Capsules", "Beans", or "Novena"</p>
              </div>
            ) : (
              <>
                {/* Products */}
                {results.products.length > 0 && (
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B82F6] mb-3">
                      PRODUCTS ({results.products.length})
                    </h4>
                    <div className="space-y-2">
                      {results.products.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => {
                            onSelectProduct(p);
                            onClose();
                          }}
                          className="flex items-center gap-4 p-3 rounded-xs hover:bg-[#F8FAFC] cursor-pointer border border-[#E2E8F0] hover:border-[#3B82F6] transition-all"
                        >
                          <img alt={p.name} src={p.image} className="w-12 h-12 object-cover rounded-xs bg-[#0F172A] border border-[#CBD5E1]" />
                          <div className="flex-1">
                            <h5 className="font-bold text-sm text-[#1E293B]">{p.name}</h5>
                            <span className="font-mono text-xs text-[#64748B]">{p.shortDescription}</span>
                          </div>
                          <span className="font-mono font-bold text-xs text-[#3B82F6]">${p.price.toFixed(2)} SGD</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Outlets */}
                {results.outlets.length > 0 && (
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B82F6] mb-3">
                      OUTLETS ({results.outlets.length})
                    </h4>
                    <div className="space-y-2">
                      {results.outlets.map((o) => (
                        <div
                          key={o.id}
                          onClick={() => {
                            onSelectOutlet(o);
                            onClose();
                          }}
                          className="flex items-center gap-4 p-3 rounded-xs hover:bg-[#F8FAFC] cursor-pointer border border-[#E2E8F0] hover:border-[#3B82F6] transition-all"
                        >
                          <img alt={o.name} src={o.image} className="w-12 h-12 object-cover rounded-xs" />
                          <div className="flex-1">
                            <h5 className="font-bold text-sm text-[#1E293B]">{o.name}</h5>
                            <span className="text-xs text-[#64748B]">{o.address}</span>
                          </div>
                          <span className="font-mono text-[10px] bg-[#DCFCE7] text-[#22C55E] px-2 py-0.5 rounded-xs font-bold uppercase">
                            {o.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Guides */}
                {results.guides.length > 0 && (
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B82F6] mb-3">
                      BREWING GUIDES ({results.guides.length})
                    </h4>
                    <div className="space-y-2">
                      {results.guides.map((g) => (
                        <div
                          key={g.id}
                          onClick={() => {
                            onSelectGuide(g);
                            onClose();
                          }}
                          className="flex items-center gap-4 p-3 rounded-xs hover:bg-[#F8FAFC] cursor-pointer border border-[#E2E8F0] hover:border-[#3B82F6] transition-all"
                        >
                          <img alt={g.title} src={g.image} className="w-12 h-12 object-cover rounded-xs" />
                          <div className="flex-1">
                            <h5 className="font-bold text-sm text-[#1E293B]">{g.title}</h5>
                            <span className="text-xs text-[#64748B] line-clamp-1">{g.summary}</span>
                          </div>
                          <span className="font-mono text-xs text-[#3B82F6] font-bold">Read</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
