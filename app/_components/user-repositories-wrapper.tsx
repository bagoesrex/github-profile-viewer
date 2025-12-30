import { GithubRepository } from "@/types/repository"
import UserRepositoryCard from "./user-repository-card";
import UserRepositoriesEmptyCard from "./user-repositories-empty-card";

interface UserRepositoriesWrapperProps {
    repositories: GithubRepository[]
}

export default function UserRepositoriesWrapper({ repositories }: UserRepositoriesWrapperProps) {
    const repositoryLength = repositories.length;

    return (
        <div className="flex flex-col w-full gap-3">
            <div className="flex gap-3 items-center mb-1">
                <h2 className="font-bold font-mono">Repositories</h2>
                <span className="px-3 py-1 rounded-full size-fit bg-primary/10 text-primary font-mono text-xs border border-primary/20">
                    {repositoryLength}
                </span>
            </div>

            {repositoryLength > 0 ? (
                repositories.map((repository) => (
                    <UserRepositoryCard key={repository.id} repository={repository} />
                ))
            ) : (
                <UserRepositoriesEmptyCard />
            )}
        </div>
    )
}