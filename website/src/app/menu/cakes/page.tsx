"use client";

import { useState } from "react";
import { Product, Occasion } from "@/types";
import { products } from "@/data/products";
import { occasions } from "@/data/occasions";
import { ProductGrid } from "@/components/menu/ProductGrid";
import { OrderModal } from "@/components/ordering/OrderModal";
import Link from "next/link";

export default function CakesPage() {
  const [activeOccasion, setActiveOccasion] = useState<Occasion | "all">("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const cakeProducts = products.filter((p) => p.category === "cakes");
  const filteredProducts =
    activeOccasion === "all"
      ? cakeProducts
      : cakeProducts.filter((p) => p.occasions?.includes(activeOccasion));

  return (
    <div className="min-h-screen bg-cream pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb & Header */}
        <div className="mb-12">
          <Link href="/menu" className="text-black/50 hover:text-caramel font-body text-sm mb-4 inline-flex items-center gap-1 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Menu
          </Link>
          <h1 className="font-display text-5xl sm:text-6xl text-black mb-4">
            Cakes
          </h1>
          <p className="text-black/60 font-body text-lg max-w-2xl">
            Big moments deserve big slices. From classic flavours to show-stopping designs.
          </p>
        </div>

        {/* Occasion Filter */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveOccasion("all")}
            className={`px-4 py-2 rounded-full font-body text-sm font-medium transition-colors ${
              activeOccasion === "all"
                ? "bg-black text-cream"
                : "bg-vanilla text-black/70 hover:bg-black/5 border border-black/10"
            }`}
          >
            All Cakes
          </button>
          {occasions.map((occ) => (
            <button
              key={occ.id}
              onClick={() => setActiveOccasion(occ.id)}
              className={`px-4 py-2 rounded-full font-body text-sm font-medium transition-colors ${
                activeOccasion === occ.id
                  ? "bg-black text-cream"
                  : "bg-vanilla text-black/70 hover:bg-black/5 border border-black/10"
              }`}
            >
              {occ.name.replace(" Cakes", "")}
            </button>
          ))}
        </div>

        {/* Grid */}
        <ProductGrid
          products={filteredProducts}
          category="cakes"
          onOrderClick={handleOrderClick}
        />
      </div>

      <OrderModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
