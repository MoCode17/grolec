import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisableDraftMode from "@/components/DisableDraftMode";
import { safeFetch, sanityFetch, SanityLive } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import type { SiteSettings } from "@/sanity/lib/types";

/**
 * Layout for the public marketing site. The site chrome (Navbar + Footer) lives
 * here rather than in the root layout so that /studio renders full-screen
 * without it. Route groups like (site) don't affect URLs.
 *
 * <SanityLive /> keeps content in sync; <VisualEditing /> renders the
 * click-to-edit overlay only while Draft Mode is active (i.e. in preview).
 */
export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraft } = await draftMode();
  const { data: settings } = await safeFetch(() =>
    sanityFetch({ query: SITE_SETTINGS_QUERY }),
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar settings={settings as SiteSettings | null} />
      <main className="flex-1">{children}</main>
      <Footer settings={settings as SiteSettings | null} />
      <SanityLive />
      {isDraft && (
        <>
          <VisualEditing />
          <DisableDraftMode />
        </>
      )}
    </div>
  );
}
