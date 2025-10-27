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
        <nav>
            <div> {/* Main container */}
                
                {/* Logo */}
                <div>
                    <Image src="/24sevenlogo.png" alt="24Seven Logo" width={240} height={320}></Image>
                </div>
                
                {/* Discovery */}
                <div>
                    <Link href="/hottoday">🔥 Hot Today</Link>
                    <Link href="/random">🎲 Random</Link>
                </div>
                
                {/* Categories */}
                <div>
                    {navCategories.map((categories => (
                        <Link key={categories.title} href={categories.href}>
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