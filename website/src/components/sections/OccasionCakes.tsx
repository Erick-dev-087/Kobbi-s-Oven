"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { occasions } from "@/data/occasions";

export function OccasionCakes() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-vanilla py-24 sm:py-32 overflow-hidden">
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
            For every celebration
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-black">
            For every occasion.
          </h2>
        </motion.div>

        {/* Occasion cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex lg:grid lg:grid-cols-3 gap-5 lg:gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          {occasions.map((occasion, i) => (
            <motion.div
              key={occasion.id}
              className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-auto snap-center"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/menu/cakes`}
                className="group block relative h-[400px] sm:h-[440px] rounded-2xl overflow-hidden"
              >
                <Image
                  src={occasion.image}
                  alt={`${occasion.name} by Kobbi's Oven — ${occasion.description}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 320px, 33vw"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-caramel font-body text-xs font-semibold uppercase tracking-wider mb-2">
                    {occasion.name}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl text-cream mb-2 leading-snug">
                    {occasion.headline}
                  </h3>
                  <p className="text-cream/60 font-body text-sm mb-4">
                    {occasion.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-caramel font-body font-semibold text-sm">
                    {occasion.cta}
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
