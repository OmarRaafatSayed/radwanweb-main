"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import "./ContactHero.scss";

export default function ContactHero() {
    const t = useTranslations("ContactHero");

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

    return (
        <section className="contact-hero-section">
            <div className="hero-dots-pattern"></div>

            <motion.div
                className="contact-hero-container"
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
                    <motion.p className="hero-desc" variants={itemVariants}>
                        {t("description")}
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
}