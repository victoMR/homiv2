import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
            {/* Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-brand-accent/20 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-green-500/10 blur-[100px]" />

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

                    {/* Left Column: Copy */}
                    <div className="lg:col-span-7 flex flex-col space-y-8 animate-fade-in pr-0 lg:pr-8">
                        <p className="hero-eyebrow text-sm font-semibold uppercase tracking-wider text-brand-accent">
                            Sistema comercial inmobiliario para equipos de ventas
                        </p>

                        <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                            <span className="block mb-2">Tus leads llegan.</span>
                            <span className="block mb-2 text-brand-text-secondary">Nadie los cierra.</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">
                                HOMY lo resuelve <br className="hidden sm:block" /> en 15 días.
                            </span>
                        </h1>

                        <p className="hero-sub text-lg text-brand-text-secondary max-w-2xl leading-relaxed">
                            Automatiza seguimiento, precalifica prospectos y agenda citas listas para cerrar sin aumentar tu equipo.
                        </p>

                        <div className="cta-group flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#form" className="btn-primary group text-base md:text-lg px-8 py-4">
                                Agendar mi diagnóstico gratuito
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a href="#demo" className="btn-secondary group text-base md:text-lg px-8 py-4">
                                <Play className="mr-2 h-5 w-5 text-brand-text-secondary transition-colors group-hover:text-white" />
                                Ver demo de 2 minutos
                            </a>
                        </div>

                        <div className="mt-4">
                            <p className="text-sm font-medium text-brand-text-secondary flex items-center gap-6">
                                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Sin costo. Sin compromiso.</span>
                                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-accent" /> Implementación guiada.</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Visual Mockup (Glassmorphism) */}
                    <div className="lg:col-span-5 relative mt-8 lg:mt-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
                        <div className="glass-card relative aspect-square w-full sm:aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-2xl p-6">

                            {/* Mockup Top Bar */}
                            <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                <div className="flex space-x-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="text-xs font-semibold tracking-wider text-brand-text-secondary">HOMY PIPELINE</div>
                            </div>

                            <div className="mt-6 flex flex-col gap-4">
                                {/* Stats row pseudo */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-lg bg-black/40 p-4 border border-white/5">
                                        <p className="text-xs text-brand-text-secondary mb-1">Nuevos Leads</p>
                                        <p className="text-xl font-bold text-white">124</p>
                                    </div>
                                    <div className="rounded-lg bg-black/40 p-4 border border-white/5">
                                        <p className="text-xs text-brand-text-secondary mb-1">Citas Agendadas</p>
                                        <p className="text-xl font-bold text-green-400">38</p>
                                    </div>
                                </div>

                                {/* List items pseudo */}
                                <div className="space-y-3 mt-2">
                                    <div className="flex items-center justify-between rounded-lg bg-white/5 p-3 hover:bg-white/10 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">MR</div>
                                            <div>
                                                <p className="text-sm font-medium text-white">Mateo Ruiz</p>
                                                <p className="text-xs text-green-400">Precalificado • Alta intención</p>
                                            </div>
                                        </div>
                                        <div className="bg-brand-accent/20 text-brand-accent text-xs px-2 py-1 rounded">Cita Hoy</div>
                                    </div>

                                    <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm">AL</div>
                                            <div>
                                                <p className="text-sm font-medium text-white">Ana Lópéz</p>
                                                <p className="text-xs text-brand-text-secondary">Seguimiento Automático 2/4</p>
                                            </div>
                                        </div>
                                        <div className="bg-white/10 text-brand-text-secondary text-xs px-2 py-1 rounded">Respondió</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Element Mock */}
                            <div className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-[#1A1A1A] p-4 shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white">+1 Venta Cerrada</p>
                                        <p className="text-[10px] text-brand-text-secondary">Hace 2 minutos</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
