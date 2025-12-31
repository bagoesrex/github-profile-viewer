import { Github } from "lucide-react";

export default function EmptySearchState() {
  return (
    <div className="flex flex-col justify-center items-center text-center w-full py-25 sm:py-16 px-4 gap-2">
      <div className="p-4 md:p-5 rounded-md bg-primary/10 border border-primary/20 mb-2">
        <Github className="size-8 md:size-10 text-primary/60"/>
      </div>
      <h2 className="text-primary/85 font-semibold font-mono text-md md:text-xl">Search for a Github User</h2>
      <p className="text-muted-foreground max-w-100 text-sm md:text-md">Enter a GitHub username above to view their profile and explore their repositories.</p>
    </div>
  )
}