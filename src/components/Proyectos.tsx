import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import pokepackImg from "../assets/proyectos/pokepack.webp";
import traspasoImg from "../assets/proyectos/calculatutraspaso.webp";
import planetaImg from "../assets/proyectos/aeplaneta.webp";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  codeUrl?: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "pokepack",
    title: "PokéPack Collector",
    category: "Proyecto propio · React",
    description:
      "Simulador de apertura de sobres de cartas Pokémon con 176 colecciones reales. Cada carta vale su precio real de mercado y el precio de cada sobre depende del valor de las cartas que puede traer.",
    highlights: [
      "Álbum por colección con las cartas que faltan en gris, y filtros por rareza y precio.",
      "Precios reales de Cardmarket; si una carta no tiene, se estima por rareza y colección.",
      "Estado del juego con useReducer y 60 pruebas automáticas con Vitest.",
    ],
    tech: ["React", "Vite", "JavaScript", "Vitest", "API REST"],
    image: pokepackImg,
    imageAlt: "Álbum de PokéPack Collector con cartas de distintas rarezas y su precio",
    liveUrl: "https://pokepack-eight.vercel.app",
    codeUrl: "https://github.com/Bombardero05/POKEPACK",
    featured: true,
  },
  {
    id: "calculatutraspaso",
    title: "CalculaTuTraspaso",
    category: "Proyecto propio · React",
    description:
      "Calculadora del coste de traspaso de un vehículo en España: tasa de la DGT e impuesto ITP según la comunidad autónoma, con un resumen listo para enviar por WhatsApp.",
    highlights: ["Publicada con dominio propio."],
    tech: ["React", "Vite", "Tailwind CSS"],
    image: traspasoImg,
    imageAlt: "Calculadora de CalculaTuTraspaso con el coste total de un traspaso",
    liveUrl: "https://calculatutraspaso.es",
    codeUrl: "https://github.com/Bombardero05/calculatutraspaso",
  },
  {
    id: "aeplaneta",
    title: "Autoescuela Planeta",
    category: "Trabajo en empresa · WordPress",
    description:
      "Web de una autoescuela y centro de formación de Terrassa, con carnés de conducir, cursos profesionales y cursos subvencionados.",
    highlights: [
      "Maquetación de secciones con HTML y CSS a medida.",
      "Creación de nuevas secciones de la web.",
      "Clasificación de los cursos por modalidad, temática y situación laboral con un plugin, que alimenta el buscador de la portada.",
    ],
    tech: ["WordPress", "HTML", "CSS"],
    image: planetaImg,
    imageAlt: "Portada de Autoescuela Planeta con el buscador por modalidad, temática y situación laboral",
    liveUrl: "https://aeplaneta.es",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const { featured } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col ${featured ? "lg:col-span-2 lg:flex-row" : ""} rounded-3xl overflow-hidden bg-neutral-900/40 border border-white/10 hover:border-red-500/50 transition-colors duration-300 shadow-2xl`}
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className={`block shrink-0 overflow-hidden bg-black ${featured ? "lg:w-[55%]" : ""}`}
        aria-label={`Abrir ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className={`w-full aspect-video object-cover object-top transition-transform duration-500 hover:scale-[1.03] ${featured ? "lg:h-full" : ""}`}
        />
      </a>

      <div className="flex flex-col gap-4 p-6 sm:p-8 flex-1">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-red-500">{project.category}</span>
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mt-1">{project.title}</h3>
        </div>

        <p className="text-sm text-neutral-300 font-light leading-relaxed">{project.description}</p>

        <ul className="space-y-2 text-sm text-neutral-400 font-light leading-relaxed">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-red-500 mt-0.5" aria-hidden="true">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-2" aria-label="Tecnologías">
          {project.tech.map((t) => (
            <li key={t} className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-neutral-200">
              {t}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 mt-auto pt-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-red-600 hover:bg-red-500 text-white transition-colors"
          >
            <FiExternalLink className="w-4 h-4" />
            Ver web
          </a>
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl border border-white/15 hover:border-white/40 text-neutral-200 transition-colors"
            >
              <FiGithub className="w-4 h-4" />
              Ver código
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Proyectos() {
  return (
    <section
      id="proyectos"
      className="relative w-full min-h-screen bg-[#1C1C1C] text-white py-16 px-4 sm:px-8 lg:px-16 flex flex-col justify-center border-t border-white/5"
    >
      <div className="w-full max-w-[94vw] xl:max-w-7xl mx-auto z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 mb-10 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-bold mb-1">
              <HiSparkles className="w-4 h-4" />
              <span>Proyectos publicados</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">Proyectos</h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-sm font-light hidden sm:block">
            Proyectos propios en React y trabajo real en empresa con WordPress.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
