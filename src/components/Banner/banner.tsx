import React from "react";
import Image from "next/image";
import BannerDetails from "@/components/Banner/details";
import { MoviesResult } from "@/types/index";

export default function Banner({ movie }: { movie: MoviesResult }) {
  return (
    <div className="relative">
      <Image
        className="h-[650px] w-full -z-[1] object-cover"
        width={1440}
        height={600}
        alt={movie?.title}
        loading="lazy"
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
      />
      <BannerDetails
        id={movie?.id}
        title={movie?.title}
        overview={movie?.overview}
      />
    </div>
  );
}
