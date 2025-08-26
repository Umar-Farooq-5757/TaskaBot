import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets.js";
import { CiSearch, CiImageOn } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline, IoCloseSharp } from "react-icons/io5";
import "../App.css";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const { isDark, setIsDark, isSidebarOpen, setIsSidebarOpen } =
    useAppContext();

  return (
    <aside
      className={`border md:left-0 ${
        isSidebarOpen ? "left-0 " : "-left-68"
      } transition-all min-w-68 h-screen py-3 px-3 z-50 flex md:relative absolute flex-col justify-between ${
        isDark
          ? "bg-gradient-to-b from-[#221f22] to-[#000000] text-white border-gray-800"
          : "text-black bg-white border-gray-300"
      }`}
    >
      <button
        onClick={() => setIsSidebarOpen(false)}
        className={`close transition-all md:hidden block ${
          isDark ? "hover:bg-gray-800" : "hover:bg-gray-200"
        } rounded-full p-1 cursor-pointer absolute right-2 top-1 `}
      >
        <IoCloseSharp className="size-6" />
      </button>
      <section className="flex flex-col gap-5">
        {/* Logo */}
        <div className="logo flex items-center gap-2">
          <img src={assets.logo} alt="" />
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-xl">TaskaBot</h1>
            <p className="text-sm font-semibold text-[#ec4e02]">
              Your AI assistant
            </p>
          </div>
        </div>

        {/* New chat button */}
        <button className="rounded-md font-semibold py-1 text-sm flex justify-center items-center gap-2 cursor-pointer w-full bg-gradient-to-r from-[#ffa42c] to-[#ec4e02] text-white">
          <span className="text-lg font-bold">+</span> New Chat
        </button>

        {/* search chats */}
        <div className="border border-gray-400 rounded-md flex items-center justify-start pl-2 py-2  gap-1">
          <CiSearch className="size-5 " />
          <input
            className="placeholder:text-sm outline-none text-sm"
            type="text"
            name=""
            id=""
            placeholder="Search chats..."
          />
        </div>

        {/* Recent Chats */}
        <h2 className="text-sm my-0 ">Recent chats</h2>
        <div
          className={`chat group relative cursor-pointer flex flex-col justify-center border ${
            isDark ? "border-gray-800" : "border-gray-300"
          } rounded-md py-1 pl-4`}
        >
          <p className="title text-sm">New Chat</p>
          <span className="time text-xs text-gray-500">3 hours ago</span>
          <button
            className={`${
              isDark ? "hover:bg-gray-800" : "hover:bg-gray-200"
            } rounded-full cursor-pointer p-2 transition-all absolute right-3`}
          >
            <RiDeleteBin6Line className="size-4 hidden group-hover:block" />
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        {/* community images */}
        <div
          className={`chat group hover:scale-105 transition-all relative cursor-pointer flex justify-start items-center border gap-2 ${
            isDark ? "border-gray-800" : "border-gray-300"
          } rounded-md py-3 px-2`}
        >
          <CiImageOn className="size-5" />
          <span className="time text-sm">Community Images</span>
        </div>

        {/* theme changing */}
        <div
          className={`chat group relative cursor-pointer flex justify-start items-center border gap-2 ${
            isDark ? "border-gray-800" : "border-gray-300"
          } rounded-md py-3 px-2`}
        >
          {/* <img className="size-7" src={assets.user_icon} alt="" /> */}
          {isDark ? (
            <FiSun className="size-5" />
          ) : (
            <IoMoonOutline className="size-5" />
          )}
          {isDark ? (
            <span className="time text-sm">Light Mode</span>
          ) : (
            <span className="time text-sm">Dark Mode</span>
          )}
          <input
            type="checkbox"
            checked={isDark}
            onChange={() => {
              setIsDark(!isDark);
              localStorage.setItem("isDark", !isDark);
            }}
            className="toggle absolute right-2 text-white bg-[#99a1af] border-[#99a1af] checked:bg-[#ec4e02] checked:border-[#ec4e02] checked:text-white"
          />
        </div>

        {/* user name and logout */}
        <div
          className={`chat group relative cursor-pointer flex justify-start items-center border gap-2 ${
            isDark ? "border-gray-800" : "border-gray-300"
          } rounded-md py-3 px-2`}
        >
          <img className="size-7" src={assets.user_icon} alt="" />
          <span className="time font-semibold text-sm">Username here</span>
          <button
            className={`${
              isDark ? "hover:bg-gray-800" : "hover:bg-gray-200"
            } rounded-full cursor-pointer p-2 transition-all absolute right-3`}
          >
            <IoIosLogOut className="size-6  hidden group-hover:block" />
          </button>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
