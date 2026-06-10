"use client";

import { useState } from "react";
import Image from "next/image";
import { showreelVideoId, streamCustomer } from "@/lib/data";

export default function Showreel() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative z-[1] bg-white min-h-screen">
      <div className="mx-auto max-w-[90rem] px-8 py-16">
        <div className="relative overflow-hidden rounded-[10px]">
          <Image
            src="/images/poster-e27239ee.jpg"
            alt="Silv Studio showreel"
            width={1280}
            height={720}
            className="aspect-video w-full object-cover"
          />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30"
          >
            <span className="flex items-center gap-3 rounded-full bg-white px-6 py-3 text-base font-medium text-black">
              Play Showreel
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-3xl text-white"
            >
              &times;
            </button>
            <iframe
              src={`https://${streamCustomer}.cloudflarestream.com/${showreelVideoId}/iframe?autoplay=true`}
              className="h-full w-full rounded-[10px]"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
