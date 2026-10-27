"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqCategoriesData, faqItemsData, FAQItem } from "@/data/faq";
import "./FAQAccordion.scss";

export default function FAQAccordion() {
    const currentLocale = useLocale() as "ar" | "en" | "ru" | "fr" | "es";
    const [activeTab, setActiveTab] = useState<string>("all");
    const [openId, setOpenId] = useState<string | null>("1");

    const filteredItems = activeTab === "all"
        ? faqItemsData
        : faqItemsData.filter(item => item.categoryId === activeTab);

    const toggleAccordion = (id: string) => {
        setOpenId(prev => (prev === id ? null : id));
    };

    return (
        <section className="faq-content-section">
            <div className="container">
                {/* 1. أزرار الفلترة (Tabs) */}
                <div className="faq-tabs-wrapper">
                    {faqCategoriesData.map(cat => {
                        const label = cat.label[currentLocale] || cat.label.en;
                        return (
                            <button
                                key={cat.id}
                                className={`tab-btn ${activeTab === cat.id ? "active" : ""}`}
                                onClick={() => setActiveTab(cat.id)}
                            >
                                {label}
                            </button>
                        );
                    })}
                </div>

                {/* 2. شبكة الأسئلة (Accordion List) */}
                <div className="faq-accordion-list">
                    <AnimatePresence mode="wait">
                        {filteredItems.map((item: FAQItem) => {
                            const question = item.question[currentLocale] || item.question.en;
                            const answer = item.answer[currentLocale] || item.answer.en;
                            const isOpen = openId === item.id;

                            return (
                                <motion.div
                                    key={item.id}
                                    className={`faq-card ${isOpen ? "open" : ""}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <button
                                        type="button"
                                        className="faq-question-btn"
                                        onClick={() => toggleAccordion(item.id)}
                                    >
                                        <div className="question-text">
                                            <HelpCircle size={20} className="q-icon" />
                                            <h3>{question}</h3>
                                        </div>
                                        <ChevronDown size={20} className={`arrow-icon ${isOpen ? "rotated" : ""}`} />
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                className="faq-answer-box"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <p>{answer}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}