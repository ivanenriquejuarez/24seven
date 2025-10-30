import { nightlife } from "@/data/nightlife";
import PageLayout from "@/components/PageLayout";
import BackButton from "@/components/buttons/BackButton";
import DirectionsButton from "@/components/buttons/DirectionsButton";

export default async function NightlifeDetail({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const foundVenue = nightlife.find((venue) => venue.id === id);

  if (!foundVenue) {
    return <div>Venue not found</div>;
  }

  return (
    <PageLayout
      title={foundVenue.name}
      subtitle={`${foundVenue.category} • ${"$".repeat(foundVenue.priceLevel)}`}
    >
      
      {/* Hero Image */}
      <div className="mb-8">
        <img 
          src={`https://placehold.co/1200x400?text=${foundVenue.name}`}
          alt={foundVenue.name}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Info */}
        <div className="lg:col-span-2">
          {/* Rating */}
          <div className="text-yellow-400 text-2xl mb-4">
            {"⭐".repeat(Math.floor(foundVenue.rating))} 
            <span className="text-white ml-2">{foundVenue.rating}</span>
          </div>
          
          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {foundVenue.description}
          </p>
          
          <BackButton/>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 p-6 sticky top-6">
            <h3 className="text-xl font-bold mb-4">Details</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Address</p>
                <DirectionsButton address={foundVenue.address}/>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">Hours</p>
                <p className="text-white">{foundVenue.hours}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">Dress Code</p>
                <p className="text-white">{foundVenue.dressCode}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">Age Restriction</p>
                <p className="text-white">{foundVenue.ageRestriction}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}