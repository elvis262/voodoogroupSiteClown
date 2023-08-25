import Image from "next/image"
import Link from "next/link"
import AudioControls from "../components/AudioControls"
import AnimationContainer from "../components/AnimationContainer"

export default function Home() {
  return (
    <div className="h-screen w-full relative">
      <video autoPlay loop muted playsInline className='relative w-full h-full object-cover' preload="auto | metadata | none">
          <source src={"/asset/Fume.mp4"} type='video/mp4'/>
      </video>

      <div className="absolute top-[10%] md:top-2 px-8 flex justify-between align-middle items-center w-full md:w-2/3 md:left-1/2 md:-translate-x-1/2">
        <Link href="/">
            <Image 
            src={"/asset/Logo-voodoo-Group.png"}
            width = {371}
            height = {405}
            alt = "Logo Voodoogroup"
            className = "w-16 h-16"
            />
        </Link>

        <Link href="#">
          <span className="py-2 px-4 bg-[#5f181a] text-sm text-center">
            ECRIRE AU PAPE
          </span>
        </Link>
      </div>


      <AnimationContainer/>

      

      <AudioControls/>
 

    </div>
  )
}
