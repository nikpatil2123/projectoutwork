"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

const categories = ["web", "branding", "ecommerce"] as const;
type Category = (typeof categories)[number];

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

export default function Projects() {
  const [category, setCategory] = useState<Category>("web");
  const track = useRef<HTMLDivElement>(null);

  const filtered = projects.filter((p) => p.categories.includes(category));

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.35, behavior: "smooth" });
  };

  const selectCategory = (c: Category) => {
    setCategory(c);
    track.current?.scrollTo({ left: 0 });
  };

  return (
    <section className="overflow-hidden bg-[#151515] text-white min-h-screen">
      <div className="mx-auto max-w-[90rem] px-8 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-[2.5rem] leading-[1.1] font-bold md:text-[4rem]">
            Projects by category
          </h2>
          <Link
            href="/portfolio-projects"
            className="rounded-full border border-white bg-white px-5 py-2 text-base font-medium text-black transition-opacity hover:opacity-85"
          >
            View All Projects
          </Link>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="flex gap-3">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => selectCategory(c)}
                className={`rounded-[7px] border px-4 py-2 text-base capitalize transition-colors ${
                  category === c
                    ? "border-white bg-white text-black"
                    : "border-white text-white hover:bg-white/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              aria-label="Scroll projects left"
              onClick={() => scrollBy(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white text-black"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              aria-label="Scroll projects right"
              onClick={() => scrollBy(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white text-black"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div
          ref={track}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto"
        >
          {filtered.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="group w-[70%] shrink-0 snap-start sm:w-[40%] md:w-[26%]"
            >
              <div className="overflow-hidden rounded-[10px]">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={500}
                  height={660}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="px-2 py-5 text-[1.6rem] font-bold">{p.name}</h3>
            </Link>
          ))}
          <Link
            href="/portfolio-projects"
            className="group w-[70%] shrink-0 snap-start sm:w-[40%] md:w-[26%]"
          >
            <div className="flex aspect-[3/4] w-full items-center justify-center rounded-[10px] bg-white text-black">
              <span className="text-xl font-bold">View More Projects</span>
            </div>
            <h3 className="px-2 py-5 text-[1.6rem] font-bold">More Projects</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
