import { useState } from "react"
import { useSession } from "next-auth/react";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import ProfileEditor from "./edit-profile/profileEditor";

import { editProfile } from "@/lib/actions"

const formSchema = z.object({
    receive: z.string().max(200),
    give: z.string().max(200),
    country: z.string()
})

const Dropdown = () => {
    const { data: session } = useSession()

    const [userData, setUserData] = useState({
        receiveText: session?.user?.receive,
        giveText: session?.user?.give,
        userCountry: session?.user?.country
    });

    const updateUserProfile = editProfile.bind(null, session?.user?.id)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            receive: "",
            give: "",
            country: ""
        },
    })
    return (
        <>
            <ProfileEditor
                userData={userData}
                setUserData={setUserData}
                form={form}
                updateUserProfile={updateUserProfile} />
        </>
    )
}

export default Dropdown;