
import React, { useState } from 'react';
import { getProjectConsultation } from '../services/geminiService';
import { ConsultationResponse } from '../types';

const ConsultationWidget: React.FC = () => {
  const [problem, setProblem] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ConsultationResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem.trim()) return;
    
    setLoading(true);
    const consultation = await getProjectConsultation(problem);
    setResult(consultation);
    setLoading(false);
  };

  return (
    <div className="bg-black/30 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/10 shadow-[0_0_50px_rgba(249,115,22,0.1)] relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <h3 className="text-white font-bold mb-6 flex items-center gap-2">
        <span className="material-icons-round text-primary animate-pulse">auto_awesome</span>
        AI Architecture Advisor
      </h3>
      
      {!result ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Describe your business challenge..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-white placeholder-slate-500 focus:ring-primary/40 focus:border-primary transition-all resize-none outline-none"
            rows={4}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Initialize Analysis
                <span className="material-icons-round text-sm">rocket_launch</span>
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="space-y-4 animate-in fade-in duration-500">
          <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
            <p className="text-slate-400 text-xs italic mb-3">"{problem}"</p>
            <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Recommendation:</h4>
            <p className="text-white text-sm leading-relaxed">{result.recommendation}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <span className="text-[10px] text-slate-500 block mb-1 uppercase font-bold tracking-widest">Complexity</span>
              <span className="text-white text-xs font-bold">{result.estimatedEffort}</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <span className="text-[10px] text-slate-500 block mb-1 uppercase font-bold tracking-widest">Next Protocols</span>
              <ul className="text-[10px] text-slate-300 space-y-1">
                {result.nextSteps.map((s, i) => <li key={i} className="flex gap-1"><span className="text-primary">•</span> {s}</li>)}
              </ul>
            </div>
          </div>
          
          <button 
            onClick={() => {setResult(null); setProblem('');}}
            className="w-full text-center text-primary text-xs font-bold hover:text-white transition-colors"
          >
            Run New Diagnostic
          </button>
        </div>
      )}
    </div>
  );
};

export default ConsultationWidget;
