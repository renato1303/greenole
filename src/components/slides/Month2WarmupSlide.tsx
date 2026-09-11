import React from 'react';
import { Flame, Filter, RefreshCw, BarChart2 } from 'lucide-react';

export const Month2WarmupSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#123a1d]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f6f4ec]/70">
            Fase 2 · Aquecimento &amp; Atração
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          09 · Mês 2
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f4ec] max-w-4xl leading-[1.04]">
          Geração de leads e aquecimento de audiência
        </h2>
        <p className="mt-3 font-body text-base sm:text-lg md:text-xl text-[#f6f4ec]/80 max-w-3xl font-normal leading-relaxed">
          Com a estrutura no ar, o foco vira volume qualificado: campanhas de geração de leads alimentam a base que vai assistir ao webinar, enquanto ajustamos criativos e segmentações a partir dos primeiros dados reais.
        </p>
      </div>

      {/* 3 Pillars of Month 2 */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-6 rounded-xl bg-black/30 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#c6ff4d]/10 border border-[#c6ff4d]/20 flex items-center justify-center text-[#c6ff4d] mb-4">
              <Filter className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-semibold text-[#f6f4ec]">
              Escala de Captação
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/70 leading-relaxed font-body">
              Aceleração controlada de investimento diário em Meta e LinkedIn, monitorando métricas de retenção e custo por lead (CPL) qualificado.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 text-xs text-[#c6ff4d] font-mono">
            Volume Constante &amp; Qualificado
          </div>
        </div>

        <div className="p-6 rounded-xl bg-black/30 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#c6ff4d]/10 border border-[#c6ff4d]/20 flex items-center justify-center text-[#c6ff4d] mb-4">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-semibold text-[#f6f4ec]">
              Nutrição &amp; Antecipação
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/70 leading-relaxed font-body">
              Disparos semanais de conteúdos de alto valor no WhatsApp VIP e e-mail. Não deixamos o lead esfriar; cultivamos a expectativa pelo dia do evento.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 text-xs text-[#c6ff4d] font-mono">
            Taxa de Abertura &gt; 90% no WhatsApp
          </div>
        </div>

        <div className="p-6 rounded-xl bg-black/30 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#c6ff4d]/10 border border-[#c6ff4d]/20 flex items-center justify-center text-[#c6ff4d] mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-semibold text-[#f6f4ec]">
              Otimização Cirúrgica
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/70 leading-relaxed font-body">
              Testes constantes de novos ângulos de criativos (vídeo vs estático) e exclusão de públicos saturados para manter o custo baixo.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 text-xs text-[#c6ff4d] font-mono">
            Iteração Contínua dos Anúncios
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>Objetivo do Mês 2: Chegar ao mês do evento com audiência quente e educada</span>
        <span className="text-[#c6ff4d]">Retenção &amp; Engajamento</span>
      </div>
    </div>
  );
};
