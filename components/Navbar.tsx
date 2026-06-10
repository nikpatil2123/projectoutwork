"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { pullOutProjects } from "@/lib/data";

const serviceLinks = [
  { label: "Web Design", href: "/services/website-design" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Ecommerce", href: "/services/ecommerce" },
  { label: "Visual Identity", href: "/services/branding" },
  { label: "SEO", href: "/services/search-engine-optimization" },
];

const companyLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Awards", href: "/awards" },
];

const mainLinks = [
  { label: "Projects", href: "/portfolio-projects" },
  { label: "Templates", href: "https://www.silvtemplates.com/" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "About Us", href: "/about-us" },
];

type Panel = "main" | "services" | "company";

function MenuRow({
  label,
  href,
  onClick,
}: {
  label: string;
  href?: string;
  onClick?: () => void;
}) {
  const inner = (
    <>
      <div className="text-[1.4rem] font-medium">{label}</div>
      <Image
        src="/images/svgexport-21.svg"
        alt=""
        width={18}
        height={18}
        className="opacity-70 invert"
      />
    </>
  );
  const cls =
    "flex w-full cursor-pointer items-center justify-between border-b border-[#333] py-4 text-left text-white transition-opacity hover:opacity-70";
  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<Panel>("main");

  const close = () => {
    setOpen(false);
    setPanel("main");
  };

  return (
    <>
      <div className="absolute inset-x-0 top-0 z-50 flex items-center justify-center text-white">
        <div className="w-full max-w-[90rem] px-8 py-[1.3rem]">
          <div className="flex w-full items-center justify-between gap-6">
            <Link href="/" className="shrink-0">
              <Image
                src="/images/silv-studio-logo.svg"
                alt="Silv Studio"
                width={130}
                height={32}
                priority
              />
            </Link>
            <div className="flex items-center gap-2">
              <nav className="hidden items-center gap-1 md:flex">
                {[
                  { label: "About", href: "/about-us" },
                  { label: "Services", href: "/services" },
                  { label: "Projects", href: "/portfolio-projects" },
                ].map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="rounded-[10px] px-[10px] py-1 leading-6 transition-opacity hover:opacity-70"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact-us"
                className="hidden rounded-full border border-white bg-white px-5 py-2 text-base font-medium text-black transition-opacity hover:opacity-85 md:inline-block"
              >
                Contact Us
              </Link>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="ml-2 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full"
              >
                <span className="block h-[2px] w-6 bg-white" />
                <span className="block h-[2px] w-6 bg-white" />
                <span className="block h-[2px] w-6 bg-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* pull-out menu */}
      <div
        className={`fixed inset-0 z-[90] bg-black/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
      />
      <aside
        className={`fixed top-0 right-0 z-[100] flex h-full w-full max-w-[44rem] transform gap-3 p-3 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* recent projects rail (desktop only) */}
        <div className="hidden h-full flex-1 flex-col overflow-hidden rounded-2xl bg-[#1c1c1c] p-5 text-white lg:flex">
          <div className="mb-4 text-sm tracking-wide text-[#aaa] uppercase">
            Recent Projects
          </div>
          <div className="no-scrollbar flex-1 space-y-4 overflow-y-auto">
            {pullOutProjects.map((p) => (
              <Link key={p.name} href={p.href} className="group block">
                <div className="overflow-hidden rounded-[10px]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="py-2 text-base font-bold">{p.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* menu panel */}
        <div className="flex h-full w-full max-w-[22rem] flex-col rounded-2xl bg-[#151515] p-6 text-white">
          <div className="mb-6 flex items-center justify-between">
            {panel === "main" ? (
              <div className="text-sm tracking-wide text-[#aaa] uppercase">
                Menu
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setPanel("main")}
                aria-label="Back"
                className="flex items-center gap-2 text-sm text-[#aaa]"
              >
                <Image
                  src="/images/chevron.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="rotate-90 invert"
                />
                Back
              </button>
            )}
            <button type="button" onClick={close} aria-label="Close menu">
              <Image
                src="/images/X.svg"
                alt=""
                width={18}
                height={18}
                className="invert"
              />
            </button>
          </div>

          {panel === "main" && (
            <nav>
              <MenuRow label="Services" onClick={() => setPanel("services")} />
              <MenuRow label="Company" onClick={() => setPanel("company")} />
              {mainLinks.map((l) => (
                <MenuRow key={l.label} label={l.label} href={l.href} />
              ))}
            </nav>
          )}
          {panel === "services" && (
            <nav>
              {serviceLinks.map((l) => (
                <MenuRow key={l.label} label={l.label} href={l.href} />
              ))}
            </nav>
          )}
          {panel === "company" && (
            <nav>
              {companyLinks.map((l) => (
                <MenuRow key={l.label} label={l.label} href={l.href} />
              ))}
            </nav>
          )}
        </div>
      </aside>
    </>
  );
}
