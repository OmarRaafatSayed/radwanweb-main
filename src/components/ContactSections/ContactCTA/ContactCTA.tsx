"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, Variants } from "framer-motion";
import { PhoneCall, Send, LifeBuoy } from "lucide-react";
import "./ContactCTA.scss";

export default function ContactCTA() {
    const t = useTranslations("ContactCTA");

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="contact-cta-section">
            <div className="container">
                <motion.div
                    className="cta-card"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <div className="cta-icon-wrapper">
                        <LifeBuoy size={28} />
                    </div>

                    <div className="cta-text-content">
                        <h2 className="cta-title">{t("title")}</h2>
                        <p className="cta-description">{t("description")}</p>
                    </div>

                    <div className="cta-actions">
                        <a
                            href="https://wa.me/201000000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp"
                        >
                            <PhoneCall size={18} />
                            <span>{t("whatsappButton")}</span>
                        </a>

                        <Link href="/services" className="btn-request">
                            <Send size={18} />
                            <span>{t("servicesButton")}</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}