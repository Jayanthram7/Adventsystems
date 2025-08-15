import { Search, Globe, ArrowRight, Headset, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import logo from "@/components/tallylogo.png";
import { Link, useLocation } from "wouter";
import { useState } from "react";

export default function Header() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    license: "",
    email: "",      // NEW: optional email field
    issue: "",      // Issue category (select)
    details: "",    // Optional free-text details if you want to keep a note
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation(); // get current route

  // Loading / anti-double-click state
  const [isSubmitting, setIsSubmitting] = useState<"none" | "whatsapp" | "email">("none");

  const whatsappNumber = "919842276297";
  const emailAddress = "adventsystems@gmail.com";

  // Dynamic background based on route
  const headerBg =
    location === "/learn"
      ? "bg-gradient-to-r from-green-700 via-green-700 to-green-600"
      : "bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600";

  const generateTokenNumber = () => {
    const now = new Date();
    const datePart = now.toISOString().slice(0, 10);
    const randomPart = Math.floor(10000 + Math.random() * 90000);
    return `${datePart}-${randomPart}`;
  };

  // Build payload once, used by both WhatsApp and Email
  const buildPayload = () => {
    const now = new Date();
    const isoNow = now.toISOString();
    return {
      phoneNumber: formData.phone,
      callerName: formData.name,
      company: formData.company,
      serialNumber: formData.license,
      callTime: isoNow,
      reason: "", // per your latest payload structure
      typeOfService: formData.issue, // selected issue category
      assignedTo: "",
      tokenNumber: generateTokenNumber(),
      email: formData.email || "",   // include optional email to backend
      statusOfCall: "Requested",
      createdAt: isoNow,
      updatedAt: isoNow,
    };
  };

  // Fire-and-forget with simple retry/backoff
  const backgroundPostToBackend = async (payload: any) => {
    const url = "https://backend-copy-1.onrender.com/api/call-records";
    const maxAttempts = 3;
    let attempt = 0;
    let delay = 500;

    while (attempt < maxAttempts) {
      try {
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        });
        return;
      } catch (_err) {
        attempt += 1;
        if (attempt >= maxAttempts) {
          console.error("Background post failed after retries");
          return;
        }
        await new Promise((r) => setTimeout(r, delay));
        delay *= 2;
      }
    }
  };

  const validateForm = () => {
    const { name, phone, company, license, issue } = formData;

    if (!name || !phone || !company || !license || !issue) {
      alert("Please fill in all required fields.");
      return false;
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return false;
    }

    const licenseDigits = license.replace(/\D/g, "");
    if (licenseDigits.length !== 9) {
      alert("License number must be exactly 9 digits.");
      return false;
    }

    // Email is optional – if provided, do a basic format check
    if (formData.email) {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      if (!ok) {
        alert("Please enter a valid email address or leave it blank.");
        return false;
      }
    }

    return true;
  };

  // Build a richer message including date/time and optional email
  const buildSupportMessage = (tokenNumber: string) => {
    const now = new Date();
    const localTime = now.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const isoTime = now.toISOString();

    const lines = [
      "*New Support Request*",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Company: ${formData.company}`,
      `License: ${formData.license}`,
      `Issue: ${formData.issue}`,
      formData.details ? `Details: ${formData.details}` : undefined,
      formData.email ? `Email: ${formData.email}` : undefined,
      `Token: ${tokenNumber}`,
      `Date/Time (local): ${localTime}`,
    ].filter(Boolean) as string[];

    return lines.join("\n");
  };

  // Open WhatsApp first, then background post
  const sendWhatsApp = async () => {
    if (isSubmitting !== "none") return; // prevent double-clicks
    if (!validateForm()) return;

    try {
      setIsSubmitting("whatsapp");

      const payload = buildPayload();
      const message = buildSupportMessage(payload.tokenNumber);

      // Open WhatsApp immediately
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");

      // Background post (non-blocking)
      backgroundPostToBackend(payload);

      // Safety re-enable in case the dialog remains open and they come back
      setTimeout(() => setIsSubmitting("none"), 4000);
    } catch (e) {
      setIsSubmitting("none");
    }
  };

  // Open Gmail first, then background post
  const sendEmail = async () => {
    if (isSubmitting !== "none") return; // prevent double-clicks
    if (!validateForm()) return;

    try {
      setIsSubmitting("email");

      const payload = buildPayload();
      const subject = `Support Request - ${payload.tokenNumber}`;
      const body = buildSupportMessage(payload.tokenNumber);

      // Open Gmail compose immediately
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        emailAddress
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, "_blank");

      // Background post (non-blocking)
      backgroundPostToBackend(payload);

      // Safety re-enable
      setTimeout(() => setIsSubmitting("none"), 4000);
    } catch (e) {
      setIsSubmitting("none");
    }
  };

  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/products" },
    { label: "TallAi", href: "/" },
  ];

  // Options for Issue select
  const issueOptions = [
    "License",
    "Data",
    "Print/Share",
    "E-Way Bill / E-Invoice",
    "GST",
    "AWS",
    "Customization",
    "NEW Pack",
    "TSS",
  ];

  return (
    <header className={`${headerBg} shadow-sm fixed top-0 left-0 w-full z-50`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 relative">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 text-white hover:text-tally-orange focus:outline-none focus:ring-2 focus:ring-tally-orange rounded"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <img
              src="https://img1.wsimg.com/isteam/ip/fa4c5394-6dd8-4339-9ac8-0be7e0232d41/ADV-30-New.png/:/cr=t:3.83%25,l:0%25,w:100%25,h:92.34%25/rs=w:984,h:740"
              alt="Advent Logo"
              className="hidden lg:block w-10 h-10 rounded-full object-cover"
            />

            <span className="font-sans text-xl font-semibold tracking-wide text-white drop-shadow-md select-none z-50">
              Advent Systems
            </span>

            <nav className="hidden lg:flex items-center space-x-6 text-white text-sm font-medium">
              {navItems.map(({ label, href }) => (
                <Link key={label} href={href} scroll={true}>
                  <a
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="relative flex items-center gap-2 hover:text-tally-orange transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {label}
                    {label === "TallAi" && (
                      <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        NEW
                      </span>
                    )}
                  </a>
                </Link>
              ))}
              <a
                href="/learn"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setTimeout(() => setLocation("/career"), 300);
                }}
                className="text-white hover:text-tally-orange transition-colors duration-300 font-medium"
              >
                Careers
              </a>
            </nav>
          </div>

          <div className="hidden lg:flex items-center justify-center flex-grow">
            <img src={logo} alt="TallyPrime Logo" className="w-18 h-8" />
          </div>

          <div className="flex items-center space-x-4">
            <nav className="hidden lg:flex items-center space-x-6 text-white text-sm font-medium mr-4">
              <a
                href="/learn"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setTimeout(() => setLocation("/learn"), 300);
                }}
                className="text-white hover:text-tally-orange transition-colors duration-300 font-medium"
              >
                Learn Tally with Us
              </a>
              <a
                href="https://tallysolutions.com/tally-prime/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tally-orange transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                TallyPrime
              </a>
              <a
                href="https://help.tallysolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tally-orange transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                TallyHelp
              </a>
              <a
                href="https://tallysolutions.com/tally-prime/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tally-orange transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                TallyBlog
              </a>
            </nav>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-tally-orange hover:bg-tally-orange-hover text-tally-blue flex items-center gap-2 px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-tally-orange focus:ring-offset-1">
                  <Headset className="h-4 w-4" />
                  Support Request
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent
                onOpenAutoFocus={() => setIsSubmitting("none")}
                onCloseAutoFocus={() => setIsSubmitting("none")}
              >
                <DialogHeader>
                  <DialogTitle>Request Support</DialogTitle>
                  <DialogDescription>
                    Please fill in your details and choose a way to contact us.
                  </DialogDescription>
                </DialogHeader>

                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border border-gray-300 mb-1"
                />
                <Input
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border border-gray-300 mb-1"
                />
                <Input
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="border border-gray-300 mb-1"
                />
                <Input
                  placeholder="License Number"
                  value={formData.license}
                  onChange={(e) => setFormData({ ...formData, license: e.target.value })}
                  className="border border-gray-300 mb-1"
                />

                {/* Optional Email */}
                <Input
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border border-gray-300 mb-1"
                />

                {/* Issue category select */}
                <div className="mb-1">
                  <label className="block text-sm font-medium mb-1">Issue</label>
                  <select
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    <option value="" disabled>
                      Select an issue
                    </option>
                    {issueOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Optional details textarea (keep if you want extra info) */}
                <textarea
                  placeholder="Additional details (optional)"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="border border-gray-300 mb-1 rounded-md px-3 py-2 text-sm w-full min-h-[90px]"
                />

                <DialogFooter className="flex justify-between">
                  

                  <Button
                    onClick={sendEmail}
                    disabled={isSubmitting !== "none"}
                    className={`${
                      isSubmitting === "email" ? "opacity-80 cursor-not-allowed" : ""
                    } bg-white border border-red-400 text-red-400 hover:bg-red-100 flex items-center gap-2`}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1024px-Gmail_icon_%282020%29.svg.png"
                      alt="Gmail"
                      className="w-6 h-5"
                    />
                    {isSubmitting === "email" ? "Opening Gmail…" : "Gmail"}
                    {isSubmitting === "email" && (
                      <span className="ml-2 inline-block animate-pulse">• • •</span>
                    )}
                  </Button>
                  <Button
                    onClick={sendWhatsApp}
                    disabled={isSubmitting !== "none"}
                    className={`${
                      isSubmitting === "whatsapp" ? "opacity-80 cursor-not-allowed" : ""
                    } bg-white border border-green-500 text-green-500 hover:bg-green-100 flex items-center gap-2`}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-6 h-6"
                    />
                    {isSubmitting === "whatsapp" ? "Opening WhatsApp…" : "WhatsApp"}
                    {isSubmitting === "whatsapp" && (
                      <span className="ml-2 inline-block animate-pulse">• • •</span>
                    )}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="lg:hidden bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 px-4 pb-4 absolute top-full left-0 w-full shadow-md z-50">
          <ul className="flex flex-col space-y-2 text-white font-medium">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} scroll={true}>
                  <a
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setMobileMenuOpen(false);
                    }}
                    className="block py-2 px-2 hover:text-tally-orange transition-colors duration-300"
                  >
                    {label}
                    {label === "TallAi" && (
                      <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-2">
                        NEW
                      </span>
                    )}
                  </a>
                </Link>
              </li>
            ))}

            <li>
              <a
                href="/learn"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setMobileMenuOpen(false);
                  setTimeout(() => setLocation("/learn"), 300);
                }}
                className="block py-2 px-2 hover:text-tally-orange transition-colors duration-300"
              >
                Learn Tally with Us
              </a>
            </li>
            <li>
              <a
                href="https://tallysolutions.com/tally-prime/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-2 hover:text-tally-orange transition-colors duration-300"
              >
                TallyPrime
              </a>
            </li>
            <li>
              <a
                href="https://help.tallysolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-2 hover:text-tally-orange transition-colors duration-300"
              >
                TallyHelp
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollBy({ top: 2600, behavior: "smooth" });
                  setMobileMenuOpen(false);
                }}
                className="block py-2 px-2 hover:text-tally-orange transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
