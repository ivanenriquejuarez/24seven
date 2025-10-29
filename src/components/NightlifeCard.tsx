import { Nightlife } from "@/types"

interface NightlifeCardProps {
    venue: Nightlife;
}

export default function NightlifeCard({ venue }: NightlifeCardProps) {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all overflow-hidden">
  
            {/* Image */}
            <img
                src={`https://placehold.co/400x300?text=${venue.name}`}
                alt={venue.name}
                className="w-full h-40 object-cover"
            />
            
            {/* Content Section */}
            <div className="p-3">
                
                {/* Name */}
                <h3 className="text-xl font-bold mb-2">{venue.name}</h3>
                
                {/* Category + Price Level */}
                <div className="text-gray-300 mb-2">
                    {venue.category} • {"$".repeat(venue.priceLevel)}
                </div>
                
                {/* Rating */}
                <div className="text-yellow-400 mb-2">
                    {"⭐".repeat(Math.floor(venue.rating))}
                </div>
                
                {/* Age + Dress Code */}
                <div className="flex gap-2 mb-2">
                    <span className="text-xs bg-red-900/50 px-2 py-1 rounded">
                        {venue.ageRestriction}
                    </span>
                    <span className="text-xs bg-purple-900/50 px-2 py-1 rounded">
                        {venue.dressCode}
                    </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {venue.description}
                </p>
                
                {/* View Details Button */}
                <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition">
                    View Details
                </button>
                
            </div>
        </div>
    )
}