import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookDashed, Frown } from "lucide-react";

export default function UserRepositoriesEmptyCard() {
    return (
        <Card className="w-full min-h-30 p-1 gap-2 justify-center rounded-sm bg-gray-200/20 relative overflow-hidden">
            <CardHeader className="p-2 z-10 text-center">
                <CardTitle className="flex gap-2 justify-center items-center">
                    <Frown />
                    Oops...
                </CardTitle>
                <CardDescription>
                    <p className="text-xs">This user has no repositories.</p>
                </CardDescription>
            </CardHeader>
            <BookDashed className="absolute -top-2 -right-5 text-gray-300 rotate-8 z-0" size={90} />
            <BookDashed className="absolute -bottom-2 -left-2 text-gray-300 rotate-8 z-0" size={80} />
        </Card>
    )
}