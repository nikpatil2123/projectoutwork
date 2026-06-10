import Image from "next/image";
import Link from "next/link";
import { clientLogos } from "@/lib/data";

export default function Clients() {
  return (
    <section className="bg-white min-h-screen">
      <div className="mx-auto max-w-[90rem] px-8 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-xl text-[2.5rem] leading-[1.1] font-bold md:text-[4rem]">
            Our <span className="text-[#727272]">trusted</span> brand clients
          </h2>
          <Link
            href="/testimonials"
            className="rounded-full border border-[#1c1c1c] bg-[#1c1c1c] px-5 py-2 text-base font-medium text-white transition-opacity hover:opacity-85"
          >
            View Reviews
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-[3px] text-center sm:grid-cols-3 md:grid-cols-5">
          {clientLogos.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center bg-[#fafafa] p-8"
            >
              <Image
                src={logo}
                alt=""
                width={140}
                height={48}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
