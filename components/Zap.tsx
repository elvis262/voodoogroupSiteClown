import { motion as m, AnimatePresence} from 'framer-motion'
import React, { memo } from 'react'


const variants = {
    visible: {
      opacity: 1,
      transition: {
        delay: 2.5,
        duration: 1,
        ease: 'easeInOut'
      },
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 1,
            ease: 'easeInOut'        
        }
    },
}

type Props = {
    setEnter (value: boolean) : any
    setNext () : any
    setPrev () : any
}

function Zap({setEnter, setNext, setPrev}: Props) {
  return ( <AnimatePresence>
        <m.div 
            initial= {{opacity: 0}}
            animate = "visible"
            exit="hidden"
            variants={variants}
            className='flex justify-between items-center align-middle absolute bottom-1/4 w-1/2 left-1/2 -translate-x-1/2 text-[12px] text-[#ffffffa3] md:w-1/5 md:bottom-[15%]'
            >
            <m.button
                initial={{x:'-40px'}}
                animate={{x:0}}
                transition={{
                    duration: .6,
                    delay: 2.5,
                    
                }} 
            onClick={() => setPrev()}
            className='flex items-center'>            
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                ACCEUIL
            </m.button>
            <m.button
                initial={{x:'40px'}}
                animate={{x:0}}
                transition={{
                    duration: .6,
                    delay: 2.5,
                    ease: 'easeInOut'
                }} 
            onClick={() => setNext()}
            className='flex items-center'>
                FIDELES  
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </m.button>
        </m.div>
    </AnimatePresence>
  )
}

export default memo(Zap) 