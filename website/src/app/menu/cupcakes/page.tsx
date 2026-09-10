"use client";

import { useState } from "react";
import { Product } from "@/types";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/menu/ProductGrid";
import { OrderModal } from "@/components/ordering/OrderModal";
import Link from "next/link";

export default function CupcakesPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const cupcakeProducts = products.filter((p) => p.category === "cupcakes");

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
            Cupcakes
          </h1>
          <p className="text-black/60 font-body text-lg max-w-2xl">
            Small enough to share. Good enough to keep. Personalised treats for any theme.
          </p>
        </div>

        {/* Grid */}
        <ProductGrid
          products={cupcakeProducts}
          category="cupcakes"
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
