import { CakePricing, CakeFlavorTier, CakeSize, Product, ProductCategory, Occasion } from "@/types";

// ─── Cake Pricing Tiers (from Kobbi's Oven price list) ──────────

export const cakePricing: CakePricing[] = [
  {
    tier: "base",
    prices: {
      "0.5kg": 1200,
      "1kg": 1600,
      "1.5kg": 2200,
      "2kg": 2700,
      "3kg": 3800,
      "4kg": 4900,
      "5kg": 6000,
    },
  },
  {
    tier: "signature",
    prices: {
      "0.5kg": 1300,
      "1kg": 2000,
      "1.5kg": 2500,
      "2kg": 3100,
      "3kg": 4200,
      "4kg": 5300,
      "5kg": 6400,
    },
  },
  {
    tier: "death-by-chocolate",
    prices: {
      "0.5kg": 1300,
      "1kg": 2000,
      "1.5kg": 2500,
      "2kg": 3100,
      "3kg": 4200,
      "4kg": 5300,
      "5kg": 6400,
    },
  },
  {
    tier: "deluxe",
    prices: {
      "0.5kg": 1500,
      "1kg": 2200,
      "1.5kg": 2700,
      "2kg": 3500,
      "3kg": 4400,
      "4kg": 5500,
      "5kg": 6600,
    },
  },
  {
    tier: "premium",
    prices: {
      "0.5kg": 1800,
      "1kg": 2400,
      "1.5kg": 2900,
      "2kg": 3500,
      "3kg": 4600,
      "4kg": 5700,
      "5kg": 6800,
    },
  },
  {
    tier: "adult",
    prices: {
      "0.5kg": 1800,
      "1kg": 2400,
      "1.5kg": 2900,
      "2kg": 3500,
      "3kg": 4600,
      "4kg": 5700,
      "5kg": 6800,
    },
  },
];

export function getPriceForCake(tier: CakeFlavorTier, size: CakeSize): number {
  const pricing = cakePricing.find((p) => p.tier === tier);
  return pricing ? pricing.prices[size] : 0;
}

export function getStartingPrice(tier: CakeFlavorTier): number {
  const pricing = cakePricing.find((p) => p.tier === tier);
  return pricing ? pricing.prices["0.5kg"] : 0;
}

// ─── Cake Flavor Lists ──────────────────────────────────────────

export const baseFlavors = [
  "Vanilla",
  "Orange",
  "Strawberry",
  "Luscious Lemon",
  "Marble (Chocolate, Vanilla & Strawberry, Orange)",
];

export const signatureFlavors = [
  "Passion & Carrot",
  "Red Velvet",
  "Caramel",
  "Bubble Gum",
  "Tiramisu",
  "Carrot Cake",
  "Virgin Piña Colada",
  "Lemon Poppy Seed",
  "Apple with Salted Caramel",
  "Banana and Caramel",
  "Coconut Cake",
  "Funfetti Vanilla Cake",
  "Coconut and Blueberry",
  "Almond and Poppy Seed",
];

export const deathByChocolateFlavors = [
  "Kobbi's Chocolate Cake",
  "Chocolate and Orange",
  "White or Black Forest",
  "Mocha with Kobbi's Finest Coffee and Chocolate",
  "Chocolate Mint",
  "Chocolate and Blueberry",
  "Banana and Chocolate",
  "Chocolate Chip",
  "Chocolate and Caramel",
  "Chocolate Oreo",
  "Chocolate and Peanut Butter",
];

export const deluxeFlavors = [
  "Chocolate Layered with Cream Cheese Frosting",
  "Nutella Chocolate Fudge Cake",
  "Fresh Strawberries Cake (Strawberry Short Cake)",
  "White or Dark Chocolate Fudge",
  "Blueberry Cake",
  "Opera Slice Cake",
  "Peanut Butter Chocolate and Caramel Popcorn Layered Cake",
];

export const premiumFlavors = [
  "Traditional Fruit Cake",
  "Eggless Cake (Vanilla, Strawberry, Red Velvet, Caramel, Chocolate and Orange, Passion etc.)",
  "Sugar Free Diabetic Cakes with Sugar Alternatives",
  "Gluten Free Flourless Cakes with Alternative Wheat Replacement Flour",
  "Banana Foster Cake",
  "Brownie Fudge with Peanut Praline",
];

