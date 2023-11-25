import type { Metadata } from 'next'
import { Videos, Video, Movies, MoviesResult, Credits } from '@/types';
import getVideo from "@/libs/get-video"
import getMovie from '@/libs/get-movie'
import VideoPlayer from '../components/videoPlayer'
import MovieDetails from '../components/movieDetails'
import getCredits from '@/libs/get-credits'
import getSimilar from '@/libs/get-similar'




// export default async function Layout({ params: { id }}: {params: { id: string }}) {
// }

type Params = {
  params: {
    movieId: number;
  };
};



 export async function generateMetadata({params: { movieId }}: Params): Promise<Metadata>{
  const movieData = await getMovie(movieId)

  // console.log(movieData)

  return {
    title: movieData.title || movieData.name,
  }
}




export default async function MoviesDetails ({ params: { movieId } }: Params) {
  const movieVideos: Promise<Videos> = getVideo(movieId)
  const movieData: Promise<MoviesResult> = getMovie(movieId)
  const movieCredits: Promise<Credits> = getCredits(movieId)
  const similarMovies: Promise<Movies> = getSimilar(movieId)

  const [videos, movie, credits, similar ] = await Promise.all([
    movieVideos,
    movieData,
    movieCredits,
    similarMovies
  ]);





  const filteredVideos: Video[] = [];
  videos.results.forEach((trailer: Video) => {
    if (trailer.type === "Trailer") {
      filteredVideos.push(trailer);
    }
  });


  const randomTrailer = filteredVideos[Math.floor(Math.random() * filteredVideos.length)]

  
  return (
    <main>
      <div className="flex flex-col items-start justify-start">
        <VideoPlayer trailer={randomTrailer} />
        <MovieDetails credits={credits} similar={similar} movie={movie} />
      </div>
  </main>
  )
}
