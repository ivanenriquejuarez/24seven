import PageLayout from "@/components/PageLayout"
import SpaCard from "@/components/cards/SpaCard"
import { spas } from "@/data/spas"

export default function Spas() {
  return (
    <PageLayout
      title="Spas & Wellness"
      subtitle="Relaxation and rejuvenation at world-class spa facilities"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {spas.map((spa) => (
          <SpaCard key={spa.id} spa={spa} />
        ))}
      </div>
    </PageLayout>
  )
}