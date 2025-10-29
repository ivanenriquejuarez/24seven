// linkage of folders
import Link from 'next/link';
import { Category } from '@/types';

// interface for card props
interface CategoryCardProps {
    category: Category;
}

// function that takes in props interface parameter
export default function CategoryCard( { category }: CategoryCardProps) {
    return (
        <Link href={category.href}>
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all p-6 group cursor-pointer h-full">
        
        {/* Icon + Name */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{category.icon}</span>
          <div>
            <h3 className="text-xl font-bold group-hover:text-purple-400 transition">
              {category.name}
            </h3>
            <p className="text-sm text-gray-400">{category.count} locations</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {category.description}
        </p>

        {/* Arrow */}
        <div className="text-purple-400 group-hover:translate-x-2 transition-transform inline-block">
          →
        </div>
      </div>
    </Link>
    )
}