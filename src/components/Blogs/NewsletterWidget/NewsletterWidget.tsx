"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import "./NewsletterWidget.scss";

export default function NewsletterWidget() {
    const t = useTranslations("NewsletterWidget");
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);

        // محاكاة إرسال للـ API
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            setEmail("");
        }, 1000);
    };

    return (
        <div className="newsletter-widget-card">
            <div className="widget-icon-wrapper">
                <Mail size={24} />
            </div>

            <div className="widget-text-content">
                <h3 className="widget-title">{t("title")}</h3>
                <p className="widget-desc">{t("description")}</p>
            </div>

            {isSubmitted ? (
                <div className="success-message">
                    <CheckCircle2 size={22} className="success-icon" />
                    <span>{t("successMessage")}</span>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="newsletter-form">
                    <div className="input-group">
                        <input
                            type="email"
                            required
                            placeholder={t("inputPlaceholder")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    <button type="submit" className="btn-subscribe" disabled={isLoading}>
                        <span>{isLoading ? t("loading") : t("subscribeButton")}</span>
                        <Send size={16} />
                    </button>
                </form>
            )}
        </div>
    );
}