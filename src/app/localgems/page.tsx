import PageLayout from "@/components/PageLayout"
import LocalGemCard from "@/components/LocalGemCard"
import { localGems } from "@/data/localgems"

export default function LocalGems() {
    return (
        <PageLayout
            title="Local Gems"
            subtitle="Discover hidden treasures and local favorites off the beaten path"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {localGems.map((gem) => (
                    <LocalGemCard key={gem.id} gem={gem} />
                ))}
            </div>
        </PageLayout>
    )
}