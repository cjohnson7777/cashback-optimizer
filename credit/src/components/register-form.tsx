"use client"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import React from "react"
import { toast } from "sonner"

export default function RegisterForm() {
    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement);

        const name = String(formData.get("name"));
        if (!name) return toast.error("Enter name");
        
        const email = String(formData.get("email"));
        if (!email) return toast.error("Enter email");

        const password = String(formData.get("password"));
        if (!password) return toast.error("Enter password");

        console.log({ name, email, password });


        
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-sm">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name"/>

                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email"/>

                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password"/>

                <Button type="submit">Register</Button>

            </form>
        </div>
    )
}