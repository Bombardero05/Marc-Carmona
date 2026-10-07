import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "../assets/LOGO.mp4";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const PHONE_HREF = "tel:+34655663482";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="relative pointer-events-auto flex items-center w-full sm:w-auto">
        <div
          aria-hidden="true"
          className="absolute -left-5 top-0 w-5 h-5 overflow-hidden pointer-events-none hidden sm:block"
        >
          <div className="w-full h-full rounded-tr-2xl shadow-[8px_-8px_0_0_#000000]" />
        </div>

        <nav className="w-full sm:w-[720px] sm:max-w-[calc(100vw-3rem)] flex items-center justify-between gap-6 sm:gap-10 px-5 sm:px-8 py-2.5 bg-[#000000] rounded-b-2xl shadow-2xl shadow-black/80">
          <div className="flex items-center gap-3">
            <video
              src={Logo}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "32px", height: "32px" }}
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            />
            <span className="text-white text-sm sm:text-base font-semibold tracking-tight whitespace-nowrap">
              Marc Carmona
            </span>
          </div>

          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="px-3.5 py-1.5 text-xs sm:text-sm text-neutral-400 hover:text-white rounded-lg transition-colors duration-150 hover:bg-white/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center">
            <motion.a
              href={PHONE_HREF}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-1.5 text-xs font-semibold text-black bg-white hover:bg-neutral-200 rounded-xl transition-colors duration-150 shadow-sm whitespace-nowrap"
            >
              CONTÁCTAME
            </motion.a>
          </div>

          <button
            onClick={toggleOpen}
            aria-label="Abrir menú"
            className="md:hidden text-neutral-300 hover:text-white p-1 focus:outline-none"
          >
            {isOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </nav>

        <div
          aria-hidden="true"
          className="absolute -right-5 top-0 w-5 h-5 overflow-hidden pointer-events-none hidden sm:block"
        >
          <div className="w-full h-full rounded-tl-2xl shadow-[-8px_-8px_0_0_#000000]" />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="absolute top-14 left-0 right-0 bg-[#000000] rounded-2xl p-4 flex flex-col gap-2 shadow-2xl md:hidden"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-neutral-300 hover:text-white text-sm font-medium py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={PHONE_HREF}
                onClick={closeMenu}
                className="text-center w-full py-2 mt-1 text-xs font-semibold text-black bg-white rounded-xl"
              >
                CONTÁCTAME
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;