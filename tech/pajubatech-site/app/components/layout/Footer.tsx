import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative bg-[#05080f] text-slate-300 overflow-hidden">
            {/* Top Gradient Border */}
            <div className="h-2 w-full bg-gradient-to-r from-[#9333ea] via-[#7c3aed] to-[#f97316]" />

            <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-6">
                        <div className="relative h-32 w-64">
                            <Image
                                src="/images/logo-pajuba.png"
                                alt="Pajubá Tech"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <div>
                            <p className="text-sm leading-relaxed text-slate-400">
                                Transformando vidas através da tecnologia e educação inclusiva.
                            </p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-semibold text-white">Navegação</h3>
                        <nav className="flex flex-col gap-3">
                            {["Sobre", "Missão", "Programas", "Impacto"].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="text-sm hover:text-white transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Programs */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-semibold text-white">Programas</h3>
                        <nav className="flex flex-col gap-3">
                            {["Formação", "Empregabilidade", "Aceleração", "Comunidade"].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="text-sm hover:text-white transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-semibold text-white">Contato</h3>
                        <div className="flex flex-col gap-4 text-sm">
                            <a
                                href="mailto:contatopajubatech@gmail.com"
                                className="flex items-center gap-3 hover:text-white transition-colors"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                contatopajubatech@gmail.com
                            </a>
                            <a
                                href="https://www.linkedin.com/company/pajub%C3%A1-tech/"
                                className="flex items-center gap-3 hover:text-white transition-colors"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                                LinkedIn
                            </a>
                            <a
                                href="https://instagram.com/pajubatech"
                                target="_blank"
                                className="flex items-center gap-3 hover:text-white transition-colors"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
                                </svg>
                                @pajubatech
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-16 border-t border-white/5 pt-8 text-center text-xs text-slate-500">
                    <p>© 2026 Pajubá Tech. Todos os direitos reservados. Organização da Sociedade Civil.</p>
                </div>
            </div>
        </footer>
    );
}
