import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser, BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="h-12 w-full z-20 absolute top-0">
        <div className="pl-4 justify-between flex z-20">
          <ul className="flex gap-6 items-center">
            <li
              className="font-[400] primary-font uppercase text-xs"
              style={{ letterSpacing: "2px" }}
            >
              yaariscore.me
            </li>
            <li
              className="font-[400] primary-font uppercase text-xs"
              style={{ letterSpacing: "2px" }}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="font-[400] primary-font uppercase text-xs"
              style={{ letterSpacing: "2px" }}
            >
              <Link to="/store">store</Link>
            </li>
            {/* <li className='font-[400] primary-font uppercase text-xs' style={{letterSpacing: '2px'}}><Link to='/news'>news</Link></li> */}
            <li
              className="font-[400] primary-font uppercase text-xs"
              style={{ letterSpacing: "2px" }}
            >
              <Link to="/share">share</Link>
            </li>
            <li
              className="font-[400] primary-font uppercase text-xs"
              style={{ letterSpacing: "2px" }}
            >
              <Link to="/help">help</Link>
            </li>
          </ul>
          <ul className="flex gap-6 items-center">
            <li className="primary-font uppercase text-md">
              <BsSearch />
            </li>
            <li className="primary-font uppercase text-lg">
              <BiWorld />
            </li>
            <Link
              to="/login"
              className="primary-font uppercase text-lg flex items-center"
            >
              <BiUser className="mr-2" />{" "}
              <p
                className="font-[400] primary-font uppercase text-xs"
                style={{ letterSpacing: "2px" }}
              >
                sign in
              </p>
            </Link>
            <li className="primary-font uppercase text-xs flex items-center bg-gradient-to-r from-[#338EEE] to-[#33BAFC] p-2">
              download
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
