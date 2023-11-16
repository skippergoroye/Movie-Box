import React from 'react'
import { Suspense } from "react";
import Container from './Ui/container'
import MovieCard from "./Ui/card"
import Loading from './Ui/loading';
import { Movies } from "@/types/index"
import getMovies from '@/libs/get-movies';
import Link from 'next/link';

export default async function FeaturedMovies () {

  const moviesData: Promise<Movies> = getMovies()
  const { results: movies } = await moviesData;



  return (
    <section className='py-10'>
      <Container>
         <div className='flex items-center justify-between'>
           <h3 className='font-bold text-black md:text-3xl text-xl'>Featured Movies</h3>
           <Link href="/" className='text-rose-700'>
             See more
           </Link>
         </div>

         <div>
           {
            <Suspense fallback={<Loading />}>
              <div>
                {movies.map((movie) => (
                  <MovieCard key={movie.id} {...movie} />  // {...movie} spread operator
                ))}
              </div>
            </Suspense>
           }
         </div>
      </Container>
    </section>
  )
}
