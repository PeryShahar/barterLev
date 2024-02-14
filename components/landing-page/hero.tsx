import { GoogleSignInButton } from "../authButtons"

const Hero = () => {
    return (
        <section className="hero font-single w-full flex flex-col items-center justify-center min-h-screen py-2">
            <div className="hero-overlay"></div>

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
        </section>
    )
}

export default Hero;