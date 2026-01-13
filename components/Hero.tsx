import React, { useEffect, useState, useRef } from 'react';
import { HERO_KURAL } from '../constants';
import { ArrowDown, ExternalLink, Volume2, Sparkles, StopCircle } from 'lucide-react';
import { AppMode } from '../types';

interface HeroProps {
  mode: AppMode;
}

import { motion } from 'framer-motion';

export const Hero: React.FC<HeroProps> = ({ mode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const stopAudio = () => {
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const playAudio = () => {
    setIsPlaying(true);
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioContextRef.current = ctx;
      const oscLeft = ctx.createOscillator();
      const oscRight = ctx.createOscillator();
      const gainNode = ctx.createGain();
      const merger = ctx.createChannelMerger(2);
      oscLeft.frequency.value = 200;
      oscRight.frequency.value = 204;
      oscLeft.connect(merger, 0, 0);
      oscRight.connect(merger, 0, 1);
      merger.connect(gainNode);
      gainNode.connect(ctx.destination);
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 2);
      oscLeft.start();
      oscRight.start();
      window.speechSynthesis.cancel();
      const speak = (text: string, lang: string, next?: () => void) => {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = lang;
        u.rate = 0.8;
        u.pitch = 0.9;
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.lang.startsWith(lang.split('-')[0]));
        if (preferredVoice) u.voice = preferredVoice;
        u.onend = () => { if (next) next(); };
        window.speechSynthesis.speak(u);
      };

      speak(HERO_KURAL.tamil, 'ta-IN', () => {
        setTimeout(() => {
          if (audioContextRef.current) {
            speak(HERO_KURAL.english, 'en-US', () => {
              if (audioContextRef.current && gainNode) {
                gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 2);
                setTimeout(stopAudio, 2000);
              }
            });
          }
        }, 800);
      });
    } catch (e) {
      console.error("Audio initialization failed:", e);
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => isPlaying ? stopAudio() : playAudio();
  const tamilLines = HERO_KURAL.tamil.split('\n');

  return (
    <section className={`relative min-h-[90vh] flex flex-col justify-center items-center text-center p-6 overflow-hidden transition-colors duration-1000 ${mode === 'hero' ? 'bg-indigo-950' : 'bg-charcoal'}`}>

      {/* Background Ambience */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        {mode === 'scholar' ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-saffron/10 rounded-full blur-[120px]"></div>
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[100px]"></div>
        )}
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`mb-8 border px-6 py-2 rounded-full backdrop-blur-md flex items-center gap-2 ${mode === 'scholar' ? 'border-gold/30 bg-gold/5' : 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
            }`}
        >
          {mode === 'scholar' ? <div className="w-2 h-2 rounded-full bg-gold animate-pulse" /> : <Sparkles size={16} className="text-cyan-400" />}
          <span className={`text-xs uppercase tracking-[0.3em] font-bold ${mode === 'scholar' ? 'text-gold' : 'text-cyan-300'}`}>
            {mode === 'scholar' ? 'The Universal Code' : 'Secret Power Code'}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className={`text-7xl md:text-9xl font-bold mb-6 drop-shadow-2xl transition-all duration-700 ${mode === 'scholar' ? 'font-tamil text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500' : 'font-sans text-cyan-400'}`}
        >
          391
        </motion.h1>

        <div className="space-y-6 md:space-y-8">
          <div className={`text-3xl md:text-5xl font-tamil leading-relaxed ${mode === 'scholar' ? 'text-gold gold-glow' : 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]'}`}>
            {tamilLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.3), duration: 0.8 }}
              >
                {line}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 1.2, duration: 1 }}
            className={`h-px mx-auto my-6 ${mode === 'scholar' ? 'bg-gold/50' : 'bg-cyan-500/50'}`}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className={`text-lg md:text-2xl transition-colors duration-500 max-w-2xl mx-auto ${mode === 'scholar' ? 'font-light text-gray-300 font-sans tracking-wide' : 'font-bold text-cyan-100 font-sans'}`}
          >
            "{mode === 'hero' ? "Learning is like collecting superpowers. But they only work if you USE them!" : HERO_KURAL.english}"
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <div className="flex gap-4">
            <button
              onClick={toggleAudio}
              className={`flex items-center gap-2 px-8 py-3 rounded-full border transition-all transform hover:scale-105 ${mode === 'scholar'
                ? 'border-gold/30 text-gold hover:bg-gold/10'
                : 'border-cyan-400 text-cyan-400 bg-cyan-950 hover:bg-cyan-900 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]'
                }`}
            >
              {isPlaying ? <StopCircle size={18} className="animate-pulse" /> : <Volume2 size={18} />}
              <span className="text-sm uppercase tracking-widest font-bold">
                {isPlaying ? 'Stop Audio' : 'Listen with Spatial Beats'}
              </span>
            </button>

            <a
              href={HERO_KURAL.url}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all ${mode === 'scholar' ? 'text-gray-400 hover:text-white' : 'text-cyan-200 hover:text-white'}`}
            >
              <span className="text-xs uppercase tracking-widest">Source Code</span> <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className={`mt-16 max-w-xl mx-auto font-sans text-sm md:text-base leading-relaxed p-6 rounded-2xl border ${mode === 'scholar' ? 'text-gray-400 border-white/5 bg-white/5' : 'text-indigo-200 border-cyan-500/10 bg-black/20'
            }`}
        >
          <strong className={`block mb-2 text-lg uppercase tracking-tighter ${mode === 'scholar' ? 'text-white' : 'text-cyan-300'}`}>
            {mode === 'scholar' ? "THE ROOT OF SLAVERY" : "YOUR MISSION"}
          </strong>
          {mode === 'scholar'
            ? "Learning without Action is the error code of modern humanity. True education is the software update for your character."
            : "Don't just read books. Do great things! You are the hero of this story."}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 3, duration: 2, repeat: Infinity }}
        className={`absolute bottom-8 transition-colors ${mode === 'scholar' ? 'text-gray-600' : 'text-cyan-500'}`}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};
