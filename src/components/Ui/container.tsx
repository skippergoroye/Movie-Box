import React from 'react'

interface ContainerProps {
   children: React.ReactNode;
}


export default function Container({ children }: ContainerProps) {


  return (
    <div className="max-w-[1300px] mx-auto py-0 px-5 md:px-10">{children}</div>
  )
}
