import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import Message from "./Message";

const ChatBox = () => {
  const { setIsSidebarOpen, isDark, selectedChat, setSelectedChat } =
    useAppContext();
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState("text");
  const [isPublished, setIsPublished] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedChat) {
      setMessages(selectedChat.messages);
    }
  }, [selectedChat]);

  return (
    <section className="flex flex-col items-center grow gap-16 w-full">
      <div
        onClick={() => setIsSidebarOpen(false)}
        className="items-center transition-all relative pr-9 sm:pr-4 md:pr-0 grow flex flex-col justify-center sm:-pr-10"
      >
        {messages.length === 0 ? (
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
            <p className="text-[#99a1af] font-light text-4xl sm:text-6xl select-none">
              Ask me anything.
            </p>
          </>
        ) : (
          <div className="flex flex-col items-center w-[80vw] overflow-x-hidden md:w-[65vw] lg:w-[70vw] xl:[78vw] grow gap-3 h-[82vh] overflow-auto my-10 px-1 sm:px-5">
            {messages.map((message, index) => {
              return <Message key={index} message={message} />;
            })}
            {loading && (
              <div className="loader mt-2 flex items-center gap-1.5 self-start">
                <div className="size-1.5 rounded-full bg-gray-500 animate-bounce"></div>
                <div className="size-1.5 rounded-full bg-gray-500 animate-bounce"></div>
                <div className="size-1.5 rounded-full bg-gray-500 animate-bounce"></div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Prompt box */}
      {/* <div> */}
      <form
        onClick={(e) => e.preventDefault()}
        className={` ${
          isDark ? "bg-[#251812]" : "bg-[#fdede5]"
        } pl-3 sm:pl-5 flex items-center justify-between py-2 px-2 border sticky bottom-12 w-[100%] sm:w-[85%] lg:w-[75%] md:w-[90%]  border-[#ec4e02] rounded-4xl justify-self-end`}
      >
        <div className="flex items-center justify-start gap-2 outline-none border-none grow ">
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            name=""
            id=""
            className="text-sm sm:text-md"
          >
            <option value="text">Text</option>
            <option value="image">Image</option>
          </select>
          <input
            className="outline-none placeholder:text-sm sm:placeholder:text-md mr-5 grow"
            type="text"
            name=""
            id=""
            placeholder="Type your prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <button disabled={loading} className="cursor-pointer select-none">
          <img
            className="size-7 sm:size-9"
            src={loading ? assets.stop_icon : assets.send_icon}
            alt=""
          />
        </button>
      </form>
      {/* </div> */}
    </section>
  );
};

export default ChatBox;
