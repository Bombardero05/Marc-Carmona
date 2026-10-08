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

export const Cabecera = () => {
  return (
    <section className="relative w-full min-h-screen xl:min-h-[min(100vh,56rem)] bg-[#1C1C1C] text-white pt-24 flex flex-col justify-between overflow-hidden px-6 sm:px-10 lg:px-16">
      <div className="w-full xl:max-w-7xl xl:mx-auto flex items-center justify-between text-[11px] sm:text-xs tracking-widest uppercase font-semibold text-neutral-400 border-b border-white/5 pb-4">
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

      <div className="relative w-full xl:max-w-7xl xl:mx-auto flex-1 flex items-end">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-end gap-x-8 gap-y-8 md:gap-y-10">
          <div className="relative z-20 order-1 md:order-2 xl:order-1 flex flex-col items-start text-left space-y-3 pb-0 md:pb-12 xl:pb-10">
            <span className="text-red-400 font-serif italic text-2xl sm:text-3xl tracking-normal">
              Hola, soy
            </span>
            <h2 className="text-4xl sm:text-6xl xl:text-[3.25rem] 2xl:text-6xl font-black uppercase tracking-tight leading-[0.9] text-white">
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

          <div className="relative z-10 order-2 md:order-1 md:col-span-2 xl:col-span-1 xl:order-2 flex justify-center items-end pt-[8vw] md:pt-[10vw] xl:pt-[min(5vw,6rem)] pointer-events-none">
            <div className="relative w-[min(100%,24rem)] md:w-[min(62vw,30rem)] xl:w-[36vw] 2xl:w-[35rem]">
              <h1
                aria-hidden="true"
                className="absolute left-1/2 -translate-x-1/2 text-[20vw] xl:text-[min(20vw,24rem)] font-black uppercase tracking-tighter text-[#c5192d] select-none leading-none whitespace-nowrap z-0 opacity-90"
                style={{ fontFamily: "Impact, 'Arial Black', sans-serif", top: "-0.25em" }}
              >
                PORTFOLIO
              </h1>
              <img
                src={avatar}
                alt="Marc Carmona"
                className="relative z-10 block w-full h-auto max-h-[75vh] xl:max-h-none object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] translate-y-[2px]"
              />
            </div>
          </div>

          <div className="relative z-20 order-3 flex flex-col md:items-end justify-end space-y-8 md:text-right pb-8 md:pb-12 xl:pb-10">
            <div className="flex items-start md:justify-end gap-2 text-xs sm:text-sm text-neutral-300 max-w-[200px]">
              <HiSparkles className="text-red-500 w-4 h-4 flex-shrink-0 mt-0.5" />
              <p className="leading-snug">
                Transformando ideas en experiencias web funcionales y atractivas.
              </p>
            </div>

            <div className="space-y-4">
              {METRICS.map((metric) => (
                <div key={metric.label} className="flex flex-col md:items-end">
                  <span className="text-2xl sm:text-3xl xl:text-2xl 2xl:text-3xl font-black text-red-500 leading-tight">
                    {metric.value}
                  </span>
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
