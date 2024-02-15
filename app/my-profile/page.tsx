'use client'

import { useSession } from "next-auth/react";
import ProfileInfo from "@/components/profileInfo";

const MyProfile = () => {
    const { data: session } = useSession()
    console.log('session: ', session);

    return (
        <ProfileInfo user={session?.user} isMyProfile={true} />

    )
}

export default MyProfile;