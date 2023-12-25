'use client'

import React from 'react';
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import barterBuddyLogo from '@/public/barter-buddy-logo.png'

const Navbar = () => {
    const { data: session, status } = useSession()


    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className='flex flex-row '>
                        {/* <Image className='bg0w' src={barterBuddyLogo} alt="Barter Buddy Logo" width={50} height={50} /> */}
                        <div className='font-single text-white text-4xl'>Barter Buddy</div>
                    </div>
                    <div className="flex space-x-4">
                        {session &&
                            <div className='flex flex-row items-center gap-5'>
                                <div className='flex flex-col items-center'>
                                    <Image className='border-2 rounded-full' src={session?.user?.image!} alt="User Avatar" width={50} height={50} />
                                </div>
                                <button className='text-white' onClick={() => signOut()}>Log out</button>
                            </div>}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
