export interface BlogCategory {
    id: string;
    slug: string;
    count: number;
    name: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
}

export const categoriesData: BlogCategory[] = [
    {
        id: "all",
        slug: "all",
        count: 12,
        name: {
            ar: "جميع المقالات",
            en: "All Articles",
            ru: "Все статьи",
            fr: "Tous les articles",
            es: "Todos los artículos"
        }
    },
    {
        id: "procedures",
        slug: "procedures",
        count: 5,
        name: {
            ar: "إجراءات ونصوص قانونية",
            en: "Procedures & Regulations",
            ru: "Процедуры и правила",
            fr: "Procédures et réglementations",
            es: "Procedimientos y regulaciones"
        }
    },
    {
        id: "costs",
        slug: "costs",
        count: 3,
        name: {
            ar: "تكاليف وأسعار",
            en: "Costs & Pricing",
            ru: "Расходы и цены",
            fr: "Coûts et tarifs",
            es: "Costos y precios"
        }
    },
    {
        id: "embassies",
        slug: "embassies",
        count: 2,
        name: {
            ar: "سفارات وتنسيق دبلوماسي",
            en: "Embassies & Consulates",
            ru: "Посольства и консульства",
            fr: "Ambassades et consulats",
            es: "Embajadas y consulados"
        }
    },
    {
        id: "caskets",
        slug: "caskets",
        count: 2,
        name: {
            ar: "صناديق الشحن والتجهيزات",
            en: "Shipping Caskets & Supplies",
            ru: "Транспортировочные гробы",
            fr: "Cercueils et équipements",
            es: "Ataúdes y equipamiento"
        }
    }
];