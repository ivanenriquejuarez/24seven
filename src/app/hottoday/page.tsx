import PageLayout from "@/components/PageLayout";
import { getTopItems } from "@/lib/topItems";

export default function HotToday() {
    const topItems = getTopItems();
    
    const sortedItems = topItems.sort((a, b) => {
        return b.data.rating - a.data.rating
    })

    const heroItem = sortedItems.slice(0, 1);
    const topThreeItems = sortedItems.slice(1, 4);
    const remainingItems = sortedItems.slice(4);
    
    return (
        <PageLayout title="Hot Today" subtitle="Check out what is trending today">
            
            {/* Hero Section */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                    🔥 <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Hottest Pick</span>
                </h2>
                <div>
                    {heroItem.map((item) => {
                        const props = { [item.propName]: item.data }
                        return (
                            <div key={item.path} className="relative">
                                <span className="absolute top-4 left-4 bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold z-10 capitalize">
                                    {item.category}
                                </span>
                                <item.CardComponent {...props} />
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Top 3 Featured */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">⭐ Top Rated Today</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {topThreeItems.map((item) => {
                        const props = { [item.propName]: item.data }
                        return (
                            <div key={item.path} className="relative">
                                <span className="absolute top-4 left-4 bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold z-10 capitalize">
                                    {item.category}
                                </span>
                                <item.CardComponent {...props} />
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Remaining Items */}
            <div>
                <h2 className="text-2xl font-bold mb-6">💎 More Top Picks</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {remainingItems.map((item) => {
                        const props = { [item.propName]: item.data }
                        return (
                            <div key={item.path} className="relative">
                                <span className="absolute top-4 left-4 bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold z-10 capitalize">
                                    {item.category}
                                </span>
                                <item.CardComponent {...props} />
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </PageLayout>
    )
}