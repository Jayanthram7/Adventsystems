import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TallyLearn() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [formVisible, setFormVisible] = useState(false);

  const whatsappNumber = "9965576297";

  const validateForm = () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please fill in both Name and Phone.");
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
    const heading = `*Tally Learn*`; // bold with asterisks
    const message = `${encodeURIComponent(heading)}%0AName: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}`;
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };


  // Disable body scroll when modal open
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 pt-[40px] flex flex-col relative overflow-hidden">
      {/* Background SVG Decorations */}
      <BackgroundSVGs />

      <Header />

      <main className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 flex-grow">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-5">
            <span className="text-blue-800">Tally</span>{" "}
            <span className="text-tally-blue drop-shadow-sm">Learn</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-700 leading-relaxed">
            Empower business skills with Tally Learn — master accounting, inventory, and compliance with
            expert-led tutorials and real-world insights tailored for growth.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => setFormVisible(true)}
              className="inline-flex items-center gap-2 bg-tally-orange hover:bg-tally-orange-hover text-white font-semibold rounded-full px-8 py-3 shadow-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-tally-orange/40"
            >
              Register
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-90" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <a
              href="#modules"
              className="inline-flex items-center gap-2 bg-white text-blue-800 hover:text-white hover:bg-blue-800 border border-blue-200 font-semibold rounded-full px-8 py-3 shadow-sm transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Explore Modules
            </a>
          </div>
        </section>

        {/* Featured Images / Modules */}
        <section id="modules" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Use high-quality dummy images */}
            {[
              { title: "Accounting Basics" },
              { title: "Inventory Management", img: "https://picsum.photos/seed/tally2/600/380" },
              { title: "GST & Compliance", img: "https://picsum.photos/seed/tally3/600/380" },
              { title: "Payroll Setup", img: "https://picsum.photos/seed/tally4/600/380" },
              { title: "Reporting & Analytics", img: "https://picsum.photos/seed/tally5/600/380" },
              { title: "Advanced Vouchers", img: "https://picsum.photos/seed/tally6/600/380" },
            ].map((card, idx) => (
              <article
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white border shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">
                    Structured lessons, exercises, and practical workflows to build proficiency.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-blue-700 font-semibold">Beginner–Advanced</span>
                    <button
                      onClick={() => setFormVisible(true)}
                      className="text-tally-blue hover:text-blue-800 font-semibold"
                    >
                      Enroll →
                    </button>
                  </div>
                </div>
                {/* Subtle top gradient accent */}
                
              </article>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white p-8 sm:p-12 shadow-2xl">
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Learn faster with curated Tally pathways
              </h2>
              <p className="mt-3 text-blue-100">
                Bite-sized modules, step-by-step projects, and hands-on exercises designed for busy professionals.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => setFormVisible(true)}
                  className="inline-flex items-center gap-2 bg-white text-blue-800 hover:bg-blue-50 font-semibold rounded-full px-6 py-3 shadow-md transition duration-300 focus:outline-none focus:ring-4 focus:ring-white/40"
                >
                  Start Registration
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-90" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
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
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tally-blue transition"
              autoFocus
            />
            <input
              type="tel"
              placeholder="Phone (10 digits)"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              maxLength={10}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tally-blue transition"
            />
            <button
              onClick={sendWhatsApp}
              className="w-full bg-tally-blue hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
            >
              Submit
            </button>
            <p className="text-xs text-gray-500 text-center">
              By registering, consent is provided to be contacted via WhatsApp for course updates.
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
  // Close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-100 animate-fadeIn"
        onClick={onClose}
      />
      {/* Dialog */}
      <div className="relative z-10 w-full max-w-md">
        <div className="animate-slideUp rounded-2xl bg-white shadow-2xl border border-blue-100">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="px-6 py-5">{children}</div>
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
        className="pointer-events-none absolute -top-24 -right-24 w-[700px] opacity-20 text-blue-300"
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

      {/* Blurred blob left */}
      

      {/* Subtle dots */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-40 left-6 w-40 opacity-30 text-blue-300"
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
