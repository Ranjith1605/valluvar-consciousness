import React, { useState } from 'react';
import { Star, ThumbsUp } from 'lucide-react';

export const EthicsSandbox: React.FC = () => {
  const [solved, setSolved] = useState(false);

  return (
    <section className="py-24 px-6 bg-indigo-950 relative overflow-hidden border-t border-indigo-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block p-3 rounded-2xl bg-purple-600 mb-6 shadow-lg shadow-purple-500/30">
             <Star className="text-yellow-300 fill-yellow-300" size={32} />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ethics Sandbox</h2>
        <p className="text-indigo-200 mb-12">Drag the right superpower to solve the problem!</p>

        <div className="bg-indigo-900/50 rounded-3xl p-8 border-2 border-dashed border-indigo-500/50 relative">
           {!solved ? (
               <div className="space-y-8">
                   <div className="bg-white/10 p-6 rounded-2xl">
                       <p className="text-xl text-white font-bold mb-2">Problem:</p>
                       <p className="text-indigo-200">"Your friend forgot their lunch. You have extra sandwich. What do you do?"</p>
                   </div>

                   <div className="flex gap-4 justify-center flex-wrap">
                       <button className="bg-red-500/20 hover:bg-red-500/40 border border-red-500/50 p-4 rounded-xl text-white transition-all">
                           Keep it hidden
                       </button>
                       <button 
                         onClick={() => setSolved(true)}
                         className="bg-green-500/20 hover:bg-green-500/40 border border-green-500/50 p-4 rounded-xl text-white transition-all font-bold shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                       >
                           Share it (Kindness)
                       </button>
                   </div>
               </div>
           ) : (
               <div className="animate-bounce">
                   <ThumbsUp className="mx-auto text-green-400 mb-4" size={48} />
                   <h3 className="text-2xl font-bold text-white">Awesome Job!</h3>
                   <p className="text-green-300 mt-2">"Sharing food is the greatest virtue." (Kural 227)</p>
                   <button onClick={() => setSolved(false)} className="mt-6 text-sm text-indigo-400 underline">Play Again</button>
               </div>
           )}
        </div>
      </div>
    </section>
  );
};
