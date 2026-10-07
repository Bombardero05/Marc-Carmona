import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSparkles, HiOutlinePlay } from "react-icons/hi2";
import gengar from "../assets/galeria/gengar.jpg";
import romano from "../assets/galeria/romano.jpg";

interface ProjectItem {
  id: number;
  img: string;
  title: string;
  cat: string;
}

interface ProjectCardProps {
  item: ProjectItem;
  onSelect: (src: string) => void;
}

const ITEMS: ProjectItem[] = [
  { id: 1, img: romano, title: "Vista de Proyecto Web", cat: "Web Development & UI" },
  { id: 2, img: gengar, title: "Interactividad & Motion", cat: "Frontend Showcase" },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ item, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}

      onClick={() => onSelect(item.img)}
      className="group relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 cursor-pointer shadow-2xl transition-all duration-300 hover:border-red-500/60 flex flex-col justify-end"
    >
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/10 opacity-80"
      >
        <HiOutlinePlay className="w-4 h-4" />
      </div>

      <div className="relative z-20 p-5 bg-gradient-to-t from-black/95 via-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-300">
        <span className="text-xs uppercase font-bold tracking-widest text-red-500">{item.cat}</span>
        <h3 className="text-white text-base font-semibold tracking-tight mt-0.5">{item.title}</h3>
      </div>
    </motion.div>
  );
};

export const Proyectos: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const closeModal = () => setSelected(null);

  return (
    <section
      id="proyectos"
      className="relative w-full min-h-screen bg-[#1C1C1C] text-white py-12 px-4 sm:px-8 lg:px-16 flex flex-col justify-center border-t border-white/5"
    >
      <div className="w-full max-w-[94vw] xl:max-w-7xl mx-auto z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 mb-8 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-bold mb-1">
              <HiSparkles className="w-4 h-4" />
              <span>Motion & Diseños Interactivos</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">Proyectos</h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-sm font-light hidden sm:block">
            Pasa el cursor por encima para reproducir la interacción.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {ITEMS.map((item) => (
            <ProjectCard key={item.id} item={item} onSelect={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              src={selected}
              alt="Vista previa"
              className="max-w-full max-h-[90vh] object-contain rounded-xl border border-white/20 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Proyectos;