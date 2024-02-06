'use client'

import { useState } from "react";
import { Button } from "./ui/button";

import {
    Form,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { filterByCountryU } from "@/lib/actions";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SelectCountry from "./countrySelect";

const formSchema = z.object({
    country: z.string()
})

const FilterByCountry = () => {
    const [filterCountry, setFilterCountry] = useState('')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            country: ""
        },
    })
    console.log('filterCountry: ', filterCountry);
    return (
        <div className="max-md:flex-col flex-col items-center justify-between bg-black p-4 shadow-xl flex gap-6 border-2 border-white-800 m-16 text-white rounded-2xl">
            <p>Filter by country:</p>
            <Form {...form}>
                <form action={filterByCountryU} className="">
                    <div className="flex flex-col">
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem className="text-black">
                                    <SelectCountry field={field} userCountry={filterCountry} setUserCountry={setFilterCountry} />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="m-auto mt-4" type="submit">Filter</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
export default FilterByCountry;