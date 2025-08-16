import { useEffect, useState, useMemo, useRef } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { GraduationCap, Image as ImageIcon } from "lucide-react";

// Module images
import TallyEssentials from "./TallyEssentials.png";
import TallyProfessional from "./TallyProfessional.png";
import TallyCertification from "./TallyCertification.png";
import TallyGST from "./TallyGST.png";
import TallyOffice from "./OfficeAutomation.png";
import TallyPayroll from "./Payroll.png";

// Academy/gallery images
import Acad1 from "./academy1.jpg";
import Acad2 from "./academy2.jpg";
import Acad3 from "./academy3.jpg";
import Acad4 from "./academy4.jpg";
import Acad5 from "./academy5.jpg";

export default function TallyLearn() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [formVisible, setFormVisible] = useState(false);

  const whatsappNumber = "9842276297";

  const validateForm = () => {
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      alert("Please fill in Name, Email, and Phone.");
      return false;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
    if (!emailOk) {
      alert("Please enter a valid email address.");
      return false;
    }
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return false;
    }
    return true;
  };

  const sendWhatsApp = () => {
    if (!validateForm()) return;
    const heading = `*Tally Learn*`;
    const message =
      `${encodeURIComponent(heading)}%0A` +
      `Name: ${encodeURIComponent(formData.name)}%0A` +
      `Email: ${encodeURIComponent(formData.email)}%0A` +
      `Phone: ${encodeURIComponent(formData.phone)}`;
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (formVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [formVisible]);

  // Cards data
  const cards = [
    {
      title: "Tally Essentials",
      img: TallyEssentials,
      description: "Learn the fundamentals of Tally with structured lessons and exercises.",
      level: "Beginner–Advanced",
      onClick: () => setFormVisible(true),
    },
    {
      title: "Tally Professional",
      img: TallyProfessional,
      description: "A Complete Guide on Advanced Business Accounting and Indian Taxation.",
      level: "Beginner–Advanced",
      onClick: () => setFormVisible(true),
    },
    {
      title: "Tally Certification with Online Internship",
      img: TallyCertification,
      description: "Get hands-on Accounting experience with Tally’s NEP-aligned Online Internship",
      level: "Beginner–Advanced",
      onClick: () => setFormVisible(true),
    },
    {
      title: "Tally Certification with GST Simulation",
      img: TallyGST,
      description:
        "A Dynamic Platform for Practising GST Returns with Tally Certification to Level Up Your Career",
      level: "Beginner–Advanced",
      onClick: () => setFormVisible(true),
    },
    {
      title: "Office Automation",
      img: TallyOffice,
      description: "Gain essential skills in Basic Computing, MS Word, Excel & PowerPoint.",
      level: "Beginner–Advanced",
      onClick: () => setFormVisible(true),
    },
    {
      title: "Complete Guide to Payroll & Income Tax",
      img: TallyPayroll,
      description:
        "Manage payroll & taxes with TallyPrime - process salaries & ensure compliance.",
      level: "Beginner–Advanced",
      onClick: () => setFormVisible(true),
    },
    // New “View all courses” card linking externally
    {
      title: "View all courses",
      img: null as any,
      description: "Explore all Tally Education offline courses on the official site.",
      level: "All Levels",
      link: "https://tallyeducation.com/tepl/offline-courses/",
    },
  ];

  const academyImages: string[] = [Acad1, Acad2, Acad3, Acad4, Acad5];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-green-100 pt-[32px] sm:pt-[40px] flex flex-col relative overflow-x-hidden">
      {/* Background SVG Decorations */}
      <BackgroundSVGs />

      <Header />

      <main className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 flex-grow">
        {/* Hero Section with icon in heading */}
        <section className="text-center mb-12 sm:mb-14 lg:mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-green-100 text-green-700 flex-shrink-0">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            </span>
            <h1 className="text-[34px] sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="text-tally-gray drop-shadow-sm">Learn</span>{" "}
              <span className="text-green-600">Tally.</span>
            </h1>
          </div>
          <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed px-1">
            Empower business skills with Tally Learn — master accounting, inventory, and compliance
            with expert-led tutorials and real-world insights tailored for growth.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setFormVisible(true)}
              className="inline-flex items-center gap-2 bg-tally-orange hover:bg-tally-orange-hover text-white font-semibold rounded-full px-6 py-3 sm:px-8 shadow-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-tally-orange/40"
            >
              Register
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-90"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <a
              href="#modules"
              className="inline-flex items-center gap-2 bg-white text-green-600 hover:text-white hover:bg-green-600 border border-green-200 font-semibold rounded-full px-6 py-3 sm:px-8 shadow-sm transition duration-300 focus:outline-none focus:ring-4 focus:ring-green-200"
            >
              Explore Modules
            </a>
          </div>
        </section>

        {/* Featured Images / Modules */}
        <section id="modules" className="mt-4 sm:mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {cards.map((card, idx) => (
              <article
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white border shadow-md sm:shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Image area – responsive height to prevent overflow on small screens */}
                <div className="w-full overflow-hidden bg-gray-50 h-40 sm:h-44 lg:h-48">
                  {card.img ? (
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-green-700/70 text-sm sm:text-base">
                      View all courses
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{card.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm sm:text-[15px]">{card.description}</p>

                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-green-700 font-semibold text-sm sm:text-base">{card.level}</span>
                    {card.link ? (
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-semibold text-sm sm:text-base"
                      >
                        View →
                      </a>
                    ) : (
                      <button
                        onClick={card.onClick}
                        className="text-green-600 hover:text-green-700 font-semibold text-sm sm:text-base"
                      >
                        Enroll →
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Heading above CTA Banner */}
        <div className="text-center pt-16">
  {/* Icon + Heading in one row */}
  <div className="flex items-center justify-center gap-2 sm:gap-3 ">
    <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-green-100 text-green-700 flex-shrink-0">
      <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
    </span>
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-green-900">
      Start learning now with Global IT Academy
    </h2>
  </div>

  {/* Tagline centered under heading */}
  <p className="mt-2 text-green-900/80 text-sm sm:text-base">
    A glimpse into our classrooms, workshops, and student achievements.
  </p>
</div>


        {/* CTA Banner */}
        <section className="mt-4 sm:mt-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white p-6 sm:p-8 lg:p-12 shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Learn faster with curated Tally pathways
              </h3>
              <p className="mt-2 sm:mt-3 text-green-100 text-sm sm:text-base">
                Bite-sized modules, step-by-step projects, and hands-on exercises designed for busy
                professionals.
              </p>
              <div className="mt-5 sm:mt-6">
                <button
                  onClick={() => setFormVisible(true)}
                  className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-green-50 font-semibold rounded-full px-5 py-2.5 sm:px-6 sm:py-3 shadow-md transition duration-300 focus:outline-none focus:ring-4 focus:ring-white/40"
                >
                  Start Registration
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-90"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Academy – 4px gap, tallest-aware, mobile-safe filmstrip */}
        <section className="relative py-8 sm:py-10 lg:py-16 overflow-hidden">
          <AccoladesBackground />
          <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Centered header */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
              <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-green-900">
                Our Academy
              </h2>
            </div>

            <p className="text-green-900/80 text-sm sm:text-base mb-4 sm:mb-6 lg:mb-8 text-center px-2">
              A glimpse into our classrooms, workshops, and student achievements.
            </p>

            <TallestAwareGapFilmstrip
              images={academyImages}
              gapPx={4}
              minHeightPx={160}   // mobile safety minimum
              maxHeightPxCap={260} // cap to avoid oversized height on small screens
              speedPxPerSec={50}   // slightly slower for mobile readability
              pauseOnHover={true}
              rounded={true}
              containerBgClass="bg-white"
              borderClass="border border-green-100"
              shadowClass="shadow"
            />
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal Registration */}
      {formVisible && (
        <Modal onClose={() => setFormVisible(false)} title="Register for Tally Learn">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 transition"
              autoFocus
            />
            <input
              type="email"
              placeholder="Email (e.g., yourname@gmail.com)"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            />
            <input
              type="tel"
              placeholder="Phone (10 digits)"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              maxLength={10}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            />
            <button
              onClick={sendWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
            >
              Submit
            </button>
            <p className="text-xs text-gray-500 text-center">
              Please make sure to be logged in the Whatsapp App / Whatsapp Web on your device before submitting the application . 
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* Modal Component */
function Modal({
  children,
  onClose,
  title,
}: {
  children: React.ReactNode;
  onClose: () => void;
  title?: string;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div aria-modal="true" role="dialog" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-100 animate-fadeIn" onClick={onClose} />
      {/* Dialog */}
      <div className="relative z-10 w-full max-w-md">
        <div className="animate-slideUp rounded-2xl bg-white shadow-2xl border border-green-100">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b">
            <h3 className="text-base sm:text-lg font-bold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="px-4 sm:px-6 py-4 sm:py-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* Decorative background SVGs */
function BackgroundSVGs() {
  return (
    <>
      {/* Grid mesh */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-[560px] sm:w-[700px] opacity-20 text-green-300"
        viewBox="0 0 600 600"
        fill="none"
      >
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="600" height="600" fill="url(#grid)" />
      </svg>

      {/* Subtle dots */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-40 left-2 sm:left-6 w-32 sm:w-40 opacity-30 text-green-300"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        {Array.from({ length: 100 }).map((_, i) => {
          const x = (i % 10) * 10 + 2;
          const y = Math.floor(i / 10) * 10 + 2;
          return <circle key={i} cx={x} cy={y} r="1.5" />;
        })}
      </svg>

      {/* Animations */}
      <style>
        {`
          .animate-fadeIn { animation: fadeIn .25s ease-out; }
          .animate-slideUp { animation: slideUp .25s ease-out; }
          @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
          @keyframes slideUp { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }
        `}
      </style>
    </>
  );
}

/* ---------- Tallest-aware, 4px-gap, mobile-safe filmstrip ---------- */
function TallestAwareGapFilmstrip({
  images,
  gapPx = 4,                 // exact 4px gap
  minHeightPx = 160,         // mobile minimum
  maxHeightPxCap = 260,      // max cap to avoid oversizing on small screens
  speedPxPerSec = 50,
  pauseOnHover = true,
  rounded = true,
  containerBgClass = "bg-white",
  borderClass = "border border-green-100",
  shadowClass = "shadow",
}: {
  images: string[];
  gapPx?: number;
  minHeightPx?: number;
  maxHeightPxCap?: number;
  speedPxPerSec?: number;
  pauseOnHover?: boolean;
  rounded?: boolean;
  containerBgClass?: string;
  borderClass?: string;
  shadowClass?: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const [tallest, setTallest] = useState<number>(minHeightPx);

  const duplicateArray = useMemo(() => [...images, ...images], [images]);

  // Measure tallest image (naturalHeight) and clamp to caps for mobile safety
  useEffect(() => {
    let mounted = true;
    Promise.all(
      images.map(
        (src) =>
          new Promise<number>((resolve) => {
            const img = new Image();
            img.onload = () => resolve(img.naturalHeight || 0);
            img.onerror = () => resolve(0);
            img.src = src as string;
          })
      )
    ).then((heights) => {
      if (!mounted) return;
      const maxH = Math.max(...heights, minHeightPx);
      setTallest(Math.min(Math.max(maxH, minHeightPx), maxHeightPxCap));
    });
    return () => {
      mounted = false;
    };
  }, [images, minHeightPx, maxHeightPxCap]);

  // Compute wrap width (sum widths of original set + gaps) after layout paints
  const wrapWidthRef = useRef(0);
  const computeWrapWidth = () => {
    const el = trackRef.current;
    if (!el) return 0;
    const kids = Array.from(el.children) as HTMLElement[];
    let total = 0;
    // Only count first "images.length" items (original set)
    for (let i = 0; i < images.length && i < kids.length; i++) {
      total += kids[i].getBoundingClientRect().width;
      if (i < images.length - 1) total += gapPx;
    }
    return total;
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Reset
    offsetRef.current = 0;
    el.style.transform = "translateX(0px)";
    lastTsRef.current = null;

    // measure wrap after paint
    const measure = () => {
      wrapWidthRef.current = computeWrapWidth();
    };
    const measureRaf = requestAnimationFrame(measure);

    const step = (ts: number) => {
      if (pausedRef.current) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      const last = lastTsRef.current ?? ts;
      const dt = Math.min(64, ts - last);
      lastTsRef.current = ts;

      const dx = (speedPxPerSec * dt) / 1000;
      offsetRef.current -= dx;

      const wrap = wrapWidthRef.current;
      if (wrap > 0 && Math.abs(offsetRef.current) >= wrap) {
        offsetRef.current += wrap; // seamless wrap
      }

      el.style.transform = `translateX(${offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    const onResize = () => {
      wrapWidthRef.current = computeWrapWidth();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      cancelAnimationFrame(measureRaf);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [images.length, gapPx, tallest, speedPxPerSec]);

  return (
    <div className="relative w-full">
      <div
        className={[
          "relative w-full overflow-hidden",
          containerBgClass,
          borderClass,
          shadowClass,
          rounded ? "rounded-2xl" : "",
        ].join(" ")}
        onMouseEnter={() => {
          if (pauseOnHover) pausedRef.current = true;
        }}
        onMouseLeave={() => {
          if (pauseOnHover) pausedRef.current = false;
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-0 items-center will-change-transform select-none"
          style={{ transform: "translateX(0px)" }}
        >
          {duplicateArray.map((src, i) => {
            const isLast = i === duplicateArray.length - 1;
            const tileStyle: React.CSSProperties = {
              height: `${tallest}px`,
              flex: "0 0 auto",
              marginRight: isLast ? 0 : gapPx,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            };
            const imgStyle: React.CSSProperties = {
              maxHeight: "100%",
              height: "100%",
              width: "auto",
              display: "block",
              objectFit: "contain",
            };
            return (
              <figure key={`tile-${i}`} className="m-0 p-0" style={tileStyle} title="Gallery">
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  style={imgStyle}
                  draggable={false}
                  loading={i < 3 ? "eager" : "lazy"}
                />
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* Background used for the academy strip section (optional) */
function AccoladesBackground() {
  return (
    <>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[1200px] sm:w-[1400px] max-w-[130vw] opacity-25"
        viewBox="0 0 1600 280"
        fill="none"
      >
        <defs>
          <linearGradient id="acc-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#BBF7D0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ECFDF5" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C300,80 600,200 900,140 C1200,80 1400,160 1600,120 L1600,280 L0,280 Z" fill="url(#acc-grad)" />
      </svg>
    </>
  );
}
