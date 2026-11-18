"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowUpRight, Menu, X } from "lucide-react";
import { BONHARDT_BUSINESS, NAV_LINKS } from "@/data/bonhardt";
import { SafeImage } from "./SafeImage";
import { ROOFER_UI_SPRING } from "./MotionPrimitives";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#F4F4EB]/95 backdrop-blur-md shadow-[0_6px_24px_rgba(52,52,43,0.07)] border-b border-[#E5E5DB]"
          : "bg-[#EFEFE7]/90 backdrop-blur-sm border-b border-[#E5E5DB]/60"
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8">
        {/* Brand Logo — strictly h-8 (32px) matching original Roofer header mark */}
        <a
          href="#hero"
          className="group flex shrink-0 items-center focus:outline-none"
          aria-label={BONHARDT_BUSINESS.name}
        >
          <SafeImage
            src={BONHARDT_BUSINESS.logo}
            alt={BONHARDT_BUSINESS.name}
            className="h-8 max-h-[32px] w-auto object-contain transition-opacity duration-200 group-hover:opacity-85"
          />
        </a>

        {/* Desktop Navigation Links — exact Roofer uppercase tracked menu */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-[13px] font-semibold tracking-[0.06em] uppercase text-[#34342B] transition-colors duration-200 hover:text-[var(--brand-primary)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--brand-primary)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions — Phone + Original Roofer Compact Button (Deep Slate Brand Color) */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href={BONHARDT_BUSINESS.phoneOfficeHref}
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#34342B] transition-colors hover:text-[var(--brand-primary)]"
          >
            <Phone className="h-3.5 w-3.5 text-[#606057]" />
            <span>{BONHARDT_BUSINESS.phoneOffice}</span>
          </a>

          <motion.a
            href="#estimate-form"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={ROOFER_UI_SPRING}
            className="group inline-flex items-center gap-2 rounded-[8px] bg-[var(--brand-primary)] px-5 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[var(--brand-primary-hover)]"
          >
            <span>Free Estimate</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>

        {/* Mobile Burger Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#D8D8CC] bg-white text-[#34342B] transition-colors hover:border-[var(--brand-primary)] lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Framer Spring Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#E5E5DB] bg-[#F4F4EB] lg:hidden"
          >
            <div className="mx-auto flex max-w-[1320px] flex-col gap-1 px-5 py-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-[8px] px-3 py-2.5 text-sm font-semibold tracking-wider uppercase text-[#34342B] transition-colors hover:bg-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-3 border-t border-[#E5E5DB] pt-4">
                <a
                  href={BONHARDT_BUSINESS.phoneOfficeHref}
                  className="flex items-center justify-center gap-2 rounded-[8px] border border-[#D5D5C8] bg-white py-3 text-sm font-bold text-[#34342B]"
                >
                  <Phone className="h-4 w-4 text-[var(--brand-primary)]" />
                  {BONHARDT_BUSINESS.phoneOffice}
                </a>
                <a
                  href="#estimate-form"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-[8px] bg-[var(--brand-primary)] py-3.5 text-sm font-bold text-white"
                >
                  Get Your Free Bonhardt Estimate
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
