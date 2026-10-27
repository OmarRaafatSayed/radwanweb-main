"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Home, AlertTriangle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import "./NotFoundClient.scss";

export default function NotFoundClient() {
    const t = useTranslations("NotFound");
    const currentLocale = useLocale();
    const isRtl = currentLocale === "ar";

    const containerVariants: Variants = {
        hidden: { opacity: 0, scale: 0.96, y: 15 },
        visible: {
            opacity: 1,
            scale: 1,
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
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <section className="not-found-section">
            {/* النقاط الصغيرة الخلفية */}
            <div className="bg-dots-pattern"></div>

            <div className={`container ${isRtl ? "direction-rtl" : "direction-ltr"}`}>

                {/* البوكس المركزي الفخم */}
                <motion.div
                    className="not-found-central-box"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* التأثيرات المضيئة الداخلية */}
                    <div className="box-glow-orbs">
                        <div className="orb gold-orb"></div>
                        <div className="orb blue-orb"></div>
                    </div>

                    {/* شعار الشركة داخل البوكس */}
                    <motion.div className="not-found-logo" variants={itemVariants}>
                        <Image
                            src="/logo.png"
                            alt="Radwan"
                            width={70}
                            height={60}
                            style={{ width: "auto", height: "auto" }}
                            priority
                        />
                    </motion.div>

                    <motion.div className="error-badge-wrapper" variants={itemVariants}>
                        <div className="badge-icon">
                            <AlertTriangle size={18} />
                        </div>
                        <span className="badge-text">{t("badge")}</span>
                    </motion.div>

                    <motion.h1 className="error-code" variants={itemVariants}>
                        4<span>0</span>4
                    </motion.h1>

                    <motion.h2 className="error-title" variants={itemVariants}>
                        {t("title")}
                    </motion.h2>

                    <motion.p className="error-desc" variants={itemVariants}>
                        {t("description")}
                    </motion.p>

                    <motion.div className="not-found-actions" variants={itemVariants}>
                        <Link href="/" className="btn-gold">
                            <Home size={18} />
                            <span>{t("homeButton")}</span>
                        </Link>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}