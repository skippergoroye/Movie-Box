import React from "react";
import Container from "@/components/Ui/container";
import Image from "next/image";
import Link from "next/link";
import PlayIcon from "../../../public/images/Play-Icon.svg";

interface BannerProps {
  id: number;
  title: string;
  overview: string;
}


/* absolute inset-0 flex flex-col items-start justify-center*/

export default function BannerDetails({ id, title, overview }: BannerProps) {
  return (
    <Container>

      <div className="absolute top-[40%] md:top-1/2 -translate-y-1/2"> 
        <h1 className="text-4xl md:text-5xl font-bold text-left h-auto text-white">
          {title}
        </h1>
        <p className="font-medium text-white max-md:text-sm max-w-[300px] md:max-w-[500px] mt-2">
          {overview.slice(0, 200)}
        </p>
        <div className="flex items-center gap-5 text-white mt-4">
          <span className="flex item-center gap-2">
            <Image src="/images/tmdb.svg" alt="IMDb" width={35} height={17} />
            86.0/100
          </span>
          <span className="flex items-center gap-2">
            <Image
              src="/images/fresh-tomatoes.svg"
              alt="fresh tomates"
              width={17}
              height={17}
            />
            97%
          </span>
        </div>

        <div className="max-w-[150px] mt-4">
          <Link
            href="/"
            className="bg-rose-700 hover:opacity-90 px-2 py-2 rounded-md flex items-center gap-2 text-white"
          >
            <Image src={PlayIcon} alt="player icon" />
            Watch trailer
          </Link>
        </div>
      </div>
    </Container>
  );
}
