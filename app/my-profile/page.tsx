import { getServerSession } from "next-auth";
import ProfileInfo from "@/components/profileInfo";
import { authConfig } from "@/lib/auth";
import prisma from "@/lib/prisma";

const fetchMyUser = async () => {
    const session: any = await getServerSession(authConfig);

    return await prisma.user.findUnique({
        where: {
            email: session?.user?.email
        },
        select: { id: true, name: true, email: true, image: true, give: true, receive: true, country: true, city: true, personal_info: true, birth_year: true }
    });
}
const MyProfile = async () => {
    const user = await fetchMyUser()

    return (
        <ProfileInfo user={user} isMyProfile={true} />
    )
}

export default MyProfile;