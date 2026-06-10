import Image from "next/image";
import Link from "next/link";
import { footerColumns, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#151515] pt-8 text-white">
      {/* CTA */}
      <div className="mx-auto max-w-[90rem] px-8 py-24">
        <div className="flex flex-col lg:flex-row flex-wrap items-end justify-between gap-10 rounded-[20px] bg-white p-12 lg:p-20 shadow-sm border border-gray-100">
          <div>
            <h2 className="text-[3rem] leading-[1.1] font-bold md:text-[5.5rem] tracking-tight text-black">
              Got a project in mind?
            </h2>
            <h2 className="text-[3rem] leading-[1.1] font-bold text-[#b3b3b3] md:text-[5.5rem] tracking-tight">
              Let&rsquo;s talk.
            </h2>
          </div>
          <Link
            href="/contact-us"
            className="rounded-full bg-[#1c1c1c] px-8 py-4 text-base font-medium text-white transition-colors hover:bg-black"
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* footer */}
      <div className="mx-auto max-w-[90rem] px-8 pb-12">
        <Link href="/" className="block">
          <Image
            src="/images/silv-studio-logo-large.svg"
            alt="Silv Studio"
            width={1200}
            height={200}
            className="h-auto w-full"
          />
        </Link>

        <div className="mt-16 flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <div className="mb-4 font-medium">{col.title}</div>
                <div className="flex flex-col gap-2">
                  {col.links.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      className="text-base text-[#aaa] transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-10 sm:flex-row lg:flex-col">
            <div>
              <div className="mb-4 font-medium">Follow</div>
              <div className="flex flex-col gap-2">
                {socialLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base text-[#aaa] transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <form className="flex flex-col items-start gap-3" action="#">
              <div className="font-medium">Silv Studio Newsletter</div>
              <div className="flex w-full max-w-xs gap-2">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full rounded-full border border-[#424242] bg-transparent px-4 py-2 text-base text-white placeholder:text-[#727272] focus:border-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-white px-5 py-2 text-base font-medium text-black"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#2a2a2a] pt-6 text-base text-[#aaa]">
          <div>Copyright @ 2026 Silv Studio</div>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
