import { GithubRepository } from "@/types/repository"
import UserRepositoryCard from "./user-repository-card";
import UserRepositoriesEmptyCard from "./user-repositories-empty-card";

interface UserRepositoriesWrapperProps {
    repositories: GithubRepository[]
}

export default function UserRepositoriesWrapper({ repositories }: UserRepositoriesWrapperProps) {
    const repositoryLength = repositories.length;

    return (
        <div className="bg-card text-card-foreground flex flex-col rounded-xl border py-6 shadow-sm w-full p-3.5 gap-2">
            <h2 className="font-bold">Repositories ({repositoryLength})</h2>

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