import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
    const navCategories = [
        { title:"Foods and Drinks", icon:"🥂", href:"/foodsanddrinks"},
        { title:"Nightlife", icon:"🎆", href:"/nightlife"},
        { title:"Hotels", icon:"🏨", href:"/hotels"},
        { title:"Shows", icon:"🎤", href:"/shows"},
        { title:"Local Gems", icon:"🌁", href:"/localgems"},
        { title:"More", icon:"🌐", href:'/more'}
    ];

    return (
        
        // Navbar
        <nav className="w-64 h-screen p-6 bg-black border-r-2 border-purple-500">
            <div> {/* Main container */}
                
                {/* Logo */}
                <div className="mb-4">
                    <Link href="/">
                         <Image src="/24sevenlogo.png" alt="24Seven Logo" width={180} height={140}></Image>                    
                    </Link>
                </div>
                
                {/* Discovery */}
                <div className="mb-10">
                    <Link href="/hottoday" className="block mb-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300">
                    🔥 Hot Today</Link>
                    <Link href="/random" className="block mb-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300">🎲 Random</Link>
                </div>
                
                {/* Categories */}
                <div className="mb-10">
                    {navCategories.map((categories => (
                        <Link 
                            key={categories.title} 
                            href={categories.href}
                            className="block mb-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300"
                        >
                            {categories.icon} {categories.title}
                        </Link>
                    )))}
                </div>
                
                {/* Search */}
                <div className="block mb-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300">🔎 Search</div>

            </div>
        </nav>
    )
}