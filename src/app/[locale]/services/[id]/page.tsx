import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { servicesList, ServiceItem } from "@/data/services";

const BASE_URL = "https://radwanfs.com";
const LOCALES = ["ar", "en", "ru", "fr", "es"] as const;
type Locale = (typeof LOCALES)[number];

// SSG: pre-render all locale × service combinations at build time
export async function generateStaticParams() {
    return LOCALES.flatMap((locale) =>
        servicesList.map((service) => ({ locale, id: service.id }))
    );
}
import {
    Plane,
    Sparkles,
    Box,
    Flame,
    Users,
    Flower2,
    HeartPulse,
    FileText,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    PhoneCall,
    Clock,
    ShieldCheck
} from "lucide-react";
import "./ServiceDetail.scss";

interface Props {
    params: Promise<{ locale: string; id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, id } = await params;

    const currentLocale: Locale = LOCALES.includes(locale as Locale) ? locale as Locale : "ar";

    const service = servicesList.find((s) => s.id === id);
    if (!service) return {};

    const serviceTitle = service.title[currentLocale] || service.title.ar;
    const description = service.detailContent.fullDescription[currentLocale] || service.detailContent.fullDescription.ar;

    const ogLocales: Record<Locale, string> = { ar: "ar_EG", en: "en_US", ru: "ru_RU", fr: "fr_FR", es: "es_ES" };

