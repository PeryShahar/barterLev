
import { getServerSession } from "next-auth";

import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import prisma from "@/lib/prisma";
import TimelineUsers from "@/components/timeline/timelineUsers";

const fetchAllUsers = async () => {
    const session: any = await getServerSession(authConfig);

    return await prisma.user.findMany({
        where: {
            email: {
                not: session?.user?.email
            },
            NOT: [{ give: null }, { give: "" }, { receive: null }, { receive: '' }],
        },
        select: { id: true, name: true, email: true, image: true, give: true, receive: true, country: true, city: true, personal_info: true }
    });
}

export default async function Page() {
    await loginIsRequiredServer();

    const users = await fetchAllUsers();

    return (
        <div className="timeline border-3 border-black h-full">
            <TimelineUsers initialUsers={users} />
        </div>
    );
}