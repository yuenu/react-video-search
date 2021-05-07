import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


// Type
import type { RootObject, Item } from '../apis/youtube'

const App: React.FC = () => {
  const [videos, setVideos] = useState<Item[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Item | null>(null)

  useEffect(() => {
    onTermSubmit('buildings')
  }, [])


  const onTermSubmit = async (term: string) => {
    const { data }: { data: RootObject} = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(data.items)
    setSelectedVideo(data.items[0])
  };

  const onVideoSelect = (video: Item) => {
    setSelectedVideo(video)
  }


  return (
    <div className="ui container" style={{ marginTop: "2rem" }}>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={videos}
            />
          </div>
        </div>
      </div> 
    </div>
  );
};
export default App;
