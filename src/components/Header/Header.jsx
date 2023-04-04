import React, { useState } from "react";
import {
  WrenchScrewdriverIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="my-header">
      <div className=" flex justify-between items-center">
        <Link to={"/"} className="inline-flex gap-2 items-center">
          <WrenchScrewdriverIcon className="w-6 h-6 text-blue-400"></WrenchScrewdriverIcon>
          <span className="text-blue-600 font-bold text-3xl">MealDb</span>
        </Link>
        {/* nav link */}
        <ul className=" flex gap-5 font-bold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/items">Items</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
