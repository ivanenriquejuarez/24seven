import PageLayout from "@/components/PageLayout"
import TourCard from "@/components/cards/TourCard"
import { tours } from "@/data/tours"

export default function Tours() {
  return (
    <PageLayout
      title="Tours & Adventures"
      subtitle="Helicopter rides, day trips, and unforgettable experiences"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </PageLayout>
  )
}