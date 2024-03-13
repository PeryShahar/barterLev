'use client'

import { useState } from "react"
import Image from "next/image"

const ChatConversation = ({ conversations }: any) => {
    const [totalConversations, setTotalConversations] = useState(conversations)
    console.log('totalConversations: ', totalConversations);

    return (
        <div>
            {conversations.length > 0
                ? (totalConversations.map((conversation: any) => (
                    <div key={conversation.id} className="flex items-center m-2 gap-3 border-2 p-4">
                        <Image
                            className="rounded-full"
                            src={conversation.user2.image}
                            width={50}
                            height={50}
                            alt="user avatar" />
                        <span className="text-white">{conversation.user2.name}</span>
                    </div>
                )))
                : (<span>no chats found...</span>)
            }
        </div>
    )
}

export default ChatConversation;