'use client'

import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileEditor from "@/components/edit-profile/profileEditor";
import BackButton from "@/components/back";

const MyProfile = () => {
    const { data: session } = useSession()

    return (
        <>
            <div className="flex flex-col m-14 p-6 text-black border-rose-400 border-2 rounded-lg shadow-2xl">
                <div className="flex flex-col items-center">
                    <Avatar className="ml-2 self-center size-40">
                        <AvatarImage src={session?.user?.image ?? ''} alt="User Avatar" />
                        <AvatarFallback>X</AvatarFallback>
                    </Avatar>
                    {session?.user?.country}
                </div>
                <div className="flex flex-col gap-2 mt-2">
                    <div>
                        <h6 className="font-medium text-2xl">About Me:</h6>
                    </div>
                    <div><h6 className="font-medium text-2xl">What do I want to give:</h6>
                        <p>{session?.user?.give}</p>
                    </div>
                    <div>
                        <h6 className="font-medium text-2xl">What do I want to receive:</h6>
                        <p>{session?.user?.receive}</p>
                    </div>
                </div>
                <div className="flex gap-2 m-auto mt-8">
                    <BackButton />
                    <ProfileEditor />
                </div>
            </div>
        </>
    )
}

export default MyProfile;