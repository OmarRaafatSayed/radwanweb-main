import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { urnsData } from "@/data/urnsData";
import { ChevronLeft, ChevronRight, PhoneCall, ShieldCheck, Check } from "lucide-react";
import "./UrnDetail.scss";
import UrnGallery from "@/components/UrnsSections/UrnGallery/UrnGallery";

interface Props {
    params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;

    const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale)
        ? (locale as "ar" | "en" | "ru" | "fr" | "es")
        : "ar";

    const urn = urnsData.find((u) => u.slug === slug);
    if (!urn) return {};

    const title = urn.title[currentLocale] || urn.title.en;
    const description = urn.description[currentLocale] || urn.description.en;
    const baseUrl = "https://radwanfs.com";

    return {
        title: `${title} | رضوان لنقل الجثامين`,
        description,
        openGraph: {
            title,
            description,
            url: `${baseUrl}/${currentLocale}/urns/${slug}`,
            siteName: "Radwan Funeral Services",
            type: "article",
            images: [{ url: urn.mainImage, width: 1200, height: 630 }]
        },
        alternates: {
            languages: {
                ar: `/ar/urns/${slug}`,
                en: `/en/urns/${slug}`,
                ru: `/ru/urns/${slug}`,
                fr: `/fr/urns/${slug}`,
                es: `/es/urns/${slug}`
            }
        }
    };
}

export default async function UrnDetailPage({ params }: Props) {
    const { locale, slug } = await params;

    const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale)
        ? (locale as "ar" | "en" | "ru" | "fr" | "es")
        : "ar";

    const isRtl = currentLocale === "ar";
    const t = await getTranslations({ locale: currentLocale, namespace: "UrnDetail" });

    const urn = urnsData.find((u) => u.slug === slug);
    if (!urn) {
        notFound();
    }

    const title = urn.title[currentLocale] || urn.title.en;
    const fullDesc = urn.fullDescription[currentLocale] || urn.fullDescription.en;
    const materialType = urn.materialType[currentLocale] || urn.materialType.en;
    const capacity = urn.capacityVolume[currentLocale] || urn.capacityVolume.en;
    const sealingType = urn.sealingType[currentLocale] || urn.sealingType.en;
    const specs = urn.specifications[currentLocale] || urn.specifications.en;

    return (
        <main className="urn-detail-page">
            <section className="detail-hero">
                <div className="hero-inner">
                    <nav className="breadcrumbs">
                        <Link href="/urns">{t("breadcrumbUrns")}</Link>
                        {isRtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                        <span>{title}</span>
                    </nav>

                    <h1 className="page-title">{title}</h1>
                </div>
            </section>

            <section className="detail-body">
                <div className="body-grid">
                    <div className="main-content">
                        <UrnGallery mainImage={urn.mainImage} gallery={urn.gallery} title={title} />

                        {fullDesc && (
                            <article className="info-card">
                                <h2 className="card-title">{t("descriptionTitle")}</h2>
                                <p className="desc-text">{fullDesc}</p>
                            </article>
                        )}

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
                                {urn.hasPrice && urn.price ? (
                                    <div className="price-wrapper">
                                        <span className="price-amount">${urn.price}</span>
                                    </div>
                                ) : (
                                    <span className="quote-tag">{t("requestQuoteBtn")}</span>
                                )}

                                {urn.airportCompliant && (
                                    <span className="iata-badge-clean" title={t("airportBadge")}>
                                        <ShieldCheck size={14} />
                                        <span>{t("flightApproved")}</span>
                                    </span>
                                )}
                            </div>

                            <div className="specs-summary-table">
                                {materialType && (
                                    <div className="spec-item">
                                        <span className="spec-label">{t("materialLabel")}</span>
                                        <span className="spec-val">{materialType}</span>
                                    </div>
                                )}
                                {capacity && (
                                    <div className="spec-item">
                                        <span className="spec-label">{t("capacityLabel")}</span>
                                        <span className="spec-val">{capacity}</span>
                                    </div>
                                )}
                                {sealingType && (
                                    <div className="spec-item">
                                        <span className="spec-label">{t("sealingLabel")}</span>
                                        <span className="spec-val">{sealingType}</span>
                                    </div>
                                )}
                            </div>

                            {urn.colors && urn.colors.length > 0 && (
                                <div className="options-group">
                                    <span className="group-label">{t("availableColors")}</span>
                                    <div className="colors-flex">
                                        {urn.colors.map((col) => (
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

                            {urn.dimensions && urn.dimensions.length > 0 && (
                                <div className="options-group">
                                    <span className="group-label">{t("dimensionsTitle")}</span>
                                    <div className="sizes-list-clean">
                                        {urn.dimensions.map((dim) => (
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
                                        `السلام عليكم، استفسار عن طلب جرة الرماد: ${title}`
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