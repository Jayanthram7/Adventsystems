import { useState } from 'react';
import { Button } from './ui/button';  // Adjust import to your UI library

export const Solutions = () => {
  const [showAll, setShowAll] = useState(false);

  // Slice the array based on state
  const displayedSolutions = showAll ? solutions : solutions.slice(0, 5);

  return (
    <section id="solutions" className="relative py-12 sm:py-16 bg-white overflow-hidden">
      <SolutionsBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
            <Boxes className="w-5 h-5" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Our Ready and <span className="text-blue-700">Core Solutions</span>
          </h2>
        </div>

        <p className="text-blue-900/80 text-sm sm:text-base text-center mb-12">
          Modern solutions designed to empower your business, built on Tally’s Power of Simplicity
          — making them easy, effective, and ready at your fingertips
        </p>

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300" />
          <div className="ml-10 sm:ml-16 space-y-8">
            {displayedSolutions.map((item, idx) => (
              <TimelineItemRight key={idx} item={item} />
            ))}
          </div>
        </div>

        {solutions.length > 5 && (
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-6 py-2 rounded-md transition duration-300 font-medium"
            >
              {showAll ? 'Show Less' : 'View More'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
