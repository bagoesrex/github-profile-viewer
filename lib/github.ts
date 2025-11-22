import { GithubUser } from "@/types/github";

const GITHUB_API_BASE = "https://api.github.com";

async function githubFetch<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${GITHUB_API_BASE}${endpoint}`, {
        headers: {
            Accept: "application/json",
        },
    });

    if (!res.ok) {
        const message = `GitHub API error ${res.status}: ${res.statusText}`;
        throw new Error(message);
    }

    return res.json() as Promise<T>;
}

export function getGithubUser(username: string) {
    return githubFetch<GithubUser>(`/users/${username}`);
}
