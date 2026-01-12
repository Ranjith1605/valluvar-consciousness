import React, { useState } from 'react';
import { MODERN_PROBLEMS, KURALS_DB } from '../constants';
import { Kural, AppMode } from '../types';
import { ChevronRight, Unlock, ExternalLink, ShieldCheck } from 'lucide-react';
import { ConsciousnessSearch } from './ConsciousnessSearch';
import { UniversalTruths } from './UniversalTruths';
import { BibleDecoder } from './BibleDecoder';

interface DecoderProps {
  mode: AppMode;
}

export const SimulationDecoder: React.FC<DecoderProps> = ({ mode }) => {
  const [activeKural, setActiveKural] = useState<Kural>(KURALS_DB[391]);

  return (
    <section className={`py-32 px-4 relative overflow-hidden transition-colors duration-700 ${mode === 'scholar' ? 'bg-charcoal' : 'bg-indigo-950'}`} id="decoder">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-sm font-bold tracking-[0.3em] uppercase mb-4 ${mode === 'scholar' ? 'text-gold' : 'text-cyan-400'}`}>
            {mode === 'scholar' ? 'Interactive System' : 'Superpower Selector'}
          </h2>
          <h3 className={`text-4xl md:text-5xl font-serif ${mode === 'scholar' ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300'}`}>
             {mode === 'scholar' ? (
                <>The Simulation <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">Decoder</span></>
             ) : (
                "Find Your Answer"
             )}
          </h3>
        </div>

        {/* Search Interface */}
        <ConsciousnessSearch mode={mode} onSelectKural={setActiveKural} />

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Controls (Hidden if search is primary, but kept for browsing) */}
          <div className="hidden lg:block lg:col-span-4 space-y-3">
             <h4 className={`text-xs font-bold uppercase mb-4 pl-2 ${mode === 'scholar' ? 'text-gray-500' : 'text-indigo-400'}`}>Common Glitches</h4>
            {MODERN_PROBLEMS.map((problem) => (
              <button
                key={problem.id}
                onClick={() => setActiveKural(KURALS_DB[problem.kuralId])}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 border ${
                   activeKural.number === KURALS_DB[problem.kuralId].number
                    ? (mode === 'scholar' 
                        ? 'bg-gold/10 border-gold text-white shadow-[0_0_15px_rgba(255,215,0,0.1)]' 
                        : 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.2)]')
                    : (mode === 'scholar' 
                        ? 'bg-charcoal-light border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white'
                        : 'bg-indigo-900/40 border-indigo-500/30 text-indigo-300 hover:bg-indigo-800/60 hover:text-white')
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={activeKural.number === KURALS_DB[problem.kuralId].number ? (mode === 'scholar' ? 'text-gold' : 'text-cyan-400') : 'opacity-50'}>
                    {problem.icon}
                  </span>
                  <span className="font-sans font-medium">{problem.label}</span>
                </div>
                {activeKural.number === KURALS_DB[problem.kuralId].number && <ChevronRight size={16} className={mode === 'scholar' ? 'text-gold' : 'text-cyan-400'} />}
              </button>
            ))}
          </div>

          {/* Display Unit */}
          <div className="lg:col-span-8">
            <div className={`h-full rounded-2xl p-8 md:p-12 border relative flex flex-col justify-center min-h-[500px] transition-all duration-500 ${
               mode === 'scholar' 
                 ? 'glass-panel border-gray-700' 
                 : 'bg-black/30 backdrop-blur-xl border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.1)]'
            }`}>
              
              <div className="absolute top-6 right-6 flex items-center gap-2 text-xs font-mono">
                <div className={`w-2 h-2 rounded-full animate-pulse ${mode === 'scholar' ? 'bg-green-500' : 'bg-cyan-400'}`}></div>
                <span className={mode === 'scholar' ? 'text-gray-500' : 'text-cyan-500/70'}>SYSTEM ACTIVE</span>
              </div>

              <div className="mb-6 animate-fadeIn">
                 <span className={`text-xs font-bold tracking-widest uppercase mb-2 block ${mode === 'scholar' ? 'text-saffron' : 'text-cyan-400'}`}>
                   {mode === 'scholar' ? `Solution Context: ${activeKural.context}` : "Mission Objective"}
                 </span>
                 <h4 className={`text-6xl font-bold absolute top-10 right-10 opacity-10 select-none ${mode === 'scholar' ? 'text-gray-800' : 'text-cyan-200'}`}>
                   {activeKural.number}
                 </h4>
              </div>

              <div className="space-y-8">
                <p className="text-2xl md:text-3xl font-tamil leading-relaxed text-white drop-shadow-md">
                  {activeKural.tamil}
                </p>
                
                {/* Mode Specific Explanation */}
                <div className={`p-6 rounded-lg border-l-4 transition-colors ${
                   mode === 'scholar' ? 'bg-black/40 border-gold' : 'bg-indigo-900/40 border-purple-500'
                }`}>
                  <h5 className={`text-sm font-bold mb-2 flex items-center gap-2 ${mode === 'scholar' ? 'text-gold' : 'text-purple-300'}`}>
                    {mode === 'scholar' ? <Unlock size={14} /> : <ShieldCheck size={16} />} 
                    {mode === 'scholar' ? 'DECODED LOGIC' : 'HERO LESSON'}
                  </h5>
                  <p className={`font-sans leading-relaxed ${mode === 'scholar' ? 'text-gray-300' : 'text-indigo-100 text-lg'}`}>
                    {mode === 'scholar' ? activeKural.explanation : activeKural.kidExplanation}
                  </p>
                </div>

                {/* Conditional Rendering: BibleDecoder for Scholars, UniversalTruths for Heroes */}
                {mode === 'scholar' ? (
                    <BibleDecoder kural={activeKural} />
                ) : (
                    <UniversalTruths kural={activeKural} mode={mode} />
                )}

                <div className="pt-4 border-t border-gray-700/50 flex justify-between items-center">
                    <span className="text-gray-500 text-xs font-mono uppercase tracking-wider">Kural #{activeKural.number}</span>
                    <a 
                        href={activeKural.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-transparent pb-1 transition-colors ${
                           mode === 'scholar' ? 'text-gold hover:text-white hover:border-gold' : 'text-cyan-400 hover:text-cyan-100 hover:border-cyan-400'
                        }`}
                    >
                        Verify Source Code <ExternalLink size={12} />
                    </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
