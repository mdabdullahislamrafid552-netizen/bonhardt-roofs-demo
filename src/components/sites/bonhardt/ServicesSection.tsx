"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BONHARDT_BUSINESS, CORE_SERVICES } from "@/data/bonhardt";
import { SafeImage } from "./SafeImage";
import { FramerReveal, ROOFER_UI_SPRING } from "./MotionPrimitives";

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const handleCardClick = (serviceTitle: string) => {
    onSelectService?.(serviceTitle);
    const el = document.getElementById("estimate-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="services"
      className="relative bg-[var(--surface-canvas)] pt-4 pb-[96px] md:pt-4 md:pb-[116px]"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Exact Roofer Services-section Intro + Button Large */}
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <FramerReveal delay={0}>
              <h2 className="font-display text-[36px] leading-[1.15] font-bold tracking-[-0.5px] text-[#34342B] sm:text-[48px] lg:text-[56px]">
                Professional and quality roofing services.
              </h2>
            </FramerReveal>

            <FramerReveal delay={0.16}>
              <p className="mt-6 text-[17px] leading-[1.7] text-[#606057] sm:text-[18px]">
                Bonhardt Roof &amp; Trades Co delivers all types of residential
                and commercial roofing across {BONHARDT_BUSINESS.serviceAreas.slice(0, 5).join(", ")},
                and the Colorado Front Range—from free hail inspections to full
                exterior restoration.
              </p>
            </FramerReveal>

            <FramerReveal delay={0.28}>
              <div className="mt-9">
                <motion.a
                  href="#estimate-form"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.985 }}
                  transition={ROOFER_UI_SPRING}
                  className="group inline-flex items-center gap-2.5 rounded-[8px] bg-[var(--brand-primary)] px-7 py-[20px] text-[15px] font-bold text-white transition-colors hover:bg-[var(--brand-primary-hover)]"
                >
                  <span>Get Your Free Bonhardt Estimate</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              </div>
            </FramerReveal>
          </div>

          {/* Right Column: Exact Roofer 2x3 Crisp White Service Cards (Variant 1 -> Variant 2 Hover) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {CORE_SERVICES.map((service, idx) => (
                <FramerReveal
                  key={service.id}
                  delay={(idx % 2) * 0.14 + Math.floor(idx / 2) * 0.08}
                  yOffset={36}
                >
                  <motion.button
                    type="button"
                    onClick={() => handleCardClick(service.title)}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.99 }}
                    transition={ROOFER_UI_SPRING}
                    className="group flex h-full w-full flex-col justify-between rounded-[12px] border border-[#E5E5DB] bg-white p-8 text-left transition-all duration-300 hover:border-[var(--brand-primary)] hover:bg-[#34342B] hover:shadow-[0_20px_44px_rgba(52,52,43,0.14)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                  >
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#F4F4EB] transition-colors duration-300 group-hover:bg-white">
                        <SafeImage
                          src={service.iconPath}
                          alt={service.title}
                          className="h-8 w-8 object-contain"
                        />
                      </div>

                      <h3 className="mt-7 font-display text-[22px] leading-[1.25] font-bold text-[#34342B] transition-colors group-hover:text-white">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-[1.68] text-[#606057] transition-colors group-hover:text-[#D6D6CB]">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="mt-7 flex items-center gap-1.5 text-xs font-bold tracking-[0.06em] uppercase text-[var(--brand-primary)] transition-colors group-hover:text-[#E5E5DB]">
                      <span>Request Quote</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </motion.button>
                </FramerReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
