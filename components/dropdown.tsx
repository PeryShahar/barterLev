import Image from "next/image";
import { useState } from "react"
import { signOut, useSession } from "next-auth/react";
import { countries } from 'countries-list';
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { editProfile } from "@/lib/actions"
import SelectCountry from "./countrySelect";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Button } from './ui/button';
import { Input } from "./ui/input"

const formSchema = z.object({
    receive: z.string().max(200),
    give: z.string().max(200),
    country: z.string()
})


const Dropdown = () => {
    const { data: session } = useSession()

    const [receiveText, setReceiveText] = useState(session?.user?.receive)
    const [giveText, setGiveText] = useState(session?.user?.give)
    const [userCountry, setUserCountry] = useState(session?.user?.country)

    const editProfileWithUserEmail = editProfile.bind(null, session?.user?.id)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            receive: "",
            give: "",
            country: ""
        },
    })
    return (
        <div style={{ zIndex: 10000 }} className='flex flex-row items-center gap-5'>

            <Dialog>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Image className='border-2 rounded-full cursor-pointer' src={session?.user?.image!} alt="User Avatar" width={50} height={50} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-32 font-single">
                        <DropdownMenuLabel className='text-lg'>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DialogTrigger asChild>
                            <DropdownMenuItem className='text-base cursor-pointer'>
                                Edit Profile
                            </DropdownMenuItem>
                        </DialogTrigger>
                        <DropdownMenuItem className='text-base cursor-pointer' onClick={() => signOut()}>
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DialogContent className='font-single'>
                    <DialogHeader >
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription className='text-xl'>
                            Make changes to your profile here. Click save when you are done.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form action={editProfileWithUserEmail} className="space-y-8">
                            <div className="flex flex-col gap-4">
                                <FormField
                                    control={form.control}
                                    name="country"
                                    render={({ field }) => (
                                        <FormItem className="text-black">
                                            <FormLabel className='text-black text-lg'>Select your country:</FormLabel>
                                            <SelectCountry field={field} userCountry={userCountry} setUserCountry={setUserCountry} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="give"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-black text-lg'>What do you want to give?</FormLabel>
                                            <Input
                                                {...field}
                                                id="give"
                                                value={giveText}
                                                onChange={(e) => setGiveText(e.target.value)}
                                                className='text-black'
                                                type="text"
                                                placeholder="Type your message here."
                                                maxLength={200} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="receive"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-black text-lg'>What do you want to receive?</FormLabel>
                                            <Input
                                                {...field}
                                                id="receive"
                                                value={receiveText}
                                                onChange={(e) => setReceiveText(e.target.value)}
                                                className='text-black'
                                                type="text"
                                                placeholder="Type your message here."
                                                maxLength={200} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <p className="text-rose-500 text-xs">* your profile will only be displayed when there is information provided in the inputs.</p>
                                <DialogClose asChild>
                                    <Button className="m-auto mt-4" type="submit">Save changes</Button>
                                </DialogClose>
                            </div>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Dropdown;