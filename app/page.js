"use client"
import VideoCard from "@/components/VideoCard";
import { videoCardData } from "@/data";
import { useSelector } from "react-redux";

export default function Home() {
  const isSidebarOpen = useSelector((state) => state.sidebar.value);
  return (
    <div>
      <div className="flex min-h-screen justify-center">
        <div
          className={`${
            isSidebarOpen ? "ml-[240px]" : "ml-[72px]"
          } ml-[240px] mt-[56px]  grid w-fit grid-cols-1 gap-3 px-4 py-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`}
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
      <div class="min-h-screen"></div>
    </div>
  );
}
