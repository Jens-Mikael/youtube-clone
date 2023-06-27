import VideoCard from "@/components/VideoCard";
import { videoCardData } from "@/data";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen">
        <div className="grid grid-cols-1 gap-4 sm:gap-10 2xl:grid-cols-4 ml-[240px] mt-[56px] py-8 px-4">
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
