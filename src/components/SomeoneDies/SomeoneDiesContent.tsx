"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, Variants } from "framer-motion";
import {
    Home,
    Building2,
    AlertCircle,
    Globe,
    FileText,
    Heart,
    ArrowLeft,
    ArrowRight
} from "lucide-react";
import { someoneDiesData, SomeoneDiesCaseItem } from "@/data/someoneDiesData";
import "./SomeoneDies.scss";

export default function SomeoneDiesContent() {
    const t = useTranslations("SomeoneDiesHero");
    const locale = useLocale() as "ar" | "en" | "ru" | "fr" | "es";
    const isRtl = locale === "ar";

    const renderIcon = (iconName: SomeoneDiesCaseItem["iconName"]) => {
        switch (iconName) {
            case "Home":
                return <Home size={28} />;
            case "Building2":
                return <Building2 size={28} />;
            case "AlertCircle":
                return <AlertCircle size={28} />;
            case "Globe":
                return <Globe size={28} />;
            case "FileText":
                return <FileText size={28} />;
            case "Heart":
                return <Heart size={28} />;
            default:
                return <FileText size={28} />;
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05
            }
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

    const gridVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }
        }
    };

    return (
        <div className="someone-dies-page-wrapper">
            {/* قسم الهيرو المعتمد بترجمات Next-Intl */}
            <section className="someone-dies-hero-section">
                <div className="hero-dots-pattern"></div>

                <motion.div
                    className="someone-dies-hero-container"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="hero-text-content">
                        <motion.span className="hero-badge" variants={itemVariants}>
                            {t("badge")}
                        </motion.span>
                        <motion.h1 className="hero-main-title" variants={itemVariants}>
                            {t("title")}
                        </motion.h1>
                        <motion.h2 className="hero-subtitle" variants={itemVariants}>
                            {t("subtitle")}
                        </motion.h2>
                        <motion.p className="hero-desc" variants={itemVariants}>
                            {t("description")}
                        </motion.p>
                    </div>
                </motion.div>
            </section>

            {/* شبكة البوكسات المعتمدة على ملف البيانات */}
            <section className="cases-grid-section">
                <div className="container">
                    <motion.div
                        className="cases-grid"
                        variants={gridVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {someoneDiesData.map((item) => {
                            const title = item.title[locale] || item.title["ar"];
                            const desc = item.desc[locale] || item.desc["ar"];

                            return (
                                <article key={item.id} className="case-card">
                                    <div className="card-top">
                                        <div className="icon-wrapper">
                                            {renderIcon(item.iconName)}
                                        </div>
                                        <h2>{title}</h2>
                                    </div>

                                    <p className="card-desc">{desc}</p>

                                    <div className="card-footer">
                                        <Link href={`/someone-dies/${item.id}`} className="btn-details">
                                            <span>{t("btnText")}</span>
                                            {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}