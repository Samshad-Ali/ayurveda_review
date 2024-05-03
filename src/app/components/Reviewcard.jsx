import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Signlereview from "./Signlereview";
import { MdThumbUp,MdThumbDown } from "react-icons/md";

const Reviewcard = ({setIsopen}) => {
  return (
    <div className="bg-white text-black/80 p-2 sm:p-4 rounded-md flex flex-col gap-2">
      <span onClick={()=>{setIsopen(false)}} 
      className="cursor-pointer hover:bg-zinc-300 rounded-full p-1 w-fit"
      >
        <IoMdClose size={25} />
      </span>
      <h1 className="text-xl font-bold">Leave a review</h1>
  <Signlereview
  title='Safety'
  desc ='Give review about the safety.'
  stars={[<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>]}
  />
   <Signlereview
  title='Communication'
  desc ='Give review about the communication.'
  stars={[<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaStar color="#888" />]}
  />
  <div className="flex flex-col gap-0">
    <p className="text-lg font-semibold">Would you recommend Trausti?</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <div className="flex gap-8 items-center my-2">
    <div className="flex items-center gap-2">
        <span className="text-xl text-zinc-500"><MdThumbDown/></span>
        <span className="text-sm">No</span>
    </div>
    <div className="flex items-center gap-2">
        <span className="text-xl text-green-600"><MdThumbUp/></span>
        <span className="text-sm">Yes</span>
    </div>
    </div>
    <div>
        <p className="text-lg font-semibold">Praise</p>
        <p>Lorem ipsum dolor sit amet.
        </p>
    </div>
  </div>
    </div>
  );
};

export default Reviewcard;
