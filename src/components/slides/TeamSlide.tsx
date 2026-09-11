import React from 'react';
import { TEAM_MEMBERS } from '../../data/slidesData';

export const TeamSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#07080a]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f6f4ec]/70">
            Quem conduz o projeto
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          03 · Squad Dedicado
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f4ec] max-w-3xl leading-[1.05]">
          Um time, dois papéis complementares
        </h2>
        <p className="mt-3 sm:mt-4 font-body text-base sm:text-lg text-[#f6f4ec]/75 max-w-2xl font-normal leading-relaxed">
          Atendimento sênior e direto: quem desenha a arquitetura do lançamento é exatamente quem coloca as mãos no código e nas campanhas.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="my-auto py-6 sm:py-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.name}
            className="p-7 sm:p-8 md:p-9 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/40 transition-all duration-300 flex flex-col justify-center relative group shadow-xl"
          >
            <div className="flex items-start gap-5 sm:gap-6">
              {/* Member Avatar / Photo - Ampliado */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-2 border-[#c6ff4d] overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-xl shadow-[#c6ff4d]/15 bg-[#0d2213]">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = parent.querySelector('.fallback-monogram');
                        if (fallback) (fallback as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                ) : null}
                <div
                  className={`fallback-monogram w-full h-full items-center justify-center font-display text-3xl sm:text-4xl font-bold text-[#c6ff4d] bg-[#c6ff4d]/10 ${
                    member.photo ? 'hidden' : 'flex'
                  }`}
                >
                  {member.initial}
                </div>
              </div>

              <div className="space-y-2 flex-1">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#f6f4ec]">
                    {member.name}
                  </h3>
                  <p className="font-display text-sm sm:text-base md:text-lg text-[#c6ff4d] font-semibold tracking-wide mt-1">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-[#f6f4ec]/80 pt-1 font-body leading-relaxed">
                  {member.focus}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>Squad Executivo · Condução direta de ponta a ponta</span>
        <span className="text-xs font-mono text-[#c6ff4d]">Greenole × Sense Sales</span>
      </div>
    </div>
  );
};
