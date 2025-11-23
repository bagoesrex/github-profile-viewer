import { GithubUser } from "@/types/github";
import { GithubRepository } from "@/types/repository";

const GITHUB_API_BASE = "https://api.github.com";

async function githubFetch<T>(endpoint: string): Promise<T> {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    const headers: Record<string, string> = {
        Accept: "application/json",
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(`${GITHUB_API_BASE}${endpoint}`, { headers });

    if (!res.ok) {
        const message = res.status === 404 ? `User Not Found` : `Github API error ${res.status}: ${res.statusText}`

        throw new Error(message);
    }

    return res.json() as Promise<T>;
}

export function getGithubUser(username: string) {
    return githubFetch<GithubUser>(`/users/${username}`);
}

export function getGithubRepository(username: string) {
    return githubFetch<GithubRepository>(`/users/${username}/repos`);
}