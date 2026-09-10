"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function FlourTrail() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  if (shouldReduceMotion) return null;

  const dots = [
    { cx: 48, cy: 8, r: 2.5 },
    { cx: 52, cy: 22, r: 2 },
    { cx: 46, cy: 36, r: 3 },
    { cx: 54, cy: 50, r: 2 },
    { cx: 50, cy: 64, r: 2.5 },
    { cx: 47, cy: 78, r: 1.5 },
  ];

  return (
    <div ref={ref} className="relative h-24 flex items-center justify-center" aria-hidden="true">
      <motion.svg
        width="100"
        height="90"
        viewBox="0 0 100 90"
        style={{ opacity }}
        className="text-cocoa/30"
      >
        {dots.map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill="currentColor"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          />
        ))}
      </motion.svg>
    </div>
  );
}
