import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhoWeAreSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#f6f4ec]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0d2213]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#0d2213]/70">
            Quem é a Sense Sales
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#0d2213]/50">
          02 · Posicionamento
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0d2213] max-w-4xl leading-[1.04]">
          Estratégia e crescimento com base no que realmente funciona
        </h2>
        <p className="mt-3 font-body text-base sm:text-lg md:text-xl text-[#233d28] max-w-3xl font-normal leading-relaxed">
          Unindo negócios, marketing, vendas e tecnologia para construir operações de crescimento previsíveis e sustentáveis.
        </p>
      </div>

      {/* 3 Core Blocks */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {/* Block 1: Quem Somos */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#0d2213]/12 hover:border-[#123a1d]/40 shadow-[0_8px_30px_rgba(13,34,19,0.04)] transition-all flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0d2213]">
              Especialistas em Crescimento
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#2d4732] leading-relaxed font-body">
              Somos estrategistas e especialistas em crescimento, reunindo experiência em negócios, marketing, vendas e tecnologia para ajudar empresas a evoluírem de forma consistente.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#0d2213]/10 space-y-2 text-xs text-[#0d2213]/90 font-medium font-body">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>Negócios, marketing &amp; vendas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>Tecnologia aplicada ao crescimento</span>
            </div>
          </div>
        </div>

        {/* Block 2: Metodologia */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#0d2213]/12 hover:border-[#123a1d]/40 shadow-[0_8px_30px_rgba(13,34,19,0.04)] transition-all flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0d2213]">
              Experimentação &amp; Adaptação
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#2d4732] leading-relaxed font-body">
              Nossa metodologia combina experiência prática, experimentação e adaptação. Em vez de trabalhar com achismos, testamos estratégias, analisamos resultados e ajustamos o caminho de acordo com o que realmente funciona para cada negócio.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#0d2213]/10 space-y-2 text-xs text-[#0d2213]/90 font-medium font-body">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>Decisões baseadas em dados reais</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>Ajustes ágeis sem achismos</span>
            </div>
          </div>
        </div>

        {/* Block 3: Abordagem */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#0d2213]/12 hover:border-[#123a1d]/40 shadow-[0_8px_30px_rgba(13,34,19,0.04)] transition-all flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0d2213]">
              Abordagem Sob Medida
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#2d4732] leading-relaxed font-body">
              Acreditamos que não existe uma fórmula única para crescer. Por isso, nossa abordagem se adapta a diferentes modelos e cenários, sempre buscando transformar estratégia em resultados reais, mensuráveis e sustentáveis.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#0d2213]/10 space-y-2 text-xs text-[#0d2213]/90 font-medium font-body">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>Sem fórmulas de bolo genéricas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>Resultados reais e mensuráveis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#0d2213]/15 flex items-center justify-between text-xs sm:text-sm text-[#0d2213]/65 font-body">
        <span>Estratégia, experimentação contínua e foco em resultados sustentáveis.</span>
        <span className="px-2.5 py-1 rounded-full bg-[#0d2213] text-[#c6ff4d] text-xs font-mono font-medium shadow-sm">
          Growth &amp; Strategy
        </span>
      </div>
    </div>
  );
};
