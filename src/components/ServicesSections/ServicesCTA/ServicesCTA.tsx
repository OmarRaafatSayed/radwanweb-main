"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, Variants } from "framer-motion";
import { PhoneCall, Send, HelpCircle } from "lucide-react";
import "./ServicesCTA.scss";

export default function ServicesCTA() {
    const t = useTranslations("ServicesCTA");

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="services-cta-section">
            <div className="container">
                <motion.div
                    className="cta-card"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <div className="cta-icon-wrapper">
                        <HelpCircle size={28} />
                    </div>

                    <div className="cta-text-content">
                        <h2 className="cta-title">{t("title")}</h2>
                        <p className="cta-description">{t("description")}</p>
                    </div>

                    <div className="cta-actions">
                        <a
                            href="https://wa.me/201557377897"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp"
                        >
                            <PhoneCall size={18} />
                            <span>{t("whatsappButton")}</span>
                        </a>

                        <Link href="/contact" className="btn-request">
                            <Send size={18} />
                            <span>{t("requestButton")}</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}