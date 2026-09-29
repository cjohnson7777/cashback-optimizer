import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const creditCards = await prisma.creditCard.findMany()

    return NextResponse.json(creditCards)
}