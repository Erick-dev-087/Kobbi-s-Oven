"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FlourTrail } from "@/components/motion/FlourTrail";

export function MenuCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-cream pt-16 pb-24 sm:pt-24 sm:pb-32 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <FlourTrail />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-12">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-black mb-6">
            See everything we&apos;re baking.
          </h2>
          <p className="text-black/70 font-body text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            From classic birthday cakes to custom wedding tiers, from buttery
            pastries to rich ice cream — explore the full Kobbi&apos;s Oven menu
            and find your new favourite treat.
          </p>
          <Link href="/menu" className="btn-primary group text-lg px-8 py-4">
            Explore the Menu
            <svg
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
