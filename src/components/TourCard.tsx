import { Tour } from "@/types"

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all overflow-hidden">
      
      <img
        src={`https://placehold.co/400x300?text=${tour.name}`}
        alt={tour.name}
        className="w-full h-40 object-cover"
      />
      
      <div className="p-3">
        <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
        
        <div className="text-gray-300 mb-2">
          {tour.category} • {"$".repeat(tour.priceLevel)}
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-400">
            {"⭐".repeat(Math.floor(tour.rating))}
          </span>
          <span className="text-xs bg-blue-900/50 px-2 py-1 rounded">
            {tour.duration}
          </span>
        </div>
        
        <p className="text-gray-400 text-sm mb-2 line-clamp-2">
          {tour.description}
        </p>
        
        <p className="text-xs text-gray-500 mb-4">
          📍 {tour.meetingPoint}
        </p>
        
        <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition">
          View Details
        </button>
      </div>
    </div>
  )
}