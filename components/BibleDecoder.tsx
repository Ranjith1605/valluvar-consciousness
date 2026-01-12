import React from 'react';
import { Kural } from '../types';
import { Scale } from 'lucide-react';

interface BibleDecoderProps {
  kural: Kural;
}

export const BibleDecoder: React.FC<BibleDecoderProps> = ({ kural }) => {
  if (!kural.bibleVerse) return null;

  return (
    <div className="mt-8 relative group">
      {/* Decorative background elements for 'Decoder' feel */}
      <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-transparent rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      
      <div className="relative p-8 rounded-xl bg-charcoal-light border border-gold/10 backdrop-blur-sm overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
            <div className="p-2 bg-gold/10 rounded-lg">
                <Scale className="text-gold w-5 h-5" />
            </div>
            <div>
                <h3 className="text-sm font-serif font-bold text-gold tracking-widest uppercase">Universal Truth Decoder</h3>
                <p className="text-xs text-gray-500 font-mono mt-1">Cross-Referencing Wisdom Archives...</p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 relative">
             {/* Center Divider/Connector */}
             <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent -translate-x-1/2 justify-center items-center">
                <div className="w-6 h-6 rounded-full bg-charcoal border border-gold/30 flex items-center justify-center z-10">
                    <span className="text-gold text-[10px]">=</span>
                </div>
             </div>

             {/* Valluvar Side */}
             <div className="relative">
                <span className="absolute -left-4 top-0 text-[100px] leading-none opacity-5 font-serif text-white select-none">V</span>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 pl-1">Source Code (Thirukkural)</h4>
                <p className="font-serif text-lg text-gray-200 leading-relaxed italic border-l-2 border-gold/50 pl-4">
                    "{kural.english}"
                </p>
             </div>

             {/* Bible Side */}
             <div className="relative">
                <span className="absolute -left-4 top-0 text-[100px] leading-none opacity-5 font-serif text-white select-none">B</span>
                 <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 pl-1">Parallel Verse ({kural.bibleVerse.verse})</h4>
                 <p className="font-serif text-lg text-gray-300 leading-relaxed italic border-l-2 border-gray-600 pl-4">
                    "{kural.bibleVerse.text}"
                 </p>
             </div>
        </div>
        
        {kural.unSdg && (
            <div className="mt-8 pt-4 border-t border-gray-800 flex justify-end">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    <span className="text-[10px] font-mono text-blue-300 uppercase tracking-wide">Aligned with UN {kural.unSdg}</span>
                </div>
            </div>
        )}

      </div>
    </div>
  );
};
