import "@/styles/global.scss";
import { Almarai, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale, getLocale } from "next-intl/server";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import { Metadata } from "next";

const arabicFont = Almarai({
    subsets: ["arabic"],
    weight: ["300", "400", "700"],
    variable: "--font-arabic",
    display: "swap", // Fix: prevent CLS from font loading
});

const baseFont = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-base",
    display: "swap",
});

// Global metadata base — all relative URLs in generateMetadata resolve against this
export const metadata: Metadata = {
    metadataBase: new URL("https://radwanfs.com"),
};

export default async function LocaleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html
            lang={locale}
            dir={locale === "ar" ? "rtl" : "ltr"}
            className={`${arabicFont.variable} ${baseFont.variable}`}
        >
            <body>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <Header />
                    {children}
                    <FloatingActions />
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}