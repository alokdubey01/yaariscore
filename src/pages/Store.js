import React from "react";
import { Card } from "../components/Store/Card";
import Cube from "../static/Cube.svg";
import { Corousel } from "../components/Store/Corousel";

export const Store = () => {
  const [activeStatus, setActiveStatus] = React.useState(1);
  return (
    <div className="store">
      <div className="mt-12 z-20 relative">
        <Corousel />

        {/* <div className="text-xs mt-12 mx-auto uppercase ml-4">trending</div>
        <div className="text-lg font-medium mt-2 mx-auto ml-4">
          #Play With Valorant
        </div>

        <div className="sm:hidden relative w-11/12 mx-auto rounded">
          <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-selector"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#A0AEC0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="8 9 12 5 16 9" />
              <polyline points="16 15 12 19 8 15" />
            </svg>
          </div>
        </div>
        <div className="justify-between flex-wrap sm:block rounded">
          <div className="xl:w-full xl:mx-0 pl-5 pr-5 h-12">
            <ul className="flex">
              <li
                onClick={() => setActiveStatus(1)}
                className={
                  activeStatus === 1
                    ? "text-sm text-red-700 flex flex-col justify-between border-red-700 pt-1 rounded-t mr-6 font-normal"
                    : "text-sm text-gray-600 py-1 mr-6 font-normal cursor-pointer hover:text-slate-500"
                }
              >
                <span className="mb-1 cursor-pointer">Top Stream</span>
                {activeStatus === 1 && (
                  <div className="w-full h-0.5 bg-red-700 rounded-t-md" />
                )}
              </li>
              <li
                onClick={() => setActiveStatus(2)}
                className={
                  activeStatus === 2
                    ? "text-sm text-red-700 flex flex-col justify-between border-indigo-700 pt-1 rounded-t mr-6 font-normal"
                    : "text-sm text-gray-600 py-1 mr-6 font-normal cursor-pointer hover:text-slate-500"
                }
              >
                <span className="mb-1 cursor-pointer">Currently Online</span>
                {activeStatus === 2 && (
                  <div className="w-full h-0.5 bg-red-700 rounded-t-md" />
                )}
              </li>
              <li
                onClick={() => setActiveStatus(3)}
                className={
                  activeStatus === 3
                    ? "text-sm text-red-700 flex flex-col justify-between border-red-700 pt-1 rounded-t mr-6 font-normal"
                    : "text-sm text-gray-600 py-1 mr-6 font-normal cursor-pointer hover:text-slate-500"
                }
              >
                <span className="mb-1 cursor-pointer">Verified</span>
                {activeStatus === 3 && (
                  <div className="w-full h-0.5 bg-red-700 rounded-t-md" />
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className={activeStatus === 1 ? "block" : "hidden"}>
          <div className="flex flex-wrap">
            <div className="flex-shrink-0 m-2 w-52 h-52 relative overflow-hidden bg-orange-500 rounded-lg shadow-lg">
              <svg
                className="absolute bottom-0 left-0 mb-8"
                viewBox="0 0 375 283"
                fill="none"
                style={{ transform: "scale(1.5)", opacity: 0.1 }}
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center">
                <div
                  className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                  style={{
                    background: "radial-gradient(black, transparent 60%)",
                    transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                    opacity: 0.2,
                  }}
                ></div>
                <img
                  className="relative w-32 -m-3 -mt-6"
                  src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                  alt=""
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-5">
                // <span className="block opacity-75 -mb-1">Indoor</span>
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    Peace Lily
                  </span>
                  <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-5 py-0.5 leading-none flex items-center cursor-pointer">
                    Play
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 m-2 w-52 h-52 relative overflow-hidden bg-teal-500 rounded-lg shadow-lg">
              <svg
                className="absolute bottom-0 left-0 mb-8"
                viewBox="0 0 375 283"
                fill="none"
                style={{ transform: "scale(1.5)", opacity: 0.1 }}
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center">
                <div
                  className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                  style={{
                    background: "radial-gradient(black, transparent 60%)",
                    transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                    opacity: 0.2,
                  }}
                ></div>
                <img
                  className="relative w-32 -m-3 -mt-6"
                  src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png"
                  alt=""
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-5">
                // <span className="block opacity-75 -mb-1">Outdoor</span>
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">Monstera</span>
                  <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-5 py-0.5 leading-none flex items-center cursor-pointer">
                    Play
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 m-2 w-52 h-52 relative overflow-hidden bg-purple-500 rounded-lg shadow-lg">
              <svg
                className="absolute bottom-0 left-0 mb-8"
                viewBox="0 0 375 283"
                fill="none"
                style={{ transform: "scale(1.5)", opacity: 0.1 }}
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center">
                <div
                  className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                  style={{
                    background: "radial-gradient(black, transparent 60%)",
                    transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                    opacity: 0.2,
                  }}
                ></div>
                <img className="relative w-32 -m-3 -mt-6" src={Cube} alt="" />
              </div>
              <div className="relative text-white px-6 pb-6 mt-5">
                // <span className="block opacity-75 -mb-1">Outdoor</span>
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">Oak Tree</span>
                  <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-5 py-0.5 leading-none flex items-center cursor-pointer">
                    Play
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="md:p-4 mt-12 mx-auto items-center justify-between">
          <Card />
        </div>
      </div>
    </div>
  );
};
