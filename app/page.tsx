"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGithubUser } from "@/hooks/use-github-user";
import { Github } from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const [username, setUsername] = useState("")
  const [searchUser, setSearchUser] = useState("")
  const { data } = useGithubUser(searchUser);

  function handleSearch() {
    if (!username.trim()) return;
    setSearchUser(username)
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-white via-gray-100 to-gray-200">
      <div className="max-w-3xl w-full mx-auto py-5 px-3 space-y-5">
        <div>
          <h1 className="text-xl font-bold">Github Profile Viewer</h1>
          <p>enter a username:</p>
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <Button onClick={handleSearch}>
            <Github />
            Search
          </Button>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-md text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </main>
  );
}
