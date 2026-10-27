"use client";

import "./AboutSection.scss";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Headphones, ClipboardCheck, Shield, Handshake, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function AboutSection() {
    const t = useTranslations("About");
    const currentLocale = useLocale();
    const isRtl = currentLocale === "ar";

    const aboutData = {
        badge: {
            ar: "نبذة عن شركة الرضوان",
            en: "About Radwan Company",
            ru: "О компании Радван",
            fr: "À propos de la société Radwan",
            es: "Sobre la empresa Radwan"
        },
        title: {
            ar: "خبرة عريقة منذ سنوات في رعاية وتسهيل الإجراءات الدولية",
            en: "Long-standing experience in international repatriation and care",
            ru: "Многолетний опыт международной репатриации и заботы",
            fr: "Une longue expérience dans le rapatriement international",
            es: "Larga trayectoria en repatriación internacional y cuidado"
        },
        description: {
            ar: "نحن في شركة الرضوان نقدم خدمات نقل المتوفين دولياً بأعلى معايير الجودة والاحترام، وملتزمون بتسهيل جميع الإجراءات القانونية واللوجستية على أسر المتوفين في أصعب لحظاتهم.",
            en: "At Radwan Company, we provide international deceased transportation services with the highest standards of respect. We are committed to easing all legal and logistical procedures for families.",
            ru: "В компании Радван мы предоставляем услуги по международной перевозке умерших с соблюдением высочайших стандартов уважения, облегчая все юридические процедуры.",
            fr: "Chez Radwan, nous assurons le transport international des défunts selon les plus normes de respect, en simplifiant toutes les démarches administratives.",
            es: "En Radwan brindamos servicios de traslado internacional de fallecidos con los más altos estándares of respeto, simplificando todos los trámites legales."
        },
        features: [
            {
                icon: <Headphones size={22} />,
                title: { ar: "الدعم", en: "Support", ru: "Поддержка", fr: "Support", es: "Soporte" },
                desc: { ar: "على مدار الساعة", en: "24/7 Availability", ru: "Круглосуточно", fr: "24h/24", es: "24/7 disponible" }
            },
            {
                icon: <ClipboardCheck size={22} />,
                title: { ar: "المتابعة", en: "Follow-up", ru: "Monitoring", fr: "Suivi", es: "Seguimiento" },
                desc: { ar: "حتى التسليم", en: "Until Delivery", ru: "До передачи", fr: "Jusqu'à livraison", es: "Hasta la entrega" }
            },
            {
                icon: <Shield size={22} />,
                title: { ar: "التسهيلات", en: "Legal Services", ru: "Юридические услуги", fr: "Services juridiques", es: "Servicios legales" },
                desc: { ar: "تخليص الإجراءات", en: "Full Clearance", ru: "Полная очистка", fr: "Dédouanement complet", es: "Despacho completo" }
            },
            {
                icon: <Handshake size={22} />,
                title: { ar: "الالتزام", en: "Commitment", ru: "Обязательство", fr: "Engagement", es: "Compromiso" },
                desc: { ar: "في الموعد", en: "On Time", ru: "Вовремя", fr: "À temps", es: "A tiempo" }
            }
        ]
    };

    const badgeText = aboutData.badge[currentLocale as keyof typeof aboutData.badge] || aboutData.badge.en;
    const titleText = aboutData.title[currentLocale as keyof typeof aboutData.title] || aboutData.title.en;
    const descriptionText = aboutData.description[currentLocale as keyof typeof aboutData.description] || aboutData.description.en;

    const textContentVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.08,
                delayChildren: 0.05
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: "easeOut" }
        }
    };

    const collageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.98, x: isRtl ? -20 : 20 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
        }
    };

    return (
        <section className="about-section">
            <div className="container about-container">

                <motion.div
                    className="about-text-content"
                    variants={textContentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <motion.span className="about-badge" variants={itemVariants}>{badgeText}</motion.span>
                    <motion.h2 variants={itemVariants}>{titleText}</motion.h2>
                    <motion.p className="about-desc" variants={itemVariants}>{descriptionText}</motion.p>

                    <motion.div className="about-features-grid" variants={itemVariants}>
                        {aboutData.features.map((feat, index) => {
                            const featTitle = feat.title[currentLocale as keyof typeof feat.title] || feat.title.en;
                            const featDesc = feat.desc[currentLocale as keyof typeof feat.desc] || feat.desc.en;

                            return (
                                <div className="about-feature-card" key={index}>
                                    <div className="feature-icon-box">{feat.icon}</div>
                                    <div className="feature-info-box">
                                        <h3>{featTitle}</h3>
                                        <p>{featDesc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>

                    <motion.div className="about-action-area" variants={itemVariants}>
                        <Link href="/about" className="about-btn-more">
                            <span>{t("learnMore")}</span>
                            {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="about-images-collage"
                    variants={collageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <div className="main-image-wrapper">
                        <Image
                            src="/images/about-main.png"
                            alt="Radwan Headquarters"
                            fill
                            sizes="(max-width: 991px) 100vw, (max-width: 1200px) 40vw, 35vw"
                            priority
                            className="collage-img"
                        />
                    </div>
                    <div className="sub-image-wrapper">
                        <Image
                            src="/images/about-sub.png"
                            alt="Radwan Funeral Services"
                            fill
                            sizes="(max-width: 991px) 60vw, (max-width: 1200px) 25vw, 20vw"
                            priority
                            className="collage-img"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}