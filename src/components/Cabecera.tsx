import React from "react";
import { HiSparkles } from "react-icons/hi2";
import { FiGlobe } from "react-icons/fi";
import avatar from "../assets/avatar-Photoroom.png";

interface MetricItem {
  value: string;
  label: string;
}

const METRICS: MetricItem[] = [
  { value: "100%", label: "Compromiso y Código Limpio" },
  { value: "Fast & Responsive", label: "Diseño Adaptado a Todo Dispositivo" },
  { value: "Modern Stack", label: "React • Tailwind • TypeScript" },
];

export const Cabecera: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#1C1C1C] text-white pt-24 flex flex-col justify-between overflow-hidden px-6 sm:px-30 md:px-30 lg:px-50">
      <div className="w-full flex items-center justify-between text-[11px] sm:text-xs tracking-widest uppercase font-semibold text-neutral-400 border-b border-white/5 pb-4">
        <div className="flex flex-col sm:flex-row sm:gap-6 text-red-500 font-bold">
          <span>FRONTEND DEVELOPER</span>
          <span className="text-neutral-500 hidden sm:inline">•</span>
          <span className="text-neutral-400">WEB CREATOR</span>
        </div>
        <div className="flex items-center gap-2 text-neutral-300">
          <span>DISPONIBLE PARA TRABAJAR</span>
          <HiSparkles className="text-red-500 w-3.5 h-3.5" />
        </div>
      </div>

      <div className="relative flex-1 flex items-end justify-center">
        <h1
          aria-hidden="true"
          className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black uppercase tracking-tighter text-[#c5192d] select-none pointer-events-none opacity-90 leading-none z-0"
          style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
        >
          PORTFOLIO
        </h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-12 items-end relative z-10 gap-8">
          <div className="md:col-span-4 flex flex-col items-start text-left space-y-3 pb-8 md:pb-12">
            <span className="text-red-400 font-serif italic text-2xl sm:text-3xl tracking-normal">
              Hola, soy
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9] text-white">
              MARC<br />CARMONA
            </h2>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-500 pt-1">
              Frontend Developer & UI Specialist
            </p>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xs font-light">
              Desarrollo interfaces modernas, rápidas y sitios web a medida para empresas con atención al detalle y código limpio.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-neutral-400 uppercase tracking-widest pt-2">
              <FiGlobe className="text-red-500" />
              <span>Sabadell / Remoto</span>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-center items-end self-end pointer-events-none">
            <img
              src={avatar}
              alt="Marc Carmona"
              className="w-[300vw] sm:w-[300vw] md:w-[300vw] max-w-none max-h-[80vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] translate-y-[2px]"
            />
          </div>

          <div className="md:col-span-4 flex flex-col md:items-end justify-end space-y-8 md:text-right pb-8 md:pb-12">
            <div className="flex items-start md:justify-end gap-2 text-xs sm:text-sm text-neutral-300 max-w-[200px]">
              <HiSparkles className="text-red-500 w-4 h-4 flex-shrink-0 mt-0.5" />
              <p className="leading-snug">
                Transformando ideas en experiencias web funcionales y atractivas.
              </p>
            </div>

            <div className="space-y-4">
              {METRICS.map((metric) => (
                <div key={metric.label} className="flex flex-col md:items-end">
                  <span className="text-2xl sm:text-3xl font-black text-red-500">{metric.value}</span>
                  <span className="text-[10px] tracking-widest uppercase text-neutral-400">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cabecera;