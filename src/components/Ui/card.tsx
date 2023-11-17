import { MoviesResult } from "@/types/index";
import { getGenreNames } from "@/libs/get-genre"
import Image from "next/image";

export default function MovieCard({ id, poster_path, title, release_date, genre_ids }: MoviesResult) {
  const genre = getGenreNames(genre_ids);


  console.log(genre)


  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={title}
        width={250}
        height={370}
      />


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
  );
}
