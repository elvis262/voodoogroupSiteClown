'use client'
import Image from "next/image"
import { useState } from "react"
import FadeParagraph from "./FadeParagraph"




const messages: Array<string> = [
"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus consequatur sit nesciunt, odit blanditiis officiis alias placeat exercitationem consequuntur amet?",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae sint rem quisquam quibusdam praesentium!",
"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, molestiae.",
"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus animi illum recusandae veniam libero saepe repellat tempora dolorum! Possimus unde molestias quia? Veritatis recusandae itaque deleniti officiis fuga, accusamus cum?",
"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, harum deserunt facilis vitae ipsam recusandae optio, eius magni explicabo dolores voluptates beatae voluptas debitis perferendis.",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, animi eius? Eos, quas accusamus. Neque aperiam cumque dicta soluta quibusdam. Quibusdam, consequatur libero.",
"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque iste vitae impedit, possimus, magnam repellendus consequuntur architecto error odio non, est placeat? Autem aliquid quibusdam officiis laudantium consequuntur."
]

function AnimationContainer() {

    const [enter, setEnter] = useState<boolean>(false)


  return (
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[90%] h-2/5 md:w-[35%] md:h-4/5 md:top-2 lg:translate-y-0">
        <Image 
        src={"/asset/Poupe-Vaticom.png"}
        width = {840}
        height = {993}  
        alt ="Le Pape"
        className = "relative w-full h-[100%] object-contain initialPoupe"
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
            <div className="text-center relative -translate-y-full pointer-events-none text-[#ffffffb6] border border-solid border-red-500">
                
                {
                    messages.map((message, index)=>{
                        return <FadeParagraph index={index} key={index}>
                            {message}
                        </FadeParagraph>
                    })
                }
            </div>
        }

        
    </div>
  )
}

export default AnimationContainer