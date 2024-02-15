import Image from "next/image";
const WhatIs = () => {
    return (
        <section className=" mt-4 font-single p-10 flex items-center max-md:text-center">
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
                <Image
                    src='/assets/images/heart.png'
                    width={300}
                    height={300}
                    alt="heart image" />
            </div>
        </section>
    )
}

export default WhatIs;