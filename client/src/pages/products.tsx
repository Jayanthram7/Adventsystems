"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  CloudCog,
  Code2,
  TrendingUp,
  Cloud,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Brain
} from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  company: string;
  license: string;
  issue: string;
};

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
function HoloIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-grid place-items-center size-12 rounded-2xl bg-white">
      {/* holographic glow */}
      <span className="absolute -inset-1 rounded-3xl bg-[conic-gradient(at_30%_30%,#60a5fa, #22d3ee, #a78bfa, #f472b6, #60a5fa)] opacity-30 blur-md" />
      {/* inner soft gradient */}
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-fuchsia-500/10" />
      {/* subtle ring */}
      <span className="absolute inset-0 rounded-2xl ring-2 ring-white/70 shadow-[inset_0_0_0_1px_rgba(59,130,246,.25)]" />
      {/* content */}
      <span className="relative text-blue-600">
        {children}
      </span>
    </span>
  );
}

function ProductCard({
  icon: Icon,
  title,
  description,
  accent = "blue",
}: {
  icon: any;
  title: string;
  description: string;
  accent?: "blue" | "orange" | "green" | "indigo";
}) {
  const accentMap = {
    blue: "text-blue-700 bg-blue-50",
    orange: "text-orange-600 bg-orange-50",
    green: "text-green-600 bg-green-50",
    indigo: "text-indigo-600 bg-indigo-50",
  } as const;

  return (
    <div className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className={classNames(
          "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl",
          accentMap[accent]
        )}
      >
        <Icon className={classNames("h-6 w-6", accentMap[accent].split(" ")[0])} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Learn more
        <ChevronRight className="ml-1 h-4 w-4" />
      </div>

      {/* subtle gradient highlight on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-x-0 -top-1 mx-auto h-1 w-11/12 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20" />
      </div>
    </div>
  );
}

function Backdrop({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[1px]"
      onClick={onClick}
      aria-hidden="true"
    />
  );
}

export default function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const initialData: FormData = { name: "", phone: "", company: "", license: "", issue: "" };
  const [formData, setFormData] = useState<FormData>(initialData);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const openButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetForm = () => setFormData(initialData);

  const sendToWhatsApp = () => {
    // Basic validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.issue.trim()) {
      alert("Please fill Name, Phone, and Issue.");
      return;
    }

    const phoneNumber = "919965576297"; // your WhatsApp number in international format
    const message = `*New Support Request*\nName: ${formData.name}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nLicense: ${formData.license || "N/A"}\nIssue: ${formData.issue}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
    resetForm();
  };

  // Accessibility: focus trap and ESC close
  useEffect(() => {
    if (isOpen) {
      const previouslyFocused = document.activeElement as HTMLElement | null;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusable?.[0]?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
        if (e.key === "Tab" && focusable && focusable.length > 0) {
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        previouslyFocused?.focus();
      };
    }
  }, [isOpen]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60" />
        <div className="absolute top-40 -left-10 h-64 w-64 rounded-full bg-indigo-100 blur-3xl opacity-60" />
      </div>

      {/* Hero */}
      <section className="relative pt-[50px]">
        <div className="max-w-screen sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-b from-blue-50 to-white">
            <div className="px-6 py-16 text-center sm:px-10 lg:px-16">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-sm text-blue-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-blue-600" />
                Solutions offered by us for TallyPrime
              </div>
              <h1 className="mx-auto mt-6 max-w-3xl text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight text-gray-900">
                Our <span className="text-blue-700">Services</span>
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
                Discover AI-powered tools designed to streamline and supercharge daily work in TallyPrime.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  ref={openButtonRef}
                  onClick={() => setIsOpen(true)}
                  className="rounded-lg bg-blue-700 px-5 py-3 text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Contact Us
                </button>
                <a
                  href="#products"
                  className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 transition hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Explore Services
                </a>
              </div>
            </div>

            {/* subtle bottom wave */}
            <svg
              className="text-blue-50"
              viewBox="0 0 1440 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M0,64L60,69.3C120,75,240,85,360,69.3C480,53,600,11,720,10.7C840,11,960,53,1080,64C1200,75,1320,53,1380,42.7L1440,32L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-6 sm:py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard
  icon={() => (
    <HoloIcon>
      <Brain className="w-5 h-5" />
    </HoloIcon>
  )}
  title="AI Assist for TallyPrime"
  description="A custom AI assistant for TallyPrime to help you with your business needs."
  accent="blue"
/>
            <ProductCard
              icon={CloudCog}
              title="Sales & Support for Tally Products"
              description="TallyPrime Gold/Silver licenses, TSS renewal, Tally Server solutions, and tailored support."
              accent="orange"
            />
            <ProductCard
              icon={Code2}
              title="Customization"
              description="Custom workflows, automations, and domain-specific extensions for TallyPrime."
              accent="indigo"
            />
            <ProductCard
              icon={TrendingUp}
              title="Corporate Tally Training"
              description="Role-based training, workshops, and student programs to master TallyPrime."
              accent="blue"
            />
            <ProductCard
              icon={Cloud}
              title="Cloud Solutions & Compliance"
              description="Real-time data validation for GST, TDS, and regulatory compliance at scale."
              accent="green"
            />
            <ProductCard
              icon={ShieldCheck}
              title="Third-Party Integrations"
              description="Seamless connectors for WhatsApp, Excel templates, dashboards, and more."
              accent="blue"
            />
            
            
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-3xl border border-gray-100 bg-white p-10 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to boost productivity with Tally Prime?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
              Contact us Now to avail our solutions and power your business with TallyPrime.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setIsOpen(true)}
                className="rounded-lg bg-blue-700 px-6 py-3 text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Contact Us
              </button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <>
          <Backdrop onClick={() => setIsOpen(false)} />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-heading"
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div
              ref={dialogRef}
              className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-6 shadow-xl"
            >
              <div className="mb-4 flex items-center gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="h-7 w-7"
                />
                <h2 id="contact-heading" className="text-xl font-bold">
                  Contact Us — WhatsApp
                </h2>
              </div>

              <div className="grid gap-3">
                <input
                  className="rounded-lg border border-gray-300 px-3 py-2 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Name*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  className="rounded-lg border border-gray-300 px-3 py-2 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Phone Number*"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  className="rounded-lg border border-gray-300 px-3 py-2 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Company Name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
                <input
                  className="rounded-lg border border-gray-300 px-3 py-2 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="License Number"
                  name="license"
                  value={formData.license}
                  onChange={handleChange}
                />
                <textarea
                  className="min-h-[96px] rounded-lg border border-gray-300 px-3 py-2 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Issue Faced*"
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-5 flex justify-end gap-2">
                <button
                  className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                  onClick={sendToWhatsApp}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}
