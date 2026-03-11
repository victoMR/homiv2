import { useState, useEffect } from "react";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const LEADS_TARGET = 124;
const CITAS_TARGET = 38;
const COUNT_DURATION_MS = 1400;
const COUNT_START_DELAY_MS = 350;

function useCountUp(target: number, startDelay: number, duration: number) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        const startTime = Date.now() + startDelay;
        let raf: number;
        const tick = () => {
            const now = Date.now();
            if (now < startTime) {
                raf = requestAnimationFrame(tick);
                return;
            }
            const elapsed = now - startTime;
            const t = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - t, 2);
            setValue(Math.round(easeOut * target));
            if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [target, startDelay, duration]);
    return value;
}

export function Hero() {
    const leadsCount = useCountUp(LEADS_TARGET, COUNT_START_DELAY_MS, COUNT_DURATION_MS);
    const citasCount = useCountUp(CITAS_TARGET, COUNT_START_DELAY_MS + 120, COUNT_DURATION_MS);

    return (
        <section className="relative overflow-hidden pt-4 pb-20 lg:pt-6 lg:pb-32">
            {/* Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-brand-accent/20 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-brand-green/10 blur-[100px]" />

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
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cyan">
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
                                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-green" /> Sin costo. Sin compromiso.</span>
                                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-accent" /> Implementación guiada.</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Column: HOMY PIPELINE — animado y en vivo */}
                    <div className="lg:col-span-5 relative mt-8 lg:mt-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
                        <div
                            className="glass-card relative w-full overflow-hidden rounded-2xl p-6 border-brand-accent/20 shadow-glass min-h-[380px] flex flex-col"
                            style={{ animation: "pipeline-card-live 4s ease-in-out infinite" }}
                        >
                            {/* Título y subtítulo — subtítulo con reveal */}
                            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">HOMY PIPELINE</h3>
                                    <p
                                        className="text-xs text-brand-accent mt-0.5"
                                        style={{ animation: "pipeline-subtitle-reveal 0.6s ease-out 0.3s forwards", opacity: 0 }}
                                    >
                                        Tu agenda llena. Métricas claras. La IA trabaja por ti.
                                    </p>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="h-2 w-2 rounded-full bg-red-500/90" style={{ animation: "pipeline-dot-live 1.2s ease-in-out infinite" }} />
                                    <div className="h-2 w-2 rounded-full bg-yellow-500/90" style={{ animation: "pipeline-dot-live 1.2s ease-in-out 0.2s infinite" }} />
                                    <div className="h-2 w-2 rounded-full bg-brand-green" style={{ animation: "pipeline-dot-live 1.2s ease-in-out 0.4s infinite" }} />
                                </div>
                            </div>

                            {/* Métricas — números que suben + cards que entran */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div
                                    className="rounded-xl bg-black/50 p-4 border border-brand-accent/20"
                                    style={{ animation: "pipeline-metric-in 0.5s ease-out 0.25s both", opacity: 0 }}
                                >
                                    <p className="text-xs text-brand-text-secondary mb-1 uppercase tracking-wider">Nuevos Leads</p>
                                    <p className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">{leadsCount}</p>
                                    <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                                        <div
                                            className="h-full rounded-full bg-brand-accent"
                                            style={{ animation: "pipeline-bar-fill-85 0.9s ease-out 0.5s forwards", width: 0 }}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="rounded-xl bg-black/50 p-4 border border-brand-green/20"
                                    style={{ animation: "pipeline-metric-in 0.5s ease-out 0.4s both", opacity: 0 }}
                                >
                                    <p className="text-xs text-brand-text-secondary mb-1 uppercase tracking-wider">Citas Agendadas</p>
                                    <p className="text-2xl sm:text-3xl font-bold text-brand-green font-mono tabular-nums">{citasCount}</p>
                                    <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                                        <div
                                            className="h-full rounded-full bg-brand-green"
                                            style={{ animation: "pipeline-bar-fill-45 0.9s ease-out 0.65s forwards", width: 0 }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Lista de leads — entran en secuencia */}
                            <p className="text-xs font-semibold text-brand-text-secondary uppercase tracking-wider mb-2">Próximas citas</p>
                            <div className="space-y-3 flex-1">
                                    <div className="flex items-center justify-between rounded-lg bg-white/5 p-3 hover:bg-white/10 transition-colors animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green font-bold text-sm">MR</div>
                                            <div>
                                                <p className="text-sm font-medium text-white">Mateo Ruiz</p>
                                                <p className="text-xs text-brand-green">Precalificado • Alta intención</p>
                                            </div>
                                        </div>
                                        <div className="bg-brand-accent/20 text-brand-accent text-xs px-2 py-1 rounded">Cita Hoy</div>
                                    </div>

                                    <div className="flex items-center justify-between rounded-lg bg-white/5 p-3 animate-fade-in" style={{ animationDelay: "0.7s", opacity: 0 }}>
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
                    </div>

                </div>
            </div>
        </section>
    );
}
