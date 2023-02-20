import React from "react";
import man from "../../static/Play Icon.svg";
import game from "../../static/Joystick.svg";
import vr from "../../static/VR.svg";

export const Collections = () => {
  return (
    <div className="w-full mt-36">
      <div className="container grid grid-cols-6 gap-2 md:gap-4 px:2 md:px-6">
        <div className="col-span-3 md:col-span-2">
          <div class="flex flex-col justify-center w-10/12 md:w-8/12 mx-auto h-32">
            <div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border-none bg-gray-300">
              <div class="w-full bg-gray-300 flex flex-col space-y-2 p-3 h-74">
                <div class="flex justify-between mx-auto -mt-16 md:-mt-12">
                  <img className="h-36 w-36" src={game} alt="game" />
                </div>
                <h3 class="font-black text-gray-800 text-xl uppercase .primary-font">
                  invite and play with friends
                </h3>
                <p class="text-gray-800 text-md">
                  When unknown printer took type and scrambled it to make type
                  specimen book centuries.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2">
          <div class="flex flex-col justify-center w-10/12 md:w-8/12 mx-auto h-32">
            <div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border-none bg-gray-300">
              <div class="w-full bg-gray-300 flex flex-col space-y-2 p-3 h-74">
                <div class="flex justify-between mx-auto -mt-24 md:-mt-20">
                  <img
                    className="h-44 w-44 rotate-12 scale-110"
                    src={vr}
                    alt="game"
                  />
                </div>
                <h3 class="font-black text-gray-800 text-xl uppercase .primary-font">
                  invite and play with friends
                </h3>
                <p class="text-gray-800 text-md">
                  When unknown printer took type and scrambled it to make type
                  specimen book centuries.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-2 mt-48 md:mt-0">
          <div class="flex flex-col justify-center w-10/12 md:w-8/12 mx-auto h-32">
            <div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border-none bg-gray-300">
              <div class="w-full bg-gray-300 flex flex-col space-y-2 p-3 h-74">
                <div class="flex justify-between mx-auto -mt-12">
                  <img className="h-32 w-32 mb-3" src={man} alt="game" />
                </div>
                <h3 class="font-black text-gray-800 text-xl uppercase .primary-font">
                  invite and play with friends
                </h3>
                <p class="text-gray-800 text-md">
                  When unknown printer took type and scrambled it to make type
                  specimen book centuries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
