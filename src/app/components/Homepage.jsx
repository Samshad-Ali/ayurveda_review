"use client";
import React, { useState } from 'react'
import Reviewcard from './Reviewcard';
const Homepage = () => {
    const [isOpen,setIsopen] = useState(false);
    const toggleHandler=()=>{
        setIsopen(true)
    }
  return (
    <main className="flex p-2 flex-col gap-4 w-full h-screen justify-center items-center">
    <button 
    onClick={toggleHandler}
    className="bg-green-900 hover:bg-green-800 transition-all px-4 p-2 rounded-sm font-semibold">Click here to see review</button>
    {
        isOpen &&
    <Reviewcard setIsopen={setIsopen}/>
    }
   </main>  )
}

export default Homepage;