"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Tuned spring motion constants matching the Roofer master layout physics.
 */
export const ROOFER_REVEAL_SPRING = (delay = 0) => ({
  type: "spring" as const,
  stiffness: delay >= 0.6 ? 200 : 300,
  damping: 40,
  mass: 1.2,
  delay,
});

export const ROOFER_UI_SPRING = {
  type: "spring" as const,
  stiffness: 500,
  damping: 60,
  mass: 1,
};

interface FramerRevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  yOffset?: number;
  children: React.ReactNode;
}

/**
 * Replicates Roofer's __framer__styleAppearEffectEnabled scroll reveal:
 * initial y: 40, opacity: 0 -> settles smoothly with spring damping 40.
 */
export function FramerReveal({
  delay = 0,
  yOffset = 40,
  className,
  children,
  ...props
}: FramerRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={ROOFER_REVEAL_SPRING(delay)}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxImageFrameProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

/**
 * Replicates Roofer's __framer__parallaxTransformEnabled (speed: 130)
 * scroll-linked parallax image container.
 */
export function ParallaxImageFrame({
  children,
  className,
  intensity = 28,
}: ParallaxImageFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div
        style={{ y, scale: 1.09 }}
        className="h-full w-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
  durationMs?: number;
}

export function AnimatedCounter({
  target,
  suffix = "",
  decimals = 0,
  durationMs = 1200,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let rafId = 0;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(target * eased);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, target, durationMs]);

  return (
    <span ref={ref}>
      {decimals > 0 ? display.toFixed(decimals) : Math.round(display)}
      {suffix}
    </span>
  );
}
