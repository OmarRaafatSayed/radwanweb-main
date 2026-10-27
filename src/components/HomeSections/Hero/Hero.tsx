"use client";

import "./Hero.scss";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PhoneCall, Phone, Globe, Scale, Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function Hero() {
    const currentLocale = useLocale();
    const isRtl = currentLocale === "ar";

    const slidesData = [
        {
            id: 1,
            images: {
                rtl: "/images/hero-slide-1-rtl.png",
                ltr: "/images/hero-slide-1-ltr.png"
            },
            title: {
                ar: "نقل المتوفين دولياً بكل احترام واحترافية",
                en: "International Repatriation with Utmost Respect",
                ru: "Международная репатриация с глубоким уважением",
                fr: "Rapatriement international avec le plus grand respect",
                es: "Repatriación internacional con el máximo respeto"
            },
            description: {
                ar: "تتولى شركة الرضوان جميع إجراءات نقل المتوفين بين مختلف دول العالم بسرعة وأمان وسهولة تامة.",
                en: "Radwan Company handles all deceased transportation procedures between world countries with speed, safety, and ease.",
                ru: "Компания Радван берет на себя все процедуры по перевозке умерших между странами мира быстро, безопасно и легко.",
                fr: "La société Radwan prend en charge toutes les procédures de transport des défunts entre les pays du monde avec rapidité, sécurité et facilité.",
                es: "La empresa Radwan se encarga de todos los trámites de traslado de fallecidos entre países del mundo con rapidez, seguridad y facilidad."
            }
        },
        {
            id: 2,
            images: {
                rtl: "/images/hero-slide-1-rtl.png",
                ltr: "/images/hero-slide-1-ltr.png"
            },
            title: {
                ar: "تصاريح الدفن والإجراءات القانونية المتكاملة",
                en: "Burial Permits & Integrated Legal Procedures",
                ru: "Разрешения на захоронение и комплексные юридические процедуры",
                fr: "Permis d'inhumation et procédures juridiques intégrées",
                es: "Permisos de entierro y procedimientos legales integrados"
            },
            description: {
                ar: "نحن هنا لتخفيف العبء عنكم؛ ننهي كافة الأوراق الرسمية وتصاريح الدفن بسرعة فائقة وبأعلى تفهم.",
                en: "We are here to ease your burden; we complete all official paperwork and burial permits swiftly and compassionately.",
                ru: "Мы здесь, чтобы облегчить ваше бремя; мы быстро и сочувственно оформляем все официальные документы.",
                fr: "Nous sommes là pour alléger votre fardeau ; nous remplissons toutes les formalités officielles.",
                es: "Estamos aquí para aliviar su carga; completamos todos los trámites oficiales."
            }
        }
    ];

    const featuresData = [
        {
            icon: <Globe size={20} />,
            title: {
                ar: "تغطية عالمية",
                en: "Global Coverage",
                ru: "Глобальное покрытие",
                fr: "Couverture mondiale",
                es: "Cobertura global"
            },
            desc: {
                ar: "أكثر من 100 دولة",
                en: "Over 100 countries",
                ru: "Более 100 стран",
                fr: "Plus de 100 pays",
                es: "Más de 100 países"
            }
        },
        {
            icon: <Scale size={20} />,
            title: {
                ar: "إجراءات قانونية متكاملة",
                en: "Full Legal Procedures",
                ru: "Комплексные юридические процедуры",
                fr: "Procédures légales complètes",
                es: "Procedimientos legales completos"
            },
            desc: {
                ar: "استخراج جميع التصاريح",
                en: "All permits handled",
                ru: "Оформление всех разрешений",
                fr: "Tous les permis gérés",
                es: "Todos los permisos gestionados"
            }
        },
        {
            icon: <Users size={20} />,
            title: {
                ar: "فريق متخصص",
                en: "Specialized Team",
                ru: "Специализированная команда",
                fr: "Équipe spécialisée",
                es: "Equipo especializado"
            },
            desc: {
                ar: "خبرة طويلة في المجال",
                en: "Long industry experience",
                ru: "Длинный опыт в индустрии",
                fr: "Longue expérience dans le domaine",
                es: "Larga experiencia en el sector"
            }
        }
    ];

    const ctaRequestText = {
        ar: "طلب خدمة الآن",
        en: "Request Service Now",
        ru: "Заказать услугу сейчас",
        fr: "Demander un service",
        es: "Solicitar servicio"
    };

    const ctaContactText = {
        ar: "تواصل معنا",
        en: "Contact Us",
        ru: "Связаться с нами",
        fr: "Contactez-nous",
        es: "Contáctenos"
    };

    return (
        <section className="hero-section">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1000}
                dir={isRtl ? "rtl" : "ltr"}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true, el: ".hero-pagination" }}
                className="hero-swiper"
            >
                {slidesData.map((slide) => {
                    const slideBg = isRtl ? slide.images.rtl : slide.images.ltr;
                    const slideTitle = slide.title[currentLocale as keyof typeof slide.title] || slide.title.en;
                    const slideDesc = slide.description[currentLocale as keyof typeof slide.description] || slide.description.en;

                    return (
                        <SwiperSlide key={slide.id} className="hero-slide">
                            <div className="slide-bg-container">
                                <Image
                                    src={slideBg}
                                    alt={slideTitle}
                                    fill
                                    priority
                                    unoptimized
                                    className="hero-image-render"
                                />
                                <div className="slide-overlay-mask" />
                            </div>

                            <div className="container hero-layout-container">
                                <div className="hero-main-content">
                                    <h1>{slideTitle}</h1>
                                    <p>{slideDesc}</p>

                                    <div className="hero-action-buttons">
                                        <Link href="/request-service" className="hero-btn-gold">
                                            <PhoneCall size={18} />
                                            <span>{ctaRequestText[currentLocale as keyof typeof ctaRequestText] || ctaRequestText.en}</span>
                                        </Link>
                                        <Link href="/contact" className="hero-btn-outline">
                                            <Phone size={18} />
                                            <span>{ctaContactText[currentLocale as keyof typeof ctaContactText] || ctaContactText.en}</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}

                <div className="hero-dots-indicator">
                    <div className="container">
                        <div className="hero-pagination"></div>
                    </div>
                </div>
            </Swiper>

            <div className="hero-bottom-features">
                <div className="container features-wrapper">
                    {featuresData.map((feat, index) => {
                        const featTitle = feat.title[currentLocale as keyof typeof feat.title] || feat.title.en;
                        const featDesc = feat.desc[currentLocale as keyof typeof feat.desc] || feat.desc.en;

                        return (
                            <div className="feature-item-card" key={index}>
                                <div className="feature-item-icon">{feat.icon}</div>
                                <div className="feature-item-text">
                                    <h3>{featTitle}</h3>
                                    <p>{featDesc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}