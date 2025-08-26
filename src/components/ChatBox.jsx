import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const ChatBox = () => {
  const { setIsSidebarOpen, isDark } = useAppContext();
  const [messages, setMessages] = useState([]);
  return (
    <div
      onClick={() => setIsSidebarOpen(false)}
      className="items-center transition-all relative pr-9 sm:pr-4 md:pr-0 grow flex flex-col justify-center sm:-pr-10"
    >
      {messages.length === 0 && (
        <>
        <div className="logo flex mb-6 items-center gap-2 select-none">
          <img className="size-12 sm:size-16 " src={assets.logo} alt="" />
          <div className="flex flex-col justify-center">
            <h1 className="font-medium text-4xl sm:text-5xl">TaskaBot</h1>
            <p className="font-medium text-2xl sm:text-3xl text-[#ec4e02]">
              Your AI assistant
            </p>
          </div>
        </div>
        <p className="text-[#99a1af] font-light text-4xl sm:text-6xl select-none">Ask me anything.</p> 
        </>
      )}

      {/* Prompt box */}
      {/* <div> */}
        <form className={` ${isDark?'bg-[#251812]':"bg-[#fdede5]"} pl-3 sm:pl-5 flex items-center justify-between py-2 px-2 border absolute bottom-12 w-[100%] sm:w-[85%] lg:w-[75%] md:w-[90%]  border-[#ec4e02] rounded-4xl justify-self-end`}>
          <div className="flex items-center justify-start gap-2 outline-none border-none">
            <select name="" id="" className="text-sm sm:text-md">
            <option value="text">Text</option>
            <option value="image">Image</option>
          </select>
          <input className="outline-none placeholder:text-sm sm:placeholder:text-md" type="text" name="" id="" placeholder="Type your prompt here..." />
          </div>
          <button className="cursor-pointer select-none">
            <img className="size-7 sm:size-9" src={assets.send_icon} alt="" />
          </button>
        </form>
      {/* </div> */}
    </div>
  );
};

export default ChatBox;
