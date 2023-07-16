"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type Props = {};

const Navbar = (props: Props) => {
 const [showNav, setShowNav] = useState<boolean>(false);
 return (
  <div className="flex items-center justify-between  flex-nowrap w-full pb-3 border-b-[1px] border-neutral-500">
   <div className="inline-block text-xl font-bold sm:text-3xl">
    <a href="/" className="inline-block">
     Peter
    </a>
   </div>
   <div className="sm:hidden" onClick={() => setShowNav(!showNav)}>
    <RxHamburgerMenu size={24} />
   </div>
   <nav
    className={`max-sm:absolute max-sm:w-full left-0 transition ease-in duration-300 ${
     showNav ? "top-16 visible" : "max-sm:invisible top-0"
    }`}
   >
    <ul className="flex items-center justify-between max-sm:text-sm max-sm:justify-around">
     <li
      className={`py-1 hover:bg-neutral-700  rounded mx-1 transition ease-in duration-300 delay-200 ${
       showNav ? "max-sm:translate-x-0" : "max-sm:-translate-x-40"
      }`}
     >
      <a href="#projects" className="px-2">
       Projects
      </a>
     </li>
     <li
      className={`py-1 hover:bg-neutral-700  transition ease-in duration-300 rounded mx-1 delay-300 ${
       showNav ? "max-sm:translate-x-0" : "max-sm:-translate-x-52"
      } rounded mx-1`}
     >
      <a href="#contact" className="px-2 whitespace-nowrap">
       Contact Me
      </a>
     </li>
    </ul>
   </nav>
  </div>
 );
};

export default Navbar;
