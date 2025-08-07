import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  bgColor: string;
}

export default function FeatureCard({ icon, title, description, tags, bgColor }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer group relative overflow-hidden">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-tally-blue/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex items-start space-x-6 relative z-10">
        <div className={`${bgColor} text-white p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl shadow-lg`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-tally-gray mb-3 group-hover:text-tally-blue transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">{description}</p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <span key={index} className="bg-gradient-to-r from-tally-bg to-blue-50 text-tally-gray px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-tally-blue hover:to-blue-600 hover:text-white cursor-pointer border border-gray-200 hover:border-tally-blue">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Subtle arrow indicator */}
          <div className="mt-6 flex items-center text-tally-blue opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
            <span className="text-sm font-semibold mr-2">Explore feature</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
