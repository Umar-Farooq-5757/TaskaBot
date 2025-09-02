import React, { useEffect } from "react";
import moment from "moment";
import Markdown from "react-markdown";
import Prism from 'prismjs'
import { useAppContext } from "../context/AppContext";

const Message = ({ message }) => {
  const {isDark} = useAppContext()
  useEffect(() => {
  Prism.highlightAll()
  
  }, [message.content])
  
  return (
    <>
      {message.role == "user" ? (
        <div className={` ${isDark?'bg-slate-800':'bg-[#f8fafc]'} ml-32 border border-gray-400 py-1 px-2 text-sm self-end rounded-sm`}>
          <p className="mb-1">{message.content}</p>
          <span className="text-xs  text-gray-500">
            {moment(message.timestamp).fromNow()}
          </span>
        </div>
      ) : message.isImage == true ? (
        <img
          className="rounded-md size-96 self-start "
          src={message.content}
          alt=""
        />
      ) : (
        <div className={`self-start mr-24  ${isDark?'bg-[#251812]':'bg-[#fdede5]'} p-2 border reset-tw border-[#ec4e02] rounded-md text-sm`}>
          <div className="mb-1"><Markdown>{message.content}</Markdown></div>
           <span className="text-xs  text-gray-500">
            {moment(message.timestamp).fromNow()}
          </span>
        </div>
      )}
    </>
  );
};
export default Message;
