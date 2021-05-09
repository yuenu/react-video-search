import React, { useState, useEffect } from "react";

// Components
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

// Hooks
import useVideo from '../hooks/useVideos'


// Type
import type { Item } from '../apis/youtube'

const App: React.FC = () => {
  // const [videos, setVideos] = useState<Item[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Item | null>(null)

  const [videos, search] = useVideo('buliding')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className="ui container" style={{ marginTop: "2rem" }}>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={(video: Item) => setSelectedVideo(video)}
              videos={videos}
            />
          </div>
        </div>
      </div> 
    </div>
  );
};
export default App;
