import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import prisma from "@/lib/prisma";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"

const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

export default async function Page() {
    await loginIsRequiredServer();

    const session = await getServerSession(authConfig);

    const users = await prisma.users.findMany({
        select: { name: true, email: true, image: true }
    });

    await wait(1000);

    return (
        <div className="border-3 border-black h-full">
            {users.map((user) => {
                return (
                    <div className="p-4 flex gap-6 border-2 border-red-800 m-16 text-black rounded-2xl">
                        <Avatar className="ml-2 self-center size-20">
                            <AvatarImage src={user.image ?? ''} alt="User Avatar" />
                            <AvatarFallback>X</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="text-xl font-semibold">{user.name}</h3>
                            <div className="flex flex-col gap-2 mt-2">
                                <div><h6 className="font-medium text-lg">What do I want to give?</h6>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi et quidem quas numquam quaerat consequatur voluptate velit facere fugiat iure.</p>
                                </div>
                                <div>
                                    <h6 className="font-medium text-lg">What do I want to receive?</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic iure deleniti inventore debitis accusamus velit veritatis unde nemo reiciendis!</p>
                                </div>
                            </div>
                        </div>
                        <Separator orientation="vertical" className="h-auto" />
                        <Button className="self-center">Let's Talk!</Button>
                    </div>
                )
            })}

        </div>
    );
}