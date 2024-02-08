
import { redirect } from "next/navigation";
import Image from "next/image";
import { getServerSession } from "next-auth";
import {
  CredentialsSignInButton, FacebookSignInButton,
  GoogleSignInButton,
} from "@/components/authButtons";
import { CredentialsForm } from "@/components/credentialsForm";
import { authConfig } from "@/lib/auth";
import backgroundImage from '@/public/background-login.png'
import { Separator } from "@/components/ui/separator"



export default async function SignInPage() {
  const session = await getServerSession(authConfig);

  if (session) return redirect("/timeline");

  return (
    <>
      <div style={{
        position: 'relative',
        backgroundImage: `url(${backgroundImage.src})`, backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)"
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
          <div className="text-center">
            <h1 className="max-md:text-center mt-2 mb-4 text-6xl font-bold">Trade <span className="text-rose-400">Treasures</span>, Make <span className="text-rose-400">Connections</span></h1>
            <p className="text-3xl p-4">Exchange goods, cultivate connections, and enrich lives worldwide through our bartering platform.</p>
          </div>
          <div className="flex flex-col items-center m-auto max-w-xl mt-10 mb-10 p-10 shadow-md bg-white bg-opacity-70 text-black">
            <h2 className="mt-6 mb-4 text-5xl font-bold tracking-wider">Join Us</h2>
            <GoogleSignInButton />
            {/* <FacebookSignInButton /> */}
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
      <Separator className="w-4/5	m-auto mt-12" />
      <div className="mt-4 font-single p-10 flex items-center">
        <div>
          <h3 className="text-6xl text-blue-400 max-md:text-center">What is BarterLev?</h3>
          <div className="text-black md:w-4/5 text-xl mt-4">
            <p>BarterLev is a pioneering platform dedicated to facilitating global bartering exchanges, connecting individuals worldwide to engage in a modern-day bartering movement. Founded on the principles of sustainability and community building, BarterLev has emerged as a beacon for those seeking to exchange goods, services, and experiences while fostering cultural understanding and environmental consciousness.</p>
            <br />
            <p>With roots dating back to its inception, BarterLev has evolved into a vast network spanning numerous countries, offering participants the opportunity to immerse themselves in diverse cultures, learn new skills, and form lasting connections.</p>
            <br />
            <p>Whether you are a seasoned barterer or new to the practice, BarterLev provides a platform for individuals to trade, learn, and grow together. As a member of the BarterLev community, you will have the chance to engage in reciprocal exchanges, contribute to sustainable practices, and broaden your horizons in ways that transcend traditional transactions.</p>
            <br />
            <p>Join us on this journey of exchange, exploration, and empowerment with BarterLev.</p>
          </div>
        </div>
        <div className="w-full max-md:hidden">
          <Image src='/heart.png'
            width={300}
            height={300}
            alt="heart image" />
        </div>
      </div>
      <Separator className="w-4/5	m-auto mb-4" />
      <div className="mt-4 font-single p-10">
        <h4 className="text-center text-4xl text-rose-400 tracking-wider">Connect with BarterLev Buddies</h4>
      </div>
      <Separator className="m-auto mb-4" />

    </>
  );
}