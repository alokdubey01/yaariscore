import React from "react";
import { RiGamepadFill } from "react-icons/ri";
import { BsHeartFill, BsFillPlayFill } from "react-icons/bs";
import { RiGameFill } from "react-icons/ri";
import { AiTwotoneEdit } from "react-icons/ai";
import "./Container.css"

export const Container = () => {
  return (
    <div>
      {/* <div className="grid grid-cols-6 gap-4 mt-16 p-12">
        <div className="col-span-2">
          <div className="flex gap-2">
            <div className="w-white shadow-md border border-gray-100 rounded-full p-3 items-center">
              <BsHeartFill className="text-red-500"/>
            </div>
            <div className="w-white shadow-md border border-gray-100 rounded-full p-3 items-center">
              <RiGamepadFill className="text-sky-500"/>
            </div>
            <div className="w-white shadow-md border border-gray-100 rounded-full p-3 items-center">
              <RiGameFill className="text-yellow-500"/>
            </div>
            <div className="w-white shadow-md border border-gray-100 rounded-full p-3 items-center">
              <BsFillPlayFill className="text-green-500"/>
            </div>
            <div className="w-white shadow-md border border-gray-100 rounded-full p-3 items-center">
              <AiTwotoneEdit className="text-sky-500"/>
            </div>
            <div className="w-white shadow-md border border-gray-100 rounded-full p-3 items-center">
              <AiTwotoneEdit className="text-sky-500"/>
            </div>
          </div>
          <div className="mt-12 shadow-sm rounded-xl bg-gray-50 w-full p-4">
        <div className="card">
          <div className="card-header mx-4 -mt-12">
            <a
              href="https://www.material-tailwind.com"
              blur-shadow-image="true"
            >
              <img
                className="w-auto rounded-lg"
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="tailwind-card"
              />
            </a>
          </div>
          <div className="card-body">
            <a href="#">
              <h4 className="font-semibold">Material Design 3</h4>
            </a>
            <p className="opcacity-60 mb-4">
              The time is now for it to be okay to be great. People in this
              world shun people for being great. For being a bright color. For
              standing out.
            </p>
            <button className="button button-pink" data-ripple-light="true">
              Read More
            </button>
          </div>
        </div>
          </div>
        </div>
        <div className="col-span-2">
          
        </div>
        <div className="col-span-2">
          
        </div>
      </div> */}
      <div className="grids mt-48">
	<div className="content item1">
		<h1 className="text-5xl w-7/12 text-white font-bold mb-4">Why Choose yaariscore</h1>
		<p>By animating a few CSS paint & composite properties, we can create fun interactions on hover & focus</p> 
	</div>
	<div className="card-content item2">
		<h2>Hover the cards</h2>
	</div>
	<div className="card-content item3"></div>
	<div className="card-content item4"></div>
	<div className="card-content item5">
			<h2>because interactions make it more fun</h2>
	</div>
	<div className="card-content item7"></div>
	<div className="card-content item8">
			<h2>animating the shadow on the pseudo element makes it pop out</h2>
	</div>
	<div className="card-content item9"></div>
	<div className="card-content item10"></div>
	<div className="card-content item11">
		<h2>add a :focus state too!</h2>
	</div>
</div>
    </div>
  );
};