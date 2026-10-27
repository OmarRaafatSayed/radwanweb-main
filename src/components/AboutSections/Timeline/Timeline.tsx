"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import "./Timeline.scss";

interface TimelineItem {
    step: string;
    title: string;
    desc: string;
}

export default function Timeline() {
    const t = useTranslations("Timeline");
    const params = useParams();
    const locale = (params?.locale as string) || "ar";

    const content: Record<string, TimelineItem[]> = {
        ar: [
            {
                step: "01",
                title: "تأسيس نابع من الحاجة",
                desc: "تأسست شركة الرضوان عام 2012 بهدف تقديم خدمات نقل وتجهيز المتوفين باحترافية عالية، انطلاقاً من الحاجة الماسة لهذه الخدمات في مجتمعاتنا."
            },
            {
                step: "02",
                title: "شراكة وموثوقية ممتدة",
                desc: "على مدار أكثر من 12 عاماً، نجحنا في بناء شبكة واسعة من الشركاء المعتمدين حول العالم لضمان أعلى مستويات الكفاءة."
            },
            {
                step: "03",
                title: "دقة وسرية كاملة",
                desc: "نلتزم بإنهاء كافة الإجراءات الرسمية والقانونية بسرعة ودقة تامة، مع تقديم متابعة مستمرة على مدار الساعة حتى التسليم النهائي."
            }
        ],
        en: [
            {
                step: "01",
                title: "Founded on Real Need",
                desc: "Radwan was established in 2012 to provide professional deceased transportation services with high standards, driven by the urgent need for such care."
            },
            {
                step: "02",
                title: "Extended Trust & Network",
                desc: "Over more than 12 years, we have built a vast network of accredited partners worldwide to ensure the highest efficiency."
            },
            {
                step: "03",
                title: "Accuracy & Confidentiality",
                desc: "We commit to completing all official and legal procedures with speed and precision, offering round-the-clock tracking until final delivery."
            }
        ],
        ru: [
            {
                step: "01",
                title: "Основано на реальной потребности",
                desc: "Компания Радван была создана в 2012 году для предоставления профессиональных услуг по транспортировке усопших в соответствии с высокими стандартами."
            },
            {
                step: "02",
                title: "Доверие и широкая сеть",
                desc: "За более чем 12 лет мы создали глобальную сеть надежных партнеров по всему миру, обеспечивая максимальную эффективность."
            },
            {
                step: "03",
                title: "Точность и конфиденциальность",
                desc: "Мы берем на себя выполнение всех официальных и юридических процедур быстро и точно, обеспечивая круглосуточный контроль."
            }
        ],
        fr: [
            {
                step: "01",
                title: "Fondé sur un besoin réel",
                desc: "Radwan a été créée en 2012 pour offrir des services de transport de défunts professionnels et respectueux, répondant à un besoin essentiel."
            },
            {
                step: "02",
                title: "Confiance & Réseau étendu",
                desc: "Depuis plus de 12 ans, nous avons tissé un solide réseau de partenaires agréés à travers le monde afin de garantir la meilleure efficacité."
            },
            {
                step: "03",
                title: "Précision & Confidentialité",
                desc: "Nous assurons la prise en charge de toutes les démarches administratives et légales avec rapidité et discrétion, avec un suivi permanent."
            }
        ],
        es: [
            {
                step: "01",
                title: "Fundado por una necesidad real",
                desc: "Radwan se constituyó en 2012 con el fin de prestar servicios profesionales de traslado de fallecidos bajo estrictos parámetros de dignidad."
            },
            {
                step: "02",
                title: "Confianza y Red global",
                desc: "A lo largo de más de 12 años, hemos consolidado una red global de colaboradores autorizados para asegurar la máxima eficacia operativa."
            },
            {
                step: "03",
                title: "Precisión y Discreción",
                desc: "Garantizamos la tramitación de todos los requisitos legales con agilidad y absoluta reserva, manteniendo un canal de comunicación continuo."
            }
        ]
    };

    const currentItems = content[locale] || content["ar"];

    const sectionHeaderVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const cardVariants = (index: number): Variants => ({
        hidden: {
            opacity: 0,
            x: index % 2 === 0 ? -25 : 25,
            y: 12
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.45, ease: "easeOut" }
        }
    });

    const lineVariants: Variants = {
        hidden: { scaleY: 0 },
        visible: {
            scaleY: 1,
            transition: { duration: 1.0, ease: "easeInOut" }
        }
    };

    return (
        <section className="timeline-section">
            <div className="timeline-dots-bg"></div>

            <div className="timeline-container">
                <motion.div
                    className="timeline-header"
                    variants={sectionHeaderVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <span className="timeline-badge">{t("badge")}</span>
                    <h2 className="timeline-main-title">{t("mainTitle")}</h2>
                    <p className="timeline-desc">{t("description")}</p>
                </motion.div>

                <div className="timeline-wrapper">
                    <motion.div
                        className="timeline-center-line"
                        variants={lineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    ></motion.div>

                    {currentItems.map((item, index) => (
                        <div
                            key={index}
                            className={`timeline-row ${index % 2 === 0 ? "left-aligned" : "right-aligned"}`}
                        >
                            <motion.div
                                className="timeline-card-wrapper"
                                variants={cardVariants(index)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                            >
                                <div className="timeline-dot">
                                    <div className="dot-inner"></div>
                                </div>
                                <div className="timeline-card">
                                    <span className="timeline-step">{item.step}</span>
                                    <h3 className="timeline-card-title">{item.title}</h3>
                                    <p className="timeline-card-desc">{item.desc}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}