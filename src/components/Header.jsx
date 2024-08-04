import React, { useState } from "react";
import {
  FaSearch,
  FaBars,
  FaBell,
  FaVideo,
  FaMicrophone,
} from "react-icons/fa";
import logo from "../assets/shin.jpeg"; 

const Header = ({ toggleSidebar }) => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header className="bg-black text-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <FaBars className="w-6 h-6 cursor-pointer md:hidden" onClick={toggleSidebar} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" className="w-24" />
        </div>
        <div className="flex-1 flex justify-center md:justify-center">
          <div className="flex space-x-2 w-full md:w-auto">
            {/* Mobile search input */}
            <input
              type="text"
              placeholder="Search"
              className={`px-4 py-2 border rounded-full bg-gray-900 text-white transition-all duration-300 ${showSearch ? 'block' : 'hidden'} md:hidden`}
            />
            {/* Desktop search input */}
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border rounded-full bg-gray-900 text-white hidden md:block"
            />
            {/* Mobile search button */}
          </div>
        </div>
        <div className="flex items-center space-x-4 ml-auto">
          <FaMicrophone className="w-6 h-6 cursor-pointer hidden md:block" />
          <FaSearch className={`w-6 h-6 cursor-pointer ${showSearch ? 'hidden' : 'block'} md:hidden`} onClick={toggleSearch} />
          <FaVideo className="w-6 h-6 cursor-pointer" />
          <FaBell className="w-6 h-6 cursor-pointer" />
          <img src={logo} alt="User" className="w-8 h-8 rounded-full cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-center bg-gray-900 py-2 overflow-x-auto">
        <div className="overflow-x-hidden flex space-x-4">
          {['All', 'Gaming', 'Live', 'Battlegrounds Mobile India', 'JavaScript', 'Music', 'Tamil Cinema', 'News', 'Tamil television drama', 'Mixes', 'Algorithms'].map((item, index) => (
            <button key={index} className="bg-gray-800 text-white px-4 py-2 rounded-full whitespace-nowrap">{item}</button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
