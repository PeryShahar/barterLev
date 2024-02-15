import { useRouter } from "next/navigation";
import { IoLocationSharp } from "react-icons/io5";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"

import { UserSession } from "@/types";

interface UserCardProps {
    user: UserSession
}

const UserCard = ({ user }: UserCardProps) => {
    const router = useRouter()

    const { id, name, image, give, receive, country } = user;

    return (
        <div className="max-md:flex-col justify-between p-4 shadow-xl flex gap-6 border-2 border-rose-500 bg-slate-100 bg-opacity-50 max-md:m-8 m-16 text-black rounded-2xl">
            <div className="max-md:flex-col flex gap-4">
                <Avatar className="ml-2 self-center size-20">
                    <AvatarImage src={image ?? ''} alt="User Avatar" />
                    <AvatarFallback>X</AvatarFallback>
                </Avatar>
                <div className="max-md:text-center">
                    <div className="flex items-center gap-4 max-md:flex-col max-md:gap-2">
                        <h3 className="text-xl font-semibold">{name}</h3>
                        <div className="flex items-center">
                            <IoLocationSharp />
                            <span className="text-gray-500"> {country}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                        <div><h6 className="font-medium text-lg">What do I want to give?</h6>
                            <p>{give}</p>
                        </div>
                        <div>
                            <h6 className="font-medium text-lg">What do I want to receive?</h6>
                            <p>{receive}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-md:flex-col flex gap-4 ">
                <Separator orientation="vertical" className="h-auto bg-black" />
                <Button onClick={() => router.push(`/timeline/${id}`)} className="self-center">Go To Profile</Button>
            </div>
        </div>
    )
}

export default UserCard;