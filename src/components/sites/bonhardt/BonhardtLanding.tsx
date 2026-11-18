"use client";

import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CORE_SERVICES } from "@/data/bonhardt";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { WhyChooseSection } from "./WhyChooseSection";
import { ServicesSection } from "./ServicesSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { EstimateAndReviewsSection } from "./EstimateAndReviewsSection";
import { ProjectsSection } from "./ProjectsSection";
import { FaqSection } from "./FaqSection";
import { Footer } from "./Footer";

export function BonhardtLanding() {
  const [selectedService, setSelectedService] = useState<string>(
    CORE_SERVICES[0].title
  );

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[#F4F4EB] text-[#34342B] antialiased selection:bg-[var(--brand-primary)] selection:text-white">
      {/* Subtle Top Scroll Progress Bar */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-[var(--brand-primary)]"
      />

      <Navbar />

      <main>
        <HeroSection />
        <WhyChooseSection />
        <ServicesSection onSelectService={setSelectedService} />
        <HowItWorksSection />
        <EstimateAndReviewsSection
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />
        <ProjectsSection />
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}
