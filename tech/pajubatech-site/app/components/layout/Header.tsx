"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { navItems, type AppLocale, locales } from "@/lib/i18n/routing";
import { usePathname } from "next/navigation";

const LOCALE_LABEL: Record<AppLocale, string> = {
    pt: "PT",
    en: "EN",
    es: "ES"
};

export default function Header({ locale }: { locale: AppLocale }) {
    const t = useTranslations("nav");
    const c = useTranslations("common");
    const pathname = usePathname();

    // pathname vem como "/pt/..." no App Router
    // Vamos trocar o prefixo de locale mantendo o resto da rota
    const pathWithoutLocale = pathname.replace(/^\/(pt|en|es)(?=\/|$)/, "");

    return (
        <header className="border-b border-slate-200">
            <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
                <Link href={`/${locale}`} className="font-semibold tracking-tight">
                    Pajubá Tech
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {navItems.map((item) => (
                        <Link key={item.key} href={`/${locale}${item.href}`} className="text-slate-700 hover:text-slate-900">
                            {t(item.key)}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        href="https://apoia.se/"
                        target="_blank"
                        className="hidden sm:inline-flex rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50"
                    >
                        {c("donate")}
                    </Link>

                    <div className="flex items-center rounded-lg border border-slate-200 overflow-hidden">
                        {locales.map((l) => (
                            <Link
                                key={l}
                                href={`/${l}${pathWithoutLocale || ""}`}
                                className={`px-3 py-2 text-sm ${l === locale ? "bg-slate-900 text-white" : "bg-white text-slate-700 hover:bg-slate-50"}`}
                            >
                                {LOCALE_LABEL[l]}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* menu mobile simples */}
            <div className="md:hidden border-t border-slate-200">
                <div className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {navItems.map((item) => (
                        <Link key={item.key} href={`/${locale}${item.href}`} className="text-slate-700 hover:text-slate-900">
                            {t(item.key)}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
