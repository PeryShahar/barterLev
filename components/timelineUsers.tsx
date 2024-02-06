import UserCard from "./userCard";

const TimelineUsers = ({ users }: any) => {
    return (
        <>
            {users.map((user: any) => {
                return (
                    <UserCard key={user.id} user={user} />
                )
            })}
        </>
    )
}
export default TimelineUsers;