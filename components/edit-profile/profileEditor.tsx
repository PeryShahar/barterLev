import Image from "next/image"
import { useSession, signOut } from "next-auth/react"

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

import { Button } from "../ui/button"
import SelectCountry from "../countrySelect"
import ProfileField from "./profileField"

interface ProfileEditorProps {
    userData: {
        receiveText: string | undefined;
        giveText: string | undefined;
        userCountry: string | undefined;
    };
    setUserData: React.Dispatch<
        React.SetStateAction<{
            receiveText: string | undefined;
            giveText: string | undefined;
            userCountry: string | undefined;
        }>
    >;
    form: any
    updateUserProfile: any
}

const ProfileEditor = ({ userData, setUserData, form, updateUserProfile }: ProfileEditorProps) => {
    const { data: session } = useSession()

    return (
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