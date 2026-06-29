import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Layout for the public marketing site. The site chrome (Navbar + Footer) lives
 * here rather than in the root layout so that /studio renders full-screen
 * without it. Route groups like (site) don't affect URLs.
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
