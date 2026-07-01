"use client";

import Link from "next/link";
import { useIsPresentationTool } from "next-sanity/hooks";

/**
 * "Exit preview" pill shown while Draft Mode is on. Hidden when the page is
 * embedded inside the Presentation tool (which has its own controls).
 */
export default function DisableDraftMode() {
  const isPresentation = useIsPresentationTool();

  // Inside the Presentation tool, let Presentation manage preview state.
  if (isPresentation) return null;

  return (
    <Link
      href="/api/draft-mode/disable"
      prefetch={false}
      className="fixed bottom-4 left-4 z-50 bg-dark text-white text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-sm border border-copper/40 hover:border-copper transition-colors"
    >
      Exit preview
    </Link>
  );
}
