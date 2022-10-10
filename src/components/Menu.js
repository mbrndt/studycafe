import React from "react";
import { gsap } from "gsap";
import { CgMenuCake } from "react-icons/cg";
import { Link } from "react-router-dom";

function Menu() {
    const [menuOpen, setMenuOpen] = React.useState(false);
     
    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    



  return (
    <div>
      {" "}
      <li className="menu">
        {" "}
        <CgMenuCake className="cursor-pointer text-gray-50 text-xl mx-5" />
        <Link id="links" className="text-gray-50" to="/about">
          About us
        </Link>
        <Link id="links" className="text-gray-50" to="/contact">
          contact
        </Link>
      </li>{" "}
    </div>
  );
}

export default Menu;
