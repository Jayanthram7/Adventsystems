import { Phone, Mail, Globe } from "lucide-react";
import { SiWhatsapp, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-tally-blue to-blue-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-white px-3 py-1 rounded mr-3">
                <span className="text-tally-blue font-bold text-lg italic">Advent</span>
              </div>
              <span className="text-white font-semibold text-xl">Systems</span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Empowering businesses with intelligent TallyPrime solutions and AI-powered assistance. 
              Your trusted partner for accounting, compliance, and business growth.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/your-number" 
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
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">info@adventsystems.com</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors">
                <Globe className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">www.adventsystems.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-blue-100">
              <li className="hover:text-white transition-colors cursor-pointer text-sm">TallyPrime Support</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">GST Compliance</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">Business Analytics</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm">AI Solutions</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-400 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            © 2024 Advent Systems. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}