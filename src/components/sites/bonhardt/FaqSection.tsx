"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ_ITEMS, BONHARDT_BUSINESS } from "@/data/bonhardt";
import { FramerReveal, ROOFER_UI_SPRING } from "./MotionPrimitives";

export function FaqSection() {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  return (
    <section
      id="faq"
      className="relative bg-white pt-[98px] pb-[135px]"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Exact Roofer FAQ Heading */}
          <div className="lg:col-span-5">
            <FramerReveal delay={0}>
              <h2 className="font-display text-[36px] leading-[1.15] font-bold tracking-[-0.5px] text-[#34342B] sm:text-[48px] lg:text-[56px]">
                Frequently asked questions.
              </h2>
            </FramerReveal>
            <FramerReveal delay={0.14}>
              <p className="mt-5 text-[17px] leading-[1.7] text-[#606057]">
                We offer a full range of residential and commercial Colorado
                roofing services, Haag-certified hail inspections, and direct
                insurance guidance.
              </p>
            </FramerReveal>

            <FramerReveal delay={0.24}>
              <div className="mt-8 rounded-[12px] border border-[#E5E5DB] bg-[#F4F4EB] p-6">
                <p className="text-sm font-bold text-[#34342B]">
                  Speak directly with {BONHARDT_BUSINESS.owner}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#606057]">
                  Office:{" "}
                  <a
                    href={BONHARDT_BUSINESS.phoneOfficeHref}
                    className="font-bold text-[var(--brand-primary)] underline-offset-2 hover:underline"
                  >
                    {BONHARDT_BUSINESS.phoneOffice}
                  </a>{" "}
                  • Direct:{" "}
                  <a
                    href={BONHARDT_BUSINESS.phoneDirectHref}
                    className="font-bold text-[var(--brand-primary)] underline-offset-2 hover:underline"
                  >
                    {BONHARDT_BUSINESS.phoneDirect}
                  </a>
                </p>
              </div>
            </FramerReveal>
          </div>

          {/* Right Column: Exact Roofer Spring Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openId === item.id;
                return (
                  <FramerReveal key={item.id} delay={idx * 0.08} yOffset={24}>
                    <div
                      className={`overflow-hidden rounded-[12px] border transition-colors duration-300 ${
                        isOpen
                          ? "border-[var(--brand-primary)] bg-[#F4F4EB]"
                          : "border-[#E5E5DB] bg-white hover:border-[#ADAD9F]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? "" : item.id)}
                        aria-expanded={isOpen}
                        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="font-display text-[18px] font-bold text-[#34342B] sm:text-[19px]">
                          {item.question}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={ROOFER_UI_SPRING}
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                            isOpen
                              ? "bg-[var(--brand-primary)] text-white"
                              : "bg-[#F4F4EB] text-[#34342B]"
                          }`}
                        >
                          <Plus className="h-4 w-4" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-[15.5px] leading-[1.7] text-[#606057]">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </FramerReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
