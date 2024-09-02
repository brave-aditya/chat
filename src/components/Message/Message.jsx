import React from "react";
import ReactEmoji from "react-emoji";
//import "./Message.css";
const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  let isSentByAdmin = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  if (user === "admin"){
    isSentByAdmin = true;
  }
  return isSentByCurrentUser ? (
    <div className="flex justify-end">
      <div className="flex flex-col mr-4 justify-center ">
       <span className="text-xl text-center bg-slate-100 rounded-full border border-black">{user.slice(0,1).toUpperCase()}</span>
       <span className="text-sm mt-[-5px] dark:text-white w-8 text-center">{user}</span>
      </div>
      <div className="max-w-[60%] md:max-w-[55%] xl:max-w-[45%] ">
        <p className=" text-white bg-[#2f5bfd] rounded-xl p-1 break-words">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : isSentByAdmin ? (
    <div className="flex justify-center">
      <div className="  ">
        <p className="text-xl xl:text-lg mb-4 xl:mb-2 dark:text-white">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) :(
    <div className="flex justify-start">
      <div className=" max-w-[60%] md:max-w-[55%] xl:max-w-[45%]">
        <p className="bg-gray-200 rounded-xl p-1 break-words ">{ReactEmoji.emojify(text)}</p>
      </div>
      <div className="flex flex-col ml-4 justify-center ">
       <span className="text-xl text-center bg-slate-100 rounded-full border border-black w-8">{user.slice(0,1).toUpperCase()}</span>
       <span className="text-sm mt-[-5px] dark:text-white text-center">{user}</span>
      </div>
    </div>
  );
};
export default Message;
