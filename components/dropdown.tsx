import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from './ui/button';

const Dropdown = () => {
    const { data: session, status } = useSession()

    return (
        <div style={{ zIndex: 10000 }} className='flex flex-row items-center gap-5'>

            <Dialog>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Image className='border-2 rounded-full cursor-pointer' src={session?.user?.image!} alt="User Avatar" width={50} height={50} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-32 font-single">
                        <DropdownMenuLabel className='text-lg'>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DialogTrigger asChild>
                            <DropdownMenuItem className='text-base cursor-pointer'>
                                Edit Profile
                            </DropdownMenuItem>
                        </DialogTrigger>
                        <DropdownMenuItem className='text-base cursor-pointer' onClick={() => signOut()}>
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DialogContent className='font-single'>
                    <DialogHeader >
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription className='text-xl'>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid w-full gap-1.5">
                        <Label className='text-black text-lg' htmlFor="give">What do you want to give?</Label>
                        <Textarea maxLength={200} className='text-black' placeholder="Type your message here." id="give" />
                    </div>
                    <div className="grid w-full gap-1.5">
                        <Label className='text-black text-lg' htmlFor="receive">What do you want to receive?</Label>
                        <Textarea maxLength={200} className='text-black' placeholder="Type your message here." id="receive" />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Dropdown;