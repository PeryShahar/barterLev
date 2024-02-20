export type UserSession = {
    id: string;
    email: string | null;
    name: string | null;
    image: string | null;
    give: string | null;
    receive: string | null;
    country: string | null;
    city?: string | null;
    personal_info?: string | null;
}