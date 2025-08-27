import { Calculator, Package, TrendingUp , Clock , Target , Cpu , ChevronDown} from "lucide-react";
import Header from "@/components/header";
import FeatureCard from "@/components/feature-card";
import ChatInterface from "@/components/chat-interface";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot"

export default function Home() {
  const features = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Accounting Assistance",
      description: "Get help with voucher entries, ledger management, and financial reporting. Ask questions about GST compliance and accounting principles.",
      tags: ["Voucher Entry", "GST Compliance", "Reports"],
      bgColor: "bg-tally-blue"
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Inventory Management", 
      description: "Smart guidance for stock management, purchase orders, and inventory optimization. Real-time insights for better decision making.",
      tags: ["Stock Management", "Purchase Orders", "Analytics"],
      bgColor: "bg-tally-orange"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Business Intelligence",
      description: "Analyze your business performance with AI-driven insights. Get recommendations for growth and optimization strategies.",
      tags: ["Performance Analysis", "Growth Insights", "Forecasting"],
      bgColor: "bg-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-[40px]">
      <Header />
      
      
      {/* Hero Section */}
      <section className="bg-white py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-tally-blue rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-tally-orange rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-tally-blue rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-1">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-blue-200">
            <span className="text-tally-blue font-semibold text-sm z-1">AI Powered Tally Assistant ✨</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-tally-gray mb-6 leading-tight">
            <span className="text-blue-700">
              TallyPrime
            </span>
            <span className="text-tally-gray"> Assistant</span>
          </h1>

          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Your intelligent business companion for <span className="font-semibold text-tally-blue">accounting</span>, 
            <span className="font-semibold text-tally-orange"> inventory management</span>, and 
            <span className="font-semibold text-blue-600"> compliance</span> in Tally Prime - powered by AI
          </p>
          
          {/* Quick Features Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
              <span className="text-sm text-gray-700">🧮 Smart Accounting Assistance </span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
              <span className="text-sm text-gray-700">📊 Tally Prime Related Queries </span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
              <span className="text-sm text-gray-700">⚡ Instant Responses</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
              <span className="text-sm text-gray-700">🛡️ GST & E-Invoice Queries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-4 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Features */}
            <div className="space-y-10">
              {/* Features Heading */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center text-tally-blue font-bold text-sm uppercase tracking-wide mb-4">
                  ⚡ Core Capabilities
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-tally-gray mb-4 leading-tight">
                  Powerful Features for 
                  <span className=" text-blue-800"> Modern Business</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Everything you need to streamline operations, ensure compliance, and drive growth with intelligent automation
                </p>
              </div>

              {/* Feature Cards */}
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>

              {/* Enhanced Stats with Background */}
              <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-tally-gray mb-6 text-center">Why Choose Our Assistant?</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-tally-orange to-orange-500 text-blue-800 border w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-8 h-8" /> {/* Adjust size as needed */}
                    </div>
                    <div className="text-lg font-bold text-tally-gray">24/7</div>
                    <div className="text-sm text-gray-600 font-medium">Available</div>
                    <div className="text-xs text-gray-500 mt-1">Always ready to help</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="text-white border w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold">⚡</span>
                    </div>
                    <div className="text-lg font-bold text-tally-gray">Instant</div>
                    <div className="text-sm text-gray-600 font-medium">Response</div>
                    <div className="text-xs text-gray-500 mt-1">Realtime Support</div>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-tally-orange to-orange-500 text-blue-800 border w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8" /> {/* Adjust size as needed */}
                    </div>
                    <div className="text-lg font-bold text-tally-gray">In-house</div>
                    <div className="text-sm text-gray-600 font-medium">Development</div>
                    <div className="text-xs text-gray-500 mt-1"> By Team Advent</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Chat Interface */}
            {/* Right Column - Chat Interface */}
            <div className="lg:sticky lg:top-8 lg:h-screen z-99 flex flex-col">
              <h3
                className="flex items-center justify-center lg:justify-start text-red-600 font-semibold text-xl cursor-pointer group"
                title="Try our new AI assistant"
              >
                <span className="mr-1 select-none">✨</span>
                <span
                  onClick={() => window.scrollBy({ top: 430, behavior: "smooth" })}
                  className="relative text-blue-800 underline-offset-4 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-blue-800 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer"
                >
                  Try our new AI assistant
                </span>

                <ChevronDown className="w-5 h-5 ml-2 text-blue-800 group-hover:text-tally-blue transition-colors" />
              </h3>

              <ChatInterface />
            </div>

            
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
