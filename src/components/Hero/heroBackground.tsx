import React from "react";
import { MoviesResult } from "@/types/index";
import Image from "next/image";

export default function heroBackground({ movie }: { movie: MoviesResult }) {
 

  return (
    <section className="relative">
      <div>
        <Image
           className="h-[650px] w-full -z-[1] object-cover"
           width={80}
           height={60}
           alt={movie?.title!!}
           loading="lazy"
           src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        />
      </div>
    </section>
  );
}
