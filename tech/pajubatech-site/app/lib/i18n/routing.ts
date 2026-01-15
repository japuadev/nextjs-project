export const locales = ["pt", "en", "es"] as const;
export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "pt";

export const navItems = [
    { key: "about", href: "/sobre" },
    { key: "projects", href: "/projetos" },
    { key: "newsAwards", href: "/noticias" },
    { key: "summit", href: "/summit" },
    { key: "contact", href: "/contato" },
    { key: "donate", href: "/aquendar" },
] as const;
