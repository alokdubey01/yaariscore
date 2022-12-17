import React from "react";
import { RiGamepadFill } from "react-icons/ri";
import { BsHeartFill, BsFillPlayFill } from "react-icons/bs";
import { RiGameFill } from "react-icons/ri";
import { AiTwotoneEdit } from "react-icons/ai";

export const Container = () => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-4 mt-16 p-12">
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
        <div class="card">
          <div class="card-header mx-4 -mt-12">
            <a
              href="https://www.material-tailwind.com"
              blur-shadow-image="true"
            >
              <img
                class="w-auto rounded-lg"
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="tailwind-card"
              />
            </a>
          </div>
          <div class="card-body">
            <a href="#">
              <h4 class="font-semibold">Material Design 3</h4>
            </a>
            <p class="opcacity-60 mb-4">
              The time is now for it to be okay to be great. People in this
              world shun people for being great. For being a bright color. For
              standing out.
            </p>
            <button class="button button-pink" data-ripple-light="true">
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
      </div>
    </div>
  );
};