// linkage of folders
import Link from 'next/link';

// interface for card props
interface CategoryCardProps {
    categoryName: string;
    icon: string;
    href: string;
}

// function that takes in props interface parameter
export default function CategoryCard(props: CategoryCardProps) {
    return (
        <Link href={props.href}>
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition cursor-pointer">
                <div className="text-4xl mb-2">{props.icon}</div>
                <h3 className="text-xl font-semibold">{props.categoryName}</h3>
            </div>
        </Link>
    )
}