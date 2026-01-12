import React from 'react';

export type AppMode = 'scholar' | 'hero';

export interface Kural {
  number: number;
  tamil: string;
  english: string;
  explanation: string; // Scholar explanation
  kidExplanation: string; // Hero explanation
  context: string;
  bibleVerse?: {
    verse: string;
    text: string;
  };
  unSdg?: string; // UN Sustainable Development Goal
  url: string;
  keywords: string[]; // For semantic search simulation
}

export interface ModernProblem {
  id: string;
  label: string;
  icon: React.ReactNode;
  kuralId: number;
}
