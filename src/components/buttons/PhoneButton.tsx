'use client'

interface CallButtonProps {
    phoneNumber: string;
};

export default function PhoneButton({ phoneNumber }: CallButtonProps) {
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, '')

    return (
        <a
           href={`tel:${cleanPhone}`}
           className="..."
        >
            <span>Call now · </span>
            <span>{phoneNumber}</span>
        </a>
    )
}