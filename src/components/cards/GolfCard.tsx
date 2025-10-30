import Link from "next/link"
import { Golf } from "@/types"

interface GolfCardProps {
  course: Golf;
}

export default function GolfCard({ course }: GolfCardProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all overflow-hidden">
      
      <img
        src={`https://placehold.co/400x300?text=${course.name}`}
        alt={course.name}
        className="w-full h-40 object-cover"
      />
      
      <div className="p-3">
        <h3 className="text-xl font-bold mb-2">{course.name}</h3>
        
        <div className="text-gray-300 mb-2">
          {course.type} • {course.holes} Holes • {"$".repeat(course.priceLevel)}
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-400">
            {"⭐".repeat(Math.floor(course.rating))}
          </span>
          <span className="text-xs bg-purple-900/50 px-2 py-1 rounded">
            {course.difficulty}
          </span>
        </div>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <Link href={`/golf/${course.id}`}>
          <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}