import React from 'react';
import { Kural, ModernProblem } from './types';
import { Cpu, ShieldAlert, BadgeDollarSign, Users, Zap, Activity } from 'lucide-react';

export const HERO_KURAL: Kural = {
  number: 391,
  tamil: "கற்க கசடறக் கற்பவை கற்றபின்\nநிற்க அதற்குத் தக.",
  english: "Let a man learn thoroughly whatever he may learn, and let his conduct be worthy of his learning.",
  explanation: "Learning without action is the root of Human Slavery. True education is not data accumulation; it is the software update for your character.",
  kidExplanation: "Learning is like collecting superpowers. But they only work if you USE them to do good things!",
  context: "Foundational Wisdom",
  bibleVerse: {
    verse: "James 1:22",
    text: "Do not merely listen to the word, and so deceive yourselves. Do what it says."
  },
  unSdg: "SDG 4: Quality Education",
  url: "https://thirukkural.io/chapters/40/kurals/391",
  keywords: ["learn", "study", "school", "action", "lazy", "knowledge", "education"]
};

export const KURALS_DB: Record<number, Kural> = {
  391: HERO_KURAL,
  // --- TRUTH & INFORMATION ---
  423: {
    number: 423,
    tamil: "எப்பொருள் யார்யார்வாய்க் கேட்பினும் அப்பொருள்\nமெய்ப்பொருள் காண்ப தறிவு.",
    english: "To discern the truth in everything, by whomsoever spoken, is true wisdom.",
    explanation: "In an age of Fake News and Information Overload, Valluvar gives the algorithm for Truth: Do not trust the speaker, trust the logic. Verify the source code of reality.",
    kidExplanation: "Don't believe everything you hear! Use your own mind to find out what is true, like a detective.",
    context: "Information Overload",
    bibleVerse: {
      verse: "1 Thessalonians 5:21",
      text: "Test them all; hold on to what is good."
    },
    unSdg: "SDG 16: Peace, Justice and Strong Institutions",
    url: "https://thirukkural.io/chapters/43/kurals/423",
    keywords: ["truth", "fake news", "lies", "confusion", "gossip", "media", "internet"]
  },
  // --- ETHICS & VIRTUE ---
  32: { 
     number: 32,
     tamil: "அறத்தினூஉங்கு ஆக்கமும் இல்லை அதனை\nமறத்தலின் ஊங்கில்லை கேடு.",
     english: "There is no greater gain than virtue, and no greater loss than to forget it.",
     explanation: "AI without Ethics is a weapon. Intelligence without Compassion is a virus. Valluvar states that the only sustainable optimization metric for any system is 'Aram' (Righteousness).",
     kidExplanation: "Being good is the biggest treasure you can have. Forgetting to be kind is the biggest mistake.",
     context: "AI Ethics",
     bibleVerse: {
       verse: "Matthew 16:26",
       text: "What good will it do for someone to gain the whole world, yet forfeit their soul?"
     },
     unSdg: "SDG 10: Reduced Inequalities",
     url: "https://thirukkural.io/chapters/4/kurals/32",
     keywords: ["good", "bad", "kindness", "ethics", "robot", "ai", "virtue", "moral"]
  },
  // --- ANGER ---
  305: {
    number: 305,
    tamil: "தன்னைத்தான் காக்கின் சினங்காக்க காவாக்கால்\nதன்னையே கொல்லுஞ் சினம்.",
    english: "If a man would guard himself, let him guard against anger; if he does not guard it, anger will kill him.",
    explanation: "Anger is a self-destruct sequence. It does not punish the enemy; it burns the vessel that holds it. Emotional regulation is the ultimate firewall.",
    kidExplanation: "Being angry is like holding a hot coal to throw at someone else. You are the one who gets burned first!",
    context: "Emotional Intelligence",
    bibleVerse: {
      verse: "Ecclesiastes 7:9",
      text: "Do not be quickly provoked in your spirit, for anger resides in the lap of fools."
    },
    unSdg: "SDG 3: Good Health and Well-being",
    url: "https://thirukkural.io/chapters/31/kurals/305",
    keywords: ["anger", "angry", "mad", "furious", "rage", "control", "temper"]
  },
  // --- FORGIVENESS ---
  151: {
    number: 151,
    tamil: "அகழ்வாரைத் தாங்கும் நிலம்போலத் தம்மை\nஇகழ்வார்ப் பொறுத்தல் தலை.",
    english: "To bear with those who revile us, just as the earth bears up those who dig it, is the first of virtues.",
    explanation: "The Earth does not fight the shovel; it supports the one digging. True power is not reaction, but radical endurance and forgiveness.",
    kidExplanation: "If someone is mean to you, be like the Earth. Even when people dig holes in it, it still gives them flowers.",
    context: "Conflict Resolution",
    bibleVerse: {
      verse: "Luke 6:29",
      text: "If someone slaps you on one cheek, turn to them the other also."
    },
    unSdg: "SDG 16: Peace and Justice",
    url: "https://thirukkural.io/chapters/16/kurals/151",
    keywords: ["forgive", "bully", "mean", "patience", "tolerance", "fight"]
  },
  // --- MONEY & GREED ---
  478: {
    number: 478,
    tamil: "ஆகாறு அளவிட்டிதாயினும் கேடில்லை\nபோகாறு அகலாக் கடை.",
    english: "Even if the inflow is small, there is no sorrow if the outflow does not exceed it.",
    explanation: "Modern capitalism pushes debt slavery. The Universal Code implies: Financial Freedom is not about how much you make, but the mathematical ratio of Input vs. Output/Desire.",
    kidExplanation: "It's okay if you have a small piggy bank. Just don't spend more candies than you have!",
    context: "Financial Slavery",
    bibleVerse: {
      verse: "Hebrews 13:5",
      text: "Keep your lives free from the love of money and be content with what you have."
    },
    unSdg: "SDG 1: No Poverty",
    url: "https://thirukkural.io/chapters/48/kurals/478",
    keywords: ["money", "rich", "poor", "spend", "debt", "shopping", "finance", "greed"]
  },
  // --- EQUALITY ---
  972: {
    number: 972,
    tamil: "பிறப்பொக்கும் எல்லா உயிர்க்கும் சிறப்பொவ்வா\nசெய்தொழில் வேற்றுமை யான்.",
    english: "All beings are equal by birth; but their work differs in its specific nature.",
    explanation: "The ultimate decoder for Casteism and Racism. Valluvar declared 2000 years ago: Your source code is identical. Only your output (actions) defines your value.",
    kidExplanation: "Everyone is born exactly the same. It doesn't matter where you come from, only what you DO matters.",
    context: "Casteism & Inequality",
    bibleVerse: {
      verse: "Galatians 3:28",
      text: "There is neither Jew nor Gentile, neither slave nor free... for you are all one."
    },
    unSdg: "SDG 10: Reduced Inequalities",
    url: "https://thirukkural.io/chapters/98/kurals/972",
    keywords: ["racism", "bully", "equal", "fair", "friends", "caste", "discrimination"]
  },
  // --- SELF-CONTROL ---
  125: {
     number: 125,
     tamil: "ஒருமையுள் ஆமைபோல் ஐந்தடக்கல் ஆற்றின்\nஎழுமையும் ஏமாப் புடைத்து.",
     english: "Like a tortoise withdrawing five senses, if one controls them in one birth, it guards for seven.",
     explanation: "The antidote to the Dopamine Cartel. Mastery over the senses is not repression; it is focusing energy like a laser beam.",
     kidExplanation: "Be like a ninja tortoise! When there are too many distractions, pull your focus inside and stay calm.",
     context: "Dopamine Addiction",
     bibleVerse: {
       verse: "Proverbs 25:28",
       text: "Like a city whose walls are broken through is a person who lacks self-control."
     },
     unSdg: "SDG 3: Good Health and Well-being",
     url: "https://thirukkural.io/chapters/13/kurals/125",
     keywords: ["focus", "distracted", "phone", "game", "control", "addiction", "social media"]
  },
  // --- HARD WORK & LAZINESS ---
  616: {
    number: 616,
    tamil: "முயற்சி திருவினை ஆக்கும் முயற்றின்மை\nஇன்மை புகுத்தி விடும்.",
    english: "Effort brings fortune; absence of effort brings poverty.",
    explanation: "The solution to 'Manifestation' delusions. The Universe does not respond to your wishes; it responds to your Kinetic Energy (Action).",
    kidExplanation: "Wishing doesn't make things happen. Doing things makes them happen! Hard work is magic.",
    context: "Passive 'Manifestation'",
    bibleVerse: {
       verse: "Proverbs 14:23",
       text: "All hard work brings a profit, but mere talk leads only to poverty."
    },
    unSdg: "SDG 8: Decent Work and Economic Growth",
    url: "https://thirukkural.io/chapters/62/kurals/616",
    keywords: ["lazy", "work", "dream", "wish", "hard", "success", "fail", "procrastination"]
  },
  // --- WORDS & SPEECH ---
  100: {
    number: 100,
    tamil: "இனிய உளவாக இன்னாத கூறல்\nகனிஇருப்பக் காய்கவர்ந் தற்று.",
    english: "To speak harsh words when sweet ones serve is like eating unripe fruit when the ripe is at hand.",
    explanation: "Choosing aggression over diplomacy is a cognitive error. Why choose pain (unripe fruit) when harmony (ripe fruit) is available? It is inefficient and self-harming.",
    kidExplanation: "Saying mean words when you can say nice words is like eating a sour lemon when you have a sweet mango right there!",
    context: "Communication",
    bibleVerse: {
      verse: "Proverbs 15:1",
      text: "A gentle answer turns away wrath, but a harsh word stirs up anger."
    },
    unSdg: "SDG 16: Peace and Justice",
    url: "https://thirukkural.io/chapters/10/kurals/100",
    keywords: ["words", "mean", "yell", "shout", "talk", "speak", "rude", "polite"]
  },
  // --- HEALTH ---
  942: {
    number: 942,
    tamil: "மருந்தென வேண்டாவாம் யாக்கைக்கு அருந்தியது\nஅற்றது போற்றி உணின்.",
    english: "No medicine is necessary for the body if one eats only after ensuring that what has been eaten is digested.",
    explanation: "The first principle of Bio-hacking. 90% of diseases are metabolic. Intermittent fasting and conscious eating are the oldest and most effective medicines.",
    kidExplanation: "You don't need medicine if you only eat when your tummy is truly ready. Don't eat just because you are bored!",
    context: "Bio-hacking & Health",
    bibleVerse: {
      verse: "1 Corinthians 6:19",
      text: "Do you not know that your bodies are temples of the Holy Spirit?"
    },
    unSdg: "SDG 3: Good Health and Well-being",
    url: "https://thirukkural.io/chapters/95/kurals/942",
    keywords: ["health", "sick", "food", "diet", "body", "eat", "medicine", "fit"]
  },
  // --- JEALOUSY ---
  166: {
    number: 166,
    tamil: "அழுக்காறு எனஒரு பாவி திருச்செற்றுத்\nதீயுழி உய்த்து விடும்.",
    english: "Envy is a sinner that destroys wealth and drives one into the pit of fire.",
    explanation: "Jealousy is an algorithm that deletes your own resources while monitoring someone else's. It destroys your own peace before it touches the other person.",
    kidExplanation: "Being jealous is like setting your own house on fire because your neighbor bought a new toy.",
    context: "Mental Health",
    bibleVerse: {
      verse: "Proverbs 14:30",
      text: "A heart at peace gives life to the body, but envy rots the bones."
    },
    unSdg: "SDG 3: Good Health and Well-being",
    url: "https://thirukkural.io/chapters/17/kurals/166",
    keywords: ["jealous", "envy", "hate", "friend", "compare", "others"]
  },
  // --- GRATITUDE ---
  102: {
    number: 102,
    tamil: "காலத்தி னாற்செய்த நன்றி சிறிதெனினும்\nஞாலத்தின் மாணப் பெரிது.",
    english: "A favor conferred in the time of need, though it be small, is larger than the world.",
    explanation: "Value is not absolute; it is relative to timing. A small help during a crisis is mathematically infinite in value.",
    kidExplanation: "If you help someone exactly when they need it, that little help is bigger than the whole Earth!",
    context: "Relationships",
    bibleVerse: {
      verse: "Galatians 6:2",
      text: "Carry each other’s burdens, and in this way you will fulfill the law of Christ."
    },
    unSdg: "SDG 17: Partnerships for the Goals",
    url: "https://thirukkural.io/chapters/11/kurals/102",
    keywords: ["help", "thanks", "gratitude", "friend", "need", "kind"]
  },
  // --- ANXIETY / WORRY ---
  622: {
    number: 622,
    tamil: "இடுக்கண் வருங்கால் நகுக அதனை\nஅடுத்தூர்வ தஃதொப்ப தில்.",
    english: "If troubles come, laugh; there is nothing like that to conquer sorrow.",
    explanation: "The ultimate stoic hack. When the system crashes (life problems), do not panic. reboot with a smile. It confuses the enemy (misfortune) and resets your brain.",
    kidExplanation: "When bad things happen, try to smile or laugh. It makes the scary monsters go away!",
    context: "Mental Resilience",
    bibleVerse: {
      verse: "James 1:2",
      text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds."
    },
    unSdg: "SDG 3: Good Health and Well-being",
    url: "https://thirukkural.io/chapters/63/kurals/622",
    keywords: ["sad", "worry", "anxiety", "problem", "stress", "cry", "fear", "trouble"]
  },
   // --- LOVE ---
  1101: {
    number: 1101,
    tamil: "கண்டார் உயிருண்ணும் தோற்றத்தால் பெண்டகைப்\nபேதைக்கு அமர்த்தன கண்.",
    english: "The pleasure of love comprises all the five senses: sight, hearing, taste, smell, and touch.",
    explanation: "Love is the only experience that activates the full bandwidth of human consciousness simultaneously. It is the highest frequency of existence.",
    kidExplanation: "Love is the best feeling in the world. It makes everything look, sound, and feel better!",
    context: "Universal Love",
    bibleVerse: {
      verse: "1 Corinthians 13:13",
      text: "And now these three remain: faith, hope and love. But the greatest of these is love."
    },
    unSdg: "SDG 5: Gender Equality",
    url: "https://thirukkural.io/chapters/111/kurals/1101",
    keywords: ["love", "heart", "marriage", "crush", "romance", "beauty"]
  }
};

// Kept for backward compatibility if needed, but we are moving to Search
export const MODERN_PROBLEMS: ModernProblem[] = [
  { id: 'info', label: 'Information Overload', icon: <Cpu className="w-5 h-5" />, kuralId: 423 },
  { id: 'ai', label: 'AI & Ethics', icon: <ShieldAlert className="w-5 h-5" />, kuralId: 32 },
  { id: 'money', label: 'Financial Slavery', icon: <BadgeDollarSign className="w-5 h-5" />, kuralId: 478 },
  { id: 'caste', label: 'Caste & Inequality', icon: <Users className="w-5 h-5" />, kuralId: 972 },
  { id: 'ego', label: 'Dopamine Addiction', icon: <Zap className="w-5 h-5" />, kuralId: 125 },
  { id: 'action', label: 'Lazy "Manifestation"', icon: <Activity className="w-5 h-5" />, kuralId: 616 },
];