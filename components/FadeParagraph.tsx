'use client'
import { motion as m, AnimatePresence} from 'framer-motion'
import {useEffect, PropsWithChildren, FunctionComponent, useRef, useState} from 'react'


const variants = {
    visible: {
      opacity: 1,
      transition: {
        delay: .8,
        duration: 2.5,
        ease: 'easeInOut'
      },
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 2.5,
            ease: 'easeInOut'        
        }
    },
}

type Props = PropsWithChildren<{
    message: string,
    last ?: boolean,
    onHidden () : void
}> 


const FadeParagraph: FunctionComponent<Props> = ({message, onHidden , last = false}) => {

    const ref = useRef<HTMLParagraphElement>(null)
    const [visible,setVisible ]= useState(true)
    let timer: any = null
    let timer2: any = null
    
    useEffect(()=>{
       
     if(!last){
        timer =  setTimeout(()=>{
            if(ref){
                setVisible(false)
            }
        }, 6000)

        timer2 = setTimeout(()=>{
            onHidden()
        }, 8500)
    }
        

        return ()=>{
            if(!last){
                clearTimeout(timer)
                clearTimeout(timer2)
            }
        }

    },[])

  return (
    <AnimatePresence>
        {
            visible &&
            <m.p
            initial={{ opacity: 0 }}
            animate="visible"
            exit="hidden"

            variants={variants}

            className='absolute top-0 text-[#ffffff8e]'
            ref={ref}
            >
                {message}
            </m.p>
        }
    </AnimatePresence>
  )
}

export default FadeParagraph