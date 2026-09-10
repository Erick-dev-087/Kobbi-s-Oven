"use client";

import { useState } from "react";
import { Product, ProductCategory } from "@/types";
import { products } from "@/data/products";
import { CategoryFilter } from "@/components/menu/CategoryFilter";
import { ProductGrid } from "@/components/menu/ProductGrid";
import { OrderModal } from "@/components/ordering/OrderModal";
import { categories } from "@/data/categories";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Get dynamic header copy based on active category
  const getHeaderCopy = () => {
    if (activeCategory === "all") {
      return {
        title: "The Menu",
        subtitle: "From cakes to cupcakes, pastries to ice cream — explore everything baking in Kobbi's Oven.",
      };
    }
    const category = categories.find((c) => c.id === activeCategory);
    return {
      title: category?.name || "The Menu",
      subtitle: category?.description || "",
    };
  };

  const header = getHeaderCopy();

  return (
    <div className="min-h-screen bg-cream pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl sm:text-6xl text-black mb-4 transition-all duration-300">
            {header.title}
          </h1>
          <p className="text-black/60 font-body text-lg max-w-2xl mx-auto transition-all duration-300">
            {header.subtitle}
          </p>
        </div>

        {/* Filter */}
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Grid */}
        <ProductGrid
          products={products}
          category={activeCategory}
          onOrderClick={handleOrderClick}
        />
      </div>

      {/* Modal */}
      <OrderModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
