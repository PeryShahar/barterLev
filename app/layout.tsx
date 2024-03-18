import { Inter, Single_Day } from "next/font/google";
import { NextAuthProvider } from "./providers";
import Navbar from "@/components/navbar";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";


const inter = Inter({ subsets: ["latin"] });
const singleDay = Single_Day({
    display: 'swap',
    variable: '--font-single-day',
    weight: '400'
})

export const metadata = {
    title: "BarterLev",
    description: "Trade Treasures, Make Connections"
    ,
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const session: any = await getServerSession(authConfig)
    return (
        <html suppressHydrationWarning={true} lang="en" className={`${singleDay.variable}`}>
            <head>
                <link rel='icon' href='/favicon.ico' />
            </head>
            <body className={inter.className + " flex flex-col"} suppressHydrationWarning={true}>
                <NextAuthProvider>
                    <Navbar />
                    {children}
                </NextAuthProvider>
            </body>
        </html>
    );
}