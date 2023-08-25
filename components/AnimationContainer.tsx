'use client'
import Image from "next/image"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/cn"
import ParagraphShower from "./ParagraphShower"
import { type } from "os"




const messages: Array<string> = [
"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus consequatur sit nesciunt, odit blanditiis officiis alias placeat exercitationem consequuntur amet?",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae sint rem quisquam quibusdam praesentium!",
"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, molestiae.",
"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus animi illum recusandae veniam libero saepe repellat tempora dolorum! Possimus unde molestias quia? Veritatis recusandae itaque deleniti officiis fuga, accusamus cum?",
"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, harum deserunt facilis vitae ipsam recusandae optio, eius magni explicabo dolores voluptates beatae voluptas debitis perferendis.",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, animi eius? Eos, quas accusamus. Neque aperiam cumque dicta soluta quibusdam. Quibusdam, consequatur libero.",
"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque iste vitae impedit, possimus, magnam repellendus consequuntur architecto error odio non, est placeat? Autem aliquid quibusdam officiis laudantium consequuntur."
]

type Props = {
    enter: boolean,
    setEnter (params: boolean) : any
}

function AnimationContainer({enter, setEnter}: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const [size, setSize] = useState<number>(0)
    let conditionnalClass = useMemo<string>(() => `md:-ml-[${size / 2}px]`, [size])
    useEffect(()=>{
        if(ref.current){
            setSize(ref.current.clientHeight)
        }

    }, [])


    const handleResize = useCallback(()=>{
        if(ref.current){
            setSize(ref.current.clientHeight)
        }
    },[ref])
    console.log(conditionnalClass)
  return (
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[90%] h-2/5 md:w-[35%] md:h-4/5 md:top-2 md:translate-y-0 text-center" ref={ref}>
        <Image 
        src={"/asset/Poupe-Vaticom.png"}
        width = {840}
        height = {993}  
        alt ="Le Pape"
        className ={cn("relative w-full h-[100%] object-contain initialPoupe transition-all duration-1000", { "md:-ml-[270px]" : enter})}
        />
        { 
            !enter &&  <>
                <h2 className="welcome absolute bottom-2 left-1/2 -translate-x-1/2 tracking-[2px] w-full px-2 block text-[#ac1316] lg:text-3xl text-center">BIENVENUE AU VATICOM</h2>
                <button className="enter px-5 py-2 mx-auto block mt-2 rounded-full text-[#ffffff57] hover:text-white transition-colors text-[12px] tracking-[2px] font-medium border-2 border-solid border-[#ffffff57] hover:border-white cursor-pointer"
                    onClick={() => setEnter(true)}
                >ENTRER</button>
            </>
        }
    
        {
            enter 
            &&
            <ParagraphShower messages={messages}/>
        }

        
    </div>
  )
}

export default AnimationContainer