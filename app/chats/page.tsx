'use client'

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { sendMessage } from "@/lib/actions";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const formSchema = z.object({
    message: z.string().min(1, "Message cannot be empty"),
})

const ChatsPage = () => {
    const [chats, setChats] = useState([]);
    const [chatInput, setChatInput] = useState('')

    const { data: session } = useSession()
    const searchParams = useSearchParams()
    const searchUID = searchParams.get('uid')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: ''
        },
    })

    const sendMessageV = sendMessage.bind(null, session?.user?.id)

    return (
        <div className="font-single flex text-black w-[100%] h-screen p-10">
            <div className="w-[30%] border-2 border-blue bg-rose-300 p-4">
                <p className="text-center mb-4">Chats</p>

                <span>no chats found...</span>
            </div>
            <div className="w-[70%] relative bg-black">
                <div className="w-full border-4 border-green-200">
                    <Form {...form}>
                        <form action={sendMessageV} className="flex absolute bottom-0 w-full border-2 border-red-500 ">
                            <FormField
                                control={form.control}
                                name='message'
                                render={({ field }) => (
                                    <FormItem>
                                        <Input
                                            {...field}
                                            id='chat-input'
                                            value={chatInput}
                                            onChange={(e) => setChatInput(e.target.value)}
                                            className="text-black"
                                            type="text"
                                            placeholder="Type your message here."
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}

                            />
                            <Button type="submit">Send</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default ChatsPage;