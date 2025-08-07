import { Search, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-tally-blue shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <div className="bg-white px-3 py-1 rounded">
                <span className="text-tally-blue font-bold text-lg italic">Tally</span>
              </div>
              <span className="text-white font-semibold ml-2">Assistant</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <div className="relative group">
                <button className="text-white hover:text-tally-orange transition-colors flex items-center">
                  Product
                </button>
              </div>
              <a href="#" className="text-white hover:text-tally-orange transition-colors">Features</a>
              <div className="relative group">
                <button className="text-white hover:text-tally-orange transition-colors flex items-center">
                  Support
                </button>
              </div>
              <div className="relative group">
                <button className="text-white hover:text-tally-orange transition-colors flex items-center">
                  Resources
                </button>
              </div>
            </nav>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-tally-orange transition-colors text-sm hidden lg:block">TallyPrime</a>
            <a href="#" className="text-white hover:text-tally-orange transition-colors text-sm hidden lg:block">TallyEdge</a>
            <a href="#" className="text-white hover:text-tally-orange transition-colors text-sm hidden lg:block">TallyCapital</a>
            <a href="#" className="text-white hover:text-tally-orange transition-colors text-sm hidden lg:block">TallyEducation</a>
            
            <div className="flex items-center space-x-2 ml-6">
              <Button variant="ghost" size="sm" className="text-white hover:text-tally-orange hover:bg-transparent">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-tally-orange hover:bg-transparent">
                <Globe className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-tally-orange hover:bg-transparent">Log in</Button>
              <Button className="bg-tally-orange hover:bg-tally-orange-hover text-white">
                Get Started <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
