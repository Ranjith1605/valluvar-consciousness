import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MODERN_PROBLEMS, KURALS_DB } from '../constants';
import { Kural, AppMode } from '../types';
import { ChevronRight, Unlock, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { ConsciousnessSearch } from './ConsciousnessSearch';
import { UniversalTruths } from './UniversalTruths';
import { BibleDecoder } from './BibleDecoder';

interface DecoderProps {
  mode: AppMode;
}

export const SimulationDecoder: React.FC<DecoderProps> = ({ mode }) => {
  const [activeKural, setActiveKural] = useState<Kural>(KURALS_DB[391]);
  const navigate = useNavigate();

  const handleEnterPortal = () => {
    navigate(`/kural/${activeKural.number}`);
  };

  return (
    <section className={`py-32 px-4 relative overflow-hidden transition-colors duration-700 ${mode === 'scholar' ? 'bg-charcoal' : 'bg-indigo-950'}`} id="decoder">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-sm font-bold tracking-[0.3em] uppercase mb-4 ${mode === 'scholar' ? 'text-gold' : 'text-cyan-400'}`}
          >
            {mode === 'scholar' ? 'Interactive System' : 'Superpower Selector'}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-serif ${mode === 'scholar' ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300'}`}
          >
            {mode === 'scholar' ? (
              <>The Simulation <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">Decoder</span></>
            ) : (
              "Find Your Answer"
            )}
          </motion.h3>
        </div>

        {/* Search Interface */}
        <ConsciousnessSearch mode={mode} onSelectKural={setActiveKural} />

        <div className="grid lg:grid-cols-12 gap-8">

          {/* Controls */}
          <div className="hidden lg:block lg:col-span-4 space-y-3">
            <h4 className={`text-xs font-bold uppercase mb-4 pl-2 ${mode === 'scholar' ? 'text-gray-500' : 'text-indigo-400'}`}>Common Glitches</h4>
            {MODERN_PROBLEMS.map((problem) => (
              <button
                key={problem.id}
                onClick={() => setActiveKural(KURALS_DB[problem.kuralId])}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 border ${activeKural.number === KURALS_DB[problem.kuralId].number
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
            <motion.div
              layoutId={`kural-${activeKural.number}`}
              className={`h-full rounded-2xl p-8 md:p-12 border relative flex flex-col justify-center min-h-[500px] transition-all duration-500 ${mode === 'scholar'
                  ? 'glass-panel border-gray-700 bg-charcoal-light/30'
                  : 'bg-black/30 backdrop-blur-xl border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.1)]'
                }`}>

              <div className="absolute top-6 right-6 flex items-center gap-2 text-xs font-mono">
                <div className={`w-2 h-2 rounded-full animate-pulse ${mode === 'scholar' ? 'bg-green-500' : 'bg-cyan-400'}`}></div>
                <span className={mode === 'scholar' ? 'text-gray-500' : 'text-cyan-500/70'}>PREVIEW_MODE</span>
              </div>

              <div className="mb-6">
                <span className={`text-xs font-bold tracking-widest uppercase mb-2 block ${mode === 'scholar' ? 'text-saffron' : 'text-cyan-400'}`}>
                  {mode === 'scholar' ? `Context: ${activeKural.context}` : "Mission Objective"}
                </span>
              </div>

              <div className="space-y-8 cursor-pointer group" onClick={handleEnterPortal}>
                <p className="text-2xl md:text-3xl font-tamil leading-relaxed text-white drop-shadow-md group-hover:text-gold transition-colors">
                  {activeKural.tamil}
                </p>

                <div className={`p-6 rounded-lg border-l-4 transition-all group-hover:translate-x-2 ${mode === 'scholar' ? 'bg-black/40 border-gold' : 'bg-indigo-900/40 border-purple-500'
                  }`}>
                  <h5 className={`text-sm font-bold mb-2 flex items-center justify-between ${mode === 'scholar' ? 'text-gold' : 'text-purple-300'}`}>
                    <span className="flex items-center gap-2">
                      {mode === 'scholar' ? <Unlock size={14} /> : <ShieldCheck size={16} />}
                      {mode === 'scholar' ? 'DECODED LOGIC' : 'HERO LESSON'}
                    </span>
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h5>
                  <p className={`font-sans leading-relaxed line-clamp-2 ${mode === 'scholar' ? 'text-gray-300' : 'text-indigo-100 text-lg'}`}>
                    {mode === 'scholar' ? activeKural.explanation : activeKural.kidExplanation}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-700/50 flex justify-between items-center">
                  <span className="text-gray-500 text-xs font-mono uppercase tracking-wider">Kural #{activeKural.number}</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleEnterPortal(); }}
                    className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-transparent pb-1 transition-all ${mode === 'scholar' ? 'text-gold hover:text-white hover:border-gold' : 'text-cyan-400 hover:text-cyan-100 hover:border-cyan-400'
                      }`}
                  >
                    Enter Detailed Portal <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
