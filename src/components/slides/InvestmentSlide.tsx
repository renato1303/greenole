import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_OPTIONS } from '../../data/slidesData';

interface InvestmentSlideProps {
  onSelectPlan?: (planType: 'monthly' | 'onetime') => void;
}

export const InvestmentSlide: React.FC<InvestmentSlideProps> = () => {
  const monthlyPlan = PRICING_OPTIONS.find(p => p.type === 'monthly') || PRICING_OPTIONS[0];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#c6ff4d] text-[#0a0f0a]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0a0f0a]" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0a0f0a]/75">
            Investimento Comercial
          </span>
        </div>
        <span className="text-xs font-mono font-bold tracking-wider text-[#0a0f0a]/60">
          15 · Investimento
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-3 sm:mt-5">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a0f0a] max-w-3xl leading-[1.04]">
          Três meses, um só objetivo: o lançamento
        </h2>
      </div>

      {/* Main Single Pricing Option Card (Monthly) */}
      <div className="my-auto py-2 sm:py-4 flex justify-center">
        <div className="w-full max-w-2xl p-8 sm:p-10 rounded-3xl bg-[#0a0f0a] text-[#f6f4ec] shadow-2xl shadow-black/25 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-white/10 gap-4 flex-wrap">
              <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-white font-mono">
                {monthlyPlan.label}
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-3xl sm:text-4xl font-black text-[#c6ff4d] tracking-tight">
                  {monthlyPlan.amount}
                </span>
                <span className="text-xs text-white/60 font-semibold">{monthlyPlan.period}</span>
              </div>
            </div>

            <p className="mt-5 text-sm sm:text-base text-white/80 font-body leading-relaxed">
              {monthlyPlan.description}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-white/10">
              {monthlyPlan.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-white/90">
                  <Check className="w-4 h-4 text-[#c6ff4d] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-white/70">
            <span className="font-mono">Contrato Trimestral (90 dias)</span>
            <span className="font-mono text-white/50">Sense Sales × Greenole</span>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="pt-4 border-t border-[#0a0f0a]/20 flex items-center justify-between text-xs text-[#0a0f0a]/70 font-body">
        <span>* O orçamento de mídia é faturado diretamente pelas plataformas (Meta / Google) sem markup da agência.</span>
        <span className="font-mono font-semibold text-[#0a0f0a]">90 Dias de Operação</span>
      </div>
    </div>
  );
};
