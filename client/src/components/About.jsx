import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { useAppContext } from "../context/AppContext";

const About = () => {
  const { isAboutOpen, isDark } = useAppContext();
  return (
    <div
      className={` ${
        isAboutOpen ? "translate-x-0" : "translate-x-16 fixed right-0"
      } transition-all min-h-[30rem] ${
        isDark ? "bg-[#251812]" : "bg-[#fdede5]"
      } self-center flex flex-col justify-center gap-8 px-2 rounded-l-3xl border border-[#ec4e02] `}
    >
      <a href="https://www.instagram.com/aamirgel17" target="_blank">
        <button
          className={`transition-all p-2 cursor-pointer rounded-full ${
            isDark ? "hover:bg-gray-800" : "hover:bg-gray-200"
          }`}
        >
          <FaInstagram className="size-7" />
        </button>
      </a>
      <a href="https://github.com/Umar-Farooq-5757/TaskaBot" target="_blank">
        <button
          className={`transition-all p-2 cursor-pointer rounded-full ${
            isDark ? "hover:bg-gray-800" : "hover:bg-gray-200"
          }`}
        >
          <FaGithub className="size-7" />
        </button>
      </a>
      <a href="mailto:aamirgel17@gmail.com" target="_blank">
        <button
          className={`transition-all p-2 cursor-pointer rounded-full ${
            isDark ? "hover:bg-gray-800" : "hover:bg-gray-200"
          }`}
        >
          <CgMail className="size-7" />
        </button>
      </a>
    </div>
  );
};

export default About;
