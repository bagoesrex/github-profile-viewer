import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import InfoItem from "@/components/ui/info-item"
import { GithubRepository } from "@/types/repository"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime";
import { BookCopy, Calendar, Clock, CodeXml, Eye, Star } from "lucide-react"

interface UserRepositoryCardProps {
    repository: GithubRepository
}

dayjs.extend(relativeTime);

export default function UserRepositoryCard({ repository }: UserRepositoryCardProps) {
    const formattedCreatedAt = dayjs(repository.created_at).format("MMMM DD, YYYY");
    const formattedUpdatedAt = dayjs(repository.updated_at).fromNow();

    return (
        <Card className="w-full p-1 gap-2 rounded-sm bg-gray-200/20 relative overflow-hidden">
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
                <div className="text-xs space-y-2">
                    <div className="flex flex-wrap gap-2">
                        <InfoItem icon={Star} text={`${repository.stargazers_count} Stars`} />
                        <InfoItem icon={Eye} text={`${repository.watchers_count} Watchers`} />
                        {repository.language && (
                            <InfoItem icon={CodeXml} text={repository.language} />
                        )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <InfoItem icon={Calendar} text={`${formattedCreatedAt}`} />
                        <InfoItem icon={Clock} text={`Updated ${formattedUpdatedAt}`} />
                    </div>
                </div>
            </CardContent>
            <BookCopy className="absolute -top-2 -right-5 text-gray-300 rotate-8 z-0" size={90} />
        </Card >
    )
}