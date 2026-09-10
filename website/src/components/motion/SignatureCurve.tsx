"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SignatureCurveProps {
  width?: number;
  color?: string;
  animate?: boolean;
  delay?: number;
  className?: string;
}

export function SignatureCurve({
  width = 200,
  color = "#D99A4A",
  animate = true,
  delay = 0,
  className = "",
}: SignatureCurveProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      width={width}
      height={Math.round(width * 0.12)}
      viewBox="0 0 200 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d="M10 18 Q50 2 100 12 Q150 22 190 6"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={animate && !shouldReduceMotion ? { pathLength: 0 } : { pathLength: 1 }}
        whileInView={animate && !shouldReduceMotion ? { pathLength: 1 } : undefined}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.8,
          delay,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}
