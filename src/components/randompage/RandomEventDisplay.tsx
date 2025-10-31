'use client'

import { categoryConfig } from '@/lib/categoryConfig'
import { useState, useEffect } from 'react'

export default function RandomEventDisplay() {
    const [isLoading, setIsLoading] = useState(true)
    const [randomEvent, setRandomEvent] = useState<any>(null)

    // Get all events
    const allEvents = Object.entries(categoryConfig).flatMap(([categoryName, config]: any) => {
        return config.data.map((item: any) => ({
            ...item,
            category: categoryName,
            CardComponent: config.CardComponent,
            propName: config.propName
        }))
    })

    // Function to get random event
    const getRandomEvent = () => {
        const randomIndex = Math.floor(Math.random() * allEvents.length)
        return allEvents[randomIndex]
    }

    // Initial load
    useEffect(() => {
        setTimeout(() => {
            setRandomEvent(getRandomEvent())
            setIsLoading(false)
        }, 2000)
    }, [])

    // Handle get another
    const handleGetAnother = () => {
        setIsLoading(true)
        setTimeout(() => {
            setRandomEvent(getRandomEvent())
            setIsLoading(false)
        }, 2000)
    }

    return (
        <div className='max-w-md mx-auto'>
            {/* Loading Animation */}
            {isLoading && (
                <div className='flex flex-col items-center justify-center py-20'>
                    {/* Slot Machine Reels */}
                    <div className='flex gap-4 mb-8'>
                        <div className='w-20 h-24 bg-gradient-to-b from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-4xl animate-slot-spin'>
                            🎰
                        </div>
                        <div className='w-20 h-24 bg-gradient-to-b from-pink-600 to-purple-600 rounded-lg flex items-center justify-center text-4xl animate-slot-spin-delay-1'>
                            🎲
                        </div>
                        <div className='w-20 h-24 bg-gradient-to-b from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-4xl animate-slot-spin-delay-2'>
                            ✨
                        </div>
                    </div>
                    
                    {/* Loading Text */}
                    <div className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse'>
                        Finding your perfect match...
                    </div>
                    
                    {/* Spinning Dots */}
                    <div className='flex gap-2 mt-4'>
                        <div className='w-3 h-3 bg-purple-500 rounded-full animate-bounce'></div>
                        <div className='w-3 h-3 bg-pink-500 rounded-full animate-bounce' style={{animationDelay: '0.1s'}}></div>
                        <div className='w-3 h-3 bg-purple-500 rounded-full animate-bounce' style={{animationDelay: '0.2s'}}></div>
                    </div>
                </div>
            )}

            {/* Card Display with Pop-in Animation */}
            {!isLoading && randomEvent && (
                <div className='animate-pop-in'>
                    <h2 className="text-xl font-bold mb-4 text-center">🎉 Your Lucky Pick!</h2>
                    
                    {(() => {
                        const CardComponent = randomEvent.CardComponent
                        const props = { [randomEvent.propName]: randomEvent }
                        return <CardComponent {...props} />
                    })()}
                    
                    <button 
                        onClick={handleGetAnother}
                        className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        🎰 Spin Again!
                    </button>
                </div>
            )}
        </div>
    )
}