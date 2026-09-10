"use client";

import { ProductCategory } from "@/types";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  activeCategory: ProductCategory | "all";
  onCategoryChange: (category: ProductCategory | "all") => void;
}

const categories: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "All Treats" },
  { id: "cakes", label: "Cakes" },
  { id: "cupcakes", label: "Cupcakes" },
  { id: "pastries", label: "Pastries" },
  { id: "ice-cream", label: "Ice Cream" },
];

export function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`relative px-5 py-2.5 rounded-full font-body text-sm sm:text-base font-medium transition-colors duration-200 ${
              isActive ? "text-black" : "text-black/60 hover:text-black hover:bg-black/5"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeCategoryFilter"
                className="absolute inset-0 bg-caramel rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
