import Logo from "@/components/Navbar/logo"
import { Home, Clapperboard, Tv, Calendar, } from "lucide-react"

const sideLinks = [
  {
    name: "Home",
    icon: <Home />
  },
  {
    name: "Movies",
    icon: <Clapperboard />
  },
  {
    name: "TV Series",
    icon: <Tv />
  },
  {
    name: "Up Coming",
    icon: <Calendar />
  }
]

export default function Sidebar () {

  
  return (
    <aside className="fixed h-full w-[226px] border border-gray-[#b3b3b3] rounded-tr-[45px] max-[1250px]:hidden overflow-auto no-scrollbar">
      <div className="pt-10 flex flex-col">

        <div className="ml-2">
          <Logo textcolor="text-black" />
        </div>

        <ul className="flex flex-col items-start my-16 gap-6">
          {sideLinks.map((link, index) => (
            <li key={index}>
              <span className={`flex items-start cursor-pointer px-4 py-4 gap-4 text-[#666666] 
              hover:border-r-rose-700 hover:border-r-[6px] hover:bg-rose-100 w-[226px] 
              ${link.name === "Movies" ? "border-r-rose-700 bg-rose-100 border-r-[6px]" : ""}`}>
                <span><Calendar /></span>
                <span>Logout</span>
              </span>
            </li>
          ))}
        </ul>


        <div className="bg-rose-100 border border-rose-600 rounded-xl mx-5 py-6 px-3">
          <h4 className="font-semibold text-[#333333]">
            Play movie quizes and earn free tickets
          </h4>
          <p className="text-[#666666] mt-2 text-sm">50k people are playing now</p>
          <button className="rounded-full bg-rose-200 text-rose-500 border border-transparent px-4 p-2 ml-4 hover:bg-transparent hover:border-red-500 mt-2 item-center flex justify-center">
            Start Playing
          </button>
        </div>


        <ul className="flex flex-col items-start my-16 gap-6">
          <li>
            <span className={`flex items-start cursor-pointer px-4 py-4 gap-4 text-[#666666] 
                hover:border-r-rose-700 hover:border-r-[6px] hover:bg-rose-100 w-[226px]`}>
                  <span><Calendar /></span>
                  <span>Logout</span>
            </span>
          </li>
        </ul>
      </div>
    </aside>
  )
}
