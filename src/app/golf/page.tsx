import PageLayout from "@/components/PageLayout"
import GolfCard from "@/components/GolfCard"
import { golf } from "@/data/golf"

export default function Golf() {
  return (
    <PageLayout
      title="Golf Courses"
      subtitle="Championship courses and resort golf experiences in Las Vegas"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {golf.map((course) => (
          <GolfCard key={course.id} course={course} />
        ))}
      </div>
    </PageLayout>
  )
}