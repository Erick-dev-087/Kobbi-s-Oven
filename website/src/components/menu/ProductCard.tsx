"use client";

import Image from "next/image";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onOrderClick: (product: Product) => void;
}

export function ProductCard({ product, onOrderClick }: ProductCardProps) {
  return (
    <div className="group bg-vanilla rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-cream/50">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Hover overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2 gap-4">
            <h3 className="font-display text-xl sm:text-2xl text-black leading-tight">
              {product.name}
            </h3>
            {product.startingPrice && (
              <span className="shrink-0 text-cocoa font-body text-sm font-medium whitespace-nowrap bg-cream px-2 py-1 rounded-md">
                From KSh {product.startingPrice.toLocaleString()}
              </span>
            )}
          </div>
          <p className="text-black/60 font-body text-sm leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>
        </div>

        <button
          onClick={() => onOrderClick(product)}
          className="w-full py-3 px-4 bg-transparent border-2 border-caramel text-black font-body font-semibold rounded-xl transition-all duration-200 hover:bg-caramel flex items-center justify-center gap-2 group/btn"
        >
          {product.category === "cakes" ? "Make it yours" : "Order now"}
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
