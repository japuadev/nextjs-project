import { useTranslations } from "next-intl";

export default function HomePage() {
    const t = useTranslations("home");

    return (
        <div className="flex flex-col gap-10">
            <section className="rounded-2xl border border-slate-200 p-8">
                <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
                <p className="mt-3 text-slate-700">{t("subtitle")}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                    <a
                        className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
                        href="https://apoia.se/"
                        target="_blank"
                    >
                        Apoiar no Apoia.se
                    </a>
                    <a
                        className="inline-flex rounded-lg border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50"
                        href="#"
                    >
                        Agendar
                    </a>
                </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
                {["Projetos", "Notícias", "Summit"].map((title) => (
                    <div key={title} className="rounded-2xl border border-slate-200 p-6">
                        <div className="font-medium">{title}</div>
                        <div className="mt-2 text-sm text-slate-600">
                            Bloco inicial. Depois vamos alimentar via Contentful.
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
