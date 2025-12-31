"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    username: z.string()
        .min(1, { message: "Username is required." })
        .max(100, { message: "Username must be at most 100 characters long." })
        .regex(/^\S+$/, { message: "Username cannot contain spaces." }),
});

interface SearchFormProps {
    onSearch: (username: string) => void;
    isLoading: boolean;
}

export default function SearchForm({ onSearch, isLoading }: SearchFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: ""
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        onSearch(values.username);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl >
                                <div className="relative">
                                    <Github className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <Input
                                        id="username"
                                        type="text"
                                        className="pl-12 h-13 bg-input focus-visible:ring-ring"
                                        placeholder="Enter Github username..."
                                        {...field}
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isLoading} className="size-fit sm:w-40 h-13">
                    <div className="mx-0 sm:mx-2 flex items-center gap-3 ">
                        <Search />
                        <span className="hidden sm:block">
                            Search
                        </span>
                    </div>
                </Button>
            </form>
        </Form>
    )
}