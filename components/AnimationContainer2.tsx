import Image from 'next/image'
import React from 'react'
import FaithFulImage from './FaithFulImage'

const fake = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
function Faithful() {
  return (
    <div className='absolute md:top-[15%] top-[25%] left-1/2 -translate-x-1/2  md:w-2/3 h-[40%] w-11/12 md:h-2/3 grid md:grid-flow-row md:grid-cols-7 md:grid-cols-auto gap-2 grid-cols-5 grid-flow-dense justify-start items-center'>
        {
           fake.map((x, index) => <FaithFulImage index = {index} width={240} height={110} key={'img'+index} />)
        }
    </div>
  )
}

export default Faithful