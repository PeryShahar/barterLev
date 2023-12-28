import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"

interface UserCardProps {
    name: string | null
    image: string | null
    give: string | null
    receive: string | null
}

const UserCard = ({ name, image, give, receive }: UserCardProps) => {
    return (
        <div className="max-md:flex-col justify-between p-4 shadow-xl flex gap-6 border-2 border-red-800 m-16 text-black rounded-2xl">
            <div className="max-md:flex-col flex gap-4">
                <Avatar className="ml-2 self-center size-20">
                    <AvatarImage src={image ?? ''} alt="User Avatar" />
                    <AvatarFallback>X</AvatarFallback>
                </Avatar>
                <div className="max-md:text-center">
                    <h3 className="text-xl font-semibold">{name}</h3>
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
                <Separator orientation="vertical" className="h-auto" />
                <Button className="self-center">Let's Talk!</Button>
            </div>
        </div>
    )
}

export default UserCard;