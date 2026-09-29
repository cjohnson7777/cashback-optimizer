import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { PrismaClient } from "@/generated/prisma";
import Image from "next/image";


export default async function Home() {
  const prisma = new PrismaClient()

  const cards = await prisma.creditCard.findMany()
  const travelCards = await prisma.creditCard.findMany({
    
  })

  return (
    <div className="flex flex-col font-sans dark:bg-black">
      <section>
        <div className="flex justify-between items-center p-4">
          <span className="pl-8">credit-optimizer</span>
          <div>
            <Button variant="outline">
              <Link href="auth/login">Login</Link>
            </Button>
            <Button>
              <Link href="/auth/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="w-1/2 flex flex-col px-32 py-16 gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl font-medium">Maximize your dollar.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium iusto alias fuga animi sint perspiciatis, nesciunt magnam tempore voluptas. Minima!</p>
        </div>
        <Input className=""/>
      </section>
      
      <section className="p-20">
        <h2 className="text-4xl font-medium">All Cards</h2>
    <Carousel
      opts={{
      align: "start",
      }}
      className="w-full max-w-[12rem] sm:max-w-sm md:max-w-full">
      <CarouselContent>
        {cards.map((card) => (
          <CarouselItem key={card.id} className="p-6 basis-1/2 lg:basis-1/3">
            <div className="p-4">
              <CarouselContent className="p-4">
                <div className="">
                  <Image className="mb-6" src={`/${card.imageUrl}`} alt={card.name} width={500} height={10}/>
                  <p>{card.issuer}</p>
                  <p>{card.name}</p>
                </div>
              </CarouselContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
  </Carousel>
      </section>
      <section className="p-20">
        <h2 className="text-4xl font-medium">Travel Cards</h2>
        
      </section>
      <section className="p-20">
        <h2 className="text-4xl font-medium">Grocery Cards</h2>
        
      </section>
     
     
    </div>
  );
}
