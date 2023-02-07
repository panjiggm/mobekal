// Product Type API
export interface AirtableProductPecord {
    records: RecordProduct[];
}

export interface RecordProduct {
    id: string;
    createdTime: Date;
    fields: FieldsProducts;
}

export interface FieldsProducts {
    name: string;
    description: string;
    img_url: string;
    variants: string;
    is_signature: boolean;
    price: string[];
}

// Price Type API
export interface AirtablePriceRecord {
    records: RecordPrice[];
}

export interface RecordPrice {
    id: string;
    createdTime: Date;
    fields: FieldsPrice;
}

export interface FieldsPrice {
    sachet: number;
    two_hundred_gr: number;
    one_hundred_gr: number;
    product?: string[];
}

// Products Props
export interface PriceProps {
    sachet: number;
    two_hundred_gr: number;
    one_hundred_gr: number
}

export interface CardProductProps {
    name: string;
    description: string;
    img_url: string;
    variants: string[];
    is_signature: boolean;
    price: PriceProps[];
}

export interface ProductsProps {
    products: CardProductProps[];
}