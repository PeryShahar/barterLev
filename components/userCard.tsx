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
}

const UserCard = ({ name, image }: UserCardProps) => {
    return (
        <div className="p-4 shadow-xl flex gap-6 border-2 border-red-800 m-16 text-black rounded-2xl">
            <Avatar className="ml-2 self-center size-20">
                <AvatarImage src={image ?? ''} alt="User Avatar" />
                <AvatarFallback>X</AvatarFallback>
            </Avatar>
            <div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <div className="flex flex-col gap-2 mt-2">
                    <div><h6 className="font-medium text-lg">What do I want to give?</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi et quidem quas numquam quaerat consequatur voluptate velit facere fugiat iure.</p>
                    </div>
                    <div>
                        <h6 className="font-medium text-lg">What do I want to receive?</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic iure deleniti inventore debitis accusamus velit veritatis unde nemo reiciendis!</p>
                    </div>
                </div>
            </div>
            <Separator orientation="vertical" className="h-auto" />
            <Button className="self-center">Let's Talk!</Button>
        </div>
    )
}

export default UserCard;