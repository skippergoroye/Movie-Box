import { footerImageData } from "@/constants"
import Image from "next/image"
import Link from "next/link";



export default function footer() {
  const currentYear = new Date().getFullYear();


  return (
     <section className="sm:py-24 py-12 sm:px-16 px-8 border-t-[1px]">
       <div className="container mx-auto flex flex-col items-center justify-center gap-6">
        <div className="flex gap-10">
          {footerImageData.map((ImgData) => (
            <Image key={ImgData.id} src={ImgData.imgSrc} alt={ImgData.alt} width={30} height={30} />
          ))}
        </div>

        <div>
          <ul className="flex fle-row items-center justify-center gap-2 md:gap-6 max-md:flex-col text-lg font-bold text-regal-blue">
            <li className="hover:underline hover:cursor-default">
              Conditions of Use
            </li>
            <li className="hover:underline hover:cursor-default">
              Privacy & Policy
            </li>
            <li className="hover:underline hover:cursor-default">
              Press Room
            </li>
          </ul>
        </div>

        <div className="gap-2">
          <p className="text-sm text-[#6B7280]">&copy; {currentYear} MovieBox by Adriana Eka Prayudha</p>
          <p className="text-xs text-rose-700 text-center">Built by <Link href="/" className="italic underline">Oluwatosin Adegoroye</Link></p>
        </div>
       </div>
     </section>
  )
}
