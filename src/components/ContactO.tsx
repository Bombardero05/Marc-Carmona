import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    HiSparkles,
    HiOutlineEnvelope,
    HiOutlineMapPin,
    HiOutlinePhone,
    HiOutlinePaperAirplane
} from "react-icons/hi2";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export const Contacto: React.FC = () => {
    const [enviado, setEnviado] = useState(false);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setCargando(true);
        setError(false);

        try {
            const res = await fetch("https://formspree.io/f/xljdlwwr", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setEnviado(true);
                setFormData({ nombre: "", email: "", mensaje: "" });
                setTimeout(() => setEnviado(false), 5000);
            } else {
                setError(true);
            }
        } catch {
            setError(true);
        } finally {
            setCargando(false);
        }
    };
    return (
        <section
            id="contacto"
            className="relative w-full min-h-screen bg-[#1C1C1C] text-white py-16 px-4 sm:px-8 lg:px-16 flex flex-col justify-center border-t border-white/5 overflow-hidden"
        >
            <div className="w-full max-w-[94vw] xl:max-w-7xl mx-auto z-10">

                {/* Cabecera */}
                <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 mb-10 border-b border-white/10 gap-4">
                    <div>
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-bold mb-1">
                            <HiSparkles className="w-4 h-4" />
                            <span>Hablemos de tu próximo proyecto</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">Contacto</h2>
                    </div>
                    <p className="text-neutral-400 text-xs sm:text-sm max-w-sm font-light hidden sm:block">
                        Disponible para nuevas oportunidades, proyectos freelance y colaboraciones.
                    </p>
                </div>

                {/* Contenido en dos columnas */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Lado izquierdo: Información, Canales directos y Redes */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-neutral-900/40 border border-white/10 p-8 rounded-3xl backdrop-blur-sm shadow-2xl">
                        <div>
                            <span className="text-red-400 font-serif italic text-2xl tracking-normal">¿Tienes una idea?</span>
                            <h3 className="text-3xl font-black uppercase tracking-tight text-white mt-1 mb-4 leading-tight">
                                Empecemos a construirla juntos.
                            </h3>
                            <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                                Escríbeme tanto si buscas desarrollar una web a medida, optimizar una interfaz o incorporar un perfil serio y en constante aprendizaje a tu equipo.
                            </p>

                            <div className="space-y-4 pt-2">
                                {/* Email Directo */}
                                <div className="flex items-center gap-3 text-neutral-300 text-sm">
                                    <div className="p-2.5 rounded-xl bg-black border border-white/10 text-red-500 shrink-0">
                                        <HiOutlineEnvelope className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">Email directo</span>
                                        <a href="mailto:mcarmonaagudo@gmail.com" className="hover:text-red-400 transition-colors">
                                            mcarmonaagudo@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="flex items-center gap-3 text-neutral-300 text-sm">
                                    <div className="p-2.5 rounded-xl bg-black border border-white/10 text-red-500 shrink-0">
                                        <FaWhatsapp className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">WhatsApp</span>
                                        <a
                                            href="https://wa.me/34655663482?text=Hola%20Marc,%20he%20visto%20tu%20portfolio"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="hover:text-red-400 transition-colors font-medium"
                                        >
                                            +34 655 66 34 82
                                        </a>
                                    </div>
                                </div>

                                {/* Teléfono directo */}
                                <div className="flex items-center gap-3 text-neutral-300 text-sm">
                                    <div className="p-2.5 rounded-xl bg-black border border-white/10 text-red-500 shrink-0">
                                        <HiOutlinePhone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">Teléfono</span>
                                        <a href="tel:+34655663482" className="hover:text-red-400 transition-colors">
                                            +34 655 66 34 82
                                        </a>
                                    </div>
                                </div>

                                {/* Ubicación */}
                                <div className="flex items-center gap-3 text-neutral-300 text-sm">
                                    <div className="p-2.5 rounded-xl bg-black border border-white/10 text-red-500 shrink-0">
                                        <HiOutlineMapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">Ubicación</span>
                                        <span>Sabadell, Barcelona (Disponible remoto)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enlaces Sociales & Plataformas */}
                        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-neutral-300 hover:text-white hover:border-red-500/60 transition-all text-xs font-semibold uppercase tracking-wider"
                            >
                                <FiGithub className="w-4 h-4 text-red-500" />
                                GitHub
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-neutral-300 hover:text-white hover:border-red-500/60 transition-all text-xs font-semibold uppercase tracking-wider"
                            >
                                <FiLinkedin className="w-4 h-4 text-red-500" />
                                LinkedIn
                            </a>

                            <a
                                href="https://www.infojobs.net"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-neutral-300 hover:text-white hover:border-red-500/60 transition-all text-xs font-semibold uppercase tracking-wider"
                            >
                                <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2.5c-.83 0-1.5.67-1.5 1.5v8c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5zm8-2.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm1.5 4v6c0 1.93-1.57 3.5-3.5 3.5-1.1 0-2.07-.51-2.7-1.3-.49-.61-.39-1.51.23-2 .61-.48 1.5-.39 1.98.22.18.23.47.38.79.38.66 0 1.2-.54 1.2-1.2v-5.6c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z" />
                                </svg>
                                InfoJobs
                            </a>
                        </div>
                    </div>

                    {/* Lado derecho: Formulario */}
                    <div className="lg:col-span-7 bg-neutral-900/40 border border-white/10 p-8 rounded-3xl backdrop-blur-sm shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label htmlFor="nombre" className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                                        Nombre
                                    </label>
                                    <input
                                        id="nombre"
                                        type="text"
                                        name="nombre"
                                        required
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        placeholder="Tu nombre o empresa"
                                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-red-500 transition-colors"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="tu@correo.com"
                                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-red-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="mensaje" className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                                    Mensaje
                                </label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    rows={4}
                                    required
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    placeholder="Cuéntame sobre el proyecto, necesidades o dudas..."
                                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-red-500 transition-colors resize-none"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={cargando}
                                    type="submit"
                                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-red-600/20"
                                >
                                    <span>
                                        {cargando ? "Enviando..." : enviado ? "¡Mensaje Enviado!" : "Enviar Mensaje"}
                                    </span>
                                    <HiOutlinePaperAirplane className={`w-4 h-4 ${enviado ? "rotate-45 text-white" : ""}`} />
                                </motion.button>

                                {error && (
                                    <span className="text-xs text-red-400">
                                        Hubo un problema al enviar el mensaje. Escríbeme directamente por WhatsApp o email.
                                    </span>
                                )}
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};