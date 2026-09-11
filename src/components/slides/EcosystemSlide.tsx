import React from 'react';
import { Globe, Mail, Instagram, ExternalLink, ShieldCheck } from 'lucide-react';

export const EcosystemSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#0d2213]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f6f4ec]/70">
            Presença Digital
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          11 · Presença Digital
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <div className="text-xs sm:text-sm font-body uppercase tracking-wider text-[#c6ff4d] font-semibold mb-2">
          Onde a Greenole vai aparecer
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f4ec] leading-[1.04]">
          Sitemap da apresentação
        </h2>
        <p className="mt-3 font-body text-base sm:text-lg text-[#f6f4ec]/75 max-w-3xl font-normal leading-relaxed">
          Os canais não atuam isolados: cada ponto de contato foi estruturado para conduzir o lead pelo funil até a sala do webinar e conversão final.
        </p>
      </div>

      {/* 3 Main Sitemap Cards */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Channel 1: Site */}
        <div className="p-6 sm:p-7 rounded-2xl bg-black/40 border border-white/10 hover:border-[#c6ff4d]/40 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#c6ff4d]/10 border border-[#c6ff4d]/25 flex items-center justify-center text-[#c6ff4d] group-hover:scale-105 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#f6f4ec]/70">
                Canal Oficial
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#f6f4ec]">
              Site
            </h3>
            <div className="mt-1 inline-flex items-center gap-1.5 text-xs font-mono text-[#c6ff4d]">
              <span>sensesales.com.br</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </div>
            <p className="mt-3 text-xs sm:text-sm text-[#f6f4ec]/70 leading-relaxed font-body">
              Página oficial de captura, landing pages dedicadas e hub central do webinar com alta velocidade e taxas de conversão acima de 30%.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#f6f4ec]/50 font-mono">
            <span>Hub de Inscrição</span>
            <span className="text-[#c6ff4d]">sensesales.com.br</span>
          </div>
        </div>

        {/* Channel 2: Instagram */}
        <div className="p-6 sm:p-7 rounded-2xl bg-black/40 border border-white/10 hover:border-[#c6ff4d]/40 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#c6ff4d]/10 border border-[#c6ff4d]/25 flex items-center justify-center text-[#c6ff4d] group-hover:scale-105 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#f6f4ec]/70">
                Audiência &amp; Mídia
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#f6f4ec]">
              Instagram
            </h3>
            <div className="mt-1 inline-flex items-center gap-1.5 text-xs font-mono text-[#c6ff4d]">
              <span>@sensesales</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </div>
            <p className="mt-3 text-xs sm:text-sm text-[#f6f4ec]/70 leading-relaxed font-body">
              Aquecimento de audiência orgânica, prova social, autoridade da marca e campanhas ativas de retargeting no feed e stories.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#f6f4ec]/50 font-mono">
            <span>Aquecimento &amp; Anúncios</span>
            <span className="text-[#c6ff4d]">@sensesales</span>
          </div>
        </div>

        {/* Channel 3: E-mail */}
        <div className="p-6 sm:p-7 rounded-2xl bg-black/40 border border-white/10 hover:border-[#c6ff4d]/40 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#c6ff4d]/10 border border-[#c6ff4d]/25 flex items-center justify-center text-[#c6ff4d] group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#f6f4ec]/70">
                Nutrição &amp; Agenda
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#f6f4ec]">
              E-mail
            </h3>
            <div className="mt-1 inline-flex items-center gap-1.5 text-xs font-mono text-[#c6ff4d]">
              <span>contatosensesales@gmail.com</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </div>
            <p className="mt-3 text-xs sm:text-sm text-[#f6f4ec]/70 leading-relaxed font-body">
              Sequência automática de nutrição de autoridade, confirmação de agenda (Google Calendar) e canal de comunicação direto.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#f6f4ec]/50 font-mono">
            <span>Régua Automatizada</span>
            <span className="text-[#c6ff4d]">contatosensesales@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>Toda a jornada integrada: o lead nunca fica sem resposta ou orientação</span>
        <div className="flex items-center gap-2 text-[#c6ff4d] font-medium">
          <ShieldCheck className="w-4 h-4" />
          <span>Ecossistema Sense Sales Conectado</span>
        </div>
      </div>
    </div>
  );
};
