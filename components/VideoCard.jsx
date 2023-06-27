"use client";
import SVG from "react-inlinesvg";

const VideoCard = ({
  imagePath,
  profilePicPath,
  title,
  creator,
  views,
  timeAgo,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <img className="max-h-[203px] max-w-[360px] rounded-xl" src={imagePath} />
      <div className="group flex cursor-pointer justify-between">
        <div className="flex gap-3">
          <div>
            <img className="h-9 rounded-full" src={profilePicPath} alt="pf" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold">{title}</div>
            <div className="flex flex-col text-sm text-[#aaaaaa]">
              <div className="">{creator}</div>
              <div className="flex items-center gap-1.5 ">
                <div>{views} Views</div>
                <div className="h-1 w-1 rounded-full bg-[#aaaaaa]" />
                <div>{timeAgo}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden group-hover:flex">
          <SVG
            src="icons/outlined/triple-dot.svg"
            className="h-6 fill-white"
            loader={<div className="w-6 " />}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
