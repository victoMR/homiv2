import { CheckCircle2 } from "lucide-react";

export function FormSection() {
    const benefits = [
        "Análisis rápido de flujo comercial.",
        "Detección exacta de pérdida de leads.",
        "Identificación de cuellos de botella para cierres preventivos.",
        "Diagnóstico honesto: Si HOMY es el 'fit' perfecto para tu operación actual."
    ];

    return (
        <section id="form" className="section-spacing bg-[#1A1A1A] relative border-t border-brand-border">

            {/* Background decoration */}
            <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-brand-accent/5 to-transparent pointer-events-none" />

            <div className="section-container relative z-10">
                <div className="mx-auto max-w-6xl grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-start">

                    {/* Left: Value Proposition Copy */}
                    <div className="flex flex-col space-y-8 animate-fade-in pt-4 lg:pt-12 lg:pr-12">
                        <div className="mb-2">
                            <span className="inline-block rounded-full bg-white/10 px-3 py-1 font-semibold uppercase tracking-wider text-xs text-brand-text-secondary border border-white/5">
                                Diagnóstico gratuito
                            </span>
                        </div>

                        <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                            <span className="text-brand-accent mb-2 block">Agenda tu diagnóstico</span>
                            corporativo en 30 min.
                        </h2>

                        <p className="section-sub text-lg text-brand-text-secondary leading-relaxed">
                            En 30 minutos detectaremos fugas de conversión de tu embudo actual con un plan de acción directo.
                        </p>

                        <ul className="form-benefits space-y-4 pt-4">
                            {benefits.map((item, idx) => (
                                <li key={idx} className="flex items-start text-base text-brand-text-secondary">
                                    <CheckCircle2 className="mr-4 mt-0.5 h-6 w-6 shrink-0 text-brand-accent stroke-2" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6 border-t border-white/5">
                            <p className="form-trust text-xs font-medium text-brand-text-secondary flex items-center gap-2">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-green/20">
                                    <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
                                </span>
                                Sin compromisos ocultos. Asegura tu reserva recibiendo la invitación.
                            </p>
                        </div>
                    </div>

                    {/* Right: Booking Form Widget Container */}
                    <div className="relative animate-fade-in" style={{ animationDelay: '150ms' }}>
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-brand-green/20 blur-xl opacity-50" />
                        <div className="relative rounded-2xl border border-white/10 bg-[#0F0F0F] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                            {/* Fake browser header for aesthetic */}
                            <div className="flex h-10 items-center justify-between border-b border-white/5 bg-[#151515] px-4 rounded-t-xl mb-4">
                                <div className="flex space-x-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                                    <div className="h-3 w-3 rounded-full bg-brand-green/80" />
                                </div>
                                <div className="text-xs font-semibold text-brand-text-secondary">Conectar con Especialista</div>
                            </div>

                            {/* LeadConnector / Calendario de reservas — scroll e interacción habilitados */}
                            <div className="min-h-[600px] w-full rounded-lg bg-[#0F0F0F]">
                                <iframe
                                    src="https://api.leadconnectorhq.com/widget/booking/l4MFnsp6eATJEWMSqGLJ"
                                    style={{ width: "100%", border: "none", minHeight: "700px" }}
                                    scrolling="yes"
                                    id="l4MFnsp6eATJEWMSqGLJ_1773254405495"
                                    title="Agendar diagnóstico"
                                    className="w-full min-h-[700px] h-[700px] rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
