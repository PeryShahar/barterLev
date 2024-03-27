import { IoLocationSharp } from "react-icons/io5";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileEditorDialog from "../edit-profile/profileEditorDialog";
import BackButton from "@/components/generic/back";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator"
import { UserSession } from "@/types";


const ProfileInfo = ({ user, isMyProfile }: any) => {

    return (
        <div className="font-single flex flex-col m-8 p-6 text-black rounded-lg shadow-2xl">
            <div className="flex gap-2 justify-between mt-4 max-md:mb-8">
                <BackButton path={'/timeline'} />
                {isMyProfile ? <ProfileEditorDialog user={user} /> : <Button className="text-lg bg-sky-600">Let&apos;s Talk</Button>}
            </div>
            <div className="flex flex-col items-center">
                <Avatar className="ml-2 self-center size-52">
                    <AvatarImage src={user?.image ?? ''} alt="User Avatar" />
                    <AvatarFallback>X</AvatarFallback>
                </Avatar>
                <h2 className="text-5xl">{user?.name}</h2>
                {user?.country ? <div className="flex items-center">
                    <IoLocationSharp />
                    <span className="text-gray-500 text-xl">{user?.city}, {user?.country}</span>
                </div> : null}
                {user?.birth_year ? <div className="flex items-center">
                    <span className="text-gray-500 text-xl">{`${new Date().getFullYear() - user?.birth_year} years old`}</span>
                </div> : null}
            </div>
            <Separator className="w-4/5	m-auto mt-8 mb-8" />
            <div className="flex flex-col gap-12 mt-2">
                {user?.personal_info ? <div>
                    <h6 className="font-medium text-4xl text-rose-500">About Me:</h6>
                    <p className="text-xl">{user?.personal_info}</p>
                </div> : null}
                {user?.give ? <div><h6 className="font-medium text-4xl text-rose-500">What do I want to give:</h6>
                    <p className="text-xl">{user?.give}</p>
                </div> : null}
                {user?.receive ? <div>
                    <h6 className="font-medium text-4xl text-rose-500">What do I want to receive:</h6>
                    <p className="text-xl">{user?.receive}</p>
                </div> : null}
            </div>
            <Separator className="w-4/5	m-auto mt-8 mb-8" />

        </div>
    )
}

export default ProfileInfo;