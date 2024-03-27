import prisma from "@/lib/prisma";
import ProfileInfo from "@/components/profile/profileInfo";

export default async function Page({ params }: { params: { userId: string } }) {

    const user = await prisma.user.findUnique({
        where: {
            id: params.userId,
        },
        select: { id: true, name: true, email: true, image: true, give: true, receive: true, country: true, city: true, personal_info: true, birth_year: true }
    });

    return (
        <ProfileInfo user={user} />

    )
}