import Navbar from '@/components/Navbar/navbar'
import Banner from '@/components/Banner/banner'
import FeatureMovies from "@/components/featured"
import Footer from '@/components/footer'
import getMovies from '@/libs/get-movies'
import { Movies } from "@/types/index"
// console.log(process.env.TMDB_API_KEY)


export default async function Home() {
  const moviesData: Promise<Movies> = getMovies()

  // const data = (await moviesData).results
  // console.log(data)

  const { results: movies } = await moviesData // destructiong results from the array by Alternating the value Values
  const bannerMovie = movies[Math.floor(Math.random() * movies.length)];



  return (
    <> 
      <Navbar />
        <main>
          <Banner movie={bannerMovie}  />
          <FeatureMovies />
        </main>
      <Footer />
    </>
  )
}
