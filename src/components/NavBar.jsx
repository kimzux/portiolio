import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "tailwindcss/base.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "project",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black ">
      <Link to="home" smooth duration={500}>
        <div className="flex cursor-pointer capitalize font-normal hover:scale-105 duration-200 font-san md:ml-8 ">
          <div className=" w-[50px] h-[50px] rounded-full bg-purple flex justify-center items-center  text-white">
            <p>ZR</p>
          </div>

          <span className="font-san mt-4 ml-2 font-bold">Zulfa Rajabu</span>
        </div>
      </Link>

      <ul className="hidden mr-[300px] md:flex  xl:flex lg:flex 2xl:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={
              id === 4
                ? "py-[12px] px-[24px] bg-purple  cursor-pointer capitalize font-normal hover:scale-105 duration-200 font-san rounded-md text-white active:scale-[.98] active:duration-75 transition-all ease-in-out transform"
                : "py-[12px] px-[24px] cursor-pointer capitalize font-normal hover:scale-105 duration-200 font-san"
            }
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className={`cursor-pointer pr-4 z-10 text-purple hover:bg-purple-300 transition duration-200 ease-in-out  md:hidden lg:hidden xl:hidden 2xl:hidden ${
          nav ? "transform rotate-90" : ""
        }`}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul
          className={`flex flex-col justify-center items-center absolute top-0 left-[210px] w-full  bg-white rounded-md overflow-hidden shadow-md text-black  px-6 py-4 transition duration-200 ease-in-out ${
            nav ? "transform scale-110" : ""
          }`}
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={
                id === 4
                  ? "py-[12px] px-[24px] bg-purple  cursor-pointer capitalize  font-normal text-base hover:scale-105 duration-200 font-san rounded-md mr-[200px] text-white active:scale-[.98] active:duration-75 transition-all  ease-in-out transform"
                  : "px-4 cursor-pointer capitalize py-4 text-4 mr-[200px] hover:scale-105 duration-200"
              }
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
