import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { KURALS_DB } from '../constants';
import { AppMode } from '../types';
import { BibleDecoder } from './BibleDecoder';
import { UniversalTruths } from './UniversalTruths';
import { ArrowLeft, Share2, ExternalLink, Sparkles, BookOpen } from 'lucide-react';

interface KuralPortalProps {
  mode: AppMode;
}

export const KuralPortal: React.FC<KuralPortalProps> = ({ mode }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const kural = KURALS_DB[Number(id)];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!kural) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-charcoal text-white">
        <div className="text-center">
            <h1 className="text-4xl font-serif mb-4 text-gold">Portal Error</h1>
            <p className="mb-8">The requested Kural dimension does not exist.</p>
            <button onClick={() => navigate('/')} className="px-6 py-3 bg-gold text-charcoal font-bold rounded-full">
                Return to Reality
            </button>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen pt-24 pb-12 px-4 transition-colors duration-1000 ${
        mode === 'scholar' ? 'bg-charcoal text-gray-100' : 'bg-indigo-950 text-indigo-50'
      }`}
    >
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] ${
            mode === 'scholar' ? 'bg-gold/10' : 'bg-cyan-500/10'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] ${
            mode === 'scholar' ? 'bg-saffron/10' : 'bg-purple-500/10'
        }`}></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Navigation Bar */}
        <motion.div variants={itemVariants} className="flex justify-between items-center mb-12">
            <button 
                onClick={() => navigate('/')}
                className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gold transition-colors"
            >
                <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-gold/50 transition-colors">
                    <ArrowLeft size={18} />
                </div>
                Return to Portal
            </button>
            <div className="flex gap-4">
                <button className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 transition-colors">
                    <Share2 size={18} />
                </button>
                <a 
                    href={kural.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 transition-colors"
                >
                    <ExternalLink size={18} />
                </a>
            </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Content: Kural & Script */}
            <div className="lg:col-span-12">
                <motion.div variants={itemVariants} className="mb-8">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 border ${
                        mode === 'scholar' ? 'border-gold/30 text-gold' : 'border-cyan-400/30 text-cyan-400'
                    }`}>
                        Logic Context: {kural.context}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-tamil leading-tight mb-8 text-white drop-shadow-2xl">
                        {kural.tamil}
                    </h1>
                    <p className="text-xl md:text-2xl font-serif text-gray-400 italic border-l-4 border-gold/30 pl-6 py-2">
                        "{kural.english}"
                    </p>
                </motion.div>
            </div>

            {/* Right Content: Decoders */}
            <div className="lg:col-span-12 space-y-12">
                
                {/* Modern Explanation Card */}
                <motion.div variants={itemVariants} className={`p-8 md:p-12 rounded-3xl border backdrop-blur-xl relative overflow-hidden ${
                    mode === 'scholar' 
                      ? 'bg-charcoal-light border-gray-800 shadow-2xl' 
                      : 'bg-black/40 border-indigo-500/30 shadow-[0_0_50px_rgba(79,70,229,0.1)]'
                }`}>
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                         <Sparkles size={120} />
                    </div>
                    
                    <div className="relative">
                        <h2 className={`text-xs font-bold uppercase tracking-[0.3em] mb-6 flex items-center gap-2 ${
                            mode === 'scholar' ? 'text-gold' : 'text-cyan-400'
                        }`}>
                            <BookOpen size={16} /> 
                            {mode === 'scholar' ? 'System Interpretation' : 'Hero Manual'}
                        </h2>
                        <p className={`text-xl md:text-2xl leading-relaxed font-sans ${
                            mode === 'scholar' ? 'text-gray-200' : 'text-white font-medium'
                        }`}>
                            {mode === 'scholar' ? kural.explanation : kural.kidExplanation}
                        </p>
                    </div>
                </motion.div>

                {/* Bible Cross-Reference */}
                <motion.div variants={itemVariants}>
                    <div className="mb-6">
                         <h3 className={`text-sm font-bold uppercase tracking-widest flex items-center gap-2 ${
                             mode === 'scholar' ? 'text-saffron' : 'text-purple-400'
                         }`}>
                             The Bible Connection
                         </h3>
                         <div className={`h-px w-20 mt-2 bg-gradient-to-r from-current to-transparent`}></div>
                    </div>
                    <BibleDecoder kural={kural} />
                </motion.div>

                {/* Tags/Keywords */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-8">
                    {kural.keywords.map(word => (
                        <span key={word} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 uppercase tracking-widest">
                            {word}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>

        {/* Footer info */}
        <motion.div variants={itemVariants} className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-600">
            <span>PORTAL_DATA_REF: K#{kural.number}</span>
            <span>SYNCRONICITY_INDEX: 0.992</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
