import React from "react";

export const Help = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  return (
    <div className="mt-12 lg:container lg:mx-auto lg:py-12 md:py-12 md:px-6 py-2 px-4">
      <div className=" md:mb-0 mb-8 md:text-left text-center">
      <div className="text-center text-3xl font-bold">Search for Questions</div>
        <p className="text-center font-normal text-sm text-gray-600 mt-4 sm:w-2 md:w-auto sm:m-auto">
          If you don’t find your answer, Please contact us or Leave a Message,
          we’ll be more than happy to assist you.
        </p>
      </div>
      <form className="flex items-center justify-center my-12">
        <label for="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-4/12">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 rounded-full border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Questions..."
            required=""
          />
          <button
            type="button"
            className="flex absolute inset-y-0 right-0 items-center pr-3"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <button
          type="submit"
          className="inline-flex px-4 rounded-full items-center py-2.5 ml-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            className="mr-2 -ml-1 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          Search
        </button>
      </form>

      <div className="text-center text-xl mt-12">
        Or <b>Browse</b> categories
      </div>

      <div className="flex justify-between py-12 md:w-9/12 items-center mx-auto gap-6">
        <div className="rounded">
          <div className="w-auto/2 h-36 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
            <div>
              <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                13 things to work on
              </h4>
              <p className="text-gray-800 dark:text-gray-100 text-sm">
                Our interior design experts work with you to create the space
                that you have been dreaming about.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded">
          <div className="w-auto h-36 flex flex-col justify-between dark:bg-gray-800 bg-gray-300 dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
            <div>
              <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                13 things to work on
              </h4>
              <p className="text-gray-800 dark:text-gray-100 text-sm">
                Our interior design experts work with you to create the space
                that you have been dreaming about.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded">
          <div className="w-auto h-36 flex flex-col justify-between bg-yellow-400 rounded-lg border border-yellow-400 mb-6 py-5 px-4">
            <div>
              <h4 className="text-gray-800 font-bold mb-3">
                13 things to work on
              </h4>
              <p className="text-gray-800 text-sm">
                Our interior design experts work with you to create the space
                that you have been dreaming about.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center text-xl mt-6">
          <b>Quick</b> Answers
        </div>

        <div className="lg:container lg:mx-auto lg:py-6 md:py-6 md:px-6 py-2 px-4">
          <div className="lg:w-8/12 w-full mx-auto">
            {/* <!-- Question 1 --> */}
            <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

            <div className="w-full md:px-6  ">
              <div
                id="mainHeading"
                className="flex justify-between items-center w-full"
              >
                <div className=" ">
                  <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                    <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      Q1.
                    </span>
                    How do i know if a product is available in boutiques?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setOpen(!open)}
                >
                  <svg
                    className={
                      "transform " + (open ? "rotate-180" : "rotate-0")
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="menu"
                className={"mt-6 w-full " + (open ? "block" : "hidden")}
              >
                <p className="text-base leading-6 text-gray-600 font-normal">
                  Remember you can query the status of your orders any time in
                  My orders in the My account section. if you are not resigered
                  at Mango.com, you can access dierectly in the Orders section.
                  In this cause, you will have enter your e-mail address and
                  order number.
                </p>
              </div>
            </div>

            {/* <!-- Question 2 --> */}

            <hr className=" w-full lg:mt-10 my-8" />

            <div className="w-full md:px-6 ">
              <div
                id="mainHeading"
                className="flex justify-between items-center w-full"
              >
                <div className="">
                  <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                    
                    <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      Q2.
                    </span>
                    How can i find the prices or get other information about
                    chanel products?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setOpen2(!open2)}
                >
                  <svg
                    className={
                      "transform " + (open2 ? "rotate-180" : "rotate-0")
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="menu"
                className={"mt-6 w-full " + (open2 ? "block" : "hidden")}
              >
                <p className="text-base leading-6 text-gray-600 font-normal">
                  Remember you can query the status of your orders any time in
                  My orders in the My account section. if you are not resigered
                  at Mango.com, you can access dierectly in the Orders section.
                  In this cause, you will have enter your e-mail address and
                  order number.
                </p>
              </div>
            </div>

            {/* <!-- Question 3 --> */}

            <hr className=" w-full lg:mt-10 my-8" />

            <div className="w-full md:px-6 ">
              <div
                id="mainHeading"
                className="flex justify-between items-center w-full"
              >
                <div className="">
                  <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                    
                    <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      Q3.
                    </span>
                    How many collections come out every year?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setOpen3(!open3)}
                >
                  <svg
                    className={
                      "transform " + (open ? "rotate-180" : "rotate-0")
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="menu"
                className={"mt-6 w-full " + (open3 ? "block" : "hidden")}
              >
                <p className="text-base leading-6 text-gray-600 font-normal">
                  Remember you can query the status of your orders any time in
                  My orders in the My account section. if you are not resigered
                  at Mango.com, you can access dierectly in the Orders section.
                  In this cause, you will have enter your e-mail address and
                  order number.
                </p>
              </div>
            </div>

            {/* <!-- Question 4 --> */}

            <hr className=" w-full lg:mt-10 my-8" />

            <div className="w-full md:px-6  ">
              <div
                id="mainHeading"
                className="flex justify-between items-center w-full"
              >
                <div className="">
                  <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                    
                    <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      Q4.
                    </span>
                    Are all of the fashion collections features on the website?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setOpen4(!open4)}
                >
                  <svg
                    className={
                      "transform " + (open4 ? "rotate-180" : "rotate-0")
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="menu"
                className={"mt-6 w-full " + (open4 ? "block" : "hidden")}
              >
                <p className="text-base leading-6 text-gray-600 font-normal">
                  Remember you can query the status of your orders any time in
                  My orders in the My account section. if you are not resigered
                  at Mango.com, you can access dierectly in the Orders section.
                  In this cause, you will have enter your e-mail address and
                  order number.
                </p>
              </div>
            </div>

            {/* <!-- Question 5 --> */}

            <hr className=" w-full lg:mt-10 my-8" />

            <div className="w-full md:px-6 ">
              <div
                id="mainHeading"
                className="flex justify-between items-center w-full"
              >
                <div className="">
                  <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                    
                    <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      Q5.
                    </span>
                    Where do i find products that i have seen in magazines or
                    Social Media?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setOpen5(!open5)}
                >
                  <svg
                    className={
                      "transform " + (open5 ? "rotate-180" : "rotate-0")
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="menu"
                className={"mt-6 w-full " + (open5 ? "block" : "hidden")}
              >
                <p className="text-base leading-6 text-gray-600 font-normal">
                  Remember you can query the status of your orders any time in
                  My orders in the My account section. if you are not resigered
                  at Mango.com, you can access dierectly in the Orders section.
                  In this cause, you will have enter your e-mail address and
                  order number.
                </p>
              </div>
            </div>

            <hr className=" w-full lg:mt-10 my-8" />
          </div>
        </div>
      </div>
    </div>
  );
};
