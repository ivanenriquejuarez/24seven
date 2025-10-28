import PageLayout from "@/components/PageLayout"
import ShowCard from "@/components/ShowCard"
import { events } from "@/data/events"

export default function Shows() {
    return (
        <PageLayout
            title="Shows & Events"
            subtitle="Experience the best entertainment Vegas has to offer"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {events.map((event) => (
                    <ShowCard key={event.id} show={event} />
                ))}
            </div>
        </PageLayout>
    )
}