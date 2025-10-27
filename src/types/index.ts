export interface Food {
    id: string;           // Unique identifier
    name: string;         // "Tacos El Gordo"
    category: string;     // "Mexican", "Italian", etc.
    priceLevel: number;   // 1-5 ($ to $$$$$)
    rating: number;       // 1-5 stars
    description: string;  // Short description
    address: string;      // "123 Las Vegas Blvd"
    phone: string;        // "(702) 555-1234"
    imageUrl: string;     // URL to image
    hours: string;        // "Mon-Sun 11am-10pm"
}

export interface Event {
    id: string;
    name: string;
    category: string;     // "Concert", "Show", "Sports"
    venue: string;        // "T-Mobile Arena"
    date: string;         // "2025-11-15"
    time: string;         // "8:00 PM"
    price: number;        // Ticket price
    description: string;
    imageUrl: string;
}

export interface Hotel {
    id: string;
    name: string;
    priceLevel: number;   // 1-5
    rating: number;       // 1-5 stars
    location: string;     // "The Strip"
    amenities: string[];  // ["Pool", "Casino", "Spa"]
    description: string;
    imageUrl: string;
}