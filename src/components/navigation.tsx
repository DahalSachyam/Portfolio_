import { useState } from "react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import {  NavigationIconsAboutMe, NavigationIconsAcademics, NavigationIconsHome } from "./NavigationIcons";
import { GiBookshelf } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";

export const Navigation = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer "
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <NavigationIconsHome onClose={handleNav} IconName="Home" value="#main"/>
          <NavigationIconsAboutMe onClose={handleNav} IconName="About Me" value="#aboutme"/>
          <NavigationIconsAcademics onClose={handleNav} IconName="Academics" value="#academics"/>
        </div>
      ) : 
      (
        <div className="md:block hidden fixed top-[15%] z-10">
          <div className="flex flex-col">
            <a href="#main" className="rounded-full shadow-lg bg-gray-200 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-125 ease-in-out duration-300 ">
              <AiOutlineHome size={20} />
            </a>
            <a href="#aboutme" className="rounded-full shadow-lg bg-gray-200 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-125 ease-in-out duration-300 ">
              <FaRegLightbulb size={20} />
            </a>
            <a href="#academics" className="rounded-full shadow-lg bg-gray-200 shadow-red-400 m-2 p-4 cursor-pointer hover:scale-125 ease-in-out duration-300 ">
              <GiBookshelf size={20} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
