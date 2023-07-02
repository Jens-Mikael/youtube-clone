"use client";
import { suggestionBarData } from "@/data";
import { useSelector } from "react-redux";
import SVG from "react-inlinesvg";
import { useEffect, useState } from "react";

const SuggestionBar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.value);
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(true);

  const handleOnScroll = () => {
    const suggContainer = document.getElementById("suggContainer");
    if (
      suggContainer.scrollLeft + suggContainer.offsetWidth >=
      suggContainer.scrollWidth
    ) {
      setIsEnd(true);
    } else {
      if (suggContainer.scrollLeft <= 0) {
        setIsStart(true);
      } else setIsStart(false);
      setIsEnd(false);
    }
  };

  return (
    <div
      id="suggContainer"
      onScroll={handleOnScroll}
      className={`no-scrollbar fixed left-2 right-8 top-[58px] z-10 flex items-center gap-3 overflow-x-auto bg-[#0f0f0f] pb-5 pr-0 pt-3 md:left-[72px] ${
        isSidebarOpen && "xl:left-[240px]"
      } `}
    >
      <div
        onClick={() =>
          document
            .getElementById("start")
            .scrollIntoView({ behavior: "smooth" })
        }
        className={`fixed z-20  h-14 w-[106px] items-center justify-start bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f] to-transparent ${
          isSidebarOpen ? "md:left-[72px] xl:left-[240px]" : "md:left-[72px]"
        } ${isStart ? "hidden" : "flex"}`}
      >
        <div className="flex items-center rounded-full p-2 hover:bg-white hover:bg-opacity-10">
          <SVG
            src="icons/outlined/arrow-left.svg"
            className="h-6 fill-white"
            loader={<div className="h-6 w-6" />}
          />
        </div>
      </div>
      <div
        onClick={() =>
          document.getElementById("end").scrollIntoView({ behavior: "smooth" })
        }
        className={`fixed right-2 z-20 h-14 w-[106px] items-center justify-end bg-gradient-to-l from-[#0f0f0f] via-[#0f0f0f] to-transparent ${
          isEnd ? "hidden" : "flex"
        }`}
      >
        <div className="flex items-center rounded-full p-2 hover:bg-white hover:bg-opacity-10">
          <SVG
            src="icons/outlined/arrow-right.svg"
            className="h-6 fill-white"
            loader={<div className="h-6 w-6" />}
          />
        </div>
      </div>

      {/* THE CONTAINER */}
      <div id="start" />
      <div className="flex items-center gap-3">
        {suggestionBarData.map((i) => (
          <div
            key={i}
            className=" h-min w-max whitespace-nowrap break-normal rounded-lg bg-white bg-opacity-10 px-3 py-1.5 text-sm first:bg-opacity-100 first:text-[#0f0f0f]"
          >
            {i}
          </div>
        ))}
      </div>
      <div id="end" />
    </div>
  );
};

export default SuggestionBar;
