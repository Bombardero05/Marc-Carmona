import React from "react";
import { motion } from "framer-motion";
import { 
  HiSparkles, 
  HiOutlineCodeBracket, 
  HiOutlineCpuChip, 
  HiOutlineWrenchScrewdriver 
} from "react-icons/hi2";
import { SiFigma, SiReact, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import { TbSparkles } from "react-icons/tb";

interface ToolBadge {
  name: string;
  icon?: React.ReactNode;
}

const CAREER_TAGS = [
  "Grado Superior DAM",
  "HTML / CSS a medida",
  "Trabajo serio y detallista",
  "En constante aprendizaje",
];

const TOOLS: ToolBadge[] = [
  { name: "Stitch AI (Google)", icon: <TbSparkles className="w-3.5 h-3.5 text-red-400" /> },
  { name: "Figma", icon: <SiFigma className="w-3 h-3 text-[#F24E1E]" /> },
  { name: "React", icon: <SiReact className="w-3 h-3 text-[#61DAFB]" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-3 h-3 text-[#3178C6]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3 h-3 text-[#38BDF8]" /> },
  { name: "Vite", icon: <SiVite className="w-3 h-3 text-[#646CFF]" /> },
  { name: "Framer Motion & GSAP" },
];

export const SobreMi: React.FC = () => {
  return (
    <section
      id="sobre-mi"
      className="relative w-full min-h-screen bg-[#1C1C1C] text-white py-16 px-4 sm:px-8 lg:px-16 flex flex-col justify-center border-t border-white/5 overflow-hidden"
    >
      <div className="w-full max-w-[94vw] xl:max-w-7xl mx-auto z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 mb-10 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-bold mb-1">
              <HiSparkles className="w-4 h-4" />
              <span>Mi enfoque</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">Sobre Mí</h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-sm font-light hidden sm:block">
            Bases técnicas, experiencia práctica y constante evolución.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 bg-neutral-900/40 border border-white/10 p-8 sm:p-10 rounded-3xl backdrop-blur-sm shadow-2xl">
            <div className="space-y-4">
              <span className="text-red-400 font-serif italic text-2xl tracking-normal block">
                Paso a paso
              </span>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                Compromiso, trabajo serio y ganas constantes de mejorar.
              </h3>

              <div className="space-y-3 text-sm sm:text-base text-neutral-300 font-light leading-relaxed pt-1">
                <p>
                  Mi camino técnico empezó con un Grado Medio y continuó con el Grado Superior de DAM. Más adelante trabajé en una empresa desarrollando webs con WordPress, una etapa clave para enfrentarme a proyectos reales y entender la importancia de usar HTML y CSS a medida para darle personalidad propia a cada página.
                </p>
                <p>
                  Me tomo cada proyecto de forma individual y seria: analizo diferentes opciones de diseño y busco las herramientas adecuadas para cada caso. Sigo en continuo aprendizaje, probando tecnologías y recursos nuevos para mecanizar tareas, ganar agilidad y hacer que cada trabajo quede mejor que el anterior.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
              {CAREER_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-xs font-medium text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-neutral-900/40 border border-white/10 p-5 sm:p-6 rounded-2xl backdrop-blur-sm shadow-xl flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-black border border-white/10 text-red-500 shrink-0">
                <HiOutlineCodeBracket className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold uppercase tracking-tight text-white">
                  Formación Técnica
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Grado Medio y Superior en DAM, asentando la lógica de programación y la estructura de cada proyecto.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-neutral-900/40 border border-white/10 p-5 sm:p-6 rounded-2xl backdrop-blur-sm shadow-xl flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-black border border-white/10 text-red-500 shrink-0">
                <HiOutlineCpuChip className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold uppercase tracking-tight text-white">
                  Experiencia Práctica
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Desarrollo web en empresa con WordPress, aplicando HTML y CSS personalizado para cuidar el detalle visual.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-neutral-900/40 border border-white/10 p-5 sm:p-6 rounded-2xl backdrop-blur-sm shadow-xl flex flex-col gap-3"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-black border border-white/10 text-red-500 shrink-0">
                  <HiOutlineWrenchScrewdriver className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm sm:text-base font-bold uppercase tracking-tight text-white">
                    Herramientas & Creación
                  </h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    Ideación visual, prototipado y desarrollo frontend para esta web:
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1 pl-1">
                {TOOLS.map((tool) => (
                  <span
                    key={tool.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 text-[11px] text-neutral-300"
                  >
                    {tool.icon}
                    {tool.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;