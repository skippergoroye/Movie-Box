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
      <div className='absolute inset-0 flex flex-col items-start justify-center'>
        <h1 className='text-white'>{title}</h1>
      </div>
    </Container>
  )
}
