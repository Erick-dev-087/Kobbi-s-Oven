"use client";

import Image from "next/image";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onOrderClick: (product: Product) => void;
}

export function ProductCard({ product, onOrderClick }: ProductCardProps) {
  return (
    <div 
      onClick={() => onOrderClick(product)}
      role="button"
      tabIndex={0}
      className="group bg-vanilla rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-cream/50 cursor-pointer text-left"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Hover overlay gradient */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <span className="bg-caramel text-white font-body font-semibold px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
            Customize Order
          </span>
        </div>
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
      </div>
    </div>
  );
}
