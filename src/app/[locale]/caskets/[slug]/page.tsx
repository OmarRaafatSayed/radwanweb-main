import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { casketsData } from "@/data/caskets";
import CasketGallery from "@/components/CasketsSections/CasketGallery/CasketGallery";
import { ChevronLeft, ChevronRight, PhoneCall, ShieldCheck, Check } from "lucide-react";
import "./CasketDetail.scss";

interface Props {
    params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;

    const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale)
        ? (locale as "ar" | "en" | "ru" | "fr" | "es")
        : "ar";

    const casket = casketsData.find((c) => c.slug === slug);
    if (!casket) return {};

    const title = casket.title[currentLocale] || casket.title.en;
    const description = casket.description[currentLocale] || casket.description.en;
    const baseUrl = "https://radwanfs.com";

    return {
        title: `${title} | رضوان لنقل الجثامين`,
        description,
        openGraph: {
            title,
            description,
            url: `${baseUrl}/${currentLocale}/caskets/${slug}`,
            siteName: "Radwan Funeral Services",
            type: "article",
            images: [{ url: casket.mainImage, width: 1200, height: 630 }]
        },
        alternates: {
            languages: {
                ar: `/ar/caskets/${slug}`,
                en: `/en/caskets/${slug}`,
                ru: `/ru/caskets/${slug}`,
                fr: `/fr/caskets/${slug}`,
                es: `/es/caskets/${slug}`
            }
        }
    };
}

export default async function CasketDetailPage({ params }: Props) {
    const { locale, slug } = await params;

    const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale)
        ? (locale as "ar" | "en" | "ru" | "fr" | "es")
        : "ar";

    const isRtl = currentLocale === "ar";
    const t = await getTranslations({ locale: currentLocale, namespace: "CasketDetail" });

    const casket = casketsData.find((c) => c.slug === slug);
    if (!casket) {
        notFound();
    }

    const title = casket.title[currentLocale] || casket.title.en;
    const fullDesc = casket.fullDescription[currentLocale] || casket.fullDescription.en;
    const woodType = casket.woodType[currentLocale] || casket.woodType.en;
    const liningType = casket.liningType[currentLocale] || casket.liningType.en;
    const capacity = casket.weightCapacity[currentLocale] || casket.weightCapacity.en;
    const specs = casket.specifications[currentLocale] || casket.specifications.en;

    return (
        <main className="casket-detail-page">
            <section className="detail-hero">
                <div className="hero-inner">
                    <nav className="breadcrumbs">
                        <Link href="/caskets">{t("breadcrumbCaskets")}</Link>
                        {isRtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                        <span>{title}</span>
                    </nav>

                    <h1 className="page-title">{title}</h1>
                </div>
            </section>

            <section className="detail-body">
                <div className="body-grid">
                    <div className="main-content">
                        <CasketGallery mainImage={casket.mainImage} gallery={casket.gallery} title={title} />

                        <article className="info-card">
                            <h2 className="card-title">{t("descriptionTitle")}</h2>
                            <p className="desc-text">{fullDesc}</p>
                        </article>

                        {specs && specs.length > 0 && (
                            <article className="info-card">
                                <h2 className="card-title">{t("specificationsTitle")}</h2>
                                <ul className="specs-list">
                                    {specs.map((spec, idx) => (
                                        <li key={idx}>
                                            <Check size={16} className="check-icon" />
                                            <span>{spec}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        )}
                    </div>

                    <aside className="sidebar-content">
                        <div className="sticky-order-card">
                            <div className="card-header-price">
                                {casket.hasPrice && casket.price ? (
                                    <div className="price-wrapper">
                                        <span className="price-amount">${casket.price}</span>
                                    </div>
                                ) : (
                                    <span className="quote-tag">{t("requestQuoteBtn")}</span>
                                )}

                                {casket.iataCompliant && (
                                    <span className="iata-badge-clean" title={t("iataBadge")}>
                                        <ShieldCheck size={14} />
                                        <span>IATA</span>
                                    </span>
                                )}
                            </div>

                            <div className="specs-summary-table">
                                <div className="spec-item">
                                    <span className="spec-label">{t("woodLabel")}</span>
                                    <span className="spec-val">{woodType}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">{t("liningLabel")}</span>
                                    <span className="spec-val">{liningType}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">{t("capacityLabel")}</span>
                                    <span className="spec-val">{capacity}</span>
                                </div>
                            </div>

                            {casket.colors && casket.colors.length > 0 && (
                                <div className="options-group">
                                    <span className="group-label">{t("availableColors")}</span>
                                    <div className="colors-flex">
                                        {casket.colors.map((col) => (
                                            <span
                                                key={col.id}
                                                className="color-dot-item"
                                                style={{ backgroundColor: col.code }}
                                                title={col.name[currentLocale] || col.name.en}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {casket.dimensions && casket.dimensions.length > 0 && (
                                <div className="options-group">
                                    <span className="group-label">{t("availableSizes")}</span>
                                    <div className="sizes-list-clean">
                                        {casket.dimensions.map((dim) => (
                                            <div key={dim.id} className="size-row">
                                                <span className="size-title">{dim.label[currentLocale] || dim.label.en}</span>
                                                <span className="size-dim">{dim.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="action-buttons-group">
                                <a
                                    href={`https://wa.me/201557377897?text=${encodeURIComponent(
                                        `السلام عليكم، استفسار عن طلب التابوت: ${title}`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-action btn-wa"
                                >
                                    <span>{t("whatsappBtn")}</span>
                                </a>

                                <Link href="/contact" className="btn-action btn-main">
                                    <PhoneCall size={16} />
                                    <span>{t("requestBtn")}</span>
                                </Link>
                            </div>

                            <p className="sidebar-disclaimer">{t("quoteNotice")}</p>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}