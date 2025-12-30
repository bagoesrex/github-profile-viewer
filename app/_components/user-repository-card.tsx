import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import InfoItem from "@/components/ui/info-item"
import { GithubRepository } from "@/types/repository"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime";
import { Calendar, Clock, Code, CodeXml, Eye, Star } from "lucide-react"

interface UserRepositoryCardProps {
    repository: GithubRepository
}

dayjs.extend(relativeTime);

export default function UserRepositoryCard({ repository }: UserRepositoryCardProps) {
    const formattedCreatedAt = dayjs(repository.created_at).format("MMMM DD, YYYY");
    const formattedUpdatedAt = dayjs(repository.updated_at).fromNow();

    return (
        <Card className="glass-card w-full p-1 gap-2 rounded-sm overflow-hidden relative">
            <CardHeader className="p-2 z-10">
                <CardTitle className="flex justify-between items-center">
                    <a
                        href={repository.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-blue-800 hover:underline"
                    >
                        {repository.name}
                    </a>
                </CardTitle>
                {repository.description && (
                    <CardDescription>
                        <p className="text-xs">{repository.description}</p>
                    </CardDescription>
                )}
            </CardHeader>
            <CardContent className="p-2">
                <div className="text-xs space-y-2.5">
                    <div className="flex flex-wrap gap-3">
                        <InfoItem icon={Star} label={`${repository.stargazers_count}`} description={"Stars"} />
                        <InfoItem icon={Eye} label={`${repository.watchers_count}`} description={"Watchers"} />
                        {repository.language && (
                            <InfoItem icon={CodeXml} description={repository.language} />
                        )}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <InfoItem icon={Calendar} description={`${formattedCreatedAt}`} />
                        <InfoItem icon={Clock} label={` ${formattedUpdatedAt}`} description={"Updated"} reverse={true} />
                    </div>
                </div>
            </CardContent>
            <div className="hidden sm:flex absolute top-3 right-2.5 items-center justify-center w-12 h-12 rounded-lg bg-secondary/50 text-primary/30 group-hover:text-primary/50 transition-colors">
                <Code className="w-6 h-6" />
            </div>
        </Card >
    )
}