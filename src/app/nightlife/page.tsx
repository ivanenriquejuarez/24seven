import PageLayout from "@/components/PageLayout"
import NightlifeCard from "@/components/NightlifeCard"
import { nightlife } from "@/data/nightlife"

export default function Nightlife() {
    return (
        <PageLayout
            title="Nightlife"
            subtitle="Experience Vegas after dark - clubs, lounges, and entertainment"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {nightlife.map((venue) => (
                    <NightlifeCard key={venue.id} venue={venue} />
                ))}
            </div>
        </PageLayout>
    )
}