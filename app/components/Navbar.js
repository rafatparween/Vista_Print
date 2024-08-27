"use client"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPercent, faLifeRing, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const NavBar = () => {
 

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full h-20 p-1.5 shadow-lg bg-white flex items-center justify-between md:h-16 lg:h-20">
      <div className="flex items-center space-x-2 pl-4 md:pl-8">
        <Link legacyBehavior href="Uzair graphic & printing">
          <a>
            <img
              src="https://i.pinimg.com/474x/b4/bd/5a/b4bd5ad3dd8ab4dc0382f9b216b39232.jpg"
              alt="Logo"
              className="w-12 h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 h-[80px] w-[80px]"

            />
          </a>
        </Link>
      </div>
      
      {/* Search Bar */}
      <div className="flex-grow px-4">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 ml-[1225px]">
            <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none w-[893px] ml-[382px]"
             />
        </div>
        <h1 className="text-black no-underline mt-[-36px]">Uzair graphic & printing</h1>
      </div>

      <div className="flex items-center space-x-4 pr-4 md:pr-8">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon className="w-4 h-4" icon={faPercent} />
          <span className="hidden md:inline-block">
            <Link legacyBehavior href="./components/projects">
              <a className="text-black no-underline">My Projects</a>
            </Link>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon className="w-4 h-4" icon={faLifeRing} />
          <span className="hidden md:inline-block">
            <Link legacyBehavior href="./components/help">
              <a className="text-black no-underline">Help is here</a>
            </Link>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon className="w-4 h-4" icon={faUser} />
          <span className="hidden md:inline-block">
            <Link legacyBehavior href="./components/signup">
              <a className="text-black no-underline">Sign in</a>
            </Link>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon className="w-4 h-4" icon={faCartShopping} />
          <span className="hidden md:inline-block">
            <Link legacyBehavior href="/carts">
              <a className="text-black no-underline">Cart</a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
