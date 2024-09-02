import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../InfoBar/InfoBar";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import { useLocation } from "react-router-dom";
import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import { IoMoonSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoSun } from "react-icons/go";

let socket;
const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "https://chatbackend-84xx.onrender.com/";
  const [light, setLight] = useState(true);

  const change = () => {
    setLight(!light);
    document.body.classList.toggle("dark");
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
        document.location = "/";
      }
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.off();
    };
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#010203] via-[#023020] to-[#010203] h-screen text-white items-end sm:items-center justify-center overflow-y-auto no-scrollbar">
      <div
        className={`navbar flex text-white h-[40px] justify-between p-3 text-xl sm:hidden
        ${isOpen ? "blur-[2px] duration-300" : "blur-0"}
      `}
      >
        <button onClick={toggleSidebar} className="p-1">
          <RxHamburgerMenu className=" text-3xl ml-2 mt-[-3px]" />
        </button>
        <p className="text-2xl font-serif">Room {room.slice(0, 8)}</p>
        <div className="flex text-3xl gap-5">
          <button className="">
            {light ? (
              <IoMoonSharp onClick={change} />
            ) : (
              <GoSun onClick={change} />
            )}
          </button>

          <button className="">
            <Link to="/">
              <MdLogout />
            </Link>
          </button>
        </div>
      </div>

      <div className="flex sm:h-screen h-[calc(100%-40px)] p-4">
        <div className="xl:w-[25%] sm:w-[36%] hidden sm:block">
          <InfoBar users={users} />
        </div>

        <div
          className={`top-0 right-0 h-screen z-20 w-[70%] sm:hidden absolute bg-gradient-to-b from-[#010203] via-[#023020] to-[#010203] ${
            isOpen ? "left-0" : "left-[-70%]"
          } transition-all duration-300 ease-in-out flex`}
        >
          <InfoBar users={users} isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>

        <div
          className={`flex flex-col h-full max-h-[100%] rounded-xl xl:rounded-r-none xl:w-[50%] sm:w-[67%] w-[100%] p-2 bg-white dark:bg-[#282C35] mb-2 justify-between ${
            isOpen ? "blur-[2px] duration-300" : "blur-0"
          }`}
        >
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>

        <div className="w-[25%] hidden xl:block rounded-r-xl bg-white dark:bg-[#282C35] text-black dark:text-white p-3">
          <TextContainer users={users} room={room} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
