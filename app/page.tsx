"use client"

import { useGithubUser } from "@/hooks/use-github-user";
import { useState } from "react";
import SearchForm from "./_components/search-form";
import ErrorCard from "./_components/error-card";
import UserProfileCard from "./_components/user-profile-card";
import { useGithubRepository } from "@/hooks/use-github-repository";

export default function HomePage() {
  const [searchUser, setSearchUser] = useState("")
  const { data: GithubUserData, isLoading, error } = useGithubUser(searchUser);
  const { data: GithubRepositoryData } = useGithubRepository(searchUser);

  return (
    <main className="min-h-screen bg-linear-to-br from-white via-gray-100 to-gray-200">
      <div className="max-w-5xl w-full mx-auto py-5 px-3 space-y-5">
        <div>
          <h1 className="text-xl font-bold">Github Profile Viewer</h1>
          <p>enter a username:</p>
        </div>

        <SearchForm onSearch={setSearchUser} isLoading={isLoading} />

        {error && <ErrorCard message={error.message} />}

        {GithubUserData && (
          <div className="flex flex-col md:flex-row gap-2 relative">
            <div className="w-full md:w-5/12 none md:sticky top-2 h-fit">
              <UserProfileCard user={GithubUserData} />
            </div>
            <div className="w-full h-200 overflow-scroll">
              <pre className="bg-gray-900 text-white p-4 rounded-md text-sm">
                {JSON.stringify(GithubRepositoryData, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
