import { CheckCircle2, ArrowRight } from "lucide-react";

export function AboutSection() {
    const items = [
        "Experiencia real liderando operaciones y cierres B2B/B2C.",
        "Implementación 'end-to-end': diseño, ejecución y optimización continua.",
        "Filtrado radical: especialistas en procesos de alto ticket inmobiliario.",
        "Mentalidad partnership: cercanía al cliente medible y sin excusas."
    ];

    return (
        <section className="section-spacing border-t border-brand-border bg-[#111]">
            <div className="section-container">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

                    {/* Left: Copy */}
                    <div className="flex flex-col space-y-8 pr-0 lg:pr-8">
                        <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                            DE INMOBILIARIOS <br />
                            <span className="text-brand-accent">PARA INMOBILIARIOS</span>
                        </h2>

                        <p className="section-sub text-lg text-brand-text-secondary leading-relaxed">
                            Somos operadores inmobiliarios que convirtieron su experiencia en un sistema en modo SaaS.
                            Trabajamos como socio comercial integral en tus operaciones, no solo somos un proveedor de software.
                        </p>

                        <ul className="about-list space-y-4 pt-4">
                            {items.map((item, idx) => (
                                <li key={idx} className="flex items-start text-base text-brand-text-secondary">
                                    <CheckCircle2 className="mr-4 mt-0.5 h-5 w-5 shrink-0 text-brand-accent stroke-2" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-8">
                            <a href="#demo" className="btn-ghost group text-base px-6 py-3 border border-white/10 hover:border-white/30">
                                Acercarme al equipo
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Team Photo Placeholder */}
                    <figure className="team-photo relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl group">
                        <div className="absolute inset-0 bg-brand-accent/20 transition-opacity duration-500 group-hover:opacity-0 mix-blend-overlay z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Equipo fundador operando HOMY"
                            className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        />

                        {/* Overlay Tag */}
                        <div className="absolute bottom-6 left-6 z-20 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md p-4">
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                <p className="text-sm font-semibold text-white tracking-wide">Operando en 3 países</p>
                            </div>
                        </div>
                    </figure>

                </div>
            </div>
        </section>
    );
}
