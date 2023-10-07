import Image from 'next/image'
import Navbar from '@/components/Navbar/navbar'
import HeroBackground from '@/components/Hero/heroBackground'
import Footer from '@/components/footer'


export default function Home() {
  return (
    <> 
      <Navbar />
      <main>
        <HeroBackground />
      </main>
      <Footer />
    </>
  )
}
