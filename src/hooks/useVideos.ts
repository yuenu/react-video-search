import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

// Type
import type { Item, RootObject } from "../apis/youtube";

type Hook = (
  defaultSearchTerm: string
) => [videos: Item[], search: (term: string) => Promise<void>];

const useVideos: Hook = (defaultSearchTerm) => {
  const [videos, setVideos] = useState<Item[]>([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term: string) => {
    const { data }: { data: RootObject } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(data.items);
  };

  return [videos, search];
};

export default useVideos;
