import PageLayout from "@/components/PageLayout"
import RecreationCard from "@/components/RecreationCard"
import { recreation } from "@/data/recreation"

export default function Recreation() {
  return (
    <PageLayout
      title="Recreation & Entertainment"
      subtitle="Bowling, arcades, escape rooms, and family-friendly fun"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recreation.map((activity) => (
          <RecreationCard key={activity.id} activity={activity} />
        ))}
      </div>
    </PageLayout>
  )
}