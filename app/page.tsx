"use client"

import { useGithubUser } from "@/hooks/use-github-user";

export default function HomePage() {
  const { data } = useGithubUser("bagoesrex");

  return (
    <main className="min-h-screen w-full flex flex-col gap-4 justify-center items-center">
      <h1 className="text-xl font-bold">Github Profile Viewer</h1>
      <pre className="bg-gray-900 text-white p-4 rounded-md text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
