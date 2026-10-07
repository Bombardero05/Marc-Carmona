import { Navbar } from "./components/Navbar";
import { Cabecera } from "./components/Cabecera";
import { SobreMi } from "./components/SobreMi";
import { Proyectos } from "./components/Proyectos";
import { Contacto } from "./components/ContactO";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white selection:bg-red-500 selection:text-white">
      <Navbar />
      <main className="w-full flex flex-col">
        <Cabecera />
        <SobreMi />
        <Proyectos />
        <Contacto />
        <Footer />
      </main>
    </div>
  );
}