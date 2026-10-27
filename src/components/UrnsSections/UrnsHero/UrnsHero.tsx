"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, Plane, Award } from "lucide-react";
import "./UrnsHero.scss";

export default function UrnsHero() {
    const t = useTranslations("UrnsPage");

    return (
        <section className="urns-hero">
            <div className="hero-container">
                <span className="hero-badge">{t("heroBadge")}</span>
                <h1 className="hero-title">{t("heroTitle")}</h1>
                <p className="hero-subtitle">{t("heroSubtitle")}</p>

                <div className="hero-trust-badges">
                    <div className="trust-item">
                        <Plane size={18} />
                        <span>{t("trustAirportCompliant")}</span>
                    </div>

                    <div className="trust-item">
                        <ShieldCheck size={18} />
                        <span>{t("trustSealedCertified")}</span>
                    </div>

                    <div className="trust-item">
                        <Award size={18} />
                        <span>{t("trustPremiumMaterials")}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}