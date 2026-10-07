import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Sora, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const heading = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rumbathemeatfactory.com"),
  title: {
    default: "Rumba - The Meat Factory",
    template: "%s · Rumba",
  },
  description:
    "Premium steakhouse serving the finest Tenderloin, Sirloin, and Ribeye Steaks. Experience our signature flame-grilled meats and platters.",
  keywords: [
    "steak house",
    "premium restaurant",
    "Rumba The Meat Factory",
    "steaks",
    "grill platter",
    "Islamabad",
  ],
  openGraph: {
    title: "Rumba - The Meat Factory",
    description:
      "Premium steakhouse serving the finest Tenderloin, Sirloin, and Ribeye Steaks.",
    type: "website",
    images: ["/logo.jpg"],
  },
  icons: { icon: "/logo.jpg" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${heading.variable} ${body.variable}`}
    >
      <body className="noise-overlay">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
