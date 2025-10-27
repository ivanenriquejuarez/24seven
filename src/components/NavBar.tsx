import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
    const navCategories = [
        { title:"Foods and Drinks", icon:"🥂", href:"/foodsanddrinks"},
        { title:"Nightlife", icon:"🎆", href:"/nightlife"},
        { title:"Hotels", icon:"🏨", href:"/hotels"},
        { title:"Shows", icon:"🎤", href:"/shows"},
        { title:"Local Gems", icon:"🌁", href:"/localgems"},
    ];

    return (
        
        // Navbar
        <nav className="w-64 h-screen p-6">
            <div> {/* Main container */}
                
                {/* Logo */}
                <div className="mb-4">
                    <Link href="/">
                         <Image src="/24sevenlogo.png" alt="24Seven Logo" width={180} height={140}></Image>                    
                    </Link>
                </div>
                
                {/* Discovery */}
                <div className="mb-4">
                    <Link href="/hottoday" className="block mb-2 hover:text-blue-400">
                    🔥 Hot Today</Link>
                    <Link href="/random" className="block mb-2 hover:text-blue-400">🎲 Random</Link>
                </div>
                
                {/* Categories */}
                <div className="mb-6">
                    {navCategories.map((categories => (
                        <Link 
                            key={categories.title} 
                            href={categories.href}
                            className="block mb-2 hover:text-blue-400"
                        >
                            {categories.icon} {categories.title}
                        </Link>
                    )))}
                </div>
                
                {/* Search */}
                <div>🔎 Search</div>

            </div>
        </nav>
    )
}