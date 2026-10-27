import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function GlobalNotFound() {
    const headersList = await headers();
    const referer = headersList.get("referer") || "";
    const xUrl = headersList.get("x-url") || "";

    const supportedLocales = ["ar", "en", "ru", "fr", "es"];
    const fullPath = `${referer} ${xUrl}`;

    const matchedLocale = supportedLocales.find((locale) =>
        fullPath.includes(`/${locale}`) || fullPath.includes(`/${locale}/`)
    );

    const targetLocale = matchedLocale || "en";

    redirect(`/${targetLocale}/not-found`);
}