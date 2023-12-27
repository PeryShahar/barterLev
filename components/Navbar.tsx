'use client'

import React from 'react';
import { useSession } from "next-auth/react";
import barterBuddyLogo from '@/public/barter-buddy-logo.png'
import Dropdown from './dropdown';


const Navbar = () => {
    const { data: session } = useSession()


    return (
        <nav className=" p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className='flex flex-row '>
                        {/* <Image className='bg0w' src={barterBuddyLogo} alt="Barter Buddy Logo" width={50} height={50} /> */}
                        <div className='font-single text-white text-4xl tracking-widest'>Barter Buddy</div>
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
