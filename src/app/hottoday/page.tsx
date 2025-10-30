import PageLayout from "@/components/PageLayout";
import { getTopItems } from "@/lib/topItems";

export default function HotToday() {
    const topItems = getTopItems();
    
    const sortedItems = topItems.sort((a, b) => {
        return b.data.rating - a.data.rating
    })

    const heroItem = sortedItems.slice(0,1);
    const topThreeItems = sortedItems.slice(1, 4);
    const remainingItems = sortedItems.slice(4);
    
    return (
            <PageLayout
                title="Hot Today"
                subtitle="Check out what is trending today"
            >
            <div className="grid...">
                {topItems.map((item) => {
                    const props = { [item.propName]: item.data}
                    return <item.CardComponent key={item.path} {...props}/>
                })}
            </div>
            </PageLayout>
    )
}