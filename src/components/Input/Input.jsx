import React from "react";
import { IoSend } from "react-icons/io5";

const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form p-1 flex w-[100%] h-[60px]">
    <input
      className="input w-full border border-gray-400 rounded-full text-black p-2 pl-6 text-2xl shadow-sm outline-none"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button
      className=" ml-2 text-white text-2xl rounded-full bg-blue-400 p-3 bg-gradient-to-r to-[#0061ff] from-[#60efff] shadow-sm"
      onClick={(event) => sendMessage(event)}
    >
      <IoSend />
    </button>
  </form>
);

export default Input;
