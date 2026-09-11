import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Globe,
  Instagram,
  Mail
} from 'lucide-react';
import { SlideTheme } from '../types';

interface NavigationControlsProps {
  currentIndex: number;
  totalSlides: number;
  theme: SlideTheme;
  isFullscreen: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentIndex,
  totalSlides,
  theme,
  isFullscreen,
  onPrev,
  onNext,
  onToggleFullscreen
}) => {
  const isLime = theme === 'lime';
  const isWhite = theme === 'white';
  const isLight = isLime || isWhite;

  return (
    <div className="absolute left-6 right-6 bottom-4 sm:left-12 sm:right-12 sm:bottom-6 md:left-16 md:right-16 md:bottom-7 flex items-center justify-between z-30 pointer-events-auto">
      {/* Persistent Sitemap on Every Slide */}
      <div className="flex items-center flex-wrap gap-2.5 sm:gap-4 text-xs font-body">
        <a
          href="https://sensesales.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 transition-colors font-medium ${
            isWhite
              ? 'text-[#0d2213]/80 hover:text-[#0d2213]'
              : isLime
              ? 'text-[#0a0f0a]/80 hover:text-[#0a0f0a]'
              : 'text-[#f6f4ec]/70 hover:text-[#c6ff4d]'
          }`}
          title="Site oficial"
        >
          <Globe
            className="w-3.5 h-3.5"
            style={{ color: isWhite ? '#0d2213' : isLime ? '#0a0f0a' : '#c6ff4d' }}
          />
          <span className="font-mono text-[11px] sm:text-xs">sensesales.com.br</span>
        </a>

        <span
          className={`opacity-25 hidden sm:inline ${
            isWhite ? 'text-[#0d2213]' : isLime ? 'text-black' : 'text-white'
          }`}
        >
          •
        </span>

        <a
          href="https://instagram.com/sensesales"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 transition-colors font-medium ${
            isWhite
              ? 'text-[#0d2213]/80 hover:text-[#0d2213]'
              : isLime
              ? 'text-[#0a0f0a]/80 hover:text-[#0a0f0a]'
              : 'text-[#f6f4ec]/70 hover:text-[#c6ff4d]'
          }`}
          title="Instagram oficial"
        >
          <Instagram
            className="w-3.5 h-3.5"
            style={{ color: isWhite ? '#0d2213' : isLime ? '#0a0f0a' : '#c6ff4d' }}
          />
          <span className="font-mono text-[11px] sm:text-xs">@sensesales</span>
        </a>

        <span
          className={`opacity-25 hidden md:inline ${
            isWhite ? 'text-[#0d2213]' : isLime ? 'text-black' : 'text-white'
          }`}
        >
          •
        </span>

        <a
          href="mailto:contatosensesales@gmail.com"
          className={`inline-flex items-center gap-1.5 transition-colors font-medium ${
            isWhite
              ? 'text-[#0d2213]/80 hover:text-[#0d2213]'
              : isLime
              ? 'text-[#0a0f0a]/80 hover:text-[#0a0f0a]'
              : 'text-[#f6f4ec]/70 hover:text-[#c6ff4d]'
          }`}
          title="E-mail de contato"
        >
          <Mail
            className="w-3.5 h-3.5"
            style={{ color: isWhite ? '#0d2213' : isLime ? '#0a0f0a' : '#c6ff4d' }}
          />
          <span className="font-mono text-[11px] sm:text-xs">contatosensesales@gmail.com</span>
        </a>
      </div>

      {/* Nav Buttons (Fullscreen, Prev, Next) */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          title={isFullscreen ? 'Sair da tela cheia (tecla F)' : 'Tela cheia (tecla F)'}
          className={`p-2 rounded-full border transition-all ${
            isWhite
              ? 'border-[#0d2213]/25 text-[#0d2213] hover:bg-[#0d2213]/10'
              : isLime
              ? 'border-[#0a0f0a]/20 text-[#0a0f0a] hover:bg-[#0a0f0a]/10'
              : 'border-white/15 text-[#f6f4ec]/80 hover:bg-white/10'
          }`}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

        {/* Prev Slide Button */}
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          title="Slide anterior (Seta esquerda)"
          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all ${
            currentIndex === 0
              ? 'opacity-25 cursor-not-allowed border-transparent'
              : isWhite
              ? 'border-[#0d2213]/30 text-[#0d2213] hover:bg-[#0d2213]/15 hover:scale-105 active:scale-95'
              : isLime
              ? 'border-[#0a0f0a]/30 text-[#0a0f0a] hover:bg-[#0a0f0a]/15 hover:scale-105 active:scale-95'
              : 'border-white/20 text-[#f6f4ec] hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-95'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Slide Button */}
        <button
          onClick={onNext}
          disabled={currentIndex === totalSlides - 1}
          title="Próximo slide (Seta direita ou Espaço)"
          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all ${
            currentIndex === totalSlides - 1
              ? 'opacity-25 cursor-not-allowed bg-transparent border border-white/20 text-white'
              : isWhite
              ? 'bg-[#0d2213] text-[#c6ff4d] hover:bg-[#123a1d] hover:scale-105 active:scale-95 shadow-md shadow-[#0d2213]/25'
              : isLime
              ? 'bg-[#0a0f0a] text-[#c6ff4d] hover:bg-black hover:scale-105 active:scale-95 shadow-md'
              : 'bg-[#c6ff4d] text-[#0a0f0a] hover:bg-[#c6ff4d]/90 hover:scale-105 active:scale-95 shadow-md shadow-[#c6ff4d]/20'
          }`}
        >
          <ChevronRight className="w-5 h-5 font-bold" />
        </button>
      </div>
    </div>
  );
};
