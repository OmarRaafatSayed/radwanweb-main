"use client";

import { useEffect, useState, useRef } from "react";
import "./StatsSection.scss";
import { useLocale } from "next-intl";
import { Globe2, Plane, Users, Award } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface CountUpProps {
    end: number;
    duration?: number;
    shouldStart: boolean;
}

function CountUp({ end, duration = 2000, shouldStart }: CountUpProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!shouldStart) return;

        let startTime: number | null = null;
        const startValue = 0;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            const currentValue = Math.floor(startValue + percentage * (end - startValue));
            setCount(currentValue);

            if (percentage < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, shouldStart]);

    return <span>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
    const currentLocale = useLocale();
    const isRtl = currentLocale === "ar";

    const sectionRef = useRef<HTMLDivElement>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const statsList = [
        {
            id: "countries",
            icon: <Globe2 size={36} />,
            number: 100,
            suffix: "+",
            title: {
                ar: "دولة نخدمها",
                en: "Countries Served",
                ru: "Обслуживаемые страны",
                fr: "Pays desservis",
                es: "Países servidos"
            }
        },
        {
            id: "operations",
            icon: <Plane size={36} />,
            number: 8450,
            suffix: "+",
            title: {
                ar: "عملية نقل ناجحة",
                en: "Successful Repatriations",
                ru: "Успешные репатриации",
                fr: "Rapatriements réussis",
                es: "Repatriaciones exitosas"
            }
        },
        {
            id: "clients",
            icon: <Users size={36} />,
            number: 15000,
            suffix: "+",
            title: {
                ar: "عميل راضي",
                en: "Satisfied Clients",
                ru: "Довольные клиенты",
                fr: "Clients satisfaits",
                es: "Clientes satisfechos"
            }
        },
        {
            id: "experience",
            icon: <Award size={36} />,
            number: 12,
            suffix: "+",
            title: {
                ar: "سنوات من الخبرة",
                en: "Years of Experience",
                ru: "Лет опыта",
                fr: "Années d'expérience",
                es: "Años de experiencia"
            }
        }
    ];

    const gridVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.05
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: "easeOut" }
        }
    };

    return (
        <section className="stats-section" ref={sectionRef}>
            <div className={`container ${isRtl ? "direction-rtl" : "direction-ltr"}`}>
                <motion.div
                    className="stats-grid"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    {statsList.map((stat) => {
                        const statTitle = stat.title[currentLocale as keyof typeof stat.title] || stat.title.en;

                        return (
                            <motion.div
                                className="stat-card"
                                key={stat.id}
                                variants={cardVariants}
                            >
                                <div className="stat-icon-wrapper">
                                    {stat.icon}
                                </div>
                                <div className="stat-content">
                                    <div className="stat-number">
                                        <CountUp end={stat.number} shouldStart={isIntersecting} />
                                        <span className="suffix">{stat.suffix}</span>
                                    </div>
                                    <p className="stat-title">{statTitle}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}