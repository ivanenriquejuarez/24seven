// Card prop usage
import CategoryCard from "@/components/CategoryCard"

// fake data for now
const categories = [
  { name: "Foods", icon: "🍔", href:"/foods"},
  { name: "Events", icon: "🎭", href:"/events"}
];

export default function Home() {
  return (
    <main className="">
      <div className="container mx-auto px-4 py-16">

        {/* Main title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Welcome to 24Seven</h1>
          <p className="text-xl text-gray-300">Discover Las Vegas</p>
        </div>

        {/* Category card display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              categoryName={category.name}
              icon={category.icon}
              href={category.href}
            />
          ))}
        </div>
      </div>
    </main>
  )
}