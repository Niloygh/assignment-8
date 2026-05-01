import { sunglassesData } from "@/lib/fetchData";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import SunglassCard from "../SunglassCard";



const Banner = async () => {

  const sunglasses = await sunglassesData()
  console.log(sunglasses)

  return (
    <div className="my-10">
      <div className="">
        <Image src={'/banner.jpg'} width={500} height={500} alt="banner image" className="w-full h-130  " />
      </div>
      {/* Overlay */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {
          sunglasses.slice(0, 3).map(sunglass => <SunglassCard key={sunglass.id} sunglass={sunglass} />)
        }

      </div>

      <div className="flex justify-center mt-10">
        <Link href={'/products'}>
          <Button variant="outline" >All Produce</Button>
        </Link>
      </div>



    </div>
  );
};

export default Banner;