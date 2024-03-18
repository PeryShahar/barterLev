import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import ProfileEditor from "@/components/edit-profile/profileEditor";

export default async function Page() {
    const session: any = await getServerSession(authConfig);

    return (
        <div className="timeline border-3 border-black h-full">
            <ProfileEditor user={session.user} open={true} />
        </div>
    );
}