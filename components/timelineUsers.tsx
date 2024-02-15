'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import UserCard from "./userCard";
import SelectCountry from "./countrySelect";

import {
    Form,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "./ui/button";

import { filterByCountry } from "@/lib/actions";
import { UserSession } from "@/types";

const countryFormSchema = z.object({
    country: z.string()
})

const TimelineUsers = ({ initialUsers }: { initialUsers: UserSession[] }) => {

    const { data: session } = useSession()

    const [usersToDisplay, setUsersToDisplay] = useState<UserSession[]>(initialUsers);
    const [selectedCountry, setSelectedCountry] = useState<string>('');

    const form = useForm<z.infer<typeof countryFormSchema>>({
        resolver: zodResolver(countryFormSchema),
        defaultValues: {
            country: ""
        },
    })

    const handleFilterUsers = async () => {
        if (!selectedCountry) return;
        const filteredUsers = await filterByCountry(session?.user.id, selectedCountry)
        if (Array.isArray(filteredUsers)) setUsersToDisplay(filteredUsers)
    }

    return (
        <>
            <div className="max-md:flex-col flex-col items-center justify-between bg-black p-4 shadow-xl flex gap-6 border-2 border-white-800 max-md:m-8 m-16 text-white rounded-2xl">
                <p>Filter by country:</p>
                <Form {...form}>
                    <form action={handleFilterUsers}>
                        <div className="flex flex-col">
                            <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem className="text-black">
                                        <SelectCountry field={field} userCountry={selectedCountry} setUserCountry={setSelectedCountry} />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="m-auto mt-4" type="submit">Filter</Button>
                        </div>
                    </form>
                </Form>
            </div>
            <div>
                {usersToDisplay.length
                    ? usersToDisplay.map((user: any) => {
                        return (
                            <UserCard key={user.id} user={user} />
                        )
                    })
                    : <div className="font-single text-center text-black text-4xl">
                        No users found...
                    </div>}
            </div>
        </>
    )
}
export default TimelineUsers;