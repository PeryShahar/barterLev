import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import prisma from "@/lib/prisma";

export default async function Page({ params }: { params: { userId: string } }) {

    const user = await prisma.user.findUnique({
        where: {
            id: params.userId,
        },
        select: { id: true, name: true, email: true, image: true, give: true, receive: true, country: true }
    });

    return (
        <div className="flex flex-col m-14 p-6 text-black border-rose-400 border-2 rounded-lg shadow-2xl">
            <div className="flex flex-col items-center">
                <Avatar className="ml-2 self-center size-40">
                    <AvatarImage src={user?.image ?? ''} alt="User Avatar" />
                    <AvatarFallback>X</AvatarFallback>
                </Avatar>
                {user?.country}
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <div><h6 className="font-medium text-2xl">What do I want to give?</h6>
                    <p>{user?.give}</p>
                </div>
                <div>
                    <h6 className="font-medium text-2xl">What do I want to receive?</h6>
                    <p>{user?.receive}</p>
                </div>
            </div>
        </div>
    )
}