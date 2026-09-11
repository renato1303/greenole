import React, { useState } from 'react';
import { PHASES_DATA } from '../../data/slidesData';
import { CheckCircle2, ArrowRight, Clock, Target } from 'lucide-react';

export const MacroMethodologySlide: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#123a1d]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f6f4ec]/70">
            Metodologia &amp; Roadmap
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          05 · Três Fases
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f4ec] max-w-3xl leading-[1.05]">
          Três fases, do discovery ao lançamento
        </h2>
        <p className="mt-3 sm:mt-4 font-body text-base sm:text-lg text-[#f6f4ec]/80 max-w-2xl font-normal leading-relaxed">
          Uma esteira lógica e contínua ao longo de 90 dias: construímos a infraestrutura, atraímos os decisores e convertemos no evento.
        </p>
      </div>

      {/* 3 Phase Cards Grid */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {PHASES_DATA.map((phase, idx) => {
          const isSelected = activePhase === idx;
          return (
            <div
              key={phase.id}
              onClick={() => setActivePhase(idx)}
              className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between relative ${
                isSelected
                  ? 'bg-black/40 border-[#c6ff4d] shadow-lg shadow-black/20'
                  : 'bg-black/20 border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-xs font-bold px-2 py-0.5 rounded bg-[#c6ff4d] text-[#0a0f0a]">
                    Fase {phase.number}
                  </span>
                  <span className="text-xs font-mono text-[#f6f4ec]/60">
                    {phase.month}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#f6f4ec] mt-1">
                  {phase.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/70 leading-relaxed font-body">
                  {phase.objective}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#c6ff4d] font-semibold block">
                    Principais Marcos:
                  </span>
                  {phase.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#f6f4ec]/85 font-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c6ff4d] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#f6f4ec]/60 font-body">
                <span className="truncate pr-2"><strong className="text-[#f6f4ec]/90">Meta:</strong> {phase.kpis}</span>
                <span className="text-[#c6ff4d] shrink-0">90d Total</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>Clique nos cards para alternar o foco da análise</span>
        <span className="text-[#c6ff4d] flex items-center gap-1">
          Execução em Ciclos Ágeis <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
};
