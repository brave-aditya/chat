import React, { useState } from "react";
import logo1 from "../../assets/logo1.png";
import { GoDotFill, GoSun } from "react-icons/go";
import { IoCloseSharp, IoMoonSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiMessage3Line } from "react-icons/ri";
import { useActionData } from "react-router-dom";
import { CiCloudMoon, CiLight } from "react-icons/ci";
import { FaX } from "react-icons/fa6";
import { CiDark } from "react-icons/ci";
import { Link } from "react-router-dom";
import TextContainer from "../TextContainer/TextContainer";
import { BiLogOut } from "react-icons/bi";
import { MdArrowOutward, MdLogout } from "react-icons/md";
//import "./InfoBar.css";
//import closeIcon from "../../icons/closeIcon.png";
//import onlineIcon from "../../icons/onlineIcon.png";

const InfoBar = ({ users, isOpen, toggleSidebar }) => {
  const [light, setLight] = useState(true);
  const change = () => {
    setLight(!light);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="text-center flex flex-col mt-4 xl:mt-2  mr-4 xl:border-0 border-b-2 border-gray-600">
        <div className="border-b-2 border-gray-600">
          <div className="flex items-center justify-center">
            <img src={logo1} alt="logo" className="h-[70px]" />
            <h1 className="text-2xl font-serif">ADITYA'S CHAT ROOM</h1>
          </div>
          <div className="flex justify-end md:justify-center">
            <p className="text-md mb-2 xl:mt-[-20px] mr-8 md:mr-0">
              App version 2.0.0
            </p>
            <button
              onClick={toggleSidebar}
              className={`md:hidden p-1 mr-2 mt-[-10px]`}
            >
              <FaX className="text-2xl text-white" />
            </button>
          </div>
        </div>
        <div className=" flex flex-col">
          <div className="text-start text-2xl xl:text-xl mt-6">
            <div className="flex items-center mt-2 ml-4 hover:border-2 rounded-full p-2 w-[70%] min-w-fit hover:bg-[#023020] ">
              <RiMessage3Line className="text-2xl mr-2" />
              <h2>Get Started</h2>
            </div>
            <div className="flex items-center mt-2 ml-4 hover:border-2 rounded-full p-2 w-[70%] min-w-fit hover:bg-[#023020]">
              <RiMessage3Line className="text-2xl mr-2" />
              <h2>How it works?</h2>
            </div>
            <div className="flex items-center mt-2 ml-4 mb-4 hover:border-2 rounded-full p-2 w-[70%] min-w-fit hover:bg-[#023020]">
              <RiMessage3Line className="text-2xl mr-2" />
              <h2>What is it?</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full mt-3 xl:hidden overflow-y-scroll no-scrollbar mb-4">
        <TextContainer users={users} />
      </div>

      <div className="w-full flex flex-col font-serif mb-6">
        <div className="bg-gradient-to-b from-[#171717] to-[#242424] border-2 border-[#fff] p-4 rounded-xl mr-4 ml-4 md:ml-0 shadow-sm">
          <div className="flex justify-center xl:gap-5 gap-2 items-center">
            <img
              className="mt-1"
              height="50px"
              width="50px"
              src={logo1}
              alt=""
            />
            <div className="flex flex-col ">
              <span className="text-md">Aditya Pratap Singh</span>
              <span className="text-xs text-fuchsia-200">
                {" "}
                pratapaditya84@gmail.com
              </span>
            </div>
          </div>

          <div className=" flex items-center justify-center mt-4">
            <button className="flex h-10 w-full border-[#fff] border-2 rounded-full justify-center p-[0.3rem]">Contact Developer <MdArrowOutward className="mt-1 text-lg"/></button>
          </div>
        </div>

        <div className="mt-4 mr-4 h-10 rounded-lg justify-center gap-2 xl:gap-8 hidden md:flex">
          <button
            onClick={change}
            className={
              "w-[110px] bg-gradient-to-b from-[#171717] to-[#242424] border-2 border-[#fff] rounded-full flex justify-end items-center p-1 shadow-sm"
            }
          >
            {light ? (
              <p className="mr-4 flex">
                Dark <IoMoonSharp className="ml-3 mt-1" />
              </p>
            ) : (
              <p className="mr-4 flex">
                Light <GoSun className="ml-3 mt-1" />
              </p>
            )}
          </button>
          <Link to="/">
          <button
            className={
              "w-[110px] bg-gradient-to-b from-[#171717] to-[#242424] border-2 border-[#fff] rounded-full flex justify-end items-center p-1 shadow-sm"
            }
          >
            
            <p className="mr-4">Logout</p>
            <MdLogout className="mr-2" />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
