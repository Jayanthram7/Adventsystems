"use client";
import { Phone, Mail, Globe } from "lucide-react";
import { SiWhatsapp, SiYoutube, SiFacebook } from "react-icons/si";
import { useLocation } from "wouter";

export default function Footer() {
  const [location] = useLocation();
  // Use startsWith if you might have nested routes like /learn/... 
  const isLearn = location === "/learn" || location.startsWith("/learn/");
  const bgClass = isLearn ? "bg-gradient-to-r from-green-800 via-green-700 to-green-600" : "bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600";

  return (
    <footer className={`from-tally-blue to-blue-700 text-white py-12 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className={`py-1 rounded mr-3 `}>
                <span className="text-tally-blue font-bold bg-transparent text-3xl ">Advent Systems </span>
              </div>
            </div>
            <p className="text-white mb-6 leading-relaxed">
              Empowering businesses with intelligent TallyPrime solutions and AI-powered assistance. 
              Your trusted partner for accounting, compliance, and business growth.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://wa.me/919842276297?text=Hello%20Advent%20Systems"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-all duration-200 hover:scale-110"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 p-3 rounded-full transition-all duration-200 hover:scale-110"
              >
                <SiYoutube className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/your-page"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-200 hover:scale-110"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white hover:text-white transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+91 98422 76297 / +91 99655 73231</span>
              </div>
              <div className="flex items-center space-x-3 text-white hover:text-white transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">adventsystems@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white hover:text-white transition-colors">
                <Globe className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">www.adventsystems.in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-white">
              <li className="hover:text-white transition-colors cursor-pointer text-sm">TallyPrime Gold / Silver License</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">TSS Renewal</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">Tally Server 9</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">Tally Customization</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">Tally Learning ( Corporate & Individual )</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">Third Party Integration</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">© 2025 Advent Systems. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white hover:text-white text-sm transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
