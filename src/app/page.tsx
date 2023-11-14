import Navbar from '@/components/Navbar/navbar'
import HeroBackground from '@/components/Hero/heroBackground'
import Footer from '@/components/footer'
import getMovies from '@/utils/get-movies'


// console.log(process.env.TMDB_API_KEY)


export default async function Home() {
  const moviesData = getMovies()





  console.log()


  return (
    <> 
      <Navbar />
        <main>
          {/* <HeroBackground movie={}  /> */}


      

        

        </main>
      <Footer />
    </>
  )
}
