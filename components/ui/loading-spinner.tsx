import { Loader2 } from "lucide-react";

export default function LoadingSpinner() {
    return (
        <div className="flex w-full h-full items-center justify-center gap-2 py-30 animate-pulse">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Fetching github profile...</p>
        </div>
    )
}