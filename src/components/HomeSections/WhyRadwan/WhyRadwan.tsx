"use client";

import "./WhyRadwan.scss";
import { useTranslations, useLocale } from "next-intl";
import { motion, Variants } from "framer-motion";
import {
    ShieldCheck,
    Globe2,
    Tag,
    Headphones,
    Clock,
    Award
} from "lucide-react";

export default function WhyRadwan() {
    const t = useTranslations("WhyRadwan");
    const currentLocale = useLocale();
    const isRtl = currentLocale === "ar";

    const featuresList = [
        {
            id: "delivery-followup",
            icon: <ShieldCheck size={32} />,
            title: {
                ar: "متابعة حتى التسليم",
                en: "Delivery Follow-up",
                ru: "Контроль до доставки",
                fr: "Suivi jusqu'à la livraison",
                es: "Seguimiento hasta la entrega"
            },
            desc: {
                ar: "نتابع جميع الإجراءات بدقة متناهية حتى يوصل المتوفي بأمان.",
                en: "We closely monitor all procedures until the deceased safely arrives.",
                ru: "Мы тщательно контролируем все процедуры до безопасного прибытия усопшего.",
                fr: "Nous suivons de près toutes les étapes jusqu'à l'arrivée sécurisée du défunt.",
                es: "Monitoreamos de cerca cada trámite hasta la llegada segura del fallecido."
            }
        },
        {
            id: "global-coverage",
            icon: <Globe2 size={32} />,
            title: {
                ar: "تغطية عالمية",
                en: "Global Coverage",
                ru: "Мировой охват",
                fr: "Couverture mondiale",
                es: "Cobertura global"
            },
            desc: {
                ar: "خدماتنا متكاملة ومتاحة في أكثر من 100 دولة حول العالم.",
                en: "Our comprehensive services are available in over 100 countries worldwide.",
                ru: "Наши комплексные услуги доступны более чем в 100 странах мира.",
                fr: "Nos services complets sont disponibles dans plus de 100 pays à travers le monde.",
                es: "Nuestros servicios integrales están disponibles en más de 100 países del mundo."
            }
        },
        {
            id: "clear-pricing",
            icon: <Tag size={32} />,
            title: {
                ar: "أسعار واضحة",
                en: "Clear Pricing",
                ru: "Прозрачные цены",
                fr: "Tarifs transparents",
                es: "Precios transparentes"
            },
            desc: {
                ar: "أسعار تنافسية واضحة ومحددة بالكامل دون أي رسوم خفية.",
                en: "Competitive and fully transparent pricing with no hidden fees.",
                ru: "Конкурентоспособные и прозрачные цены без скрытых комиссий.",
                fr: "Des tarifs compétitifs et transparents, sans frais cachés.",
                es: "Precios competitivos y transparentes, sin tarifas ocultas."
            }
        },
        {
            id: "support-247",
            icon: <Headphones size={32} />,
            title: {
                ar: "دعم 24/7",
                en: "24/7 Support",
                ru: "Поддержка 24/7",
                fr: "Support 24/7",
                es: "Soporte 24/7"
            },
            desc: {
                ar: "فريق دعم مخصص متاح على مدار الساعة لخدمتكم ومساندتكم في أي وقت.",
                en: "A dedicated support team available around the clock to assist you at any time.",
                ru: "Выделенная команда поддержки готова помочь вам в любое время суток.",
                fr: "Une équipe d'assistance dédiée disponible 24h/24 pour vous accompagner.",
                es: "Un equipo de soporte dedicado disponible las 24 horas para ayudarle."
            }
        },
        {
            id: "fast-execution",
            icon: <Clock size={32} />,
            title: {
                ar: "سرعة في التنفيذ",
                en: "Fast Execution",
                ru: "Быстрое исполнение",
                fr: "Exécution rapide",
                es: "Ejecución rápida"
            },
            desc: {
                ar: "ننهي جميع الإجراءات القانونية واللوجستية في أسرع وقت ممكن.",
                en: "We complete all legal and logistical procedures in the shortest time possible.",
                ru: "Мы завершаем все юридические и логистические процедуры в кратчайшие сроки.",
                fr: "Nous finalisons toutes les démarches légales et logistiques dans les plus brefs délais.",
                es: "Completamos todos los trámites legales y logísticos en el menor tiempo posible."
            }
        },
        {
            id: "long-experience",
            icon: <Award size={32} />,
            title: {
                ar: "خبرة طويلة",
                en: "Long Experience",
                ru: "Многолетний опыт",
                fr: "Longue expérience",
                es: "Larga experiencia"
            },
            desc: {
                ar: "سنوات طويلة من الخبرة التخصصية والدراية الكاملة بكافة القوانين الدولية.",
                en: "Long years of specialized experience and full compliance with international laws.",
                ru: "Многолетний специализированный опыт и полное знание международных законов.",
                fr: "De longues années d'expérience spécialisée et maîtrise des lois internationales.",
                es: "Años de experiencia especializada y pleno conocimiento de las leyes internacionales."
            }
        }
    ];

    const headerVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: "easeOut" }
        }
    };

    const gridVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: "easeOut" }
        }
    };

    return (
        <section className="why-radwan-section">
            <div className={`container ${isRtl ? "direction-rtl" : "direction-ltr"}`}>

                <motion.div
                    className="section-header"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <h2>{t("title")}</h2>
                    <div className="header-divider">
                        <span className="dot"></span>
                        <span className="line"></span>
                        <span className="dot"></span>
                    </div>
                </motion.div>

                <motion.div
                    className="features-grid"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    {featuresList.map((feature) => {
                        const featTitle = feature.title[currentLocale as keyof typeof feature.title] || feature.title.en;
                        const featDesc = feature.desc[currentLocale as keyof typeof feature.desc] || feature.desc.en;

                        return (
                            <motion.div
                                className="feature-card-glass"
                                key={feature.id}
                                variants={cardVariants}
                            >
                                <div className="card-icon-box">
                                    {feature.icon}
                                </div>
                                <div className="card-info-box">
                                    <h3>{featTitle}</h3>
                                    <p>{featDesc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}