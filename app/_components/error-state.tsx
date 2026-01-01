import { CircleAlert } from "lucide-react";

interface ErrorCardProps {
    message: string
}

export default function ErrorState({ message }: ErrorCardProps) {
    return (
        <div className="flex flex-col justify-center items-center text-center w-full py-25 sm:py-16 px-4 gap-2">
            <div className="p-2.5 md:p-3.5 rounded-full bg-destructive/10 border border-destructive/20 mb-2">
                <CircleAlert className="size-5 md:size-7 text-destructive/60" />
            </div>
            <h2 className="text-primary/85 font-semibold font-mono text-md md:text-xl">{message}</h2>
            {message === "User Not Found" && (
                <p className="text-muted-foreground max-w-100 text-sm md:text-md">Could not find a GitHub user with that username.</p>
            )}
        </div>
    )
}