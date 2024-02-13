'use client'

import React from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Dropdown from './dropdown';

import barterBuddyLogo from '@/public/assets/images/barter-logo.png'

const Navbar = () => {
    const { data: session } = useSession()
    const router = useRouter()

    return (
        <nav className="p-4">
            <div className="container mx-auto">
                <div className={`flex items-center ${session ? "justify-between" : "justify-between max-md:justify-center"} max-[450px]:flex-col`}>
                    <div onClick={() => router.push(session ? '/timeline' : '/')} className='flex flex-row items-center gap-4 cursor-pointer'>
                        <Image src={barterBuddyLogo} alt="BarterLev Logo" width={40} height={40} />
                        <div className='font-single text-white text-4xl tracking-widest'>BarterLev</div>
                    </div>
                    <div className="flex space-x-4">
                        {session && <Dropdown />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
