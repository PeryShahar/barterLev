import { useEffect, useState } from "react";

import ProfileField from "./profileField";
import SelectBirthYear from "../generic/select/birthYearSelect";
import SelectCity from "../generic/select/citySelect";
import SelectCountry from "../generic/select/countrySelect";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

import { editProfileFirstTime } from "@/lib/actions";
import { useInitializeForm } from "@/lib/utils";

const ProfileEditorForm = ({ user, disabled, onClick }: any) => {

    const form = useInitializeForm(user);
    const { formState } = form;

    const [userData, setUserData] = useState({
        receiveText: user?.receive ?? '',
        giveText: user?.give ?? '',
        userCountry: user?.country ?? '',
        userCity: user?.city ?? '',
        personalInfo: user?.personal_info ?? '',
        birthYear: user?.birth_year ?? ''
    });
    const [cities, setCities] = useState([]);

    useEffect(() => {
        if (userData.userCountry) {
            fetchCities(userData.userCountry);
        }
    }, [userData.userCountry]);

    const updateUserProfile = editProfileFirstTime.bind(null, user?.id)

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
                        <Button disabled={disabled} onClick={onClick} className="mt-4" type="submit">Save changes</Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default ProfileEditorForm;