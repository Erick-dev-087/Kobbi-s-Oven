"use client";

import { useState } from "react";
import { Product, ProductCategory } from "@/types";
import { ProductCard } from "@/components/menu/ProductCard";
import { motion, AnimatePresence } from "framer-motion";

interface ProductGridProps {
  products: Product[];
  category?: ProductCategory | "all";
  onOrderClick: (product: Product) => void;
}

export function ProductGrid({
  products,
  category = "all",
  onOrderClick,
}: ProductGridProps) {
  // Filter products based on selected category
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="w-full">
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} onOrderClick={onOrderClick} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-black/60 font-body text-lg">
            We don&apos;t have any products in this category right now.
          </p>
        </motion.div>
      )}
    </div>
  );
}
