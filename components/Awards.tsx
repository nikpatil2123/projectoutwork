"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { awardBlocks, awardAccordions } from "@/lib/data";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Awards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#151515] text-white py-20">
      <div className="mx-auto max-w-[90rem] px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="lg:w-1/4 shrink-0 lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-[3rem] font-normal leading-[1.1] tracking-tighter text-white md:text-[4.5rem]">
              Awards &<br />
              Recognition
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            {/* Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-16">
              {awardBlocks.map((award, index) => (
                <div
                  key={index}
                  className="relative flex min-h-[220px] flex-col rounded-[10px] bg-[#1c1c1c] p-6 transition-transform duration-300 hover:bg-[#252525]"
                >
                  {/* Count at Top Right */}
                  <div className="mb-auto self-end text-sm text-[#aaa]">
                    {award.count}
                  </div>

                  {/* Logo centered */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <Image
                      src={award.logo}
                      alt={award.label}
                      width={award.small ? 100 : 140}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  {/* Label at Bottom Left */}
                  <div className="mt-auto pt-16 text-sm text-white">
                    {award.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Accordion List */}
            <div className="border-t border-[#333]">
              {awardAccordions.map((acc, index) => (
                <div key={acc.title} className="border-b border-[#333]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center justify-between py-6 text-left text-lg font-medium text-white transition-opacity hover:opacity-70"
                  >
                    {acc.title}
                    <ChevronIcon open={openIndex === index} />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      openIndex === index ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden flex flex-col gap-4">
                      {acc.rows.map((row, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex flex-col gap-2 sm:flex-row sm:items-center justify-between text-sm text-[#aaa]"
                        >
                          <div className="flex-1 text-white font-medium">{row.site}</div>
                          <div className="flex-1">{row.award}</div>
                          <div className="sm:text-right">
                            <Link
                              href={row.href}
                              target="_blank"
                              className="underline decoration-[#555] underline-offset-4 transition-colors hover:text-white"
                            >
                              View site
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
