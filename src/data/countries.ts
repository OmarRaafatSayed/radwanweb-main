export interface CountryData {
    id: string;
    slug: string;
    flag: string;
    name: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
}

export const countriesData: CountryData[] = [
    {
        id: "south-sudan",
        slug: "south-sudan",
        flag: "/images/flags/South Sudan.webp",
        name: {
            ar: "جنوب السودان",
            en: "South Sudan",
            ru: "Южный Судан",
            fr: "Soudan du Sud",
            es: "Sudán del Sur"
        }
    },
    {
        id: "cameroon",
        slug: "cameroon",
        flag: "/images/flags/Cameroon.webp",
        name: {
            ar: "الكاميرون",
            en: "Cameroon",
            ru: "Камерун",
            fr: "Cameroun",
            es: "Camerún"
        }
    },
    {
        id: "chad",
        slug: "chad",
        flag: "/images/flags/Chad.webp",
        name: {
            ar: "تشاد",
            en: "Chad",
            ru: "Чад",
            fr: "Tchad",
            es: "Chad"
        }
    },
    {
        id: "syria",
        slug: "syria",
        flag: "/images/flags/Syria.webp",
        name: {
            ar: "سوريا",
            en: "Syria",
            ru: "Сирия",
            fr: "Syrie",
            es: "Siria"
        }
    },
    {
        id: "guinea",
        slug: "guinea",
        flag: "/images/flags/Guinea.webp",
        name: {
            ar: "غينيا",
            en: "Guinea",
            ru: "Гвинея",
            fr: "Guinée",
            es: "Guinea"
        }
    },
    {
        id: "somalia",
        slug: "somalia",
        flag: "/images/flags/Somalia.webp",
        name: {
            ar: "الصومال",
            en: "Somalia",
            ru: "Сомали",
            fr: "Somalie",
            es: "Somalia"
        }
    },
    {
        id: "sri-lanka",
        slug: "sri-lanka",
        flag: "/images/flags/Sri Lanka.webp",
        name: {
            ar: "سريلانكا",
            en: "Sri Lanka",
            ru: "Шри-Ланка",
            fr: "Sri Lanka",
            es: "Sri Lanka"
        }
    },
    {
        id: "ethiopia",
        slug: "ethiopia",
        flag: "/images/flags/Ethiopia.webp",
        name: {
            ar: "إثيوبيا",
            en: "Ethiopia",
            ru: "Эфиопия",
            fr: "Éthiopie",
            es: "Etiopía"
        }
    },
    {
        id: "malaysia",
        slug: "malaysia",
        flag: "/images/flags/Malaysia.webp",
        name: {
            ar: "ماليزيا",
            en: "Malaysia",
            ru: "Малайзия",
            fr: "Malaisie",
            es: "Malasia"
        }
    },
    {
        id: "yemen",
        slug: "yemen",
        flag: "/images/flags/Yemen.webp",
        name: {
            ar: "اليمن",
            en: "Yemen",
            ru: "Йемен",
            fr: "Yémen",
            es: "Yemen"
        }
    }
];