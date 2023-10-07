import LogoTv from '../../../public/logotv.png';
import Image from 'next/image';
import SearchInput from './searchInput';
import { FiSearch } from "react-icons/fi";
import Menu from "../../../public/Menu.png"

export default function Navbar() {
  return (
    <section className='py-3 sm:px-16 px-8 bg-blue-500'>
      <div className='container mx-auto flex flex-row justify-between items-center p'>
        <div className='flex items-center gap-3'>
            <Image src={LogoTv} alt="logo menu" width={30} height={30} />
            <span className='text-black font-bold text-base'>MovieBox</span>
        </div>

        <div>
          <SearchInput />
        </div>


        <div className='flex items-center justify-center gap-5'>
          <h1 className='text-white text-base font-bold'>Sign In</h1>
          <Image src={Menu} alt="menu icons" />
        </div>
      </div>
    </section>
  )
}
