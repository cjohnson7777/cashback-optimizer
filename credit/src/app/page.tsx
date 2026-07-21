import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { mockStoreItems } from "@/lib/fake-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {
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
      
      <section className="p-32">
        <h2 className="text-4xl font-medium">Shop</h2>
        <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[12rem] sm:max-w-sm md:max-w-full"
    >
      <CarouselContent>
        {mockStoreItems.map((item) => (
          <CarouselItem key={item.id} className="basis-1/2 lg:basis-1/3">
            <div className="p-4">
                <CarouselContent className="p-4">
                  <div >
                    <img src={item.imageUrl}/>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
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
     
    </div>
  );
}
