'use client'

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter()

    return (
        <Button onClick={() => router.back()} className="self-center">← Back</Button>
    )
}
export default BackButton;