import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import Slider from "react-slick";
import { AiTwotoneStar } from "react-icons/ai";

export const Corousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="min-w-screen flex items-center p-5 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-gradient-to-tl from-yellow-300 to-cyan-200 shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
              <div className="md:flex items-center -mx-10">
                <div className="w-full px-10">
                  <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">
                      Mens's Ragged <br />
                      Waterproof Jacket
                    </h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                      Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                      voluptates, sint enim fugiat saepe, dolor fugit, magnam
                      explicabo eaque quas id quo porro dolorum facilis...{" "}
                      <a
                        href="/"
                        className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                      >
                        MORE <i className="mdi mdi-arrow-right"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="min-w-screen flex items-center p-5 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
              <div className="md:flex items-center -mx-10">
                <div className="w-full px-10">
                  <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">
                      Mens's Ragged <br />
                      Waterproof Jacket
                    </h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                      Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                      voluptates, sint enim fugiat saepe, dolor fugit, magnam
                      explicabo eaque quas id quo porro dolorum facilis...{" "}
                      <a
                        href="/"
                        className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                      >
                        MORE <i className="mdi mdi-arrow-right"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="min-w-screen flex items-center p-5 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
              <div className="md:flex items-center -mx-10">
                <div className="w-full px-10">
                  <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">
                      Mens's Ragged <br />
                      Waterproof Jacket
                    </h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                      Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                      voluptates, sint enim fugiat saepe, dolor fugit, magnam
                      explicabo eaque quas id quo porro dolorum facilis...{" "}
                      <a
                        href="/"
                        className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                      >
                        MORE <i className="mdi mdi-arrow-right"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="min-w-screen flex items-center p-5 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
              <div className="md:flex items-center -mx-10">
                <div className="w-full px-10">
                  <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">
                      Mens's Ragged <br />
                      Waterproof Jacket
                    </h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                      Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                      voluptates, sint enim fugiat saepe, dolor fugit, magnam
                      explicabo eaque quas id quo porro dolorum facilis...{" "}
                      <a
                        href="/"
                        className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                      >
                        MORE <i className="mdi mdi-arrow-right"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="min-w-screen flex items-center p-5 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
              <div className="md:flex items-center -mx-10">
                <div className="w-full px-10">
                  <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">
                      Mens's Ragged <br />
                      Waterproof Jacket
                    </h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                      Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                      voluptates, sint enim fugiat saepe, dolor fugit, magnam
                      explicabo eaque quas id quo porro dolorum facilis...{" "}
                      <a
                        href="/"
                        className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                      >
                        MORE <i className="mdi mdi-arrow-right"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="min-w-screen flex items-center p-5 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
              <div className="md:flex items-center -mx-10">
                <div className="w-full px-10">
                  <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">
                      Mens's Ragged <br />
                      Waterproof Jacket
                    </h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                      Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                      voluptates, sint enim fugiat saepe, dolor fugit, magnam
                      explicabo eaque quas id quo porro dolorum facilis...{" "}
                      <a
                        href="/"
                        className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                      >
                        MORE <i className="mdi mdi-arrow-right"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="min-w-screen flex items-center p-5 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
              <div className="md:flex items-center -mx-10">
                <div className="w-full px-10">
                  <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">
                      Mens's Ragged <br />
                      Waterproof Jacket
                    </h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                      Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                      voluptates, sint enim fugiat saepe, dolor fugit, magnam
                      explicabo eaque quas id quo porro dolorum facilis...{" "}
                      <a
                        href="/"
                        className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                      >
                        MORE <i className="mdi mdi-arrow-right"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="min-w-screen flex items-center p-5 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
              <div className="md:flex items-center -mx-10">
                <div className="w-full px-10">
                  <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">
                      Mens's Ragged <br />
                      Waterproof Jacket
                    </h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                      Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                      voluptates, sint enim fugiat saepe, dolor fugit, magnam
                      explicabo eaque quas id quo porro dolorum facilis...{" "}
                      <a
                        href="/"
                        className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                      >
                        MORE <i className="mdi mdi-arrow-right"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="min-w-screen flex items-center p-5 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
              <div className="md:flex items-center -mx-10">
                <div className="w-full px-10">
                  <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">
                      Mens's Ragged <br />
                      Waterproof Jacket
                    </h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                      Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                      voluptates, sint enim fugiat saepe, dolor fugit, magnam
                      explicabo eaque quas id quo porro dolorum facilis...{" "}
                      <a
                        href="/"
                        className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                      >
                        MORE <i className="mdi mdi-arrow-right"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="min-w-screen flex items-center p-5 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
              <div className="md:flex items-center -mx-10">
                <div className="w-full px-10">
                  <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">
                      Mens's Ragged <br />
                      Waterproof Jacket
                    </h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                      Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                      voluptates, sint enim fugiat saepe, dolor fugit, magnam
                      explicabo eaque quas id quo porro dolorum facilis...{" "}
                      <a
                        href="/"
                        className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                      >
                        MORE <i className="mdi mdi-arrow-right"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
