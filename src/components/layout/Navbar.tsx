import { ArrowRight } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-bg/80 backdrop-blur-md">
            {/* Slots Bar (Top Urgency) */}
            <div className="flex h-10 items-center justify-center bg-[#111] px-4 text-xs sm:text-sm text-brand-text-secondary animate-fade-in border-b border-brand-border">
                <span className="slots-copy flex items-center justify-center text-center">
                    <span className="mr-2 text-yellow-400">⚡</span>
                    Solo abrimos 10 implementaciones al mes para asegurar acompañamiento 1:1. Hoy quedan 4 cupos.
                </span>
                <a
                    href="#form"
                    className="urgency-cta ml-3 hidden font-medium text-brand-accent hover:underline sm:inline-flex items-center"
                >
                    Asegurar mi diagnóstico <ArrowRight className="ml-1 h-3 w-3" />
                </a>
            </div>

            {/* Main Navbar */}
            <div className="section-container flex h-16 sm:h-20 items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Text Logo for HOMY */}
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-accent text-white font-bold text-lg">H</div>
                        <span className="brand text-lg font-bold tracking-tight text-white">HOMY</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
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

                {/* Action / CTA */}
                <div className="flex items-center">
                    <a href="#form" className="nav-cta btn-primary hidden sm:inline-flex">
                        Agendar diagnóstico gratuito
                    </a>
                    <a href="#form" className="nav-cta btn-primary sm:hidden px-4">
                        Agendar
                    </a>
                </div>
            </div>
        </header>
    );
}
