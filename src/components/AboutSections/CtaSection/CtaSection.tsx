"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { PhoneCall, FileText } from "lucide-react";
import "./CtaSection.scss";

export default function CtaSection() {
    const t = useTranslations("CtaSection");

    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.1,
                delayChildren: 0.05
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <section className="cta-section-about">
            <div className="cta-dots-bg"></div>

            <div className="cta-container">
                <motion.div
                    className="cta-glass-card"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <motion.span className="cta-badge" variants={itemVariants}>
                        {t("badge")}
                    </motion.span>

                    <motion.h2 className="cta-main-title" variants={itemVariants}>
                        {t("mainTitle")}
                    </motion.h2>

                    <motion.p className="cta-desc" variants={itemVariants}>
                        {t("description")}
                    </motion.p>

                    <motion.div className="cta-actions-group" variants={itemVariants}>
                        <a
                            href="https://wa.me/201557377897"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contact us on WhatsApp"
                            className="cta-btn primary-btn"
                        >
                            <PhoneCall size={18} />
                            <span>{t("callNow")}</span>
                        </a>

                        <a
                            href="https://wa.me/201557377897"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contact us on WhatsApp"
                            className="cta-btn secondary-btn">
                            <FileText size={18} />
                            <span>{t("requestService")}</span>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}