'use client'
import { useRouter } from "next/navigation";
import ProfileEditorForm from "./profileEditorForm"


const ProfileEditorFirstTime = ({ user }: any) => {
    const router = useRouter()

    const isButtonDisabled = !(
        user.personalInfo &&
        user.birthYear &&
        user.userCountry &&
        user.userCity &&
        user.giveText &&
        user.receiveText
    );

    const handleNavigation = () => {
        router.push('/timeline')
        router.refresh()
    }


    return (
        <div className="bg-white m-24 p-12">
            <h1 className="text-center text-black text-5xl m-6 font-single">Fill Up your details</h1>
            <ProfileEditorForm user={user} disabled={isButtonDisabled} onClick={handleNavigation} />
        </div>
    )
}

export default ProfileEditorFirstTime;