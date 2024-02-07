'use client'
import { useState } from "react";
import UserCard from "./userCard";

const TimelineUsers = ({ initialUsers }: any) => {
    const [usersToDisplay, setUsers] = useState(initialUsers);

    return (
        <>
            {usersToDisplay.map((user: any) => {
                return (
                    <UserCard key={user.id} user={user} />
                )
            })}
        </>
    )
}
export default TimelineUsers;