'use client'

import React from 'react';
import { useSession } from "next-auth/react";
import Image from 'next/image';
import Dropdown from './dropdown';

import barterBuddyLogo from '@/public/barter-logo.png'

const Navbar = () => {
    const { data: session } = useSession()

    return (
        <nav className="p-4">
            <div className="container mx-auto">
                <div className={`flex items-center ${session ? "justify-between" : "justify-between max-md:justify-center"}`}>
                    <div className='flex flex-row items-center gap-4'>
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
