import React from 'react';
import { AsteriskDeco } from '../AsteriskDeco';
import { Mail, Phone, CalendarCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface NextStepsSlideProps {
  onOpenAcceptanceModal?: () => void;
}

export const NextStepsSlide: React.FC<NextStepsSlideProps> = ({ onOpenAcceptanceModal }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#07080a]">
      {/* Decorative Asterisk */}
      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 md:bottom-16 md:right-20 opacity-85 transition-transform duration-700 hover:rotate-90">
        <AsteriskDeco size="clamp(48px, 6vw, 84px)" color="#c6ff4d" />
      </div>

      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f6f4ec]/70">
            Vamos começar?
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          14 · Próximos Passos
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#f6f4ec] max-w-4xl leading-[1.02]">
          Prontos para lançar a <span className="text-[#c6ff4d]">Greenole</span>
        </h2>
        <p className="mt-3 font-body text-base sm:text-lg md:text-xl text-[#f6f4ec]/75 max-w-2xl font-normal leading-relaxed">
          Bora marcar os próximos passos e colocar a Semana 1 em movimento já no dia 15 de setembro.
        </p>
      </div>

      {/* Immediate Onboarding Timeline */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl">
        <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c6ff4d] mb-2">
              <span>Etapa 01</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff4d]" />
              <span>Até 13/Set</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-[#f6f4ec]">
              Formalização
            </h3>
            <p className="mt-1.5 text-xs text-[#f6f4ec]/65 font-body leading-relaxed">
              Aceite da proposta, alinhamento dos dados cadastrais e emissão do contrato formal de prestação de serviços.
            </p>
          </div>
          {onOpenAcceptanceModal && (
            <button
              onClick={onOpenAcceptanceModal}
              className="mt-4 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#c6ff4d] text-[#0a0f0a] font-display font-semibold text-xs hover:bg-[#c6ff4d]/90 transition-colors shadow-md"
            >
              Aprovar Proposta <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c6ff4d] mb-2">
              <span>Etapa 02</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff4d]" />
              <span>13 a 14/Set</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-[#f6f4ec]">
              Setup de Acessos
            </h3>
            <p className="mt-1.5 text-xs text-[#f6f4ec]/65 font-body leading-relaxed">
              Envio do checklist rápido para liberação de acessos às contas de anúncio, GA4, domínio e canal no Slack.
            </p>
          </div>
          <div className="mt-4 text-xs font-mono text-[#f6f4ec]/40 pt-2 border-t border-white/10">
            Checklist guiado pela Sense
          </div>
        </div>

        <div className="p-5 rounded-xl bg-white/[0.03] border border-[#c6ff4d]/30 flex flex-col justify-between bg-black/40">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c6ff4d] mb-2">
              <span>Etapa 03</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff4d]" />
              <span>15/Setembro</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-[#f6f4ec]">
              Kick-off Oficial
            </h3>
            <p className="mt-1.5 text-xs text-[#f6f4ec]/65 font-body leading-relaxed">
              Reunião de início com Renato, Allan e o time da Greenole para dar a largada no Discovery da Semana 1.
            </p>
          </div>
          <div className="mt-4 text-xs font-mono text-[#c6ff4d] pt-2 border-t border-white/10 font-medium">
            Primeiro dia de operação
          </div>
        </div>
      </div>

      {/* Footer & Direct Contact Details */}
      <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-[#f6f4ec]/70 font-body">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <span className="text-[#f6f4ec] font-bold">Sense Sales</span>
          <span>•</span>
          <a
            href="https://sensesales.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c6ff4d] transition-colors"
          >
            sensesales.com.br
          </a>
          <span>•</span>
          <a
            href="https://instagram.com/sensesales"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c6ff4d] transition-colors"
          >
            @sensesales
          </a>
          <span>•</span>
          <a
            href="mailto:contatosensesales@gmail.com"
            className="flex items-center gap-1.5 text-[#c6ff4d] hover:underline"
          >
            <Mail className="w-3.5 h-3.5" /> contatosensesales@gmail.com
          </a>
        </div>
        <div className="text-[#f6f4ec]/50 text-xs">
          Proposta válida até 15 de Setembro de 2026
        </div>
      </div>
    </div>
  );
};
