import Navbar from '@/components/Navbar/navbar'
import Banner from '@/components/Banner/banner'
import Footer from '@/components/footer'
import getMovies from '@/libs/get-movies'
import { Movies } from "@/types/index"
// console.log(process.env.TMDB_API_KEY)


export default async function Home() {
  const moviesData: Promise<Movies> = getMovies()
  const { results: movies } = await moviesData

  const bannerMovie = movies[Math.floor(Math.random() * movies.length)];
  // console.log(bannerMovie)




  return (
    <> 
      {/* <Navbar /> */}
        <main>
          <Banner movie={bannerMovie}  />


        </main>
      <Footer />
    </>
  )
}
