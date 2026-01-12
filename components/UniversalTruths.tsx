import React from 'react';
import { Kural, AppMode } from '../types';
import { BookOpen, Globe } from 'lucide-react';

interface UniversalTruthsProps {
  kural: Kural;
  mode: AppMode;
}

export const UniversalTruths: React.FC<UniversalTruthsProps> = ({ kural, mode }) => {
  if (!kural.bibleVerse) return null;

  return (
    <div className={`mt-8 p-6 rounded-xl border transition-all ${
      mode === 'scholar' 
        ? 'bg-gradient-to-r from-gray-900 to-charcoal border-gray-700' 
        : 'bg-indigo-900/50 border-indigo-500/30'
    }`}>
      <h3 className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2 ${
         mode === 'scholar' ? 'text-gray-400' : 'text-indigo-300'
      }`}>
         <Globe size={14} /> {mode === 'scholar' ? 'Universal Connectivity' : 'The Universal Truth'}
      </h3>

      <div className="grid md:grid-cols-2 gap-8 relative">
         {/* Connector Line */}
         <div className={`absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block ${
            mode === 'scholar' ? 'bg-gray-800' : 'bg-indigo-500/20'
         }`}></div>

         {/* Kural Side */}
         <div>
            <span className={`block text-xs mb-2 ${mode === 'scholar' ? 'text-gold' : 'text-cyan-400'}`}>Valluvar (2000 Years Ago)</span>
            <p className={`font-serif italic ${mode === 'scholar' ? 'text-gray-300' : 'text-cyan-100'}`}>"{kural.english}"</p>
         </div>

         {/* Bible Side */}
         <div>
            <span className={`block text-xs mb-2 ${mode === 'scholar' ? 'text-gray-500' : 'text-purple-300'}`}>The Bible ({kural.bibleVerse.verse})</span>
            <p className={`font-serif italic ${mode === 'scholar' ? 'text-gray-400' : 'text-indigo-200'}`}>"{kural.bibleVerse.text}"</p>
         </div>
      </div>
      
      {mode === 'scholar' && kural.unSdg && (
         <div className="mt-6 pt-4 border-t border-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-xs text-gray-500 font-mono">Aligned with UN {kural.unSdg}</span>
         </div>
      )}
    </div>
  );
};
