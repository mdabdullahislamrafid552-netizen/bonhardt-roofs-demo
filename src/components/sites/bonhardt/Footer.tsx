"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { BONHARDT_BUSINESS, CORE_SERVICES, NAV_LINKS } from "@/data/bonhardt";
import { SafeImage } from "./SafeImage";

export function Footer() {
  return (
    <footer className="bg-[#34342B] text-white">
      <div className="mx-auto max-w-[1320px] px-5 pt-20 pb-10 sm:px-8">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column — clean h-8 logo matching header proportions */}
          <div className="lg:col-span-4">
            <a
              href="#hero"
              className="inline-flex rounded-[8px] bg-[#F4F4EB] px-3.5 py-2"
            >
              <SafeImage
                src={BONHARDT_BUSINESS.logo}
                alt={BONHARDT_BUSINESS.name}
                className="h-8 max-h-[32px] w-auto object-contain"
              />
            </a>

            <p className="mt-6 max-w-[330px] text-[15px] leading-[1.7] text-[#D6D6CB]">
              Haag-certified Colorado roofing &amp; exterior restoration experts
              serving Denver Metro, Lakewood, and the Colorado Front Range.{" "}
              <span className="font-semibold text-white">
                {BONHARDT_BUSINESS.tagline}
              </span>
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={BONHARDT_BUSINESS.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-[8px] border border-[#606057] px-3.5 py-2 text-xs font-semibold text-[#E5E5DB] transition-colors hover:border-white hover:bg-[var(--brand-primary)] hover:text-white"
              >
                Facebook
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={BONHARDT_BUSINESS.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-[8px] border border-[#606057] px-3.5 py-2 text-xs font-semibold text-[#E5E5DB] transition-colors hover:border-white hover:bg-[var(--brand-primary)] hover:text-white"
              >
                Instagram
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Our Services Column */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-[17px] font-bold text-white">
              Our Services
            </h3>
            <ul className="mt-5 space-y-3 text-[15px] text-[#ADAD9F]">
              {CORE_SERVICES.slice(0, 5).map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#services"
                    className="transition-colors hover:text-white"
                  >
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-[17px] font-bold text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-[15px] text-[#ADAD9F]">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (Exact Roofer Call us / E-mail / Address layout) */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-[17px] font-bold text-white">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-4 text-[15px] text-[#ADAD9F]">
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#8C8C7E]">
                  Call us:
                </span>
                <a
                  href={BONHARDT_BUSINESS.phoneOfficeHref}
                  className="mt-0.5 block font-semibold text-white hover:underline"
                >
                  {BONHARDT_BUSINESS.phoneOffice}
                </a>
                <a
                  href={BONHARDT_BUSINESS.phoneDirectHref}
                  className="block text-xs text-[#D6D6CB] hover:text-white"
                >
                  Direct: {BONHARDT_BUSINESS.phoneDirect}
                </a>
              </li>

              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#8C8C7E]">
                  E-mail:
                </span>
                <a
                  href={BONHARDT_BUSINESS.emailHref}
                  className="mt-0.5 block font-semibold text-white hover:underline"
                >
                  {BONHARDT_BUSINESS.email}
                </a>
              </li>

              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#8C8C7E]">
                  Address:
                </span>
                <span className="mt-0.5 block text-white">
                  {BONHARDT_BUSINESS.addressLine1}
                </span>
                <span className="block text-[#D6D6CB]">
                  {BONHARDT_BUSINESS.addressLine2}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Custom Credit Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#606057]/45 pt-7 text-center text-xs text-[#ADAD9F] sm:flex-row sm:text-left">
          <p className="font-medium text-[#E5E5DB]">
            {BONHARDT_BUSINESS.footerCredit}
          </p>
          <p>Bonhardt Roof &amp; Trades Co • Lakewood, Colorado</p>
        </div>
      </div>
    </footer>
  );
}
