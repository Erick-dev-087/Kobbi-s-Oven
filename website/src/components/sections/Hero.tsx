"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SignatureCurve } from "@/components/motion/SignatureCurve";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-cream overflow-hidden flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-peach/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-caramel/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <motion.div
            className="relative z-10 text-center lg:text-left"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.p
              className="text-cocoa font-body text-sm sm:text-base font-medium tracking-wide uppercase mb-4"
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Welcome to{" "}
              <span className="font-logo normal-case text-base sm:text-lg tracking-normal">KoBBi&apos;s</span>{" "}Oven
            </motion.p>

            <motion.h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-black leading-[1.05] mb-6"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Something sweet
              <br />
              <span className="text-cocoa">is baking.</span>
            </motion.h1>

            <motion.div
              className="flex justify-center lg:justify-start mb-8"
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <SignatureCurve width={180} delay={0.8} />
            </motion.div>

            <motion.p
              className="text-black/60 font-body text-lg sm:text-xl max-w-md mx-auto lg:mx-0 mb-8"
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              From Kobbi&apos;s Oven, with love. Handcrafted cakes, cupcakes,
              pastries, and ice cream for every occasion.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Link href="/menu" className="btn-primary group text-base">
                Explore the treats
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
              </Link>
              <Link
                href="/#about"
                className="text-black/70 font-body font-medium hover:text-black transition-colors duration-200 relative group"
              >
                Our story
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative w-[320px] h-[380px] sm:w-[400px] sm:h-[460px] lg:w-[480px] lg:h-[560px]">
              {/* Decorative ring */}
              <div className="absolute -inset-4 sm:-inset-6 border-2 border-caramel/20 rounded-full" />
              <div className="absolute -inset-10 sm:-inset-14 border border-peach/10 rounded-full" />

              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-cocoa/10 hero-img-blend bg-cream">
                <Image
                  src="/media/Birthday_cakes/Birthday_cake_1.jpg"
                  alt="Beautiful chocolate birthday cake with handcrafted roses and truffles by Kobbi's Oven"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 480px"
                />
              </div>

              {/* Floating accent badge */}
              <motion.div
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-black text-cream rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-lg"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p className="font-display text-sm sm:text-base">
                  It&apos;s love at first bite.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
