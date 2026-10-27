"use client";

import { useTranslations } from "next-intl";
import { PhoneCall, MessageCircle } from "lucide-react";
import "./UrnsCTA.scss";

export default function UrnsCTA() {
    const t = useTranslations("UrnsPage");

    return (
        <section className="urns-cta-section">
            <div className="cta-container">
                <div className="cta-card">
                    <div className="cta-text">
                        <h2 className="cta-title">{t("ctaTitle")}</h2>
                        <p className="cta-desc">{t("ctaDesc")}</p>
                    </div>

                    <div className="cta-actions">
                        <a
                            href="https://wa.me/201557377897"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp"
                        >
                            <MessageCircle size={18} />
                            <span>WhatsApp</span>
                        </a>

                        <a href="tel:01500017444" className="btn-call">
                            <PhoneCall size={18} />
                            <span>{t("ctaButton")}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}