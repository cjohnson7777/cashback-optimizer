import { SignOutButton } from "@/components/sign-out";
import { auth } from "../../lib/auth";
import { headers } from "next/headers";

export default async function HomePage() {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    if(!session) {
        return (
            <div>
                unauthorized
            </div>
        )
    }

    return (
        <div>
            <SignOutButton />
            <pre>
                {JSON.stringify(session, null, 2)}
            </pre>
            
        </div>
    )
}