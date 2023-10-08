import Image from 'next/image'
import Navbar from '@/components/Navbar/navbar'
import HeroBackground from '@/components/Hero/heroBackground'
import Footer from '@/components/footer'
import fetchImageApi from '@/utils/fetchImageApi';
import { Movies } from '@/types';


export default async function Home() {

  const api_url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';


  const MovieData = await fetchImageApi(api_url)


  console.log(MovieData)



  return (
    <> 
      <Navbar />
      <main>
        <HeroBackground  />
      </main>
      <Footer />
    </>
  )
}
