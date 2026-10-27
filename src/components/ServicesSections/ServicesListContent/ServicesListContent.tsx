"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, Variants } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    Plane,
    Sparkles,
    Box,
    Flame,
    Users,
    Flower2,
    HeartPulse
} from "lucide-react";
import { servicesList, ServiceItem } from "@/data/services";
import "./ServicesListContent.scss";

export default function ServicesListContent() {
    const t = useTranslations("ServicesGrid");
    const currentLocale = useLocale() as "ar" | "en" | "ru" | "fr" | "es";
    const isRtl = currentLocale === "ar";

    // خريطة لعرض الأيقونة المحددة لكل خدمة
    const renderServiceIcon = (iconName: ServiceItem["iconName"]) => {
        switch (iconName) {
            case "Plane":
                return <Plane size={26} />;
            case "Sparkles":
                return <Sparkles size={26} />;
            case "Box":
                return <Box size={26} />;
            case "Flame":
                return <Flame size={26} />;
            case "Users":
                return <Users size={26} />;
            case "Flower2":
                return <Flower2 size={26} />;
            case "HeartPulse":
                return <HeartPulse size={26} />;
            default:
                return <Sparkles size={26} />;
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

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <section className="services-grid-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">{t("badge")}</span>
                    <h2 className="section-title">{t("title")}</h2>
                    <p className="section-desc">{t("description")}</p>
                </div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {servicesList.map((service) => {
                        const serviceTitle = service.title[currentLocale] || service.title.ar;
                        const serviceDesc = service.desc[currentLocale] || service.desc.ar;

                        return (
                            <motion.div key={service.id} variants={cardVariants}>
                                <div className="service-card">
                                    <div className="card-top">
                                        <div className="icon-wrapper">
                                            {renderServiceIcon(service.iconName)}
                                        </div>
                                        <h3 className="service-title">{serviceTitle}</h3>
                                    </div>

                                    <p className="service-desc">{serviceDesc}</p>

                                    <div className="card-footer">
                                        <Link href={`/services/${service.id}`} className="btn-explore">
                                            <span>{t("viewDetails")}</span>
                                            {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}