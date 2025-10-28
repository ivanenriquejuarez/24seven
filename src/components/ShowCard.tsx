import { Event } from "@/types"

interface ShowCardProps {
    show: Event;
}

export default function ShowCard({ show }: ShowCardProps) {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all overflow-hidden">
  
            {/* Image */}
            <img
                src={`https://placehold.co/400x300?text=${show.name}`}
                alt={show.name}
                className="w-full h-40 object-cover"
            />
            
            {/* Content Section */}
            <div className="p-3">
                
                {/* Name */}
                <h3 className="text-xl font-bold mb-2">{show.name}</h3>
                
                {/* Category + Venue */}
                <div className="text-gray-300 mb-2">
                    {show.category} • {show.venue}
                </div>
                
                {/* Date + Time */}
                <div className="text-purple-400 mb-2">
                    {show.date} at {show.time}
                </div>
                
                {/* Price */}
                <div className="text-green-400 mb-2">
                    ${show.price}
                </div>
                
                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {show.description}
                </p>
                
                {/* View Details Button */}
                <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition">
                    View Details
                </button>
                
            </div>
        </div>
    )
}