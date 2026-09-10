"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import { SignatureCurve } from "@/components/motion/SignatureCurve";

export function ExpandingBakeryImage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Animated values driven by scroll
  const width = useTransform(scrollYProgress, [0.1, 0.5], ["75%", "100%"]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0.1, 0.5],
    ["1.5rem", "0rem"]
  );
  const overlayOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 0.5]);
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.4, 0.6], [40, 0]);

  if (shouldReduceMotion) {
    // Reduced motion fallback — static full-bleed image
    return (
      <section className="relative h-[70vh] sm:h-[80vh]">
        <Image
          src="/media/Brand/Kobbi's_place.jpg"
          alt="Inside Kobbi's Oven — vibrant bakery mural with dessert artwork, cozy seating, and warm atmosphere"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream mb-4">
            From the Oven,
            <br />
            With Love.
          </h2>
          <SignatureCurve width={200} color="#FFF8EE" animate={false} />
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="relative overflow-hidden mx-auto"
          style={{
            width,
            borderRadius,
            height: "80vh",
          }}
        >
          <Image
            src="/media/Brand/Kobbi's_place.jpg"
            alt="Inside Kobbi's Oven — vibrant bakery mural with dessert artwork, cozy seating, and warm atmosphere"
            fill
            className="object-cover"
            sizes="100vw"
          />

          {/* Dark overlay */}
          <motion.div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />

          {/* Text overlay */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
            style={{ opacity: textOpacity, y: textY }}
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl text-cream mb-6 drop-shadow-lg">
              From the Oven,
              <br />
              With Love.
            </h2>
            <SignatureCurve width={220} color="#FFF8EE" delay={0} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
