"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/bonhardt";
import { SafeImage } from "./SafeImage";
import {
  FramerReveal,
  ParallaxImageFrame,
  AnimatedCounter,
  ROOFER_UI_SPRING,
} from "./MotionPrimitives";

export function HowItWorksSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white py-[96px] md:py-[130px]"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Exact Roofer How-it-work Dual Photo Collage + Years Stat Block */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-7">
                <FramerReveal delay={0.1}>
                  <ParallaxImageFrame
                    intensity={24}
                    className="aspect-[3/4] w-full rounded-[12px] shadow-[0_18px_45px_rgba(52,52,43,0.1)]"
                  >
                    <SafeImage
                      src="/lead-assets/bonhardt-hail-inspection.jpg"
                      alt="Haag-certified chalk-marked hail impact inspection by Bonhardt Roofs"
                      fallbackLabel="Haag Certified Hail Inspection"
                      className="h-full w-full object-cover"
                    />
                  </ParallaxImageFrame>
                </FramerReveal>
              </div>

              <div className="col-span-5 flex flex-col justify-between gap-5">
                <FramerReveal delay={0.22}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={ROOFER_UI_SPRING}
                    className="flex flex-col justify-center rounded-[12px] bg-[var(--brand-primary)] p-6 text-white sm:p-7"
                  >
                    <div className="font-display text-[48px] leading-none font-bold tracking-tight sm:text-[56px]">
                      <AnimatedCounter target={10} suffix="+" />
                    </div>
                    <p className="mt-2.5 text-sm font-semibold leading-snug text-[#E5E5DB]">
                      Years of Colorado Roofing Experience
                    </p>
                  </motion.div>
                </FramerReveal>

                <FramerReveal delay={0.32} className="flex-1">
                  <ParallaxImageFrame
                    intensity={20}
                    className="h-full min-h-[210px] w-full rounded-[12px] shadow-[0_18px_45px_rgba(52,52,43,0.1)]"
                  >
                    <SafeImage
                      src="/lead-assets/bonhardt-project-shingle.jpg"
                      alt="Bonhardt Roof & Trades Co crew installing commercial roof membrane"
                      fallbackLabel="Bonhardt Roofing Crew"
                      className="h-full w-full object-cover"
                    />
                  </ParallaxImageFrame>
                </FramerReveal>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Roofer Heading + Numbered 1-2-3 Process List */}
          <div className="lg:col-span-6 lg:pl-4">
            <FramerReveal delay={0}>
              <h2 className="font-display text-[36px] leading-[1.15] font-bold tracking-[-0.5px] text-[#34342B] sm:text-[48px] lg:text-[56px]">
                Taking care of the roof of your property.
              </h2>
            </FramerReveal>

            <FramerReveal delay={0.16}>
              <p className="mt-6 text-[17px] leading-[1.7] text-[#606057] sm:text-[18px]">
                Your building is your most important asset. Hail and high winds
                on the Front Range can create hidden storm damage—our structured
                process restores your roof without the stress.
              </p>
            </FramerReveal>

            <div className="mt-10 space-y-6">
              {PROCESS_STEPS.map((step, idx) => (
                <FramerReveal
                  key={step.number}
                  delay={0.24 + idx * 0.14}
                  yOffset={28}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={ROOFER_UI_SPRING}
                    className="group flex items-start gap-5 border-b border-[#E5E5DB] pb-6 last:border-b-0 last:pb-0"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#F4F4EB] font-display text-lg font-bold text-[#34342B] transition-colors duration-300 group-hover:bg-[var(--brand-primary)] group-hover:text-white">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-[21px] font-bold text-[#34342B]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-[1.68] text-[#606057]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </FramerReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
