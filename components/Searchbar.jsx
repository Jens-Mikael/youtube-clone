"use client";
import { useEffect, useRef, useState } from "react";
import SVG from "react-inlinesvg";
import { useMediaQuery } from "react-responsive";

const Searchbar = () => {
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useState("");
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);

  const searchbarRef = useRef(null);
  const smallerThanMD = useMediaQuery({ query: "(max-width: 1280px)" });

  useEffect(() => {
    if (smallerThanMD) searchbarRef.current.focus();
  });

  return (
    <>
      {/* CLOSED SEARCHBAR ON SCREENS SMALLER THAN MD */}
      <div
        className={`${
          isSearchbarOpen ? "hidden" : "md:hidden"
        } mx-4 flex w-full max-w-[728px] justify-end`}
      >
        <div
          onClick={() => {
            setIsSearchbarOpen(true);
          }}
          className="flex items-center rounded-full p-2 hover:bg-white hover:bg-opacity-10"
        >
          <SVG
            src="icons/outlined/search-glass.svg"
            className="h-6 fill-white"
            loader={<div className="w-6" />}
          />
        </div>
      </div>

      {/* SEARCH BAR */}
      <div
        className={`${
          isSearchbarOpen
            ? "absolute inset-x-0 z-30 bg-[#0f0f0f] px-3"
            : "hidden"
        } mx-1 flex w-full max-w-[728px] gap-2 md:static  md:z-0 md:flex  md:bg-transparent`}
      >
        {/* RETURN BUTTON */}
        <div
          onClick={() => setIsSearchbarOpen(false)}
          className={`${
            isSearchbarOpen ? "flex md:hidden" : "hidden"
          } items-center rounded-full p-2 hover:bg-white hover:bg-opacity-10`}
        >
          <SVG
            src="icons/outlined/arrow-return.svg"
            className="h-6 fill-white"
            loader={<div className="w-6" />}
          />
        </div>

        <div
          className={`${isSearchbarOpen ? "hidden md:flex" : ""} h-full w-10`}
        />

        {/* INPUT  */}
        <div
          className={`${
            !focus && "ml-[29px]"
          } relative flex flex-1 items-center rounded-full bg-[#121212]`}
        >
          <input
            placeholder="Search"
            type="text"
            ref={searchbarRef}
            onFocus={() => setFocus(true)}
            onBlur={() => {
              setFocus(false);
              setIsSearchbarOpen(false);
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="peer w-full max-w-full rounded-l-full border border-white border-opacity-10 bg-transparent py-2 pl-5 pr-[60px] outline-none focus:border-sky-600 focus:pl-[49px]"
          />

          <div className="absolute left-0 ml-4 mr-3 hidden peer-focus:inline">
            <SVG
              src="icons/outlined/search-glass.svg"
              className="h-6 fill-white"
              loader={<div className="w-6" />}
            />
          </div>

          <div
            className={`absolute cursor-pointer right-0 ml-4 mr-[76px] ${
              input === "" ? "hidden" : "flex"
            }`}
            onClick={() => setInput("")}
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
        </div>
        <div className="flex items-center rounded-full bg-white bg-opacity-5 p-2 hover:bg-opacity-[0.15]">
          <SVG
            src="icons/filled/mic.svg"
            className="h-6 fill-white"
            loader={<div className="h-6 w-6" />}
          />
        </div>
      </div>
    </>
  );
};

export default Searchbar;
