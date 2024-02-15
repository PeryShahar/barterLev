
import Link from "next/link";

const links = [
    { href: '/about', label: 'About' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/cookies', label: 'Cookies' },
]

const Footer = () => {
    return (
        <footer className="p-10 bg-sky-500 flex flex-col items-center">
            <div className="flex gap-4 font-bold">
                {links.map(link => (
                    <Link key={link.href} href={link.href}>{link.label}</Link>
                ))}
            </div>
            <span className="opacity-50 text-sm mt-2">© 2024 BarterLev Inc.</span>
        </footer>
    )
}

export default Footer;