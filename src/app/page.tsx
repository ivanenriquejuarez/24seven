// Card prop usage
import CategoryCard from "@/components/CategoryCard"
import PageLayout from "@/components/PageLayout";

// fake data for now
const categories = [
  { name: "Foods", icon: "🍔", href:"/foods"},
  { name: "Concerts", icon: "🎭", href:"/concerts"},
  { name: "Hotels", icon: "🏢", href:'/hotels'},
  { name: "Exotic", icon: "👯‍♀️", href:'/exotic'},
  { name: "Golf", icon: "⛳️", href:'/golf'},
  { name: "Museum", icon:"⎒", href:"/museum"}
];

export default function Home() {
  return (
    <PageLayout
      title="24Seven"
      subtitle="What's the next Adventure?"
    >
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
    </PageLayout>
  )
}