import Navbar from '@/components/Navbar/navbar'
import HeroBackground from '@/components/Hero/heroBackground'
import Footer from '@/components/footer'
import getMovies from '@/utils/get-movies'
import { Movies } from "@/types/index"
// console.log(process.env.TMDB_API_KEY)


export default async function Home() {
  const moviesData: Promise<Movies> = getMovies()
  const { results: movies } = await moviesData

  const bannerMovie = movies[Math.floor(Math.random() * movies.length)];



  return (
    <> 
      {/* <Navbar /> */}
        <main>
          <HeroBackground movie={bannerMovie}  />


      

        

        </main>
      <Footer />
    </>
  )
}
