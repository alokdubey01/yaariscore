import React from "react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GiFlowerEmblem } from "react-icons/gi";
import img from '../static/wepik.png'

export const Share = () => {
  return (
    <div className="mt-6 lg:container lg:mx-auto lg:py-6 md:py-12 md:px-6 py-2 px-4">
      <div className="flex">
        <div className="bg-[#b8c410] h-auto w-9/12 pt-16 pl-16 pb-6 rounded-tl-xl rounded-bl-xl">
          <div className="text-3xl w-72 text-slate-700 font-semibold leading-10">
            The best kind of friendship is playing together!
          </div>
          <div className="text-sm text-slate-600 w-7/12 font-normal mt-4">
            We are excited to announce that our new game is now available and we
            would love for you to come join us! Our game is a great way to have
            fun with friends, so why not invite them to come along too?
          </div>
          <div className="flex mt-8 -ml-4">
            <div className="flex items-center border bg-slate-800 rounded-full px-4 py-2 w-42 mx-2">
              <div className="text-left">
                <p className="text-xs text-white md:text-base">
                  Join the Refferal program
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-900 h-auto w-3/12 rounded-tr-xl rounde-br-xl">
          <div className="py-12 px-4 absolute -ml-24 z-50">
            <div className="lg:max-w-[226px] md:max-w-[516px] max-w-[343px] mx-auto">
              <div className="mx-auto bg-white px-3 py-4 rounded">
                <div>
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Group%20813077.png"
                    className="mx-auto"
                    alt="something"
                  />
                </div>
                <div className="lg:block hidden">
                  <div className="flex justify-between items-center gap-x-4 px-8 -ml-6">
                    <div aria-label="one">
                      <div className="flex gap-2 items-center">
                        <svg
                          width={20}
                          height={8}
                          viewBox="0 0 20 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={20} height={8} rx={4} fill="#EF4444" />
                        </svg>
                        <p className="text-xs font-medium leading-3 text-gray-800">
                          Poor
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <svg
                          width={20}
                          height={8}
                          viewBox="0 0 20 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={20} height={8} rx={4} fill="#FACC15" />
                        </svg>
                        <p className="text-xs font-medium leading-3 text-gray-800">
                          Fair
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <svg
                          width={20}
                          height={8}
                          viewBox="0 0 20 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={20} height={8} rx={4} fill="#BEF264" />
                        </svg>
                        <p className="text-xs font-medium leading-3 text-gray-800">
                          Satisfactory
                        </p>
                      </div>
                    </div>
                    <div aria-label="two">
                      <div className="flex items-center gap-2">
                        <svg
                          width={20}
                          height={8}
                          viewBox="0 0 20 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={20} height={8} rx={4} fill="#14B8A6" />
                        </svg>
                        <p className="text-xs font-medium leading-3 text-gray-800">
                          Good
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <svg
                          width={20}
                          height={8}
                          viewBox="0 0 20 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={20} height={8} rx={4} fill="#22C55E" />
                        </svg>
                        <p className="text-xs font-medium leading-3 text-gray-800">
                          Better
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <svg
                          width={20}
                          height={8}
                          viewBox="0 0 20 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={20} height={8} rx={4} fill="#15803D" />
                        </svg>
                        <p className="text-xs font-medium leading-3 text-gray-800">
                          Exceptional
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:hidden block">
                  <div className="flex flex-wrap justify-between gap-3 items-center px-8">
                    <div className="flex gap-2 items-center">
                      <svg
                        width={20}
                        height={8}
                        viewBox="0 0 20 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={20} height={8} rx={4} fill="#EF4444" />
                      </svg>
                      <p className="text-xs font-medium leading-3 text-gray-800">
                        Poor
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <svg
                        width={20}
                        height={8}
                        viewBox="0 0 20 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={20} height={8} rx={4} fill="#FACC15" />
                      </svg>
                      <p className="text-xs font-medium leading-3 text-gray-800">
                        Fair
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <svg
                        width={20}
                        height={8}
                        viewBox="0 0 20 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={20} height={8} rx={4} fill="#BEF264" />
                      </svg>
                      <p className="text-xs font-medium leading-3 text-gray-800">
                        Satisfactory
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        width={20}
                        height={8}
                        viewBox="0 0 20 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={20} height={8} rx={4} fill="#14B8A6" />
                      </svg>
                      <p className="text-xs font-medium leading-3 text-gray-800">
                        Good
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <svg
                        width={20}
                        height={8}
                        viewBox="0 0 20 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={20} height={8} rx={4} fill="#22C55E" />
                      </svg>
                      <p className="text-xs font-medium leading-3 text-gray-800">
                        Better
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <svg
                        width={20}
                        height={8}
                        viewBox="0 0 20 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={20} height={8} rx={4} fill="#15803D" />
                      </svg>
                      <p className="text-xs font-medium leading-3 text-gray-800">
                        Exceptional
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 py-4 shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 flex justify-between p-4 items-center m-4">
        <div className="block">
          <p>Nike</p>
          <p className="text-xs">Client since 5/21</p>
        </div>
        <div>$ 37k</div>
        <div>@ 200</div>
      </div>

      <div className="grid grid-cols-5 gap-12 justify-between p-4 items-center m-4 rounded-lg">
        <div className="col-span-2">
          <div className="mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
              <div className="rounded-t-lg h-20 bg-slate-300" />
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <div className="bg-sky-200 rounded-full p-2">
                    <BsFillCreditCardFill />
                  </div>
                  <div>
                    <AiOutlineInfoCircle className="ml-1.5" />
                  </div>
                </div>
                <p className="font-normal text-xs mt-2 text-gray-700 mb-3 dark:text-gray-400">
                  Introduce a client
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <GiFlowerEmblem />
                    <p className="text-xs font-medium ml-0.5">+ 200</p>
                  </div>
                  <div>
                    <div className="border border-black rounded-full text-xs px-2 py-0.5 cursor-pointer hover:text-white hover:bg-black">
                      Apply
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white px-4 py-4 shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 col-span-3 flex justify-between">
          <div className="block">
            <div className="text-xs">Your client refferal stats</div>
            <div className="text-3xl font-normal mt-2 flex items-center gap-1"><GiFlowerEmblem /> 6,400</div>
            <div className="text-xs flex mt-2 items-center">
              BRUST Earned <AiOutlineInfoCircle className="ml-1.5" />
            </div>
          </div>

          <div className="block">
            <div className="text-3xl font-normal">32</div>
            <div className="text-xs flex mt-2 items-center">
              BRUST Earned <AiOutlineInfoCircle className="ml-1.5" />
            </div>
            <div className="text-3xl font-normal">$243,098</div>
            <div className="text-xs flex mt-2 items-center">
              BRUST Earned <AiOutlineInfoCircle className="ml-1.5" />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-12 md:px-24'>
          <div className='bg-black text-white w-24 text-center p-2 text-xs rounded-full'>
            Key features
          </div>
		<div class="md:flex mt-12 md:space-x-10 items-start">
			<div data-aos="fade-down" class="md:w-7/12 relative">
				<div class="w-5 h-5 rounded-full absolute z-0 left-36 -top-12 animate-ping"></div>
				<div class="w-32 h-32 rounded-full absolute z-0 left-4 -top-12 animate-pulse"></div>
				<img class="relative z-50 floating" src={img} alt=""/>
				<div class="w-36 h-36 rounded-full absolute z-0 right-16 -bottom-1 animate-pulse"></div>
				<div class="w-5 h-5 rounded-full absolute z-0 right-52 bottom-1 animate-ping"></div>
			</div>
			<div data-aos="fade-down" class="md:w-5/12 mt-20 md:mt-0 text-gray-500">
				<h1 class="text-2xl font-semibold text-darken lg:pr-40">A <span class="text-sky-500">user interface</span> designed for the classroom</h1>
				<div class="flex items-center space-x-5 my-5">
					<div class="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
						<svg class="w-4 h-4" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="11.8182" height="11.8182" rx="2" fill="#2F327D"/>
							<rect y="14.1816" width="11.8182" height="11.8182" rx="2" fill="#2F327D"/>
							<rect x="14.7727" width="11.8182" height="11.8182" rx="2" fill="#2F327D"/>
							<rect x="14.7727" y="14.1816" width="11.8182" height="11.8182" rx="2" fill="#F48C06"/>
						</svg>
					</div>
					<p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
				</div>
				<div class="flex items-center space-x-5 my-5">
					<div class="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
						<svg class="w-4 h-4" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="8" y="6" width="20" height="20" rx="2" fill="#2F327D"/>
							<rect width="21.2245" height="21.2245" rx="2" fill="#F48C06"/>
						</svg>
					</div>
					<p>TA’s and presenters can be moved to the front of the class.</p>
				</div>
				<div class="flex items-center space-x-5 my-5">
					<div class="flex-shrink bg-white shadow-lg rounded-full p-3 flex items-center justify-center">
						<svg class="w-4 h-4" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.5 11.375C6.15469 11.375 7.5 9.91758 7.5 8.125C7.5 6.33242 6.15469 4.875 4.5 4.875C2.84531 4.875 1.5 6.33242 1.5 8.125C1.5 9.91758 2.84531 11.375 4.5 11.375ZM25.5 11.375C27.1547 11.375 28.5 9.91758 28.5 8.125C28.5 6.33242 27.1547 4.875 25.5 4.875C23.8453 4.875 22.5 6.33242 22.5 8.125C22.5 9.91758 23.8453 11.375 25.5 11.375ZM27 13H24C23.175 13 22.4297 13.3605 21.8859 13.9445C23.775 15.0668 25.1156 17.093 25.4062 19.5H28.5C29.3297 19.5 30 18.7738 30 17.875V16.25C30 14.4574 28.6547 13 27 13ZM15 13C17.9016 13 20.25 10.4559 20.25 7.3125C20.25 4.16914 17.9016 1.625 15 1.625C12.0984 1.625 9.75 4.16914 9.75 7.3125C9.75 10.4559 12.0984 13 15 13ZM18.6 14.625H18.2109C17.2359 15.1328 16.1531 15.4375 15 15.4375C13.8469 15.4375 12.7688 15.1328 11.7891 14.625H11.4C8.41875 14.625 6 17.2453 6 20.475V21.9375C6 23.2832 7.00781 24.375 8.25 24.375H21.75C22.9922 24.375 24 23.2832 24 21.9375V20.475C24 17.2453 21.5812 14.625 18.6 14.625ZM8.11406 13.9445C7.57031 13.3605 6.825 13 6 13H3C1.34531 13 0 14.4574 0 16.25V17.875C0 18.7738 0.670312 19.5 1.5 19.5H4.58906C4.88438 17.093 6.225 15.0668 8.11406 13.9445Z" fill="#2F327D"/>
						</svg>
					</div>
					<p>Teachers can easily see all students and class data at one time.</p>
				</div>
			</div>
		</div>
        </div>
    </div>
  );
};
