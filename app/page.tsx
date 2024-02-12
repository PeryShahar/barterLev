
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import {
  CredentialsSignInButton, FacebookSignInButton,
  GoogleSignInButton,
} from "@/components/authButtons";
import { CredentialsForm } from "@/components/credentialsForm";
import { Separator } from "@/components/ui/separator"

import { authConfig } from "@/lib/auth";
import backgroundImage from '@/public/background-login.png'


export default async function SignInPage() {
  const session: any = await getServerSession(authConfig);

  if (session) return redirect("/timeline");

  return (
    <>
      <div style={{
        position: 'relative',
        backgroundImage: `url(${backgroundImage.src})`, backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: 'fixed',
        clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%)"
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
      <div className=" mt-4 font-single p-10 flex items-center max-md:text-center">
        <div>
          <h3 className="text-6xl text-blue-400">What is BarterLev?</h3>
          <div className="text-black md:w-4/5 text-[22px] mt-4">
            <p>BarterLev is a pioneering platform dedicated to facilitating global bartering exchanges, connecting individuals worldwide to engage in a modern-day bartering movement. Founded on the principles of sustainability and community building, BarterLev has emerged as a beacon for those seeking to exchange goods, services, and experiences while fostering cultural understanding and environmental consciousness.</p>
            <br />
            <p>With roots dating back to its inception, BarterLev has evolved into a vast network spanning numerous countries, offering participants the opportunity to immerse themselves in diverse cultures, learn new skills, and form lasting connections.</p>
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
      <div className="how-it-works-section mt-2 font-single p-10 md:bg-cover">
        <h4 className="text-center text-6xl text-rose-400 tracking-wider mt-36">How BarterLev works</h4>
        <section className="py-16 text-black ">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Image className="zoom" src={'/sign-up.png'} width={250} height={250} alt="sign-up" />
                <h3 className="text-xl text-blue-700 font-bold">Create an Account</h3>
                <p className="text-center mt-2 text-lg">Sign up for a free account on our platform.</p>
              </div>


              <div className="flex flex-col items-center">
                <Image className="zoom" src={'/magnifying-glasses.png'} width={250} height={250} alt="magnifying-glasses" />
                <h3 className="text-xl text-blue-700 font-bold">Browse Listings</h3>
                <p className="text-center mt-2 text-lg">Explore a wide range of listings from users all over the world.</p>
              </div>

              <div className="flex flex-col items-center">
                <Image className="zoom" src={'/shaking-hands.png'} width={250} height={250} alt="shaking-hands" />
                <h3 className="text-xl text-blue-700 font-bold">Make an Exchange</h3>
                <p className="text-center mt-2 text-lg">Initiate an exchange with another user and negotiate terms.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="p-10 bg-sky-500 flex flex-col items-center">
        <div className="flex gap-4 font-bold">
          <Link href='/about'>About</Link>
          <Link href='/privacy-policy'>Privacy Policy</Link>
          <Link href='/cookies'>Cookies</Link>
        </div>
        <span className="opacity-50 text-sm mt-2">© 2024 BarterLev Inc.</span>
      </footer>
    </>
  );
}