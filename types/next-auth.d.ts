import NextAuth from "next-auth"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            receive: string
            give: string
            country: string
            id: string
            image: string
            personal_info: string
            city: string
            birth_year: string
            has_first_time: boolean
        }
    }
}