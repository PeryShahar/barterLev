import prisma from "@/lib/prisma";
import ChatMessages from "@/components/chats/chatMessages";
import ChatInput from "@/components/chats/chatInput";
import ChatConversation from "@/components/chats/chatConversions";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

const getConversations = async () => {
    const conversations = await prisma.conversation.findMany({
        select: {
            // id: true,
            // user1Id: true,
            user2Id: true,
            messages: true,
            // user: {
            //     select: {
            //         name: true,
            //         image: true
            //     }
            // }
        }
    })
    const conversationsWithUser2Details = await Promise.all(conversations.map(async conversation => {
        const user2 = await prisma.user.findUnique({
            where: {
                id: conversation.user2Id
            },
            select: {
                name: true,
                image: true
            }
        });

        return {
            ...conversation,
            user2: user2
        };
    }));

    return conversationsWithUser2Details;
}

const getMessages = async () => {
    const messages = await prisma.message.findMany({
        select: {
            id: true,
            message: true,
            User: {
                select: {
                    name: true,
                    image: true
                }
            }
        },
        orderBy: {
            createdAt: 'asc'
        },
        take: 50
    })

    return messages;
}
export default async function ChatsPage() {
    const session = await getServerSession(authConfig)
    const conversations = await getConversations()
    console.log('conversations: ', conversations);
    const messages = await getMessages()

    return (
        <div className="font-single flex text-black w-[100%] h-screen p-10">
            <div className="w-[30%] border-2 border-blue bg-rose-300 p-4">
                <ChatConversation conversations={conversations} />
            </div>
            <div className="w-[70%] bg-black">
                <ChatMessages messages={messages} />
                <ChatInput />
            </div>
        </div>
    )
}
