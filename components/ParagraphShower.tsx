"use client"

import React, { FunctionComponent, useCallback, useState } from 'react'
import FadeParagraph from './FadeParagraph'

type Props = {
    messages : string[]
}


const ParagraphShower : FunctionComponent<Props> = ({messages}) => {
    const [index, setIndex] = useState(0)

    const handleHidden = useCallback(() => {
        setIndex(i => i + 1)
      }, []) 
  return (<div className="text-center absolute bottom-12 left-1/2 -translate-x-1/2 w-full -translate-y-full pointer-events-none text-[#ffffffb6] md:left-full md:bottom-1/2 md:translate-y-1/2">
                
            {
                messages.slice(index, index+1).map((message: string)=> <FadeParagraph onHidden={handleHidden} message={message} last={index === (messages.length - 1)} key={index}/>
                )
            }
        </div>
  )
}

export default ParagraphShower