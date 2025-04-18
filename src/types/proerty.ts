export interface Property {
    id: string;
    title: string;
    type: string;
    price: string;
    location: {
        city: string;
        area: string;
        pincode: string;
    };
    features: string[];
    image: string;
    description: string;
    phone: string;
}