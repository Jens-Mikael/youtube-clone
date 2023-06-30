"use client";
import { specific, toggle } from "@/redux/slices/sidebarSlice";
import OnClickAnimation from "./OnClickAnimation";
import Searchbar from "./Searchbar";
import SVG from "react-inlinesvg";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

const Topbar = () => {
  const dispatch = useDispatch();
  const defaultHideSidebar = useMediaQuery({ query: "(max-width: 1280px)" });

  useEffect(() => {
    dispatch(specific(!defaultHideSidebar));

  })

  return (
    <>
      <div className="fixed top-0 z-10 flex w-full justify-between bg-[#0f0f0f] py-2 pl-4 pr-10">
        {/* LOGO AND HAM */}
        <div className="flex items-center gap-5">
          <button onClick={() => dispatch(toggle())}>
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
              className="h-8 min-w-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
