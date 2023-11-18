import Sidebar from "./components/sidebar"


export default function MoviesLayout({ children }: { children: React.ReactNode}) {
    


  return (
    <>
     <Sidebar />
      <div className="flex justify-center pt-4">
        <main>{children}</main>
      </div>
    </>
  )
}
