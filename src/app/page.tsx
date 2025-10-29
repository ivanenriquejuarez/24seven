// Card prop usage
import CategoryCard from "@/components/CategoryCard"
import PageLayout from "@/components/PageLayout";

// fake data for now
const categories = [
  { name: "Foods", icon: "🍔", href:"/foods"},
  { name: "Concerts", icon: "🎭", href:"/concerts"},
  { name: "Hotels", icon: "🏢", href:'/hotels'},
  { name: "Exotic", icon: "👯‍♀️", href:'/exotic'},
  { name: "Golf", icon: "⛳️", href:'/golf'},
  { name: "Museum", icon:"⎒", href:"/museum"}
];

export default function Home() {
  return (
    <PageLayout
      title="24Seven"
      subtitle="What's the next Adventure?"
    >
      {/* Category card display */}
    </PageLayout>
  )
}