import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail, Send } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#05080f] text-slate-300 overflow-hidden font-sans">
            {/* Top Gradient Border */}
            <div className="h-0.5 w-full bg-slate-800" />

            <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 xl:gap-24">
                    {/* 1. Brand Section */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
                                Pajubá Tech
                            </h2>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Transformando vidas através da tecnologia e educação inclusiva.
                        </p>
                    </div>

                    {/* 2. Links Rápidos */}
                    <div className="flex flex-col gap-6 lg:items-center">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-lg font-bold text-white">Links Rápidos</h3>
                            <nav className="flex flex-col gap-3">
                                <FooterLink href="#about">Sobre</FooterLink>
                                <FooterLink href="#projects">Projetos</FooterLink>
                                <FooterLink href="#projects">Aquenda</FooterLink>
                                <FooterLink href="#impact">Apoie</FooterLink>
                            </nav>
                        </div>
                    </div>

                    {/* 3. Participe */}
                    <div className="flex flex-col gap-6 lg:items-center">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-lg font-bold text-white">Participe</h3>
                            <nav className="flex flex-col gap-3">
                                <FooterLink href="#">Seja Voluntário</FooterLink>
                                <FooterLink href="https://apoia.se/">Faça uma Doação</FooterLink>
                                <FooterLink href="#">Seja Parceiro</FooterLink>
                                <FooterLink href="#contact">Trabalhe Conosco</FooterLink>
                            </nav>
                        </div>
                    </div>

                    {/* 4. Redes Sociais */}
                    <div className="flex flex-col gap-6 lg:items-end">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-lg font-bold text-white">Redes Sociais</h3>
                            <div className="flex gap-4">
                                <SocialLink href="https://instagram.com/pajubatech" icon={<Instagram size={18} />} />
                                <SocialLink href="https://www.facebook.com/people/Pajub%C3%A1-Tech/61577049172942/" icon={<Facebook size={18} />} />
                                <SocialLink href="https://www.linkedin.com/company/pajubá-tech/" icon={<Linkedin size={18} />} />
                                <SocialLink href="mailto:contatopajubatech@gmail.com" icon={<Mail size={18} />} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-20 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
                    <p>© 2026 Pajubá Tech. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    const isExternal = href.startsWith('http');
    const Component = isExternal ? 'a' : Link;

    return (
        <Component
            href={href}
            target={isExternal ? "_blank" : undefined}
            className="text-sm text-slate-400 hover:text-white transition-colors w-fit"
        >
            {children}
        </Component>
    );
}
