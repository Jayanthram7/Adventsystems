import { useEffect, useState } from "react";
import {
    Briefcase,
    Sparkles,
    Users,
    Trophy,
    Heart,
    Clock,
    ChevronRight,
    X,
    GraduationCap,
    BookOpen,
    Presentation,
    Lightbulb,
    Layers,
    Target,
    Rocket,
    Users2,
    ClipboardCheck,
    Wand2
  } from "lucide-react";
  import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Careers() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "Male",
    qualification: "",
    expectedSalary: "",
  });

  const whatsappNumber = "9965576297";

  const onChange = (field: keyof typeof form, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return alert("Please enter your name.");
    if (!form.age.trim()) return alert("Please enter your age.");
    if (!/^\d{1,2}$/.test(form.age.trim())) return alert("Age should be a valid number (e.g., 24).");
    if (!form.gender) return alert("Please choose gender.");
    if (!form.qualification.trim()) return alert("Please enter your qualification.");
    if (!form.expectedSalary.trim()) return alert("Please enter your expected salary.");
    return true;
  };

  const submitToWhatsApp = () => {
    if (!validate()) return;
    const heading = `*Career at Advent*`; // bold
    const message =
      `${encodeURIComponent(heading)}%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      `Age: ${encodeURIComponent(form.age)}%0A` +
      `Gender: ${encodeURIComponent(form.gender)}%0A` +
      `Qualification: ${encodeURIComponent(form.qualification)}%0A` +
      `Expected Salary: ${encodeURIComponent(form.expectedSalary)}`;
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
    setOpen(false);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="min-h-screen bg-white pt-[40px]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100">
        {/* Decorative bubbles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-tally-blue rounded-full blur-3xl" />
          <div className="absolute top-20 right-16 w-28 h-28 bg-tally-orange rounded-full blur-2xl" />
          <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-blue-400 rounded-full blur-xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center">
          <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-5 py-2 text-sm font-semibold text-tally-blue">
            <Sparkles className="w-4 h-4" />
            Grow with Advent Systems
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight text-tally-gray">
            Build a Meaningful Career at{" "}
            <span className="text-blue-700 drop-shadow-sm">Advent Systems</span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
          Join Advent Systems, where learning meets real-world impact. Submit your application in minutes—we’ll handle the rest.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 bg-tally-blue hover:bg-blue-700 text-white font-semibold rounded-full px-8 py-3 shadow-lg transition duration-300"
            >
              Apply Now
              <ChevronRight className="w-5 h-5" />
            </button>
            <a
              href="#life"
              className="inline-flex items-center gap-2 bg-white text-tally-blue hover:text-white hover:bg-tally-blue border border-tally-blue font-semibold rounded-full px-8 py-3 shadow-sm transition duration-300"
            >
              Life at Advent
            </a>
          </div>
        </div>
      </section>

      {/* Highlights / Why Advent */}
      <section id="life" className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-tally-gray">
              Why Choose <span className="text-blue-700">Advent?</span>
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              We invest in people. Explore the culture perks that help teams do their best work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              icon={<Users className="w-6 h-6" />}
              title="Collaborative Culture"
              desc="Open communication and supportive teammates across functions."
              color="from-blue-600 to-blue-400"
            />
            <Card
              icon={<Trophy className="w-6 h-6" />}
              title="Growth & Learning"
              desc="Courses, mentorship, and clear growth paths for every role."
              color="from-purple-600 to-purple-400"
            />
            <Card
  icon={<GraduationCap className="w-6 h-6" />}
  title="Structured Learning Paths"
  desc="Role-based roadmaps that guide progress from foundations to advanced proficiency."
  color="from-emerald-600 to-emerald-400"
/>

<Card
  icon={<BookOpen className="w-6 h-6" />}
  title="Courses & Assessments"
  desc="Curated courses with hands-on assessments to measure skills and certify milestones."
  color="from-indigo-600 to-indigo-400"
/>

<Card
  icon={<Presentation className="w-6 h-6" />}
  title="Instructor-Led Training"
  desc="Live workshops and bootcamps to accelerate mastery of real-world tools and workflows."
  color="from-amber-600 to-amber-400"
/>

<Card
  icon={<Lightbulb className="w-6 h-6" />}
  title="Mentorship & Guidance"
  desc="Work closely with senior experts for feedback, code reviews, and career advice."
  color="from-cyan-600 to-cyan-400"
/>

<Card
  icon={<Target className="w-6 h-6" />}
  title="Clear Growth Tracks"
  desc="Transparent skill matrices and promotion criteria to plan the next career step."
  color="from-teal-600 to-teal-400"
/>

<Card
  icon={<Users2 className="w-6 h-6" />}
  title="Experienced Team"
  desc="Learn from seasoned professionals who’ve scaled products and platforms."
  color="from-slate-700 to-slate-500"
/>


          </div>

          
        </div>
      </section>

      <Footer />

      {/* Application Modal */}
      {open && (
        <Modal onClose={() => setOpen(false)} title="Apply to Advent Systems">
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                placeholder="John Doe"
                value={form.name}
                onChange={v => onChange("name", v)}
              />
              <Input
                label="Age"
                type="tel"
                placeholder="24"
                value={form.age}
                onChange={v => onChange("age", v)}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Select
                label="Gender"
                value={form.gender}
                onChange={v => onChange("gender", v)}
                options={["Male", "Female"]}
              />
              <Input
                label="Qualification"
                placeholder="B.Com / B.Tech / MBA ..."
                value={form.qualification}
                onChange={v => onChange("qualification", v)}
              />
            </div>

            <Input
              label="Expected Salary"
              placeholder="e.g., 5 LPA or ₹35,000/month"
              value={form.expectedSalary}
              onChange={v => onChange("expectedSalary", v)}
            />

            <button
              onClick={submitToWhatsApp}
              className="w-full bg-tally-blue hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300"
            >
              Submit via WhatsApp
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting, consent is provided to be contacted via WhatsApp regarding this application.
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* Reusable small components */
function Card({
  icon,
  title,
  desc,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string; // gradient tailwind e.g., from-blue-600 to-blue-400
}) {
  return (
    <div className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h4 className="text-lg font-bold text-tally-gray">{title}</h4>
      <p className="mt-1 text-gray-600">{desc}</p>
    </div>
  );
}

function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700 mb-1">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tally-blue transition"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700 mb-1">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-tally-blue transition bg-white"
        >
          {options.map(opt => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </label>
  );
}

function Modal({
  children,
  onClose,
  title,
}: {
  children: React.ReactNode;
  onClose: () => void;
  title?: string;
}) {
  // Close on ESC
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
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          <div className="px-6 py-5">{children}</div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-fadeIn { animation: fadeIn .25s ease-out; }
          .animate-slideUp { animation: slideUp .25s ease-out; }
          @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
          @keyframes slideUp { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }
        `}
      </style>
    </div>
  );
}
