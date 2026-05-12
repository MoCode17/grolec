"use client";

import { useState, useEffect, useRef } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "emergency", label: "Emergency" },
  { value: "other", label: "Other" },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.phone.trim()) errors.phone = "Phone number is required";
  else if (!/^[\d\s\+\-\(\)]{8,}$/.test(data.phone))
    errors.phone = "Enter a valid phone number";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address";
  if (!data.service) errors.service = "Please select a service";
  return errors;
}

export default function EnquiryForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const inner = el.querySelector<HTMLElement>(".form-inner");
    if (!inner) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          inner.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormData]) {
      const newErrors = validate({ ...form, [name]: value });
      setErrors((prev) => ({
        ...prev,
        [name]: newErrors[name as keyof FormData],
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({
      ...prev,
      [name]: newErrors[name as keyof FormData],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(form).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {} as Record<keyof FormData, boolean>,
    );
    setTouched(allTouched);
    const newErrors = validate(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-cream" id="quote">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="form-inner reveal">
          {/* Header */}
          <div className="max-w-xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-copper" />
              <span className="text-copper text-xs font-semibold uppercase tracking-[0.2em]">
                Get in Touch
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl uppercase text-ink leading-none tracking-wide mb-4">
              Get a Free Quote
            </h2>
            <p className="text-ink-dim text-sm leading-relaxed">
              Tell us what you need and we&apos;ll get back to you within 24
              hours. No obligation, no hard sell.
            </p>
          </div>

          {submitted ? (
            <SuccessState />
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl"
            >
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-ink-muted uppercase tracking-widest font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John Smith"
                  className={`form-input-light ${errors.name && touched.name ? "border-red-500/70" : ""}`}
                />
                {errors.name && touched.name && (
                  <p className="text-red-600 text-xs">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-ink-muted uppercase tracking-widest font-medium">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="0400 000 000"
                  className={`form-input-light ${errors.phone && touched.phone ? "border-red-500/70" : ""}`}
                />
                {errors.phone && touched.phone && (
                  <p className="text-red-600 text-xs">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-ink-muted uppercase tracking-widest font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="john@example.com"
                  className={`form-input-light ${errors.email && touched.email ? "border-red-500/70" : ""}`}
                />
                {errors.email && touched.email && (
                  <p className="text-red-600 text-xs">{errors.email}</p>
                )}
              </div>

              {/* Service */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-ink-muted uppercase tracking-widest font-medium">
                  Service Type *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input-light ${errors.service && touched.service ? "border-red-500/70" : ""}`}
                >
                  {serviceOptions.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                {errors.service && touched.service && (
                  <p className="text-red-600 text-xs">{errors.service}</p>
                )}
              </div>

              {/* Message */}
              <div className="md:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs text-ink-muted uppercase tracking-widest font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Briefly describe what you need help with..."
                  rows={4}
                  className="form-input-light resize-none"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 flex flex-wrap items-center gap-5">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-copper text-sm px-10 py-4 tracking-widest disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0"
                >
                  {loading ? "Sending..." : "Send Enquiry"}
                </button>
                <p className="text-ink-muted text-xs">
                  Need something urgent?{" "}
                  <a
                    href="tel:+61412345678"
                    className="text-copper font-semibold hover:underline"
                  >
                    Call 0412 345 678
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function SuccessState() {
  return (
    <div className="max-w-md">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-sm bg-copper/10 border border-copper/40 flex items-center justify-center">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 11l5 5 9-9"
              stroke="#B84E2C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-heading text-3xl uppercase tracking-wide text-ink">
          Message Sent
        </h3>
      </div>
      <p className="text-ink-dim text-sm leading-relaxed mb-6">
        Thanks for reaching out. We&apos;ll review your enquiry and get back to
        you within 24 hours during business days.
      </p>
      <div className="border-l-2 border-copper pl-4">
        <p className="text-ink-dim text-sm">
          Need something urgent?{" "}
          <a
            href="tel:+61412345678"
            className="text-copper hover:underline font-semibold"
          >
            Call us directly
          </a>
        </p>
      </div>
    </div>
  );
}
