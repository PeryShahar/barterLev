import BackButton from "@/components/back"

export default function LandingPageLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section className="m-14 p-4 flex flex-col gap-4 text-black border-rose-400 border-2 rounded-lg shadow-2xl">
            {children}
            <BackButton />
        </section>
    )
}