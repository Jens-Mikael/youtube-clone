"use client";
import { useState } from "react";
import OnClickAnimation from "./OnClickAnimation";
import Searchbar from "./Searchbar";
import { sidebarData } from "@/data";
import SVG from "react-inlinesvg";

const TopSideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <>
      <div className="fixed top-0 flex w-full justify-between py-2 pl-2 pr-10">
        {/* LOGO AND HAM */}
        <div className="flex items-center gap-3">
          <button onClick={() => setIsSidebarOpen((prev) => !prev)}>
            <OnClickAnimation
              onClickProps="duration-500 group-active:bg-opacity-20"
              notOnClickProps="duration-100 group-hover:bg-opacity-10"
              bgClassName="bg-white absolute inset-0 -z-10 rounded-full transition-all bg-opacity-0  group-active:bg-opacity-20"
              className="group relative flex cursor-pointer items-center rounded-full p-2"
            >
              <SVG
                src="icons/outlined/hamburger-menu.svg"
                className="h-6 fill-white"
                loader={<div className="w-6" />}
              />
            </OnClickAnimation>
          </button>
          <div>
            <SVG
              className="h-5 fill-white"
              src="icons/colored/youtube-logo.svg"
              loader={<div className="w-[90px]" />}
            />
          </div>
        </div>

        <Searchbar />

        <div className="flex gap-4">
          <div className="flex items-center rounded-full p-2 hover:bg-white hover:bg-opacity-10">
            <SVG
              src="icons/outlined/add-video.svg"
              className="h-6 fill-white"
              loader={<div className="w-6 " />}
            />
          </div>
          <div className="flex items-center rounded-full p-2 hover:bg-white hover:bg-opacity-10">
            <SVG
              src="icons/outlined/bell.svg"
              className="h-6 fill-white"
              loader={<div className="w-6 " />}
            />
          </div>
          <div className="flex items-center">
            <img
              src="icons/colored/profile-pic.jpeg"
              className="h-8 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* SIDEBAR */}

      {isSidebarOpen ? (
        <>
          {/* OPEN */}
          <div className="fixed top-[58px] min-h-screen w-40 overflow-scroll"></div>
        </>
      ) : (
        <>
          {/* CLOSED */}
          <div className="fixed top-[58px] flex min-h-screen min-w-fit flex-col overflow-scroll px-1">
            {sidebarData.closed.map((i) => (
              <div className="flex w-16 cursor-pointer flex-col items-center rounded-xl py-5 hover:bg-white hover:bg-opacity-10">
                <SVG className="h-6 fill-white" src={i.iconPath} loader={<div className="h-6" />} />
                <div className="text-2xs">{i.title}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default TopSideBar;
