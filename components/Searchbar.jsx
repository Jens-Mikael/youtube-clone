"use client";
import { useState } from "react";
import SVG from "react-inlinesvg";

const Searchbar = () => {
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div className="mx-1 flex w-full max-w-[728px]">
      {/* SEARCH BAR */}
      <div className="w-10 h-full" />
      {/* INPUT  */}
      <div
        className={`${!focus && "ml-[29px]"} relative flex flex-1 items-center rounded-l-full bg-[#121212]`}
      >
        <input
          placeholder="Search"
          type="text"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="peer max-w-full w-full rounded-l-full border border-white border-opacity-10 bg-transparent py-2 pl-5 pr-[60px] outline-none focus:border-sky-600 focus:pl-[49px]"
        />

        <div className="absolute left-0 ml-4 mr-3 hidden peer-focus:inline">
          <SVG
            src="icons/outlined/search-glass.svg"
            className="h-6 fill-white"
            loader={<div className="w-6" />}
          />
        </div>

        <div
          className={`absolute right-0 ml-4 mr-3 ${
            input === "" ? "hidden" : "flex"
          }`}
        >
          <SVG src="icons/outlined/x-remove.svg" className="h-6 fill-white" />
        </div>

        <div className="flex items-center rounded-r-full border border-white border-opacity-10 bg-white bg-opacity-[8%] px-5 py-2">
          <SVG
            src="icons/outlined/search-glass.svg"
            className="h-6 fill-white"
            loader={<div className="h-6 w-6" />}
          />
        </div>
        <div className="ml-2 flex items-center rounded-full bg-white bg-opacity-5 p-2 hover:bg-opacity-[0.15]">
          <SVG
            src="icons/filled/mic.svg"
            className="h-6 fill-white"
            loader={<div className="h-6 w-6" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
