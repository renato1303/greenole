import React from 'react';
import { Check } from 'lucide-react';

export const InvestmentOnetimeSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#0a0f0a] text-[#f6f4ec]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#f6f4ec]/75">
            Investimento Comercial · Condição Especial
          </span>
        </div>
        <span className="text-xs font-mono font-bold tracking-wider text-[#c6ff4d]/80">
          16 · Pagamento À Vista
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-3 sm:mt-5 text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f6f4ec] leading-[1.04]">
          Pagamento Integral
        </h2>
      </div>

      {/* Isolated Big Pricing Card */}
      <div className="my-auto py-2 sm:py-4 flex justify-center">
        <div className="relative w-full max-w-2xl p-8 sm:p-10 rounded-3xl bg-white/[0.04] border-2 border-[#c6ff4d]/50 shadow-[0_20px_60px_rgba(198,255,77,0.1)] flex flex-col justify-between backdrop-blur-sm">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#c6ff4d] text-[#0a0f0a] text-xs font-display font-bold uppercase tracking-wider shadow-lg border border-black/10">
            Economia de US$ 300 no Total
          </div>

          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 gap-4 flex-wrap">
              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#c6ff4d] font-mono">
                  Modalidade À Vista
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                  Valor Único
                </h3>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-4xl sm:text-5xl font-black text-[#c6ff4d] tracking-tight">
                  US$ 3.300
                </span>
              </div>
            </div>

            <p className="mt-5 text-sm sm:text-base text-white/80 font-body leading-relaxed">
              Pagamento único integral na aprovação da proposta para cobertura completa das 3 fases (Estruturação, Aquecimento e Lançamento).
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-white/10">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-white/90">
                <Check className="w-4 h-4 text-[#c6ff4d] shrink-0 mt-0.5" />
                <span>Economia imediata de US$ 300</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-white/90">
                <Check className="w-4 h-4 text-[#c6ff4d] shrink-0 mt-0.5" />
                <span>Kick-off imediato em 15 de setembro</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-white/90">
                <Check className="w-4 h-4 text-[#c6ff4d] shrink-0 mt-0.5" />
                <span>Escopo de 90 dias 100% coberto</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-white/90">
                <Check className="w-4 h-4 text-[#c6ff4d] shrink-0 mt-0.5" />
                <span>Apoio direto de Renato &amp; Allan</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-white/70">
            <span className="font-mono">Contrato Trimestral (90 dias)</span>
            <span className="font-mono text-white/50">Sense Sales × Greenole</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/60 font-body">
        <span>* O orçamento de mídia é faturado diretamente pelas plataformas sem markup.</span>
        <span className="text-[#c6ff4d] font-semibold">Sense Sales × Greenole</span>
      </div>
    </div>
  );
};
