import React from "react";
import {
  FaHome,
  FaVideo,
  FaFolder,
  FaClock,
  FaThumbsUp,
  FaUser,
  FaHistory,
  FaListAlt,
  FaPlay,
  FaClock as FaWatchLater,
  FaBars
} from "react-icons/fa";

const Sidebar = ({ show, toggleSidebar }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black opacity-50 z-30 md:hidden ${show ? 'block' : 'hidden'}`}
        onClick={toggleSidebar}
      ></div>
      <aside className={`bg-black text-white w-64 h-auto fixed top-0 left-0 md:static z-40 transform ${show ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300`}>
        <div className="p-4 text-2xl font-bold flex items-center space-x-2">
          <FaBars className="w-6 h-6 cursor-pointer md:hidden" onClick={toggleSidebar} />
        </div>
        <nav className="mt-4">
          <ul>
            <li className="p-4 hover:bg-gray-700 flex items-center space-x-4">
              <FaHome className="w-6 h-6" />
              <span>Home</span>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center space-x-4">
              <FaVideo className="w-6 h-6" />
              <span>Shorts</span>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center space-x-4">
              <FaFolder className="w-6 h-6" />
              <span>Subscriptions</span>
            </li>
            <hr className="border-gray-700 my-2" />
            <li className="p-4 hover:bg-gray-700 flex items-center space-x-4">
              <FaUser className="w-6 h-6" />
              <span>Your channel</span>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center space-x-4">
              <FaHistory className="w-6 h-6" />
              <span>History</span>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center space-x-4">
              <FaListAlt className="w-6 h-6" />
              <span>Playlists</span>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center space-x-4">
              <FaPlay className="w-6 h-6" />
              <span>Your videos</span>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center space-x-4">
              <FaWatchLater className="w-6 h-6" />
              <span>Watch later</span>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center space-x-4">
              <FaThumbsUp className="w-6 h-6" />
              <span>Liked videos</span>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
