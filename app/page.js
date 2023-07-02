"use client";
import VideoCard from "@/components/VideoCard";
import { videoCardData } from "@/data";
import { useSelector } from "react-redux";

export default function Home() {
  const isSidebarOpen = useSelector((state) => state.sidebar.value);
  return (
    <div>
      <div className="flex min-h-screen justify-center">
        <div
          className={` mt-[100px] ${
            isSidebarOpen && " xl:ml-[240px]"
          } grid w-fit grid-cols-1 gap-3 py-8 pl-4 pr-8 sm:grid-cols-2 md:ml-[72px] lg:grid-cols-3  xl:grid-cols-4`}
        >
          {videoCardData.map((i) => (
            <VideoCard
              imagePath={i.imagePath}
              profilePicPath={i.profilePicPath}
              title={i.title}
              creator={i.creator}
              views={i.views}
              timeAgo={i.timeAgo}
              key={i.imagePath}
            />
          ))}
          {videoCardData.map((i) => (
            <VideoCard
              imagePath={i.imagePath}
              profilePicPath={i.profilePicPath}
              title={i.title}
              creator={i.creator}
              views={i.views}
              timeAgo={i.timeAgo}
              key={i.imagePath}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
