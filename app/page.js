"use client";
import VideoCard from "@/components/VideoCard";
import { videoCardData } from "@/data";
import { useSelector } from "react-redux";

export default function Home() {
  const isSidebarOpen = useSelector(state => state.sidebar.value);
  return (
    <div>
      <div className="flex min-h-screen justify-center">
        <div
          className={` mt-[100px] ${isSidebarOpen ? "md:ml-[72px] xl:ml-[240px]" : "md:ml-[72px]"} grid  w-fit grid-cols-1 gap-3 pl-4 pr-8 py-8 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4`}
        >
          {videoCardData.map((i) => (
            <VideoCard
              imagePath={i.imagePath}
              profilePicPath={i.profilePicPath}
              title={i.title}
              creator={i.creator}
              views={i.views}
              timeAgo={i.timeAgo}
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
