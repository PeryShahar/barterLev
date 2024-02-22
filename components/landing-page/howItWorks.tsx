import Image from "next/image";

const HowItWorks = () => {
    return (
        <div className="how-it-works-section mt-2 font-single p-10 md:bg-cover">
            <h4 className="text-center text-6xl text-rose-400 tracking-wider mt-[20%]">How BarterLev works</h4>
            <section className="py-16 text-black ">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="flex gap-4 max-md:flex-col">
                            <div className="flex flex-col items-center">
                                <Image className="zoom" src={'/assets/images/sign-up.png'} width={250} height={250} alt="sign-up" />
                                <h3 className="text-xl text-blue-700 font-bold">Create an Account</h3>
                                <p className="text-center mt-2 text-lg">Sign up for a free account on our platform.</p>
                            </div>
                            <Image className='max-md:hidden' src={'/assets/images/arrow-right.svg'} width={70} height={70} alt="arrow-right" />
                        </div>

                        <div className="flex mt-24 gap-4 max-md:mt-4 max-md:flex-col">
                            <div className="flex flex-col items-center">
                                <Image className="zoom" src={'/assets/images/magnifying-glasses.png'} width={250} height={250} alt="magnifying-glasses" />
                                <h3 className="text-xl text-blue-700 font-bold">Browse Listings</h3>
                                <p className="text-center mt-2 text-lg">Explore a wide range of listings from users all over the world.</p>
                            </div>
                            <Image className='max-md:hidden' src={'/assets/images/arrow-right.svg'} width={70} height={70} alt="arrow-right" />
                        </div>


                        <div className="flex flex-col items-center mt-48 max-md:mt-4">
                            <Image className="zoom" src={'/assets/images/shaking-hands.png'} width={250} height={250} alt="shaking-hands" />
                            <h3 className="text-xl text-blue-700 font-bold">Make an Exchange</h3>
                            <p className="text-center mt-2 text-lg">Initiate an exchange with another user and negotiate terms.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HowItWorks;