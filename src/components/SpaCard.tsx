import { Spa } from "@/types"

interface SpaCardProps {
  spa: Spa;
}

export default function SpaCard({ spa }: SpaCardProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all overflow-hidden">
      
      <img
        src={`https://placehold.co/400x300?text=${spa.name}`}
        alt={spa.name}
        className="w-full h-40 object-cover"
      />
      
      <div className="p-3">
        <h3 className="text-xl font-bold mb-2">{spa.name}</h3>
        
        <div className="text-gray-300 mb-2">
          {"$".repeat(spa.priceLevel)}
        </div>
        
        <div className="text-yellow-400 mb-2">
          {"⭐".repeat(Math.floor(spa.rating))}
        </div>
        
        {/* Services */}
        <div className="flex gap-2 mb-2 flex-wrap">
          {spa.services.slice(0, 3).map((service) => (
            <span key={service} className="text-xs bg-purple-900/50 px-2 py-1 rounded">
              {service}
            </span>
          ))}
        </div>
        
        <p className="text-gray-400 text-sm mb-2 line-clamp-2">
          {spa.description}
        </p>
        
        <p className="text-xs text-gray-500 mb-4">
          {spa.hours}
        </p>
        
        <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition">
          View Details
        </button>
      </div>
    </div>
  )
}