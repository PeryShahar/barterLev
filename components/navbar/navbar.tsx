'use client'

import React from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Dropdown from './dropdown';


const Navbar = () => {
    const { data: session } = useSession()
    const router = useRouter()

    return (
        <nav className="bg-sky-500 sticky top-0 z-50 p-4">
            <div className="container mx-auto">
                <div className={`flex items-center ${session ? "justify-between" : "justify-between max-md:justify-center"} max-[450px]:flex-col`}>
                    <div onClick={() => router.push(session ? '/timeline' : '/')} className='flex flex-row items-center gap-4 cursor-pointer'>
                        <Image
                            src={'/assets/images/barter-logo.png'}
                            sizes="100vw"
                            width={0}
                            height={0}
                            alt="BarterLev Logo"
                            style={{ width: '40px', height: 'auto' }} />
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
