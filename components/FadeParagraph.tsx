'use client'
import { motion as m, AnimatePresence} from 'framer-motion'
import {useEffect, PropsWithChildren, FunctionComponent, useRef, useState} from 'react'


const variants = {
    visible: (i: number)=> ({
      opacity: 1,
      transition: {
        delay: (i === 0? 0 : (removeDelay( i - 1) / 1000) + 2*i * 1.2) ,
        duration: 0.6,
        ease: 'easeInOut'
      },
    }),
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: 'easeInOut'        
        }
    },
}

type Props = PropsWithChildren<{
    index : number
}> 

const removeDelay : (index: number) => number = (index : number) => (index *  1.2) * 1000 + 4000


const FadeParagraph: FunctionComponent<Props> = ({index, children}) => {

    const ref = useRef<HTMLParagraphElement>(null)
    const [visible,setVisible ]= useState(true)
    const delay : number = removeDelay(index) + ( index !== 0 ?  removeDelay(index - 1 ) : 0)
    useEffect(()=>{
        const timer: NodeJS.Timeout =  setTimeout(()=>{
            if(ref){
                console.log((index === 0? 0 : (removeDelay( index - 1) / 1000) + index * 1.2), delay)
                setVisible(false)
            }
        }, delay)

        return ()=>{
            clearInterval(timer)
        }

    },[])

  return (
    <AnimatePresence>
        {
            visible &&
            <m.p
            custom={index}
            initial={{ opacity: 0 }}
            animate="visible"
            exit="hidden"

            variants={variants}

            className='absolute top-0 border border-solid border-red-500'
            ref={ref}
            >
                {children}
            </m.p>
        }
    </AnimatePresence>
  )
}

export default FadeParagraph