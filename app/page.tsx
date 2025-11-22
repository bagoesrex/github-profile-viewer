"use client"

import { useGithubUser } from "@/hooks/use-github-user";
import { useState } from "react";
import SearchForm from "./_components/search-form";

export default function HomePage() {
  const [searchUser, setSearchUser] = useState("")
  const { data, isLoading, error } = useGithubUser(searchUser);

  return (
    <main className="min-h-screen bg-linear-to-br from-white via-gray-100 to-gray-200">
      <div className="max-w-3xl w-full mx-auto py-5 px-3 space-y-5">
        <div>
          <h1 className="text-xl font-bold">Github Profile Viewer</h1>
          <p>enter a username:</p>
          {error && (`${error.message}`)}
        </div>

        <SearchForm onSearch={setSearchUser} isLoading={isLoading} />

        <pre className="bg-gray-900 text-white p-4 rounded-md text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </main>
  );
}
