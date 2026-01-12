import React from 'react';
import { Eye, Layers } from 'lucide-react';

export const VisionProBridge: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black text-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700 shadow-2xl shadow-purple-900/20">
            <Eye className="text-gray-200" size={32} />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">
          Spatial Wisdom
        </h2>
        
        <p className="text-lg text-gray-400 mb-12">
          The future of education is not in textbooks, but in immersive reality. 
          Imagine standing beside Valluvar in a spatial environment, decoding the mathematics of life.
        </p>

        {/* 3D Card Concept */}
        <div className="relative group perspective-1000 mx-auto w-full max-w-md h-64">
          <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-12 bg-gray-900/80 rounded-3xl border border-gray-700 flex flex-col items-center justify-center backdrop-blur-xl">
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-3xl"></div>
             
             <Layers className="text-white mb-4 animate-bounce" size={40} />
             <h3 className="text-2xl font-bold text-white mb-2">The Apple Vision Bridge</h3>
             <p className="text-sm text-gray-500">Coming 2026</p>
             
             <div className="absolute bottom-4 text-xs text-gray-600 font-mono">
                Project: UNIVERSAL_VEDA_OS
             </div>
          </div>
        </div>
        
        <p className="mt-12 text-sm text-gray-500 font-mono">
          "The hardware changes. The software (Consciousness) remains eternal."
        </p>
      </div>
    </section>
  );
};