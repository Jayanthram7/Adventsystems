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
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-8 py-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer group relative overflow-hidden z-1">
      {/* Background gradient on hover */}
      <div className="relative inset-0 bg-gradient-to-br from-tally-blue/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex items-start space-x-6 relative z-11">
        <div className={`${bgColor} text-white p-3 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl shadow-lg`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-tally-gray mb-2 group-hover:text-tally-blue transition-colors duration-300 z-1 ">{title}</h3>
          <p className="text-gray-600 mb-3 leading-relaxed text-lg">{description}</p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <span key={index} className="text-tally-gray px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-blue-800 cursor-pointer border border-gray-200 hover:border-tally-blue">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Subtle arrow indicator */}
        </div>
      </div>
    </div>
  );
}
