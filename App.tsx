import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { Narrative } from './components/Narrative';
import { SimulationDecoder } from './components/SimulationDecoder';
import { VisionProBridge } from './components/VisionProBridge';
import { RevolutionCTA } from './components/RevolutionCTA';
import { EthicsSandbox } from './components/EthicsSandbox';
import { KuralPortal } from './components/KuralPortal';
import { AppMode } from './types';
import { ToggleLeft, ToggleRight, GraduationCap, Gamepad2 } from 'lucide-react';

const AppContent: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('scholar');
  const location = useLocation();

  const toggleMode = () => {
    setMode(prev => prev === 'scholar' ? 'hero' : 'scholar');
  };

  return (
    <main className={`min-h-screen transition-colors duration-500 font-sans selection:bg-gold selection:text-charcoal ${mode === 'scholar' ? 'bg-charcoal text-gray-100' : 'bg-indigo-950 text-indigo-50'
      }`}>

      {/* Navigation & Toggle */}
      <nav className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-none">
        <Link to="/" className={`font-serif font-bold text-xl pointer-events-auto cursor-pointer transition-colors ${mode === 'scholar' ? 'text-gold' : 'text-cyan-400'}`}>
          VALLUVAR.IO
        </Link>

        <div className="pointer-events-auto flex items-center gap-4 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <button
            onClick={() => setMode('scholar')}
            className={`flex items-center gap-2 text-xs font-bold uppercase transition-colors ${mode === 'scholar' ? 'text-gold' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <GraduationCap size={16} /> Scholar
          </button>

          <button onClick={toggleMode} className="text-gray-400 hover:text-white transition-colors">
            {mode === 'scholar' ? <ToggleLeft size={32} /> : <ToggleRight size={32} className="text-cyan-400" />}
          </button>

          <button
            onClick={() => setMode('hero')}
            className={`flex items-center gap-2 text-xs font-bold uppercase transition-colors ${mode === 'hero' ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'}`}
          >
            Hero <Gamepad2 size={16} />
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Hero mode={mode} />
                {mode === 'scholar' && <Narrative />}
                <SimulationDecoder mode={mode} />
                {mode === 'hero' && <EthicsSandbox />}
                <VisionProBridge />
                <RevolutionCTA mode={mode} />
              </motion.div>
            } />
            <Route path="/kural/:id" element={<KuralPortal mode={mode} />} />
          </Routes>
        </div>
      </AnimatePresence>

      <footer className={`py-8 text-center text-sm border-t transition-colors ${mode === 'scholar' ? 'text-gray-700 border-gray-900' : 'text-indigo-400 border-indigo-900 bg-indigo-950'
        }`}>
        <p>&copy; 2026 The Valluvar Consciousness Portal. Built on React & Tailwind.</p>
        <p className="mt-2 text-xs">
          Data sourced from <a href="https://thirukkural.io" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors underline">thirukkural.io</a>
        </p>
      </footer>
    </main>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
