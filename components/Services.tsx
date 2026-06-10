"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={direction === "left" ? "rotate-180" : ""}
    >
      <path
        d="M5 12h14m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Services() {
  const track = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.4, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-[#f0f0f0] min-h-screen">
      <div className="mx-auto max-w-[90rem] px-8 pt-28 pb-16">
        <h2 className="mb-6 text-[2.5rem] leading-[1.1] font-bold md:text-[4rem]">
          What we <span className="text-[#727272]">offer</span>
        </h2>
        <div className="flex items-center justify-between">
          <Link
            href="/services"
            className="rounded-full border border-[#1c1c1c] bg-[#1c1c1c] px-5 py-2 text-base font-medium text-white transition-opacity hover:opacity-85"
          >
            View All Services
          </Link>
          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              aria-label="Scroll services left"
              onClick={() => scrollBy(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1c1c1c] bg-white text-black"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              aria-label="Scroll services right"
              onClick={() => scrollBy(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1c1c1c] bg-white text-black"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div
          ref={track}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-8 overflow-x-auto"
        >
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group w-[80%] shrink-0 snap-start md:w-[31%]"
            >
              <div className="overflow-hidden rounded-[10px]">
                <Image
                  src={s.image}
                  alt={s.title}
                  width={600}
                  height={750}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-2 p-3">
                <h3 className="mb-3 text-[1.6rem] font-bold">{s.title}</h3>
                <p className="mb-4 text-base text-[#444]">{s.description}</p>
                <div className="text-base font-medium underline underline-offset-4">
                  View Service
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
