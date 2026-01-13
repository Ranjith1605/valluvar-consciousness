import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { KURALS_DB } from '../constants';
import { Kural, AppMode } from '../types';

interface SearchProps {
  mode: AppMode;
  onSelectKural: (kural: Kural) => void;
}

const MOOD_CHIPS = [
  { label: "Angry", emoji: "😡", keywords: ["angry", "anger", "mad"] },
  { label: "Anxious", emoji: "😰", keywords: ["worry", "anxiety", "fear"] },
  { label: "Lazy", emoji: "😴", keywords: ["lazy", "procrastination", "work"] },
  { label: "Lonely", emoji: "😔", keywords: ["lonely", "friend", "love"] },
  { label: "Confused", emoji: "🤔", keywords: ["truth", "decision", "confusion"] },
  { label: "Greedy", emoji: "🤑", keywords: ["money", "greed", "rich"] },
  { label: "Hurt", emoji: "💔", keywords: ["forgive", "bully", "mean"] },
  { label: "Sick", emoji: "🤒", keywords: ["health", "sick", "body"] },
];

import { useNavigate } from 'react-router-dom';

export const ConsciousnessSearch: React.FC<SearchProps> = ({ mode, onSelectKural }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Kural[]>([]);
  const navigate = useNavigate();

  const runSearch = (val: string) => {
    const lowerVal = val.toLowerCase();
    if (lowerVal.length > 2) {
      const matches = Object.values(KURALS_DB).filter(kural =>
        kural.keywords.some(k => k.includes(lowerVal)) ||
        kural.explanation.toLowerCase().includes(lowerVal) ||
        kural.kidExplanation.toLowerCase().includes(lowerVal) ||
        kural.english.toLowerCase().includes(lowerVal)
      );
      setResults(matches);
    } else {
      setResults([]);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    runSearch(val);
  };

  const handleChipClick = (keywords: string[]) => {
    // Pick the first keyword to simulate search
    const word = keywords[0];
    setQuery(word);
    runSearch(word);
  };

  const handleSelect = (kural: Kural) => {
    onSelectKural(kural);
    setQuery('');
    setResults([]);
    navigate(`/kural/${kural.number}`);
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative z-20 mb-12">
      {/* Search Bar */}
      <div className={`relative rounded-full overflow-hidden border transition-all duration-300 ${mode === 'scholar'
        ? 'bg-charcoal/80 border-gold/20 focus-within:border-gold/60 shadow-lg'
        : 'bg-indigo-900/80 border-cyan-400/30 focus-within:border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]'
        }`}>
        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          {mode === 'scholar' ? <Search className="text-gray-500 w-5 h-5" /> : <Sparkles className="text-cyan-400 w-5 h-5 animate-pulse" />}
        </div>
        <input
          type="text"
          placeholder={mode === 'scholar' ? "I am feeling... (e.g. anxious, greedy, lost)" : "How are you feeling? (e.g. sad, angry, bored)"}
          className={`w-full bg-transparent py-4 pl-16 pr-6 outline-none font-sans text-lg ${mode === 'scholar' ? 'text-white placeholder-gray-500' : 'text-cyan-50 placeholder-cyan-400/50'
            }`}
          value={query}
          onChange={handleSearch}
        />
      </div>

      {/* Mood Chips (Quick Select) */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {MOOD_CHIPS.map((chip) => (
          <button
            key={chip.label}
            onClick={() => handleChipClick(chip.keywords)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all transform hover:scale-105 ${mode === 'scholar'
              ? 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-gold/50'
              : 'bg-cyan-900/40 border border-cyan-500/30 text-cyan-200 hover:bg-cyan-500 hover:text-indigo-900'
              }`}
          >
            <span className="mr-2">{chip.emoji}</span>
            {chip.label}
          </button>
        ))}
      </div>

      {/* Results Dropdown */}
      {results.length > 0 && (
        <div className={`absolute top-full left-0 w-full mt-4 rounded-2xl overflow-hidden border backdrop-blur-xl p-2 z-50 max-h-[400px] overflow-y-auto ${mode === 'scholar' ? 'bg-charcoal/95 border-gray-700' : 'bg-indigo-950/95 border-cyan-500/30'
          }`}>
          {results.map(kural => (
            <button
              key={kural.number}
              onClick={() => handleSelect(kural)}
              className={`w-full text-left p-4 rounded-xl mb-1 last:mb-0 transition-colors ${mode === 'scholar' ? 'hover:bg-white/10 text-gray-300' : 'hover:bg-cyan-500/20 text-cyan-100'
                }`}
            >
              <div className="flex justify-between items-center">
                <span className={`text-xs font-bold uppercase tracking-wider ${mode === 'scholar' ? 'text-gold' : 'text-cyan-400'}`}>
                  {mode === 'scholar' ? kural.context : "Superpower Code"}
                </span>
                <span className="text-xs opacity-50">#{kural.number}</span>
              </div>
              <p className="mt-1 font-medium truncate">{mode === 'hero' ? kural.kidExplanation : kural.english}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};