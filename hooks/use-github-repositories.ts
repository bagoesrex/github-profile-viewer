import { useQuery } from "@tanstack/react-query";
import { GithubRepository } from "@/types/repository";
import { getGithubRepositories } from "@/lib/github";

export function useGithubRepositories(username: string) {
    return useQuery<GithubRepository[]>({
        queryKey: ["github_repositories", username],
        queryFn: () => getGithubRepositories(username),
        enabled: !!username,
    })
}