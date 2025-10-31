'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import PageLayout from "@/components/PageLayout"
import { getTopItems } from '@/lib/topItems'
import { 
  Utensils, 
  Hotel, 
  Drama, 
  PartyPopper, 
  Gem, 
  Flag, 
  Building2, 
  ShoppingBag, 
  Sparkles, 
  MapPin,
  Gamepad2,
  Dice6,
  Flame,
  Star,
  Target,
  Zap,
  TrendingUp,
  Users,
  Clock,
  Award
} from 'lucide-react'

const categories = [
  { name: "Foods & Drinks", icon: Utensils, href: "/foodsanddrinks", color: "from-orange-500 to-red-500" },
  { name: "Hotels", icon: Hotel, href: '/hotels', color: "from-blue-500 to-purple-500" },
  { name: "Shows", icon: Drama, href: '/shows', color: "from-pink-500 to-purple-500" },
  { name: "Nightlife", icon: PartyPopper, href: '/nightlife', color: "from-purple-500 to-pink-500" },
  { name: "Local Gems", icon: Gem, href: '/localgems', color: "from-cyan-500 to-blue-500" },
  { name: "Golf", icon: Flag, href: '/golf', color: "from-green-500 to-emerald-500" },
  { name: "Museums", icon: Building2, href: "/museums", color: "from-indigo-500 to-purple-500" },
  { name: "Shopping", icon: ShoppingBag, href: '/shopping', color: "from-pink-500 to-red-500" },
  { name: "Spas", icon: Sparkles, href: '/spas', color: "from-teal-500 to-cyan-500" },
  { name: "Tours", icon: MapPin, href: '/tours', color: "from-yellow-500 to-orange-500" },
  { name: "Recreation", icon: Gamepad2, href: '/recreation', color: "from-violet-500 to-purple-500" }
]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [visitorCount, setVisitorCount] = useState(0)
  const topItems = getTopItems().slice(0, 3)

  useEffect(() => {
    setMounted(true)
    // Animated counter
    const target = 150000
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setVisitorCount(target)
        clearInterval(timer)
      } else {
        setVisitorCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <PageLayout
        title="VegasNiteLife"
        subtitle="Your Ultimate Vegas Experience Guide"
      >
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-block mb-6">
              <div className="relative">
                <Dice6 className="w-24 h-24 text-purple-400 animate-bounce" strokeWidth={1.5} />
                <Sparkles className="w-12 h-12 text-pink-400 absolute -top-2 -right-2 animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Welcome to Vegas
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Discover the <span className="text-purple-400 font-bold">best restaurants</span>, 
              <span className="text-pink-400 font-bold"> hottest clubs</span>, 
              <span className="text-blue-400 font-bold"> luxury hotels</span>, and 
              <span className="text-green-400 font-bold"> unforgettable experiences</span> in Sin City
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/random"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  <Dice6 className="w-5 h-5" />
                  Feeling Lucky?
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                href="/hottoday"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Flame className="w-5 h-5" />
                Hot Today
              </Link>
            </div>

            {/* Stats Counter */}
            {mounted && (
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
                <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-xl p-4">
                  <Users className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {visitorCount.toLocaleString()}+
                  </div>
                  <div className="text-xs text-gray-400">Happy Visitors</div>
                </div>
                <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-xl p-4">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-xs text-gray-400">Top Venues</div>
                </div>
                <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 border border-pink-500/30 rounded-xl p-4">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-pink-400" />
                  <div className="text-3xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    24/7
                  </div>
                  <div className="text-xs text-gray-400">Vegas Never Sleeps</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Featured Hot Picks */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
                <Flame className="w-8 h-8 text-orange-400" />
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Today's Hottest</span>
              </h2>
              <p className="text-gray-400">Top-rated experiences right now</p>
            </div>
            <Link 
              href="/hottoday"
              className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2"
            >
              View All <TrendingUp className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {topItems.map((item, index) => {
              const CardComponent = item.CardComponent
              const props = { [item.propName]: item.data }
              return (
                <div key={item.path} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative">
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      #{index + 1} Top Rated
                    </div>
                    <CardComponent {...props} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-center">Explore by Category</h2>
          <p className="text-gray-400 text-center mb-8">Find exactly what you're looking for</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:scale-105 overflow-hidden"
                  style={{
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <IconComponent 
                      className="w-12 h-12 mb-3 text-gray-300 group-hover:text-white transform group-hover:scale-110 transition-transform duration-300" 
                      strokeWidth={1.5}
                    />
                    <div className="font-bold text-lg">{category.name}</div>
                    <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                      Explore <TrendingUp className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Why VegasNiteLife?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="w-16 h-16 mx-auto mb-4 text-yellow-400" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-2">Top Rated</h3>
              <p className="text-gray-400">Only the best venues with verified ratings</p>
            </div>
            <div className="text-center">
              <Target className="w-16 h-16 mx-auto mb-4 text-purple-400" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-2">Personalized</h3>
              <p className="text-gray-400">Get recommendations based on your preferences</p>
            </div>
            <div className="text-center">
              <Zap className="w-16 h-16 mx-auto mb-4 text-pink-400" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-2">Updated Daily</h3>
              <p className="text-gray-400">Fresh content and latest Vegas hotspots</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-2 border-purple-500/30 rounded-2xl p-12">
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready for Your Vegas Adventure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you discover the perfect experience
          </p>
          <Link
            href="/random"
            className="inline-flex items-center gap-2 px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/50"
          >
            <Dice6 className="w-6 h-6" />
            Start Exploring Now
          </Link>
        </div>

      </PageLayout>
    </div>
  )
}