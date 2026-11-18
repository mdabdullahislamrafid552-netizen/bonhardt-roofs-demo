"use client";

import React from "react";
import { BONHARDT_BUSINESS, WHY_CHOOSE_ITEMS } from "@/data/bonhardt";
import { SafeImage } from "./SafeImage";
import { FramerReveal, ParallaxImageFrame } from "./MotionPrimitives";

export function WhyChooseSection() {
  return (
    <section
      id="why-bonhardt"
      className="relative overflow-hidden bg-[var(--surface-canvas)] pt-[96px] pb-[76px] md:pt-[140px] md:pb-[99px]"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Exact Roofer Content-Section-1 Clean Tall Photo */}
          <div className="lg:col-span-6">
            <FramerReveal delay={0.1}>
              <ParallaxImageFrame
                intensity={26}
                className="aspect-[4/3.8] w-full rounded-[12px] shadow-[0_18px_48px_rgba(52,52,43,0.1)]"
              >
                <SafeImage
                  src="/lead-assets/bonhardt-project-commercial.jpg"
                  alt="Bonhardt Roof & Trades Co architectural shingle installation overlooking Denver Capitol"
                  fallbackLabel="Denver Shingle Roof Installation"
                  className="h-full w-full object-cover"
                />
              </ParallaxImageFrame>
            </FramerReveal>
          </div>

          {/* Right Column: Exact Roofer Bold Heading + Body + 3 Checkmark List */}
          <div className="lg:col-span-6">
            <FramerReveal delay={0}>
              <h2 className="font-display text-[36px] leading-[1.15] font-bold tracking-[-0.5px] text-[#34342B] sm:text-[48px] lg:text-[56px]">
                Reasons to choose our roofing services.
              </h2>
            </FramerReveal>

            <FramerReveal delay={0.16}>
              <p className="mt-6 text-[17px] leading-[1.7] text-[#606057] sm:text-[18px]">
                Locally owned in Lakewood by {BONHARDT_BUSINESS.owner} with over
                a decade of Colorado roofing experience. Whether you have hail
                damage or need a full roof replacement, our Haag-certified team
                handles residential and commercial projects with zero pressure.
              </p>
            </FramerReveal>

            {/* 3-Item Roofer Checkmark List using cloned /assets/icons/check.svg */}
            <div className="mt-9 space-y-6">
              {WHY_CHOOSE_ITEMS.map((item, idx) => (
                <FramerReveal
                  key={item.title}
                  delay={0.26 + idx * 0.12}
                  yOffset={24}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center">
                      <SafeImage
                        src="/assets/icons/check.svg"
                        alt="Checkmark"
                        className="h-5 w-5"
                      />
                    </div>
                    <p className="text-[16px] leading-[1.68] text-[#606057]">
                      <strong className="font-bold text-[#34342B]">
                        {item.title}
                      </strong>{" "}
                      {item.description}
                    </p>
                  </div>
                </FramerReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
