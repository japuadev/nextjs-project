import { useTranslations } from 'next-intl';

export default function ContactSection() {
    const t = useTranslations('contact');

    return (
        <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                {/* Left Column: Info */}
                <div className="flex flex-col justify-start">
                    <span className="mb-4 text-xs font-bold uppercase tracking-widest text-purple-600">
                        {t('label')}
                    </span>
                    <h2 className="mb-6 text-4xl font-extrabold text-slate-900 sm:text-5xl">
                        {t('title')}
                    </h2>
                    <p className="mb-12 text-lg leading-relaxed text-slate-600">
                        {t('description')}
                    </p>

                    <div className="space-y-8">
                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">{t('info.email')}</h3>
                                <p className="text-slate-600">contatopajubatech@gmail.com</p>
                            </div>
                        </div>

                        {/* Instagram */}
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.319.975.975 1.258 2.242 1.32 3.608.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.062 1.366-.343 2.633-1.319 3.608-.975.975-2.242 1.259-3.608 1.32-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-1.36-.062-2.633-.343-3.607-1.32-.975-.975-1.259-2.241-1.32-3.607-.058-1.266-.07-1.645-.07-4.85 0-3.204.012-3.584.07-4.849.062-1.366.343-2.633 1.32-3.608.975-.975 2.242-1.259 3.607-1.32 1.265-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">{t('info.instagram')}</h3>
                                <p className="text-slate-600">@pajubatech</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">{t('info.location')}</h3>
                                <p className="text-slate-600">{t('info.locationValue')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="relative rounded-3xl bg-purple-50 p-8 lg:p-12">
                    <form className="flex flex-col gap-6">
                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-bold text-slate-900">
                                {t('form.name')}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder={t('form.namePlaceholder')}
                                className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-bold text-slate-900">
                                {t('form.email')}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder={t('form.emailPlaceholder')}
                                className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-bold text-slate-900">
                                {t('form.message')}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder={t('form.messagePlaceholder')}
                                className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="mt-2 w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl active:scale-95"
                        >
                            {t('form.submit')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
