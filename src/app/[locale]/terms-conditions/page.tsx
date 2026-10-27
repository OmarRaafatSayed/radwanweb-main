import { Metadata } from "next";
import { notFound } from "next/navigation";
import "./TermsConditions.scss";

interface Props {
    params: Promise<{ locale: string }>;
}

const termsData = {
    ar: {
        title: "الشروط والأحكام",
        subtitle: "يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدماتنا لتنظيم حقوق وواجبات الطرفين.",
        lastUpdated: "آخر تحديث: أغسطس 2026",
        sections: [
            {
                id: "acceptance",
                title: "1. القبول بالشروط",
                content: "باستخدامك لمنصة وخدمات شركة رضوان لنقل وشحن المتوفين، فإنك تقر بالموافقة الكاملة على الإلتزام بهذه الشروط والأحكام والامتثال لكافة القوانين واللوائح المنظمة لنقل وشحن الجثامين دولياً ومحلياً."
            },
            {
                id: "services-scope",
                title: "2. نطاق الخدمات والمكلفين",
                content: "تلتزم الشركة بتقديم كافة خدمات التنسيق القنصلي، استخراج التصاريح الصحية، وتجهيز وتغليف الصناديق المبطنة، بالإضافة إلى تنظيم الشحن الجوي والنقل البري وفق المستندات والمعلومات المقدمة من قبل العميل أو ذوي المتوفى."
            },
            {
                id: "client-obligations",
                title: "3. التزامات العميل والمستندات",
                content: "يتحمل العميل المسؤولية الكاملة عن صحة ودقة كافة المستندات والبيانات الشخصية والطبية الصادرة من الجهات الرسمية والمقدمة للشركة للبدء في إجراءات الشحن والنقل والتخليص الجمركي."
            },
            {
                id: "cancellations-refunds",
                title: "4. سياسة الإلغاء والتعديل",
                content: "نظراً لطبيعة الخدمات العاجلة والرسوم المباشرة المدفوعة للجهات الحكومية وشركات الطيران، فإن الإلغاء يخضع للمرحلة التي وصلت إليها الإجراءات، مع خصم المصاريف الإدارية والرسوم الفعلية المسددة."
            },
            {
                id: "liability-limits",
                title: "5. حدود المسؤولية والقوة القاهرة",
                content: "لا تتحمل الشركة المسؤولية عن أي تأخير خارج عن إرادتها الناتجة عن تغيير جدول رحلات الطيران، أو القرارات الاستثنائية الصادرة من القنصليات والجهات الجمركية والصحية، أو ظروف القوة القاهرة."
            },
            {
                id: "governing-law",
                title: "6. القانون الساري والنزاعات",
                content: "تخضع هذه الشروط والأحكام وتُفسر وفقاً للقوانين والتشريعات المحلية المعمول بها، ويتم تسوية أي نزاع قد ينشأ بالطرق الودية أولاً أو عبر المحاكم المختصة."
            }
        ]
    },
    en: {
        title: "Terms & Conditions",
        subtitle: "Please read these Terms and Conditions carefully before using our services to govern our mutual agreement.",
        lastUpdated: "Last Updated: August 2026",
        sections: [
            {
                id: "acceptance",
                title: "1. Acceptance of Terms",
                content: "By accessing or using the platform and services of Radwan Funeral & Repatriation Services, you agree to be bound by these Terms and Conditions and strictly comply with international deceased transit regulations."
            },
            {
                id: "services-scope",
                title: "2. Scope of Services",
                content: "The company commits to executing consular coordination, issuing health permits, preparing zinc-lined caskets, and arranging air freight cargo and ground transport based on details provided by the client."
            },
            {
                id: "client-obligations",
                title: "3. Client Obligations & Documents",
                content: "The client assumes full responsibility for the accuracy and authenticity of all personal and medical documentation provided to initiate customs clearance and transportation approvals."
            },
            {
                id: "cancellations-refunds",
                title: "4. Cancellations & Alterations",
                content: "Due to the urgent nature of services and direct third-party payments to airlines and official bodies, cancellations are subject to procedure status, deducting non-refundable incurred fees."
            },
            {
                id: "liability-limits",
                title: "5. Limitation of Liability",
                content: "The company shall not be held liable for delays caused by airline schedule changes, diplomatic consular decisions, border controls, or force majeure events beyond operational control."
            },
            {
                id: "governing-law",
                title: "6. Governing Law & Jurisdiction",
                content: "These Terms and Conditions are governed by applicable national laws, and any disputes shall first be settled amicably or through relevant competent courts."
            }
        ]
    },
    ru: {
        title: "Условия использования",
        subtitle: "Пожалуйста, внимательно ознакомьтесь с условиями перед использованием наших услуг.",
        lastUpdated: "Обновлено: Август 2026",
        sections: [
            {
                id: "acceptance",
                title: "1. Принятие условий",
                content: "Используя услуги службы репатриации Радван, вы соглашаетесь с данными правилами и условиями международных перевозкок."
            },
            {
                id: "services-scope",
                title: "2. Объем услуг",
                content: "Компания обязуется выполнять консульское взаимодействие, подготовку документов, бронирование авиаперевозок и ритуальные услуги."
            },
            {
                id: "client-obligations",
                title: "3. Обязательства клиента",
                content: "Клиент несет полную ответственность за достоверность предоставленных документов усопшего."
            },
            {
                id: "cancellations-refunds",
                title: "4. Отмена и возврат",
                content: "Отмена зависит от этапа оформления с удержанием уже уплаченных государственных и авиационных сборов."
            },
            {
                id: "liability-limits",
                title: "5. Ограничение ответственности",
                content: "Компания не несет ответственности за задержки рейсов авиакомпаний или решения консульских органов."
            },
            {
                id: "governing-law",
                title: "6. Применимое право",
                content: "Все споры регулируются в соответствии с действующим законодательством."
            }
        ]
    },
    fr: {
        title: "Conditions Générales",
        subtitle: "Veuillez lire attentivement ces conditions avant d'utiliser nos services.",
        lastUpdated: "Mise à jour: Août 2026",
        sections: [
            {
                id: "acceptance",
                title: "1. Acceptation des Conditions",
                content: "En utilisant nos services de rapatriement, vous acceptez d'être lié par ces conditions générales d'utilisation."
            },
            {
                id: "services-scope",
                title: "2. Portée des Services",
                content: "Nous assurons la coordination consulaire, les démarches sanitaires, la préparation des cercueils et le fret aérien."
            },
            {
                id: "client-obligations",
                title: "3. Obligations du Client",
                content: "Le client est responsable de l'exactitude des documents originaux fournis pour le rapatriement."
            },
            {
                id: "cancellations-refunds",
                title: "4. Annulation et Modification",
                content: "Les annulations dépendent de l'avancement des démarches avec déduction των frais déjà engagés."
            },
            {
                id: "liability-limits",
                title: "5. Limite de Responsabilité",
                content: "Nous ne sommes pas responsables des retards de vols ou des décisions consulaires d'urgence."
            },
            {
                id: "governing-law",
                title: "6. Droit Applicable",
                content: "Ces conditions sont régies par les lois locales applicables."
            }
        ]
    },
    es: {
        title: "Términos y Condiciones",
        subtitle: "Lea atentamente estos términos antes de utilizar nuestros servicios.",
        lastUpdated: "Actualizado: Agosto 2026",
        sections: [
            {
                id: "acceptance",
                title: "1. Aceptación de Términos",
                content: "Al utilizar los servicios de repatriación Radwan, acepta cumplir con estos términos y condiciones legales."
            },
            {
                id: "services-scope",
                title: "2. Alcance de Servicios",
                content: "Garantizamos trámites consulares, permisos sanitarios, preparación de ataúdes y reserva de transporte aéreo."
            },
            {
                id: "client-obligations",
                title: "3. Obligaciones del Cliente",
                content: "El cliente asume la responsabilidad total sobre la autenticidad de los documentos oficiales presentados."
            },
            {
                id: "cancellations-refunds",
                title: "4. Cancelaciones",
                content: "Las cancelaciones están sujetas al estado del trámite y deducción de gastos oficiales ya abonados."
            },
            {
                id: "liability-limits",
                title: "5. Limitación de Responsabilidad",
                content: "No nos hacemos responsables de retrasos aéreos ni resoluciones gubernamentales extraordinarias."
            },
            {
                id: "governing-law",
                title: "6. Ley Aplicable",
                content: "Estos términos se rigen conforme a la legislación nacional vigente."
            }
        ]
    }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale)
        ? (locale as "ar" | "en" | "ru" | "fr" | "es")
        : "ar";

    const data = termsData[currentLocale];
    const baseUrl = "https://radwanfs.com";

    const ogLocales = {
        ar: "ar_EG",
        en: "en_US",
        ru: "ru_RU",
        fr: "fr_FR",
        es: "es_ES"
    };

    return {
        title: `${data.title} | رضوان لنقل الجثامين دولياً`,
        description: data.subtitle,

        openGraph: {
            title: `${data.title} | Radwan Funeral Services`,
            description: data.subtitle,
            url: `${baseUrl}/${currentLocale}/terms-conditions`,
            siteName: "Radwan Funeral Services",
            locale: ogLocales[currentLocale],
            type: "website",
            images: [
                {
                    url: `${baseUrl}/images/og-terms.jpg`,
                    width: 1200,
                    height: 630,
                    alt: data.title
                }
            ]
        },

        alternates: {
            languages: {
                ar: `/ar/terms-conditions`,
                en: `/en/terms-conditions`,
                ru: `/ru/terms-conditions`,
                fr: `/fr/terms-conditions`,
                es: `/es/terms-conditions`
            }
        },

        robots: {
            index: true,
            follow: true
        }
    };
}

