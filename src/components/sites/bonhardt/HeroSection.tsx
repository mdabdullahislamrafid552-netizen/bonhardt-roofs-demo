"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CLIENT_REVIEWS } from "@/data/bonhardt";
import { SafeImage } from "./SafeImage";
import {
  FramerReveal,
  ParallaxImageFrame,
  ROOFER_UI_SPRING,
} from "./MotionPrimitives";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[#E5E5DB] pt-[124px] pb-[88px] md:pt-[152px] md:pb-[124px]"
      style={{
        background:
          "linear-gradient(125deg, #E3E5DC 0%, #EFEFE6 52%, #F4F4EB 100%)",
      }}
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Exact Roofer Split Hero — Large Bold Heading, Subcopy, Dual Buttons, Customer Avatars */}
          <div className="lg:col-span-6">
            <FramerReveal delay={0} yOffset={36}>
              <h1 className="font-display text-[44px] leading-[1.05] font-bold tracking-[-0.03em] text-[#34342B] sm:text-[62px] lg:text-[74px] xl:text-[82px]">
                Denver Metro&apos;s Trusted Roofing Experts.
              </h1>
            </FramerReveal>

            <FramerReveal delay={0.18} yOffset={32}>
              <p className="mt-7 max-w-[540px] text-[18px] leading-[1.68] font-normal text-[#606057] sm:text-[20px]">
                From Haag-certified hail inspections and insurance claim
                advocacy to residential and commercial roof replacements across
                Lakewood &amp; the Colorado Front Range.
              </p>
            </FramerReveal>

            {/* Exact Roofer Button Pair: Button Large (Solid Deep Slate) + Button Border (2.5px Outline) */}
            <FramerReveal delay={0.32} yOffset={28}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <motion.a
                  href="#estimate-form"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.985 }}
                  transition={ROOFER_UI_SPRING}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-[8px] bg-[var(--brand-primary)] px-7 py-[20px] text-[15px] font-bold text-white transition-colors hover:bg-[var(--brand-primary-hover)]"
                >
                  <span>Get Your Free Bonhardt Estimate</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>

                <motion.a
                  href="#services"
                  whileHover={{
                    y: -2,
                    borderColor: "#2C353D",
                    backgroundColor: "rgba(44, 53, 61, 0.05)",
                  }}
                  whileTap={{ scale: 0.985 }}
                  transition={ROOFER_UI_SPRING}
                  className="inline-flex items-center justify-center rounded-[8px] border-[2.5px] border-[#D3D3C7] bg-transparent px-7 py-[18px] text-[15px] font-bold text-[#34342B] transition-colors"
                >
                  Explore Our Services
                </motion.a>
              </div>
            </FramerReveal>

            {/* Exact Roofer Hero Profile Stack ("1550+ Satisfied Customers" pattern -> Bonhardt Proof) */}
            <FramerReveal delay={0.44} yOffset={24}>
              <div className="mt-12 flex items-center gap-5">
                <div className="flex -space-x-3">
                  {CLIENT_REVIEWS.map((rev) => (
                    <div
                      key={rev.id}
                      className="h-12 w-12 overflow-hidden rounded-full border-[2.5px] border-[#F4F4EB] bg-[#E5E5DB] shadow-sm"
                    >
                      <SafeImage
                        src={rev.avatar}
                        alt={rev.author}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <p className="font-display text-[24px] leading-none font-bold text-[#34342B]">
                    5.0 ★
                  </p>
                  <p className="mt-1 text-[14px] font-medium text-[#606057]">
                    Haag Certified • 5-Year Workmanship Warranty
                  </p>
                </div>
              </div>
            </FramerReveal>
          </div>

          {/* Right Column: Clean Roofer Architectural Split Photo with Exact Scroll Parallax */}
          <div className="lg:col-span-6">
            <FramerReveal delay={0.2} yOffset={40}>
              <ParallaxImageFrame
                intensity={24}
                className="aspect-[4/3.6] w-full rounded-[12px] shadow-[0_24px_60px_rgba(52,52,43,0.14)]"
              >
                <SafeImage
                  src="/lead-assets/bonhardt-hero-main.png"
                  alt="Bonhardt Roof & Trades Co crew completing a Colorado mountain roofing installation"
                  fallbackLabel="Bonhardt Colorado Roofing Project"
                  className="h-full w-full object-cover"
                />
              </ParallaxImageFrame>
            </FramerReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
