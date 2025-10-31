'use client'

import { categoryConfig } from '@/lib/categoryConfig'
import { useState } from 'react'

interface Answers {
  budget: string | null
  category: string | null
  timeOfDay: string | null
  mood: string | null
  groupSize: string | null
}

export default function PersonalizedQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState<Answers>({
    budget: null,
    category: null,
    timeOfDay: null,
    mood: null,
    groupSize: null
  })
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleAnswer = (questionKey: keyof Answers, value: string) => {
    const newAnswers = { ...answers, [questionKey]: value }
    setAnswers(newAnswers)

    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Last question - calculate result
      calculateResult(newAnswers)
    }
  }

  const calculateResult = (finalAnswers: Answers) => {
    setIsLoading(true)

    // Get all events with scoring
    const allEvents = Object.entries(categoryConfig).flatMap(([categoryName, config]: any) => {
      return config.data.map((item: any) => ({
        ...item,
        category: categoryName,
        CardComponent: config.CardComponent,
        propName: config.propName,
        score: 0
      }))
    })

    // Score each event based on answers
    const scoredEvents = allEvents.map((event: any) => {
      let score = 0

      // Budget scoring
      if (finalAnswers.budget === '$' && event.priceLevel <= 2) score += 3
      if (finalAnswers.budget === '$$' && event.priceLevel === 2) score += 3
      if (finalAnswers.budget === '$$$' && event.priceLevel === 3) score += 3
      if (finalAnswers.budget === '$$$$' && event.priceLevel >= 4) score += 3

      // Category scoring
      if (finalAnswers.category === 'food' && event.category === 'foods') score += 4
      if (finalAnswers.category === 'nightlife' && event.category === 'nightlife') score += 4
      if (finalAnswers.category === 'shows' && event.category === 'shows') score += 4
      if (finalAnswers.category === 'outdoor' && (event.category === 'recreation' || event.category === 'golf' || event.category === 'tours')) score += 4
      if (finalAnswers.category === 'wellness' && event.category === 'spas') score += 4
      if (finalAnswers.category === 'culture' && (event.category === 'museums' || event.category === 'localgems')) score += 4

      // Mood scoring (based on rating - higher rated = more exciting)
      if (finalAnswers.mood === 'exciting' && event.rating >= 4.7) score += 2
      if (finalAnswers.mood === 'relaxing' && event.category === 'spas') score += 3
      if (finalAnswers.mood === 'romantic' && (event.category === 'foods' || event.category === 'shows')) score += 2

      // Add some randomness for variety
      score += Math.random() * 2

      return { ...event, score }
    })

    // Get top 3 matches
    const topMatches = scoredEvents.sort((a, b) => b.score - a.score).slice(0, 3)

    setTimeout(() => {
      setResult(topMatches[0]) // Show best match
      setIsLoading(false)
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(1)
    setAnswers({
      budget: null,
      category: null,
      timeOfDay: null,
      mood: null,
      groupSize: null
    })
    setResult(null)
  }

  // Loading state
  if (isLoading) {
    return (
      <div className='flex flex-col items-center justify-center py-20'>
        <div className='flex gap-4 mb-8'>
          <div className='w-20 h-24 bg-gradient-to-b from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-4xl animate-slot-spin'>
            🎯
          </div>
          <div className='w-20 h-24 bg-gradient-to-b from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-4xl animate-slot-spin-delay-1'>
            ✨
          </div>
          <div className='w-20 h-24 bg-gradient-to-b from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-4xl animate-slot-spin-delay-2'>
            🎪
          </div>
        </div>
        <div className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse'>
          Finding your perfect match...
        </div>
        <div className='flex gap-2 mt-4'>
          <div className='w-3 h-3 bg-blue-500 rounded-full animate-bounce'></div>
          <div className='w-3 h-3 bg-purple-500 rounded-full animate-bounce' style={{animationDelay: '0.1s'}}></div>
          <div className='w-3 h-3 bg-blue-500 rounded-full animate-bounce' style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    )
  }

  // Result state
  if (result) {
    const CardComponent = result.CardComponent
    const props = { [result.propName]: result }

    return (
      <div className='max-w-md mx-auto animate-pop-in'>
        <h2 className="text-2xl font-bold mb-2 text-center">🎯 Your Perfect Match!</h2>
        <p className="text-gray-400 text-center mb-6">Based on your preferences</p>
        
        <CardComponent {...props} />
        
        <button 
          onClick={resetQuiz}
          className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300"
        >
          ✨ Take Quiz Again
        </button>
      </div>
    )
  }

  // Question 1: Budget
  if (currentQuestion === 1) {
    return (
      <div className='max-w-2xl mx-auto'>
        <div className='mb-8 text-center'>
          <div className='text-sm text-gray-400 mb-2'>Question 1 of 5</div>
          <h2 className='text-3xl font-bold mb-2'>💰 What's your budget?</h2>
          <p className='text-gray-400'>Choose what you're comfortable spending</p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          {[
            { value: '$', label: 'Budget Friendly', desc: 'Under $50', emoji: '💵' },
            { value: '$$', label: 'Moderate', desc: '$50-$150', emoji: '💵💵' },
            { value: '$$$', label: 'Upscale', desc: '$150-$300', emoji: '💵💵💵' },
            { value: '$$$$', label: 'Luxury', desc: '$300+', emoji: '💵💵💵💵' }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer('budget', option.value)}
              className='bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-2 border-purple-500/50 rounded-xl p-6 hover:border-purple-400 hover:scale-105 transition-all duration-300 text-left'
            >
              <div className='text-4xl mb-2'>{option.emoji}</div>
              <div className='font-bold text-lg mb-1'>{option.label}</div>
              <div className='text-sm text-gray-400'>{option.desc}</div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Question 2: Category
  if (currentQuestion === 2) {
    return (
      <div className='max-w-2xl mx-auto'>
        <div className='mb-8 text-center'>
          <div className='text-sm text-gray-400 mb-2'>Question 2 of 5</div>
          <h2 className='text-3xl font-bold mb-2'>🎯 What interests you most?</h2>
          <p className='text-gray-400'>Pick your favorite category</p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          {[
            { value: 'food', label: 'Dining', emoji: '🍽️' },
            { value: 'nightlife', label: 'Nightlife', emoji: '🎉' },
            { value: 'shows', label: 'Shows & Events', emoji: '🎭' },
            { value: 'outdoor', label: 'Outdoor Activities', emoji: '⛳' },
            { value: 'wellness', label: 'Wellness & Spa', emoji: '💆' },
            { value: 'culture', label: 'Culture & Arts', emoji: '🎨' }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer('category', option.value)}
              className='bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-2 border-blue-500/50 rounded-xl p-6 hover:border-blue-400 hover:scale-105 transition-all duration-300'
            >
              <div className='text-4xl mb-2'>{option.emoji}</div>
              <div className='font-bold text-lg'>{option.label}</div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Question 3: Time of Day
  if (currentQuestion === 3) {
    return (
      <div className='max-w-2xl mx-auto'>
        <div className='mb-8 text-center'>
          <div className='text-sm text-gray-400 mb-2'>Question 3 of 5</div>
          <h2 className='text-3xl font-bold mb-2'>⏰ When are you going?</h2>
          <p className='text-gray-400'>Choose your preferred time</p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          {[
            { value: 'morning', label: 'Morning', desc: '6am - 12pm', emoji: '🌅' },
            { value: 'afternoon', label: 'Afternoon', desc: '12pm - 6pm', emoji: '☀️' },
            { value: 'evening', label: 'Evening', desc: '6pm - 11pm', emoji: '🌆' },
            { value: 'latenight', label: 'Late Night', desc: '11pm - 3am', emoji: '🌙' }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer('timeOfDay', option.value)}
              className='bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border-2 border-indigo-500/50 rounded-xl p-6 hover:border-indigo-400 hover:scale-105 transition-all duration-300'
            >
              <div className='text-4xl mb-2'>{option.emoji}</div>
              <div className='font-bold text-lg mb-1'>{option.label}</div>
              <div className='text-sm text-gray-400'>{option.desc}</div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Question 4: Mood
  if (currentQuestion === 4) {
    return (
      <div className='max-w-2xl mx-auto'>
        <div className='mb-8 text-center'>
          <div className='text-sm text-gray-400 mb-2'>Question 4 of 5</div>
          <h2 className='text-3xl font-bold mb-2'>😊 What's your vibe?</h2>
          <p className='text-gray-400'>How do you want to feel?</p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          {[
            { value: 'relaxing', label: 'Relaxing', desc: 'Chill & unwind', emoji: '😌' },
            { value: 'exciting', label: 'Exciting', desc: 'High energy fun', emoji: '🤩' },
            { value: 'romantic', label: 'Romantic', desc: 'Date night vibes', emoji: '💕' },
            { value: 'family', label: 'Family Fun', desc: 'All ages welcome', emoji: '👨‍👩‍👧‍👦' }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer('mood', option.value)}
              className='bg-gradient-to-br from-pink-900/50 to-purple-900/50 border-2 border-pink-500/50 rounded-xl p-6 hover:border-pink-400 hover:scale-105 transition-all duration-300'
            >
              <div className='text-4xl mb-2'>{option.emoji}</div>
              <div className='font-bold text-lg mb-1'>{option.label}</div>
              <div className='text-sm text-gray-400'>{option.desc}</div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Question 5: Group Size
  if (currentQuestion === 5) {
    return (
      <div className='max-w-2xl mx-auto'>
        <div className='mb-8 text-center'>
          <div className='text-sm text-gray-400 mb-2'>Question 5 of 5</div>
          <h2 className='text-3xl font-bold mb-2'>👥 Who's coming with you?</h2>
          <p className='text-gray-400'>Choose your group size</p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          {[
            { value: 'solo', label: 'Flying Solo', desc: 'Just me', emoji: '🧘' },
            { value: 'couple', label: 'Couple', desc: 'Party of 2', emoji: '💑' },
            { value: 'small', label: 'Small Group', desc: '3-6 people', emoji: '👥' },
            { value: 'large', label: 'Large Party', desc: '7+ people', emoji: '🎊' }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer('groupSize', option.value)}
              className='bg-gradient-to-br from-green-900/50 to-blue-900/50 border-2 border-green-500/50 rounded-xl p-6 hover:border-green-400 hover:scale-105 transition-all duration-300'
            >
              <div className='text-4xl mb-2'>{option.emoji}</div>
              <div className='font-bold text-lg mb-1'>{option.label}</div>
              <div className='text-sm text-gray-400'>{option.desc}</div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return null
}