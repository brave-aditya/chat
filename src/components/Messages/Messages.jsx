import React from "react";
import { useEffect, useRef, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/Message";
import { IoMoonSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoSun } from "react-icons/go";
//import "./Messages.css";
const Messages = ({ messages, name }) => {
  const containerRef = useRef(null);
 

  useEffect(() => {
    // Scroll to the bottom when new messages arrive
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="h-full max-h-[calc(100%-60px)] flex flex-col">
      
      <div
        ref={containerRef}
        className=" h-full border flex flex-col-reverse bg-[#f8f9fa] dark:bg-[#24293e] rounded-3xl shadow-md text-black p-4 m-1 mb-2 text-3xl xl:text-2xl overflow-y-auto no-scrollbar "
      >
        <div className="flex flex-col space-y-2">
          {messages.map((message, i) => (
            <div key={i}>
              <Message message={message} name={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Messages;
