import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
import { CgMenuCake } from "react-icons/cg";

const Nav = () => {
  return (
    <nav className="py-5 flex justify-between">
      <h1 className="leading-none text-amber-400 flex mx-1">
        <BiCoffeeTogo className="mx-1" />
        <Link className="mx-1 text-gray-50" to="/">
          mbot study cafe
        </Link>
      </h1>
      <ul className="flex items-center text-amber-400">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer mr-1" />
        </li>

        <Menu />

        {/* <li className="menu">
          {" "}
          <CgMenuCake className="cursor-pointer text-gray-50 text-xl mx-5" />
          <Link id="links" className="text-gray-50" to="/about">
            About us
          </Link>
          <Link id="links" className="text-gray-50" to="/contact">
            contact
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
