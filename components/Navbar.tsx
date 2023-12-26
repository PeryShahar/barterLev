'use client'

import React from 'react';
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import barterBuddyLogo from '@/public/barter-buddy-logo.png'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button';

const Navbar = () => {
    const { data: session, status } = useSession()


    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className='flex flex-row '>
                        {/* <Image className='bg0w' src={barterBuddyLogo} alt="Barter Buddy Logo" width={50} height={50} /> */}
                        <div className='font-single text-white text-4xl tracking-widest'>Barter Buddy</div>
                    </div>
                    <div className="flex space-x-4">
                        {session &&
                            <div style={{ zIndex: 10000 }} className='flex flex-row items-center gap-5'>
                                <div className='flex flex-col items-center'>
                                </div>

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Image className='border-2 rounded-full' src={session?.user?.image!} alt="User Avatar" width={50} height={50} />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            Edit Profile
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => signOut()}>
                                            Log out
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
