'use client'

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Dropdown = () => {
    const router = useRouter()
    const { data: session } = useSession()

    const handleLogOut = () => {
        signOut({ callbackUrl: '/' });
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Image className='border-2 rounded-full cursor-pointer' src={session?.user?.image!} alt="User Avatar" width={50} height={50} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-32 font-single">
                    <DropdownMenuItem onClick={() => router.push('/my-profile')} className='text-xl cursor-pointer'>
                        My Profile
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => router.push('/chats')} className='text-xl cursor-pointer'>
                        Chats
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='text-xl cursor-pointer' onClick={() => handleLogOut()}>
                        Log out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default Dropdown;