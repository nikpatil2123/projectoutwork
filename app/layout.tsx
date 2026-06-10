import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNowDisplay.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

export const metadata: Metadata = {
  title: "Silv Studio | Web Design, Web Development & SEO Agency",
  description:
    "Digital experiences built to out-perform. Web design, web development, ecommerce, visual identity and SEO.",
  icons: { icon: "/images/favicon-small.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${helvetica.variable} antialiased`}>{children}</body>
    </html>
  );
}
