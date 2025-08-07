import { Calculator, Package, TrendingUp } from "lucide-react";
import Header from "@/components/header";
import FeatureCard from "@/components/feature-card";
import ChatInterface from "@/components/chat-interface";

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
      <section className="bg-gradient-to-b from-tally-bg to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-tally-gray mb-4">
            TallyPrime Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your AI-powered business companion for TallyPrime. Get instant help with accounting, inventory management, 
            compliance, and business insights through intelligent conversations.
          </p>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Features */}
            <div className="space-y-8">
              {/* Features Heading */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-tally-gray mb-3">
                  Powerful Features
                </h2>
                <p className="text-gray-600 text-lg">
                  Everything you need to manage your business efficiently
                </p>
              </div>

              {/* Feature Cards */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                  <div className="text-3xl font-bold text-tally-blue mb-2">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Available</div>
                  <div className="text-xs text-gray-500 mt-1">Always ready to help</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                  <div className="text-3xl font-bold text-tally-orange mb-2">95%</div>
                  <div className="text-sm text-gray-600 font-medium">Accuracy</div>
                  <div className="text-xs text-gray-500 mt-1">Reliable responses</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                  <div className="text-3xl font-bold text-blue-500 mb-2">Instant</div>
                  <div className="text-sm text-gray-600 font-medium">Response</div>
                  <div className="text-xs text-gray-500 mt-1">Lightning fast</div>
                </div>
              </div>
            </div>

            {/* Right Column - Chat Interface */}
            <ChatInterface />
          </div>
        </div>
      </section>
    </div>
  );
}
