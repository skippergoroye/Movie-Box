import Sidebar from "./components/sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
    

  return (
    <>
    <Sidebar />
      <div className="pt-4">
        <main className="min-[1250px]:ml-[226px] px-8">{children}</main>
      </div>
    </>
  )
}
