import { Zap, Target, CalendarDays, BarChart3, RefreshCcw, Wrench, CheckCircle2, XCircle } from "lucide-react";

export function HomySection() {
    const features = [
        {
            icono: <Zap className="h-6 w-6 text-brand-accent mb-4" />,
            titulo: "Respuesta en menos de 5 minutos",
            texto: "Contacto inmediato de día o de noche. Nunca más un lead frío."
        },
        {
            icono: <Target className="h-6 w-6 text-brand-accent mb-4" />,
            titulo: "Precalificación automática 24/7",
            texto: "IA que filtra y segmenta antes de que tu asesor toque el teléfono."
        },
        {
            icono: <CalendarDays className="h-6 w-6 text-brand-accent mb-4" />,
            titulo: "Agenda con confirmación y recordatorio",
            texto: "El prospecto se agenda solo. Tu equipo aparece a cerrar."
        },
        {
            icono: <BarChart3 className="h-6 w-6 text-brand-accent mb-4" />,
            titulo: "Pipeline visual en tiempo real",
            texto: "Decisiones con datos reales, no con corazonadas."
        },
        {
            icono: <RefreshCcw className="h-6 w-6 text-brand-accent mb-4" />,
            titulo: "Nutrición y reactivación de base",
            texto: "Los que dijeron 'luego' vuelven al proceso solos."
        },
        {
            icono: <Wrench className="h-6 w-6 text-brand-accent mb-4" />,
            titulo: "Instalado y operando en 15 días",
            texto: "Instalamos, configuramos, capacitamos y acompañamos."
        }
    ];

    return (
        <section className="section-spacing bg-brand-bg relative overflow-hidden">

            {/* Background glow for contrast */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-brand-accent/5 blur-[150px] pointer-events-none" />

            <div className="section-container relative z-10">

                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <div className="homy-badge inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 mb-6 text-sm font-medium text-brand-text">
                        <span className="mr-2 h-2 w-2 rounded-full bg-brand-accent"></span> El sistema
                    </div>
                    <h2 className="homy-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
                        HOMY: sistema comercial que convierte leads en citas.
                    </h2>
                    <p className="homy-desc text-lg text-brand-text-secondary leading-relaxed max-w-2xl mx-auto">
                        Centraliza seguimiento, automatiza tareas críticas y le devuelve tiempo de cierre a tu equipo comercial.
                        <span className="block mt-2 font-medium text-white/70">Integración con tu operación actual, sin frenar ventas.</span>
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="feature-grid grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24">
                    {features.map((feat, idx) => (
                        <div key={idx} className="feature-card flex flex-col items-start p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-accent/30 transition-colors">
                            <div className="icon rounded-lg bg-brand-accent/10 p-3 ring-1 ring-inset ring-brand-accent/20 mb-4">
                                {feat.icono}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feat.titulo}</h3>
                            <p className="text-sm text-brand-text-secondary leading-relaxed">{feat.texto}</p>
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
                    <div className="rounded-2xl border border-white/10 bg-[#111] overflow-hidden shadow-2xl flex flex-col w-full">
                        {/* Headers (Desktop only, hidden on mobile) */}
                        <div className="hidden md:grid border-b border-white/10 bg-[#1A1A1A]" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                            <div className="p-4 sm:p-6 text-sm font-semibold uppercase tracking-wider text-brand-text-secondary">Proceso</div>
                            <div className="p-4 sm:p-6 text-sm font-semibold uppercase tracking-wider text-brand-text-secondary text-center">Sin HOMY</div>
                            <div className="p-4 sm:p-6 text-sm font-bold uppercase tracking-wider text-brand-accent text-center bg-brand-accent/5">Con HOMY</div>
                        </div>

                        <div className="divide-y divide-white/5 flex flex-col w-full">
                            {[
                                { label: "Tiempo de Respuesta", sin: "Horas/Días", con: "< 5 minutos (24/7)" },
                                { label: "Calificación de Leads", sin: "Manual/Desgastante", con: "Automática por IA" },
                                { label: "Agendamiento de Citas", sin: "Idas y vueltas por WhatsApp", con: "Autoservicio + Recordatorios" },
                                { label: "Seguimiento a largo plazo", sin: "Se olvidan y mueren", con: "Nutrición Constante Programada" }
                            ].map((row, i) => (
                                /* Layout shifts: Mobile = stacked rows with 2-col cards, Desktop = 3 equal columns */
                                <div key={i} className="flex flex-col md:grid md:grid-cols-3 hover:bg-white/[0.02] transition-colors p-5 md:p-0 border-b border-white/5 md:border-0 last:border-0 gap-4 md:gap-0">

                                    {/* Column 1: Label (Takes full width on mobile) */}
                                    <div className="md:p-4 lg:p-6 flex items-center justify-center md:justify-start text-sm md:text-base font-bold text-white text-center md:text-left">
                                        {row.label}
                                    </div>

                                    {/* Mobile: 2-column grid for the comparison. Desktop: contents inherited by grid-cols-3 */}
                                    <div className="grid grid-cols-2 md:contents gap-3 md:gap-0">

                                        {/* Column 2: Without HOMY */}
                                        <div className="md:p-4 lg:p-6 flex flex-col md:flex-row items-center md:justify-center text-center text-xs md:text-sm text-brand-text-secondary gap-2 bg-[#141414] md:bg-transparent rounded-xl p-4 md:rounded-none border border-white/5 md:border-0">
                                            <span className="md:hidden text-[10px] uppercase tracking-wider font-semibold opacity-50 mb-1">Sin HOMY</span>
                                            <XCircle className="h-5 w-5 md:h-4 md:w-4 text-red-500/70 shrink-0 mb-1 md:mb-0" />
                                            <span>{row.sin}</span>
                                        </div>

                                        {/* Column 3: With HOMY */}
                                        <div className="md:p-4 lg:p-6 flex flex-col md:flex-row items-center md:justify-center text-center text-xs md:text-sm font-semibold text-white bg-brand-accent/10 border border-brand-accent/20 md:border-y-0 md:border-r-0 md:border-l rounded-xl p-4 md:rounded-none">
                                            <span className="md:hidden text-[10px] uppercase tracking-wider font-bold text-brand-accent mb-1">Con HOMY</span>
                                            <CheckCircle2 className="h-5 w-5 md:h-4 md:w-4 text-brand-accent shrink-0 mb-1 md:mb-0" />
                                            <span>{row.con}</span>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <a href="#demo" className="btn-primary text-base lg:text-lg group">
                        Ver cómo transforma mi inmobiliaria
                    </a>
                </div>

            </div>
        </section>
    );
}
