import React from "react";
import VideoItem from "./VideoItems";

// Type
import type { Item } from "../apis/youtube";

type Props = {
  videos: Item[];
  onVideoSelect: (video: Item) => void;
};

const VideoList: React.FC<Props> = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
