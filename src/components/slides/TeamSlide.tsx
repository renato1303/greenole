import React from 'react';
import { TEAM_MEMBERS } from '../../data/slidesData';
import { MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

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
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.name}
            className="p-6 sm:p-7 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/30 transition-all flex flex-col justify-between relative group"
          >
            <div className="flex items-start gap-4 sm:gap-5">
              {/* Monogram */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#c6ff4d] flex items-center justify-center font-display text-2xl sm:text-3xl font-bold text-[#c6ff4d] bg-[#c6ff4d]/10 shrink-0 group-hover:scale-105 transition-transform">
                {member.initial}
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f6f4ec]">
                    {member.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#c6ff4d]/15 text-[#c6ff4d] border border-[#c6ff4d]/30">
                    Lead
                  </span>
                </div>
                <p className="font-display text-sm sm:text-base text-[#c6ff4d] font-semibold">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-[#f6f4ec]/70 pt-2 font-body leading-relaxed">
                  {member.focus}
                </p>
              </div>
            </div>

            {/* Deliverables tags */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#f6f4ec]/40 block mb-2">
                Frente de Entrega
              </span>
              <div className="flex flex-wrap gap-1.5">
                {member.deliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-[#f6f4ec]/80 font-body"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Governance & Communication Note */}
      <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[#f6f4ec]/80">
            <MessageSquare className="w-3.5 h-3.5 text-[#c6ff4d]" /> Canal Dedicado Slack/WhatsApp
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-[#f6f4ec]/80">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c6ff4d]" /> Sprints Semanais de 30 min
          </span>
        </div>
        <span className="text-[#c6ff4d]">Sem intermediários: foco e velocidade</span>
      </div>
    </div>
  );
};
