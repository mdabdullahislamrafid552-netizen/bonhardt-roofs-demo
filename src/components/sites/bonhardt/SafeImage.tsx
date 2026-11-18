"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { assetUrl } from "@/lib/assetUrl";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
}

/**
 * Renders an image with a resilient inline SVG architectural roofing fallback
 * so the layout never displays a broken image icon.
 */
export function SafeImage({
  src,
  alt = "Bonhardt Roof & Trades Co",
  className,
  fallbackLabel,
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#34342B] via-[#2C353D] to-[#434338] text-white/90 select-none",
          className
        )}
      >
        <svg
          viewBox="0 0 240 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-36 opacity-90"
          aria-hidden="true"
        >
          <path
            d="M24 98L120 28L216 98"
            stroke="#E5E5DB"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M46 92V138H194V92"
            stroke="rgba(244,244,235,0.6)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M120 48L168 83H72L120 48Z"
            fill="rgba(229, 229, 219, 0.16)"
            stroke="#E5E5DB"
            strokeWidth="2.5"
          />
          <rect
            x="104"
            y="102"
            width="32"
            height="36"
            rx="4"
            stroke="rgba(244,244,235,0.7)"
            strokeWidth="3"
          />
        </svg>
        <span className="mt-2 px-4 text-center text-xs font-semibold tracking-wider uppercase text-[#E5E5DB]">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  const resolvedSrc = typeof src === "string" ? assetUrl(src) : src;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
