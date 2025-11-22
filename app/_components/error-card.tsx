import { Card } from "@/components/ui/card";

interface ErrorCardProps {
    message: string
}

export default function ErrorCard({ message }: ErrorCardProps) {
    return (
        <Card className="p-4 border-red-300 bg-red-50 text-red-700">
            <p className="font-medium text-center">{message || "Unknown Error"}</p>
        </Card>
    )
}