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
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
