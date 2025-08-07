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
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer group">
      <div className="flex items-start space-x-4">
        <div className={`${bgColor} text-white p-3 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-tally-gray mb-2 group-hover:text-tally-blue transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-tally-bg text-tally-gray px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-tally-blue hover:text-white cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
