export function StatsBar() {
    const stats = [
        { numero: "+300%", label: "más citas calificadas en promedio" },
        { numero: "<5 min", label: "tiempo de primera respuesta automatizada" },
        { numero: "80%", label: "leads recuperados con seguimiento inteligente" },
        { numero: "+$200M", label: "en ventas generadas por clientes HOMY" }
    ];

    return (
        <section className="border-y border-brand-border bg-[#151515] py-12">
            <div className="section-container">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, idx) => (
                        <article key={idx} className="stat-card flex flex-col items-center justify-center text-center sm:items-start sm:text-left">
                            <p className="stat-num text-4xl lg:text-5xl font-bold font-mono text-brand-accent mb-2">
                                {stat.numero}
                            </p>
                            <p className="stat-label text-sm font-medium text-brand-text-secondary max-w-[200px]">
                                {stat.label}
                            </p>
                        </article>
                    ))}
                </div>
                <div className="mt-8 text-center sm:text-left">
                    <p className="text-xs text-brand-text-secondary/60 italic">
                        * Resultados pueden variar según ticket, mercado y velocidad de implementación.
                    </p>
                </div>
            </div>
        </section>
    );
}
