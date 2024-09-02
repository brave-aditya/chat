import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import logo1 from "../../assets/logo1.png";
import { FaUser, FaLock } from "react-icons/fa6";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="h-[100vh] bg-gradient-to-r from-[#bb8fbb] from-30% to-[#0a0d36] flex items-end sm:items-center justify-center">
      <img
        src={logo1}
        alt="logo"
        className="rounded-full sm:hidden h-[37vh] absolute top-0"
      />
      <div className="flex-1 flex items-center justify-end">
        <div className="shadow-2xl border-white border sm:border-2 sm:border-r-0 bg-white bg-opacity-30 rounded-[50px] h-[80vh] sm:h-[64vh] sm:rounded-r-none p-8 flex flex-col items-center justify-around w-full mb-4 sm:mb-0 mx-4 sm:mx-0 sm:ml-4 xl:w-[60%]">
          <h1 className="text-center font-serif text-5xl border-b-2 border-[#0a0d36] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#bb8fbb] from-30% to-[#0a0d36] mt-16 sm:mt-0">
            Join A Room
          </h1>
          <div className="w-full flex border-b-2 border-black">
            <input
              placeholder="User Name:"
              className="w-full bg-transparent text-2xl placeholder-black outline-none text-black"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
            <FaUser className="mt-1 text-2xl" />
          </div>
          <div className="w-full flex border-b-2 border-black">
            <input
              placeholder="Room Id:"
              className="w-full bg-transparent placeholder-black text-2xl text-black outline-none"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
            <FaLock className="mt-1 text-2xl" />
          </div>
          <Link
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
            to={`/chat?name=${name}&room=${room}`}
            className="w-full flex justify-center"
          >
            <button
              className="text-center text-2xl rounded-full h-[40px] bg-gradient-to-b from-[#bb8fbb] from-30% to-[#0a0d36] text-white mt-4 w-[200px]"
              type="submit"
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-1 items-center justify-start hidden sm:block mr-4">
        <img
          src={logo}
          alt="logo"
          className="shadow-2xl rounded-[70px] h-[84vh] border-white border-2"
        />
      </div>
    </div>
  );
};

export default Join;
