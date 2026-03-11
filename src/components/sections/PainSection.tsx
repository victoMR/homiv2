import { AlertTriangle, Clock, CalendarX2 } from "lucide-react";

export function PainSection() {
    const cards = [
        {
            num: "01",
            icon: <Clock className="h-6 w-6 text-brand-accent mb-4" />,
            titulo: "Respondes tarde y el lead compra en otro lado",
            texto: "Si no contactas en minutos, el prospecto se enfría y la competencia toma la ventaja."
        },
        {
            num: "02",
            icon: <AlertTriangle className="h-6 w-6 text-yellow-500 mb-4" />,
            titulo: "Tu equipo persigue contactos en vez de cerrar",
            texto: "Sin filtro previo, el asesor pierde horas con prospectos sin perfil de compra."
        },
        {
            num: "03",
            icon: <CalendarX2 className="h-6 w-6 text-red-500 mb-4" />,
            titulo: "Tienes citas agendadas, pero no se presentan",
            texto: "Sin confirmaciones ni recordatorios automáticos, las citas se caen y el embudo se rompe."
        }
    ];

    return (
        <section className="section-spacing bg-brand-bg relative">
            <div className="section-container text-center lg:text-left">

                <div className="mx-auto max-w-3xl mb-16 lg:mx-0">
                    <p className="text-sm font-semibold uppercase tracking-wider text-brand-text-secondary mb-3">
                        El diagnóstico real
                    </p>
                    <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
                        POR QUÉ NO ESTÁS <span className="text-brand-accent">VENDIENDO LO QUE DEBERÍAS</span>
                    </h2>
                    <p className="pain-intro text-lg text-brand-text-secondary leading-relaxed">
                        No te faltan leads. Te falta un sistema que los convierta en citas y cierres. Si experimentas 1 de estos 3 puntos, HOMY transformará tus métricas.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {cards.map((card, idx) => (
                        <article
                            key={idx}
                            className="pain-card relative flex flex-col items-start rounded-2xl border border-white/5 bg-[#141414] p-8 text-left transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
                        >
                            <span className="absolute top-8 right-8 text-4xl font-black text-white/5">{card.num}</span>
                            {card.icon}
                            <h3 className="text-xl font-bold text-white mb-3 leading-snug pr-4">{card.titulo}</h3>
                            <p className="text-base text-brand-text-secondary">{card.texto}</p>
                        </article>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="#form" className="btn-secondary text-base lg:text-lg group">
                        Quiero dejar de perder leads
                    </a>
                </div>
            </div>
        </section>
    );
}
