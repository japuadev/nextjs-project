import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !(locales as readonly string[]).includes(locale)) {
        locale = defaultLocale;
    }

    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch {
        messages = (await import(`../../messages/${defaultLocale}.json`)).default;
    }

    return {
        locale,
        messages
    };
});
