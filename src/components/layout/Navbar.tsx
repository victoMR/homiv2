import { ArrowRight } from "lucide-react";

const ANNOUNCEMENT_HEIGHT = "2.5rem"; // h-10
const GAP_BETWEEN_BAR_AND_HEADER = "1.25rem"; // mt-5 — header más abajo, centrado en la zona

export function Navbar() {
    return (
        <>
            {/* Barra anuncio: barra simple fija arriba, separada del header */}
            <div className="fixed left-0 right-0 top-0 z-[60] flex h-10 items-center justify-center border-b border-brand-border bg-brand-bg-secondary px-4 text-center text-xs text-brand-text-secondary animate-fade-in sm:text-sm">
                <span className="slots-copy flex flex-1 items-center justify-center">
                    <span className="mr-2 text-yellow-400">⚡</span>
                    Solo abrimos 10 implementaciones al mes para asegurar acompañamiento 1:1. Hoy quedan 4 cupos.
                </span>
                <a
                    href="#form"
                    className="urgency-cta ml-3 hidden shrink-0 font-medium text-brand-accent hover:underline sm:inline-flex items-center"
                >
                    Asegurar mi diagnóstico <ArrowRight className="ml-1 h-3 w-3" />
                </a>
            </div>

            {/* Main Navbar: sticky — se queda fijo bajo la barra al hacer scroll */}
            <header
                className="sticky z-50 mx-2 mt-5 w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 shadow-glass backdrop-blur-lg sm:mx-auto min-w-0"
                style={{
                    position: "sticky",
                    top: `calc(${ANNOUNCEMENT_HEIGHT} + ${GAP_BETWEEN_BAR_AND_HEADER})`,
                }}
            >
                <div className="flex h-16 sm:h-20 items-center justify-between gap-2 px-3 sm:px-4 md:px-8 max-w-[1200px] mx-auto min-w-0">
                    <div className="flex items-center gap-2 min-w-0 shrink-0">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-accent text-white font-bold text-lg">H</div>
                        <span className="brand text-lg font-bold tracking-tight text-white truncate">HOMY</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8 shrink-0">
                        <a href="#como-funciona" className="nav-link text-sm font-medium text-brand-text-secondary hover:text-white transition-colors">
                            Cómo funciona
                        </a>
                        <a href="#resultados" className="nav-link text-sm font-medium text-brand-text-secondary hover:text-white transition-colors">
                            Resultados
                        </a>
                        <a href="#equipo" className="nav-link text-sm font-medium text-brand-text-secondary hover:text-white transition-colors">
                            Equipo
                        </a>
                    </nav>

                    <div className="flex items-center shrink-0">
                        <a href="#form" className="nav-cta btn-primary hidden sm:inline-flex">
                            Agendar diagnóstico gratuito
                        </a>
                        <a href="#form" className="nav-cta btn-primary inline-flex sm:hidden px-3 py-2 text-sm whitespace-nowrap">
                            Agendar
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}