    return {
        title: `${serviceTitle} | رضوان لنقل وتجهيز الجثامين`,
        description,
        openGraph: {
            title: serviceTitle,
            description,
            url: `${BASE_URL}/${currentLocale}/services/${id}`,
            siteName: "Radwan Funeral Services",
            locale: ogLocales[currentLocale],
            type: "article",
            images: [
                {
                    url: `${BASE_URL}/images/og-services.jpg`,
                    width: 1200,
                    height: 630,
                    alt: serviceTitle,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: serviceTitle,
            description,
        },
        alternates: {
            canonical: `/${currentLocale}/services/${id}`,
            languages: {
                ar: `${BASE_URL}/ar/services/${id}`,
                en: `${BASE_URL}/en/services/${id}`,
                ru: `${BASE_URL}/ru/services/${id}`,
                fr: `${BASE_URL}/fr/services/${id}`,
                es: `${BASE_URL}/es/services/${id}`,
                "x-default": `${BASE_URL}/en/services/${id}`,
            }
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-snippet": -1,
                "max-image-preview": "large",
            },
        },
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const { locale, id } = await params;

    const currentLocale: Locale = LOCALES.includes(locale as Locale) ? locale as Locale : "ar";

    const isRtl = currentLocale === "ar";
    const t = await getTranslations({ locale: currentLocale, namespace: "ServiceDetail" });

    const service = servicesList.find((s) => s.id === id);

    if (!service) {
        notFound();
    }

    const title = service.title[currentLocale] || service.title.ar;
    const introSubtitle = service.detailContent.introSubtitle[currentLocale] || service.detailContent.introSubtitle.ar;
    const fullDesc = service.detailContent.fullDescription[currentLocale] || service.detailContent.fullDescription.ar;
    const docs = service.detailContent.requiredDocuments?.[currentLocale] || service.detailContent.requiredDocuments?.ar || [];

    // JSON-LD: Service schema + BreadcrumbList
    const breadcrumbLabels: Record<Locale, { home: string; services: string }> = {
        ar: { home: "الرئيسية", services: "الخدمات" },
        en: { home: "Home", services: "Services" },
        ru: { home: "Главная", services: "Услуги" },
        fr: { home: "Accueil", services: "Services" },
        es: { home: "Inicio", services: "Servicios" },
    };
    const bc = breadcrumbLabels[currentLocale];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": `${BASE_URL}/${currentLocale}/services/${id}`,
                name: title,
                description: fullDesc,
                url: `${BASE_URL}/${currentLocale}/services/${id}`,
                provider: {
                    "@type": "LocalBusiness",
                    "@id": `${BASE_URL}/#organization`,
                    name: "Radwan Funeral Services",
                },
                areaServed: { "@type": "Country", name: "EG" },
                serviceType: "Funeral Service",
                ...(docs.length > 0 && {
                    termsOfService: docs.join(", "),
                }),
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: bc.home,
                        item: `${BASE_URL}/${currentLocale}`,
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: bc.services,
                        item: `${BASE_URL}/${currentLocale}/services`,
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: title,
                        item: `${BASE_URL}/${currentLocale}/services/${id}`,
                    },
                ],
            },
        ],
    };

    const renderServiceIcon = (iconName: ServiceItem["iconName"]) => {
        switch (iconName) {
            case "Plane":
                return <Plane size={32} />;
            case "Sparkles":
                return <Sparkles size={32} />;
            case "Box":
                return <Box size={32} />;
            case "Flame":
                return <Flame size={32} />;
            case "Users":
                return <Users size={32} />;
            case "Flower2":
                return <Flower2 size={32} />;
            case "HeartPulse":
                return <HeartPulse size={32} />;
            default:
                return <Sparkles size={32} />;
        }
    };

    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="service-detail-page">
            {/* Header Hero */}
            <section className="service-hero">
                <div className="hero-inner">
                    <nav className="breadcrumbs">
                        <Link href="/">{t("home")}</Link>
                        {isRtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                        <Link href="/services">{t("breadcrumbServices")}</Link>
                        {isRtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                        <span>{title}</span>
                    </nav>

                    <div className="hero-header-box">
                        <div className="hero-icon">
                            {renderServiceIcon(service.iconName)}
                        </div>
                        <div className="hero-text">
                            <span className="badge">{t("badge")}</span>
                            <h1 className="title">{title}</h1>
                            <p className="subtitle">{introSubtitle}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Body Grid */}
            <section className="service-body">
                <div className="body-grid">
                    {/* Main Content */}
                    <div className="main-content">
                        {/* Full Description */}
                        <article className="content-card full-description-card">
                            <h2 className="card-heading">
                                <FileText size={20} />
                                <span>{title}</span>
                            </h2>
                            <p className="description-text">{fullDesc}</p>
                        </article>

                        {/* Key Features */}
                        {service.detailContent.features && service.detailContent.features.length > 0 && (
                            <article className="content-card">
                                <h2 className="card-heading">
                                    <CheckCircle2 size={20} />
                                    <span>{t("featuresTitle")}</span>
                                </h2>
                                <div className="features-grid">
                                    {service.detailContent.features.map((feat, idx) => (
                                        <div key={idx} className="feature-item">
                                            <div className="feature-icon">✓</div>
                                            <div>
                                                <h3 className="feature-title">{feat.title[currentLocale] || feat.title.ar}</h3>
                                                <p className="feature-desc">{feat.desc[currentLocale] || feat.desc.ar}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        )}

                        {/* Required Documents */}
                        {docs && docs.length > 0 && (
                            <article className="content-card">
                                <h2 className="card-heading">
                                    <FileText size={20} />
                                    <span>{t("docsTitle")}</span>
                                </h2>
                                <ul className="docs-list">
                                    {docs.map((doc, idx) => (
                                        <li key={idx} className="doc-item">
                                            <span className="bullet"></span>
                                            <span>{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        )}
                    </div>

                    {/* Sidebar Actions Card */}
                    <aside className="sidebar-content">
                        <div className="sticky-action-card">
                            <div className="time-box">
                                <Clock size={22} />
                                <div>
                                    <span className="label">{t("availabilityLabel")}</span>
                                    <strong className="value">{t("availabilityValue")}</strong>
                                </div>
                            </div>

                            <div className="guarantee-box">
                                <ShieldCheck size={22} />
                                <div>
                                    <span className="label">{t("guaranteeLabel")}</span>
                                    <strong className="value">{t("guaranteeValue")}</strong>
                                </div>
                            </div>

                            <div className="action-buttons">
                                <Link
                                    href={``}
                                    className="btn-primary-request"
                                >
                                    <PhoneCall size={18} />
                                    <span>{t("requestBtn")}</span>
                                </Link>

                                <a
                                    href={`https://wa.me/201557377897?text=${encodeURIComponent(
                                        `السلام عليكم، استفسار عن خدمة: ${title}`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-whatsapp-action"
                                >
                                    <span>{t("whatsappBtn")}</span>
                                </a>
                            </div>

                            <div className="quick-help-box">
                                <h4 className="help-title">{t("quickHelpTitle")}</h4>
                                <p className="help-desc">{t("quickHelpDesc")}</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
        </>
    );
}