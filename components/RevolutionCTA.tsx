import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { AppMode } from '../types';

interface CTAProps {
    mode?: AppMode;
}

export const RevolutionCTA: React.FC<CTAProps> = ({ mode = 'scholar' }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Simulate API call
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className={`py-32 px-6 relative transition-colors ${mode === 'scholar' ? 'bg-gradient-to-t from-charcoal to-charcoal-light' : 'bg-gradient-to-t from-indigo-950 to-indigo-900'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-5xl md:text-7xl font-serif mb-8 ${mode === 'scholar' ? 'text-gold' : 'text-cyan-400 font-sans font-bold'}`}>
          {mode === 'scholar' ? <>Join the Revolution<br />for Evolution</> : <>Join the<br />Hero Academy</>}
        </h2>
        
        <p className={`text-xl mb-12 max-w-2xl mx-auto ${mode === 'scholar' ? 'text-gray-300' : 'text-indigo-200'}`}>
          {mode === 'scholar' 
             ? "\"All Praise belongs to the Almighty, but Freewill belongs to the Individual who Acts.\"" 
             : "Sign up to get a new Superpower Code (Kural) sent to you every week!"}
        </p>

        <div className="bg-white/5 backdrop-blur-md p-1 rounded-full max-w-md mx-auto border border-white/10">
          <form onSubmit={handleSubmit} className="flex items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent text-white px-6 py-4 flex-grow outline-none placeholder-gray-500 font-sans"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit"
              className={`font-bold px-8 py-4 rounded-full transition-all flex items-center gap-2 group ${
                mode === 'scholar' 
                  ? 'bg-gold hover:bg-yellow-400 text-charcoal' 
                  : 'bg-cyan-500 hover:bg-cyan-400 text-indigo-950'
              }`}
            >
              {submitted ? (
                <Check size={20} />
              ) : (
                <>
                  JOIN <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
        
        <p className="mt-6 text-sm text-gray-600">
          Join the waitlist for the AI-Teacher Pilot Program.
        </p>
      </div>
    </section>
  );
};
