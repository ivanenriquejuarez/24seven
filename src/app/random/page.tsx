'use client'

import PageLayout from '../../components/PageLayout'
import RandomEventDisplay from '@/components/randompage/RandomEventDisplay'
import PersonalizedQuiz from '@/components/randompage/PersonalizedQuiz'
import { useState } from 'react'

export default function Random() {
    const [selectedMode, setSelectedMode] = useState<string | null>(null)

    // Choice Screen
    if (selectedMode === null) {
        return (
            <PageLayout
                title='🎲 Discover Vegas'
                subtitle='How do you want to explore?'
            >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
                    
                    {/* Feeling Lucky Box */}
                    <div 
                        onClick={() => setSelectedMode('random')}
                        className='bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-2 border-purple-500/50 rounded-xl p-8 cursor-pointer hover:border-purple-400 hover:scale-105 transition-all duration-300'
                    >
                        <div className='text-6xl mb-4'>🎲</div>
                        <h2 className='text-2xl font-bold mb-3'>Feeling Lucky?</h2>
                        <p className='text-gray-300 mb-4'>
                            Get a completely random experience. Let fate decide your Vegas adventure!
                        </p>
                        <ul className='text-sm text-gray-400 space-y-1'>
                            <li>• High-end restaurants</li>
                            <li>• Night clubs</li>
                            <li>• Spa days</li>
                            <li>• Golf courses</li>
                            <li>• And more...</li>
                        </ul>
                        <div className='mt-6 text-purple-400 font-semibold'>
                            Click to try your luck →
                        </div>
                    </div>

                    {/* Personalized Box */}
                    <div 
                        onClick={() => setSelectedMode('personalized')}
                        className='bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-2 border-blue-500/50 rounded-xl p-8 cursor-pointer hover:border-blue-400 hover:scale-105 transition-all duration-300'
                    >
                        <div className='text-6xl mb-4'>✨</div>
                        <h2 className='text-2xl font-bold mb-3'>Personalized Pick</h2>
                        <p className='text-gray-300 mb-4'>
                            Answer a few questions and get a recommendation tailored just for you.
                        </p>
                        <ul className='text-sm text-gray-400 space-y-1'>
                            <li>• Based on your budget</li>
                            <li>• Your interests</li>
                            <li>• Time of day</li>
                            <li>• Your mood</li>
                            <li>• And preferences...</li>
                        </ul>
                        <div className='mt-6 text-blue-400 font-semibold'>
                            Click to get started →
                        </div>
                    </div>

                </div>
            </PageLayout>
        )
    }

    // Random Result Screen
    if (selectedMode === 'random') {
        return (
            <PageLayout
                title='🎲 Feeling Lucky'
                subtitle='Your random Vegas experience'
            >
                {/* Back Button */}
                <button
                    onClick={() => setSelectedMode(null)}
                    className='mb-6 flex items-center gap-2 text-purple-400 hover:text-purple-300'
                >
                    ← Back to choices
                </button>

                {/* Info Text */}
                <div className='mb-8 text-center'>
                    <p className='text-gray-300 text-lg'>
                        We've randomly selected an amazing Vegas experience for you!
                    </p>
                </div>

                {/* Random Event Component */}
                <RandomEventDisplay />
            </PageLayout>
        )
    }

    // Personalized Result Screen
    if (selectedMode === 'personalized') {
        return (
            <PageLayout
                title='✨ Personalized Pick'
                subtitle='Answer 5 quick questions'
            >
                <button
                    onClick={() => setSelectedMode(null)}
                    className='mb-6 flex items-center gap-2 text-blue-400 hover:text-blue-300'
                >
                    ← Back to choices
                </button>

                <PersonalizedQuiz />
            </PageLayout>
        )
    }
}