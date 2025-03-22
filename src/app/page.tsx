import Navbar from "@/components/navbar"
import CubeMenu from "@/components/cube-menu"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-rebel-black">
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] pt-20">

          <div className="w-full h-[500px]">
            <CubeMenu />
          </div>
        </div>
      </div>
    </main>
  )
}

