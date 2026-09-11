import React from 'react';
import { BellRing, CheckSquare } from 'lucide-react';

export const Month3LaunchSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#07080a]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f6f4ec]/70">
            Fase 3 · O Evento &amp; Conversão
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          13 · Mês 3
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f4ec] max-w-4xl leading-[1.04]">
          O mês do lançamento
        </h2>
        <p className="mt-3 font-body text-base sm:text-lg md:text-xl text-[#f6f4ec]/75 max-w-3xl font-normal leading-relaxed">
          É quando tudo conversa: campanhas intensificadas, comunidade aquecida e webinar no ar. Conduzimos a operação com foco total em converter atenção em pipeline.
        </p>
      </div>

      {/* 2 Chronological Milestones (War Room removed as requested) */}
      <div className="my-auto py-6 sm:py-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto w-full">
        <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/10 text-[#c6ff4d]">
                Pré-Evento (72h)
              </span>
              <BellRing className="w-6 h-6 text-[#c6ff4d]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#f6f4ec]">
              Blitz de Comparecimento
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#f6f4ec]/65 leading-relaxed font-body">
              Campanhas de alta frequência de retargeting lembrando data e hora. Avisos programados no WhatsApp (48h, 24h, 1h e 'Estamos ao vivo').
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#c6ff4d] font-mono font-semibold">
            Maximizar Taxa de Show-Up
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/10 text-[#c6ff4d]">
                Pós-Evento (7 dias)
              </span>
              <CheckSquare className="w-6 h-6 text-[#c6ff4d]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#f6f4ec]">
              Régua de Fechamento
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#f6f4ec]/65 leading-relaxed font-body">
              Acesso temporário ao replay para faltantes, contato imediato com quem interagiu na live e entrega de relatórios finais de conversão.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#c6ff4d] font-mono font-semibold">
            Conversão Máxima de Pipeline
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>Não paramos na transmissão: o evento termina com contratos negociados</span>
        <span className="text-[#c6ff4d]">Foco em Vendas Reais</span>
      </div>
    </div>
  );
};
