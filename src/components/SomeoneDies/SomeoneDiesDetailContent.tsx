"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, Variants } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    MapPin,
    Phone,
    Globe,
    PhoneCall,
} from "lucide-react";
import { SomeoneDiesCaseItem } from "@/data/someoneDiesData";
import "./SomeoneDiesDetail.scss";

interface Props {
    caseItem: SomeoneDiesCaseItem;
}

export default function SomeoneDiesDetailContent({ caseItem }: Props) {
    const locale = useLocale() as "ar" | "en" | "ru" | "fr" | "es";
    const isRtl = locale === "ar";
    const t = useTranslations("Header");

    const title = caseItem.title[locale] || caseItem.title.ar;
    const introSubtitle = caseItem.detailContent.introSubtitle[locale] || caseItem.detailContent.introSubtitle.ar;
    const introText = caseItem.detailContent.introText[locale] || caseItem.detailContent.introText.ar;

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.05 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <div className="someone-dies-detail-wrapper">
            {/* الهيرو المعتمد لصفحة التفاصيل */}
            <section className="detail-hero-section">
                <div className="hero-dots-pattern"></div>
                <div className="container">
                    <motion.div
                        className="hero-inner"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.nav className="breadcrumbs" variants={itemVariants}>
                            <Link href="/">{t("home")}</Link>
                            {isRtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                            <Link href="/someone-dies">{t("someone-dies")}</Link>
                            {isRtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                            <span className="current">{title}</span>
                        </motion.nav>

                        <motion.h1 className="detail-page-title" variants={itemVariants}>
                            {title}
                        </motion.h1>
                    </motion.div>
                </div>
            </section>

            {/* محتوى المقال والأقسام الديناميكية */}
            <section className="detail-body-section">
                <div className="container">
                    <motion.div
                        className="detail-content-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {/* مقدمة المقال */}
                        <div className="intro-block">
                            <h2>{introSubtitle}</h2>
                            <p>{introText}</p>
                        </div>

                        {/* تكرار الأقسام المعرفة في ملف البيانات */}
                        <div className="sections-list">
                            {caseItem.detailContent.sections.map((section, idx) => {
                                const heading = section.heading?.[locale] || section.heading?.ar;
                                const paragraphs = section.paragraphs?.[locale] || section.paragraphs?.ar || [];
                                const bullets = section.bullets?.[locale] || section.bullets?.ar || [];

                                return (
                                    <div key={idx} className="detail-section-item">
                                        {heading && <h3 className="section-heading">{heading}</h3>}

                                        {paragraphs.map((para, pIdx) => (
                                            <p key={pIdx} className="section-paragraph">{para}</p>
                                        ))}

                                        {bullets.length > 0 && (
                                            <ul className="section-bullets-list">
                                                {bullets.map((bullet, bIdx) => (
                                                    <li key={bIdx}>
                                                        <CheckCircle2 size={18} className="bullet-icon" />
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* التمييز الخاص بقائمة المكاتب وتصاميم البوكسات */}
                                        {section.type === "offices_grid" && section.offices && (
                                            <div className="offices-grid-container">
                                                {section.offices.map((office) => {
                                                    const officeName = office.name[locale] || office.name.ar;
                                                    const officeAddress = office.address[locale] || office.address.ar;

                                                    return (
                                                        <div key={office.id} className="office-card">
                                                            <div className="office-header">
                                                                <h4>{officeName}</h4>
                                                                <p className="address">
                                                                    <MapPin size={15} />
                                                                    <span>{officeAddress}</span>
                                                                </p>
                                                            </div>

                                                            <div className="office-actions">
                                                                <a href={`tel:${office.phone}`} className="action-link phone">
                                                                    <Phone size={14} />
                                                                    <span dir="ltr">{office.phone}</span>
                                                                </a>

                                                                <div className="btn-group">
                                                                    <a
                                                                        href={office.mapUrl}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="office-btn outline"
                                                                    >
                                                                        <MapPin size={14} />
                                                                        <span>{isRtl ? "الموقع " : "Map Location"}</span>
                                                                    </a>

                                                                    {office.websiteUrl && (
                                                                        <a
                                                                            href={office.websiteUrl}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="office-btn fill"
                                                                        >
                                                                            <Globe size={14} />
                                                                            <span>{isRtl ? "زيارة الموقع" : "Visit Website"}</span>
                                                                        </a>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* بوكس المساعدة الفورية بنهاية الصفحة */}
                        <div className="support-cta-box">
                            <div className="cta-text">
                                <h3>{isRtl ? "هل تحاج إلى مساعدة فورية أو استفسار؟" : "Need immediate assistance or support?"}</h3>
                                <p>{isRtl ? "فريقنا متواجد على مدار 24 ساعة لتقديم كافة الاستشارات والترتيبات اللازمة." : "Our team is available 24/7 to provide full guidance and arrangements."}</p>
                            </div>
                            <Link href="/contact" className="btn-cta">
                                <PhoneCall size={18} />
                                <span>{isRtl ? "تواصل معنا الآن" : "Contact Us Now"}</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}