// ─── Product Types ──────────────────────────────────────────────

export type ProductCategory = "cakes" | "cupcakes" | "pastries" | "ice-cream";

export type Occasion =
  | "birthday"
  | "graduation"
  | "valentines"
  | "wedding"
  | "ruracio"
  | "baby-shower"
  | "custom";

export type CakeFlavorTier = "base" | "signature" | "death-by-chocolate" | "deluxe" | "premium" | "adult";

export type CakeSize = "0.5kg" | "1kg" | "1.5kg" | "2kg" | "3kg" | "4kg" | "5kg";

export interface CakePricing {
  tier: CakeFlavorTier;
  prices: Record<CakeSize, number>;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  startingPrice?: number;
  flavorTier?: CakeFlavorTier;
  occasions?: Occasion[];
  options?: {
    sizes?: CakeSize[];
    customText?: boolean;
    eggPreference?: boolean;
    alcoholPreference?: boolean;
  };
}

// ─── Category Types ─────────────────────────────────────────────

export interface Category {
  id: ProductCategory;
  name: string;
  headline: string;
  description: string;
  image: string;
  cta: string;
  ctaLink: string;
}

// ─── Occasion Types ─────────────────────────────────────────────

export interface OccasionData {
  id: Occasion;
  name: string;
  headline: string;
  description: string;
  cta: string;
  image: string;
}

// ─── Order Types ────────────────────────────────────────────────

export type EggPreference = "with-eggs" | "eggless" | "no-preference";
export type AlcoholPreference = "with-alcohol" | "without-alcohol" | "no-preference";

export interface CakeOrderFormData {
  productId: string;
  productName: string;
  category: "cakes";
  size: CakeSize;
  quantity: number;
  occasion?: Occasion;
  customText?: string;
  eggPreference?: EggPreference;
  alcoholPreference?: AlcoholPreference;
  additionalNotes?: string;
}

export interface CupcakeOrderFormData {
  productId: string;
  productName: string;
  category: "cupcakes";
  flavor: string;
  quantity: number;
  customText?: string;
  additionalNotes?: string;
}

export interface PastryOrderFormData {
  productId: string;
  productName: string;
  category: "pastries";
  type: string;
  quantity: number;
  additionalNotes?: string;
}

export interface IceCreamOrderFormData {
  productId: string;
  productName: string;
  category: "ice-cream";
  flavor: string;
  quantity: number;
  additionalNotes?: string;
}

export type OrderFormData =
  | CakeOrderFormData
  | CupcakeOrderFormData
  | PastryOrderFormData
  | IceCreamOrderFormData;

// ─── Navigation Types ───────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  isSection?: boolean; // true for smooth-scroll homepage sections
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
