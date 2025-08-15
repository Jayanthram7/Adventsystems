import Header from "@/components/header";
import Footer from "@/components/footer";
import { Users, BadgeCheck, PhoneCall, Star, ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "wouter";
import { User } from "lucide-react";

// Local images for accolades
import Image1 from "./1.jpg";
import Image2 from "./2.jpg";
import Image3 from "./3.jpg";
import Image4 from "./4.jpg";
import Image5 from "./5.jpg";
import Image6 from "./6.jpg";
import Image7 from "./7.jpg";
import Image8 from "./8.jpg";
import Image9 from "./9.jpg";
import Image10 from "./10.jpg";

/* About Page */
export default function About() {
  const [, setLocation] = useLocation();

  const solutions = [
    {
      title: "Tally on AWS",
      desc:
        "We have successfully provided and supported Tally Prime Server on AWS for up to 64 users, running flawlessly for 3+ years.",
    },
    {
      title: "Digital Signature in Tally with approval",
      desc:
        "Custom TallyPrime solution enabling Digital Signatures with approval workflow — deployed at 100+ customer sites.",
    },
    {
      title: "Excel to Tally Integrations",
      desc: "Automated data import from Excel into Tally for faster, error-free operations.",
    },
    {
      title: "School Fees & Student Management",
      desc:
        "Trusted by 40+ schools in the region for fees collection and student management.",
    },
    {
      title: "Manufacturing & Material Planning",
      desc:
        "Custom solutions for engineering industries covering manufacturing processes and material planning.",
    },
  ];

  const whyUs = [
    {
      Icon: BadgeCheck,
      title: "Expertise",
      desc:
        "One of the most experienced Tally teams in the region. Decades of hands-on experience across implementations and automation.",
      color: "text-tally-orange",
    },
    {
      Icon: Users,
      title: "Customer-Centric",
      desc:
        "We listen, learn, and deliver features that matter. Tally Prime Server, Tally on AWS, and more.",
      color: "text-blue-600",
    },
    {
      Icon: PhoneCall,
      title: "Reliable Support",
      desc: "Fast, responsive assistance whenever you need it.",
      color: "text-tally-blue",
    },
    {
      Icon: (props: any) => (
        <img
          src="https://cdn.simpleicons.org/whatsapp/25D366"
          alt="WhatsApp"
          {...props}
        />
      ),
      title: "Third-Party Integrations",
      desc: "WhatsApp on Tally, Excel-to-Tally templates, dashboards, and more.",
      color: "",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      review:
        "Advent Systems has been our trusted Tally partner in Coimbatore for over 10 years. Their expertise in GST compliance and customization has streamlined our textile manufacturing processes. We've seen a 35% improvement in our month-end closing time.",
      rating: 5,
      avatar: <User className="w-12 h-12 text-gray-400" />,
    },
    {
      name: "Priya Nair",
      review:
        "Excellent support for our 8 retail outlets in Coimbatore with multi-location billing and inventory management. They understand retail business challenges in Tamil Nadu very well. Our inventory discrepancies have reduced to almost zero.",
      rating: 5,
      avatar: <User className="w-12 h-12 text-gray-400" />,
    },
    {
      name: "Suresh Reddy",
      review:
        "Seamless migration from legacy accounting to Tally Prime for our engineering components manufacturing unit. Their expertise in complex inventory valuation and custom reporting has added great value. We've achieved 99.8% accuracy in our GST filings.",
      rating: 5,
      avatar: <User className="w-12 h-12 text-gray-400" />,
    },
  ];

  // Images for the accolades carousel (src + caption)
  const accoladeImages: { src: string; caption: string }[] = [
    { src: Image1, caption: "Advent Systems — 5 Star Certified Partner of Tally" },
    { src: Image2, caption: "Trusted by 3,500+ customers across industries" },
    { src: Image3, caption: "30+ years of Tally expertise in Coimbatore" },
    { src: Image4, caption: "Custom solutions tailored to your business needs" },
    { src: Image5, caption: "Seamless implementations and reliable support" },
    { src: Image6, caption: "Expert guidance on GST, inventory, and reporting" },
    { src: Image7, caption: "Training and enablement for lasting success" },
    { src: Image8, caption: "Automation and integrations with Tally" },
    { src: Image9, caption: "Secure deployments on cloud and on-prem" },
    { src: Image10, caption: "Building long-term partnerships with results" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 pt-[10px] text-gray-900 relative overflow-hidden">
      <BackgroundDecor />

      <Header />

      {/* Hero / About */}
      <section className="relative pt-20 pb-14">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Partner Pill */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-blue-200 shadow-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-blue-800 font-semibold text-xs sm:text-sm">
              Advent Systems — 5 Star Certified Partner of Tally
            </span>
          </div>

          {/* Logo */}
          <div className="mb-6">
            <img
              src="https://img1.wsimg.com/isteam/ip/fa4c5394-6dd8-4339-9ac8-0be7e0232d41/ADV-30-New.png/:/cr=t:3.83%25,l:0%25,w:100%25,h:92.34%25/rs=w:984,h:740"
              alt="Advent Systems Logo"
              className="mx-auto w-28 sm:w-32 h-auto rounded-xl shadow-lg"
            />
          </div>

          <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold leading-tight mb-4">
            About <span className="text-blue-700">Advent Systems</span>
          </h1>

          <p className="text-[1.05rem] sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed text-justify">
            Advent Systems, located in Coimbatore, Tamilnadu, is a 5* Certified Partner of
            Tally. We’ve been associated with Tally since 1989, providing Sales, Service,
            Support, and Training for over three decades. Led by Mr. Chinnaswamy Kanakaraj,
            an expert in Tally, our seasoned team brings 30+ years of experience across Tally
            Prime and vertical solutions, supporting 3500+ customers across diverse industries.
          </p>

          <button
            type="button"
            onClick={() =>
              document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })
            }
            className="mx-auto mt-6 inline-flex items-center gap-2 text-blue-800 hover:text-blue-900 group"
            title="Read more"
          >
            <span className="relative underline-offset-4 after:absolute after:-bottom-1 after:left-0 after:h[2px] after:w-full after:bg-blue-800 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
              Read more
            </span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Accolades: Left (static heading + dynamic caption), Right (single image carousel) */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <AccoladesBackground />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left column: Heading + dynamic caption */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-4">
                Accolades
              </h2>
              <p className="text-blue-900/90 font-semibold mb-2">
                5 Star Certified Partner of Tally
              </p>
              <AccoladesCaption images={accoladeImages} />
            </div>

            {/* Right column: Single image with controls inside */}
            <div className="lg:col-span-7">
              <AccoladesSingleImageCarousel images={accoladeImages} intervalMs={4500} />
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="relative py-18 sm:py-20 bg-gradient-to-b from-white to-blue-50">
        {/* Background SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#cfe4ff" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
            Our Ready <span className="text-blue-700">Solutions</span>
          </h2>

          <div className="relative">
            {/* Left-side vertical line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300" />
            {/* Cards */}
            <div className="ml-10 sm:ml-16 space-y-8">
              {solutions.map((item, idx) => (
                <TimelineItemRight key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-20 text-center relative overflow-hidden"
        style={{
          backgroundColor: "#fff",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Ccircle cx='50' cy='50' r='50'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
            Why <span className="text-blue-600">Choose Us?</span>
          </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyUs.map(({ Icon, title, desc, color }, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl hover:border-blue-200 transition transform hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition">
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tally Learn Promo */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white shadow-2xl">
            <div className="px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16 text-center">
              <h2 className="mx-auto max-w-4xl text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Explore Tally Learn by Global IT Academy, the Tally education subsidiary of Advent Systems
              </h2>

              <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg text-blue-100 leading-relaxed">
                Explore Tally Learn, the learning subsidiary of Advent Systems, offering practical, bite-sized modules and hands-on projects designed to empower professionals with essential Tally skills for business success.
              </p>

              <div className="mt-6 sm:mt-8">
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setTimeout(() => setLocation("/learn"), 300);
                  }}
                  className="inline-flex items-center gap-2 bg-white text-blue-800 hover:bg-blue-50 font-semibold rounded-full px-6 py-3 shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/40 hover:shadow-xl hover:scale-105"
                >
                  Register for Tally Learn
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-sm" />
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/5 rounded-full blur-sm" />
          </div>
        </div>
      </section>

      {/* Customer Experiences */}
      <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        {/* Decorative SVG in top-right */}
        <svg
          className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle cx="250" cy="250" r="250" fill="url(#grad)" />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
            Customer <span className="text-blue-600">Experiences</span>
          </h2>

          <TestimonialCarousel
            items={testimonials}
            renderItem={(t) => <TestimonialCard key={t.name} {...t} />}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ---------- Accolades components ---------- */

// Left-side dynamic caption that syncs with the right carousel
function AccoladesCaption({ images }: { images: { src: string; caption: string }[] }) {
  // This component receives the current index via a custom event dispatched by the carousel
  const [index, setIndex] = useState(0);
  const [keyBump, setKeyBump] = useState(0);

  useEffect(() => {
    const handler = (e: any) => {
      if (typeof e.detail?.index === "number") {
        setIndex(e.detail.index);
        setKeyBump((k) => k + 1); // trigger caption transition
      }
    };
    window.addEventListener("accolades:index", handler as EventListener);
    return () => window.removeEventListener("accolades:index", handler as EventListener);
  }, []);

  if (!images.length) return null;

  return (
    <div className="relative">
      <p
        key={keyBump}
        className="text-base sm:text-lg text-blue-900/90 leading-relaxed transition-all opacity-0 translate-y-1 animate-[fadeUp_380ms_ease-out_forwards]"
      >
        {images[index].caption}
      </p>
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

// Right-side single image carousel with internal controls
function AccoladesSingleImageCarousel({
  images,
  intervalMs = 4500,
}: {
  images: { src: string; caption: string }[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const count = images.length;

  const dispatchIndex = (i: number) => {
    window.dispatchEvent(new CustomEvent("accolades:index", { detail: { index: i } }));
  };

  const next = () => {
    setIndex((i) => {
      const ni = (i + 1) % count;
      dispatchIndex(ni);
      return ni;
    });
  };
  const prev = () => {
    setIndex((i) => {
      const ni = (i - 1 + count) % count;
      dispatchIndex(ni);
      return ni;
    });
  };

  // Auto-rotate
  useEffect(() => {
    if (paused || count <= 1) return;
    timerRef.current = window.setTimeout(next, intervalMs);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, paused, intervalMs, count]);

  // Initialize caption to first index
  useEffect(() => {
    if (count > 0) dispatchIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  if (!count) return null;

  return (
    <div
      className="relative w-full bg-white/95 rounded-2xl shadow-2xl border border-blue-100 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        // Sizing to feel prominent; responsive heights
        height: "min(64vh, 720px)",
      }}
    >
      <img
        key={images[index].src}
        src={images[index].src}
        alt={`Accolade ${index + 1}`}
        className="w-full h-full object-contain p-3 sm:p-4"
        loading={index === 0 ? "eager" : "lazy"}
      />

      {/* Controls inside image area */}
      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/95 hover:bg-white text-blue-700 shadow p-2 sm:p-3 border border-blue-100"
      >
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M12.5 15l-5-5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/95 hover:bg-white text-blue-700 shadow p-2 sm:p-3 border border-blue-100"
      >
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M7.5 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-blue-700" : "w-2.5 bg-blue-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* Accolades Section Background Decorations */
function AccoladesBackground() {
  return (
    <>
      {/* Soft gradient wave */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[1600px] max-w-[120vw] opacity-40"
        viewBox="0 0 1600 400"
        fill="none"
      >
        <defs>
          <linearGradient id="gradA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,200 C400,100 600,300 800,200 C1000,100 1200,240 1600,160 L1600,400 L0,400 Z"
          fill="url(#gradA)"
        />
      </svg>

      {/* Dot grid pattern bottom */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 w-[720px] opacity-30 text-blue-300"
        viewBox="0 0 600 600"
        fill="none"
      >
        <defs>
          <pattern id="gridDots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="600" height="600" fill="url(#gridDots)" />
      </svg>
    </>
  );
}

/* Components used */
function TimelineItemRight({ item }: { item: { title: string; desc: string } }) {
  return (
    <div className="relative">
      {/* Connector dot */}
      <span className="absolute -left-6 sm:-left-10 top-5 h-4 w-4 rounded-full bg-white border-4 border-blue-500 shadow" />
      <div className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.desc}</p>
      </div>
    </div>
  );
}

function TestimonialCard({
  name,
  review,
  rating,
}: {
  name: string;
  review: string;
  rating: number;
  avatar?: string;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div>
          <h4 className="text-sm font-semibold text-blue-800">{name}</h4>
          <div className="flex">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm italic flex-1">"{review}"</p>
    </div>
  );
}

function TestimonialCarousel<T>({
  items,
  renderItem,
}: {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  if (!isMobile) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <div key={i}>{renderItem(t)}</div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((t, i) => (
            <div key={i} className="min-w-full px-1">
              {renderItem(t)}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-sm hover:bg-gray-50"
        >
          Prev
        </button>
        <div className="flex items-center gap-1">
          {items.map((_, i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${i === index ? "bg-blue-700" : "bg-blue-300"}`} />
          ))}
        </div>
        <button
          onClick={next}
          className="px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-sm hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

/* Background decorations (SVG mesh + blobs) */
function BackgroundDecor() {
  useEffect(() => {
    // Optional: light parallax on scroll
    const root = document.documentElement;
    const onScroll = () => {
      const y = window.scrollY;
      root.style.setProperty("--blob-shift", `${Math.min(y / 20, 20)}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mesh pattern */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-16 w-[720px] opacity-30 text-blue-400"
        viewBox="0 0 600 600"
        fill="none"
      >
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" stroke="currentColor" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="600" height="600" fill="url(#grid)" />
      </svg>
    </>
  );
}
