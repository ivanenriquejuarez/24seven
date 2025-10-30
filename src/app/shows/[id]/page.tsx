import { shows } from "@/data/shows";
import PageLayout from "@/components/PageLayout";
import BackButton from "@/components/buttons/BackButton";

export default async function ShowDetail({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const foundShow = shows.find((show) => show.id === id);

  if (!foundShow) {
    return <div>Show not found</div>;
  }

  return (
    <PageLayout
      title={foundShow.name}
      subtitle={`${foundShow.category} • ${foundShow.venue}`}
    >
      
      {/* Hero Image */}
      <div className="mb-8">
        <img 
          src={`https://placehold.co/1200x400?text=${foundShow.name}`}
          alt={foundShow.name}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Info */}
        <div className="lg:col-span-2">
          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {foundShow.description}
          </p>
          
          <BackButton/>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 p-6 sticky top-6">
            <h3 className="text-xl font-bold mb-4">Event Details</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Venue</p>
                <p className="text-white font-semibold">{foundShow.venue}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">Date</p>
                <p className="text-white">{foundShow.date}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">Time</p>
                <p className="text-white">{foundShow.time}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">Price</p>
                <p className="text-green-400 font-bold">${foundShow.price}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}