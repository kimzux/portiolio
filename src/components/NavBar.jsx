import React, { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import "tailwindcss/base.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "project" },
    { id: 4, link: "contact" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Zulfa-Rajabu Resume.pdf";
    link.setAttribute("download", "Zulfa-Rajabu Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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

      <ul className="hidden lg:mr-[300px] md:flex  xl:flex lg:flex 2xl:flex">
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
        <li className="py-[12px] px-[24px] bg-purple cursor-pointer capitalize font-normal hover:scale-105 duration-200 font-san rounded-md text-white active:scale-[.98] active:duration-75 transition-all ease-in-out transform ml-4">
          <button
            onClick={handleDownload}
            className="w-full h-full flex items-center justify-center gap-2"
          >
            <FaDownload /> CV
          </button>
        </li>
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
          className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full md:hidden bg-white rounded-md overflow-hidden shadow-md text-black px-6 py-4 transition duration-200 ease-in-out ${
            nav ? "transform scale-110" : ""
          }`}
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={
                id === 4
                  ? "py-[12px] px-[24px] bg-purple  cursor-pointer capitalize  font-normal text-base hover:scale-105 duration-200 font-san rounded-md w-full text-center text-white active:scale-[.98] active:duration-75 transition-all  ease-in-out transform mb-2"
                  : "px-4 cursor-pointer capitalize py-4 text-4 w-full text-center hover:scale-105 duration-200"
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
          <li className="py-[12px] px-[24px] bg-purple cursor-pointer capitalize font-normal hover:scale-105 duration-200 font-san rounded-md text-white active:scale-[.98] active:duration-75 transition-all ease-in-out transform w-full text-center">
            <button
              onClick={() => {
                handleDownload();
                setNav(false);
              }}
              className="w-full h-full flex items-center justify-center gap-2"
            >
              <FaDownload /> CV
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
