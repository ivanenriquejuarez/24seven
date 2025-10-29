import PageLayout from "@/components/PageLayout"
import MuseumCard from "@/components/MuseumCard"
import { museums } from "@/data/museums"

export default function Museums() {
  return (
    <PageLayout
      title="Museums"
      subtitle="Explore art, history, science, and unique specialty museums"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {museums.map((museum) => (
          <MuseumCard key={museum.id} museum={museum} />
        ))}
      </div>
    </PageLayout>
  )
}