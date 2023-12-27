import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import UserCard from "@/components/userCard";
import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import prisma from "@/lib/prisma";

const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

export default async function Page() {
    await loginIsRequiredServer();

    const session = await getServerSession(authConfig);

    const users = await prisma.users.findMany({
        where: {
            email: {
                not: session?.user?.email
            }
        },
        select: { name: true, email: true, image: true }
    });

    await wait(1000);

    return (
        <div className="border-3 border-black h-full">
            {users.map((user) => {
                return (
                    <UserCard name={user.name} image={user.image} />
                )
            })}
        </div>
    );
}