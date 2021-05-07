import React from "react";

// Style
import "./VideoItem.css";

// Type
import type { Item } from "../apis/youtube";

type Props = {
  video: Item;
  onVideoSelect: (video: Item) => void;
};

const VideoItem: React.FC<Props> = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video_item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
