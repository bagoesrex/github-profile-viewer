import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import InfoItem from "@/components/ui/info-item"
import { GithubUser } from "@/types/github"
import dayjs from "dayjs"
import { MapPin, Link as LucideLink, Users, BookMarked, Calendar, Github } from "lucide-react"
import Image from "next/image"

interface UserProfileCardProps {
    user: GithubUser
}

export default function UserProfileCard({ user }: UserProfileCardProps) {
    const formatedDate = dayjs(user.created_at).format("MMMM D, YYYY");
    const blogUrl = user.blog?.startsWith("http")
        ? user.blog
        : `https://${user.blog}`;

    return (
        <Card className="w-full p-3.5 gap-2">
            <CardHeader>
                <CardTitle>
                    <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden mx-auto ring-1 ring-offset-2 ring-black/60">
                        <Image
                            src={user.avatar_url}
                            alt={`${user.login} github avatar`}
                            fill
                            className="object-cover"
                        />
                    </div>
                </CardTitle>
                <CardDescription className="text-center">
                    <h2 className="font-extrabold font-sans text-black">{user.name ?? "No name available."}</h2>
                    <p className="text-sm">@{user.login}</p>
                </CardDescription>
            </CardHeader>
            <CardContent className="p-3">
                <div className="text-xs space-y-2">
                    <p>{user.bio ?? "No bio available."}</p>
                    <div className="flex flex-wrap gap-2">
                        {user.location && (
                            <InfoItem icon={MapPin} text={user.location} />
                        )}
                        {user.blog && (
                            <InfoItem icon={LucideLink} text={user.blog} href={blogUrl} />
                        )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <InfoItem icon={Users} text={`${user.followers} Followers`} />
                        <InfoItem icon={Users} text={`${user.following} Following`} />
                        <InfoItem icon={BookMarked} text={`${user.public_repos} Repositories`} />
                    </div>
                    <div>
                        <InfoItem icon={Calendar} text={`Joined ${formatedDate}`} />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="py-0 px-3">
                <Button asChild className="w-full flex gap-5">
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                        View On Github
                        <Github />
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
}