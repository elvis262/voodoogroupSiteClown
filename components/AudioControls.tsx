"use client"
import React from "react"

export default function AudioControls() {

  return (
    <div className="absolute text-[12px] text-[#ffffff57] bottom-[15%] left-1/2 md:bottom-8 md:w-9/12 -translate-x-1/2 flex justify-between items-center align-middle w-[90%]">
      <button className="px-4 py-2 flex items-center gap-2">
        COUPER LE SON
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
      </button>
      <button className="px-4 py-2 flex items-center gap-2">
        ACTIVER LE SON         
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
      </button>
  </div>
  )
}