export const adultFlavors = [
  "Irish Coffee Chocolate Cake",
  "Whisky Spiked Chocolate Cake",
  "Amarula or Baileys Cake",
  "Guinness Chocolate Cake",
  "Spiked Tiramisu",
  "Piña Colada",
  "Orange and Vodka Cake",
];

// ─── Products ───────────────────────────────────────────────────

export const products: Product[] = [
  // ── Birthday Cakes ──
  {
    id: "birthday-cake-1",
    name: "Chocolate Rose Birthday Cake",
    slug: "chocolate-rose-birthday-cake",
    category: "cakes",
    description: "A stunning chocolate cake adorned with handcrafted roses and rich truffles.",
    longDescription: "Layers of moist chocolate sponge, generously frosted with pink chocolate buttercream, topped with hand-piped roses and chocolate truffles. A showstopper for any birthday celebration.",
    image: "/media/Birthday_cakes/Birthday_cake_1.jpg",
    startingPrice: 1300,
    flavorTier: "signature",
    occasions: ["birthday"],
    options: {
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },
  {
    id: "birthday-cake-2",
    name: "Sprinkle Celebration Cake",
    slug: "sprinkle-celebration-cake",
    category: "cakes",
    description: "A colorful, fun cake perfect for joyful birthday celebrations.",
    image: "/media/Birthday_cakes/Birthday_cake_2.jpg",
    startingPrice: 1200,
    flavorTier: "base",
    occasions: ["birthday"],
    options: {
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },
  {
    id: "birthday-cake-3",
    name: "Elegant Rosette Cake",
    slug: "elegant-rosette-cake",
    category: "cakes",
    description: "Beautifully piped rosettes with a delicate finish for a refined celebration.",
    image: "/media/Birthday_cakes/Birthday_cake_3.jpg",
    startingPrice: 1300,
    flavorTier: "signature",
    occasions: ["birthday"],
    options: {
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },
  {
    id: "birthday-cake-4",
    name: "Tall Ruffle Birthday Cake",
    slug: "tall-ruffle-birthday-cake",
    category: "cakes",
    description: "A tall, dramatic cake with wave-textured frosting and delicate sugar flowers.",
    image: "/media/Birthday_cakes/Birthday_cake_4_Tallcake.jpg",
    startingPrice: 1300,
    flavorTier: "signature",
    occasions: ["birthday"],
    options: {
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },
  {
    id: "birthday-cake-5",
    name: "Classic Birthday Cake",
    slug: "classic-birthday-cake",
    category: "cakes",
    description: "A timeless birthday favourite — simple, beautiful, and always a hit.",
    image: "/media/Birthday_cakes/Birthday_cake_5.jpg",
    startingPrice: 1200,
    flavorTier: "base",
    occasions: ["birthday"],
    options: {
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },

  // ── Valentine Cakes ──
  {
    id: "valentine-cake-1",
    name: "Dark Chocolate Valentine Cake",
    slug: "dark-chocolate-valentine-cake",
    category: "cakes",
    description: "Rich dark chocolate ganache topped with hand-piped red roses and fresh strawberries.",
    image: "/media/Valentine_cakes/Valentine_cake_1.jpg",
    startingPrice: 1300,
    flavorTier: "death-by-chocolate",
    occasions: ["valentines"],
    options: {
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },
  {
    id: "valentine-cake-2",
    name: "Romantic Heart Cake",
    slug: "romantic-heart-cake",
    category: "cakes",
    description: "Something sweet for someone special — crafted for love.",
    image: "/media/Valentine_cakes/Valentine_cake_2.jpg",
    startingPrice: 1300,
    flavorTier: "signature",
    occasions: ["valentines"],
    options: {
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },

  // ── Graduation Cakes ──
  {
    id: "graduation-cake-1",
    name: "Gold Leaf Graduation Cake",
    slug: "gold-leaf-graduation-cake",
    category: "cakes",
    description: "Elegant white and black cake with gold leaf detail — a celebration of achievement.",
    image: "/media/Graduation_cakes/Graduation_cake_1.jpg",
    startingPrice: 1500,
    flavorTier: "deluxe",
    occasions: ["graduation"],
    options: {
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },
  {
    id: "graduation-cake-2",
    name: "Cap & Scroll Graduation Cake",
    slug: "cap-scroll-graduation-cake",
    category: "cakes",
    description: "A proud milestone deserves a proud cake — complete with graduation cap and scroll.",
    image: "/media/Graduation_cakes/Graduation_cake_2.jpg",
    startingPrice: 1500,
    flavorTier: "deluxe",
    occasions: ["graduation"],
    options: {
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },
  {
    id: "graduation-cake-3",
    name: "Graduation Celebration Cake",
    slug: "graduation-celebration-cake",
    category: "cakes",
    description: "Celebrate the late nights, hard work, and one very sweet milestone.",
    image: "/media/Graduation_cakes/Graduation_cake_3.jpg",
    startingPrice: 1500,
    flavorTier: "deluxe",
    occasions: ["graduation"],
    options: {
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },

  // ── Wedding Cakes ──
  {
    id: "wedding-cake-1",
    name: "Grand Tiered Wedding Cake",
    slug: "grand-tiered-wedding-cake",
    category: "cakes",
    description: "A magnificent multi-tiered cake with sugar flowers — the centrepiece of the celebration.",
    image: "/media/Wedding_cake/wedding_cake_1.jpg",
    startingPrice: 1500,
    flavorTier: "deluxe",
    occasions: ["wedding"],
    options: {
      sizes: ["1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: true,
    },
  },
  {
    id: "wedding-cake-2",
    name: "Elegant White Wedding Cake",
    slug: "elegant-white-wedding-cake",
    category: "cakes",
    description: "Pure, classic elegance for your most important day.",
    image: "/media/Wedding_cake/wedding_cake_2.jpg",
    startingPrice: 1500,
    flavorTier: "deluxe",
    occasions: ["wedding"],
    options: {
      sizes: ["1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: true,
    },
  },
  {
    id: "wedding-cake-3",
    name: "Floral Wedding Cake",
    slug: "floral-wedding-cake",
    category: "cakes",
    description: "Adorned with cascading flowers for a romantic, unforgettable celebration.",
    image: "/media/Wedding_cake/wedding_cake_3.jpg",
    startingPrice: 1500,
    flavorTier: "deluxe",
    occasions: ["wedding"],
    options: {
      sizes: ["1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: true,
    },
  },

  // ── Custom / Celebration Cakes ──
  {
    id: "custom-cake-1",
    name: "Bespoke Celebration Cake",
    slug: "bespoke-celebration-cake",
    category: "cakes",
    description: "A one-of-a-kind cake designed around your vision.",
    image: "/media/Custom_cakes/Custom_cake_1.jpg",
    startingPrice: 1300,
    flavorTier: "signature",
    occasions: ["custom"],
    options: {
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },
  {
    id: "custom-cake-2",
    name: "Designer Custom Cake",
    slug: "designer-custom-cake",
    category: "cakes",
    description: "Tell us your theme — we'll bring it to life in cake.",
    image: "/media/Custom_cakes/Custom_cake_2.jpg",
    startingPrice: 1300,
    flavorTier: "signature",
    occasions: ["custom"],
    options: {
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },
  {
    id: "custom-cake-3",
    name: "Artistic Custom Cake",
    slug: "artistic-custom-cake",
    category: "cakes",
    description: "Edible artistry for your most creative celebrations.",
    image: "/media/Custom_cakes/Custom_cake_3.jpg",
    startingPrice: 1300,
    flavorTier: "signature",
    occasions: ["custom"],
    options: {
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },
  {
    id: "baby-shower-cake",
    name: "Baby Shower Cake",
    slug: "baby-shower-cake",
    category: "cakes",
    description: "A sweet welcome for the little one on the way.",
    image: "/media/Custom_cakes/baby_shower_cakes.jpg",
    startingPrice: 1300,
    flavorTier: "signature",
    occasions: ["baby-shower", "custom"],
    options: {
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },
  {
    id: "car-cake",
    name: "3D Car Cake",
    slug: "3d-car-cake",
    category: "cakes",
    description: "A sculpted car cake for the auto enthusiast — pure edible engineering.",
    image: "/media/Custom_cakes/car_cake.jpg",
    startingPrice: 1500,
    flavorTier: "deluxe",
    occasions: ["birthday", "custom"],
    options: {
      sizes: ["1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },
  {
    id: "church-event-cake",
    name: "Church Event Cake",
    slug: "church-event-cake",
    category: "cakes",
    description: "A beautifully crafted cake for church gatherings and community celebrations.",
    image: "/media/Custom_cakes/church_event_cake_1.jpg",
    startingPrice: 1200,
    flavorTier: "base",
    occasions: ["custom"],
    options: {
      sizes: ["1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },
  {
    id: "ruracio-cake",
    name: "Ruracio Ceremony Cake",
    slug: "ruracio-ceremony-cake",
    category: "cakes",
    description: "A cultural masterpiece — blending tradition with delicious artistry.",
    image: "/media/Custom_cakes/ruracio_cake.jpg",
    startingPrice: 1500,
    flavorTier: "deluxe",
    occasions: ["ruracio", "custom"],
    options: {
      sizes: ["1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },
  {
    id: "tradition-cake",
    name: "Traditional Celebration Cake",
    slug: "traditional-celebration-cake",
    category: "cakes",
    description: "Rooted in culture, crafted with love — for ceremonies that matter.",
    image: "/media/Custom_cakes/tradition_cake_1.jpg",
    startingPrice: 1500,
    flavorTier: "deluxe",
    occasions: ["ruracio", "wedding", "custom"],
    options: {
      sizes: ["1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: false,
    },
  },

  // ── Adult / Booze Cakes ──
  {
    id: "adult-irish-coffee",
    name: "Irish Coffee Chocolate Cake",
    slug: "irish-coffee-chocolate-cake",
    category: "cakes",
    description: "Rich chocolate with a bold Irish coffee kick — for those who like it strong.",
    image: "/media/Birthday_cakes/Birthday_cake_1.jpg",
    startingPrice: 1800,
    flavorTier: "adult",
    occasions: ["birthday", "custom"],
    options: {
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: true,
    },
  },
  {
    id: "adult-baileys",
    name: "Amarula or Baileys Cake",
    slug: "amarula-baileys-cake",
    category: "cakes",
    description: "Creamy, indulgent, and infused with your favourite liqueur.",
    image: "/media/Birthday_cakes/Birthday_cake_3.jpg",
    startingPrice: 1800,
    flavorTier: "adult",
    occasions: ["birthday", "valentines", "custom"],
    options: {
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg", "4kg", "5kg"],
      customText: true,
      eggPreference: true,
      alcoholPreference: true,
    },
  },

  // ── Cupcakes ──
  {
    id: "custom-cupcakes",
    name: "Custom Themed Cupcakes",
    slug: "custom-themed-cupcakes",
    category: "cupcakes",
    description: "Personalised cupcakes for any theme, any occasion — always crowd-pleasers.",
    image: "/media/Cupcakes/Cupcake_1.jpg",
    startingPrice: 150,
    options: {
      customText: true,
    },
  },
  {
    id: "cookies",
    name: "Gourmet Cookies",
    slug: "gourmet-cookies",
    category: "cupcakes",
    description: "Crispy on the outside, chewy on the inside — baked to perfection.",
    image: "/media/Cupcakes/Cookies.jpg",
    startingPrice: 100,
  },

  // ── Pastries ──
  {
    id: "beef-pies",
    name: "Beef Pies",
    slug: "beef-pies",
    category: "pastries",
    description: "Golden, flaky pastry filled with seasoned minced beef — comfort in every bite.",
    image: "/media/Pastries/Beef_pies.jpg",
    startingPrice: 150,
  },
  {
    id: "cinnamon-rolls",
    name: "Cinnamon Rolls",
    slug: "cinnamon-rolls",
    category: "pastries",
    description: "Warm, swirled, and generously spiced — straight from the oven.",
    image: "/media/Pastries/Cinnamon_rolls.jpg",
    startingPrice: 200,
  },
  {
    id: "eclairs",
    name: "Chocolate Éclairs",
    slug: "chocolate-eclairs",
    category: "pastries",
    description: "Light choux pastry filled with rich chocolate cream and topped with ganache.",
    image: "/media/Pastries/Eclairs_1.jpg",
    startingPrice: 200,
  },
  {
    id: "pastries-assorted",
    name: "Assorted Pastries",
    slug: "assorted-pastries",
    category: "pastries",
    description: "A selection of our finest pastries — perfect for sharing or treating yourself.",
    image: "/media/Pastries/Pastries_1.jpg",
    startingPrice: 150,
  },

  // ── Ice Cream ──
  {
    id: "ice-cream-cone",
    name: "Ice Cream Cone",
    slug: "ice-cream-cone",
    category: "ice-cream",
    description: "Creamy, cold, and served in a fresh waffle cone — the perfect treat.",
    image: "/media/IceCream/IceCream_1.jpg",
    startingPrice: 200,
  },
];

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByOccasion(occasion: Occasion): Product[] {
  return products.filter((p) => p.occasions?.includes(occasion));
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAdultCakes(): Product[] {
  return products.filter((p) => p.flavorTier === "adult");
}
