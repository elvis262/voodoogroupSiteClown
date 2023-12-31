"use client"
import Image from "next/image"
import Link from "next/link"
import AudioControls from "../components/AudioControls"
import AnimationContainer from "../components/AnimationContainer"
import Faithful from "@/components/AnimationContainer2"
import { useCallback, useState } from "react"
import Zap from "@/components/Zap"


export default function Home() {

  const [enter, setEnter] = useState<boolean>(false)
  const [next, setNext] = useState(0)

  const handleEnter = useCallback((value: boolean) =>{
    setEnter(value)
  }, [])
  const handleNext = useCallback(() =>{

    if(next !== 1 ){
      setNext((value : number) => value + 1)
    }
  }, [])
  const handlePrev = useCallback(() =>{
    console.log('prev')
    if(next > 1) return 
    if(next === 0 ) setEnter(false)
    setNext((value : number) => value  - 1)
    setEnter(false)

  }, [])
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

      {
        next === 0 && <AnimationContainer enter={enter} setEnter={handleEnter}/>
      }

      {
        next === 1 &&  <Faithful/>    
      }

      {
        enter && <Zap setEnter={handleEnter} setNext={handleNext} setPrev={handlePrev}/>
      }



      

      <AudioControls/>
 

    </div>
  )
}
