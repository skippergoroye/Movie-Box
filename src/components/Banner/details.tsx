import React from "react";
import Container from "@/components/Ui/container";
import Image from "next/image";

interface BannerProps {
  id: number;
  title: string;
  overview: string;

  
}



export default function BannerDetails({ id, title, overview }: BannerProps) {

  return (
    <Container>
      <div className="absolute top-[40%] md:top-1/2 -translate-y-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-left h-auto text-white">
          {title}
        </h1>
        <p className="font-medium text-white max-md:text-sm max-w-[300px] md:max-w-[500px]">
          {overview.slice(0, 200)}

          
        </p>
        <div className="flex items-center gap-5 text-white my-2">
          <span className="flex item-center gap-2"> 
            <Image src="/images/tmdb.svg" alt="IMDb" width={35} height={17} />
            86.0/100
          </span>
          <span className="flex items-center gap-2"> 
            <Image src="/images/fresh-tomatoes.svg" alt="fresh tomates" width={17} height={17} />
            97%
          </span>
        </div>
      </div>
    </Container>
  );
}
