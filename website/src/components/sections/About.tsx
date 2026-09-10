"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SignatureCurve } from "@/components/motion/SignatureCurve";

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-vanilla py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-caramel font-body text-sm font-semibold uppercase tracking-wider mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-black mb-4 leading-tight">
              Where every treat tells a story.
            </h2>
            <SignatureCurve width={150} className="mb-8" />
            <div className="space-y-4 text-black/70 font-body text-base sm:text-lg leading-relaxed">
              <p>
                What started as a passion for baking in a small kitchen has grown
                into something much sweeter. At Kobbi&apos;s Oven, every cake is
                mixed by hand, every recipe is perfected with care, and every
                order is treated like it&apos;s for family — because to us, it is.
              </p>
              <p>
                From birthday celebrations to wedding centrepieces, from warm
                cinnamon rolls on a quiet morning to cupcakes that steal the show
                — we bake for the moments that matter. No shortcuts, no
                compromises, just honest, delicious food made with love.
              </p>
              <p className="font-display text-xl text-cocoa italic">
                From <span className="font-logo not-italic text-2xl tracking-normal">KoBBi&apos;s</span> Oven, With Love.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/media/Brand/Kobbi's_place_2.jpg"
                alt="Inside Kobbi's Oven bakery — handcrafted pastries in the display case, warm stone walls, and inviting atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-black text-cream rounded-xl px-5 py-4 shadow-lg max-w-[200px]">
              <p className="font-display text-lg leading-snug">
                Baked fresh,
                <br />
                every day.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
