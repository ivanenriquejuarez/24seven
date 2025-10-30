import Link from "next/link"
import { Recreation } from "@/types"

interface RecreationCardProps {
  activity: Recreation;
}

export default function RecreationCard({ activity }: RecreationCardProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all overflow-hidden">
      
      <img
        src={`https://placehold.co/400x300?text=${activity.name}`}
        alt={activity.name}
        className="w-full h-40 object-cover"
      />
      
      <div className="p-3">
        <h3 className="text-xl font-bold mb-2">{activity.name}</h3>
        
        <div className="text-gray-300 mb-2">
          {activity.category} • {"$".repeat(activity.priceLevel)}
        </div>
        
        <div className="text-yellow-400 mb-2">
          {"⭐".repeat(Math.floor(activity.rating))}
        </div>
        
        <p className="text-gray-400 text-sm mb-2 line-clamp-2">
          {activity.description}
        </p>
        
        <p className="text-xs text-gray-500 mb-4">
          {activity.hours}
        </p>
        
        <Link href={`/recreation/${activity.id}`}>
          <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}