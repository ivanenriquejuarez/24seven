import PageLayout from "@/components/PageLayout"
import ShowCard from "@/components/cards/ShowCard"
import { shows } from "@/data/shows"  // ← Change from 'events' to 'shows'

export default function Shows() {
  return (
    <PageLayout
      title="Shows & Events"
      subtitle="World-class entertainment, concerts, and live performances"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shows.map((show) => (  
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </PageLayout>
  )
}