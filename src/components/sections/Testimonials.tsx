import { Play, Star, ChevronRight, CheckCircle2 } from "lucide-react";

export function Testimonials() {
    const cards = [
        {
            resultado_badge: "Citas triplicadas · Desarrollo vendido",
            cita: "Llegamos con un desorden total. Los leads se morían sin seguimiento. Triplicamos las citas y en 3 meses vendimos todos los departamentos. Ya vamos con el segundo desarrollo.",
            nombre: "Roberto Mendoza",
            rol: "Director Comercial · Desarrollos MZS",
            avatar: "RM"
        },
        {
            resultado_badge: "Precalificación automática activa",
            cita: "El sistema me filtra quién sí es candidato y quién no. Ya no pierdo tiempo con prospectos que no aplican. Varias captaciones de inversores cerradas en semanas.",
            nombre: "Daniela Torres",
            rol: "CEO · Flipping Capital MX",
            avatar: "DT"
        },
        {
            resultado_badge: "Más citas · Más cierres directos",
            cita: "Antes manejaba todo a mano en WhatsApp. Con HOMY ahora tengo visibilidad total de mi proceso y mis cierres aumentaron de manera consistente desde el mes 2.",
            nombre: "Alejandro Rivadeneyra",
            rol: "Comercializador Inmobiliario · Guadalajara",
            avatar: "AR"
        }
    ];

    return (
        <section className="section-spacing bg-brand-bg relative">
            <div className="section-container">

                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <span className="inline-block rounded-full bg-green-500/10 px-3 py-1 mb-4 text-xs font-semibold text-green-400 border border-green-500/20">
                        Resultados Reales
                    </span>
                    <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
                        LO QUE DICEN NUESTROS <span className="text-brand-accent">PARTNERS</span>
                    </h2>
                    <p className="section-sub text-lg text-brand-text-secondary leading-relaxed max-w-2xl mx-auto">
                        Casos con nombres, empresas y métricas concretas de retorno de inversión.
                        <span className="block mt-2 font-medium italic text-white/70">Solicita referencias de estos casos y más de nuestro portafolio en tu asesoría.</span>
                    </p>
                </div>

                {/* Video Principal */}
                <figure className="video-testimonial aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden relative group cursor-pointer border border-white/10 shadow-2xl bg-[#0A0A0A] mb-16">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                        alt="Caso de éxito Alejandro Rivadeneyra"
                        className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                        <div className="flex items-center gap-4">
                            <button aria-label="Reproducir testimonio" className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent text-white shadow-lg transition-transform group-hover:scale-110">
                                <Play className="ml-1 h-8 w-8 fill-current" />
                            </button>
                            <div>
                                <p className="text-xl font-bold text-white">Alejandro Rivadeneyra</p>
                                <p className="text-sm font-medium text-brand-text-secondary">Comercializador · Capacitado con HOMY</p>
                            </div>
                        </div>
                    </div>
                </figure>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, idx) => (
                        <article key={idx} className="testimonial-card flex flex-col p-8 rounded-2xl bg-[#141414] border border-white/5 hover:bg-white/[0.03] transition-colors relative">
                            <span className="result-badge absolute top-0 -translate-y-1/2 left-8 bg-brand-accent/20 text-brand-accent text-xs font-bold px-3 py-1 rounded-full border border-brand-accent/30 inline-flex items-center">
                                <CheckCircle2 className="h-3 w-3 mr-1" /> {card.resultado_badge}
                            </span>

                            <div className="flex items-center gap-1 mb-6 mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>

                            <blockquote className="quote text-base text-brand-text-secondary leading-relaxed mb-8 flex-grow">
                                "{card.cita}"
                            </blockquote>

                            <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent text-white font-bold tracking-wider">
                                    {card.avatar}
                                </div>
                                <div>
                                    <p className="author text-sm font-bold text-white">{card.nombre}</p>
                                    <p className="role text-xs text-brand-text-secondary">{card.rol}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <a href="#form" className="btn-secondary group flex items-center justify-between min-w-[300px]">
                        Descubrir si puedo replicar esto
                        <ChevronRight className="ml-2 h-4 w-4 text-brand-text-secondary group-hover:text-white" />
                    </a>
                </div>

            </div>
        </section>
    );
}
