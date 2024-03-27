import BackButton from "@/components/generic/back"

export default function LandingPageLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section className="m-8 p-4 flex flex-col gap-4 text-black border-rose-400 border-2 rounded-lg shadow-2xl">
            {children}
            <div className="m-auto mt-6"><BackButton path={'/'} /></div>
        </section>
    )
}