import Link from 'next/link'
import Image from 'next/image'

export default function Logo ({ textcolor }: { textcolor: string}) {

  return (
    <Link href="/" className='flex items-center gap-3'>
      <Image src={"/images/logo.svg"} alt={"logo-svg"} width="100" height="100" className='w-9 h-9'/>
      <span className={`font-bold md:text-2xl ${textcolor}`}>MovieBox</span>
    </Link>
  )
}
