import Link from "next/link"
import { Museum } from "@/types"

interface MuseumCardProps {
  museum: Museum;
}

export default function MuseumCard({ museum }: MuseumCardProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all overflow-hidden">
      
      <img
        src={`https://placehold.co/400x300?text=${museum.name}`}
        alt={museum.name}
        className="w-full h-40 object-cover"
      />
      
      <div className="p-3">
        <h3 className="text-xl font-bold mb-2">{museum.name}</h3>
        
        <div className="text-gray-300 mb-2">
          {museum.category} • {"$".repeat(museum.priceLevel)}
        </div>
        
        <div className="text-yellow-400 mb-2">
          {"⭐".repeat(Math.floor(museum.rating))}
        </div>
        
        <p className="text-gray-400 text-sm mb-2 line-clamp-2">
          {museum.description}
        </p>
        
        <p className="text-xs text-gray-500 mb-4">
          {museum.hours}
        </p>
        
        <Link href={`/museums/${museum.id}`}>
          <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}