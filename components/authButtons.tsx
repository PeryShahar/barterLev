"use client";

import Image from "next/image";
import googleLogo from "@/public/assets/images/google-logo.png";
import facebookLogo from '@/public/assets/images/facebook-logo.png'
import { signIn } from "next-auth/react";
import { Button } from "./ui/moving-border";

export function GoogleSignInButton() {
    const handleClick = () => {
        signIn("google");
    };

    return (
        <Button
            borderRadius="1.75rem"
            className=" bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
            <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
            <span className="text-xl ml-4 text-blue-400">Continue with Google</span>
        </Button>
    );
}

export function FacebookSignInButton() {
    const handleClick = () => {
        signIn("facebook");
    };

    return (
        <button
            onClick={handleClick}
            className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl  transition-colors duration-300 bg-sky-700 text-white rounded-lg focus:shadow-outline hover:bg-slate-200 cursor-pointer"
        >
            <Image src={facebookLogo} alt="Facebook Logo" width={20} height={20} />
            <span className="ml-4">Continue with Facebook</span>
        </button>
    );
}


export function CredentialsSignInButton() {
    const handleClick = () => {
        signIn();
    };

    return (
        <>
            <button
                onClick={handleClick}
                className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
            >
                {/* <Image src={githubLogo} alt="Github Logo" width={20} height={20} /> */}
                <span className="ml-4">Continue with Email</span>
            </button>
        </>
    );
}