import FoodComponent from "@/components/FoodComponent"
import PageLayout from "@/components/PageLayout"
import { foods } from "@/data/foods"

export default function FoodsAndDrinks() {
    return (
        <PageLayout
            title="Foods"
            subtitle="Be adventurous and eat at the best or worst. "
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {foods.map((food) => (
                    <FoodComponent key={food.id} food={food}/>
                ))}
            </div>
         </PageLayout>
    )
}