import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast/use-toast";
import { Toaster } from "@/components/ui/toast/toaster";

const FormSchema = z.object({
    searchValue: z.string().min(2, {
        message: "Search content must be at least 2 characters.",
    }),
});

export function BasicSearch() {
    const { toast } = useToast();
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            searchValue: "",
        },
    });

    function onSubmit(data) {
        console.log("Search Started");
        toast({
            title: "You are searching the following values:",
            description: (
                <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 text-black">
                    Searching for: {data.searchValue}
                </div>
            ),
        });

        // Perform the Google Search
        performGoogleSearch(data.searchValue);

        console.log("Successfully Search");
    }

    function performGoogleSearch(query) {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(url, '_blank');
    }

    return (
        <>
            <Toaster />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                    <FormField
                        control={form.control}
                        name="searchValue"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Search</FormLabel>
                                <FormControl>
                                    <Input placeholder="Find Anything...." {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is the basic search component.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant="default" style={{ marginTop: '5px' }}>Search</Button>
                </form>
            </Form>
        </>
    );
}

export default BasicSearch;
