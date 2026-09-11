import React from 'react';
import { Layout, Share2, DollarSign, Globe, Database, MessageCircle, Check } from 'lucide-react';

export const Weeks23TacticalSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#0d2213]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f6f4ec]/70">
            Semanas 2 e 3 · Tático
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          10 · Fase 1 — Estruturação
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f4ec] leading-[1.04]">
          Infraestrutura do lançamento
        </h2>
        <p className="mt-3 font-body text-base sm:text-lg text-[#f6f4ec]/75 max-w-2xl font-normal leading-relaxed">
          As engrenagens invisíveis que sustentam a operação: landing pages de altíssima conversão, tracking server-side sem furos e automação instantânea.
        </p>
      </div>

      {/* Two-Column Tactical Architecture */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Column 1: Mídia & Estrutura */}
        <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#c6ff4d] font-semibold flex items-center gap-1.5 mb-4">
              <Share2 className="w-4 h-4" /> Frente de Mídia &amp; Mensagem
            </span>
            <div className="space-y-4">
              <div className="pb-3 border-b border-white/10">
                <h4 className="font-display text-base font-semibold text-[#f6f4ec] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c6ff4d]" /> Arquitetura Digital &amp; Comunidade
                </h4>
                <p className="text-xs sm:text-sm text-[#f6f4ec]/65 mt-1 font-body">
                  Definição da dinâmica do Grupo VIP (WhatsApp) e ambiente de transmissão do webinar.
                </p>
              </div>

              <div className="pb-3 border-b border-white/10">
                <h4 className="font-display text-base font-semibold text-[#f6f4ec] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c6ff4d]" /> Briefing &amp; Roteiros de Criativos
                </h4>
                <p className="text-xs sm:text-sm text-[#f6f4ec]/65 mt-1 font-body">
                  Direcionamento visual e cópias completas para vídeos e anúncios estáticos de alta tração.
                </p>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-[#f6f4ec] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c6ff4d]" /> Fontes de Tráfego &amp; Orçamento Ideal
                </h4>
                <p className="text-xs sm:text-sm text-[#f6f4ec]/65 mt-1 font-body">
                  Divisão orçamentária entre Meta Ads, Google Search e LinkedIn com cálculo de CPL teto.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Tech & Conversão */}
        <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#c6ff4d] font-semibold flex items-center gap-1.5 mb-4">
              <Database className="w-4 h-4" /> Frente Técnica &amp; Automação
            </span>
            <div className="space-y-4">
              <div className="pb-3 border-b border-white/10">
                <h4 className="font-display text-base font-semibold text-[#f6f4ec] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c6ff4d]" /> Páginas de Captura de Alta Performance
                </h4>
                <p className="text-xs sm:text-sm text-[#f6f4ec]/65 mt-1 font-body">
                  Design limpo, responsivo e com carregamento sub-segundo para maximizar a taxa de cadastro.
                </p>
              </div>

              <div className="pb-3 border-b border-white/10">
                <h4 className="font-display text-base font-semibold text-[#f6f4ec] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c6ff4d]" /> Tracking Avançado (Meta CAPI + GA4)
                </h4>
                <p className="text-xs sm:text-sm text-[#f6f4ec]/65 mt-1 font-body">
                  Rastreamento server-side à prova de bloqueios de cookies e integração com Google Tag Manager.
                </p>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-[#f6f4ec] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c6ff4d]" /> Automação de Onboarding (WhatsApp + E-mail)
                </h4>
                <p className="text-xs sm:text-sm text-[#f6f4ec]/65 mt-1 font-body">
                  Disparos instantâneos de confirmação, entrada no grupo VIP e reserva de calendário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>Toda a stack técnica validada e testada antes de 1 centavo ir a público.</span>
        <span className="text-[#c6ff4d]">Zero Falhas de Conversão</span>
      </div>
    </div>
  );
};
