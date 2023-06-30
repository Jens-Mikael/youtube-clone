"use client";
import { suggestionBarData } from "@/data";
import { useSelector } from "react-redux";

const SuggestionBar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.value);
  return (
    <div
      className={`fixed right-8 top-[58px] z-10 flex gap-3 overflow-x-auto bg-[#0f0f0f] pt-3 pl-3 pb-5 pr-0 ${
        isSidebarOpen ? "md:left-[72px] xl:left-[240px]" : "md:left-[72px]"
      } `}
    >
      {suggestionBarData.map((i) => (
        <div className=" h-min w-max whitespace-nowrap break-normal rounded-lg bg-white bg-opacity-10 px-3 py-1.5 text-sm">
          {i}
        </div>
      ))}
    </div>
  );
};

export default SuggestionBar;
