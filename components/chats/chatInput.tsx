'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { sendMessage } from "@/lib/actions";

const formSchema = z.object({
    message: z.string().min(1, "Message cannot be empty"),
})

const ChatInput = () => {
    const [chatInput, setChatInput] = useState('')
    const searchParams = useSearchParams()
    const searchUID = searchParams.get('uid')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: ''
        },
    })
    const sendMessageV = sendMessage.bind(null, searchUID)

    return (
        <div>
            <div className="w-full">
                <Form {...form}>
                    <form action={sendMessageV} className="border-2 bottom-0 border-red-500 ">
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
                                        placeholder="Type your message here..."
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
    )
}

export default ChatInput;