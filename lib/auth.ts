import { NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import prisma from "./prisma";


export const authConfig: any = {
    adapter: PrismaAdapter(prisma) as Adapter,
    secret: process.env.SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
        })
        // CredentialsProvider({
        //     name: "Sign in",
        //     credentials: {
        //         email: {
        //             label: "Email",
        //             type: "email",
        //             placeholder: "example@example.com",
        //         },
        //         password: { label: "Password", type: "password" },
        //     },
        //     async authorize(credentials) {
        //         if (!credentials || !credentials.email || !credentials.password)
        //             return null;

        //         // const dbUser = await prisma.user.findFirst({
        //         //     where: { email: credentials.email },
        //         // });

        //         //Verify Password here
        //         //We are going to use a simple === operator
        //         //In production DB, passwords should be encrypted using something like bcrypt...
        //         // if (dbUser && dbUser.password === credentials.password) {
        //         //     const { password, createdAt, id, ...dbUserWithoutPassword } = dbUser;
        //         //     return dbUserWithoutPassword as User;
        //         // }

        //         return null;
        //     },
        // }),
    ],
    callbacks: {
        async session({ session, user }: any) {
            session.user = user;
            return session;
        }
    }
};

export async function loginIsRequiredServer() {
    const session = await getServerSession(authConfig);
    if (!session) return redirect("/");
}

// export function loginIsRequiredClient() {
//     if (typeof window !== "undefined") {
//         const session = useSession();
//         const router = useRouter();
//         if (!session) router.push("/");
//     }
// }