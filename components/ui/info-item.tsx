import { LucideIcon } from "lucide-react"

interface InfoItemProps {
    icon: LucideIcon
    text: string
    href?: string
}

export default function InfoItem({ icon: Icon, text, href }: InfoItemProps) {
    const content = (
        <div className="flex gap-1 items-center">
            <Icon size={15} />
            <span>{text}</span>
        </div>
    )

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
            >
                {content}
            </a>
        )
    }

    return content
}