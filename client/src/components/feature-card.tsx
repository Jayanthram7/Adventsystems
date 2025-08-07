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
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-start space-x-4">
        <div className={`${bgColor} text-white p-3 rounded-lg`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-tally-gray mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-tally-bg text-tally-gray px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
