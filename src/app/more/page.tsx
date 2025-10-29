import PageLayout from "@/components/PageLayout"
import CategoryCard from "@/components/CategoryCard"
import { categories } from "@/data/categories"

export default function More() {
  return (
    <PageLayout
      title="Explore All Categories"
      subtitle="Discover everything Vegas has to offer - from dining to adventure"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </PageLayout>
  )
}