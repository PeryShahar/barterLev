import { Inter, Single_Day } from "next/font/google";
import { NextAuthProvider } from "./providers";
import Navbar from "@/components/navbar";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const singleDay = Single_Day({
    display: 'swap',
    variable: '--font-single-day',
    weight: '400'
})

export const metadata = {
    title: "BarterLev",
    description: "",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${singleDay.variable}`}>
            <head>
                <link rel='icon' href='/favicon.ico' />
            </head>
            <body className={inter.className + " flex flex-col"}>
                <NextAuthProvider>
                    <Navbar />
                    {children}
                </NextAuthProvider>
            </body>
        </html>
    );
}