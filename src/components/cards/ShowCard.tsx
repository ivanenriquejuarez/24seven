import Link from "next/link"
import { Event } from "@/types"

interface ShowCardProps {
    show: Event;
}

export default function ShowCard({ show }: ShowCardProps) {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all overflow-hidden">
  
            <img
                src={`https://placehold.co/400x300?text=${show.name}`}
                alt={show.name}
                className="w-full h-40 object-cover"
            />
            
            <div className="p-3">
                <h3 className="text-xl font-bold mb-2">{show.name}</h3>
                
                <div className="text-gray-300 mb-2">
                    {show.category} • {show.venue}
                </div>
                
                <div className="text-purple-400 mb-2">
                    {show.date} at {show.time}
                </div>
                
                <div className="text-green-400 mb-2">
                    ${show.price}
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {show.description}
                </p>
                
                <Link href={`/shows/${show.id}`}>
                    <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    )
}