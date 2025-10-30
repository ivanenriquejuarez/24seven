'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="mb-6 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all text-white flex items-center gap-2 group"
        >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Foods</span>
        </button>
    )
}