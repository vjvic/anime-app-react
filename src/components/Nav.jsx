import React from "react";

const Nav = () => {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg mb-10">
      <div className="container mx-auto flex flex-wrap items-center justify-between ">
        <div>
          <a
            className="text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1 text-xl"
            href="/"
          >
            Animeapp
          </a>
        </div>

        <div className="flex">
          <input
            type="text"
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="search anime"
          />
          <button className=" bg-sky-600 px-3 text-white rounded ">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
