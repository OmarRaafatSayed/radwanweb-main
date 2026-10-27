export interface UrnColor {
    id: string;
    code: string;
    name: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
}

export interface UrnDimension {
    id: string;
    label: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    value: string;
}

export interface UrnItem {
    id: string;
    slug: string;
    badge?: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    title: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    description: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    fullDescription: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    price?: number | null;
    currency?: string;
    hasPrice: boolean;
    mainImage: string;
    gallery: string[];
    materialType: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    capacityVolume: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    sealingType: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    airportCompliant: boolean;
    colors: UrnColor[];
    dimensions: UrnDimension[];
    specifications: {
        ar: string[];
        en: string[];
        ru: string[];
        fr: string[];
        es: string[];
    };
}

export const urnsData: UrnItem[] = [
    {
        id: "urn-1",
        slug: "urn-1",
        title: {
            ar: "جرة رماد",
            en: "Cremation Urn",
            ru: "Урна для праха",
            fr: "Urne cinéraire",
            es: "Urna de cremación"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/urns/001.jpeg",
        gallery: [
            "/images/urns/001.jpeg"
        ],
        materialType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        capacityVolume: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        sealingType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        airportCompliant: true,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "urn-2",
        slug: "urn-2",
        title: {
            ar: "جرة رماد",
            en: "Cremation Urn",
            ru: "Урна для праха",
            fr: "Urne cinéraire",
            es: "Urna de cremación"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/urns/002.jpeg",
        gallery: [
            "/images/urns/002.jpeg"
        ],
        materialType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        capacityVolume: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        sealingType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        airportCompliant: true,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "urn-3",
        slug: "urn-3",
        title: {
            ar: "جرة رماد",
            en: "Cremation Urn",
            ru: "Урна для праха",
            fr: "Urne cinéraire",
            es: "Urna de cremación"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/urns/003.jpeg",
        gallery: [
            "/images/urns/003.jpeg"
        ],
        materialType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        capacityVolume: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        sealingType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        airportCompliant: true,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "urn-4",
        slug: "urn-4",
        title: {
            ar: "جرة رماد",
            en: "Cremation Urn",
            ru: "Урна для праха",
            fr: "Urne cinéraire",
            es: "Urna de cremación"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/urns/004.jpeg",
        gallery: [
            "/images/urns/004.jpeg"
        ],
        materialType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        capacityVolume: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        sealingType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        airportCompliant: true,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "urn-5",
        slug: "urn-5",
        title: {
            ar: "جرة رماد",
            en: "Cremation Urn",
            ru: "Урна для праха",
            fr: "Urne cinéraire",
            es: "Urna de cremación"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/urns/005.jpeg",
        gallery: [
            "/images/urns/005.jpeg"
        ],
        materialType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        capacityVolume: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        sealingType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        airportCompliant: true,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "urn-6",
        slug: "urn-6",
        title: {
            ar: "جرة رماد",
            en: "Cremation Urn",
            ru: "Урна для праха",
            fr: "Urne cinéraire",
            es: "Urna de cremación"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/urns/006.jpeg",
        gallery: [
            "/images/urns/006.jpeg"
        ],
        materialType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        capacityVolume: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        sealingType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        airportCompliant: true,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
];