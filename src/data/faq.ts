export interface FAQItem {
    id: string;
    categoryId: "general" | "procedures" | "caskets" | "costs";
    question: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    answer: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
}

export interface FAQCategory {
    id: "all" | "general" | "procedures" | "caskets" | "costs";
    label: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
}

export const faqCategoriesData: FAQCategory[] = [
    {
        id: "all",
        label: {
            ar: "جميع الأسئلة",
            en: "All Questions",
            ru: "Все вопросы",
            fr: "Toutes les questions",
            es: "Todas las preguntas"
        }
    },
    {
        id: "procedures",
        label: {
            ar: "الإجراءات والتصاريح",
            en: "Procedures & Permits",
            ru: "Процедуры и разрешения",
            fr: "Procédures et permis",
            es: "Procedimientos y permisos"
        }
    },
    {
        id: "caskets",
        label: {
            ar: "صناديق الشحن والتجهيز",
            en: "Caskets & Preparation",
            ru: "Гробы и подготовка",
            fr: "Cercueils et préparation",
            es: "Ataúdes y preparación"
        }
    },
    {
        id: "costs",
        label: {
            ar: "التكاليف والخدمات",
            en: "Costs & Services",
            ru: "Стоимость и услуги",
            fr: "Coûts et services",
            es: "Costos y servicios"
        }
    }
];

export const faqItemsData: FAQItem[] = [
    {
        id: "1",
        categoryId: "procedures",
        question: {
            ar: "ما هي الإجراءات الأولى الواجب اتخاذها عند وفاة شخص خارج دولته؟",
            en: "What are the first steps to take upon a death abroad?",
            ru: "Каковы первые шаги при смерти человека за границей?",
            fr: "Quelles sont les premières démarches à suivre en cas de décès à l'étranger ?",
            es: "¿Cuáles son los primeros pasos a seguir ante un fallecimiento en el extranjero?"
        },
        answer: {
            ar: "يجب التواصل مع شركة رضوان فوراً، حيث يتولى فريقنا التنسيق مع المستشفى، السفارة، والجهات الأمنية والمحلية لاستخراج شهادة الوفاة وتصاريح السفر الرسمية.",
            en: "Contact Radwan Company immediately. Our team handles coordination with hospitals, embassies, and authorities to issue death certificates and transit permits.",
            ru: "Свяжитесь с компанией Радван. Наша команда организует работу с больницами, посольствами и властями для получения свидетельства о смерти и разрешений.",
            fr: "Contactez immédiatement la société Radwan. Notre équipe se charge des démarches avec les hôpitaux, ambassades et autorités pour les permis de transport.",
            es: "Póngase en contacto con la Compañía Radwan de inmediato. Nuestro equipo gestiona todos los trámites con hospitales, embajadas y autoridades."
        }
    },
    {
        id: "2",
        categoryId: "caskets",
        question: {
            ar: "هل الصناديق المستعملة لنقل المتوفين مطابقة للمواصفات الدولية للطيران؟",
            en: "Are the caskets used for transport compliant with international airline standards?",
            ru: "Соответствуют ли гробы международным стандартам авиаперевозок?",
            fr: "Les cercueils utilisés sont-ils conformes aux normes internationales du fret aérien ?",
            es: "¿Los ataúdes utilizados cumplen con las normas internacionales de transporte aéreo?"
        },
        answer: {
            ar: "نعم، نستخدم صناديق خشبية فاخرة مبطنة بآزتك/زنك معزول ومُحكم الإغلاق وفقاً لاشتراطات منظمة IATA والخطوط الجوية العالمية وضوابط الحجر الصحي.",
            en: "Yes, we provide premium wooden caskets with sealed zinc lining compliant with IATA air transport and health control regulations.",
            ru: "Да, мы предоставляем высококачественные деревянные гробы с герметичным цинковым вкладышем, соответствующим правилам IATA и санитарным нормам.",
            fr: "Oui, nous fournissons des cercueils en bois de qualité avec doublage en zinc étanche, conformes aux normes IATA et aux réglementations sanitaires.",
            es: "Sí, proporcionamos ataúdes de madera de alta calidad con revestimiento de zinc sellado, conformes con la IATA y normativas sanitarias."
        }
    },
    {
        id: "3",
        categoryId: "procedures",
        question: {
            ar: "كم تستغرق إجابة وتخليص إجراءات شحن الجثمان دولياً؟",
            en: "How long does the international deceased repatriation process take?",
            ru: "Сколько времени занимает процесс международной репатриации?",
            fr: "Combien de temps prend la procédure de rapatriement international ?",
            es: "¿Cuánto tiempo toma el proceso de repatriación internacional?"
        },
        answer: {
            ar: "تستغرق العملية عادةً بين 24 إلى 72 ساعة اعتماداً على موافقة السفارة، إجراءات القنصلية، وجداول رحلات الطيران المتاحة.",
            en: "The process usually takes between 24 to 72 hours, depending on embassy approvals, consular clearance, and flight availability.",
            ru: "Обычно процесс занимает от 24 до 72 часов в зависимости от одобрения посольства, консульских процедур и расписания авиарейсов.",
            fr: "Le processus prend généralement de 24 à 72 heures, selon les approbations consulaires et les disponibilités des vols.",
            es: "El proceso suele tomar entre 24 y 72 horas, dependiendo de las aprobaciones consulares y disponibilidad de vuelos."
        }
    },
    {
        id: "4",
        categoryId: "costs",
        question: {
            ar: "كيف يتم تحديد تكلفة نقل وتجهيز المتوفى؟",
            en: "How is the cost of deceased transport and care calculated?",
            ru: "Как рассчитывается стоимость транспортировки и подготовки усопшего?",
            fr: "Comment est calculé le coût du transport et de la préparation du défunt ?",
            es: "¿Cómo se calcula el costo del traslado y preparación del fallecido?"
        },
        answer: {
            ar: "تتحدد التكلفة بناءً على الدولة المغادر منها والوجهة، وزن وحجم صندوق الشحن، ورسوم الشحن الجوي والتصاريح القنصلية. ونقدم شفافية كاملة بدون أي تكاليف خفية.",
            en: "Costs depend on departure and destination countries, casket weight and dimensions, air freight rates, and consular fees, provided with full transparency.",
            ru: "Стоимость зависит от стран отправления и назначения, веса и габаритов гроба, тарифов авиаперевозки и консульских сборов.",
            fr: "Le coût dépend des pays de départ et de destination, du poids et de la taille du cercueil, des tarifs aériens et des frais consulaires.",
            es: "El costo depende de los países de origen y destino, peso y dimensiones del ataúd, tarifas de carga aérea y tasas consulares."
        }
    }
];