import { Hotel } from "@/types"

interface HotelCardProp {
    hotel: Hotel
}

export default function HotelCard( { hotel }: HotelCardProp) {
    return (
        // Main container
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all overflow-hidden">
            {/* Image */}
            <img
                src={`https://placehold.co/400x300?text=${hotel.name}`}
                alt={hotel.name}
                className="w-full h-40 object-cover rounded-lg"
            ></img>
            {/* Content Description */}
            <div className="p-3">
                {/* Name */}
                <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                {/* Rating */}
                <div>
                    {"⭐️".repeat(Math.floor(hotel.rating))}
                </div>
                {/* Location & Pricing*/}
                <div className="text-gray-300 mb-2">
                {hotel.location} • {"$".repeat(hotel.priceLevel)}
                </div>
                {/* Ameneties*/}
                <div>
                    {hotel.amenities.slice(0,3).map((amenity) => (
                        <span key={amenity} className="text-xs bg-purple-900/50 px-2 py-1 rounded">
                            {amenity}
                        </span>
                    ))}
                </div>
                {/* Description */}
                <div>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {hotel.description}
                    </p>
                </div>
                {/* Button for view more */}
                <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition">
                    View Details
                </button>
            </div>
        </div>
    )
}