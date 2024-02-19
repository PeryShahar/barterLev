import { IoLocationSharp } from "react-icons/io5";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileEditor from "@/components/edit-profile/profileEditor";
import BackButton from "@/components/back";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator"
import { UserSession } from "@/types";


const ProfileInfo = ({ user, isMyProfile }: any) => {

    return (
        <div className="font-single flex flex-col m-8 p-6 text-black border-rose-400 border-2 rounded-lg shadow-2xl">
            <div className="flex flex-col items-center">
                <Avatar className="ml-2 self-center size-40">
                    <AvatarImage src={user?.image ?? ''} alt="User Avatar" />
                    <AvatarFallback>X</AvatarFallback>
                </Avatar>
                <h2 className="text-3xl">{user?.name}</h2>
                <div className="flex items-center">
                    <IoLocationSharp />
                    <span className="text-gray-500"> {user?.country}</span>
                </div>
            </div>
            <Separator className="w-4/5	m-auto mt-12" />
            <div className="flex flex-col gap-2 mt-2">
                <div>
                    <h6 className="font-medium text-2xl">About Me:</h6>
                    <p>{user?.personal_info}</p>
                </div>
                <div><h6 className="font-medium text-2xl">What do I want to give:</h6>
                    <p>{user?.give}</p>
                </div>
                <div>
                    <h6 className="font-medium text-2xl">What do I want to receive:</h6>
                    <p>{user?.receive}</p>
                </div>
            </div>
            <div className="flex gap-2 m-auto mt-8">
                <BackButton path={'/timeline'} />
                {isMyProfile ? <ProfileEditor /> : <Button>Let&apos;s Talk</Button>}
            </div>
        </div>
    )
}

export default ProfileInfo;