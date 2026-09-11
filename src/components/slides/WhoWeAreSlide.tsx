import React from 'react';
import { Layers, Cpu, Radio, CheckCircle2 } from 'lucide-react';

export const WhoWeAreSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#07080a]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f6f4ec]/70">
            Quem é a Sense Sales
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          02 · Posicionamento
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f4ec] max-w-4xl leading-[1.04]">
          Performance e produto de lançamento sob o mesmo teto
        </h2>
        <p className="mt-3 sm:mt-4 font-body text-base sm:text-lg md:text-xl text-[#f6f4ec]/75 max-w-3xl font-normal leading-relaxed">
          Estruturamos operações de aquisição para negócios B2B que precisam vender autoridade antes de vender produto. Tráfego pago, CRM, automação e time comercial trabalham juntos — para que cada lead que chegue até a Greenole já entenda por que a plataforma existe.
        </p>
      </div>

      {/* 3 Core Competencies */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/40 transition-colors">
          <div className="w-11 h-11 rounded-lg bg-[#c6ff4d]/10 border border-[#c6ff4d]/20 flex items-center justify-center text-[#c6ff4d] mb-4">
            <Radio className="w-5 h-5" />
          </div>
          <h3 className="font-display text-xl font-semibold text-[#f6f4ec]">
            Tráfego Pago &amp; Mídia
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/65 leading-relaxed font-body">
            Aquisição cirúrgica em Meta Ads, Google e LinkedIn. Segmentação ultraprecisa para alcançar tomadores de decisão qualificados sem dispersão de verba.
          </p>
          <ul className="mt-4 space-y-1.5 text-xs text-[#f6f4ec]/80">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c6ff4d]" /> Testes A/B sistemáticos
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c6ff4d]" /> Atribuição server-side
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/40 transition-colors">
          <div className="w-11 h-11 rounded-lg bg-[#c6ff4d]/10 border border-[#c6ff4d]/20 flex items-center justify-center text-[#c6ff4d] mb-4">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="font-display text-xl font-semibold text-[#f6f4ec]">
            CRM &amp; Automação
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/65 leading-relaxed font-body">
            Comunicação multicanal automatizada com WhatsApp e e-mail. Garantimos que o lead não apenas se inscreva, mas compareça ao evento ao vivo.
          </p>
          <ul className="mt-4 space-y-1.5 text-xs text-[#f6f4ec]/80">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c6ff4d]" /> Grupos VIP estruturados
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c6ff4d]" /> Taxa de abertura superior a 90%
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/40 transition-colors">
          <div className="w-11 h-11 rounded-lg bg-[#c6ff4d]/10 border border-[#c6ff4d]/20 flex items-center justify-center text-[#c6ff4d] mb-4">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="font-display text-xl font-semibold text-[#f6f4ec]">
            Alinhamento Comercial
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/65 leading-relaxed font-body">
            Transição sem atrito entre o lead gerado e a reunião de fechamento. Scripts, roteiros de pitch e acompanhamento do pipeline de vendas.
          </p>
          <ul className="mt-4 space-y-1.5 text-xs text-[#f6f4ec]/80">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c6ff4d]" /> Roteirização do pitch
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c6ff4d]" /> Régua de follow-up ativa
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>Não vendemos impressões nem vaidade — vendemos presença e conversão.</span>
        <span className="text-[#c6ff4d]">Full-Funnel Alignment</span>
      </div>
    </div>
  );
};
