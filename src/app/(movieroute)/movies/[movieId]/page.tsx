import type { Metadata } from 'next'
import { Video, Movies } from '@/types'
import getVideo from "@/libs/get-video"
import VideoPlayer from '../components/videoPlayer'
import getMovie from '@/libs/get-movie'




// export default async function Layout({ params: { id }}: {params: { id: string }}) {
// }

type Params = {
  params: {
    movieId: number;
  };
};



 export async function generateMetadata({params: { movieId }}: Params): Promise<Metadata>{
  const movieData = await getMovie(movieId)

  console.log(movieData)

  return {
    title: movieData.title || movieData.name,
  }
}




export default async function MoviesDetails ({params: { movieId }}: Params) {
  const movieVideos: Promise<Video> = getVideo(movieId)

  const [videos ] = await Promise.all([
    movieVideos
  ]);


  const filteredVideos: Video[] = []
  videos.results.forEach((trailer: Video) => {
    if(trailer.type === "Trailer") {
      filteredVideos.push(trailer)
    }
  })


  const randomTrailer = filteredVideos[Math.floor(Math.random() * filteredVideos.length)]

  
  return (
    <main>
      <div className="flex flex-col items-start justify-start">
        <VideoPlayer trailer={randomTrailer} />
      </div>
  </main>
  )
}
