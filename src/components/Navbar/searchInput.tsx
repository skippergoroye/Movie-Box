import { useState } from "react";
import Search from "../../../public/Search.svg"
import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
    const [textInput, setTextInput] = useState('')


  return (
    <section className="">
        <form className='relative hidden lg:flex'>
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="w-[400px] px-4 py-2 rounded-lg border border-gray-300 placeholder-red-500 placeholder-opacity-75"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <button type="submit" >
            <FiSearch color="#fff" size={20} className='absolute top-[10px] left-[355px] bg-black' />
          </button>
        </form>
    </section>
  );
}
