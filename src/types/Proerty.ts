export interface Property {
    _id: string;
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
    images: string[];
    description: string;
    phone: string;
}

export type PropertyType = 'house' | 'plot' | 'flat';

export const PropertyTypeOptions: PropertyType[] = ['house', 'plot', 'flat'];

