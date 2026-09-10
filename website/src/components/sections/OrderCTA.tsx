"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SignatureCurve } from "@/components/motion/SignatureCurve";

export function OrderCTA() {
  const shouldReduceMotion = useReducedMotion();

  // Floating decoration images
  const floatingImages = [
    {
      src: "/media/Cupcakes/Cupcake_1.jpg",
      className: "hidden lg:block absolute top-12 left-16 w-32 h-32 rounded-full object-cover opacity-30 rotate-12 blur-[1px]",
    },
    {
      src: "/media/Pastries/Cinnamon_rolls.jpg",
      className: "hidden md:block absolute -bottom-8 left-1/4 w-40 h-40 rounded-full object-cover opacity-20 -rotate-12 blur-sm",
    },
    {
      src: "/media/Birthday_cakes/Birthday_cake_4_Tallcake.jpg",
      className: "hidden lg:block absolute top-20 right-20 w-48 h-48 rounded-[2rem] object-cover opacity-25 -rotate-6",
    },
    {
      src: "/media/IceCream/IceCream_1.jpg",
      className: "hidden md:block absolute bottom-12 right-1/4 w-36 h-36 rounded-full object-cover opacity-20 rotate-12 blur-[2px]",
    },
  ];

  return (
    <section className="bg-black py-24 sm:py-32 overflow-hidden relative">
      {/* Floating images */}
      {floatingImages.map((img, i) => (
        <motion.div
          key={i}
          className={img.className}
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: img.className.includes("opacity-20") ? 0.2 : img.className.includes("opacity-25") ? 0.25 : 0.3, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: i * 0.1 }}
          aria-hidden="true"
        >
          <Image src={img.src} alt="" fill className="object-cover" />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream mb-8">
            Ready for your slice?
          </h2>
          <div className="flex justify-center mb-10">
            <SignatureCurve width={200} color="#D99A4A" delay={0.2} />
          </div>
          <p className="text-cream/70 font-body text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
            Whether it&apos;s a grand celebration or a quiet Tuesday afternoon treat, 
            we&apos;re ready to bake it for you.
          </p>
          <Link href="/menu" className="btn-primary group text-lg px-10 py-5 shadow-xl shadow-caramel/20">
            Order Now
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
