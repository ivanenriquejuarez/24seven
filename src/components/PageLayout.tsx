
interface PageLayoutProps {
    title: string;
    subtitle: string;
    children?: React.ReactNode;
}

export default function PageLayout(props: PageLayoutProps) {
    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-purple-900/40 to-black text-white">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">{props.title}</h1>
                <p className="text-2xl text-gray-200">{props.subtitle}</p>
                </div>
                {props.children}
            </div>
        </main>
    )
}