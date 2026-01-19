import { useTranslations } from "next-intl";
import ContactSection from "@/components/content/ContactSection";

export default function HomePage() {
    const t = useTranslations("home");

    return (
        <div className="flex flex-col gap-0 pb-10">
            {/* HERO SECTION */}
            <section className="relative flex min-h-[700px] flex-col justify-center overflow-hidden bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 px-6 pt-40 text-white">
                {/* Background Pattern/Image Overlay can go here */}

                <div className="relative mx-auto max-w-7xl w-full flex justify-start">
                    <div className="max-w-3xl text-left">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight">
                            {t("title")}
                        </h1>
                        <p className="mt-6 max-w-lg text-lg text-white font-medium sm:text-xl">
                            {t("subtitle")}
                        </p>

                        <div className="mt-10 flex justify-start gap-4">
                            <a
                                className="inline-flex rounded-full bg-white px-8 py-3 text-base font-bold text-purple-700 hover:bg-slate-100 shadow-lg transition-transform hover:scale-105"
                                href="#projects"
                            >
                                Conheça nossos projetos
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTIONS GRID */}
            <section className="mx-auto max-w-6xl px-6 py-16 grid gap-8 md:grid-cols-3">
                {["Projetos", "Notícias", "Summit"].map((title) => (
                    <div key={title} className="rounded-2xl border border-slate-200 p-6">
                        <div className="font-medium">{title}</div>
                        <div className="mt-2 text-sm text-slate-600">
                            Bloco inicial. Depois vamos alimentar via Contentful.
                        </div>
                    </div>
                ))}
            </section>

            {/* CONTACT SECTION */}
            <ContactSection />
        </div >
    );
}
