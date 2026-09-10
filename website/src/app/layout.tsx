import type { Metadata } from "next";
import { DM_Serif_Display, Manrope, Lobster } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";
import { Analytics } from "@vercel/analytics/next";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kobbi's Oven — From the Oven, With Love",
  description:
    "Handcrafted cakes, cupcakes, pastries, and ice cream from Kobbi's Oven. Custom birthday, wedding, graduation, and celebration cakes baked with love. Order now!",
  keywords: [
    "Kobbi's Oven",
    "bakery",
    "cakes",
    "cupcakes",
    "pastries",
    "ice cream",
    "custom cakes",
    "birthday cakes",
    "wedding cakes",
    "graduation cakes",
    "order cake online",
  ],
  openGraph: {
    title: "Kobbi's Oven — From the Oven, With Love",
    description:
      "Handcrafted cakes, cupcakes, pastries, and ice cream. Custom birthday, wedding, graduation, and celebration cakes baked with love.",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/media/Birthday_cakes/Birthday_cake_1.jpg",
        width: 1200,
        height: 630,
        alt: "Beautiful chocolate cake with roses by Kobbi's Oven",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kobbi's Oven — From the Oven, With Love",
    description:
      "Handcrafted cakes, cupcakes, pastries, and ice cream baked with love.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${manrope.variable} ${lobster.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: "Kobbi's Oven",
              description:
                "Handcrafted cakes, cupcakes, pastries, and ice cream baked with love.",
              telephone: "+254722433102",
              url: "https://kobbisoven.com",
              image: "/media/Brand/Kobbi's_Oven_logo_1.png",
              sameAs: [
                "https://www.instagram.com/kobbis_/?hl=en",
                "https://www.facebook.com/KoBBisOven/",
                "https://www.tiktok.com/@kobbisoven",
              ],
              servesCuisine: "Bakery, Cakes, Pastries, Ice Cream",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
        <Analytics />
      </body>
    </html>
  );
}
