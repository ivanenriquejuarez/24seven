import PageLayout from "@/components/PageLayout"
import ShoppingCard from "@/components/ShoppingCard"
import { shopping } from "@/data/shopping"

export default function Shopping() {
  return (
    <PageLayout
      title="Shopping"
      subtitle="Luxury malls, premium outlets, and unique boutiques"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shopping.map((shop) => (
          <ShoppingCard key={shop.id} shop={shop} />
        ))}
      </div>
    </PageLayout>
  )
}