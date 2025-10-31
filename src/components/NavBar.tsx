'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Utensils, 
  PartyPopper, 
  Hotel, 
  Drama, 
  Gem, 
  MoreHorizontal,
  Flame,
  Dice6,
  Search,
  Sparkles
} from "lucide-react"

export default function NavBar() {
    const pathname = usePathname()
    
    const discoveryLinks = [
        { title: "Hot Today", icon: Flame, href: "/hottoday", gradient: "from-orange-500 to-red-500" },
        { title: "Random", icon: Dice6, href: "/random", gradient: "from-purple-500 to-pink-500" }
    ]

    const navCategories = [
        { title: "Foods & Drinks", icon: Utensils, href: "/foodsanddrinks", gradient: "from-orange-500 to-red-500" },
        { title: "Nightlife", icon: PartyPopper, href: "/nightlife", gradient: "from-purple-500 to-pink-500" },
        { title: "Hotels", icon: Hotel, href: "/hotels", gradient: "from-blue-500 to-purple-500" },
        { title: "Shows", icon: Drama, href: "/shows", gradient: "from-pink-500 to-purple-500" },
        { title: "Local Gems", icon: Gem, href: "/localgems", gradient: "from-cyan-500 to-blue-500" },
        { title: "More", icon: MoreHorizontal, href: '/more', gradient: "from-violet-500 to-purple-500" }
    ]

    const isActive = (path: string) => pathname === path

    return (
        <nav className="w-64 h-screen bg-gradient-to-b from-black via-purple-950/20 to-black border-r border-purple-500/30 fixed left-0 top-0 overflow-y-auto shadow-2xl shadow-purple-500/20">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>
            
            <div className="relative z-10 p-6">
                
                {/* Logo with glow effect */}
                <Link href="/" className="block mb-8 group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative transform group-hover:scale-105 transition-transform duration-300">
                            <Image 
                                src="/24sevenlogo.png" 
                                alt="VegasNiteLife Logo" 
                                width={180} 
                                height={140}
                                className="drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </Link>
                
                {/* Discovery Section */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4 px-2">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Discover</span>
                    </div>
                    
                    {discoveryLinks.map((link) => {
                        const IconComponent = link.icon
                        const active = isActive(link.href)
                        
                        return (
                            <Link 
                                key={link.title}
                                href={link.href}
                                className={`
                                    group relative block mb-3 px-4 py-3 rounded-xl 
                                    transition-all duration-300 overflow-hidden
                                    ${active 
                                        ? 'bg-gradient-to-r ' + link.gradient + ' shadow-lg shadow-purple-500/50' 
                                        : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 hover:bg-white/10'
                                    }
                                `}
                            >
                                {/* Hover gradient effect */}
                                {!active && (
                                    <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                )}
                                
                                {/* Animated border glow */}
                                {active && (
                                    <div className="absolute inset-0 animate-pulse">
                                        <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} blur-md opacity-50`}></div>
                                    </div>
                                )}
                                
                                <div className="relative flex items-center gap-3">
                                    <IconComponent 
                                        className={`w-5 h-5 transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}
                                        strokeWidth={active ? 2.5 : 1.5}
                                    />
                                    <span className={`font-semibold ${active ? 'text-white' : 'text-gray-300'}`}>
                                        {link.title}
                                    </span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                
                {/* Categories Section */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4 px-2">
                        <div className="w-1 h-1 rounded-full bg-purple-400 animate-pulse"></div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Categories</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                    </div>
                    
                    {navCategories.map((category) => {
                        const IconComponent = category.icon
                        const active = isActive(category.href)
                        
                        return (
                            <Link 
                                key={category.title}
                                href={category.href}
                                className={`
                                    group relative block mb-2 px-4 py-3 rounded-lg
                                    transition-all duration-300
                                    ${active 
                                        ? 'bg-purple-500/20 border border-purple-500/50' 
                                        : 'hover:bg-white/5 border border-transparent hover:border-purple-500/20'
                                    }
                                `}
                            >
                                {/* Slide-in indicator for active */}
                                {active && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-r-full"></div>
                                )}
                                
                                <div className="relative flex items-center gap-3">
                                    <div className={`
                                        p-1.5 rounded-lg transition-all duration-300
                                        ${active 
                                            ? 'bg-gradient-to-br ' + category.gradient 
                                            : 'bg-white/5 group-hover:bg-white/10'
                                        }
                                    `}>
                                        <IconComponent 
                                            className="w-4 h-4"
                                            strokeWidth={active ? 2 : 1.5}
                                        />
                                    </div>
                                    <span className={`text-sm font-medium transition-colors ${active ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                        {category.title}
                                    </span>
                                    
                                    {/* Arrow on hover */}
                                    <div className={`ml-auto transform transition-all duration-300 ${active ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`}>
                                        <div className="w-1.5 h-1.5 border-r-2 border-t-2 border-purple-400 rotate-45"></div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                
                {/* Search Button */}
                <button className="group relative w-full px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 overflow-hidden">
                    {/* Animated shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    
                    <div className="relative flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                            <Search className="w-4 h-4" strokeWidth={2} />
                        </div>
                        <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">
                            Search Vegas
                        </span>
                    </div>
                </button>

                {/* Footer badge */}
                <div className="mt-8 pt-6 border-t border-purple-500/20">
                    <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-lg p-3 text-center">
                        <div className="text-xs text-gray-400 mb-1">Vegas</div>
                        <div className="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            NiteLife
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}