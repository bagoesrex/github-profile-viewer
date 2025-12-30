import { LucideIcon } from "lucide-react"

interface InfoItemProps {
    icon: LucideIcon
    label?: string
    description?: string
    href?: string
    reverse?: boolean
}

export default function InfoItem({ icon: Icon, label, description, href, reverse }: InfoItemProps) {
    const content = (
        <div className="flex gap-1 items-center">
            <Icon size={15} className="text-primary" />

            {reverse ? (
                <p className="text-muted-foreground">
                    {description}
                    <span> {label}</span>
                </p>
            ) : (
                <p className="text-muted-foreground">
                    <span className="text-primary font-semibold">{label} </span>
                    {description}
                </p>
            )
            }
        </div >
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