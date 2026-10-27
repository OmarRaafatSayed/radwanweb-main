"use client";

import "./CallToAction.scss";
import { useTranslations, useLocale } from "next-intl";
import { PhoneCall, FileText } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Link } from "@/i18n/navigation"

export default function CallToAction() {
    const t = useTranslations("CTA");
    const currentLocale = useLocale();
    const isRtl = currentLocale === "ar";

    const cardVariants: Variants = {
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
        <section className="cta-section">
            <div className={`container ${isRtl ? "direction-rtl" : "direction-ltr"}`}>
                <motion.div
                    className="cta-floating-card"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <div className="glass-shine-orbs">
                        <div className="orb gold-orb"></div>
                        <div className="orb blue-orb"></div>
                    </div>

                    <motion.div className="cta-content" variants={itemVariants}>
                        <h2>{t("title")}</h2>
                        <p>{t("description")}</p>
                    </motion.div>

                    <motion.div className="cta-actions" variants={itemVariants}>
                        <a
                            href="https://wa.me/201557377897"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contact us on WhatsApp"
                            className="btn-gold"
                        >
                            <FileText size={18} />
                            <span>{t("orderButton")}</span>
                        </a>
                        <Link href="/contact" className="btn-outline">
                            <PhoneCall size={18} />
                            <span>{t("contactButton")}</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}