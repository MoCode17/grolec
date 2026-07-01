import type { Metadata } from "next";
import { stegaClean } from "next-sanity";
import EnquiryForm from "@/components/EnquiryForm";
import { safeFetch, sanityFetch } from "@/sanity/lib/live";
import { CONTACT_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import type { ContactPage, SiteSettings } from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Grolec Electrical Group. Free quotes for residential, commercial, and emergency electrical work across Melbourne.",
};

const PhoneIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.15 3.45a1 1 0 01-.23 1.03l-1.4 1.4a11 11 0 005.66 5.66l1.4-1.4a1 1 0 011.03-.23l3.45 1.15A1 1 0 0119 15.72V18a2 2 0 01-2 2C8.16 20 1 12.84 1 5a2 2 0 012-2z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);
const EmailIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const LocationIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export default async function ContactPage() {
  const [contact, settings] = await Promise.all([
    safeFetch(() => sanityFetch({ query: CONTACT_PAGE_QUERY })),
    safeFetch(() => sanityFetch({ query: SITE_SETTINGS_QUERY })),
  ]);
  const page = contact.data as ContactPage | null;
  const s = settings.data as SiteSettings | null;

  const phone = s?.phone ?? "0412 345 678";
  const phoneHref = stegaClean(s?.phoneHref) || "+61412345678";
  const email = s?.email ?? "info@grolec.com.au";
  const address = s?.address ?? "Melbourne, VIC 3000";

  const contactDetails = [
    { label: "Phone", value: phone, href: `tel:${phoneHref}`, icon: PhoneIcon },
    { label: "Email", value: email, href: `mailto:${stegaClean(email)}`, icon: EmailIcon },
    { label: "Location", value: address, href: null, icon: LocationIcon },
  ];
  const hours = s?.businessHours ?? [];

  return (
    <>
      {/* Page hero */}
      <section className="page-hero pt-36 pb-20 px-6 lg:px-10 hero-grain relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(160,64,42,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-copper" />
            <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
              {page?.hero?.eyebrow}
            </span>
          </div>
          <h1 className="font-heading text-6xl md:text-8xl uppercase text-white leading-none tracking-wide mb-6">
            {page?.hero?.heading}
          </h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed">
            {page?.hero?.subtext}
          </p>
        </div>
      </section>

      {/* Contact info + map grid */}
      <section className="py-20 md:py-28 px-6 lg:px-10 bg-dark border-b border-edge">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: details + hours */}
          <div className="flex flex-col gap-10">
            {/* Contact details */}
            <div>
              <h2 className="font-heading text-4xl uppercase text-white tracking-wide mb-7">
                Reach Us Directly
              </h2>
              <div className="flex flex-col gap-4">
                {contactDetails.map(({ label, value, href, icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 bg-surface border border-edge"
                  >
                    <div className="text-copper w-10 h-10 flex items-center justify-center border border-edge rounded-sm bg-dark flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-muted text-xs uppercase tracking-widest font-medium mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-white text-sm hover:text-copper transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business hours */}
            <div>
              <h3 className="font-heading text-3xl uppercase text-white tracking-wide mb-5">
                Business Hours
              </h3>
              <div className="flex flex-col divide-y divide-edge border border-edge">
                {hours.map(({ day, time }, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-5 py-3.5 bg-surface"
                  >
                    <span className="text-white/70 text-sm">{day}</span>
                    <span
                      className={`text-sm font-medium ${
                        (time ?? "").includes("Emergency")
                          ? "text-copper"
                          : "text-white"
                      }`}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-muted text-xs mt-3">
                Emergency callouts available 24/7 — call us any time.
              </p>
            </div>
          </div>

          {/* Right: map embed */}
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-4xl uppercase text-white tracking-wide">
              {page?.findUsHeading}
            </h2>
            <p className="text-muted text-sm mb-3">{page?.findUsText}</p>
            <div className="relative w-full aspect-[4/3] border border-edge overflow-hidden bg-surface">
              {s?.mapEmbedUrl && (
                <iframe
                  src={stegaClean(s.mapEmbedUrl)}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Grolec Electrical Group location"
                  className="absolute inset-0"
                />
              )}
            </div>
            <div className="flex items-center gap-3 p-4 bg-surface border border-copper/20 mt-1">
              <div className="w-2 h-2 rounded-full bg-copper animate-pulse flex-shrink-0" />
              <p className="text-white/70 text-xs">
                <span className="text-copper font-semibold">
                  {s?.emergencyText ?? "Emergency line open 24/7"}
                </span>{" "}
                — Call{" "}
                <a
                  href={`tel:${phoneHref}`}
                  className="text-white hover:text-copper transition-colors"
                >
                  {phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <EnquiryForm
        heading={page?.formHeading}
        subtext={page?.formSubtext}
        phone={phone}
        phoneHref={phoneHref}
      />
    </>
  );
}
