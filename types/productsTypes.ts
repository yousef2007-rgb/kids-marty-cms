export interface Varient {
    title: string;
    title_ar: string;
    discription: string;
    discription_ar: string;
    imageUrl: string;
    imagesUrls: string[];
}

export interface Category {
    _id: string,
    title: string;
    discription: string;
    title_ar: string;
    discription_ar?: string;
    keywords?: string;
    imageUrl: string;
}

export interface Brand {
    _id: string,
    title: string;
    discription: string;
    title_ar: string;
    discription_ar?: string;
    keywords?: string[];
    imageUrl: string;
}

export interface Product {
    _id?:string;
    title: string;
    discription: string;
    lable: string;
    keywords?: string;
    title_ar: string;
    discription_ar: string;
    imagesUrls?: string[];
    online_price: number;
    wholesale_price: number;
    discount: number;
    imageUrl: string;
    category: string;
    brand: string;
    isPublished: boolean;
    ageRange: "0-2" | "2-6" | "7-12" | "13-up";
    varients?: Varient[];
    dimensions?: string[];
}
