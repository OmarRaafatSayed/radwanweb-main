"use client";

import { useState, SyntheticEvent } from "react";
import { useTranslations } from "next-intl";
import { Mail, MessageSquare, Send, CheckCircle2, User, PhoneCall, Building, Phone, MapPin, Navigation } from "lucide-react";
import "./ContactContent.scss";

const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
);

export default function ContactContent() {
    const t = useTranslations("ContactContent");

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            setFormData({ fullName: "", phone: "", email: "", subject: "", message: "" });
        }, 1200);
    };

    const branchesList = [
        {
            id: "main-branch",
            title: t("branches.mainBranch.title"),
            address: t("branches.mainBranch.address"),
            mapUrl: "https://maps.app.goo.gl/o1hrbgnx4zX5jxD87"
        },
        {
            id: "second-branch",
            title: t("branches.secondBranch.title"),
            address: t("branches.secondBranch.address"),
            mapUrl: "https://maps.app.goo.gl/Lupji2RZUB52AubW9"
        },
        {
            id: "third-branch",
            title: t("branches.thirdBranch.title"),
            address: t("branches.thirdBranch.address"),
            mapUrl: "https://maps.app.goo.gl/vYVK1TJ2a2jwGNiN7"
        }
    ];

    return (
        <section className="contact-content-section">
            <div className="container">
                <div className="contact-grid-layout">

                    <div className="contact-form-card">
                        <div className="card-header">
                            <h2 className="form-title">{t("formTitle")}</h2>
                            <p className="form-subtitle">{t("formSubtitle")}</p>
                        </div>

                        {isSubmitted ? (
                            <div className="form-success-box">
                                <CheckCircle2 size={40} className="success-icon" />
                                <h3>{t("successTitle")}</h3>
                                <p>{t("successDesc")}</p>
                                <button
                                    type="button"
                                    className="btn-reset"
                                    onClick={() => setIsSubmitted(false)}
                                >
                                    {t("sendAnotherMessage")}
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="input-group">
                                        <label htmlFor="fullName">{t("labelFullName")}</label>
                                        <div className="input-wrapper">
                                            <User size={18} className="input-icon" />
                                            <input
                                                id="fullName"
                                                type="text"
                                                required
                                                placeholder={t("placeholderFullName")}
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="phone">{t("labelPhone")}</label>
                                        <div className="input-wrapper">
                                            <Phone size={18} className="input-icon" />
                                            <input
                                                id="phone"
                                                type="text"
                                                required
                                                placeholder={t("placeholderPhone")}
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="input-group">
                                        <label htmlFor="email">{t("labelEmail")}</label>
                                        <div className="input-wrapper">
                                            <Mail size={18} className="input-icon" />
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                placeholder={t("placeholderEmail")}
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="subject">{t("labelSubject")}</label>
                                        <div className="input-wrapper">
                                            <Building size={18} className="input-icon" />
                                            <input
                                                id="subject"
                                                type="text"
                                                required
                                                placeholder={t("placeholderSubject")}
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group full-width">
                                    <label htmlFor="message">{t("labelMessage")}</label>
                                    <div className="input-wrapper textarea-wrapper">
                                        <MessageSquare size={18} className="input-icon textarea-icon" />
                                        <textarea
                                            id="message"
                                            rows={5}
                                            required
                                            placeholder={t("placeholderMessage")}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                    </div>
                                </div>

                                <button type="submit" className="btn-submit" disabled={isLoading}>
                                    <span>{isLoading ? t("sending") : t("submitButton")}</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        )}
                    </div>

                    <div className="contact-info-wrapper">
                        <div className="info-cards-grid">
                            <div className="cards-row">
                                <a href="tel:+201500017444" className="info-card">
                                    <div className="card-icon">
                                        <PhoneCall size={20} />
                                    </div>
                                    <div className="card-text">
                                        <span className="info-label">{t("phoneLabel")}</span>
                                        <span className="info-value" dir="ltr">+20 150 001 7444</span>
                                    </div>
                                </a>

                                <a href="https://wa.me/201557377897" target="_blank" rel="noopener noreferrer" className="info-card whatsapp">
                                    <div className="card-icon">
                                        <WhatsAppIcon size={20} />
                                    </div>
                                    <div className="card-text">
                                        <span className="info-label">{t("whatsappLabel")}</span>
                                        <span className="info-value" dir="ltr">+20 155 737 7897</span>
                                    </div>
                                </a>
                            </div>

                            <div className="cards-row">
                                <a href="tel:+201116779707" className="info-card">
                                    <div className="card-icon">
                                        <PhoneCall size={20} />
                                    </div>
                                    <div className="card-text">
                                        <span className="info-label">{t("phoneLabel")}</span>
                                        <span className="info-value" dir="ltr">+20 111 677 9707</span>
                                    </div>
                                </a>

                                <a href="tel:+201009924201" className="info-card">
                                    <div className="card-icon">
                                        <PhoneCall size={20} />
                                    </div>
                                    <div className="card-text">
                                        <span className="info-label">{t("phoneLabel")}</span>
                                        <span className="info-value" dir="ltr">+20 100 992 4201</span>
                                    </div>
                                </a>
                            </div>

                            <a href="mailto:info@radwanfs.com" className="info-card full-width-card">
                                <div className="card-icon">
                                    <Mail size={20} />
                                </div>
                                <div className="card-text">
                                    <span className="info-label">{t("emailLabel")}</span>
                                    <span className="info-value">info@radwanfs.com</span>
                                </div>
                            </a>

                            <div className="branches-container-card">
                                <div className="branches-header">
                                    <MapPin size={20} className="header-icon" />
                                    <span>{t("branchesTitle")}</span>
                                </div>

                                <div className="branches-list">
                                    {branchesList.map((branch) => (
                                        <div key={branch.id} className="branch-item">
                                            <div className="branch-info">
                                                <span className="branch-name">{branch.title}</span>
                                                <p className="branch-address">{branch.address}</p>
                                            </div>

                                            <a
                                                href={branch.mapUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-location"
                                                title={t("viewOnMap")}
                                            >
                                                <Navigation size={15} />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}