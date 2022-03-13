import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "./Button";

const Nav = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (name) {
      navigate(`/results/${name}`);
      setName("");
    }
  };

  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg mb-10">
      <div className="container mx-auto flex flex-wrap items-center justify-between ">
        <div>
          <Link
            className="text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1 text-xl"
            to="/"
          >
            Animeapp
          </Link>
        </div>

        <form className="flex" onSubmit={handleSearch}>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button text={"Search"} />
        </form>
      </div>
    </nav>
  );
};

export default Nav;
