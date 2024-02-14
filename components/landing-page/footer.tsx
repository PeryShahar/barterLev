
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="p-10 bg-sky-500 flex flex-col items-center">
            <div className="flex gap-4 font-bold">
                <Link href='/about'>About</Link>
                <Link href='/privacy-policy'>Privacy Policy</Link>
                <Link href='/cookies'>Cookies</Link>
            </div>
            <span className="opacity-50 text-sm mt-2">© 2024 BarterLev Inc.</span>
        </footer>
    )
}

export default Footer;