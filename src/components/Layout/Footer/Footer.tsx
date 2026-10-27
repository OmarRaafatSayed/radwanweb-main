"use client";

import "./Footer.scss";
import { useTranslations, useLocale } from "next-intl";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

import { LinkedinIcon, FacebookIcon, InstagramIcon, XIcon, PinterestIcon }
    from "@/components/SocialIcons/SocialIcons";
import { servicesList } from "@/data/services";

// Fixed: static year prevents hydration mismatch from Date.getFullYear()
const CURRENT_YEAR = 2026;

export default function Footer() {
    const t = useTranslations("Footer");
    const currentLocale = useLocale() as "ar" | "en" | "ru" | "fr" | "es";
    const isRtl = currentLocale === "ar";

    const socialLinks = [
        {
            id: 1, icon: <FacebookIcon size={18} />,
            url: "https://www.facebook.com/profile.php?id=61591380316921&mibextid=ZbWKwL"
        },
        { id: 2, icon: <XIcon size={18} />, url: "https://x.com/AlRedwanohm" },
        {
            id: 3, icon: <InstagramIcon size={18} />,
            url: "https://www.instagram.com/alredwan39"
        },
        { id: 4, icon: <LinkedinIcon size={18} />, url: "https://www.linkedin.com/in/alredwan-undefined-03b565421/" },
        { id: 5, icon: <PinterestIcon size={18} />, url: "https://www.pinterest.com/alredwan491/" },
    ];

    const quickLinks = [
        { id: 1, label: t("links.home"), url: "/" },
        { id: 2, label: t("links.about"), url: "/about" },
        { id: 3, label: t("links.services"), url: "/services" },
        { id: 6, label: t("links.faq"), url: "/faqs" },
        { id: 4, label: t("links.privacy"), url: "/privacy-policy" },
        { id: 5, label: t("links.terms"), url: "/terms-conditions" }
    ];

    return (
        <footer className="site-footer">
            <div className={`container ${isRtl ? "direction-rtl" : "direction-ltr"}`}>

                <div className="footer-grid">

                    <div className="footer-column brand-column">
                        <div className="footer-logo">
                            <Image
                                src="/logo.png"
                                alt="Radwan Logo"
                                width={100}
                                height={68}
                                priority
                                className="footer-logo-img"
                                style={{ width: "100px", height: "auto" }}
                            />
                        </div>
                        <p className="brand-description">
                            {t("brandDescription")}
                        </p>
                        <div className="social-wrapper">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.id}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-btn"
                                    aria-label="Social Link"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3 className="column-title">{t("columns.quickLinks")}</h3>
                        <ul className="links-list">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <Link href={link.url}>
                                        <ArrowUpRight size={14} className="arrow-icon" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="column-title">{t("columns.ourServices")}</h3>
                        <ul className="links-list">
                            {servicesList.map((service) => {
                                const serviceLabel = service.title[currentLocale] || service.title.en;

                                return (
                                    <li key={service.id}>
                                        <Link href={`/services/${service.id}`}>
                                            <ArrowUpRight size={14} className="arrow-icon" />
                                            <span>{serviceLabel}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="footer-column contact-column">
                        <h3 className="column-title">{t("columns.contactInfo")}</h3>
                        <ul className="contact-list">
                            <li>
                                <div className="contact-icon">
                                    <Phone size={16} />
                                </div>
                                <div className="contact-data">
                                    <span>{t("contact.phoneLabel")}</span>
                                    <a href="tel:+201500017444" dir="ltr">+20 150 001 7444</a>
                                    <a href="tel:+201116779707" dir="ltr">+20 111 677 9707</a>
                                    <a href="tel:+201009924201" dir="ltr">+20 100 992 4201</a>
                                </div>
                            </li>
                            <li>
                                <div className="contact-icon">
                                    <Mail size={16} />
                                </div>
                                <div className="contact-data">
                                    <span>{t("contact.emailLabel")}</span>
                                    <a href="mailto:info@radwanfs.com">info@radwanfs.com</a>
                                </div>
                            </li>
                            <li>
                                <div className="contact-icon">
                                    <MapPin size={16} />
                                </div>
                                <div className="contact-data">
                                    <span>{t("contact.addressLabel")}</span>
                                    <p>{t("contact.addressValue")}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p className="copyright-text">
                        &copy; {CURRENT_YEAR} {t("copyright")}
                    </p>
                    <p className="developer-credits">
                        {t("developedBy")} <span className="dev-name">Active4web</span>
                    </p>
                </div>

            </div>
        </footer>
    );
}