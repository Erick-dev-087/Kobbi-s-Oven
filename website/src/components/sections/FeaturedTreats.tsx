"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { categories } from "@/data/categories";

export function FeaturedTreats() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="treats" className="bg-black py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-caramel font-body text-sm font-semibold uppercase tracking-wider mb-4">
            What are you craving?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream">
            It&apos;s love at first bite.
          </h2>
        </motion.div>

        {/* Category grid — staggered asymmetric layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6">
          {categories.map((cat, i) => {
            // First card (Cakes) spans 7 cols, second spans 5
            // Third spans 5, fourth spans 7
            const colSpan =
              i === 0
                ? "lg:col-span-7 lg:row-span-2"
                : i === 1
                  ? "lg:col-span-5"
                  : i === 2
                    ? "lg:col-span-5"
                    : "lg:col-span-7";

            const isLarge = i === 0;

            return (
              <motion.div
                key={cat.id}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${colSpan}`}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Link href={cat.ctaLink} className="block">
                  <div
                    className={`relative w-full ${
                      isLarge ? "h-[400px] sm:h-[500px] lg:h-full min-h-[500px]" : "h-[280px] sm:h-[300px]"
                    }`}
                  >
                    <Image
                      src={cat.image}
                      alt={`${cat.name} from Kobbi's Oven — ${cat.description}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes={
                        isLarge
                          ? "(max-width: 1024px) 100vw, 58vw"
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                      }
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <h3
                        className={`font-display text-cream mb-2 ${
                          isLarge ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
                        }`}
                      >
                        {cat.name}
                      </h3>
                      <p className="text-cream/70 font-body text-sm sm:text-base mb-4 max-w-sm">
                        {cat.headline}
                      </p>
                      <span className="inline-flex items-center gap-2 text-caramel font-body font-semibold text-sm group/cta">
                        {cat.cta}
                        <svg
                          className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1 group-hover:translate-x-1"
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
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
