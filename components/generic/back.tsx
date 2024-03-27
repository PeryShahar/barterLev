'use client'

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const BackButton = ({ path }: { path: string }) => {
    const router = useRouter()

    return (
        <Button onClick={() => router.push(path)} className="self-center text-lg">← Back</Button>
    )
}
export default BackButton;