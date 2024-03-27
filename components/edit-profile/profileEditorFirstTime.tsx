'use client'

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"


import { editProfileFirstTime } from "@/lib/actions"

import SelectCountry from "../generic/select/countrySelect"
import SelectCity from "../generic/select/citySelect"
import SelectBirthYear from '../generic/select/birthYearSelect'
import ProfileField from "./profileField"

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
    receive: z.string().min(1, { message: "This field is required" }).max(200),
    give: z.string().min(1, { message: "This field is required" }).max(200),
    country: z.string().min(1, { message: "This field is required" }),
    city: z.string().min(1, { message: "This field is required" }),
    personal_info: z.string().min(1, { message: "This field is required" }),
    birth_year: z.string().min(1, { message: "This field is required" })
}).strict()

const ProfileEditorFirstTime = ({ user }: any) => {
    const router = useRouter()

    const [userData, setUserData] = useState({
        receiveText: user?.receive ?? '',
        giveText: user?.give ?? '',
        userCountry: user?.country ?? '',
        userCity: user?.city ?? '',
        personalInfo: user?.personal_info ?? '',
        birthYear: user?.birth_year ?? ''
    });
    const [cities, setCities] = useState([]);

    const updateUserProfile = editProfileFirstTime.bind(null, user?.id)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            receive: "",
            give: "",
            country: "",
            city: "",
            personal_info: "",
            birth_year: "",
        },
    })
    const { formState } = form;


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

    const isButtonDisabled = !(
        userData.personalInfo &&
        userData.birthYear &&
        userData.userCountry &&
        userData.userCity &&
        userData.giveText &&
        userData.receiveText
    );

    const handleNavigation = () => {
        router.push('/timeline')
        router.refresh()
    }


    return (
        <div className="bg-white m-24 p-12">
            <h1 className="text-center text-black text-5xl m-6 font-single">Fill Up your details</h1>
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
                                        required
                                        value={userData.personalInfo}
                                        onChange={(event) => setUserData({ ...userData, personalInfo: event.target.value })} />
                                    {formState.errors.personal_info && <span className="text-red">{formState.errors.personal_info.message}</span>}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="birth_year"
                            render={({ field }) => (
                                <FormItem className="text-black">
                                    <FormLabel className="text-black text-lg">Birth Year</FormLabel>
                                    <SelectBirthYear
                                        field={field}
                                        userData={userData}
                                        setUserData={setUserData}
                                    />
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
                                            setUserCountry={(value: string) => {
                                                setUserData({ ...userData, userCountry: value, userCity: '' })
                                                setCities([])

                                            }
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
                        <div className="flex justify-center gap-4">
                            <Button disabled={isButtonDisabled} onClick={handleNavigation} className="mt-4" type="submit">Save changes</Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default ProfileEditorFirstTime;