import axios from "axios";

const KEY = "AIzaSyCs74COIjvF20Nf-Su3NIFlmCSQ0iAy_g4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
