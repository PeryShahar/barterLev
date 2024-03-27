'use client'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"


import { Button } from "../ui/button"
import ProfileEditorForm from "./profileEditorForm"


const ProfileEditorDialog = ({ user }: any) => {

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="self-center bg-sky-600 text-lg">Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className='font-single border-blue-500 max-md:w-11/12 max-md:h-5/6 max-md:overflow-scroll'>
                    <DialogHeader >
                        <DialogDescription className='text-xl'>
                            Make changes to your profile here. Click save when you are done.
                        </DialogDescription>
                    </DialogHeader>
                    <ProfileEditorForm user={user} />
                </DialogContent>
            </Dialog >
        </div>
    )
}

export default ProfileEditorDialog;