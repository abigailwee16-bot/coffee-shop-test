export type Category = 'all' | 'capsules' | 'beans' | 'drip' | 'gear' | 'bundles';

export type GrindOption = 'whole_bean' | 'espresso' | 'filter' | 'aeropress' | 'french_press';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  currency: string;
  image: string;
  description: string;
  shortDescription?: string;
  badge?: string;
  roastLevel?: 'Light' | 'Medium-Light' | 'Medium' | 'Medium-Dark' | 'Dark';
  origin?: string;
  altitude?: string;
  process?: string;
  variety?: string;
  tastingNotes?: string[];
  isCapsule?: boolean;
  capsuleCount?: number;
  compatibleWith?: string;
  rating?: number;
  reviewsCount?: number;
  inStock?: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedGrind?: GrindOption;
  customization?: {
    milk?: string;
    temperature?: 'Hot' | 'Iced';
    shot?: string;
    sweetness?: string;
    pickupOutlet?: string;
    pickupTime?: string;
  };
}

export interface Outlet {
  id: string;
  name: string;
  address: string;
  shortAddress: string;
  image: string;
  operatingHours: string;
  phone: string;
  mrtAccess: string;
  status: 'Open Now' | 'Opening Soon' | 'Closed';
  isNew?: boolean;
}

export interface PickupBeverage {
  id: string;
  name: string;
  category: 'Espresso' | 'Hand Pour' | 'Non-Coffee' | 'Beans & Gear';
  price: number;
  description: string;
  image: string;
  customizable: boolean;
  popular?: boolean;
}

export interface CoffeeGuide {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  readTime: string;
  content: {
    intro: string;
    points: { headline: string; description: string }[];
    tip: string;
  };
}

export type ActiveTab = 'shop' | 'coffee-cart' | 'wholesale' | 'about' | 'contact' | 'home';
