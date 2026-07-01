import Image from "next/image";
import Link from "next/link";
import { stegaClean } from "next-sanity";
import type { SiteSettings } from "@/sanity/lib/types";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#residential", label: "Residential" },
  { href: "/services#commercial", label: "Commercial" },
  { href: "/services#emergency", label: "Emergency" },
];

export default function Footer({
  settings,
}: {
  settings?: SiteSettings | null;
}) {
  const phone = settings?.phone ?? "0412 345 678";
  const phoneHref = stegaClean(settings?.phoneHref) || "+61412345678";
  const email = settings?.email ?? "info@grolec.com.au";
  const address = settings?.address ?? "Melbourne, VIC 3000";
  return (
    <footer className="bg-dark text-white border-t border-edge">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand col */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Image
              src="/images/Brandmark%20Transparent.png"
              alt="Grolec Electrical Group"
              width={200}
              height={56}
              className="h-12 w-auto object-contain object-left"
            />
            <p className="text-snow-dim text-sm leading-relaxed max-w-xs">
              Melbourne&apos;s trusted electrical contractors. Licensed,
              insured, and committed to quality workmanship on every job.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-copper uppercase tracking-widest font-semibold">
                Powering Your Ideas.
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-snow-dim hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-snow-dim hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${phoneHref}`}
                  className="text-sm text-snow-dim hover:text-white transition-colors"
                >
                  {phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${stegaClean(email)}`}
                  className="text-sm text-snow-dim hover:text-white transition-colors"
                >
                  {email}
                </a>
              </li>
              <li>
                <span className="text-sm text-snow-dim">{address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copper rule */}
        <div className="copper-rule" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-6">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Grolec Electrical Group. All
            rights reserved.
          </p>
          <p className="text-xs text-muted">
            Licensed Electrical Contractor &mdash; Victoria, Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
