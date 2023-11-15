import React from 'react'
import Container from '@/components/Ui/container'


interface BannerProps {
  id: number;
  title: string;
  overview: string;
}



export default function BannerDetails ({ id, title, overview}: BannerProps) {


    
  return (
    <Container>
      <div className='absolute top-[40%] md:top-1/2 -translate-y-1/2'>
        <h1 className='text-white'>{title}</h1>
      </div>
    </Container>
  )
}
