'use client'

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { editProfile } from "@/lib/actions"

import SelectCountry from "../countrySelect"
import SelectCity from "../citySelect"
import ProfileField from "./profileField"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Button } from "../ui/button"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    receive: z.string().max(200),
    give: z.string().max(200),
    country: z.string(),
    city: z.string(),
    personal_info: z.string()
})

const ProfileEditor = () => {

    const { data: session } = useSession()
    const [userData, setUserData] = useState({
        receiveText: session?.user?.receive,
        giveText: session?.user?.give,
        userCountry: session?.user?.country,
        userCity: session?.user?.city ?? '',
        personalInfo: session?.user?.personal_info
    });
    const [cities, setCities] = useState([]);
    console.log('cities: ', cities);

    const updateUserProfile = editProfile.bind(null, session?.user?.id)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            receive: "",
            give: "",
            country: "",
            city: "",
            personal_info: ""
        },
    })

    useEffect(() => {
        if (userData.userCountry) {
            fetchCities(userData.userCountry);
        }
    }, [userData.userCountry]);

    const fetchCities = async (country: any) => {
        try {
            const response = await fetch("https://countriesnow.space/api/v0.1/countries/cities", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ country }),
            });
            const data = await response.json();
            setCities(data.data);
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="self-center bg-sky-600 text-lg">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className='font-single border-blue-500 max-md:w-11/12'>
                <DialogHeader >
                    <DialogDescription className='text-xl'>
                        Make changes to your profile here. Click save when you are done.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form action={updateUserProfile} className="space-y-8">
                        <div className="flex flex-col gap-4 ">
                            <FormField
                                control={form.control}
                                name="personal_info"
                                render={({ field }) => (
                                    <FormItem className="text-black">
                                        <FormLabel className='text-black text-lg'>About Me:</FormLabel>
                                        <Textarea
                                            {...field}
                                            value={userData.personalInfo}
                                            onChange={(event) => setUserData({ ...userData, personalInfo: event.target.value })} />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex gap-2 max-md:flex-col">
                                <FormField
                                    control={form.control}
                                    name="country"
                                    render={({ field }) => (
                                        <FormItem className="text-black">
                                            <FormLabel className='text-black text-lg'>Select your country:</FormLabel>
                                            <SelectCountry
                                                field={field}
                                                userCountry={userData.userCountry}
                                                setUserCountry={(value: string) =>
                                                    setUserData({ ...userData, userCountry: value })
                                                } />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem className="text-black">
                                            <FormLabel className="text-black text-lg">Select your city:</FormLabel>
                                            <SelectCity
                                                field={field}
                                                userCity={userData.userCity}
                                                setUserCity={(value: string) => setUserData({ ...userData, userCity: value })}
                                                cities={cities}
                                            />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <ProfileField
                                form={form}
                                fieldName="give"
                                labelText="What do you want to give?"
                                fieldValue={userData.giveText}
                                setFieldValue={(value: string) =>
                                    setUserData({ ...userData, giveText: value })
                                }
                                maxLength={200}
                            />
                            <ProfileField
                                form={form}
                                fieldName="receive"
                                labelText="What do you want to receive?"
                                fieldValue={userData.receiveText}
                                setFieldValue={(value: string) =>
                                    setUserData({ ...userData, receiveText: value })
                                }
                                maxLength={200}
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
    )
}

export default ProfileEditor;