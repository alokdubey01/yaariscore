import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate()
  const store = () =>{
    navigate('/store')
  }
  return (
    <div className='bg-white w-full'>
        <div>
        <div className='secondary-font text-5xl w-1/2 text-center mx-auto pt-44 uppercase relative'>
            Playing a game, having a fun
        </div>
        <div className='mt-8 text-sm w-1/2 text-center mx-auto text-gray-500'>
        Atomize React is a UI framework that helps developers collaborate with designers and build consistent user interfaces effortlessly.
        </div>
        <div className="flex items-center mx-auto my-auto w-3/12 justify-between mt-12">
          <div onClick={store} className="capitalize flex items-center bg-[#0284FE] py-2 px-6 cursor-pointer hover:bg-sky-500 text-white rounded-md text-sm w-42">play games</div>
          <div className="capitalize flex items-center border border-gray-300 py-2 px-6 text-sm rounded-md w-42 cursor-pointer hover:bg-gray-100"><BiDownArrowAlt className="mr-1 h-4 w-4"/> dowload</div>
        </div>
        </div>
    </div>
  );
};