export default async function TermsConditionsPage({ params }: Props) {
    const { locale } = await params;
    const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale)
        ? (locale as "ar" | "en" | "ru" | "fr" | "es")
        : "ar";

    const data = termsData[currentLocale];

    if (!data) {
        notFound();
    }

    return (
        <main className="terms-conditions-page">
            <section className="terms-hero">
                <h1 className="page-title">{data.title}</h1>
                <p className="page-subtitle">{data.subtitle}</p>
                <span className="last-updated">{data.lastUpdated}</span>
            </section>

            <section className="terms-body-section">
                <aside className="terms-sidebar">
                    <div className="sticky-nav">
                        <span className="nav-title">
                            {currentLocale === "ar" && "الفهرس السريع"}
                            {currentLocale === "en" && "Quick Index"}
                            {currentLocale === "ru" && "Быстрый указатель"}
                            {currentLocale === "fr" && "Index Rapide"}
                            {currentLocale === "es" && "Índice Rápido"}
                        </span>
                        <nav className="nav-links">
                            {data.sections.map((sec) => (
                                <a key={sec.id} href={`#${sec.id}`} className="nav-link">
                                    {sec.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                <div className="terms-content-flow">
                    {data.sections.map((section) => (
                        <article key={section.id} id={section.id} className="terms-card-block">
                            <h2 className="block-title">{section.title}</h2>
                            <p className="block-paragraph">{section.content}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}