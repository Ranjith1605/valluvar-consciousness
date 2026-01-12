import React, { useEffect, useState, useRef } from 'react';
import { HERO_KURAL } from '../constants';
import { ArrowDown, ExternalLink, Volume2, Sparkles, StopCircle } from 'lucide-react';
import { AppMode } from '../types';

interface HeroProps {
  mode: AppMode;
}

export const Hero: React.FC<HeroProps> = ({ mode }) => {
  const [showText, setShowText] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  
  useEffect(() => {
    setShowText(true);
    // Cleanup audio on unmount
    return () => {
      stopAudio();
    };
  }, []);

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
      // 1. Initialize Audio Context for Binaural Beats (Theta Waves ~4Hz)
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioContextRef.current = ctx;

      const oscLeft = ctx.createOscillator();
      const oscRight = ctx.createOscillator();
      const gainNode = ctx.createGain();
      const merger = ctx.createChannelMerger(2); // Stereo

      // Frequency difference of 4Hz creates Theta waves (Meditation/Learning)
      oscLeft.frequency.value = 200; 
      oscRight.frequency.value = 204; 

      // Connect left osc to left channel (0), right osc to right channel (1)
      oscLeft.connect(merger, 0, 0);
      oscRight.connect(merger, 0, 1);

      merger.connect(gainNode);
      gainNode.connect(ctx.destination);

      // Smooth fade in
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 2); // Keep volume low (background)

      oscLeft.start();
      oscRight.start();

      // 2. Text to Speech Logic
      window.speechSynthesis.cancel(); // Clear queue

      const speak = (text: string, lang: string, next?: () => void) => {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = lang;
        u.rate = 0.8; // Slower for meditation
        u.pitch = 0.9; // Deeper voice
        
        // Try to pick a decent voice if available
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.lang.startsWith(lang.split('-')[0]));
        if (preferredVoice) u.voice = preferredVoice;

        u.onend = () => {
          if (next) next();
        };
        
        window.speechSynthesis.speak(u);
      };

      // Play Sequence: Tamil -> Pause -> English -> Fade out
      speak(HERO_KURAL.tamil, 'ta-IN', () => {
        setTimeout(() => {
            if (audioContextRef.current) { // Check if user hasn't stopped it
                 speak(HERO_KURAL.english, 'en-US', () => {
                    // Fade out binaural beats after speech ends
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

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      playAudio();
    }
  };

  // Split Tamil text for animation
  const tamilLines = HERO_KURAL.tamil.split('\n');

  return (
    <section className={`relative min-h-screen flex flex-col justify-center items-center text-center p-6 overflow-hidden transition-colors duration-1000 ${mode === 'hero' ? 'bg-indigo-950' : 'bg-charcoal'}`}>
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        {mode === 'scholar' ? (
          <>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-saffron/5 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-charcoal to-transparent z-10"></div>
          </>
        ) : (
          <>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse"></div>
             <div className="absolute top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          </>
        )}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {mode === 'scholar' ? (
          <div className="mb-8 border border-gold/30 px-4 py-1 rounded-full bg-gold/5 backdrop-blur-sm">
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-bold">The Universal Code</span>
          </div>
        ) : (
          <div className="mb-8 border border-cyan-400 px-6 py-2 rounded-full bg-cyan-500/10 backdrop-blur-sm flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-cyan-300 text-sm font-bold tracking-widest uppercase">Secret Power Code</span>
          </div>
        )}

        <h1 className={`text-7xl md:text-9xl font-bold mb-6 drop-shadow-2xl transition-all duration-700 ${mode === 'scholar' ? 'font-tamil text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500' : 'font-sans text-cyan-400'}`}>
          391
        </h1>
        
        <div className="space-y-6 md:space-y-8 min-h-[200px]">
          {/* Animated Tamil Text */}
          <div className={`text-3xl md:text-5xl font-tamil leading-relaxed transition-all duration-1000 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${mode === 'scholar' ? 'text-gold gold-glow' : 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]'}`}>
            {tamilLines.map((line, i) => (
              <div key={i} style={{ transitionDelay: `${i * 200}ms` }}>{line}</div>
            ))}
          </div>
          
          <div className={`h-px w-24 mx-auto my-6 transition-colors ${mode === 'scholar' ? 'bg-gold/50' : 'bg-cyan-500/50'}`}></div>
          
          <p className={`text-lg md:text-2xl transition-colors duration-500 max-w-2xl mx-auto ${mode === 'scholar' ? 'font-light text-gray-300 font-sans tracking-wide' : 'font-bold text-cyan-100 font-sans'}`}>
            "{mode === 'hero' ? "Learning is like collecting superpowers. But they only work if you USE them!" : HERO_KURAL.english}"
          </p>
        </div>

        <div className="mt-8 flex gap-4">
             <button 
                onClick={toggleAudio}
                className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all ${
                    mode === 'scholar' 
                    ? 'border-gold/30 text-gold hover:bg-gold/10' 
                    : 'border-cyan-400 text-cyan-400 bg-cyan-950 hover:bg-cyan-900 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                }`}
             >
                {isPlaying ? <StopCircle size={16} className="animate-pulse" /> : <Volume2 size={16} />}
                <span className="text-xs uppercase tracking-widest font-bold">
                    {isPlaying ? 'Stop Audio' : 'Listen (Spatial Audio)'}
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

        <div className={`mt-12 max-w-xl mx-auto font-sans text-sm md:text-base leading-relaxed transition-colors ${mode === 'scholar' ? 'text-gray-400' : 'text-indigo-200'}`}>
          <strong className={`block mb-2 text-lg ${mode === 'scholar' ? 'text-white' : 'text-cyan-300'}`}>
            {mode === 'scholar' ? "THE ROOT OF SLAVERY" : "YOUR MISSION"}
          </strong>
          {mode === 'scholar' 
            ? "Learning without Action is the error code of modern humanity. True education is the software update for your character." 
            : "Don't just read books. Do great things! You are the hero of this story."}
        </div>
      </div>

      <div className={`absolute bottom-8 animate-bounce transition-colors ${mode === 'scholar' ? 'text-gray-600' : 'text-cyan-500'}`}>
        <ArrowDown size={24} />
      </div>
    </section>
  );
};
