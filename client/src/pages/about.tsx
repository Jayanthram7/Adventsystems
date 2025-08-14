  import Header from "@/components/header";
  import Footer from "@/components/footer";
  import {
    Users,
    BadgeCheck,
    Target,
    PhoneCall,
    Star,
    Award,
    ChevronDown,
  } from "lucide-react";
  import { useEffect, useState } from "react";
  import { Link, useLocation } from "wouter";
  import { User } from 'lucide-react';


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
        review: "Advent Systems has been our trusted Tally partner in Coimbatore for over 10 years. Their expertise in GST compliance and customization has streamlined our textile manufacturing processes. We've seen a 35% improvement in our month-end closing time.",
        rating: 5,
        avatar: <User className="w-12 h-12 text-gray-400" />,
      },
      {
        name: "Priya Nair",
        review: "Excellent support for our 8 retail outlets in Coimbatore with multi-location billing and inventory management. They understand retail business challenges in Tamil Nadu very well. Our inventory discrepancies have reduced to almost zero.",
        rating: 5,
        avatar: <User className="w-12 h-12 text-gray-400" />,
      },
      {
        name: "Suresh Reddy",
        review: "Seamless migration from legacy accounting to Tally Prime for our engineering components manufacturing unit. Their expertise in complex inventory valuation and custom reporting has added great value. We've achieved 99.8% accuracy in our GST filings.",
        rating: 5,
        avatar: <User className="w-12 h-12 text-gray-400" />,
      },
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

            <p className="text-[1.05rem] sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed text-justify"> Advent Systems, located in Coimbatore, Tamilnadu, is a 5* Certified Partner of Tally. We’ve been associated with Tally since 1989, providing Sales, Service, Support, and Training for over three decades. Led by Mr. Chinnaswamy Kanakaraj, an expert in Tally, our seasoned team brings 30+ years of experience across Tally Prime and vertical solutions, supporting 3500+ customers across diverse industries. </p>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("solutions")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mx-auto mt-6 inline-flex items-center gap-2 text-blue-800 hover:text-blue-900 group"
              title="Read more"
            >
              <span className="relative underline-offset-4 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-blue-800 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                Read more
              </span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Accolades */}
        <section className="py-16 bg-gradient-to-r from-blue-100/70 via-white to-blue-100/70 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-4">Accolades</h2>
              <ul className="space-y-3 text-[1.05rem] text-blue-900">
                {[
                  "5* Certified Partner of Tally",
                  "Associated with Tally for over 3 decades",
                  "Former Partner Developer of Tally",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-blue-200/40 blur-2xl" />
                <div className="relative bg-white rounded-3xl border border-blue-100 shadow-xl p-8 flex flex-col items-center">
                  <Award className="w-28 h-28 text-blue-800 mb-3" />
                  <p className="text-sm text-blue-700">Recognized for excellence and long-term partnership</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="solutions"
          className="relative py-18 sm:py-20 bg-gradient-to-b from-white to-blue-50"
        >
          {/* Background SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="dotPattern"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
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

              {/* Cards stacked to the right of the line */}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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

              {/* Optional: Decorative elements */}
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

  /* Components used */
  function TimelineItemRight({ item }: { item: { title: string; desc: string } }) {
    return (
      <div className="relative">
        {/* Connector dot aligned to the left vertical line */}
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
    avatar,
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
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
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
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-blue-700" : "bg-blue-300"
                }`}
              />
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

        {/* Gradient blobs */}
        {/* Add your blobs or other decorations here */}
      </>
    );
  }
