import { useAnimate, stagger  } from "framer-motion"
import Image from "next/image"
import React, { useEffect } from "react"


Image
type Props = {
  index: number,
  alt?: string,
  height: number,
  width: number
}

const FaithFulImage = ({index, alt = "", width, height}: Props) => {
  const [scope, animate] = useAnimate()

  useEffect(()=>{
    animate(scope.current, {
      opacity: [0, 1],
      transform: [
        "perspective(300px) rotateY(-55deg)",
        "perspective(300px) rotateY(55deg)",
        "perspective(300px) rotateY(0deg)"
      ]
    },
    {
      delay: .130*(index -1),
      ease: 'easeInOut'
    }
    )
  },[])
  

  return (
    <Image ref={scope} src={`/asset/img-${index + 1}.png`} width={width} height={height} alt={alt} className="object-contain md:h-14 h-8 justify-self-center inline-block"/>
  )
}
export default FaithFulImage
