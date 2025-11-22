import { getGithubUser } from "@/lib/github";
import { GithubUser } from "@/types/github";
import { useQuery } from "@tanstack/react-query";

export function useGithubUser(username: string) {
    return useQuery<GithubUser>({
        queryKey: ["github_user", username],
        queryFn: () => getGithubUser(username),
        enabled: !!username,
    })
}