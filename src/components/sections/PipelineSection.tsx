import { Smartphone, Bot, CalendarCheck, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Conectamos tus redes o tu teléfono",
    desc: "Instagram, WhatsApp, web o tu línea. Todo en un solo lugar.",
  },
  {
    icon: Bot,
    title: "Un agente de IA contesta por ti",
    desc: "Entra al chat o a tu teléfono, responde, califica y no pierde ningún lead.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda y recopila la info por ti",
    desc: "Citas listas, datos del prospecto y notas. Todo ordenado sin que muevas un dedo.",
  },
  {
    icon: BarChart3,
    title: "Tú solo ves agendas llenas y métricas",
    desc: "Dashboard claro: leads, citas, conversiones. Gráficos y números que importan.",
  },
];

const STEP_DURATION = 2; // segundos por paso
const TOTAL_DURATION = steps.length * STEP_DURATION; // 8s

export function PipelineSection() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-14 lg:mb-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">
            Cómo funciona
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            El pipeline que trabaja <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-cyan">por ti</span>
          </h2>
          <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">
            Llega el lead → la IA contesta → agenda por ti → tú ves métricas. Así de simple.
          </p>
        </div>

        {/* Escritorio: flujo animado horizontal — llega, pasa, pasa, pasa */}
        <div className="hidden lg:block relative">
          {/* Línea que conecta los pasos */}
          <div
            className="absolute top-[72px] left-[12.5%] right-[12.5%] h-0.5 rounded-full bg-gradient-to-r from-brand-accent/30 via-brand-cyan/30 to-brand-green/30"
            aria-hidden
          />
          {/* Punto que recorre el pipeline (el "lead") — llega, pasa, pasa, pasa */}
          <div
            className="absolute top-[68px] w-5 h-5 rounded-full bg-brand-accent border-2 border-white shadow-lg shadow-brand-accent/50 -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: `pipeline-dot ${TOTAL_DURATION}s ease-in-out infinite`,
              left: "12.5%",
            }}
            aria-hidden
          />

          <div className="grid grid-cols-4 gap-4 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const delay = idx * STEP_DURATION;
              return (
                <div
                  key={idx}
                  className="glass-card w-full p-6 flex flex-col items-center text-center relative pipeline-step-card"
                  style={{ animationDelay: `${delay}s` }}
                >
                  <div className="flex h-16 w-16 rounded-2xl bg-brand-accent/15 border border-brand-accent/25 items-center justify-center text-brand-accent mb-4 pipeline-step-icon">
                    <Icon className="h-8 w-8" />
                  </div>
                  <span className="text-xs font-bold text-brand-cyan/90 mb-2">Paso {idx + 1}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-brand-text-secondary">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Móvil/tablet: cards apiladas con flechas animadas */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className="glass-card w-full p-6 flex flex-col items-center text-center pipeline-step-card"
                  style={{ animationDelay: `${idx * STEP_DURATION}s` }}
                >
                  <div className="flex h-14 w-14 rounded-2xl bg-brand-accent/15 border border-brand-accent/25 items-center justify-center text-brand-accent mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-bold text-brand-cyan/90 mb-2">Paso {idx + 1}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-brand-text-secondary">{step.desc}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex flex-col items-center py-2 text-brand-accent/60">
                    <ArrowRight className="h-6 w-6 rotate-90 animate-bounce" style={{ animationDuration: "1.5s" }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-brand-text-secondary text-sm mb-2">Sin instalaciones complicadas. En 15 días estás vendiendo más.</p>
          <a href="#form" className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:underline">
            Ver mi pipeline en acción
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
