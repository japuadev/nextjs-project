"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { navItems, type AppLocale, locales } from "@/lib/i18n/routing";
import { usePathname } from "next/navigation";
import Image from "next/image";

const LOCALE_LABEL: Record<AppLocale, string> = {
    pt: "PT",
    en: "EN",
    es: "ES"
};

export default function Header({ locale }: { locale: AppLocale }) {
    const t = useTranslations("nav");
    const c = useTranslations("common");
    const h = useTranslations("home");
    const pathname = usePathname();

    // pathname vem como "/pt/..." no App Router
    // Vamos trocar o prefixo de locale mantendo o resto da rota
    const pathWithoutLocale = pathname.replace(/^\/(pt|en|es)(?=\/|$)/, "");

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const id = href.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        // Header Transparent & Absolute
        <header className="absolute top-0 left-0 z-50 w-full bg-transparent">
            <div className="mx-auto max-w-7xl px-6 pt-6">
                {/* Bottom Row: Logo, Nav, Actions */}
                <div className="flex items-center justify-between py-4">
                    {/* 1. Logo (Left) */}
                    <div className="flex shrink-0 items-center">
                        <Link href={`/${locale}`} className="text-2xl font-black tracking-tight text-white hover:opacity-90">
                            Pajubá Tech
                        </Link>
                    </div>

                    {/* 2. Navigation (Center) */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <div key={item.key} className="group relative">
                                <Link
                                    href={item.href}
                                    onClick={(e) => handleScroll(e, item.href)}
                                    className="flex items-center gap-1 text-base font-bold text-white transition-opacity hover:opacity-80 py-2"
                                >
                                    {t(item.key)}
                                    {(item.key === 'about' || item.key === 'projects') && (
                                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {(item.key === 'about' || item.key === 'projects') && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 hidden w-56 pt-2 group-hover:block">
                                        <div className="overflow-hidden rounded-xl border border-white/20 bg-white/95 backdrop-blur-sm shadow-2xl">
                                            <div className="flex flex-col py-1">
                                                {item.key === 'about' && (
                                                    <>
                                                        <DropdownLink href="#history">Nossa História</DropdownLink>
                                                        <DropdownLink href="#team">Nosso Time</DropdownLink>
                                                        <DropdownLink href="#transparency">Transparência</DropdownLink>
                                                    </>
                                                )}
                                                {item.key === 'projects' && (
                                                    <>
                                                        <DropdownLink href="#project1">Formação Tech</DropdownLink>
                                                        <DropdownLink href="#project2">Empregabilidade</DropdownLink>
                                                        <DropdownLink href="#project3">Hackathons</DropdownLink>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* 3. Actions (Right) */}
                    <div className="flex shrink-0 items-center gap-4">
                        <div className="flex items-center overflow-hidden rounded-full border border-white/30 bg-black/20 backdrop-blur-sm">
                            {locales.map((l) => (
                                <Link
                                    key={l}
                                    href={`/${l}${pathWithoutLocale || ""}`}
                                    className={`px-5 py-2.5 text-xs font-bold transition-colors ${l === locale
                                        ? "bg-white text-purple-900"
                                        : "text-white hover:bg-white/20"
                                        }`}
                                >
                                    {LOCALE_LABEL[l]}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden absolute right-6 top-10 text-white">
                {/* Hamburger Icon */}
            </div>
        </header>
    );
}

function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="block px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-700"
        >
            {children}
        </Link>
    );
}
