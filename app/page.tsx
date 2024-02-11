
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
import prisma from "@/lib/prisma";


export default async function SignInPage() {
  const session: any = await getServerSession(authConfig);

  if (session) return redirect("/timeline");

  const usersHomeDisplay = await prisma.user.findMany({
    select: { name: true, image: true, country: true },
    take: 3
  });
  console.log('usersHomeDisplay: ', usersHomeDisplay);

  return (
    <>
      <div style={{
        position: 'relative',
        backgroundImage: `url(${backgroundImage.src})`, backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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
      <div className="how-it-works-section mt-2 font-single p-10">
        <h4 className="text-center text-5xl text-rose-400 tracking-wider pt-32">How BarterLev works</h4>
        <section id="how-it-works" className="py-16 text-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-blue-500 text-white p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9 9a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0V9zm0-4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mt-4">Create an Account</h3>
                <p className="text-center mt-2">Sign up for a free account on our platform.</p>
              </div>


              <div className="flex flex-col items-center">
                <div className="rounded-full bg-blue-500 text-white p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M13.414 7.414a2 2 0 0 1 2.828 0l3 3a2 2 0 0 1 0 2.828l-3 3a2 2 0 0 1-2.828 0l-3-3a2 2 0 0 1 0-2.828l3-3zM9 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mt-4">Browse Listings</h3>
                <p className="text-center mt-2">Explore a wide range of listings from users all over the world.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="rounded-full bg-blue-500 text-white p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 10a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mt-4">Make an Exchange</h3>
                <p className="text-center mt-2">Initiate an exchange with another user and negotiate terms.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Separator className="w-4/5	m-auto mb-2" />
      <div className="mt-2 font-single p-10">
        <h4 className="text-center text-4xl text-blue-400 tracking-wider mb-6">Connect with BarterLev Buddies</h4>
        <div className="flex justify-between w-9/12 m-auto max-md:flex-col gap-2">
          {usersHomeDisplay.length > 0 && usersHomeDisplay.map((user) => (
            <div key={user.image} className="flex flex-col text-black items-center">
              <Image className='rounded-full mb-2' src={user.image ?? ''} width={80} height={80} alt="user avatar" />
              <p>{user.name}</p>
              <span>{user.country}</span>
            </div>
          )
          )}
        </div>
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