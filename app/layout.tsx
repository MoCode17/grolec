import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Grolec Electrical Group | Melbourne Electricians",
    template: "%s | Grolec Electrical Group",
  },
  description:
    "Melbourne's trusted electricians. Licensed, insured, and ready for residential, commercial, and emergency electrical work. No surprises. Just solid electrical work.",
  keywords: [
    "electrician Melbourne",
    "electrical contractor Melbourne",
    "residential electrician",
    "commercial electrician",
    "emergency electrician Melbourne",
    "Grolec Electrical",
  ],
  icons: {
    icon: "/images/Brandmark%20Transparent.png",
    apple: "/images/Brandmark%20Transparent.png",
  },
  openGraph: {
    title: "Grolec Electrical Group | Melbourne Electricians",
    description:
      "Melbourne's trusted electricians. Licensed, insured, residential & commercial.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-ink antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
