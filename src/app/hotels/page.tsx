import PageLayout from "@/components/PageLayout"
import { hotels } from "@/data/hotels"
import HotelCard from "@/components/cards/HotelCard"

export default function Hotels() {
    return (
        <PageLayout
            title="Hotels"
            subtitle="Where to stay the night?"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {hotels.map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel}/>
                ))}
            </div>
        </PageLayout>
    )
}