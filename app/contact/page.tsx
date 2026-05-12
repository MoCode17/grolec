import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Grolec Electrical Group. Free quotes for residential, commercial, and emergency electrical work across Melbourne.",
};

const contactDetails = [
  {
    label: "Phone",
    value: "0412 345 678",
    href: "tel:+61412345678",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.15 3.45a1 1 0 01-.23 1.03l-1.4 1.4a11 11 0 005.66 5.66l1.4-1.4a1 1 0 011.03-.23l3.45 1.15A1 1 0 0119 15.72V18a2 2 0 01-2 2C8.16 20 1 12.84 1 5a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@grolec.com.au",
    href: "mailto:info@grolec.com.au",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="2"
          y="4"
          width="16"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2 7l8 5 8-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Melbourne, VIC 3000",
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const hours = [
  { day: "Monday – Friday", time: "7:00am – 6:00pm" },
  { day: "Saturday", time: "8:00am – 4:00pm" },
  { day: "Sunday", time: "Emergency only" },
  { day: "Public Holidays", time: "Emergency only" },
];

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero pt-36 pb-20 px-6 lg:px-10 hero-grain relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(160,64,42,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-copper" />
            <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
              Get in Touch
            </span>
          </div>
          <h1 className="font-heading text-6xl md:text-8xl uppercase text-white leading-none tracking-wide mb-6">
            Contact Us
          </h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed">
            Free quotes, fast responses. We typically reply within 24 hours on
            business days.
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
                {hours.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex items-center justify-between px-5 py-3.5 bg-surface"
                  >
                    <span className="text-white/70 text-sm">{day}</span>
                    <span
                      className={`text-sm font-medium ${
                        time.includes("Emergency")
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
              Find Us
            </h2>
            <p className="text-muted text-sm mb-3">
              Based in Melbourne CBD, servicing all suburbs.
            </p>
            <div className="relative w-full aspect-[4/3] border border-edge overflow-hidden bg-surface">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345897473!2d144.9537353153167!3d-37.81720797975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sMelbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sau!4v1621234567890!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grolec Electrical Group location"
                className="absolute inset-0"
              />
            </div>
            <div className="flex items-center gap-3 p-4 bg-surface border border-copper/20 mt-1">
              <div className="w-2 h-2 rounded-full bg-copper animate-pulse flex-shrink-0" />
              <p className="text-white/70 text-xs">
                <span className="text-copper font-semibold">
                  Emergency line open 24/7
                </span>{" "}
                — Call{" "}
                <a
                  href="tel:+61412345678"
                  className="text-white hover:text-copper transition-colors"
                >
                  0412 345 678
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <EnquiryForm />
    </>
  );
}
