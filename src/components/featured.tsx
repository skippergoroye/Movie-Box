import { BarChartBig, ChevronRight } from "lucide-react";
import { Suspense } from "react";
import Container from "./Ui/container";
import MovieCard from "./Ui/card";
import Loading from "./Ui/loading";
import { Movies } from "@/types/index";
import getMovies from "@/libs/get-movies";
import Link from "next/link";

export default async function FeaturedMovies() {
  const moviesData: Promise<Movies> = getMovies();
  const { results: movies } = await moviesData;
  // console.log(movies);



  return (
    <section className="py-10">
      <Container>
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-black md:text-3xl text-xl flex items-center gap-2">
            <BarChartBig className="w-6 h-6 text-rose-700" /> Featured Movies
          </h3>
          <Link href="/movies" className="text-rose-700 flex items-center gap-2 text-sm font-bold">
            See More <ChevronRight className="w-4 h-4 text-rose-700" />
          </Link>
        </div>


        <div>
          {
            <Suspense fallback={<Loading />}>
              {/* <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0">not res */} 
              {/* <div className="mt-8 grid grid-cols-gallery"> not res */}
              <div className="mt-8 place-items-center items-start justify-start gap-x-2 gap-y-5 sm:gap-y-10 grid max-sm:grid-cols-2 max-md:grid-cols-3 md:grid-cols-4">
                {movies.map((movie) => (
                  <MovieCard key={movie.id} {...movie} /> // {...movie} spread operator
                ))}
              </div>
            </Suspense>
          }
        </div>
      </Container>
    </section>
  );
}
