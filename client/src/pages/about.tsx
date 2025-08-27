import Header from "@/components/header";
import Footer from "@/components/footer";
import { Users, BadgeCheck, PhoneCall, Star, Award, Handshake, Boxes, MessageSquareQuote, GraduationCap } from "lucide-react";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { useLocation } from "wouter";
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
import Image11 from "./11.jpg";
import Image12 from "./12.jpg";

/* About Page */
export default function About() {
  const [, setLocation] = useLocation();
  const advancedSolutions = [
    {
      title: "AI-Powered Assistant",
      desc: "Your intelligent companion for accounting concepts and practical guidance, helping you and your team make the most of Tally’s Power of Simplicity."
    },
    {
      title: "Data Integrations",
      desc: "Seamless connectivity with third-party applications using Excel, API, JSON, and XML-based data interchange solutions."
    },
    {
      title: "Data Optimization Expertise",
      desc: "Advanced techniques to manage high volumes of data without compromising Tally’s power, speed, accuracy, or reliability."
    },
    {
      title: "Distributed Accounting Solutions",
      desc: "Professional management of accounting for a single entity across geographically dispersed branches and warehouses, powered by cloud-based Tally on AWS (Linux) as well as Windows-based solutions from trusted vendors."
    },
    {
      title: "Centralized & Consolidated Reporting",
      desc: "Generate centralized and grouped results and reports for a common entity, even when accounts are maintained as separate companies in Tally."
    },
    {
      title: "Reverse Grouping Solutions",
      desc: "A unique alternative to Tally’s standard Group Company feature, enabling seamless auto data creation in a Group → Companies structure, eliminating manual work and enhancing automation."
    },
    {
      title: "Enhanced Manufacturing Solutions",
      desc: "End-to-end handling of the manufacturing process, from order receipt to timely delivery, with a strong focus on material management and cost optimization."
    },
    {
      title: "Digitized Document & Workflow Management",
      desc: "Synchronized handling of documents across organizational activities, combined with approval workflows fully integrated into Tally’s accounting system."
    },
    {
      title: "AI-Enabled Training Center",
      desc: "A fully functional training hub with AI-powered tools to deliver professional-level training for owners, managers, and employees."
    },
    {
      title: "Connected Business Empowerment",
      desc: "Helping organizations harness Tally’s Connected GST, Connected Banking, and Connected Accounting features to stay competitive in India &amp; globally."
    }
  ];
  
  const coreSolutions = [
    {
      title: "Tally Implementation & Customization",
      desc: "Tailored setups to match your business processes."
    },
    {
      title: "Connected GST & Compliance Solutions",
      desc: "Stay updated and compliant with minimal effort."
    },
    {
      title: "Connected Banking & Automation",
      desc: "Simplify payments, reconciliations, and cash flow management."
    },
    {
      title: "Business Dashboards & Reporting",
      desc: "Real-time insights for faster, smarter decisions."
    },
    {
      title: "WhatsApp Communication Integration",
      desc: "Engage and connect with customers seamlessly."
    },
    {
      title: "Inventory & Manufacturing Solutions",
      desc: "Streamline operations across trade and industry verticals."
    },
    {
      title: "Training & Capacity Building",
      desc: "Empowering teams to maximize the value of Tally."
    }
  ];

  const solutions = [
    {
      title: "AI-Powered Assistant",
      desc: "Your intelligent companion for accounting concepts and practical guidance, helping you and your team make the most of Tally’s Power of Simplicity."
    },
    {
      title: "Data Integrations",
      desc: "Seamless connectivity with third-party applications using Excel, API, JSON, and XML-based data interchange solutions."
    },
    {
      title: "Data Optimization Expertise",
      desc: "Advanced techniques to manage high volumes of data without compromising Tally’s power, speed, accuracy, or reliability."
    },
    {
      title: "Distributed Accounting Solutions",
      desc: "Professional management of accounting for a single entity across geographically dispersed branches and warehouses, powered by cloud-based Tally on AWS (Linux) as well as Windows-based solutions from trusted vendors."
    },
    {
      title: "Centralized &amp; Consolidated Reporting",
      desc: "Solutions for generating centralized and grouped results and reports for a common entity, even when accounts are maintained as separate companies in Tally."
    },
    {
      title: "Reverse Grouping Solutions",
      desc: "An advanced alternative to Tally’s standard Group Company feature, enabling seamless auto data creation in a Group → Companies structure, rather than the traditional Companies → Group format, eliminating manual work and enhancing data automation."
    },
    {
      title: "Enhanced Manufacturing Solutions",
      desc: "Comprehensive handling of the manufacturing process, from receipt of sales orders to timely delivery, with strong focus on material management and cost optimization across every stage of production."
    },
    {
      title: "Digitized Document &amp; Workflow Management",
      desc: "Improved, synchronized handling of documents at every stage of organizational activity, combined with workflow-based approval processes that fully integrate with Tally’s accounting system."
    },
    {
      title: "AI-Enabled Training Center",
      desc: "A dedicated, fully functional training hub equipped with the latest AI-powered tools to deliver professional-level training for owners, managers, and employees. Focused on Tally’s latest features and applications, enabling smarter decision-making across all levels of the organization."
    },
    {
      title: "Connected Business Empowerment",
      desc: "Helping customer organizations understand and harness the full potential of Tally’s powerful Connected features — including Connected GST, Connected Banking, and Connected Accounting — to stay competitive in today’s rapidly growing connected business environment, both nationally and globally."
    },
    {
      title: "Tally Implementation &amp; Customization",
      desc: "Tailored setups to match your business processes."
    },
    {
      title: "Connected GST &amp; Compliance Solutions",
      desc: "Stay updated and compliant with minimal effort."
    },
    {
      title: "Connected Banking &amp; Automation",
      desc: "Simplify payments, reconciliations, and cash flow management."
    },
    {
      title: "Business Dashboards &amp; Reporting",
      desc: "Real-time insights for faster, smarter decisions."
    },
    {
      title: "WhatsApp Communication Integration",
      desc: "Engage and connect with customers seamlessly."
    },
    {
      title: "Inventory &amp; Manufacturing Solutions",
      desc: "Streamline operations across trade and industry verticals."
    },
    {
      title: "Training &amp; Capacity Building",
      desc: "Empowering teams to maximize the value of Tally."
    }
  ];

  const [showAllSolutions, setShowAllSolutions] = useState(false);
  const displayedSolutions = showAllSolutions ? advancedSolutions : advancedSolutions.slice(0, 6);
  const displayed1Solutions = showAllSolutions ? coreSolutions : coreSolutions.slice(0, 6);

  const whyUs = [
    {
      Icon: Users,
      title: "Customer-Centric",
      desc:
        "A legacy-driven approach to nurturing customer relationships, with a strong emphasis on trust, continuity, and lasting value.",
      color: "text-blue-600",
    },
    {
      Icon: BadgeCheck,
      title: "Expertise",
      desc:
        "The region’s most experienced Tally team, with decades of proven expertise in implementations and automation across diverse sectors of Trade and Industry",
      color: "text-tally-orange",
    },
    {
      Icon: PhoneCall,
      title: "Reliable Support",
      desc: "Always available, fast, and dependable assistance — ensuring your business runs seamlessly,without disruption.",
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
      title: "Innovation",
      desc: "Constantly evolving with technology to deliver smarter solutions, empowering businesses to stay ahead in a dynamic market",
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

  // Images for the filmstrip
  const accoladeImages: string[] = [
    Image6,
    Image3,
    Image1,
    Image7,
    Image2,
    Image5,
    Image9,
    Image12,
    Image10,
    Image11,
    Image8,
    Image4,
    Image9,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 pt-[10px] text-gray-900 relative overflow-hidden">
      <GlobalBackgroundDecor />

      <Header />

      {/* Hero / About - Upgraded visuals and CTAs with subtle waves + justified text */}
      <section className="relative isolate overflow-hidden pt-20 pb-20">
  {/* Background: gradient + soft mesh + grid + accent rings + bottom wave */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
    <div className="absolute inset-0 [background:radial-gradient(60rem_48rem_at_50%_-12%,rgba(30,64,175,0.12),transparent_60%)]" />
    <div className="absolute inset-0 opacity-[0.08] [mask-image:radial-gradient(80rem_40rem_at_50%_20%,black,transparent)]">
      <div className="h-full w-full [background-image:linear-gradient(to_right,rgba(2,6,23,.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,.12)_1px,transparent_1px)] [background-size:36px_36px]" />
    </div>
    {/* Accent rings */}
    <svg className="pointer-events-none absolute -top-24 -right-10 w-[520px] opacity-30" viewBox="0 0 600 600" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="advent-rings" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.22" />
        </linearGradient>
      </defs>
      <circle cx="300" cy="300" r="240" stroke="url(#advent-rings)" strokeWidth="1.25" />
      <circle cx="300" cy="300" r="180" stroke="url(#advent-rings)" strokeWidth="1.25" />
      <circle cx="300" cy="300" r="120" stroke="url(#advent-rings)" strokeWidth="1.25" />
    </svg>
    {/* Bottom wave */}
    <svg className="absolute bottom-0 left-0 right-0 text-blue-50" viewBox="0 0 1440 80" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M0,64L60,69.3C120,75,240,85,360,69.3C480,53,600,11,720,10.7C840,11,960,53,1080,64C1200,75,1320,53,1380,42.7L1440,32L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
      />
    </svg>
  </div>

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Top badge */}
    <div className="mx-auto w-fit mb-6">
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-blue-900 shadow-sm backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
        Trusted Tally Partner since the 1980s
      </span>
    </div>

    {/* Logo */}
    <div className="mb-6 text-center">
      <img
        src="https://img1.wsimg.com/isteam/ip/fa4c5394-6dd8-4339-9ac8-0be7e0232d41/ADV-30-New.png/:/cr=t:3.83%25,l:0%25,w:100%25,h:92.34%25/rs=w:984,h:740"
        alt="Advent Systems Logo"
        className="mx-auto w-24 sm:w-28 h-auto rounded-xl shadow-lg ring-1 ring-black/5"
      />
    </div>

    {/* Heading + Tagline */}
    <div className="text-center">
      <h1 className="mx-auto max-w-4xl text-[clamp(2.4rem,5.2vw,3.6rem)] font-extrabold leading-tight tracking-tight text-blue-950">
        Welcome to <span className="text-blue-700">Advent Systems</span>
      </h1>
      

      {/* Updated smaller multi-paragraph description */}
      <div className="mx-auto mt-6 max-w-5xl">
  <div className="group relative rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white/80 to-blue-50/40 p-5 sm:p-6 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
    {/* Subtle top highlight */}
    <span className="pointer-events-none absolute inset-x-6 -top-1 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
    {/* Faint corner glows */}
    <span className="pointer-events-none absolute -top-2 -left-2 h-12 w-12 rounded-full bg-blue-500/10 blur-xl" />
    <span className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 rounded-full bg-indigo-500/10 blur-[18px]" />

    {/* Content */}
    <div className="text-blue-950/85 text-[0.95rem] sm:text-[0.98rem] leading-relaxed space-y-3 text-justify">
  <p>
     <strong>Promoted in the early 1980’s</strong> under the leadership of <strong>Mr. Kanakaraj Chinnaswamy</strong>, Advent Systems is among the earliest IT/ITES organizations in the region. As one of the earliest partners of Tally in India, Advent has been at the forefront of Sales, Support, Training, and Customization of Tally for over three decades.
  </p>
  <p>
    With a seasoned team bringing <strong>50+ years</strong> of combined expertise, Advent supports a strong base of <strong>3,500+ Tally customers</strong>, spanning MSMEs, consultants, auditors, and trading and manufacturing organizations.
  </p>
  <p>
    Today, Team Advent continues its legacy of excellence by embracing AI-powered advancements across Sales and Service functions—delivering greater efficiency, insights, and value to its customers.
  </p>
</div>

  </div>
</div>

    </div>

    {/* Highlights / Stats */}
    <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4">
      <div className="group rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-center shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="text-2xl font-extrabold text-blue-700">5 Star </div>
        <div className="mt-1 text-xs font-medium text-slate-600">Certified Partner of Tally</div>
      </div>
      <div className="group rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-center shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="text-2xl font-extrabold text-blue-700">35+ years</div>
        <div className="mt-1 text-xs font-medium text-slate-600">Tally Partnership</div>
      </div>
      <div className="group rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-center shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="text-2xl font-extrabold text-blue-700">3500+</div>
        <div className="mt-1 text-xs font-medium text-slate-600">Customers Supported</div>
      </div>
      <div className="group rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-center shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="text-2xl font-extrabold text-blue-700">50+ years</div>
        <div className="mt-1 text-xs font-medium text-slate-600">Team Expertise</div>
      </div>
    </div>

    {/* AI banner card */}
    
    {/* CTAs */}
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      <button
        onClick={() => setLocation("/products")}
        className="group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 bg-gradient-to-r from-blue-700 via-blue-700 to-blue-600 text-white font-semibold shadow-lg shadow-blue-700/25 hover:from-blue-800 hover:via-blue-800 hover:to-blue-700 active:scale-[0.99] transition"
        title="Services and Solutions offered by Advent Systems"
      >
        <span className="absolute inset-0 rounded-full opacity-0 transition group-hover:opacity-100 [background:radial-gradient(120px_60px_at_10%_10%,rgba(255,255,255,.15),transparent_50%)]" />
        View Solutions
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" className="opacity-90">
          <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </button>
      <button
        onClick={() => setLocation("/learn")}
        className="relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 bg-white/90 text-green-700 border border-green-300 font-semibold shadow hover:bg-white active:scale-[0.99] transition"
        title="Learn Tally"
      >
        Learn Tally
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" className="opacity-80">
          <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
        <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1.5 rounded-full bg-red-600 text-white text-[10px] leading-[18px] text-center shadow">
          Popular
        </span>
      </button>
      <button
          onClick={() => setLocation("/ai")}
          className="relative inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 bg-blue-700 text-white text-sm font-semibold shadow-lg shadow-blue-700/25 hover:bg-blue-800 active:scale-[0.99] transition"
          title="Explore AI Assistant"
        >
          Launch Assistant
          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" className="opacity-90">
            <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
          <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1.5 rounded-full bg-red-600 text-white text-[10px] leading-[18px] text-center shadow">
            New
          </span>
        </button>
    </div>

    {/* Subtext / trust copy */}
    
  </div>
</section>


      {/* Awards and Accolades: continuous loop */}
      <section className="relative py-10 sm:py-16 overflow-hidden">
        <AccoladesBackground />
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered header */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <Award className="w-5 h-5" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-900 mb-1">
              Awards and Accolades
            </h2>
          </div>

          {/* Centered tagline */}
          <p className="text-blue-900/80 text-sm sm:text-base mb-1 sm:mb-1 mt-1 text-center">
            These are not just trophies and shields of our achievements.
          </p>
          <p className="text-blue-900/80 text-sm sm:text-base mb-6 sm:mb-8 text-center">
            These are consistent recognition by Tally of our commitment to the Brand,
            Product and support services to the customers.
          </p>

          <SingleLayerFilmstripWithGap
            images={accoladeImages}
            heightClass="h-[190px] sm:h-[220px] md:h-[250px] lg:h-[290px] xl:h-[330px]"
            gapClass="gap-1"
            speedPxPerSec={60}
            scaleOnHover="hover:scale-[1.01]"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 text-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <WhyBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Icon + Heading (Lucide) */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <Handshake className="w-5 h-5" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Why <span className="text-blue-600">Choose Us?</span>
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-blue-900/80 text-sm sm:text-base mb-12">
            "With Trusted Expertise, a Customer-First Approach, Reliable Support, and
            Innovation powered by the latest technologies — we enable businesses to grow without
            hassles"
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyUs.map(({ Icon, title, desc, color }, idx) => (
              <div
                key={idx}
                className="group bg-white/90 border border-gray-100 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:border-blue-200 transition transform hover:-translate-y-1 backdrop-blur-sm"
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

      {/* Solutions */}
      <section id="solutions" className="relative py-12 sm:py-16 bg-white overflow-hidden">
  <SolutionsBackground />

  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Icon + Heading */}
    <div className="flex items-center justify-center gap-3 mb-2">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
        <Boxes className="w-5 h-5" />
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
        Our Core and <span className="text-blue-700">Advanced Solutions</span>
      </h2>
    </div>

    {/* Tagline */}
    <p className="text-blue-900/80 text-sm sm:text-base text-center mb-10 sm:mb-12">
      Modern solutions designed to empower your business, built on Tally’s Power of Simplicity — easy, effective, and ready at your fingertips
    </p>

    {/* Core Solutions */}
    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 pl-4">
      <span className="text-blue-700">Core Solutions</span>
    </h3>

    <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {displayed1Solutions.map((item, idx) => {
    const isLast = idx === displayed1Solutions.length - 1;
    const isOdd = displayed1Solutions.length % 3 === 1; // one extra after full rows of 3
    return (
      <article
        key={idx}
        className={`group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white/95 p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md
          ${isLast && isOdd ? "lg:col-start-2" : ""}`}
      >
        {/* top sheen */}
        <span className="pointer-events-none absolute inset-x-4 -top-1 h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />
        {/* corner glow */}
        <span className="pointer-events-none absolute -top-3 -left-3 h-12 w-12 rounded-full bg-blue-500/10 blur-xl" />
        <span className="pointer-events-none absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-indigo-500/10 blur-[18px]" />

        <div className="mb-2 flex items-start gap-2">
          <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 ring-4 ring-blue-100/70" aria-hidden="true" />
          <h4 className="text-[1.03rem] font-semibold tracking-tight text-slate-900">
            {item.title}
          </h4>
        </div>
        <p className="text-slate-600 text-[0.9rem] sm:text-[0.92rem] leading-relaxed">
          {item.desc}
        </p>

        <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />
      </article>
    );
  })}
</div>


    {solutions.length > 6 && (
      <div className="text-center mt-8 sm:mt-10">
        <button
          onClick={() => setShowAllSolutions(!showAllSolutions)}
          className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5
                     bg-gradient-to-r from-blue-700 via-blue-700 to-blue-600 text-white 
                     font-semibold shadow-lg shadow-blue-700/25 hover:shadow-xl hover:via-blue-800 hover:to-blue-700
                     active:scale-[0.99] transition relative overflow-hidden"
        >
          <span className="relative">{showAllSolutions ? 'Show Less' : 'View More'}</span>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    )}

    {/* Advanced Solutions */}
    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 mt-10 sm:mt-12 pl-4">
      <span className="text-blue-700">Advanced Solutions</span>
    </h3>

    <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {displayed1Solutions.map((item, idx) => {
    const isLast = idx === displayed1Solutions.length - 1;
    const isOdd = displayed1Solutions.length % 3 === 1; // one extra after full rows of 3
    return (
      <article
        key={idx}
        className={`group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white/95 p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md
          ${isLast && isOdd ? "lg:col-start-2" : ""}`}
      >
        {/* top sheen */}
        <span className="pointer-events-none absolute inset-x-4 -top-1 h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />
        {/* corner glow */}
        <span className="pointer-events-none absolute -top-3 -left-3 h-12 w-12 rounded-full bg-blue-500/10 blur-xl" />
        <span className="pointer-events-none absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-indigo-500/10 blur-[18px]" />

        <div className="mb-2 flex items-start gap-2">
          <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 ring-4 ring-blue-100/70" aria-hidden="true" />
          <h4 className="text-[1.03rem] font-semibold tracking-tight text-slate-900">
            {item.title}
          </h4>
        </div>
        <p className="text-slate-600 text-[0.9rem] sm:text-[0.92rem] leading-relaxed">
          {item.desc}
        </p>

        <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />
      </article>
    );
  })}
</div>


    {solutions.length > 6 && (
      <div className="text-center mt-8 sm:mt-10">
        <button
          onClick={() => setShowAllSolutions(!showAllSolutions)}
          className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5
                     bg-gradient-to-r from-blue-700 via-blue-700 to-blue-600 text-white 
                     font-semibold shadow-lg shadow-blue-700/25 hover:shadow-xl hover:via-blue-800 hover:to-blue-700
                     active:scale-[0.99] transition relative overflow-hidden"
        >
          <span className="relative">{showAllSolutions ? 'Show Less' : 'View More'}</span>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    )}
  </div>
</section>


      

      {/* Customer Experiences */}
      <section className="relative py-10 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <TestimonialsBackground />

        {/* Decorative SVG behind heading */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 w-[720px] max-w-[85vw] opacity-25"
          viewBox="0 0 720 180"
          fill="none"
        >
          <defs>
            <linearGradient id="testi-swoosh" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#BFDBFE" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d="M0,120 C180,60 360,160 540,110 C620,90 700,100 720,95 L720,180 L0,180 Z" fill="url(#testi-swoosh)" />
        </svg>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Icon + Heading */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <MessageSquareQuote className="w-5 h-5" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center">
              Customer <span className="text-blue-600">Experiences</span>
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-blue-900/80 text-sm sm:text-base text-center mb-12">
            Real stories of measurable impact—from smoother operations to faster closings and reliable compliance.
          </p>

          <TestimonialCarousel
            items={testimonials}
            renderItem={(t) => <TestimonialCard key={t.name} {...t} />}
          />
        </div>
      </section>

      {/* Tally Learn Promo */}
      <section className="relative py-10 sm:py-14 bg-white overflow-hidden">
  <PromoBackground />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* OUTSIDE: Icon + Heading */}
    <div className="flex flex-col items-center justify-center text-center mb-4">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-3">
        <GraduationCap className="w-6 h-6" />
      </span>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-blue-900">
        <span className="block">
          Explore Tally Learn by Global IT Academy,
        </span>
        <span className="block">
          the Tally education subsidiary of Advent Systems
        </span>
      </h2>
    </div>

    {/* OUTSIDE: Tagline */}
    <p className="text-blue-900/80 text-sm sm:text-base text-center mb-8 sm:mb-10">
      Learning never stops — especially when solutions are at your fingertips.
    </p>

    {/* Banner (separate block) */}
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white shadow-2xl">
      <div className="px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-10 text-center">
        {/* INSIDE: Icon next to heading 'Tally Learn' */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white">
            <GraduationCap className="w-5 h-5" />
          </span>
          <h3 className="text-3xl sm:text-3xl lg:text-5xl font-bold tracking-tight">
            Tally Learn
          </h3>
        </div>

        {/* Body copy */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-blue-100/90 leading-relaxed">
          Explore Tally Learn, the learning subsidiary of Advent Systems,
          offering practical, bite-sized modules and hands-on projects designed
          to empower professionals with essential Tally skills for business
          success.
        </p>

        {/* CTA Button */}
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

      {/* Decorative blur orbs */}
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-8 -right-10 w-28 h-28 bg-white/10 rounded-full blur-2xl" />
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}

/* ---------- Single-layer filmstrip with 4px gap, continuous loop (hardened) ---------- */
function SingleLayerFilmstripWithGap({
  images,
  heightClass = "h-[240px]",
  gapClass = "gap-1",  // Tailwind: 0.25rem ≈ 4px
  speedPxPerSec = 60,  // movement speed in px/sec
  scaleOnHover = "hover:scale-[1.04]",
}: {
  images: string[];
  heightClass?: string;
  gapClass?: string;
  speedPxPerSec?: number;
  scaleOnHover?: string;
}) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const widthsRef = useRef<number[]>([]);
  const itemCountRef = useRef(0);

  // Map common Tailwind gap classes to pixels for precise rotation math
  const gapPx = useMemo(() => {
    const map: Record<string, number> = {
      "gap-0": 0,
      "gap-px": 1,
      "gap-0.5": 2, // if enabled
      "gap-1": 4,
      "gap-1.5": 6, // if enabled
      "gap-2": 8,
    };
    return map[gapClass] ?? 4;
  }, [gapClass]);

  const ensureMinWidth = () => {
    // Duplicate children to guarantee the strip is longer than the viewport,
    // avoiding stall when items are too few or widths small.
    const el = trackRef.current;
    const vp = viewportRef.current;
    if (!el || !vp) return;

    const currentChildren = Array.from(el.children);
    const maxCopies = 3; // safety cap
    let copies = 0;

    const totalWidth = () => {
      return Array.from(el.children).reduce((acc, c, idx, arr) => {
        const w = (c as HTMLElement).getBoundingClientRect().width;
        // add gap except after last item
        const addGap = idx < arr.length - 1 ? gapPx : 0;
        return acc + w + addGap;
      }, 0);
    };

    while (totalWidth() < vp.getBoundingClientRect().width * 1.5 && copies < maxCopies) {
      currentChildren.forEach((child) => {
        el.appendChild(child.cloneNode(true));
      });
      copies++;
    }
  };

  const measureWidths = (el: HTMLDivElement) => {
    const kids = Array.from(el.children) as HTMLElement[];
    return kids.map((c) => c.getBoundingClientRect().width);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Reset
    widthsRef.current = [];
    offsetRef.current = 0;
    el.style.transform = "translateX(0px)";
    lastTsRef.current = null;

    // Ensure we have a sufficiently long strip
    ensureMinWidth();

    // Measure after duplication
    widthsRef.current = measureWidths(el);
    itemCountRef.current = widthsRef.current.length;

    const step = (ts: number) => {
      if (pausedRef.current) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      const last = lastTsRef.current ?? ts;
      const dt = Math.min(64, ts - last); // clamp to avoid huge jumps
      lastTsRef.current = ts;

      const dx = (speedPxPerSec * dt) / 1000; // px this frame
      offsetRef.current -= dx;
      el.style.transform = `translateX(${offsetRef.current}px)`;

      // Rotate first tile when fully out (width + gap)
      // Use a for-loop with safety cap to avoid infinite loops on layout anomalies
      let spins = 0;
      const MAX_SPINS = 10;
      while (spins < MAX_SPINS) {
        const firstWidth = widthsRef.current[0] ?? 0;
        if (!(firstWidth > 0 && Math.abs(offsetRef.current) >= firstWidth + gapPx)) break;

        // Move first DOM node to end
        const firstEl = el.firstElementChild as HTMLElement | null;
        if (!firstEl || firstEl.parentNode !== el) {
          // If something odd happens, re-measure and continue
          widthsRef.current = measureWidths(el);
          break;
        }

        el.appendChild(firstEl);

        // Update widths bookkeeping: shift first, push new last width
        widthsRef.current.shift();
        const lastEl = el.lastElementChild as HTMLElement | null;
        const lastW = lastEl ? lastEl.getBoundingClientRect().width : 0;
        widthsRef.current.push(lastW);

        // Correct the transform to keep continuity
        offsetRef.current += firstWidth + gapPx;
        el.style.transform = `translateX(${offsetRef.current}px)`;

        spins++;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    const onResize = () => {
      const ref = trackRef.current;
      if (!ref) return;
      // Re-ensure sufficient length on resize (e.g., viewport grew)
      ensureMinWidth();
      widthsRef.current = measureWidths(ref);
      // Keep current offset; fix past typo and ensure valid string
      ref.style.transform = `translateX(${offsetRef.current}px)`;
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      window.removeEventListener("resize", onResize);
    };
  }, [images.length, speedPxPerSec, gapPx]);

  return (
    <div className="relative w-full">
      {/* Edge fades (aesthetic) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 z-10 bg-gradient-to-l from-white to-transparent" />

      <div
        ref={viewportRef}
        className="relative w-full overflow-hidden rounded-2xl bg-white/90 border border-blue-100 shadow"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        <div
          ref={trackRef}
          className={`flex ${gapClass} items-center will-change-transform`}
          style={{ transform: "translateX(0px)" }}
        >
          {images.map((src, i) => (
            <figure
              key={`real-${i}`}
              className={`relative flex-shrink-0 ${heightClass} transition-transform duration-200 ${scaleOnHover}`}
              title="Accolade"
            >
              <img
                src={src}
                alt={`Accolade ${i + 1}`}
                className="w-full h-full object-cover select-none"
                loading={i === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            </figure>
          ))}
          {/* Initial duplicate once; additional duplication is handled at runtime to exceed viewport width */}
          {images.map((src, i) => (
            <figure
              key={`dup-${i}`}
              className={`relative flex-shrink-0 ${heightClass} transition-transform duration-200 ${scaleOnHover}`}
              title="Accolade duplicate"
            >
              <img
                src={src}
                alt={`Accolade duplicate ${i + 1}`}
                className="w-full h-full object-cover select-none"
                loading="lazy"
                draggable={false}
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Backgrounds per section (Upgraded Hero with subtle waves) ---------- */
function GlobalBackgroundDecor() {
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => {
      const y = window.scrollY;
      root.style.setProperty("--blob-shift", `${Math.min(y / 20, 24)}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return null;
}

function HeroBackgroundUpgradedWithWaves() {
  return (
    <>
      {/* Gradient mesh blob */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-[820px] opacity-35"
        viewBox="0 0 600 600"
        fill="none"
      >
        <defs>
          <radialGradient id="hero-mesh" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        <circle cx="300" cy="300" r="260" fill="url(#hero-mesh)" />
      </svg>

      {/* Angled wave */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-[-8%] w-[1100px] opacity-35"
        viewBox="0 0 1400 300"
        fill="none"
      >
        <defs>
          <linearGradient id="hero-wave" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path d="M0,210 C260,140 480,240 700,170 C880,110 1100,180 1400,120 L1400,300 L0,300 Z" fill="url(#hero-wave)" />
      </svg>

      {/* Subtle dot grid */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[900px] opacity-25 text-blue-200"
        viewBox="0 0 600 600"
        fill="none"
      >
        <defs>
          <pattern id="hero-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="600" height="600" fill="url(#hero-dots)" />
      </svg>

      {/* Extra low-contrast wave layer at bottom for more depth */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 left-0 w-[1400px] max-w-[1400px] opacity-25"
        viewBox="0 0 1440 180"
        fill="none"
      >
        <defs>
          <linearGradient id="hero-lowwave" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path d="M0,120 C240,80 480,160 720,120 C960,80 1200,140 1440,100 L1440,180 L0,180 Z" fill="url(#hero-lowwave)" />
      </svg>
    </>
  );
}

function AccoladesBackground() {
  return (
    <>
      {/* Subtle diagonal ribbons */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[1600px] max-w-[130vw] opacity-35"
        viewBox="0 0 1600 280"
        fill="none"
      >
        <defs>
          <linearGradient id="acc-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,160 C300,80 600,200 900,140 C1200,80 1400,160 1600,120 L1600,280 L0,280 Z" fill="url(#acc-grad)" />
      </svg>
      {/* Dot dust bottom-right */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 w-[760px] opacity-30 text-blue-300"
        viewBox="0 0 600 600"
        fill="none"
      >
        <defs>
          <pattern id="acc-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="600" height="600" fill="url(#acc-dots)" />
      </svg>
    </>
  );
}

function SolutionsBackground() {
  return (
    <>
      {/* Soft abstract shapes */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-0 w-[520px] opacity-40"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="200" fill="#EFF6FF" />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-0 w-[420px] opacity-30"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="200" fill="#DBEAFE" />
      </svg>
    </>
  );
}

function WhyBackground() {
  return (
    <>
      {/* Organic blobs */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-[-80px] w-[520px] opacity-25"
        viewBox="0 0 600 600"
        fill="none"
      >
        <path d="M300,80 C420,80 520,160 520,260 C520,360 440,480 320,480 C200,480 80,360 80,260 C80,160 180,80 300,80Z" fill="#DBEAFE" />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-60px] right-[-70px] w-[520px] opacity-20"
        viewBox="0 0 600 600"
        fill="none"
      >
        <path d="M320,100 C420,100 520,200 520,300 C520,400 420,500 320,500 C220,500 120,400 120,300 C120,200 220,100 320,100Z" fill="#BFDBFE" />
      </svg>
      {/* Lines */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 w-[300px] opacity-30"
        viewBox="0 0 300 300"
        fill="none"
      >
        <path d="M20 20 L280 20 M20 60 L280 60 M20 100 L280 100" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </>
  );
}

function PromoBackground() {
  return (
    <>
      {/* Radiant streaks */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] opacity-40"
        viewBox="0 0 1200 160"
        fill="none"
      >
        <defs>
          <linearGradient id="promo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,80 C200,60 400,100 600,80 C800,60 1000,100 1200,80 L1200,160 L0,160 Z" fill="url(#promo-grad)" />
      </svg>
    </>
  );
}

function TestimonialsBackground() {
  return (
    <>
      {/* Soft corner deco */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-96 h-96 opacity-30"
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
      {/* Soft grid */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-16 w-[640px] opacity-20 text-blue-300"
        viewBox="0 0 600 600"
        fill="none"
      >
        <defs>
          <pattern id="test-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" stroke="currentColor" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="600" height="600" fill="url(#test-grid)" />
      </svg>
    </>
  );
}

/* ---------- Components used ---------- */
function TimelineItemRight({ item }: { item: { title: string; desc: string } }) {
  return (
    <div className="relative pl-6 sm:pl-10">
      {/* Connector line (optional; uncomment if you render a vertical line) */}
      {/* <span className="pointer-events-none absolute left-0 sm:left-1 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-100 to-transparent" /> */}

      {/* Connector dot with subtle outer ring */}
      <span className="absolute -left-2.5 sm:-left-3.5 top-5 grid place-items-center">
        <span className="h-3.5 w-3.5 rounded-full bg-white shadow ring-2 ring-blue-600" />
        <span className="absolute h-6 w-6 rounded-full bg-blue-500/10 blur-[2px]" />
      </span>

      {/* Card */}
      <div className="rounded-lg border border-slate-200/80 bg-white/95 shadow-sm transition-all duration-200 hover:shadow-md">
        <div className="p-4 sm:p-5">
          <h3 className="text-[1.05rem] font-semibold tracking-tight text-slate-900 mb-1.5">
            {item.title}
          </h3>
          <p className="text-slate-600 text-[0.92rem] leading-relaxed">
            {item.desc}
          </p>
        </div>

        {/* Bottom micro-divider accent */}
        <div className="px-4 sm:px-5 pb-3">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
        </div>
      </div>
    </div>
  );
}
function CardsGridPremium({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-xl border border-slate-200/70 bg-gradient-to-br from-white/85 to-blue-50/40 backdrop-blur p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
        >
          {/* Top sheen */}
          <span className="pointer-events-none absolute inset-x-4 -top-1 h-px bg-gradient-to-r from-transparent via-blue-600/25 to-transparent" />
          {/* Corner glows */}
          <span className="pointer-events-none absolute -top-3 -left-3 h-12 w-12 rounded-full bg-blue-500/10 blur-xl" />
          <span className="pointer-events-none absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-indigo-500/10 blur-[18px]" />

          <div className="mb-2 flex items-start gap-2">
            <span className="mt-1 grid place-items-center">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            </span>
            <h3 className="text-[1.03rem] font-semibold tracking-tight text-slate-900">
              {item.title}
            </h3>
          </div>

          <p className="text-slate-600 text-[0.9rem] sm:text-[0.92rem] leading-relaxed">
            {item.desc}
          </p>

          <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />
        </div>
      ))}
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
