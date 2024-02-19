import prisma from "@/lib/prisma";
import ProfileInfo from "@/components/profileInfo";

export default async function Page({ params }: { params: { userId: string } }) {

    const user = await prisma.user.findUnique({
        where: {
            id: params.userId,
        },
        select: { id: true, name: true, email: true, image: true, give: true, receive: true, country: true, personal_info: true }
    });

    return (
        <ProfileInfo user={user} />

    )
}