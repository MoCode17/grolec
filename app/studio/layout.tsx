import type { Metadata } from "next";

/**
 * The Studio renders full-screen and must NOT be indexed by search engines.
 * This layout deliberately renders only its children — no site Navbar/Footer
 * (those live in the (site) route group).
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
