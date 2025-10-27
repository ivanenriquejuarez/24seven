import { Food } from "@/types"

interface FoodCardProps {
    food: Food;
}

export default function FoodComponent( { food }: FoodCardProps) {
    return (
        <div className="p-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all overflow-hidden">
  
            {/* Image */}
            <img
                src={`https://placehold.co/400x300?text=${food.name}`}
                alt={food.name}
                className="w-full h-40 object-cover rounded-lg"
            />
            
            {/* Content Section */}
            <div className="p-10 mb-4">
                
                {/* Name */}
                <h3 className="text-xl font-bold mb-2">{food.name}</h3>
                
                {/* Category + Price Level */}
                <div className="text-gray-300 mb-2">
                {food.category} • {"$".repeat(food.priceLevel)}
                </div>
                
                {/* Rating */}
                <div className="text-yellow-400 mb-2">
                {"⭐".repeat(Math.floor(food.rating))}
                </div>
                
                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {food.description}
                </p>
                
                {/* View Details Button */}
                <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition">
                View Details
                </button>
                
            </div>
        </div>
    )
}