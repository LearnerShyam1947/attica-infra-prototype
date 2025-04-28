import { Property } from "../types/Proerty";

export const properties: Property[] = [
    // --- Houses (10) ---
    {
        id: '1',
        title: 'Luxury Villa',
        phone: "9876543210",
        type: 'house',
        price: '₹2.5 Cr',
        location: { city: 'Bangalore', area: 'Whitefield', pincode: '560066' },
        features: ['4 BHK', '3500 sqft', 'Fully Furnished', 'Garden'],
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
        description: 'Luxurious villa with modern amenities and spacious rooms'
    },
    {
        id: '2',
        title: 'Urban House',
        phone: "9876543210",
        type: 'house',
        price: '₹1.8 Cr',
        location: { city: 'Hyderabad', area: 'Banjara Hills', pincode: '500034' },
        features: ['3 BHK', '3000 sqft', 'Semi Furnished', 'Private Terrace'],
        image: 'https://images.unsplash.com/photo-1600585152925-c1f9a3c4e3c4?auto=format&fit=crop&q=80',
        description: 'Elegant urban home in a premium neighborhood'
    },
    {
        id: '3',
        title: 'Cozy Bungalow',
        phone: "9876543210",
        type: 'house',
        price: '₹1.4 Cr',
        location: { city: 'Chennai', area: 'Anna Nagar', pincode: '600040' },
        features: ['3 BHK', '2400 sqft', 'Garden', 'Car Parking'],
        image: 'https://images.unsplash.com/photo-1600573476471-0e6dbcf9f8b9?auto=format&fit=crop&q=80',
        description: 'Charming bungalow in a quiet, green neighborhood'
    },
    {
        id: '4',
        title: 'Green Villa',
        phone: "9876543210",
        type: 'house',
        price: '₹3.2 Cr',
        location: { city: 'Bangalore', area: 'Indiranagar', pincode: '560038' },
        features: ['5 BHK', '4000 sqft', 'Rooftop Garden', 'Smart Home'],
        image: 'https://images.unsplash.com/photo-1559599238-cba0d71d7a39?auto=format&fit=crop&q=80',
        description: 'Eco-friendly luxury villa with modern tech features'
    },
    {
        id: '5',
        title: 'Heritage House',
        phone: "9876543210",
        type: 'house',
        price: '₹2.1 Cr',
        location: { city: 'Hyderabad', area: 'Jubilee Hills', pincode: '500033' },
        features: ['4 BHK', '3600 sqft', 'Antique Finish', 'Courtyard'],
        image: 'https://images.unsplash.com/photo-1588856124183-1f97f85aa6a5?auto=format&fit=crop&q=80',
        description: 'A blend of tradition and comfort with heritage design'
    },
    {
        id: '6',
        title: 'Lakeview Villa',
        phone: "9876543210",
        type: 'house',
        price: '₹2.7 Cr',
        location: { city: 'Chennai', area: 'ECR', pincode: '600115' },
        features: ['4 BHK', '3800 sqft', 'Lake Facing', 'Swimming Pool'],
        image: 'https://images.unsplash.com/photo-1613977257363-5d1ff0f296b2?auto=format&fit=crop&q=80',
        description: 'Premium lake-facing villa with serene views'
    },
    {
        id: '7',
        title: 'Compact Duplex',
        phone: "9876543210",
        type: 'house',
        price: '₹90 L',
        location: { city: 'Bangalore', area: 'Yelahanka', pincode: '560063' },
        features: ['2 BHK', '1500 sqft', 'Gated Community', 'Solar Power'],
        image: 'https://images.unsplash.com/photo-1608315397308-16b9cb2201fc?auto=format&fit=crop&q=80',
        description: 'Affordable duplex perfect for small families'
    },
    {
        id: '8',
        title: 'Sunshine Villa',
        phone: "9876543210",
        type: 'house',
        price: '₹2.9 Cr',
        location: { city: 'Hyderabad', area: 'Kokapet', pincode: '500075' },
        features: ['4 BHK', '3700 sqft', 'Open Kitchen', 'Jacuzzi'],
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
        description: 'Bright and airy villa with all luxury amenities'
    },
    {
        id: '9',
        title: 'Peaceful Cottage',
        phone: "9876543210",
        type: 'house',
        price: '₹1.1 Cr',
        location: { city: 'Chennai', area: 'Thoraipakkam', pincode: '600097' },
        features: ['3 BHK', '2000 sqft', 'Veranda', 'Pet Friendly'],
        image: 'https://images.unsplash.com/photo-1580584126903-98f62b6f9b38?auto=format&fit=crop&q=80',
        description: 'Perfect family home with peaceful vibes'
    },
    {
        id: '10',
        title: 'Elegant Home',
        phone: "9876543210",
        type: 'house',
        price: '₹2.3 Cr',
        location: { city: 'Bangalore', area: 'Jayanagar', pincode: '560041' },
        features: ['4 BHK', '3200 sqft', 'Wooden Flooring', 'Home Theater'],
        image: 'https://images.unsplash.com/photo-1572120360610-d971b9b7885a?auto=format&fit=crop&q=80',
        description: 'Stylish and elegant home with top-end finishes'
    },

    // --- Plots (10) ---
    {
        id: '11',
        title: 'Premium Plot',
        phone: "9876543210",
        type: 'plot',
        price: '₹80 L',
        location: { city: 'Bangalore', area: 'Electronic City', pincode: '560100' },
        features: ['1200 sqft', 'Corner Plot', 'East Facing', 'BMRDA Approved'],
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80',
        description: 'Premium corner plot in a gated community'
    },
    {
        id: '12',
        title: 'Garden Plot',
        phone: "9876543210",
        type: 'plot',
        price: '₹65 L',
        location: { city: 'Hyderabad', area: 'Shankarpally', pincode: '501203' },
        features: ['1500 sqft', 'Gated Community', 'West Facing'],
        image: 'https://images.unsplash.com/photo-1618221424411-cf6d2736ce86?auto=format&fit=crop&q=80',
        description: 'Well-located plot with nearby greenery and amenities'
    },
    {
        id: '13',
        title: 'Lakefront Plot',
        phone: "9876543210",
        type: 'plot',
        price: '₹95 L',
        location: { city: 'Chennai', area: 'Tambaram', pincode: '600045' },
        features: ['2000 sqft', 'Lake View', 'DTCP Approved'],
        image: 'https://images.unsplash.com/photo-1613109041833-fec78b59c98d?auto=format&fit=crop&q=80',
        description: 'Spacious plot with excellent resale potential'
    },
    {
        id: '14',
        title: 'Affordable Plot',
        phone: "9876543210",
        type: 'plot',
        price: '₹45 L',
        location: { city: 'Bangalore', area: 'Anekal', pincode: '562106' },
        features: ['1000 sqft', 'North Facing', 'Loan Facility'],
        image: 'https://images.unsplash.com/photo-1581092918367-83ba0c9b8a1b?auto=format&fit=crop&q=80',
        description: 'Ideal for budget-conscious home builders'
    },
    {
        id: '15',
        title: 'Sunrise Plot',
        phone: "9876543210",
        type: 'plot',
        price: '₹70 L',
        location: { city: 'Hyderabad', area: 'Adibatla', pincode: '501510' },
        features: ['1400 sqft', 'Near IT Corridor', 'HMDA Approved'],
        image: 'https://images.unsplash.com/photo-1625488395192-fbd4d92c7cb3?auto=format&fit=crop&q=80',
        description: 'Best suited for villa construction near tech zone'
    },
    {
        id: '16',
        title: 'Hill View Plot',
        phone: "9876543210",
        type: 'plot',
        price: '₹1 Cr',
        location: { city: 'Chennai', area: 'Siruseri', pincode: '603103' },
        features: ['2200 sqft', 'Scenic View', 'CMDA Approved'],
        image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80',
        description: 'Exclusive plot in a fast-developing suburb'
    },
    {
        id: '17',
        title: 'Developer Plot',
        phone: "9876543210",
        type: 'plot',
        price: '₹55 L',
        location: { city: 'Bangalore', area: 'Sarjapur Road', pincode: '560035' },
        features: ['1200 sqft', 'BBMP Approved', 'Developed Layout'],
        image: 'https://images.unsplash.com/photo-1559128010-7de134fafaa6?auto=format&fit=crop&q=80',
        description: 'Plot in a well-developed layout with all facilities'
    },
    {
        id: '18',
        title: 'Investment Plot',
        phone: "9876543210",
        type: 'plot',
        price: '₹50 L',
        location: { city: 'Hyderabad', area: 'Gachibowli', pincode: '500032' },
        features: ['1000 sqft', 'Near ORR', 'Clear Title'],
        image: 'https://images.unsplash.com/photo-1583337130417-3346a1d3a5d6?auto=format&fit=crop&q=80',
        description: 'Ideal for investment with strong appreciation'
    },
    {
        id: '19',
        title: 'Twin Plot',
        phone: "9876543210",
        type: 'plot',
        price: '₹85 L',
        location: { city: 'Chennai', area: 'Perumbakkam', pincode: '600100' },
        features: ['1800 sqft', 'Road Facing', 'Electricity Ready'],
        image: 'https://images.unsplash.com/photo-1613977257363-5d1ff0f296b2?auto=format&fit=crop&q=80',
        description: 'Spacious dual plot for large homes'
    },
    {
        id: '20',
        title: 'Mega Plot',
        phone: "9876543210",
        type: 'plot',
        price: '₹1.2 Cr',
        location: { city: 'Bangalore', area: 'Kanakapura Road', pincode: '560082' },
        features: ['3000 sqft', 'Wide Road Access', 'Park Nearby'],
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80',
        description: 'Perfect for villa or apartment project'
    },

    // Apartments (to be continued...)
    {
        id: '21',
        title: 'Modern Apartment',
        phone: "9876543210",
        type: 'apartment',
        price: '₹1.2 Cr',
        location: { city: 'Bangalore', area: 'HSR Layout', pincode: '560102' },
        features: ['3 BHK', '1800 sqft', 'Swimming Pool', 'Gym'],
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
        description: 'Modern apartment with premium amenities'
    },
    {
        id: '22',
        title: 'Skyline Heights',
        phone: "9876543210",
        type: 'apartment',
        price: '₹1.5 Cr',
        location: { city: 'Hyderabad', area: 'Madhapur', pincode: '500081' },
        features: ['3 BHK', '2000 sqft', 'Sky Lounge', 'Clubhouse'],
        image: 'https://images.unsplash.com/photo-1586105251261-72a756497a12?auto=format&fit=crop&q=80',
        description: 'Luxury high-rise living with beautiful city views'
    },
    {
        id: '23',
        title: 'Budget Apartment',
        phone: "9876543210",
        type: 'apartment',
        price: '₹65 L',
        location: { city: 'Chennai', area: 'Velachery', pincode: '600042' },
        features: ['2 BHK', '950 sqft', 'Lift Access', 'Parking'],
        image: 'https://images.unsplash.com/photo-1600585154356-596af9009b47?auto=format&fit=crop&q=80',
        description: 'Affordable and compact flat in prime area'
    },
    {
        id: '24',
        title: 'Elite Towers',
        phone: "9876543210",
        type: 'apartment',
        price: '₹2.1 Cr',
        location: { city: 'Bangalore', area: 'Koramangala', pincode: '560095' },
        features: ['4 BHK', '2300 sqft', 'Infinity Pool', 'Private Lift'],
        image: 'https://images.unsplash.com/photo-1600573465753-0b5c9d40f325?auto=format&fit=crop&q=80',
        description: 'Elite apartments with state-of-the-art amenities'
    },
    {
        id: '25',
        title: 'Central Residency',
        phone: "9876543210",
        type: 'apartment',
        price: '₹1 Cr',
        location: { city: 'Hyderabad', area: 'Begumpet', pincode: '500016' },
        features: ['3 BHK', '1600 sqft', 'Community Hall', '24x7 Security'],
        image: 'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&q=80',
        description: 'Centrally located, perfect for working professionals'
    },
    {
        id: '26',
        title: 'Sea Breeze Apartment',
        phone: "9876543210",
        type: 'apartment',
        price: '₹1.3 Cr',
        location: { city: 'Chennai', area: 'Besant Nagar', pincode: '600090' },
        features: ['3 BHK', '1900 sqft', 'Sea View', 'Balcony'],
        image: 'https://images.unsplash.com/photo-1592906207491-89a7c304c1f0?auto=format&fit=crop&q=80',
        description: 'Premium beachside apartment with fantastic views'
    },
    {
        id: '27',
        title: 'Tech Park View',
        phone: "9876543210",
        type: 'apartment',
        price: '₹85 L',
        location: { city: 'Bangalore', area: 'Brookefield', pincode: '560037' },
        features: ['2 BHK', '1100 sqft', 'Children’s Play Area', 'Power Backup'],
        image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80',
        description: 'Comfortable apartment near IT hubs'
    },
    {
        id: '28',
        title: 'Hilltop Residency',
        phone: "9876543210",
        type: 'apartment',
        price: '₹1.7 Cr',
        location: { city: 'Hyderabad', area: 'Manikonda', pincode: '500089' },
        features: ['3 BHK', '2100 sqft', 'Terrace Garden', 'Jogging Track'],
        image: 'https://images.unsplash.com/photo-1560448074-10bed1900d5f?auto=format&fit=crop&q=80',
        description: 'Spacious apartment in serene hilltop community'
    },
    {
        id: '29',
        title: 'Urban Nest',
        phone: "9876543210",
        type: 'apartment',
        price: '₹75 L',
        location: { city: 'Chennai', area: 'Porur', pincode: '600116' },
        features: ['2 BHK', '1000 sqft', 'Lift', 'Gated Security'],
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
        description: 'Cozy and safe apartment for small families'
    },
    {
        id: '30',
        title: 'Luxury Penthouse',
        phone: "9876543210",
        type: 'apartment',
        price: '₹3 Cr',
        location: { city: 'Bangalore', area: 'MG Road', pincode: '560001' },
        features: ['5 BHK', '4000 sqft', 'Private Terrace', 'Personal Elevator'],
        image: 'https://images.unsplash.com/photo-1597092125553-5cc17c2be7e3?auto=format&fit=crop&q=80',
        description: 'Exclusive penthouse with panoramic city views'
    }
];