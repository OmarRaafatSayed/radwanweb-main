"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, Plane, Truck } from "lucide-react";
import "./CasketsHero.scss";

export default function CasketsHero() {
    const t = useTranslations("CasketsPage");

    return (
        <section className="caskets-hero">
            <div className="hero-container">
                <span className="hero-badge">{t("heroBadge")}</span>
                <h1 className="hero-title">{t("heroTitle")}</h1>
                <p className="hero-subtitle">{t("heroSubtitle")}</p>

                <div className="hero-trust-badges">
                    <div className="trust-item">
                        <Plane size={18} />
                        <span>{t("trustIata")}</span>
                    </div>

                    <div className="trust-item">
                        <ShieldCheck size={18} />
                        <span>{t("trustZinc")}</span>
                    </div>

                    <div className="trust-item">
                        <Truck size={18} />
                        <span>{t("trustShipping")}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}