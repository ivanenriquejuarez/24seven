'use client'

interface DirectionButtonsProp {
    address: string;
};

export default function DirectionsButton( { address }: DirectionButtonsProp) {
    return (
        <a
        href={`https://maps.google.com/?q=${address}`}
        target="_blank" // opens in a new tab
        rel="noopener noreferrer" // Security best practice
        className="bg-blue-600/20 border-blue-500/30 text-blue-400"
        > 
        <span>{address}</span>
        </a>
    )
}