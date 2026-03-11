import { Search, Settings, Users, Rocket } from "lucide-react";

export function StackSection() {
    const steps = [
        {
            num: "01",
            tag: "Días 1–3",
            icono: <Search className="h-5 w-5 text-brand-text-secondary" />,
            titulo: "Diagnóstico de tu proceso actual",
            texto: "Analizamos dónde se rompe tu embudo hoy: dónde llegan los leads, cómo responden, qué herramientas usan y dónde se pierden los cierres."
        },
        {
            num: "02",
            tag: "Días 4–9",
            icono: <Settings className="h-5 w-5 text-brand-text-secondary" />,
            titulo: "Instalación y configuración de HOMY",
            texto: "Configuramos los flujos específicos de tu negocio: automatizaciones, seguimientos y etapas del pipeline a medida."
        },
        {
            num: "03",
            tag: "Días 10–13",
            icono: <Users className="h-5 w-5 text-brand-text-secondary" />,
            titulo: "Capacitación y adopción del equipo",
            texto: "Tu equipo aprende el sistema en contexto real, con tus procesos. No teoría genérica — capacitación adaptada a cómo opera tu negocio."
        },
        {
            num: "04",
            tag: "Día 15 — Sistema en vivo",
            icono: <Rocket className="h-5 w-5 text-brand-accent" />,
            titulo: "Lanzamiento — HOMY operando",
            texto: "El sistema entra en operación. Te acompañamos el primer mes, ajustamos lo necesario y medimos los primeros resultados contigo."
        }
    ];

    return (
        <section className="section-spacing border-y border-white/5 bg-[#0F0F0F]">
            <div className="section-container">

                <div className="mx-auto max-w-3xl text-center mb-16">
                    <span className="inline-block rounded-full bg-brand-green/10 px-3 py-1 mb-4 text-xs font-semibold text-brand-accent border border-brand-accent/20">
                        Activo en 15 días
                    </span>
                    <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
                        ASÍ FUNCIONA <span className="text-brand-accent">HOMY EN TU NEGOCIO</span>
                    </h2>
                    <p className="section-sub text-lg text-brand-text-secondary leading-relaxed max-w-2xl mx-auto">
                        Pasas de desorden comercial a un sistema operativo predecible en 15 días, con acompañamiento 1:1.
                        <span className="block mt-2 text-sm italic">Tu equipo no necesita ser técnico; nosotros guiamos toda la adopción y onboarding.</span>
                    </p>
                </div>

                <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
                    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8 relative md:border-l-0 border-l border-white/10 ml-4 md:ml-0">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative mb-12 pl-8 md:mb-0 md:pl-0 md:flex md:flex-col md:p-6 md:border md:border-white/5 md:bg-white/[0.02] md:rounded-2xl md:hover:bg-white/5 transition-colors w-full">

                                {/* Timeline Dot (Mobile) */}
                                <span className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1A1A] ring-4 ring-[#0F0F0F] md:hidden" style={{ left: '-2.1rem' }}>
                                    {step.icono}
                                </span>

                                {/* Content */}
                                <div className="flex flex-col h-full pt-1 md:pt-0 w-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="step-tag inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-text-secondary">
                                            {step.tag}
                                        </span>
                                        <span className="hidden md:flex text-brand-text-secondary/50 font-bold text-2xl">{step.num}</span>
                                    </div>
                                    <h3 className="mb-2 text-xl font-medium text-white">{step.titulo}</h3>
                                    <p className="text-base text-brand-text-secondary flex-grow">{step.texto}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <a href="#form" className="btn-primary text-base lg:text-lg group px-10">
                        Quiero mi sistema operando en 15 días
                    </a>
                </div>
            </div>
        </section>
    );
}
