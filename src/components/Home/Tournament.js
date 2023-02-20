import React from "react";
import Cube from "../../static/Cube.svg";
import { FaPlay } from "react-icons/fa";

export const Tournament = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-48">
      <div className="col-span-1">
        <div className="h-80 w-64 bg-slate-400 ml-12 mb-10 rounded-xl"></div>
      </div>
      <div className="col-span-2">
        <div className="text-2xl font-normal uppercase secondary-font">
          create your team and win the tournament <br /> now!
        </div>
        <div className="flex gap-4 mt-4">
          <div className="h-48 w-48 rounded-xl">
            <div className="flex-shrink-0 w-48 h-48 relative overflow-hidden bg-purple-500 rounded-lg">
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
                <img className="relative w-48" src={Cube} alt="" />
              </div>
            </div>
            <div className="flex gap-5 justify-between items-center mx-2">
              <div className="block mt-2">
                <div className="text-sm">Black pink</div>
                <div className="text-xs font-light">
                  lorem ipsum dorem isum ela mujher.
                </div>
              </div>
              <div>
                <FaPlay />
              </div>
            </div>
          </div>
          <div className="h-48 w-48 rounded-xl">
            <div className="flex-shrink-0 w-48 h-48 relative overflow-hidden bg-orange-500 rounded-lg">
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
            </div>
            <div className="flex gap-5 justify-between items-center mx-2">
              <div className="block mt-2">
                <div className="text-sm">Black pink</div>
                <div className="text-xs font-light">
                  lorem ipsum dorem isum ela mujher.
                </div>
              </div>
              <div>
                <FaPlay />
              </div>
            </div>
          </div>
          <div className="h-48 w-48 rounded-xl">
            <div className="flex-shrink-0 w-48 h-48 relative overflow-hidden bg-teal-500 rounded-lg">
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
            </div>
            <div className="flex gap-5 justify-between items-center mx-2">
              <div className="block mt-2">
                <div className="text-sm">Black pink</div>
                <div className="text-xs font-light">
                  lorem ipsum dorem isum ela mujher.
                </div>
              </div>
              <div>
                <FaPlay />
              </div>
            </div>
          </div>
          <div className="h-48 w-48 rounded-xl">
            <div className="flex-shrink-0 w-48 h-48 relative overflow-hidden bg-sky-500 rounded-lg">
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
            </div>
            <div className="flex gap-5 justify-between items-center mx-2">
              <div className="block mt-2">
                <div className="text-sm">Black pink</div>
                <div className="text-xs font-light">
                  lorem ipsum dorem isum ela mujher.
                </div>
              </div>
              <div>
                <FaPlay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
