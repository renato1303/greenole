import React, { useState } from 'react';
import { DELIVERABLES_LIST } from '../../data/slidesData';
import { CheckCircle2, Check, Clock } from 'lucide-react';

export const DeliverablesSlide: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Estratégia', 'Tracking & Tech', 'Mídia & Anúncios', 'Conversão'];

  const filteredDeliverables = activeCategory === 'Todos'
    ? DELIVERABLES_LIST
    : DELIVERABLES_LIST.filter(d => d.category === activeCategory);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#07080a]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f6f4ec]/70">
            Escopo Contratual &amp; Entregas
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          12 · Entregáveis
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f4ec] leading-[1.04]">
            Entregáveis da proposta
          </h2>
          <p className="mt-2 font-body text-base sm:text-lg text-[#f6f4ec]/75 max-w-2xl font-normal leading-relaxed">
            Transparência total: tudo o que a Sense Sales entrega e opera ao longo dos 90 dias de contrato.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#c6ff4d] text-[#0a0f0a] font-semibold'
                  : 'bg-white/5 text-[#f6f4ec]/70 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Deliverables 2-Column Grid */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 overflow-y-auto max-h-[52vh] pr-1">
        {filteredDeliverables.map((item) => (
          <div
            key={item.id}
            className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/30 transition-colors flex items-start gap-3.5"
          >
            <div className="w-6 h-6 rounded-full bg-[#c6ff4d]/15 border border-[#c6ff4d]/30 flex items-center justify-center text-[#c6ff4d] shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-sm sm:text-base font-semibold text-[#f6f4ec] truncate">
                  {item.title}
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#c6ff4d] shrink-0">
                  {item.timeline}
                </span>
              </div>
              <p className="mt-1 text-xs text-[#f6f4ec]/65 font-body leading-relaxed">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>Sem custos ocultos: escopo completo para os 3 meses de operação</span>
        <span className="text-[#c6ff4d]">10 Entregas Principais</span>
      </div>
    </div>
  );
};
