import { Calculator, Package, TrendingUp } from "lucide-react";
import Header from "@/components/header";
import FeatureCard from "@/components/feature-card";
import ChatInterface from "@/components/chat-interface";
import Footer from "@/components/footer";

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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tally-bg via-blue-50 to-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-tally-blue rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-tally-orange rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-tally-blue rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-blue-200">
            <span className="text-tally-blue font-semibold text-sm">✨ AI-Powered Assistant</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-tally-gray mb-6 leading-tight">
            <span className="bg-gradient-to-r from-tally-blue to-blue-600 bg-clip-text text-transparent">
              TallyPrime
            </span>
            <br />
            <span className="text-tally-gray">Assistant</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Your intelligent business companion for <span className="font-semibold text-tally-blue">accounting</span>, 
            <span className="font-semibold text-tally-orange"> inventory management</span>, and 
            <span className="font-semibold text-blue-600"> compliance</span> - powered by advanced AI
          </p>
          
          {/* Quick Features Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
              <span className="text-sm text-gray-700">🧮 Smart Accounting</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
              <span className="text-sm text-gray-700">📊 Real-time Analytics</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
              <span className="text-sm text-gray-700">⚡ Instant Responses</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
              <span className="text-sm text-gray-700">🛡️ GST Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Features */}
            <div className="space-y-10">
              {/* Features Heading */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-gradient-to-r from-tally-blue to-blue-600 bg-clip-text text-transparent font-bold text-sm uppercase tracking-wide mb-4">
                  ⚡ Core Capabilities
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-tally-gray mb-4 leading-tight">
                  Powerful Features for 
                  <span className="bg-gradient-to-r from-tally-orange to-orange-500 bg-clip-text text-transparent"> Modern Business</span>
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
                    <div className="bg-gradient-to-br from-tally-blue to-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold">24</span>
                    </div>
                    <div className="text-lg font-bold text-tally-gray">24/7</div>
                    <div className="text-sm text-gray-600 font-medium">Available</div>
                    <div className="text-xs text-gray-500 mt-1">Always ready to help</div>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-tally-orange to-orange-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold">95</span>
                    </div>
                    <div className="text-lg font-bold text-tally-gray">95%</div>
                    <div className="text-sm text-gray-600 font-medium">Accuracy</div>
                    <div className="text-xs text-gray-500 mt-1">Reliable responses</div>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold">⚡</span>
                    </div>
                    <div className="text-lg font-bold text-tally-gray">Instant</div>
                    <div className="text-sm text-gray-600 font-medium">Response</div>
                    <div className="text-xs text-gray-500 mt-1">Lightning fast</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Chat Interface */}
            <div className="lg:sticky lg:top-8">
              <ChatInterface />
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Showcase */}
      <section className="py-20 bg-gradient-to-r from-tally-blue via-blue-600 to-tally-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-8 h-8 bg-white/10 rounded-full"></div>
          <div className="absolute top-32 right-20 w-6 h-6 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-white font-semibold text-sm">🤖 AI-Powered Intelligence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Smart Assistance for Every Business Need
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our advanced AI understands TallyPrime inside and out, providing contextual help and intelligent insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-tally-orange rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Natural Conversations</h3>
              <p className="text-blue-100 text-sm">Ask questions in plain English and get clear, actionable answers</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Context-Aware</h3>
              <p className="text-blue-100 text-sm">Understands your specific business context and TallyPrime setup</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Comprehensive Knowledge</h3>
              <p className="text-blue-100 text-sm">Expert-level understanding of accounting principles and regulations</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Instant Solutions</h3>
              <p className="text-blue-100 text-sm">Get immediate help with troubleshooting and best practices</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-6">Join thousands of businesses already using AI-powered assistance for their TallyPrime operations</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-tally-orange hover:bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
                  Start Free Trial
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-xl font-semibold border border-white/30 transition-all duration-200 hover:scale-105">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
