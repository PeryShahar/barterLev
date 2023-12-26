import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// import Tweet from "@/components/tweet";
import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import prisma from "@/lib/prisma";

const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

export default async function Page() {
    await loginIsRequiredServer();

    const session = await getServerSession(authConfig);

    const users = await prisma.users.findMany({
        select: { name: true, email: true, image: true }
    });
    console.log('users: ', users);

    await wait(1000);

    return (
        <>
            {/*{session?.user?.image && <img src={session?.user?.image} alt="" />}*/}
            {/* <h3>This is your timeline: {session?.user?.email}</h3> */}
            {users.map((user) => {
                return (
                    <>
                        {user.name}
                    </>
                )
            })}
            {/*{tweets.map((tweet: any, idx: number) => (*/}
            {/*    <Tweet key={idx} tweet={tweet} />*/}
            {/*))}*/}
        </>
    );
}