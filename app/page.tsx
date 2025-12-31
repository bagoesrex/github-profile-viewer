"use client"

import { useGithubUser } from "@/hooks/use-github-user";
import { useState } from "react";
import SearchForm from "./_components/search-form";
import ErrorCard from "./_components/error-card";
import UserProfileCard from "./_components/user-profile-card";
import { useGithubRepositories } from "@/hooks/use-github-repositories";
import UserRepositoriesWrapper from "./_components/user-repositories-wrapper";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { Github } from "lucide-react";
import EmptySearchState from "./_components/empty-search-state";

export default function HomePage() {
  const [searchUser, setSearchUser] = useState("")
  const { data: GithubUserData, isLoading, error } = useGithubUser(searchUser);
  const { data: GithubRepositoriesData } = useGithubRepositories(searchUser);

  return (
    <main className="min-h-screen">
      <div className="max-w-5xl w-full mx-auto py-6 px-3 space-y-5">
        <div className="flex flex-col items-center gap-2 pb-1 md:pb-4 text-center">
          <div className="p-2 md:p-3 rounded-md md:rounded-xl bg-primary/18 border border-primary/20 mb-2">
            <Github className="size-4 md:size-6 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold font-mono gradient-text">Github Profile Viewer</h1>
          <p className="text-muted-foreground text-sm md:text-md">
            Explore GitHub profiles and repositories
          </p>
        </div>

        <SearchForm onSearch={setSearchUser} isLoading={isLoading} />

        {!isLoading && error && (
          <ErrorCard message={error.message} />
        )}

        <div className="flex flex-col md:flex-row gap-6 relative">
          {isLoading && (
            <LoadingSpinner />
          )}
          {!isLoading && !error && !GithubUserData && (
            <EmptySearchState />
          )}
          {!isLoading && !error && GithubUserData && (
            <>
              <div className="w-full md:max-w-4/12 md:sticky top-3 h-fit">
                <UserProfileCard user={GithubUserData} />
              </div>

              {GithubRepositoriesData && (
                <div className="w-full md:max-w-8/12">
                  <UserRepositoriesWrapper repositories={GithubRepositoriesData} />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
