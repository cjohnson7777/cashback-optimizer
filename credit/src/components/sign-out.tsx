"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";

export const SignOutButton = () => {
    const router = useRouter();

    async function handleClick() {
        await signOut({
            fetchOptions: {
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                },
                onSuccess: () => {
                    router.push("/");
                }
            }
        })
    }

    return(
        <div>
            <Button onClick={handleClick} variant="destructive">Sign Out</Button>
        </div>
    )
} 