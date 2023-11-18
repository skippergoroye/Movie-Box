import { MoviesResult } from "@/types/index";
import { getGenreNames } from "@/libs/get-genre"
import Image from "next/image";
import Link from "next/link";
import { Heart, Mic2 } from "lucide-react";

export default function MovieCard({ id, poster_path, title, release_date, genre_ids,  }: MoviesResult) {
  const genre = getGenreNames(genre_ids);


  return (
    <Link href={`/movies/${id}`}>
      <div className="flex flex-col space-y-2 relative">
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
          width={250}
          height={370}
          className="rounded-tl-xl rounded-tr-xl h-[230px] md:w-[250px] md:h-[370px]"
        />


        {/* 
        {media_type === "tv" && (
          <div className="absolute text-gray-300 py-1 px-3 rounded-full top-3 left-2 glassmorphism">
            <span className="text-xs md:text-sm">TV Series</span>
          </div>
        )}*/}


        <div className="absolute text-gray-300 rounded-full p-2 top-[13px] right-3 glassmorphism">
          <Heart className="w-4 h-4" />
        </div>

        <div className="max-w-[150px] md:max-w-[250px]">
          <span className="text-xs text-gray-400">
            USA, <span>{new Date(release_date).getFullYear()}</span>
          </span>

          <h4 className="text-gray-900 font-bold text-base md:text-xl">{title || "NA"}</h4>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 md:gap-2 max-md:text-xs font-semibold">
              <Image src="/images/tmdb.svg" alt="IMDB" width="35" height={17} /> 84.0 / 100
            </span>
            <span className="flex items-center gap-1 md:gap-2  max-md:text-xs font-semibold">
              <Image src="/images/fresh-tomatoes.svg" alt="fresh tomates" width="16" height={17} /> 75%
            </span>
          </div>

          <span className="text-xs font-medium text-gray-400">
            {genre.join(", ")}
          </span>
        </div>
      </div>
    </Link>
  );
}
