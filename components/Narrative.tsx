import React from 'react';

export const Narrative: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-charcoal-light relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* The Problem */}
        <div className="space-y-8 opacity-80 hover:opacity-100 transition-opacity duration-500">
          <h2 className="text-4xl font-serif text-gray-400">The Modern <span className="text-white">Confusion</span></h2>
          <div className="w-12 h-1 bg-gray-700"></div>
          <p className="text-lg font-sans text-gray-400 leading-relaxed">
            We live in an era of "Osho-style" paradoxes and endless data streams. 
            Information overload has paralyzed the human will. 
            Greed is disguised as ambition. Ego is marketed as confidence.
          </p>
          <p className="text-lg font-sans text-gray-400 leading-relaxed">
            We are drowning in knowledge, yet starving for wisdom. 
            The modern mind is a supercomputer running on a corrupted operating system.
          </p>
        </div>

        {/* The Solution */}
        <div className="glass-panel p-8 md:p-12 rounded-2xl border-l-4 border-gold relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="48" stroke="#FFD700" strokeWidth="2"/>
              <path d="M50 20V80M20 50H80" stroke="#FFD700" strokeWidth="2"/>
            </svg>
          </div>
          
          <h2 className="text-4xl font-serif text-gold mb-8">Valluvar's <span className="text-white">Clarity</span></h2>
          <p className="text-xl font-sans text-white leading-relaxed mb-6">
            The Thirukkural is not just a book of ethics. It is a <span className="text-saffron font-bold">Mathematical Operating System</span>.
          </p>
          <ul className="space-y-4 font-sans text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-gold mt-1">✦</span>
              <span>Strips away religion, caste, and mythology.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold mt-1">✦</span>
              <span>Focuses purely on the <strong className="text-white">Consciousness</strong> of the individual.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold mt-1">✦</span>
              <span>A Universal Veda for the year 2026 and beyond.</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};