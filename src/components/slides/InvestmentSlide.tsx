import React, { useState } from 'react';
import { PRICING_OPTIONS } from '../../data/slidesData';
import { Check, Sparkles, Shield, ArrowRight } from 'lucide-react';

interface InvestmentSlideProps {
  onSelectPlan?: (planType: 'monthly' | 'onetime') => void;
}

export const InvestmentSlide: React.FC<InvestmentSlideProps> = ({ onSelectPlan }) => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'onetime'>('onetime');

  const handlePlanSelect = (type: 'monthly' | 'onetime') => {
    setSelectedPlan(type);
    if (onSelectPlan) {
      onSelectPlan(type);
    }
  };

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
          13 · Proposta Financeira
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a0f0a] max-w-3xl leading-[1.04]">
          Três meses, um só objetivo: o lançamento
        </h2>
        <p className="mt-2.5 font-body text-base sm:text-lg md:text-xl text-[#0a0f0a]/80 max-w-2xl font-normal leading-relaxed">
          1º mês de estruturação, 2º de aquecimento, 3º de intensificação e conversão.
        </p>
      </div>

      {/* Pricing Comparison Cards */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {PRICING_OPTIONS.map((plan) => {
          const isSelected = selectedPlan === plan.type;
          return (
            <div
              key={plan.type}
              onClick={() => handlePlanSelect(plan.type)}
              className={`p-6 sm:p-8 rounded-2xl transition-all cursor-pointer relative flex flex-col justify-between ${
                plan.isHighlighted
                  ? 'bg-[#0a0f0a] text-[#f6f4ec] shadow-2xl shadow-black/25 ring-2 ring-[#0a0f0a]'
                  : 'bg-white/40 border-2 border-[#0a0f0a]/15 text-[#0a0f0a] hover:bg-white/60'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#0a0f0a] text-[#c6ff4d] text-xs font-display font-bold uppercase tracking-wider border border-[#c6ff4d]/30 shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm sm:text-base font-bold uppercase tracking-wider ${
                      plan.isHighlighted ? 'text-[#f6f4ec]/70' : 'text-[#0a0f0a]/70'
                    }`}
                  >
                    {plan.label}
                  </span>
                  {isSelected && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#c6ff4d] text-[#0a0f0a] font-bold">
                      Opção Recomendada
                    </span>
                  )}
                </div>

                <div className="mt-3 flex items-baseline gap-1.5">
                  <span
                    className={`font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight ${
                      plan.isHighlighted ? 'text-[#c6ff4d]' : 'text-[#0a0f0a]'
                    }`}
                  >
                    {plan.amount}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      plan.isHighlighted ? 'text-[#f6f4ec]/60' : 'text-[#0a0f0a]/60'
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <p
                  className={`mt-2 text-xs sm:text-sm font-body leading-relaxed ${
                    plan.isHighlighted ? 'text-[#f6f4ec]/75' : 'text-[#0a0f0a]/75'
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-6 pt-5 border-t border-current/15 space-y-2.5">
                  {plan.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.isHighlighted ? 'text-[#c6ff4d]' : 'text-[#0a0f0a]'
                        }`}
                      />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-current/15 flex items-center justify-between text-xs font-semibold">
                <span>Contrato Trimestral (90 dias)</span>
                <span className="flex items-center gap-1">
                  Selecionar <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Disclaimer */}
      <div className="pt-4 border-t border-[#0a0f0a]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#0a0f0a]/70 font-body">
        <span>* O orçamento de mídia é faturado diretamente pelas plataformas (Meta / Google) sem markup da agência.</span>
        <span className="font-semibold text-[#0a0f0a]">Pagamento via Transferência / Invoice Internacional</span>
      </div>
    </div>
  );
};
