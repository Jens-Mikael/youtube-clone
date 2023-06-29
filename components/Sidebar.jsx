"use client";
import { useDispatch, useSelector } from "react-redux";
import { specific, toggle } from "@/redux/slices/sidebarSlice";
import SVG from "react-inlinesvg";
import { sidebarData } from "@/data";
import OnClickAnimation from "./OnClickAnimation";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.value);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`${
          !isSidebarOpen && "-translate-x-full"
        } fixed bottom-0  top-0 z-20 flex max-w-[236px] flex-col gap-3 overflow-y-auto bg-[#0f0f0f] pb-[18px] transition-transform duration-200 xl:top-[58px] xl:transition-none`}
      >
        <div className="my-[9px] ml-4 flex items-center gap-5 xl:hidden">
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
        <div className="flex flex-col gap-3 pl-3">
          <div>
            {sidebarData.open[1].map((i) => (
              <div className="flex h-10 w-[204px] cursor-pointer items-center gap-5 rounded-lg bg-white bg-opacity-0 px-3 py-2 font-light first:bg-opacity-10 first:font-normal hover:bg-opacity-10 first:hover:bg-opacity-20">
                <SVG
                  className="h-6 fill-white"
                  src={i.iconPath}
                  loader={<div className="h-6 w-6" />}
                />
                <div className=" text-sm">{i.title}</div>
              </div>
            ))}
          </div>
          <div className=" mr-3 border-t border-white border-opacity-20" />
          <div>
            {sidebarData.open[2].map((i) => (
              <div className="flex h-10 w-[204px] cursor-pointer items-center gap-5 rounded-lg bg-white bg-opacity-0 px-3 py-2 font-light hover:bg-opacity-10">
                <SVG
                  className="h-6 fill-white"
                  src={i.iconPath}
                  loader={<div className="h-6 w-6" />}
                />
                <div className="text-sm">{i.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SUBSRIPTIOMS */}
        <div className=" mr-3 border-t border-white border-opacity-20" />
        <div className="flex flex-col pl-3 pr-4">
          <div className="text-md px-3 py-1">Subscriptions</div>
          {sidebarData.open[3].map((i) => (
            <div className="flex h-10 w-[204px] cursor-pointer items-center gap-5 rounded-lg bg-white bg-opacity-0 px-3 py-2 font-light hover:bg-opacity-10">
              <img src={i.iconPath} className="h-6 rounded-full" />
              <div className=" text-sm">{i.title}</div>
            </div>
          ))}
          <div className="flex h-10 w-[204px] cursor-pointer items-center gap-5 rounded-lg bg-white bg-opacity-0 px-3 py-2 font-light hover:bg-opacity-10">
            <SVG
              className="h-6 fill-white"
              src="icons/outlined/arrow-down.svg"
              loader={<div className="h-6 w-6" />}
            />
            <div className=" text-sm">Show more</div>
          </div>
        </div>

        {/* EXPLORE */}
        <div className=" mr-3 border-t border-white border-opacity-20" />
        <div className="flex flex-col pl-3 pr-4">
          <div className="text-md px-3 py-1">Explore</div>
          {sidebarData.open[4].map((i) => (
            <div className="flex h-10 w-[204px] cursor-pointer items-center gap-5 rounded-lg bg-white bg-opacity-0 px-3 py-2 font-light hover:bg-opacity-10">
              <SVG
                className="h-6 fill-white"
                src={i.iconPath}
                loader={<div className="h-6 w-6" />}
              />
              <div className=" text-sm">{i.title}</div>
            </div>
          ))}
        </div>

        {/* MORE FROM YT */}
        <div className=" mr-3 border-t border-white border-opacity-20" />
        <div className="flex flex-col pl-3 pr-4">
          <div className="text-md px-3 py-1">More from Youtube</div>
          {sidebarData.open[5].map((i) => (
            <div className="flex h-10 w-[204px] cursor-pointer items-center gap-5 rounded-lg bg-white bg-opacity-0 px-3 py-2 font-light hover:bg-opacity-10">
              <SVG
                className="h-6 fill-white"
                src={i.iconPath}
                loader={<div className="h-6 w-6" />}
              />
              <div className=" text-sm">{i.title}</div>
            </div>
          ))}
        </div>

        {/* SETTINGS ETC. */}
        <div className=" mr-3 border-t border-white border-opacity-20" />
        <div className="flex flex-col pl-3 pr-4">
          {sidebarData.open[6].map((i) => (
            <div className="flex h-10 w-[204px] cursor-pointer items-center gap-5 rounded-lg bg-white bg-opacity-0 px-3 py-2 font-light hover:bg-opacity-10">
              <SVG
                className="h-6 fill-white"
                src={i.iconPath}
                loader={<div className="h-6 w-6" />}
              />
              <div className="text-sm">{i.title}</div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className=" mr-3 border-t border-white border-opacity-20" />
        <div className="flex flex-col gap-[18px]">
          <div className="flex flex-col gap-3 text-sidebarFooter font-semibold text-[#aaaaaa]">
            <div className="flex max-w-[204px] flex-wrap items-center gap-1 px-6 ">
              {sidebarData.open.footer[1].map((i) => (
                <div className=" cursor-pointer">{i}</div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-1 pl-6 ">
              {sidebarData.open.footer[2].map((i) => (
                <div className=" cursor-pointer">{i}</div>
              ))}
            </div>
          </div>
          <div className="px-6 text-xs text-[#717171]">© 2023 Google LLC</div>
        </div>
      </div>

      {/* OPACITY EFFECT FOR SCREENS LOWER THAN XL */}

      <div
        className={`${
          isSidebarOpen ? "z-10 opacity-50" : "z-[-1] opacity-0"
        } absolute inset-0 bg-black transition-opacity xl:hidden`}
        onClick={() => dispatch(specific(false))}
      />

      <div
        className={`${
          isSidebarOpen && "-translate-x-full"
        } fixed top-[58px] hidden min-h-screen min-w-fit flex-col overflow-scroll px-1 md:flex`}
      >
        {sidebarData.closed.map((i) => (
          <div className=" flex w-16 cursor-pointer flex-col items-center rounded-xl py-5 hover:bg-white hover:bg-opacity-10">
            <SVG
              className="h-6 fill-white"
              src={i.iconPath}
              loader={<div className="h-6" />}
            />
            <div className="text-2xs">{i.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
