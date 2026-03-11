import { ArrowRight, Instagram, Linkedin } from "lucide-react";

export function UrgencyBar() {
    return (
        <section className="bg-brand-accent py-8 md:py-12 border-y border-white/10">
            <div className="section-container">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                    <div className="flex-1 text-center md:text-left">
                        <p className="urgency-copy text-sm font-bold text-white mb-2 sm:text-base md:text-lg">
                            <span className="mr-2 text-yellow-300">⚡</span>
                            Restan sólo 4 cupos presenciales y remotos este mes.
                        </p>
                        <p className="text-white/80 text-sm">
                            Si no actúas, tus leads seguirán yéndose con tu competencia. Te confirmamos disponibilidad hoy mismo.
                        </p>
                    </div>

                    <div className="w-full max-w-[200px] flex-shrink-0 md:w-auto">
                        {/* Progress Bar Geometric */}
                        <div className="progress-bar mb-3 h-2 w-full overflow-hidden rounded-full bg-black/20">
                            <div className="h-full bg-white transition-all duration-1000 w-[40%]" />
                        </div>
                        <div className="flex justify-between text-xs font-bold text-white mb-4">
                            <span>Cupos llenos</span>
                            <span>4 disponibles</span>
                        </div>
                    </div>

                    <div className="w-full md:w-auto text-center md:text-right">
                        <a
                            href="#form"
                            className="btn-contrast group inline-flex w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-brand-accent transition-all hover:bg-gray-100 hover:shadow-lg focus:ring-4 focus:ring-white/30 md:w-auto"
                        >
                            Terminar mi reserva ahora
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-brand-border bg-brand-bg py-16 md:py-24">
            <div className="section-container">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">

                    {/* Brand & Final CTA */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-accent text-white font-bold text-lg">H</div>
                            <span className="brand text-xl font-bold tracking-tight text-white">HOMY</span>
                        </div>

                        <p className="text-sm font-medium text-brand-text-secondary mb-4 max-w-sm">
                            ¿Aún no te decides? Agenda sin compromiso y evaluemos tu caso puntualmente.
                        </p>

                        <a href="#form" className="footer-cta text-sm font-bold text-brand-accent hover:underline flex items-center">
                            Quiero evaluar mi caso <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                    </div>

                    {/* Contact & Social Links */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-right gap-6">
                        <address className="footer-contact not-italic text-sm text-brand-text-secondary">
                            <span className="block mb-1 font-semibold text-white">Contacto Directo</span>
                            <a href="mailto:contacto@aileadshield.com.mx" className="hover:text-white transition-colors">
                                contacto@aileadshield.com.mx
                            </a>
                            <br />
                            <span className="block mt-1">Transformando México</span>
                        </address>

                        <nav className="footer-links flex gap-4 text-brand-text-secondary">
                            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Bottom Legal bar */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-brand-text-secondary md:flex-row">
                    <small className="text-xs">
                        © {currentYear} HOMY by AI Lead Shield. Todos los derechos reservados.
                    </small>
                </div>
            </div>
        </footer>
    );
}
