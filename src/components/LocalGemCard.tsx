import { LocalGem } from "@/types"

interface LocalGemCardProps {
    gem: LocalGem;
}

export default function LocalGemCard({ gem }: LocalGemCardProps) {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all overflow-hidden">
  
            {/* Image */}
            <img
                src={`https://placehold.co/400x300?text=${gem.name}`}
                alt={gem.name}
                className="w-full h-40 object-cover"
            />
            
            {/* Content Section */}
            <div className="p-3">
                
                {/* Name */}
                <h3 className="text-xl font-bold mb-2">{gem.name}</h3>
                
                {/* Category + Neighborhood */}
                <div className="text-gray-300 mb-2">
                    {gem.category} • {gem.neighborhood}
                </div>
                
                {/* Rating + Price */}
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-400">
                        {"⭐".repeat(Math.floor(gem.rating))}
                    </span>
                    <span className="text-green-400">
                        {"$".repeat(gem.priceLevel)}
                    </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {gem.description}
                </p>
                
                {/* Hours */}
                <p className="text-xs text-gray-500 mb-4">
                    {gem.hours}
                </p>
                
                {/* View Details Button */}
                <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition">
                    View Details
                </button>
                
            </div>
        </div>
    )
}