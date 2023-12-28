import { getServerSession } from "next-auth";

import UserCard from "@/components/userCard";
import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import prisma from "@/lib/prisma";

const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

export default async function Page() {
    await loginIsRequiredServer();

    const session: any = await getServerSession(authConfig);

    const users = await prisma.user.findMany({
        where: {
            email: {
                not: session?.user?.email
            },
            NOT: [{ give: null }, { give: "" }, { receive: null }, { receive: '' }],
        },
        select: { id: true, name: true, email: true, image: true, give: true, receive: true }
    });

    await wait(1000);

    return (
        <div className="border-3 border-black h-full">
            {users.map((user) => {
                return (
                    <UserCard key={user.id} name={user.name} image={user.image} give={user.give} receive={user.receive} />
                )
            })}
        </div>
    );
}