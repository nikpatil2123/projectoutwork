"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroExploreLinks, heroSlides } from "@/lib/data";

const STORY_MS = 4000;

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

export default function Hero() {
  const [active, setActive] = useState(0);
  const [story, setStory] = useState(0);

  const next = useCallback(() => {
    setActive((a) => (a + 1) % heroSlides.length);
    setStory(0);
  }, []);
  const prev = useCallback(() => {
    setActive((a) => (a - 1 + heroSlides.length) % heroSlides.length);
    setStory(0);
  }, []);

  // advance the active slide's story; roll to next slide after the last story
  useEffect(() => {
    const stories = heroSlides[active].stories.length;
    const t = setTimeout(() => {
      if (story + 1 < stories) {
        setStory(story + 1);
      } else {
        setActive((a) => (a + 1) % heroSlides.length);
        setStory(0);
      }
    }, STORY_MS);
    return () => clearTimeout(t);
  }, [active, story]);

  return (
    <section className="relative overflow-hidden bg-[#151515] text-white min-h-screen">
      <div className="mx-auto max-w-[90rem] px-8 pt-[9.1rem] pb-12">
        {/* heading + explore links */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[95%] md:max-w-[70%]">
            <h1 className="mb-4 text-[2.2rem] font-bold leading-[1.1] md:text-[4.5rem]">
              Digital experiences<br className="hidden md:block" /> built to{" "}
              <span className="text-[#727272]">out-perform.</span>
            </h1>
          </div>
          <div className="mt-6 flex flex-col md:mt-0 md:w-[200px]">
            <div className="mb-3 text-base text-white">
              Explore
            </div>
            <div className="flex flex-wrap gap-3 md:flex-col">
              {heroExploreLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="flex w-fit items-center justify-center rounded-[90px] border border-white px-5 py-2 text-sm transition-colors hover:bg-white hover:text-black"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 h-px bg-[#3f3f3f]" />

        {/* slider heading row */}
        <div className="mt-8 flex items-center justify-between">
          <Link
            href="/portfolio-projects"
            className="rounded-full border border-white bg-white px-5 py-2 text-base font-medium text-black transition-opacity hover:opacity-85"
          >
            View All Projects
          </Link>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous project"
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white text-black transition-opacity hover:opacity-85"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white text-black transition-opacity hover:opacity-85"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </div>

      {/* story slider */}
      <div className="mx-auto max-w-[90rem] px-8 pb-20">
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out [--slide-width:85%] md:[--slide-width:65%]"
            style={{
              transform: `translateX(max(calc(-1 * ${active} * (var(--slide-width) + 1.5rem)), min(0px, calc(100% - (var(--slide-width) * ${heroSlides.length} + 1.5rem * ${heroSlides.length - 1})))))`,
            }}
          >
            {heroSlides.map((slide, i) => (
              <div key={slide.name} className="min-w-[85%] shrink-0 md:min-w-[65%]">
                <Link href={slide.href} className="group block">
                  <div className="relative overflow-hidden rounded-[10px]">
                    {/* story progress meters */}
                    <div className="absolute inset-x-0 top-0 z-10 flex gap-1.5 p-3">
                      {slide.stories.map((s, si) => (
                        <div
                          key={s}
                          className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/30"
                        >
                          <div
                            className={
                              i === active && si === story
                                ? "story-fill-active h-full bg-white"
                                : "h-full bg-white"
                            }
                            style={{
                              width:
                                i === active && si === story
                                  ? undefined
                                  : i === active && si < story
                                    ? "100%"
                                    : "0%",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="relative aspect-[4/3] w-full md:aspect-[16/10]">
                      {slide.stories.map((s, si) => (
                        <Image
                          key={s}
                          src={s}
                          alt={slide.name}
                          fill
                          sizes="(max-width: 768px) 85vw, 65vw"
                          priority={i === 0 && si === 0}
                          className={`object-cover transition-opacity duration-300 ${
                            i === active
                              ? si === story
                                ? "opacity-100"
                                : "opacity-0"
                              : si === 0
                                ? "opacity-100"
                                : "opacity-0"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <h2 className="py-4 text-[1.6rem] font-bold">{slide.name}</h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
