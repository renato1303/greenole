import React from 'react';
import { Flame, Filter, RefreshCw, BarChart2 } from 'lucide-react';

export const Month2WarmupSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#f6f4ec]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0d2213]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#0d2213]/70">
            Fase 2 · Aquecimento &amp; Atração
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#0d2213]/50">
          12 · Mês 2
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0d2213] max-w-4xl leading-[1.04]">
          Geração de leads e aquecimento de audiência
        </h2>
        <p className="mt-3 font-body text-base sm:text-lg md:text-xl text-[#233d28] max-w-3xl font-normal leading-relaxed">
          Com a estrutura no ar, o foco vira volume qualificado: campanhas de geração de leads alimentam a base que vai assistir ao webinar, enquanto ajustamos criativos e segmentações a partir dos primeiros dados reais.
        </p>
      </div>

      {/* 3 Pillars of Month 2 */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-6 rounded-xl bg-white border border-[#0d2213]/12 hover:border-[#123a1d]/40 shadow-[0_8px_30px_rgba(13,34,19,0.04)] flex flex-col justify-between transition-all">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#0d2213] text-[#c6ff4d] flex items-center justify-center mb-4 shadow-sm">
              <Filter className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#0d2213]">
              Escala de Captação
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#2d4732] leading-relaxed font-body">
              Aceleração controlada de investimento diário em Meta e LinkedIn, monitorando métricas de retenção e custo por lead (CPL) qualificado.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#0d2213]/10 text-xs text-[#0d2213] font-mono font-semibold">
            Volume Constante &amp; Qualificado
          </div>
        </div>

        <div className="p-6 rounded-xl bg-white border border-[#0d2213]/12 hover:border-[#123a1d]/40 shadow-[0_8px_30px_rgba(13,34,19,0.04)] flex flex-col justify-between transition-all">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#0d2213] text-[#c6ff4d] flex items-center justify-center mb-4 shadow-sm">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#0d2213]">
              Nutrição &amp; Antecipação
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#2d4732] leading-relaxed font-body">
              Disparos semanais de conteúdos de alto valor no WhatsApp VIP e e-mail. Não deixamos o lead esfriar; cultivamos a expectativa pelo dia do evento.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#0d2213]/10 text-xs text-[#0d2213] font-mono font-semibold">
            Taxa de Abertura &gt; 90% no WhatsApp
          </div>
        </div>

        <div className="p-6 rounded-xl bg-white border border-[#0d2213]/12 hover:border-[#123a1d]/40 shadow-[0_8px_30px_rgba(13,34,19,0.04)] flex flex-col justify-between transition-all">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#0d2213] text-[#c6ff4d] flex items-center justify-center mb-4 shadow-sm">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#0d2213]">
              Otimização Cirúrgica
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#2d4732] leading-relaxed font-body">
              Testes constantes de novos ângulos de criativos (vídeo vs estático) e exclusão de públicos saturados para manter o custo baixo.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#0d2213]/10 text-xs text-[#0d2213] font-mono font-semibold">
            Iteração Contínua dos Anúncios
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#0d2213]/15 flex items-center justify-between text-xs sm:text-sm text-[#0d2213]/65 font-body">
        <span>Objetivo do Mês 2: Chegar ao mês do evento com audiência quente e educada</span>
        <span className="px-2.5 py-1 rounded-full bg-[#0d2213] text-[#c6ff4d] text-xs font-mono font-medium shadow-sm">
          Retenção &amp; Engajamento
        </span>
      </div>
    </div>
  );
};
