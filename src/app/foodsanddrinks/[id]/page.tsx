import { foods } from "@/data/foods";
import PageLayout from "@/components/PageLayout";

export default async function FoodAndDrinksPageDetail({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Get the id from the page
  const { id } = await params;

  // Find corresponding food id
  const foundFood = foods.find((food) => food.id === id);

  // Condition if food is NOT found
  if (!foundFood) {
    return <div>Food not found</div>;
  }

  return (
    <PageLayout
      title={foundFood.name}
      subtitle={`${foundFood.category} • ${"$".repeat(foundFood.priceLevel)}`}
    >
      
      {/* Hero Image Section */}
      <div className="mb-8">
        <img 
          src={`https://placehold.co/1200x400?text=${foundFood.name}`}
          alt={foundFood.name}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Info - Takes 2 columns */}
        <div className="lg:col-span-2">
          {/* Rating */}
          <div className="text-yellow-400 text-2xl mb-4">
            {"⭐".repeat(Math.floor(foundFood.rating))} 
            <span className="text-white ml-2">{foundFood.rating}</span>
          </div>
          
          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {foundFood.description}
          </p>
        </div>

        {/* Sidebar - Contact Info */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 p-6 sticky top-6">
            <h3 className="text-xl font-bold mb-4">Details</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Address</p>
                <p className="text-white">{foundFood.address}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <p className="text-white">{foundFood.phone}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">Hours</p>
                <p className="text-white">{foundFood.hours}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}