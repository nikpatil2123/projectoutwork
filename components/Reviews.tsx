"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { awardAccordions, awardBlocks, reviews } from "@/lib/data";

export default function Reviews() {
  const [review, setReview] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const current = reviews[review];

  return (
    <section className="bg-[#151515] text-white min-h-screen">
      <div className="mx-auto max-w-[90rem] px-8 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-3xl text-[2.5rem] leading-[1.1] font-bold md:text-[4rem]">
            Client relationships and industry{" "}
            <span className="text-[#727272]">recognition</span>
          </h2>
          <Link
            href="/testimonials"
            className="rounded-full border border-white bg-white px-5 py-2 text-base font-medium text-black transition-opacity hover:opacity-85"
          >
            View All Reviews
          </Link>
        </div>

        {/* review bento */}
        <div className="mt-12 flex flex-col gap-4 lg:flex-row">
          {/* review slider */}
          <div className="flex flex-[2] flex-col rounded-lg bg-[#212121] p-6 transition-opacity">
            <div className="mb-6 flex gap-2">
              {reviews.map((r, i) => (
                <button
                  key={r.name}
                  type="button"
                  aria-label={`Review ${i + 1}`}
                  onClick={() => setReview(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === review ? "bg-white" : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <blockquote className="flex-1 text-[1.4rem] leading-[1.2] font-medium md:text-[2.1rem]">
              {current.quote}
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <Image
                src={current.image}
                alt={current.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <div className="mb-1 text-[1.2rem]">{current.name}</div>
                <div className="text-[#aaa]">{current.title}</div>
              </div>
            </div>
          </div>

          {/* awards bento column */}
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex h-72 flex-col justify-between rounded-lg bg-[#212121] p-4">
              <div className="flex items-start justify-between">
                <div className="text-[3.5rem] leading-none font-bold">
                  <span className="text-[#b5b5b5]">21+</span> Awards
                </div>
                <Image
                  src="/images/awards-ribbon.svg"
                  alt=""
                  width={56}
                  height={72}
                />
              </div>
              <Link
                href="/awards"
                className="self-start rounded-full border border-white bg-white px-5 py-2 text-base font-medium text-black transition-opacity hover:opacity-85"
              >
                View awards
              </Link>
            </div>
            <div className="flex h-72 flex-col justify-between rounded-lg bg-[#212121] p-4">
              <div>
                <h3 className="mb-1 text-[1.6rem] font-bold">
                  Most recent award
                </h3>
                <div className="text-[#aaa]">Site of the day</div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <Image
                  src="/images/snaxx-logo.svg"
                  alt="Snaxx"
                  width={110}
                  height={36}
                  className="h-9 w-auto"
                />
                <Image
                  src="/images/css-winner-logo.svg"
                  alt="CSS Winner"
                  width={90}
                  height={36}
                  className="h-9 w-auto"
                />
              </div>
              <a
                href="https://www.csswinner.com/details/snaxx-chips/19106"
                target="_blank"
                rel="noreferrer"
                className="self-start rounded-full border border-white bg-white px-5 py-2 text-base font-medium text-black transition-opacity hover:opacity-85"
              >
                View Site
              </a>
            </div>
          </div>
        </div>

        {/* awards & recognition */}
        <div className="mt-24 grid gap-10 lg:grid-cols-[1fr_2fr]">
          <h2 className="text-sm tracking-widest text-[#aaa] uppercase">
            Awards &amp; Recognition
          </h2>
          <div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {awardBlocks.map((a) => (
                <div
                  key={a.label}
                  className="relative flex min-h-[18rem] items-center justify-center overflow-hidden rounded-[11px] bg-[#212121] p-4 text-center"
                >
                  <div className="absolute top-4 right-4 text-base text-[#aaa]">
                    {a.count}
                  </div>
                  <Image
                    src={a.logo}
                    alt={a.label}
                    width={a.small ? 110 : 160}
                    height={60}
                    className="max-w-[11rem] object-contain"
                  />
                  <div className="absolute bottom-4 left-4 text-left text-base text-white">
                    {a.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              {awardAccordions.map((acc, i) => (
                <div key={acc.title} className="border-t border-[#424242]">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenAccordion(openAccordion === i ? null : i)
                    }
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <div className="text-[1.2rem] font-medium">{acc.title}</div>
                    <Image
                      src="/images/chevron.svg"
                      alt=""
                      width={16}
                      height={16}
                      className={`invert transition-transform ${
                        openAccordion === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all ${
                      openAccordion === i ? "max-h-[60rem] pb-4" : "max-h-0"
                    }`}
                  >
                    {acc.rows.map((row) => (
                      <div
                        key={`${row.site}-${row.award}`}
                        className="grid grid-cols-1 items-center gap-2 py-3 sm:grid-cols-3"
                      >
                        <div className="text-base">{row.site}</div>
                        <div className="text-sm text-[#aaa] sm:text-right">
                          {row.award}
                        </div>
                        <div className="sm:text-right">
                          <a
                            href={row.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm underline underline-offset-4 hover:text-[#aaa]"
                          >
                            Visit Website
                          </a>
                        </div>
                      </div>
                    ))}
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
