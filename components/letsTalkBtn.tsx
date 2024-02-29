'use client'
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const LetsTalkBtn = ({ userId }: any) => {
    const router = useRouter();

    return (
        <Button
            onClick={() => router.push(`/chats?uid=${userId}`)}
            className="text-lg bg-sky-600">
            Let&apos;s Talk
        </Button>
    )

}
export default LetsTalkBtn;