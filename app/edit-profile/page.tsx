import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import ProfileEditorFirstTime from "@/components/edit-profile/profileEditorFirstTime";



export default async function Page() {
    const session: any = await getServerSession(authConfig);

    return (
        <div className="timeline border-3 border-black h-full">
            <ProfileEditorFirstTime user={session.user} open={true} />
        </div>
    );
}