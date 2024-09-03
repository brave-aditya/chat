import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const TextContainer = ({ users }) => {
  return (
    <div className="p-2 xl:border border-gray-300 rounded-xl h-full shadow-md xl:bg-[#f8f9fa] xl:dark:bg-[#24293e]">
      <h1 className="text-2xl text-center font-semibold font-serif mt-2 mb-4 underline">
        People currently chatting:
      </h1>
      <div className="overflow-y-scroll no-scrollbar xl:h-[90%]">
        {users ? (
          <div>
            {users.map(({ name }) => (
              <div key={name} className="flex space-y-2">
                <br />
                <div className="flex p-1 rounded-md border-white xl:border-black xl:dark:border-white border-b-2 border-r-2">
                  <FaUserLarge className="text-2xl mt-1" />
                  <GoDotFill className="text-green-500 ml-[-5px] xl:ml-[-7px]" />
                </div>
                <p className="ml-4 text-xl">{name}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TextContainer;
