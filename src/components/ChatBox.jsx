import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const ChatBox = () => {
  const { setIsSidebarOpen, isDark } = useAppContext();
  const [messages, setMessages] = useState([]);
  return (
    <div
      onClick={() => setIsSidebarOpen(false)}
      className="items-center transition-all relative grow flex flex-col justify-center"
    >
      {messages.length === 0 && (
        <>
        <div className="logo flex mb-6 items-center gap-2">
          <img className="size-16 select-none" src={assets.logo} alt="" />
          <div className="flex flex-col justify-center">
            <h1 className="font-medium text-5xl">TaskaBot</h1>
            <p className="font-medium text-3xl text-[#ec4e02]">
              Your AI assistant
            </p>
          </div>
        </div>
        <p className="text-[#99a1af] font-light text-6xl">Ask me anything.</p> 
        </>
      )}

      {/* Prompt box */}
      {/* <div> */}
        <form className={` ${isDark?'bg-[#251812]':"bg-[#fdede5]"} pl-5 flex items-center justify-between py-2 px-2 border absolute bottom-12 w-[45rem] border-[#ec4e02] rounded-4xl justify-self-end`}>
          <div className="flex items-center justify-start gap-2 outline-none border-none">
            <select name="" id="">
            <option value="text">Text</option>
            <option value="image">Image</option>
          </select>
          <input className="outline-none" type="text" name="" id="" placeholder="Type your prompt here..." />
          </div>
          <button className="cursor-pointer">
            <img src={assets.send_icon} alt="" />
          </button>
        </form>
      {/* </div> */}
    </div>
  );
};

export default ChatBox;
