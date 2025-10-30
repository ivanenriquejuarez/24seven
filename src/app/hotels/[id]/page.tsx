import { hotels } from "@/data/hotels";
import PageLayout from "@/components/PageLayout";
import BackButton from "@/components/buttons/BackButton";

export default async function HotelDetail({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const foundHotel = hotels.find((hotel) => hotel.id === id);

  if (!foundHotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <PageLayout
      title={foundHotel.name}
      subtitle={`${foundHotel.location} • ${"$".repeat(foundHotel.priceLevel)}`}
    >
      
      {/* Hero Image */}
      <div className="mb-8">
        <img 
          src={`https://placehold.co/1200x400?text=${foundHotel.name}`}
          alt={foundHotel.name}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Info */}
        <div className="lg:col-span-2">
          {/* Rating */}
          <div className="text-yellow-400 text-2xl mb-4">
            {"⭐".repeat(Math.floor(foundHotel.rating))} 
            <span className="text-white ml-2">{foundHotel.rating}</span>
          </div>
          
          {/* Amenities */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {foundHotel.amenities.map((amenity) => (
                <span 
                  key={amenity}
                  className="bg-purple-900/30 border border-purple-500/30 px-3 py-1 rounded-full text-sm"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {foundHotel.description}
          </p>
          
          <BackButton/>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 p-6 sticky top-6">
            <h3 className="text-xl font-bold mb-4">Details</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Location</p>
                <p className="text-white">{foundHotel.location}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">Price Level</p>
                <p className="text-green-400 text-xl">
                  {"$".repeat(foundHotel.priceLevel)}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}