
interface PageLayoutProps {
    title: string;
    subtitle: string;
    children?: React.ReactNode;
}

export default function PageLayout(props: PageLayoutProps) {
    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4">{props.title}</h1>
                    <p className="text-2xl text-gray-200">{props.subtitle}</p>
                </div>
                {props.children}
            </div>
        </main>
    )
}