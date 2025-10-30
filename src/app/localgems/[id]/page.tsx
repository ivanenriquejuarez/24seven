import { localGems } from "@/data/localgems";
import PageLayout from "@/components/PageLayout";
import BackButton from "@/components/buttons/BackButton";
import DirectionsButton from "@/components/buttons/DirectionsButton";

export default async function LocalGemDetail({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const foundGem = localGems.find((gem) => gem.id === id);

  if (!foundGem) {
    return <div>Local gem not found</div>;
  }

  return (
    <PageLayout
      title={foundGem.name}
      subtitle={`${foundGem.category} • ${"$".repeat(foundGem.priceLevel)}`}
    >
      
      {/* Hero Image */}
      <div className="mb-8">
        <img 
          src={`https://placehold.co/1200x400?text=${foundGem.name}`}
          alt={foundGem.name}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Info */}
        <div className="lg:col-span-2">
          {/* Rating */}
          <div className="text-yellow-400 text-2xl mb-4">
            {"⭐".repeat(Math.floor(foundGem.rating))} 
            <span className="text-white ml-2">{foundGem.rating}</span>
          </div>
          
          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {foundGem.description}
          </p>
          
          <BackButton/>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 p-6 sticky top-6">
            <h3 className="text-xl font-bold mb-4">Details</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Neighborhood</p>
                <p className="text-white">{foundGem.neighborhood}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">Address</p>
                <DirectionsButton address={foundGem.address}/>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">Hours</p>
                <p className="text-white">{foundGem.hours}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}