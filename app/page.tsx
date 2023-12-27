
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import {
  CredentialsSignInButton, FacebookSignInButton,
  GoogleSignInButton,
} from "@/components/authButtons";
import { CredentialsForm } from "@/components/credentialsForm";
import { authConfig } from "@/lib/auth";
import backgroundImage from '@/public/background-login.png'


export default async function SignInPage() {
  const session = await getServerSession(authConfig);

  console.log("Session: ", session);

  if (session) return redirect("/timeline");

  return (
    <div style={{
      position: 'relative',
      backgroundImage: `url(${backgroundImage.src})`, backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }} className="font-single w-full flex flex-col items-center justify-center min-h-screen py-2">
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(20, 25, 25, 0.6)",
      }}></div>

      <div className="max-md:m-2 z-10">
        <h1 className="max-md:text-center mt-10 mb-4 text-4xl font-bold">Trade Treasures, Make Connections</h1>
        <div className=" flex flex-col items-center mt-10 mb-10 p-10 shadow-md bg-white bg-opacity-70 text-black">
          <h1 className="mt-10 mb-4 text-4xl font-bold">Join Us</h1>
          <GoogleSignInButton />
          <FacebookSignInButton />
          {/* <span className="text-2xl font-semibold text-center mt-8">
            Or
          </span> */}
          {/* <CredentialsSignInButton /> */}
          {/* <CredentialsForm /> */}
          {/* <div className="flex">
            <p className="mt-2 text-1xl">Already a member?</p>
            <button className="h-8 px-4 mt-1 text-lg text-white transition-colors duration-150  rounded-lg focus:shadow-outline">Log In</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}