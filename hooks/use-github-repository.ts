import { useQuery } from "@tanstack/react-query";
import { GithubRepository } from "@/types/repository";
import { getGithubRepository } from "@/lib/github";

export function useGithubRepository(username: string) {
    return useQuery<GithubRepository>({
        queryKey: ["github_repository", username],
        queryFn: () => getGithubRepository(username),
        enabled: !!username,
    })
}