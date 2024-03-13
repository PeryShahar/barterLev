'use client'

import { useState } from "react";
import Image from "next/image";

const ChatMessages = ({ messages }: any) => {
    const [totalMessages, setTotalMessages] = useState(messages)
    return (
        <div>
            {messages.length > 0
                ? (totalMessages.map((message: any) => (
                    <div key={message.id} className="flex items-center m-2 gap-3">
                        <Image className="rounded-full" src={message.User.image} width={50} height={50} alt="user avatar" />
                        <span className="text-white">{message.message}</span>
                    </div>
                )))
                : (<span>no chats found...</span>)
            }
        </div>
    )
}

export default ChatMessages;