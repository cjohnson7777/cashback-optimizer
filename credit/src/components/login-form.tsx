"use client"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import React from "react"
import { toast } from "sonner"
import { signIn } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

export default function LoginForm() {
    const router = useRouter();

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement);
        
        const email = String(formData.get("email"));
        if (!email) return toast.error("Enter email");

        const password = String(formData.get("password"));
        if (!password) return toast.error("Enter password");

        await signIn.email(
        {
            email,
            password
        },
        {
            onRequest: () => {},
            onResponse: () => {},
            onError: (e) => {
                toast.error(e.error.message);
            },
            onSuccess: () => {
                router.push("/dashboard")
            }
        }
        
    )
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-sm">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email"/>

                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password"/>

                <Button type="submit">Login</Button>

            </form>
        </div>
    )
}