"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  CheckCircle2,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import {
  BONHARDT_BUSINESS,
  CLIENT_REVIEWS,
  CORE_SERVICES,
} from "@/data/bonhardt";
import { SafeImage } from "./SafeImage";
import {
  FramerReveal,
  AnimatedCounter,
  ROOFER_UI_SPRING,
} from "./MotionPrimitives";

interface EstimateAndReviewsSectionProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

export function EstimateAndReviewsSection({
  selectedService,
  onServiceChange,
}: EstimateAndReviewsSectionProps) {
  const [activeReview, setActiveReview] = useState(0);
  const [projectMode, setProjectMode] = useState<
    "Insurance Claim" | "Retail Project"
  >("Insurance Claim");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handlePrevReview = () => {
    setActiveReview((prev) =>
      prev === 0 ? CLIENT_REVIEWS.length - 1 : prev - 1
    );
  };

  const handleNextReview = () => {
    setActiveReview((prev) =>
      prev === CLIENT_REVIEWS.length - 1 ? 0 : prev + 1
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) return;
    setSubmitted(true);
  };

  const currentReview = CLIENT_REVIEWS[activeReview];

  return (
    <section
      id="estimate-form"
      className="relative overflow-hidden bg-[#34342B] py-[96px] text-white md:py-[128px]"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Exact Roofer CTA & Client Reviews Block (#34342B / #434338) */}
          <div className="lg:col-span-6">
            <FramerReveal delay={0}>
              <h2 className="font-display text-[36px] leading-[1.14] font-bold tracking-[-0.5px] text-white sm:text-[48px] lg:text-[54px]">
                Are you ready to get your roofing service?
              </h2>
            </FramerReveal>

            <FramerReveal delay={0.14}>
              <p className="mt-5 max-w-[520px] text-[17px] leading-[1.7] text-[#D6D6CB]">
                We proudly serve Denver Metro and Colorado Front Range property
                owners with Haag-certified inspections, direct insurance
                advocacy, and a leak-proof 5-year workmanship warranty.
              </p>
            </FramerReveal>

            {/* Roofer Stats Strip */}
            <FramerReveal delay={0.24}>
              <div className="mt-8 grid grid-cols-3 gap-5 border-y border-[#606057]/50 py-6">
                <div>
                  <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                    <AnimatedCounter target={5.0} decimals={1} suffix="★" />
                  </div>
                  <p className="mt-1 text-xs font-medium text-[#ADAD9F]">
                    Google Rating
                  </p>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                    <AnimatedCounter target={5} suffix=" Yr" />
                  </div>
                  <p className="mt-1 text-xs font-medium text-[#ADAD9F]">
                    Workmanship Warranty
                  </p>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                    <AnimatedCounter target={100} suffix="%" />
                  </div>
                  <p className="mt-1 text-xs font-medium text-[#ADAD9F]">
                    Haag Certified
                  </p>
                </div>
              </div>
            </FramerReveal>

            {/* Interactive Verified Google Review Card */}
            <FramerReveal delay={0.34}>
              <div className="mt-8 rounded-[12px] border border-[#606057]/45 bg-[#434338] p-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#E5E5DB]">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#F4F4EB] text-[#F4F4EB]"
                      />
                    ))}
                    <span className="ml-2 text-xs font-semibold text-[#D6D6CB]">
                      Verified Google Review
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrevReview}
                      aria-label="Previous client review"
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#717164] bg-transparent text-white transition-colors hover:border-white hover:bg-[var(--brand-primary)]"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextReview}
                      aria-label="Next client review"
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#717164] bg-transparent text-white transition-colors hover:border-white hover:bg-[var(--brand-primary)]"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReview.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.24 }}
                    className="mt-5"
                  >
                    <p className="text-[16px] leading-[1.7] text-[#F4F4EB]">
                      &ldquo;{currentReview.quote}&rdquo;
                    </p>
                    <div className="mt-6 flex items-center gap-3.5">
                      <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#717164]">
                        <SafeImage
                          src={currentReview.avatar}
                          alt={currentReview.author}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-white">
                          {currentReview.author}
                        </p>
                        <p className="text-xs text-[#ADAD9F]">
                          {currentReview.date} • Denver Metro, CO
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </FramerReveal>

            <FramerReveal delay={0.42}>
              <div className="mt-7 flex flex-wrap items-center gap-6 text-sm text-[#D6D6CB]">
                <a
                  href={BONHARDT_BUSINESS.phoneOfficeHref}
                  className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#ADAD9F]" />
                  Office: {BONHARDT_BUSINESS.phoneOffice}
                </a>
                <a
                  href={BONHARDT_BUSINESS.emailHref}
                  className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-[#ADAD9F]" />
                  {BONHARDT_BUSINESS.email}
                </a>
              </div>
            </FramerReveal>
          </div>

          {/* Right Column: Lead Capture Form styled with Roofer's clean light card + deep slate CTA */}
          <div className="lg:col-span-6">
            <FramerReveal delay={0.18}>
              <div className="rounded-[12px] border border-[#E5E5DB] bg-[#F4F4EB] p-7 text-[#34342B] shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:p-9">
                <div className="mb-6">
                  <h3 className="font-display text-[28px] leading-[1.2] font-bold tracking-[-0.4px] text-[#34342B] sm:text-[32px]">
                    Get Your Free Bonhardt Estimate
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#606057]">
                    Free, no-pressure Haag-certified roof inspection with full
                    photo &amp; hail history report across Lakewood and Denver
                    Metro.
                  </p>
                </div>

                {/* Insurance vs Retail Switcher */}
                <div className="mb-6 grid grid-cols-2 gap-2 rounded-[8px] border border-[#E5E5DB] bg-white p-1.5">
                  {(["Insurance Claim", "Retail Project"] as const).map(
                    (mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setProjectMode(mode)}
                        className={`cursor-pointer rounded-[6px] py-2.5 text-xs font-bold transition-all sm:text-sm ${
                          projectMode === mode
                            ? "bg-[var(--brand-primary)] text-white"
                            : "text-[#606057] hover:text-[#34342B]"
                        }`}
                      >
                        {mode}
                      </button>
                    )
                  )}
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={ROOFER_UI_SPRING}
                    className="rounded-[10px] border border-[#D5D5C8] bg-white p-7 text-center"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-primary)] text-white">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h4 className="mt-4 font-display text-2xl font-bold text-[#34342B]">
                      Estimate Request Received
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#606057]">
                      Thank you, <strong>{formData.fullName}</strong>.{" "}
                      {BONHARDT_BUSINESS.owner} or a Bonhardt specialist will
                      reach out at <strong>{formData.phone}</strong> regarding
                      your <strong>{selectedService}</strong> ({projectMode}).
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: "",
                          phone: "",
                          email: "",
                          address: "",
                          notes: "",
                        });
                      }}
                      className="mt-6 cursor-pointer rounded-[8px] border-[2px] border-[#D5D5C8] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#34342B] transition-colors hover:border-[var(--brand-primary)]"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="mb-1.5 block text-xs font-bold tracking-wider uppercase text-[#606057]"
                        >
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          placeholder="Full Name"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
                          className="w-full rounded-[8px] border border-[#E5E5DB] bg-white px-4 py-3.5 text-sm text-[#34342B] placeholder-[#909082] transition-colors focus:border-[var(--brand-primary)] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1.5 block text-xs font-bold tracking-wider uppercase text-[#606057]"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="(720) 555-0192"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full rounded-[8px] border border-[#E5E5DB] bg-white px-4 py-3.5 text-sm text-[#34342B] placeholder-[#909082] transition-colors focus:border-[var(--brand-primary)] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-xs font-bold tracking-wider uppercase text-[#606057]"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full rounded-[8px] border border-[#E5E5DB] bg-white px-4 py-3.5 text-sm text-[#34342B] placeholder-[#909082] transition-colors focus:border-[var(--brand-primary)] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="address"
                          className="mb-1.5 block text-xs font-bold tracking-wider uppercase text-[#606057]"
                        >
                          City / ZIP
                        </label>
                        <input
                          id="address"
                          name="address"
                          type="text"
                          placeholder="Lakewood, CO 80215"
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              address: e.target.value,
                            })
                          }
                          className="w-full rounded-[8px] border border-[#E5E5DB] bg-white px-4 py-3.5 text-sm text-[#34342B] placeholder-[#909082] transition-colors focus:border-[var(--brand-primary)] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-1.5 block text-xs font-bold tracking-wider uppercase text-[#606057]"
                      >
                        Service You Need
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={selectedService}
                        onChange={(e) => onServiceChange(e.target.value)}
                        className="w-full rounded-[8px] border border-[#E5E5DB] bg-white px-4 py-3.5 text-sm text-[#34342B] transition-colors focus:border-[var(--brand-primary)] focus:outline-none"
                      >
                        {CORE_SERVICES.map((svc) => (
                          <option key={svc.id} value={svc.title}>
                            {svc.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="notes"
                        className="mb-1.5 block text-xs font-bold tracking-wider uppercase text-[#606057]"
                      >
                        How Can We Help?
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        placeholder="Share recent hail storm date, leak location, or material preference..."
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        className="w-full resize-none rounded-[8px] border border-[#E5E5DB] bg-white px-4 py-3 text-sm text-[#34342B] placeholder-[#909082] transition-colors focus:border-[var(--brand-primary)] focus:outline-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ y: -2, scale: 1.008 }}
                      whileTap={{ scale: 0.985 }}
                      transition={ROOFER_UI_SPRING}
                      className="group mt-2 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-[8px] bg-[var(--brand-primary)] px-6 py-[20px] text-[15px] font-bold text-white transition-colors hover:bg-[var(--brand-primary-hover)]"
                    >
                      <span>Get Your Free Bonhardt Estimate</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.button>
                  </form>
                )}
              </div>
            </FramerReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
