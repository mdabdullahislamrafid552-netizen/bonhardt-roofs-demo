"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight, X, CheckCircle2 } from "lucide-react";
import { FEATURED_PROJECTS, type ProjectHighlight } from "@/data/bonhardt";
import { SafeImage } from "./SafeImage";
import { FramerReveal, ROOFER_UI_SPRING } from "./MotionPrimitives";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] =
    useState<ProjectHighlight | null>(null);

  return (
    <section
      id="projects"
      className="relative border-b border-[#E5E5DB] bg-white pt-[84px] pb-[111px]"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* Exact Roofer Latest-news Split Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[580px]">
            <FramerReveal delay={0}>
              <h2 className="font-display text-[36px] leading-[1.15] font-bold tracking-[-0.5px] text-[#34342B] sm:text-[48px] lg:text-[56px]">
                Our latest Colorado projects.
              </h2>
            </FramerReveal>
          </div>

          <FramerReveal delay={0.14}>
            <p className="max-w-[440px] text-[16px] leading-[1.7] text-[#606057]">
              Real residential and commercial roofing installations completed by
              Bonhardt Roof &amp; Trades Co across Denver Metro and the Front
              Range.
            </p>
          </FramerReveal>
        </div>

        {/* Exact Roofer 3-Column Card Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURED_PROJECTS.map((project, idx) => (
            <FramerReveal key={project.id} delay={idx * 0.14} yOffset={36}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={ROOFER_UI_SPRING}
                onClick={() => setSelectedProject(project)}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[12px] border border-[#E5E5DB] bg-white transition-all duration-300 hover:border-[var(--brand-primary)] hover:shadow-[0_20px_44px_rgba(52,52,43,0.1)]"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#F4F4EB]">
                  <SafeImage
                    src={project.image}
                    alt={project.title}
                    fallbackLabel={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <span className="inline-block rounded-[6px] bg-[#F4F4EB] px-3 py-1 text-xs font-bold text-[#34342B]">
                      {project.category}
                    </span>

                    <h3 className="mt-4 font-display text-[21px] leading-[1.3] font-bold text-[#34342B] transition-colors group-hover:text-[var(--brand-primary)]">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-[14.5px] leading-[1.68] text-[#606057]">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#E5E5DB] pt-4 text-xs font-semibold text-[#717164]">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[var(--brand-primary)]" />
                      {project.location}
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-[var(--brand-primary)]">
                      View
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            </FramerReveal>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#34342B]/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={ROOFER_UI_SPRING}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[12px] bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project preview"
                className="absolute top-4 right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#34342B]/85 text-white transition-colors hover:bg-[var(--brand-primary)]"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-[16/10] w-full bg-[#F4F4EB]">
                <SafeImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <span className="inline-block rounded-[6px] bg-[#F4F4EB] px-3 py-1 text-xs font-bold text-[#34342B]">
                  {selectedProject.category} • {selectedProject.location}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-[#34342B]">
                  {selectedProject.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#606057]">
                  {selectedProject.summary}
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E5DB] pt-5">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-[#34342B]">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-primary)]" />
                    {selectedProject.metrics}
                  </span>
                  <a
                    href="#estimate-form"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-2 rounded-[8px] bg-[var(--brand-primary)] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[var(--brand-primary-hover)]"
                  >
                    Request Similar Quote
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
