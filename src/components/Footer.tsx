import React from 'react';

interface FooterProps {
  accentColor?: string;
}

export const Footer: React.FC<FooterProps> = ({ accentColor = '#22c55e' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 px-4 border-t border-white/10 bg-[#121212]/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-400">
      <span className="text-xs text-neutral-500 order-2 sm:order-1">
        © {currentYear} • Todos los derechos reservados
      </span>

      <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-white/5 order-1 sm:order-2">
        <span className="relative flex h-2 w-2">
          <span 
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: accentColor }}
          />
          <span 
            className="relative inline-flex rounded-full h-2 w-2"
            style={{ backgroundColor: accentColor }}
          />
        </span>
        <span className="text-xs font-medium tracking-wide text-neutral-300">
          Página en constante evolución y mejora continua
        </span>
      </div>

      <div className="text-xs text-neutral-500 order-3 hidden sm:block">
        v0.1 • En desarrollo
      </div>
    </footer>
  );
};

export default Footer;